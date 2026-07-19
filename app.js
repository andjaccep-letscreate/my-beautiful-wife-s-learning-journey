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

    /* Remember where she was, and move focus to the view for keyboard and
       screen-reader users. */
    save('ui.lastView', name);
    document.getElementById('main').focus({ preventScroll: true });
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
