/* ===========================================================================
   Step 1 study app — router, state, storage layer.
   Vanilla JS, no dependencies, works from file:// with no server.
   ======================================================================== */
(function () {
  'use strict';

  /* =========================================================================
     STORAGE LAYER
     Every read/write goes through save()/load() below. localStorage is
     wrapped in try/catch; if it is unavailable (private mode, disabled,
     full), we fall back to a plain in-memory object so the app keeps
     working for the session, and we tell her so once, calmly.
     ====================================================================== */

  var PREFIX = 'step1.';        // every key we own starts with this
  var memory = {};              // in-memory fallback store (raw JSON strings)
  var storageOk = (function () {
    try {
      var probe = PREFIX + 'probe';
      localStorage.setItem(probe, '1');
      localStorage.removeItem(probe);
      return true;
    } catch (e) {
      return false;
    }
  })();

  function save(key, value) {
    var raw = JSON.stringify(value);
    if (storageOk) {
      try {
        localStorage.setItem(PREFIX + key, raw);
        return;
      } catch (e) {
        /* storage may have filled up mid-session; fall through to memory */
      }
    }
    memory[PREFIX + key] = raw;
  }

  function load(key, fallback) {
    var raw = null;
    if (storageOk) {
      try { raw = localStorage.getItem(PREFIX + key); } catch (e) { raw = null; }
    }
    if (raw === null && (PREFIX + key) in memory) raw = memory[PREFIX + key];
    if (raw === null) return fallback;
    try { return JSON.parse(raw); } catch (e) { return fallback; }
  }

  /* Collect all app data (storage + memory fallback) as one plain object,
     keyed without the prefix. Used by export. */
  function allData() {
    var out = {};
    var k, i;
    if (storageOk) {
      try {
        for (i = 0; i < localStorage.length; i++) {
          k = localStorage.key(i);
          if (k && k.indexOf(PREFIX) === 0) {
            try { out[k.slice(PREFIX.length)] = JSON.parse(localStorage.getItem(k)); }
            catch (e) { /* skip unparseable entry rather than fail the export */ }
          }
        }
      } catch (e) { /* fall through to memory */ }
    }
    for (k in memory) {
      if (k.indexOf(PREFIX) === 0) {
        try { out[k.slice(PREFIX.length)] = JSON.parse(memory[k]); }
        catch (e) { /* skip */ }
      }
    }
    return out;
  }

  /* =========================================================================
     ONE-TIME NOTICE
     ====================================================================== */

  function showNotice(text) {
    var el = document.getElementById('notice');
    el.textContent = text;
    el.hidden = false;
  }

  /* =========================================================================
     THEME
     "auto" (default) = dark between 8pm and 7am, otherwise follow the
     device's light/dark preference. She can pin light or dark in Settings.
     ====================================================================== */

  function applyTheme() {
    var pref = load('settings.theme', 'auto');
    var dark;
    if (pref === 'dark') {
      dark = true;
    } else if (pref === 'light') {
      dark = false;
    } else {
      var hour = new Date().getHours();
      if (hour >= 20 || hour < 7) {
        dark = true;
      } else {
        dark = window.matchMedia &&
               window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    }
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }

  /* =========================================================================
     ROUTER
     Hash-based: #/today, #/quiz, ... Works offline from file:// because it
     never touches the network — it just shows/hides <section> elements.
     ====================================================================== */

  var VIEWS = {
    today:     'Today',
    quiz:      'Quiz',
    errors:    'Error log',
    progress:  'Progress',
    glossary:  'Glossary',
    resources: 'Resources',
    timer:     'Timer',
    more:      'More',
    settings:  'Settings'
  };

  function currentRoute() {
    var name = location.hash.replace(/^#\//, '');
    return VIEWS.hasOwnProperty(name) ? name : 'today';
  }

  function route() {
    var name = currentRoute();
    var sections = document.querySelectorAll('.view');
    var i;
    for (i = 0; i < sections.length; i++) {
      sections[i].hidden = sections[i].getAttribute('data-view') !== name;
    }
    document.getElementById('view-title').textContent = VIEWS[name];
    document.title = VIEWS[name] + ' — Step 1';

    /* Highlight the active bottom-nav tab; "More" stays lit for the views
       that live under it. */
    var underMore = { progress: 1, glossary: 1, resources: 1, timer: 1, settings: 1 };
    var navName = underMore[name] ? 'more' : name;
    var links = document.querySelectorAll('.bottom-nav a');
    for (i = 0; i < links.length; i++) {
      if (links[i].getAttribute('data-nav') === navName) {
        links[i].setAttribute('aria-current', 'page');
      } else {
        links[i].removeAttribute('aria-current');
      }
    }

    /* Render whatever the newly-shown view needs (quiz, errors, performance). */
    renderCurrentView(name);

    /* Remember where she was, and move focus to the view for keyboard and
       screen-reader users. */
    save('ui.lastView', name);
    document.getElementById('main').focus({ preventScroll: true });
  }

  function renderCurrentView(name) {
    if (name === 'quiz') {
      /* Don't wipe an in-progress block just because the router re-ran. */
      if (!quiz) renderQuizSetup();
    } else if (name === 'errors') {
      renderErrors();
    } else if (name === 'progress') {
      renderPerformance();
    }
  }

  /* =========================================================================
     EXPORT / IMPORT
     Export: one JSON file with everything. Import: restores it. This is the
     backup plan and the device-transfer plan.
     ====================================================================== */

  function exportData() {
    var payload = {
      app: 'step1-study',
      version: 1,
      exportedAt: new Date().toISOString(),
      data: allData()
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)],
                        { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'step1-backup-' + new Date().toISOString().slice(0, 10) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setStatus('backup-status', 'Exported. The file is in your downloads.');
  }

  function importData(file) {
    var reader = new FileReader();
    reader.onload = function () {
      var payload;
      try {
        payload = JSON.parse(reader.result);
      } catch (e) {
        setStatus('backup-status', "That file couldn't be read as a backup. Nothing was changed.");
        return;
      }
      if (!payload || payload.app !== 'step1-study' || typeof payload.data !== 'object') {
        setStatus('backup-status', "That doesn't look like a backup from this app. Nothing was changed.");
        return;
      }
      var count = 0;
      for (var key in payload.data) {
        save(key, payload.data[key]);
        count++;
      }
      applyTheme();
      initSettingsFields();
      route();
      setStatus('backup-status', 'Restored ' + count + ' item' + (count === 1 ? '' : 's') + '.');
    };
    reader.onerror = function () {
      setStatus('backup-status', "Couldn't read that file. Nothing was changed.");
    };
    reader.readAsText(file);
  }

  function setStatus(id, text) {
    document.getElementById(id).textContent = text;
  }

  /* =========================================================================
     SETTINGS VIEW WIRING
     ====================================================================== */

  function initSettingsFields() {
    document.getElementById('theme-select').value = load('settings.theme', 'auto');
    var note = load('test.note', '');
    document.getElementById('test-note').value = note;
    setStatus('test-note-status',
      note ? 'Saved. It will still be here after you close and reopen.' : '');
    setStatus('storage-status', storageOk
      ? 'Saving works in this browser. Data stays on this device only.'
      : 'This browser is blocking saved data, so changes last only until this tab closes. Export still works if you want to keep something.');
  }

  function initSettings() {
    initSettingsFields();

    document.getElementById('theme-select').addEventListener('change', function (e) {
      save('settings.theme', e.target.value);
      applyTheme();
    });

    document.getElementById('test-note').addEventListener('input', function (e) {
      save('test.note', e.target.value);
      setStatus('test-note-status',
        e.target.value ? 'Saved. It will still be here after you close and reopen.' : '');
    });

    document.getElementById('export-btn').addEventListener('click', exportData);

    var fileInput = document.getElementById('import-file');
    document.getElementById('import-btn').addEventListener('click', function () {
      fileInput.click();
    });
    fileInput.addEventListener('change', function (e) {
      if (e.target.files && e.target.files[0]) importData(e.target.files[0]);
      e.target.value = '';   /* allow re-importing the same file */
    });
  }

  /* =========================================================================
     SELF-TEST ENGINE + PERFORMANCE + ERROR LOG
     Data-driven from window.STEP1_QUESTIONS. All persistence goes through the
     save()/load() layer above, so it survives the in-memory fallback too.
     ====================================================================== */

  var BLOCK_SIZE = 10;      // questions pulled per self-test block

  /* How many questions a system must have been answered before "weakest 3"
     will rank it. Below this, we tell her plainly instead of guessing — a
     single lucky/unlucky answer should not label a whole system "weakest".
     (Flagged to Andres as a UX decision, not a silent default.) */
  var WEAKEST_MIN_ANSWERED = 5;

  var CONFIDENCE = [
    { key: 'knew',     label: 'Knew it cold' },
    { key: 'sure',     label: 'Fairly sure' },
    { key: 'narrowed', label: 'Narrowed it down' },
    { key: 'guess',    label: 'Guess' }
  ];

  var ERROR_TAGS = ['knowledge gap', 'misread', 'reasoning error'];

  var quiz = null;   // in-progress block state, or null when on the setup screen

  /* --- tiny DOM helper: el('div', {class:'x'}, [childNodes or strings]) --- */
  function el(tag, props, children) {
    var node = document.createElement(tag);
    if (props) {
      for (var k in props) {
        if (k === 'class') node.className = props[k];
        else if (k === 'text') node.textContent = props[k];
        else if (k === 'html') node.innerHTML = props[k];
        else if (k.indexOf('on') === 0 && typeof props[k] === 'function') {
          node.addEventListener(k.slice(2), props[k]);
        } else if (props[k] === true) {
          node.setAttribute(k, '');
        } else if (props[k] !== false && props[k] != null) {
          node.setAttribute(k, props[k]);
        }
      }
    }
    if (children != null) {
      if (!Array.isArray(children)) children = [children];
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (c == null) continue;
        node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      }
    }
    return node;
  }

  function bank() { return (window.STEP1_QUESTIONS || []); }

  function allSystems() {
    var seen = {}, out = [], b = bank(), i;
    for (i = 0; i < b.length; i++) {
      if (!seen[b[i].system]) { seen[b[i].system] = 1; out.push(b[i].system); }
    }
    out.sort();
    return out;
  }

  /* Fisher-Yates shuffle on a copy — used for both question selection and
     per-attempt option order (defeats the answer-position bias in the bank). */
  function shuffle(arr) {
    var a = arr.slice(), i, j, t;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---- performance store ----
     perf.bySystem[system] = { answered, correct,
       conf: { knew:{n,correct}, sure:{...}, narrowed:{...}, guess:{...} } } */
  function loadPerf() { return load('perf', { bySystem: {} }); }
  function savePerf(p) { save('perf', p); }

  function blankConf() {
    var c = {}, i;
    for (i = 0; i < CONFIDENCE.length; i++) c[CONFIDENCE[i].key] = { n: 0, correct: 0 };
    return c;
  }

  function recordAnswer(system, correct, confKey) {
    var p = loadPerf();
    if (!p.bySystem[system]) p.bySystem[system] = { answered: 0, correct: 0, conf: blankConf() };
    var s = p.bySystem[system];
    if (!s.conf) s.conf = blankConf();
    if (!s.conf[confKey]) s.conf[confKey] = { n: 0, correct: 0 };
    s.answered += 1;
    if (correct) { s.correct += 1; s.conf[confKey].correct += 1; }
    s.conf[confKey].n += 1;
    savePerf(p);
  }

  /* Weakest N systems by accuracy, considering only systems with enough data.
     Returns { systems:[...], ranked:<how many had data>, needData:bool }. */
  function weakestSystems(n) {
    var p = loadPerf(), ranked = [], sys;
    for (sys in p.bySystem) {
      var s = p.bySystem[sys];
      if (s.answered >= WEAKEST_MIN_ANSWERED) {
        ranked.push({ system: sys, acc: s.correct / s.answered });
      }
    }
    ranked.sort(function (a, b) { return a.acc - b.acc; });
    var pick = ranked.slice(0, n).map(function (r) { return r.system; });
    return { systems: pick, ranked: ranked.length, needData: ranked.length < n };
  }

  /* ---- error log store ----
     entry = { eid, ts, qid, system, topic, stem, correctText, selectedText,
               explanation, confidence, tag } */
  function loadErrors() { return load('errors', []); }
  function saveErrors(e) { save('errors', e); }

  function logMiss(q, selectedIndex, confKey) {
    var errors = loadErrors();
    errors.push({
      eid: 'e' + Date.now() + '-' + Math.floor(Math.random() * 1e6),
      ts: Date.now(),
      qid: q.id,
      system: q.system,
      topic: q.topic,
      stem: q.stem,
      correctText: q.options[q.answer],
      selectedText: q.options[selectedIndex],
      explanation: q.explanation,
      confidence: confKey,
      tag: ''
    });
    saveErrors(errors);
  }

  function confLabel(key) {
    for (var i = 0; i < CONFIDENCE.length; i++) if (CONFIDENCE[i].key === key) return CONFIDENCE[i].label;
    return key || '';
  }

  /* =========================================================================
     QUIZ — SETUP SCREEN
     ====================================================================== */

  function renderQuizSetup(message) {
    var root = document.getElementById('quiz-root');
    if (!root) return;
    root.innerHTML = '';
    quiz = null;

    if (!bank().length) {
      root.appendChild(el('p', { class: 'empty', text:
        'No questions are loaded yet. Once the question bank is in place, blocks of ' +
        BLOCK_SIZE + ' will run from here.' }));
      return;
    }

    root.appendChild(el('h2', { text: 'Self-test' }));
    root.appendChild(el('p', { class: 'hint', text:
      'Pick the systems to draw from. Each block is a random set of ' + BLOCK_SIZE +
      ' questions with the answer choices shuffled fresh every time.' }));

    /* quick-pick buttons */
    var quick = el('div', { class: 'btn-row' });
    quick.appendChild(el('button', { type: 'button', 'data-act': 'all',
      onclick: function () { setAllChecks(true); } }, 'All'));
    quick.appendChild(el('button', { type: 'button', 'data-act': 'none',
      onclick: function () { setAllChecks(false); } }, 'None'));
    quick.appendChild(el('button', { type: 'button', 'data-act': 'weakest',
      onclick: pickWeakest }, 'Weakest 3'));
    root.appendChild(quick);

    var note = el('p', { class: 'hint', id: 'weakest-note' });
    if (message) note.textContent = message;
    root.appendChild(note);

    /* system checkboxes */
    var list = el('div', { class: 'sys-picker', id: 'sys-picker' });
    var systems = allSystems();
    var perf = loadPerf();
    for (var i = 0; i < systems.length; i++) {
      var sys = systems[i];
      var count = bank().filter(function (q) { return q.system === sys; }).length;
      var s = perf.bySystem[sys];
      var sub = s && s.answered
        ? s.correct + '/' + s.answered + ' correct so far'
        : 'not tried yet';
      var id = 'sys-' + i;
      var row = el('label', { class: 'sys-row', 'for': id });
      row.appendChild(el('input', { type: 'checkbox', id: id, value: sys, class: 'sys-check' }));
      row.appendChild(el('span', { class: 'sys-name' }, [
        el('span', { text: sys }),
        el('span', { class: 'sys-sub', text: count + ' questions · ' + sub })
      ]));
      list.appendChild(row);
    }
    root.appendChild(list);

    root.appendChild(el('button', { type: 'button', class: 'primary-btn',
      onclick: onStartClick }, 'Start block'));
  }

  function setAllChecks(on) {
    var boxes = document.querySelectorAll('.sys-check');
    for (var i = 0; i < boxes.length; i++) boxes[i].checked = on;
    var note = document.getElementById('weakest-note');
    if (note) note.textContent = '';
  }

  function pickWeakest() {
    var res = weakestSystems(3);
    var note = document.getElementById('weakest-note');
    if (res.needData) {
      /* Do NOT silently substitute a fallback — say what's missing. */
      if (note) note.textContent =
        'Not enough data to rank yet. "Weakest 3" needs at least ' +
        WEAKEST_MIN_ANSWERED + ' answered questions in a system before it can ' +
        'rank it, and only ' + res.ranked + ' system(s) have that so far. ' +
        'Do a few mixed blocks first, then this will fill in.';
      return;
    }
    var boxes = document.querySelectorAll('.sys-check'), i;
    for (i = 0; i < boxes.length; i++) {
      boxes[i].checked = res.systems.indexOf(boxes[i].value) !== -1;
    }
    if (note) note.textContent = 'Selected your weakest 3 by accuracy: ' +
      res.systems.join(', ') + '.';
  }

  function onStartClick() {
    var boxes = document.querySelectorAll('.sys-check'), chosen = [], i;
    for (i = 0; i < boxes.length; i++) if (boxes[i].checked) chosen.push(boxes[i].value);
    if (!chosen.length) {
      var note = document.getElementById('weakest-note');
      if (note) note.textContent = 'Pick at least one system to start.';
      return;
    }
    startQuiz(chosen);
  }

  /* =========================================================================
     QUIZ — RUNNING A BLOCK
     ====================================================================== */

  function startQuiz(systems) {
    var pool = bank().filter(function (q) { return systems.indexOf(q.system) !== -1; });
    var picked = shuffle(pool).slice(0, Math.min(BLOCK_SIZE, pool.length));

    quiz = {
      systems: systems,
      items: picked.map(function (q) {
        return { q: q, order: shuffle([0, 1, 2, 3]), selected: null, confKey: null };
      }),
      idx: 0,
      correctCount: 0
    };
    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    var root = document.getElementById('quiz-root');
    if (!root || !quiz) return;
    root.innerHTML = '';

    var item = quiz.items[quiz.idx];
    var q = item.q;

    root.appendChild(el('p', { class: 'quiz-progress',
      text: 'Question ' + (quiz.idx + 1) + ' of ' + quiz.items.length +
            ' · ' + q.system }));
    root.appendChild(el('p', { class: 'quiz-stem', text: q.stem }));

    var opts = el('div', { class: 'opt-list' });
    for (var d = 0; d < item.order.length; d++) {
      (function (displayIndex, realIndex) {
        var btn = el('button', {
          type: 'button', class: 'opt-btn', 'data-real': realIndex,
          onclick: function () { onSelectOption(realIndex); }
        }, q.options[realIndex]);
        opts.appendChild(btn);
      })(d, item.order[d]);
    }
    root.appendChild(opts);

    /* placeholder areas filled after she answers */
    root.appendChild(el('div', { id: 'conf-area' }));
    root.appendChild(el('div', { id: 'reveal-area' }));
  }

  function onSelectOption(realIndex) {
    var item = quiz.items[quiz.idx];
    if (item.selected !== null) return;   // lock after first choice
    item.selected = realIndex;

    /* lock buttons visually */
    var btns = document.querySelectorAll('.opt-btn'), i;
    for (i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
      if (+btns[i].getAttribute('data-real') === realIndex) btns[i].className = 'opt-btn opt-picked';
    }

    /* confidence prompt BEFORE revealing right/wrong, so the rating is honest */
    var area = document.getElementById('conf-area');
    area.innerHTML = '';
    area.appendChild(el('p', { class: 'conf-q', text: 'How sure were you?' }));
    var row = el('div', { class: 'conf-row' });
    for (i = 0; i < CONFIDENCE.length; i++) {
      (function (c) {
        row.appendChild(el('button', { type: 'button', class: 'conf-btn',
          onclick: function () { onConfidence(c.key); } }, c.label));
      })(CONFIDENCE[i]);
    }
    area.appendChild(row);
  }

  function onConfidence(confKey) {
    var item = quiz.items[quiz.idx];
    if (item.confKey) return;
    item.confKey = confKey;

    var q = item.q;
    var correct = item.selected === q.answer;
    if (correct) quiz.correctCount += 1;

    recordAnswer(q.system, correct, confKey);
    if (!correct) logMiss(q, item.selected, confKey);

    /* mark correct/incorrect on the option buttons */
    var btns = document.querySelectorAll('.opt-btn'), i;
    for (i = 0; i < btns.length; i++) {
      var real = +btns[i].getAttribute('data-real');
      if (real === q.answer) btns[i].className = 'opt-btn opt-correct';
      else if (real === item.selected) btns[i].className = 'opt-btn opt-wrong';
    }

    var conf = document.getElementById('conf-area');
    conf.innerHTML = '';
    conf.appendChild(el('p', { class: 'hint', text: 'Confidence saved: ' + confLabel(confKey) }));

    var reveal = document.getElementById('reveal-area');
    reveal.innerHTML = '';
    reveal.appendChild(el('p', { class: correct ? 'verdict verdict-ok' : 'verdict verdict-no',
      text: correct ? 'Correct.' : 'Not this time.' }));
    if (!correct) {
      reveal.appendChild(el('p', { class: 'reveal-line' }, [
        el('strong', { text: 'Correct answer: ' }), q.options[q.answer]
      ]));
    }
    reveal.appendChild(el('p', { class: 'explanation', text: q.explanation }));

    var last = quiz.idx === quiz.items.length - 1;
    reveal.appendChild(el('button', { type: 'button', class: 'primary-btn',
      onclick: nextQuestion }, last ? 'See results' : 'Next question'));
  }

  function nextQuestion() {
    if (quiz.idx < quiz.items.length - 1) {
      quiz.idx += 1;
      renderQuizQuestion();
    } else {
      renderQuizResults();
    }
  }

  function renderQuizResults() {
    var root = document.getElementById('quiz-root');
    if (!root) return;
    var total = quiz.items.length, correct = quiz.correctCount;
    var missed = total - correct;
    root.innerHTML = '';

    root.appendChild(el('h2', { text: 'Block complete' }));
    root.appendChild(el('p', { class: 'result-score',
      text: correct + ' of ' + total + ' correct' }));
    if (missed > 0) {
      root.appendChild(el('p', { class: 'hint', text:
        missed + (missed === 1 ? ' question was' : ' questions were') +
        ' added to your error log for review.' }));
    } else {
      root.appendChild(el('p', { class: 'hint', text:
        'Clean block. Nothing to add to the error log this time.' }));
    }

    var row = el('div', { class: 'btn-row' });
    row.appendChild(el('button', { type: 'button', class: 'primary-btn',
      onclick: function () { quiz = null; renderQuizSetup(); } }, 'New block'));
    row.appendChild(el('a', { href: '#/progress', class: 'link-btn' }, 'See performance'));
    if (missed > 0) row.appendChild(el('a', { href: '#/errors', class: 'link-btn' }, 'Review misses'));
    root.appendChild(row);
    quiz = null;   // block is finished; setup screen is safe to show on re-entry
  }

  /* =========================================================================
     PERFORMANCE VIEW (per-system score bars)
     ====================================================================== */

  function renderPerformance() {
    var root = document.getElementById('perf-root');
    if (!root) return;
    root.innerHTML = '';
    var perf = loadPerf();
    var systems = allSystems();
    var anyData = false, confidentMisses = 0;

    root.appendChild(el('h2', { text: 'Self-test performance' }));

    var wrap = el('div', { class: 'perf-list' });
    for (var i = 0; i < systems.length; i++) {
      var sys = systems[i];
      var s = perf.bySystem[sys];
      var answered = s ? s.answered : 0;
      var got = s ? s.correct : 0;
      if (answered) anyData = true;
      var pct = answered ? Math.round((got / answered) * 100) : 0;

      if (s && s.conf) {
        confidentMisses += (s.conf.knew.n - s.conf.knew.correct) +
                           (s.conf.sure.n - s.conf.sure.correct);
      }

      var rowHead = el('div', { class: 'perf-head' }, [
        el('span', { class: 'perf-name', text: sys }),
        el('span', { class: 'perf-num',
          text: answered ? got + '/' + answered + ' (' + pct + '%)' : 'no attempts yet' })
      ]);
      var bar = el('div', { class: 'perf-bar' }, [
        el('div', { class: 'perf-fill', style: 'width:' + pct + '%' })
      ]);
      wrap.appendChild(el('div', { class: 'perf-item' }, [rowHead, bar]));
    }
    root.appendChild(wrap);

    if (!anyData) {
      root.appendChild(el('p', { class: 'empty', text:
        'No self-test attempts logged yet. Run a block from the Quiz tab and ' +
        'your per-system accuracy will show up here.' }));
    } else if (confidentMisses > 0) {
      /* Neutral, useful framing — not a "you\'re failing" alarm. */
      root.appendChild(el('p', { class: 'hint', text:
        confidentMisses + (confidentMisses === 1 ? ' answer' : ' answers') +
        ' you felt sure about turned out wrong — those are worth a second look ' +
        'in the error log.' }));
    }
  }

  /* =========================================================================
     ERROR LOG VIEW
     ====================================================================== */

  var errorsFilter7d = false;

  function renderErrors() {
    var root = document.getElementById('errors-root');
    if (!root) return;
    root.innerHTML = '';
    var errors = loadErrors().slice().sort(function (a, b) { return b.ts - a.ts; });

    root.appendChild(el('h2', { text: 'Error log' }));

    if (!errors.length) {
      root.appendChild(el('p', { class: 'empty', text:
        'Nothing here yet. Log your first miss after a self-test block, then ' +
        'this becomes your daily review-and-read-aloud list.' }));
      return;
    }

    /* review-last-7-days filter */
    var filterRow = el('label', { class: 'filter-row', 'for': 'flt-7d' });
    var cb = el('input', { type: 'checkbox', id: 'flt-7d',
      onchange: function (e) { errorsFilter7d = e.target.checked; renderErrors(); } });
    if (errorsFilter7d) cb.checked = true;
    filterRow.appendChild(cb);
    filterRow.appendChild(el('span', { text: 'Show only the last 7 days' }));
    root.appendChild(filterRow);

    var cutoff = Date.now() - 7 * 24 * 60 * 60 * 1000;
    var shown = errorsFilter7d
      ? errors.filter(function (e) { return e.ts >= cutoff; })
      : errors;

    if (!shown.length) {
      root.appendChild(el('p', { class: 'empty', text:
        'Nothing missed in the last 7 days. Clear the filter to see everything.' }));
      return;
    }

    var list = el('div', { class: 'err-list' });
    for (var i = 0; i < shown.length; i++) list.appendChild(errorCard(shown[i]));
    root.appendChild(list);
  }

  function errorCard(e) {
    var card = el('div', { class: 'err-card' });
    card.appendChild(el('div', { class: 'err-meta' }, [
      el('span', { class: 'err-sys', text: e.system }),
      el('span', { class: 'err-date', text: relDate(e.ts) })
    ]));
    card.appendChild(el('p', { class: 'err-stem', text: e.stem }));
    card.appendChild(el('p', { class: 'err-line' }, [
      el('strong', { text: 'Correct: ' }), e.correctText ]));
    card.appendChild(el('p', { class: 'err-line err-your' }, [
      el('strong', { text: 'You chose: ' }), e.selectedText,
      e.confidence ? el('span', { class: 'err-conf', text: ' (' + confLabel(e.confidence) + ')' }) : null
    ]));
    card.appendChild(el('p', { class: 'err-why', text: e.explanation }));

    /* tag picker — she fills this in herself */
    card.appendChild(el('p', { class: 'err-tag-label', text: 'Tag this miss:' }));
    var tagRow = el('div', { class: 'tag-row' });
    for (var i = 0; i < ERROR_TAGS.length; i++) {
      (function (tag) {
        var active = e.tag === tag;
        tagRow.appendChild(el('button', {
          type: 'button',
          class: active ? 'tag-btn tag-active' : 'tag-btn',
          onclick: function () { setTag(e.eid, e.tag === tag ? '' : tag); }
        }, tag));
      })(ERROR_TAGS[i]);
    }
    card.appendChild(tagRow);
    return card;
  }

  function setTag(eid, tag) {
    var errors = loadErrors();
    for (var i = 0; i < errors.length; i++) {
      if (errors[i].eid === eid) { errors[i].tag = tag; break; }
    }
    saveErrors(errors);
    renderErrors();
  }

  function relDate(ts) {
    var days = Math.floor((Date.now() - ts) / (24 * 60 * 60 * 1000));
    if (days <= 0) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 7) return days + ' days ago';
    var d = new Date(ts);
    return (d.getMonth() + 1) + '/' + d.getDate();
  }

  /* Exposed for the headless smoke test only (no effect on normal use). */
  window.__step1test = {
    loadPerf: loadPerf, loadErrors: loadErrors, weakestSystems: weakestSystems,
    startQuiz: startQuiz, allSystems: allSystems,
    getQuiz: function () { return quiz; }
  };

  /* =========================================================================
     START
     ====================================================================== */

  function start() {
    applyTheme();
    initSettings();

    if (!storageOk) {
      showNotice('Heads up, once: this browser is blocking saved data, so ' +
        'anything you do here lasts only until the tab closes. Export from ' +
        'Settings still works.');
    }

    /* Reopening with no hash returns her to wherever she was. */
    if (!location.hash) {
      location.replace('#/' + load('ui.lastView', 'today'));
    }
    window.addEventListener('hashchange', route);
    route();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
