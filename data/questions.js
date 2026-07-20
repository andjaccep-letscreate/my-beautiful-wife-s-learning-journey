/* ===========================================================================
   Question bank. Plain script assigning a global (not fetched JSON) so the
   app works from file:// with no server.

   ⚠️  MEDICAL-REVIEW REQUIRED — READ THIS FIRST  ⚠️
   These 150 items were AI-GENERATED for Phase B from well-established,
   high-yield USMLE Step 1 associations. They have NOT been reviewed by a
   clinician or checked against a reference text. AI can state medical facts
   incorrectly. Before she relies on any item for real study:
     1. A human (ideally with a First Aid / UWorld reference open) must read
        every stem, answer, and explanation.
     2. Correct anything wrong, then delete this warning block.
   Treat every fact here as UNVERIFIED until that pass is done.

   Item shape:
     { id, system, topic, stem, options: [4 strings], answer: <index 0-3>,
       explanation: <why the key is right AND why the distractors are wrong>,
       difficulty: 'easy' | 'medium' | 'hard' }

   Answer positions are deliberately spread across 0-3; the engine also
   reshuffles options on every attempt, so stored order does not leak the key.
   ======================================================================== */
window.STEP1_QUESTIONS = [

  /* ===================== CARDIOVASCULAR (cv) ===================== */
  {
    id: 'cv-01', system: 'Cardiovascular', topic: 'Murmurs', difficulty: 'medium',
    stem: 'A 68-year-old man reports exertional syncope and chest pressure. On exam there is a harsh crescendo-decrescendo systolic murmur at the right upper sternal border radiating to the carotids, and the carotid upstroke is delayed and diminished. Which valvular lesion best explains these findings?',
    options: ['Mitral regurgitation', 'Aortic stenosis', 'Mitral valve prolapse', 'Tricuspid regurgitation'],
    answer: 1,
    explanation: 'The triad of angina, syncope, and a crescendo-decrescendo systolic murmur radiating to the carotids with pulsus parvus et tardus (delayed, weak carotid upstroke) is classic aortic stenosis. Mitral regurgitation is a holosystolic murmur at the apex radiating to the axilla, not a crescendo-decrescendo murmur, and does not cause parvus et tardus. Mitral valve prolapse gives a mid-systolic click followed by a late systolic murmur. Tricuspid regurgitation is a holosystolic murmur at the left lower sternal border that increases with inspiration (Carvallo sign).'
  },
  {
    id: 'cv-02', system: 'Cardiovascular', topic: 'Ischemia', difficulty: 'medium',
    stem: 'A 55-year-old man has crushing substernal chest pain for 2 hours. ECG shows ST elevation in leads II, III, and aVF. Occlusion of which artery is most likely?',
    options: ['Left anterior descending', 'Left circumflex', 'Right coronary artery', 'Left main'],
    answer: 2,
    explanation: 'Leads II, III, and aVF are the inferior leads, supplied by the right coronary artery (RCA) in the ~85% of people who are right-dominant. The LAD supplies the anterior wall and septum (leads V1-V4). The left circumflex supplies the lateral wall (I, aVL, V5-V6). Left main occlusion causes widespread changes and cardiogenic shock, not an isolated inferior pattern.'
  },
  {
    id: 'cv-03', system: 'Cardiovascular', topic: 'Pharmacology', difficulty: 'medium',
    stem: 'A patient with chronic stable angina is started on a medication that causes a reflex increase in heart rate and, over time, a compensatory rise in preload. A dry cough is NOT expected. Nitroglycerin most directly reduces myocardial oxygen demand by which mechanism?',
    options: ['Increasing coronary artery spasm', 'Decreasing preload via venodilation', 'Blocking beta-1 receptors', 'Inhibiting the sodium-potassium ATPase'],
    answer: 1,
    explanation: 'Nitrates are converted to nitric oxide, which raises cGMP and relaxes vascular smooth muscle, predominantly venous. Venodilation pools blood, lowering preload and thus wall stress and oxygen demand. Nitrates relieve, not cause, coronary spasm. Beta-1 blockade is the mechanism of beta-blockers (a dry cough points instead to ACE inhibitors). Inhibiting the Na/K ATPase is the mechanism of digoxin.'
  },
  {
    id: 'cv-04', system: 'Cardiovascular', topic: 'Heart failure', difficulty: 'easy',
    stem: 'A 70-year-old woman with longstanding hypertension develops dyspnea. Echo shows a normal ejection fraction but a thick, stiff left ventricle that fills poorly. Which term best describes her heart failure?',
    options: ['Heart failure with reduced ejection fraction', 'High-output heart failure', 'Heart failure with preserved ejection fraction', 'Right-sided heart failure from cor pulmonale'],
    answer: 2,
    explanation: 'A stiff, poorly relaxing ventricle with a normal EF is diastolic dysfunction, i.e., heart failure with preserved ejection fraction (HFpEF), commonly from chronic hypertension causing concentric hypertrophy. Reduced EF (HFrEF) is a systolic/contractility problem with a dilated ventricle. High-output failure occurs in states like anemia or thyrotoxicosis. Cor pulmonale is right heart failure caused by lung disease, not the described left-sided stiffening.'
  },
  {
    id: 'cv-05', system: 'Cardiovascular', topic: 'Congenital', difficulty: 'hard',
    stem: 'A newborn is cyanotic within hours of birth. A single loud S2 is heard, and a chest radiograph shows an "egg-on-a-string" mediastinal silhouette. The infant improves transiently when prostaglandin E1 is given. Which lesion is most likely?',
    options: ['Tetralogy of Fallot', 'Transposition of the great arteries', 'Ventricular septal defect', 'Coarctation of the aorta'],
    answer: 1,
    explanation: 'Transposition of the great arteries (TGA) creates two parallel circulations; survival depends on mixing, so PGE1 keeps the ductus arteriosus open. The "egg on a string" narrow mediastinum is characteristic. Tetralogy of Fallot causes cyanosis but shows a "boot-shaped" heart and tet spells relieved by squatting. An isolated VSD is acyanotic (left-to-right shunt). Coarctation causes differential upper/lower extremity pressures, not central cyanosis at birth.'
  },
  {
    id: 'cv-06', system: 'Cardiovascular', topic: 'Vasculitis', difficulty: 'hard',
    stem: 'A 6-year-old presents with 6 days of high fever, bilateral non-exudative conjunctivitis, cracked red lips with a strawberry tongue, cervical lymphadenopathy, and desquamation of the fingertips. Which complication most threatens this child if untreated?',
    options: ['Renal artery stenosis', 'Coronary artery aneurysm', 'Aortic dissection', 'Pulmonary hypertension'],
    answer: 1,
    explanation: 'This is Kawasaki disease, a medium-vessel vasculitis of childhood; its feared complication is coronary artery aneurysm, which is why treatment is IVIG plus aspirin. Renal artery involvement is more typical of fibromuscular dysplasia or polyarteritis nodosa. Aortic dissection relates to Marfan/hypertension. Pulmonary hypertension is not a hallmark of Kawasaki disease.'
  },
  {
    id: 'cv-07', system: 'Cardiovascular', topic: 'Pharmacology', difficulty: 'medium',
    stem: 'A 60-year-old man on a new antihypertensive develops bilateral ankle swelling with no jugular venous distension and clear lungs. The drug primarily dilates arterioles by blocking L-type calcium channels in vascular smooth muscle. Which agent is most likely?',
    options: ['Hydrochlorothiazide', 'Amlodipine', 'Lisinopril', 'Metoprolol'],
    answer: 1,
    explanation: 'Amlodipine is a dihydropyridine calcium channel blocker; arteriolar dilation frequently causes peripheral edema without heart failure (the classic clue is edema with clear lungs and normal JVP). Thiazides cause volume loss, not edema. Lisinopril (ACE inhibitor) causes cough/angioedema, not peripheral edema. Metoprolol slows heart rate and does not characteristically cause ankle edema.'
  },
  {
    id: 'cv-08', system: 'Cardiovascular', topic: 'Pericardium', difficulty: 'medium',
    stem: 'A 40-year-old man has sharp chest pain that improves when he leans forward. A scratchy three-component friction rub is heard, and ECG shows diffuse ST elevation with PR depression. Which diagnosis is most likely?',
    options: ['Acute pericarditis', 'ST-elevation myocardial infarction', 'Aortic dissection', 'Pulmonary embolism'],
    answer: 0,
    explanation: 'Positional (better leaning forward) pleuritic chest pain, a friction rub, and DIFFUSE ST elevation with PR depression indicate acute pericarditis. STEMI produces localized ST elevation in a coronary distribution with reciprocal changes, not diffuse elevation with PR depression. Aortic dissection causes tearing pain radiating to the back with a pulse/BP differential. PE causes pleuritic pain with hypoxia and often an S1Q3T3 pattern, not diffuse ST elevation.'
  },
  {
    id: 'cv-09', system: 'Cardiovascular', topic: 'Shock', difficulty: 'hard',
    stem: 'A trauma patient becomes hypotensive with distended neck veins, muffled heart sounds, and a systolic blood pressure that drops 15 mmHg on inspiration. Which physiologic finding matches this presentation?',
    options: ['Kussmaul sign from constrictive pericarditis', 'Pulsus paradoxus from cardiac tamponade', 'Widened pulse pressure from aortic regurgitation', 'Bounding pulses from high-output failure'],
    answer: 1,
    explanation: 'Beck triad (hypotension, distended neck veins, muffled heart sounds) plus an exaggerated inspiratory drop in systolic pressure (>10 mmHg = pulsus paradoxus) indicates cardiac tamponade. Kussmaul sign (JVP rising with inspiration) is seen in constrictive pericarditis but the acute trauma + Beck triad point to tamponade. Widened pulse pressure and bounding pulses describe aortic regurgitation and high-output states, not this compressive picture.'
  },
  {
    id: 'cv-10', system: 'Cardiovascular', topic: 'Lipids', difficulty: 'easy',
    stem: 'A 50-year-old man is started on a drug that competitively inhibits HMG-CoA reductase to lower LDL. He should be monitored for which characteristic adverse effect?',
    options: ['Myopathy and elevated transaminases', 'Flushing and pruritus', 'Gallstones', 'Bile-acid-related steatorrhea'],
    answer: 0,
    explanation: 'Statins inhibit HMG-CoA reductase, the rate-limiting enzyme of cholesterol synthesis; their classic adverse effects are myopathy/rhabdomyolysis and hepatotoxicity (raised transaminases). Flushing and pruritus are typical of niacin. Gallstones are associated with fibrates. Steatorrhea and fat-soluble vitamin loss point to bile-acid resins.'
  },
  {
    id: 'cv-11', system: 'Cardiovascular', topic: 'Arrhythmia', difficulty: 'medium',
    stem: 'An asymptomatic 30-year-old has an ECG showing a short PR interval and a slurred upstroke of the QRS (delta wave). This finding results from conduction through which structure?',
    options: ['A re-entrant loop within the AV node', 'An accessory pathway (bundle of Kent)', 'A prolonged His-Purkinje refractory period', 'Retrograde conduction through the SA node'],
    answer: 1,
    explanation: 'A short PR and delta wave are Wolff-Parkinson-White, caused by an accessory pathway (bundle of Kent) that bypasses the AV node and pre-excites the ventricle. AV nodal re-entry (AVNRT) causes paroxysmal SVT but no delta wave at baseline. A prolonged His-Purkinje refractory period would widen the QRS as a bundle branch block, not create pre-excitation. The SA node does not conduct retrogradely to pre-excite the ventricle.'
  },
  {
    id: 'cv-12', system: 'Cardiovascular', topic: 'Embryology', difficulty: 'hard',
    stem: 'A child has a continuous "machine-like" murmur heard best at the left infraclavicular area, bounding pulses, and a wide pulse pressure. Failure of which structure to close is responsible?',
    options: ['Foramen ovale', 'Ductus arteriosus', 'Ductus venosus', 'Urachus'],
    answer: 1,
    explanation: 'A continuous machine-like murmur with wide pulse pressure and bounding pulses is a patent ductus arteriosus; the ductus normally closes as prostaglandins fall after birth (indomethacin promotes closure, PGE keeps it open). A patent foramen ovale usually causes no murmur. The ductus venosus becomes the ligamentum venosum and is unrelated to this murmur. A patent urachus produces urine drainage from the umbilicus, not a cardiac murmur.'
  },
  {
    id: 'cv-13', system: 'Cardiovascular', topic: 'Physiology', difficulty: 'medium',
    stem: 'During the cardiac cycle, both the mitral and aortic valves are closed while the left ventricle generates rising pressure but ejects no blood. Which phase is this?',
    options: ['Isovolumetric contraction', 'Rapid ventricular ejection', 'Isovolumetric relaxation', 'Rapid ventricular filling'],
    answer: 0,
    explanation: 'When all valves are closed and ventricular pressure rises with no volume change (just after the mitral valve closes, before the aortic valve opens), it is isovolumetric contraction. Rapid ejection is after the aortic valve opens. Isovolumetric relaxation is the analogous all-valves-closed period after the aortic valve closes, when pressure falls. Rapid filling occurs after the mitral valve opens.'
  },
  {
    id: 'cv-14', system: 'Cardiovascular', topic: 'Infective endocarditis', difficulty: 'medium',
    stem: 'A 25-year-old who injects drugs has fever and a new holosystolic murmur at the left lower sternal border that increases with inspiration. Which valve is most likely involved?',
    options: ['Aortic valve', 'Mitral valve', 'Tricuspid valve', 'Pulmonic valve'],
    answer: 2,
    explanation: 'Injection drug use classically seeds the right-sided tricuspid valve, and a holosystolic murmur at the left lower sternal border that increases with inspiration localizes to the tricuspid valve. The aortic and mitral valves are more often affected in non-IV-drug endocarditis. Pulmonic valve endocarditis is rare. The inspiratory increase (more venous return to the right heart) is the key clue for a right-sided lesion.'
  },
  {
    id: 'cv-15', system: 'Cardiovascular', topic: 'Pharmacology', difficulty: 'hard',
    stem: 'A patient in atrial fibrillation is given a drug that slows conduction through the AV node by inhibiting the Na/K ATPase, raising intracellular calcium and increasing contractility. Which toxicity should be watched for, especially with hypokalemia?',
    options: ['Cinchonism', 'Yellow-tinged vision and arrhythmia', 'Pulmonary fibrosis', 'Torsades de pointes from QT prolongation'],
    answer: 1,
    explanation: 'This describes digoxin: Na/K ATPase inhibition raises intracellular Na, reducing Na/Ca exchange and increasing intracellular calcium (positive inotropy), while vagal tone slows the AV node. Digoxin toxicity classically causes yellow-green visual changes (xanthopsia) and arrhythmias, and hypokalemia worsens it because K and digoxin compete at the pump. Cinchonism is quinidine/quinine toxicity. Pulmonary fibrosis is amiodarone. Torsades relates to QT-prolonging drugs, not digoxin (which shortens the QT).'
  },
  {
    id: 'cv-16', system: 'Cardiovascular', topic: 'Aneurysm', difficulty: 'medium',
    stem: 'A 70-year-old man with a long smoking history is found to have a pulsatile abdominal mass. Ultrasound shows a 5.5 cm infrarenal aortic dilation. Which is the strongest risk factor for this lesion?',
    options: ['Tertiary syphilis', 'Cigarette smoking', 'Marfan syndrome', 'Cystic medial necrosis'],
    answer: 1,
    explanation: 'Abdominal aortic aneurysms are strongly associated with atherosclerosis and, above all, smoking (the single strongest modifiable risk factor); they typically occur infrarenally in older male smokers. Tertiary syphilis and cystic medial necrosis (Marfan) classically affect the ascending/thoracic aorta, not the infrarenal abdominal aorta. Marfan predisposes to thoracic aortic dissection rather than the described infrarenal AAA.'
  },
  {
    id: 'cv-17', system: 'Cardiovascular', topic: 'Cardiomyopathy', difficulty: 'hard',
    stem: 'A 17-year-old collapses during basketball. He has a harsh systolic murmur that gets LOUDER when he stands from squatting or performs Valsalva. Echo shows asymmetric septal hypertrophy with systolic anterior motion of the mitral valve. Which maneuver would DECREASE this murmur?',
    options: ['Standing from a squat', 'Valsalva strain phase', 'Sudden squatting (increased preload)', 'Nitroglycerin administration'],
    answer: 2,
    explanation: 'Hypertrophic cardiomyopathy with dynamic LV outflow obstruction gets louder with anything that lowers preload/LV volume (standing, Valsalva, nitroglycerin), because a smaller chamber worsens outflow obstruction. Squatting increases venous return and afterload, enlarging the ventricle and DECREASING the obstructive murmur. This preload-dependence distinguishes HCM (and mitral valve prolapse) from most other murmurs, which get louder with more preload.'
  },

  /* ===================== RESPIRATORY (resp) ===================== */
  {
    id: 'resp-01', system: 'Respiratory', topic: 'Obstructive disease', difficulty: 'easy',
    stem: 'A 62-year-old smoker has a chronic productive cough for at least 3 months in 2 consecutive years. His FEV1/FVC ratio is reduced. Which pathologic change best explains his cough?',
    options: ['Destruction of alveolar walls', 'Mucous gland hyperplasia in the bronchi', 'Non-caseating granulomas', 'Thickened alveolar basement membrane'],
    answer: 1,
    explanation: 'Chronic bronchitis is defined clinically (productive cough >=3 months for >=2 years) and pathologically by bronchial mucous gland hyperplasia, quantified by the Reid index. Alveolar wall destruction defines emphysema (the other main COPD phenotype). Non-caseating granulomas are seen in sarcoidosis. A thickened alveolar basement membrane is not the hallmark of chronic bronchitis.'
  },
  {
    id: 'resp-02', system: 'Respiratory', topic: 'Restrictive disease', difficulty: 'medium',
    stem: 'A 55-year-old man who worked in shipbuilding has progressive dyspnea. Imaging shows lower-lobe interstitial fibrosis and calcified pleural plaques. Which occupational exposure and cancer association is correct?',
    options: ['Silica; no increased cancer risk', 'Asbestos; increased risk of bronchogenic carcinoma and mesothelioma', 'Coal dust; increased risk of gastric cancer', 'Beryllium; increased risk of renal cancer'],
    answer: 1,
    explanation: 'Shipbuilding, roofing, and old insulation are classic asbestos exposures; asbestosis causes lower-lobe fibrosis and pleural plaques. Asbestos increases the risk of BOTH bronchogenic carcinoma (the more common cancer, synergistic with smoking) and mesothelioma. Silicosis affects upper lobes and increases TB risk. Coal workers get anthracosis/progressive massive fibrosis. Berylliosis mimics sarcoidosis with granulomas; none match the pleural plaque picture as well as asbestos.'
  },
  {
    id: 'resp-03', system: 'Respiratory', topic: 'Pulmonary embolism', difficulty: 'medium',
    stem: 'A 45-year-old woman has sudden pleuritic chest pain and dyspnea 3 days after a long flight. She is tachypneic and hypoxic. Which is the most common ECG finding, and what is the best initial imaging test in a stable patient?',
    options: ['S1Q3T3 pattern; CT pulmonary angiography', 'Sinus tachycardia; CT pulmonary angiography', 'Diffuse ST elevation; echocardiography', 'Peaked T waves; ventilation-perfusion scan first'],
    answer: 1,
    explanation: 'Although the S1Q3T3 pattern is the classic "board buzzword" for PE, the MOST COMMON ECG finding is simply sinus tachycardia. In a hemodynamically stable patient, CT pulmonary angiography is the best initial confirmatory test. Diffuse ST elevation suggests pericarditis. Peaked T waves suggest hyperkalemia. A V/Q scan is reserved for patients who cannot receive contrast (e.g., renal failure, contrast allergy).'
  },
  {
    id: 'resp-04', system: 'Respiratory', topic: 'Lung cancer', difficulty: 'hard',
    stem: 'A 60-year-old smoker has hyponatremia. Serum osmolality is low, urine osmolality is inappropriately high, and he is euvolemic. A central lung mass is found. Which tumor most likely produces this syndrome?',
    options: ['Squamous cell carcinoma', 'Small cell carcinoma', 'Adenocarcinoma', 'Bronchial carcinoid'],
    answer: 1,
    explanation: 'Euvolemic hyponatremia with low serum osmolality and concentrated urine is SIADH; among lung cancers, small cell carcinoma is the classic source of ectopic ADH (and also ectopic ACTH). Squamous cell carcinoma classically secretes PTHrP causing HYPERcalcemia, not SIADH. Adenocarcinoma is the most common lung cancer overall and is peripheral, but is not the classic SIADH producer. Carcinoid can cause carcinoid syndrome (flushing, diarrhea), not SIADH.'
  },
  {
    id: 'resp-05', system: 'Respiratory', topic: 'Pediatrics', difficulty: 'medium',
    stem: 'A premature neonate develops tachypnea, grunting, and retractions shortly after birth. Chest radiograph shows a diffuse ground-glass appearance. The underlying deficiency involves which cell and product?',
    options: ['Type I pneumocytes; mucus', 'Type II pneumocytes; surfactant', 'Clara cells; immunoglobulin', 'Goblet cells; elastin'],
    answer: 1,
    explanation: 'Neonatal respiratory distress syndrome results from deficient surfactant, produced by type II pneumocytes; without it, alveolar surface tension is high and alveoli collapse, giving the ground-glass/atelectasis picture. Type I pneumocytes are for gas exchange and do not make surfactant. Clara (club) cells secrete a protective, surfactant-component protein but are not the primary surfactant source. Goblet cells make mucus, not elastin or surfactant.'
  },
  {
    id: 'resp-06', system: 'Respiratory', topic: 'Acid-base', difficulty: 'medium',
    stem: 'A patient with a severe asthma exacerbation initially has a low PaCO2. Hours later, as he tires, his PaCO2 "normalizes" toward 40 mmHg. Why is this normalization ominous?',
    options: ['It indicates full recovery', 'It signals respiratory muscle fatigue and impending failure', 'It reflects metabolic compensation only', 'It is an expected benign finding in asthma'],
    answer: 1,
    explanation: 'Early in an asthma attack, tachypnea blows off CO2, producing a respiratory ALKALOSIS (low PaCO2). A rising or "normalizing" PaCO2 during ongoing severe distress means the patient can no longer maintain the increased work of breathing - respiratory muscle fatigue and impending respiratory failure. It is not recovery, not purely metabolic, and is a red-flag indication for possible intubation.'
  },
  {
    id: 'resp-07', system: 'Respiratory', topic: 'Physiology', difficulty: 'hard',
    stem: 'In an upright, healthy lung, ventilation and perfusion are both greater at the base than the apex, but their ratio differs by region. At the apex of the lung, the V/Q ratio is:',
    options: ['Lower than at the base (approaches 0.6)', 'Higher than at the base (approaches 3)', 'Equal to that at the base', 'Zero because the apex is not ventilated'],
    answer: 1,
    explanation: 'Gravity reduces both ventilation and perfusion at the apex, but perfusion falls MORE than ventilation, so the apex has a HIGH V/Q ratio (~3) - relatively overventilated. The base has a lower V/Q (~0.6) - relatively overperfused. This is why the apex has higher PO2/lower PCO2, and why reactivated TB and other high-O2-loving organisms favor the apex. The apex is still ventilated, so V/Q is not zero.'
  },
  {
    id: 'resp-08', system: 'Respiratory', topic: 'Infection', difficulty: 'medium',
    stem: 'A previously healthy 20-year-old college student has 2 weeks of low-grade fever, dry cough, and malaise out of proportion to a near-clear chest exam. Cold agglutinins are positive. Which organism is most likely?',
    options: ['Streptococcus pneumoniae', 'Mycoplasma pneumoniae', 'Klebsiella pneumoniae', 'Legionella pneumophila'],
    answer: 1,
    explanation: 'A "walking pneumonia" in a young, otherwise healthy patient with an insidious dry cough, diffuse patchy infiltrate, and cold agglutinins is classic Mycoplasma pneumoniae (no cell wall, so beta-lactams fail; treat with a macrolide). S. pneumoniae causes acute lobar pneumonia with rusty sputum. Klebsiella causes currant-jelly sputum in alcoholics/aspiration. Legionella causes severe pneumonia with hyponatremia and GI symptoms, often after water-source exposure.'
  },
  {
    id: 'resp-09', system: 'Respiratory', topic: 'ARDS', difficulty: 'hard',
    stem: 'A patient with sepsis develops rapid hypoxemia refractory to supplemental oxygen, bilateral infiltrates, and a normal pulmonary capillary wedge pressure. Which mechanism underlies the hypoxemia?',
    options: ['Increased hydrostatic pressure from heart failure', 'Diffuse alveolar damage with protein-rich exudate and hyaline membranes', 'Anatomic dead space increase', 'Pure hypoventilation'],
    answer: 1,
    explanation: 'ARDS is non-cardiogenic pulmonary edema: inflammatory injury causes diffuse alveolar damage, increased capillary permeability, protein-rich exudate, and hyaline membranes, producing intrapulmonary shunt and refractory hypoxemia - with a NORMAL wedge pressure that excludes cardiogenic edema. Increased hydrostatic pressure would be cardiogenic edema (high wedge). Dead space and hypoventilation do not explain bilateral infiltrates with shunt physiology.'
  },
  {
    id: 'resp-10', system: 'Respiratory', topic: 'Pleura', difficulty: 'medium',
    stem: 'A tall, thin 19-year-old man has sudden right-sided pleuritic chest pain and dyspnea. Exam shows decreased breath sounds and hyperresonance on the right, with the trachea midline. Which is the most likely diagnosis?',
    options: ['Tension pneumothorax', 'Primary spontaneous pneumothorax', 'Lobar pneumonia', 'Massive pleural effusion'],
    answer: 1,
    explanation: 'A tall, thin young man with sudden pleuritic pain, unilateral decreased breath sounds, and hyperresonance has a primary spontaneous pneumothorax (often from a ruptured apical bleb) - and the midline trachea argues against tension. A tension pneumothorax would show tracheal deviation AWAY from the affected side and hemodynamic compromise. Pneumonia gives dullness and crackles, not hyperresonance. A large effusion gives dullness and decreased breath sounds, not hyperresonance.'
  },
  {
    id: 'resp-11', system: 'Respiratory', topic: 'Pharmacology', difficulty: 'easy',
    stem: 'A patient with persistent asthma is prescribed an inhaled agent that reduces airway inflammation over weeks and is the most effective controller therapy. Which class is this, and what is a common local side effect?',
    options: ['Short-acting beta-agonist; tremor', 'Inhaled corticosteroid; oral candidiasis', 'Leukotriene antagonist; hepatotoxicity', 'Muscarinic antagonist; dry mouth'],
    answer: 1,
    explanation: 'Inhaled corticosteroids are the most effective long-term controllers for persistent asthma; a common LOCAL side effect is oral candidiasis (thrush), reduced by rinsing the mouth and using a spacer. Short-acting beta-agonists (albuterol) are rescue medications causing tremor/tachycardia, not controllers. Leukotriene antagonists (montelukast) are add-ons. Inhaled muscarinic antagonists are more central to COPD; dry mouth is their effect but they are not first-line asthma controllers.'
  },
  {
    id: 'resp-12', system: 'Respiratory', topic: 'Sleep', difficulty: 'medium',
    stem: 'An obese 50-year-old man snores loudly and has daytime somnolence and morning headaches. His partner notes he stops breathing repeatedly at night despite continued respiratory effort. Which is the most likely diagnosis?',
    options: ['Central sleep apnea', 'Obstructive sleep apnea', 'Narcolepsy', 'Obesity hypoventilation from primary lung disease'],
    answer: 1,
    explanation: 'Loud snoring, witnessed apneas WITH continued respiratory effort, and daytime sleepiness in an obese patient indicate obstructive sleep apnea (upper airway collapse). Central sleep apnea features apneas WITHOUT respiratory effort (absent drive). Narcolepsy causes sleep attacks and cataplexy, not snoring/apnea. The obstructive pattern (effort against a closed airway) is the key distinguishing feature.'
  },
  {
    id: 'resp-13', system: 'Respiratory', topic: 'Granulomatous', difficulty: 'hard',
    stem: 'A 35-year-old African American woman has dyspnea, and chest radiograph shows bilateral hilar lymphadenopathy. Biopsy reveals non-caseating granulomas. Which laboratory abnormality is most consistent?',
    options: ['Hypocalcemia and low ACE level', 'Hypercalcemia and elevated ACE level', 'Positive anti-GBM antibody', 'Eosinophilia with elevated IgE'],
    answer: 1,
    explanation: 'Sarcoidosis features non-caseating granulomas and bilateral hilar lymphadenopathy; the granuloma macrophages activate vitamin D (1-alpha-hydroxylase), causing HYPERcalcemia, and serum ACE is often elevated. Anti-GBM antibody indicates Goodpasture syndrome. Eosinophilia with high IgE suggests allergic/eosinophilic processes (e.g., ABPA or EGPA), not classic sarcoid. Low calcium/low ACE would be the opposite of the expected sarcoid pattern.'
  },
  {
    id: 'resp-14', system: 'Respiratory', topic: 'Emphysema', difficulty: 'hard',
    stem: 'A 40-year-old nonsmoker develops early-onset panacinar emphysema and also has abnormal liver function tests. Which deficiency links the lung and liver findings?',
    options: ['Alpha-1 antitrypsin deficiency', 'Cystic fibrosis transmembrane regulator dysfunction', 'Ciliary dyskinesia', 'Surfactant protein B deficiency'],
    answer: 0,
    explanation: 'Alpha-1 antitrypsin deficiency causes panacinar emphysema (unopposed elastase destroys alveoli) at a young age even in nonsmokers, and misfolded protein accumulating in hepatocytes causes liver disease (PAS-positive globules). CFTR dysfunction (cystic fibrosis) causes bronchiectasis and pancreatic/GI disease, not panacinar emphysema. Ciliary dyskinesia (Kartagener) causes recurrent infections and situs inversus. Surfactant deficiency causes neonatal RDS, not adult emphysema with liver disease.'
  },
  {
    id: 'resp-15', system: 'Respiratory', topic: 'Physiology', difficulty: 'medium',
    stem: 'A patient inhales a fixed volume of CO for a diffusing capacity test. In which condition would the DLCO be characteristically INCREASED rather than decreased?',
    options: ['Emphysema', 'Pulmonary fibrosis', 'Alveolar hemorrhage', 'Pulmonary embolism'],
    answer: 2,
    explanation: 'DLCO measures gas transfer across the alveolar-capillary membrane. It is INCREASED in alveolar hemorrhage because extra hemoglobin (blood) in the alveoli avidly takes up CO. DLCO is DECREASED in emphysema (lost surface area), pulmonary fibrosis (thickened membrane), and PE (lost perfused capillary bed). Alveolar hemorrhage (e.g., Goodpasture) is the classic high-DLCO answer.'
  },
  {
    id: 'resp-16', system: 'Respiratory', topic: 'Cancer', difficulty: 'medium',
    stem: 'A 65-year-old smoker develops right arm pain, hand muscle atrophy, ptosis, miosis, and anhidrosis on the right. A tumor in which location best explains this?',
    options: ['Peripheral lower-lobe nodule', 'Superior sulcus (Pancoast) tumor at the lung apex', 'Central hilar mass compressing the SVC', 'Anterior mediastinal mass'],
    answer: 1,
    explanation: 'A superior sulcus (Pancoast) tumor at the lung apex invades the brachial plexus (arm pain, hand atrophy) and the sympathetic chain, causing Horner syndrome (ptosis, miosis, anhidrosis). A peripheral lower-lobe nodule would not reach these structures. An SVC-compressing hilar mass causes facial swelling and distended neck veins (SVC syndrome), not Horner + brachial plexopathy. An anterior mediastinal mass (the 4 Ts) causes different findings.'
  },
  {
    id: 'resp-17', system: 'Respiratory', topic: 'Control of breathing', difficulty: 'medium',
    stem: 'A climber at high altitude hyperventilates. Which set of arterial blood gas changes and compensations is expected acutely?',
    options: ['Respiratory acidosis with renal bicarbonate retention', 'Respiratory alkalosis with increased renal bicarbonate excretion', 'Metabolic acidosis with respiratory compensation', 'Metabolic alkalosis with hypoventilation'],
    answer: 1,
    explanation: 'Low inspired O2 at altitude drives hyperventilation, blowing off CO2 and causing a respiratory ALKALOSIS (high pH, low PaCO2). The kidney compensates over days by excreting bicarbonate (which is why acetazolamide, which promotes bicarbonate loss, is used for altitude sickness). Respiratory acidosis would be hypoventilation. The primary disturbance here is respiratory, not metabolic.'
  },

  /* ===================== RENAL (renal) ===================== */
  {
    id: 'renal-01', system: 'Renal', topic: 'Glomerular disease', difficulty: 'medium',
    stem: 'A 6-year-old develops facial and periorbital edema, and urinalysis shows 4+ proteinuria without hematuria. Serum albumin is low and lipids are high. Light microscopy of the kidney is normal, but electron microscopy shows foot process effacement. Which is the most likely diagnosis?',
    options: ['Membranous nephropathy', 'Minimal change disease', 'Post-streptococcal glomerulonephritis', 'IgA nephropathy'],
    answer: 1,
    explanation: 'Nephrotic-range proteinuria in a young child with normal light microscopy and podocyte foot process effacement on EM is minimal change disease - the most common nephrotic syndrome in children, typically steroid-responsive. Membranous nephropathy is a common adult nephrotic cause with subepithelial "spike and dome" deposits. Post-strep GN and IgA nephropathy are NEPHRITIC (hematuria, RBC casts), not the pure nephrotic picture described.'
  },
  {
    id: 'renal-02', system: 'Renal', topic: 'Glomerular disease', difficulty: 'medium',
    stem: 'A 24-year-old man notices tea-colored urine 2 days after an upper respiratory infection. This is his second such episode over a year. Biopsy shows mesangial IgA deposits. Which is the most likely diagnosis?',
    options: ['Post-streptococcal glomerulonephritis', 'IgA nephropathy (Berger disease)', 'Membranous nephropathy', 'Alport syndrome'],
    answer: 1,
    explanation: 'Hematuria occurring CONCURRENTLY with (within days of) a mucosal/respiratory infection, recurring over time, with mesangial IgA deposits, is IgA nephropathy. Post-streptococcal GN occurs 2-4 WEEKS AFTER infection (not concurrently) with low complement and subepithelial humps. Membranous is nephrotic. Alport is hereditary (sensorineural deafness, eye problems) with basement membrane splitting, not IgA deposits.'
  },
  {
    id: 'renal-03', system: 'Renal', topic: 'Acid-base', difficulty: 'hard',
    stem: 'A patient with diabetic ketoacidosis has pH 7.20, PaCO2 20 mmHg, Na 140, Cl 100, HCO3 8. What is the acid-base disturbance and anion gap?',
    options: ['Normal anion gap metabolic acidosis; gap 12', 'High anion gap metabolic acidosis with appropriate respiratory compensation; gap 32', 'Respiratory acidosis; gap 12', 'Metabolic alkalosis; gap 32'],
    answer: 1,
    explanation: 'Anion gap = Na - (Cl + HCO3) = 140 - (100 + 8) = 32, a HIGH anion gap metabolic acidosis (ketoacids). Winter formula predicts expected PaCO2 = 1.5 x HCO3 + 8 +/- 2 = 1.5 x 8 + 8 = 20, matching the measured 20 - so respiratory compensation is appropriate (not a separate respiratory disorder). A normal gap is ~8-12; here it is clearly elevated. This is not alkalosis (pH is low).'
  },
  {
    id: 'renal-04', system: 'Renal', topic: 'Electrolytes', difficulty: 'medium',
    stem: 'A patient develops peaked T waves, widened QRS, and muscle weakness. Which electrolyte abnormality is most likely, and what is the first drug given to stabilize the myocardium?',
    options: ['Hyperkalemia; IV calcium gluconate', 'Hypokalemia; potassium chloride', 'Hypercalcemia; IV fluids', 'Hyponatremia; hypertonic saline'],
    answer: 0,
    explanation: 'Peaked T waves and a widening QRS are hallmark ECG signs of hyperkalemia; the FIRST step is IV calcium gluconate to stabilize the cardiac membrane (it does not lower potassium - insulin/glucose, beta-agonists, and dialysis do that). Hypokalemia causes U waves and flattened T waves. Hypercalcemia shortens the QT. Hyponatremia causes neurologic symptoms, not peaked T waves.'
  },
  {
    id: 'renal-05', system: 'Renal', topic: 'Diuretics', difficulty: 'medium',
    stem: 'A patient with heart failure is given a diuretic that inhibits the Na-K-2Cl cotransporter in the thick ascending limb. Which adverse effect is characteristic?',
    options: ['Hyperkalemia', 'Ototoxicity and hypocalcemia', 'Metabolic acidosis', 'Hypercalcemia and gynecomastia'],
    answer: 1,
    explanation: 'Loop diuretics (furosemide) block the Na-K-2Cl transporter; classic adverse effects include ototoxicity and increased calcium excretion (HYPOcalcemia) - "loops lose calcium." They cause hypokalemia and metabolic ALKALOSIS, not acidosis or hyperkalemia. Hypercalcemia is caused by THIAZIDES ("thiazides retain calcium"), and gynecomastia is a spironolactone effect. The ototoxicity + calcium wasting combination points squarely to loop diuretics.'
  },
  {
    id: 'renal-06', system: 'Renal', topic: 'Acute kidney injury', difficulty: 'hard',
    stem: 'A dehydrated patient has a BUN:creatinine ratio of 25:1, urine sodium <20 mEq/L, and a fractional excretion of sodium <1%. Which type of acute kidney injury is this?',
    options: ['Prerenal azotemia', 'Acute tubular necrosis (intrinsic)', 'Postrenal obstruction', 'Acute interstitial nephritis'],
    answer: 0,
    explanation: 'A high BUN:Cr ratio (>20), low urine sodium (<20), and FENa <1% indicate PRERENAL azotemia: the kidney is intact and avidly reabsorbing sodium and water in response to hypoperfusion. Acute tubular necrosis shows FENa >2%, urine Na >40, and muddy brown casts because injured tubules cannot reabsorb sodium. Postrenal is obstruction. Acute interstitial nephritis is often drug-induced with eosinophils/WBC casts.'
  },
  {
    id: 'renal-07', system: 'Renal', topic: 'Stones', difficulty: 'medium',
    stem: 'A patient with recurrent kidney stones has radiopaque, envelope-shaped (bipyramidal) crystals in the urine. Which stone type and the associated dietary/metabolic factor is correct?',
    options: ['Uric acid stone; radiolucent, treat by alkalinizing urine', 'Calcium oxalate stone; the most common stone, associated with hypercalciuria', 'Struvite stone; associated with urease-positive organisms', 'Cystine stone; hexagonal crystals in children'],
    answer: 1,
    explanation: 'Envelope- or dumbbell-shaped, radiopaque crystals are calcium oxalate - the MOST COMMON stone type - associated with hypercalciuria, hyperoxaluria, and low urine citrate. Uric acid stones are radiolucent and rhomboid, treated by urine alkalinization. Struvite (ammonium magnesium phosphate) stones form coffin-lid crystals with urease-positive organisms (Proteus) and cause staghorn calculi. Cystine stones are hexagonal and seen in children with cystinuria.'
  },
  {
    id: 'renal-08', system: 'Renal', topic: 'Physiology', difficulty: 'hard',
    stem: 'A drug blocks the enzyme that converts angiotensin I to angiotensin II. Regarding the glomerulus, which effect on the efferent arteriole and GFR is expected?',
    options: ['Efferent constriction; increased GFR', 'Efferent dilation; decreased GFR', 'Afferent constriction; increased GFR', 'No change in either arteriole'],
    answer: 1,
    explanation: 'Angiotensin II preferentially CONSTRICTS the efferent arteriole to maintain glomerular pressure. An ACE inhibitor removes this constriction, so the efferent arteriole DILATES, dropping glomerular hydrostatic pressure and thus GFR (which is why creatinine can rise, and why ACE inhibitors are risky in bilateral renal artery stenosis). This efferent effect is why ACE inhibitors reduce intraglomerular pressure and are renoprotective in diabetes despite the small GFR dip.'
  },
  {
    id: 'renal-09', system: 'Renal', topic: 'Tubular function', difficulty: 'medium',
    stem: 'A patient has glucosuria (with normal serum glucose), phosphaturia, aminoaciduria, and a proximal (type 2) renal tubular acidosis. Which part of the nephron is dysfunctional?',
    options: ['Proximal convoluted tubule', 'Thick ascending limb', 'Distal convoluted tubule', 'Collecting duct'],
    answer: 0,
    explanation: 'Generalized reabsorptive failure - glucose, phosphate, amino acids, and bicarbonate all spilling into the urine - is Fanconi syndrome, a defect of the PROXIMAL convoluted tubule, where the bulk of these solutes are normally reabsorbed. The thick ascending limb handles the Na-K-2Cl transport (Bartter syndrome). The DCT is the site of the Na-Cl cotransporter (Gitelman). The collecting duct handles final water/acid handling, not bulk glucose/amino acid reabsorption.'
  },
  {
    id: 'renal-10', system: 'Renal', topic: 'Endocrine-renal', difficulty: 'medium',
    stem: 'A patient with lithium use develops polyuria and polydipsia. Urine remains dilute even after administration of desmopressin (a vasopressin analog). Which diagnosis fits?',
    options: ['Central diabetes insipidus', 'Nephrogenic diabetes insipidus', 'Primary polydipsia', 'SIADH'],
    answer: 1,
    explanation: 'Failure to concentrate urine AFTER giving desmopressin means the collecting duct cannot respond to ADH - NEPHROGENIC diabetes insipidus, a classic lithium side effect. In CENTRAL DI, the problem is lack of ADH, so urine WOULD concentrate after desmopressin. Primary polydipsia would show appropriate concentration with water restriction. SIADH causes concentrated urine and hyponatremia, the opposite picture.'
  },
  {
    id: 'renal-11', system: 'Renal', topic: 'Glomerular disease', difficulty: 'hard',
    stem: 'A 30-year-old man has hemoptysis and hematuria. Biopsy shows crescentic glomerulonephritis with LINEAR immunofluorescence along the glomerular basement membrane. Which target antigen is involved?',
    options: ['Phospholipase A2 receptor', 'Type IV collagen (alpha-3 chain)', 'Streptococcal antigens', 'DNA-anti-DNA complexes'],
    answer: 1,
    explanation: 'Pulmonary-renal syndrome with LINEAR IF along the GBM is Goodpasture syndrome, caused by antibodies against the alpha-3 chain of type IV collagen in glomerular and alveolar basement membranes. Phospholipase A2 receptor antibodies cause membranous nephropathy (granular, not linear). Streptococcal antigens and DNA-anti-DNA immune complexes cause GRANULAR ("lumpy-bumpy") deposits, not linear staining.'
  },
  {
    id: 'renal-12', system: 'Renal', topic: 'Cysts', difficulty: 'medium',
    stem: 'A 45-year-old man has hypertension, bilateral flank masses, and hematuria. Family history includes a father who had a stroke from a ruptured berry aneurysm and went on dialysis. Which mutation is most associated?',
    options: ['PKD1 (polycystin-1)', 'VHL tumor suppressor', 'Fibrocystin (PKHD1)', 'WT1'],
    answer: 0,
    explanation: 'Autosomal dominant polycystic kidney disease presents in adulthood with bilateral enlarged cystic kidneys, hypertension, and extrarenal associations including berry aneurysms, hepatic cysts, and mitral valve prolapse; ~85% of cases are due to PKD1 (polycystin-1). VHL predisposes to renal cell carcinoma and hemangioblastomas. Fibrocystin (PKHD1) causes the autosomal RECESSIVE (infantile) form. WT1 relates to Wilms tumor.'
  },
  {
    id: 'renal-13', system: 'Renal', topic: 'Diuretics', difficulty: 'medium',
    stem: 'A patient is placed on a potassium-sparing diuretic that antagonizes the aldosterone receptor in the collecting duct. Which additional effect is expected from this specific agent?',
    options: ['Gynecomastia', 'Ototoxicity', 'Hyperglycemia', 'Photosensitivity'],
    answer: 0,
    explanation: 'Spironolactone is an aldosterone-receptor antagonist; because it also blocks androgen receptors, it commonly causes gynecomastia and other antiandrogen effects. Ototoxicity is a loop diuretic effect. Hyperglycemia and photosensitivity are associated with thiazides. The antiandrogen profile is what distinguishes spironolactone from the other potassium-sparing agent, amiloride/triamterene (which block the ENaC channel and do not cause gynecomastia).'
  },
  {
    id: 'renal-14', system: 'Renal', topic: 'Physiology', difficulty: 'hard',
    stem: 'To estimate renal plasma flow, a substance is used that is both filtered and actively secreted so that it is nearly completely cleared from the plasma in one pass. Which substance is this?',
    options: ['Inulin', 'Para-aminohippuric acid (PAH)', 'Creatinine', 'Glucose'],
    answer: 1,
    explanation: 'PAH is filtered AND secreted, so at low plasma concentrations it is almost completely cleared in a single pass, making its clearance an estimate of effective renal plasma flow. Inulin is freely filtered but neither secreted nor reabsorbed, so it estimates GFR. Creatinine approximates GFR (slightly overestimates due to minor secretion). Glucose is normally fully reabsorbed, so its clearance is ~0 and cannot measure flow.'
  },
  {
    id: 'renal-15', system: 'Renal', topic: 'Cancer', difficulty: 'medium',
    stem: 'A 60-year-old smoker has painless hematuria, flank pain, and a palpable flank mass. CT shows a solid renal mass that invades the renal vein. Which cell type is the tumor derived from?',
    options: ['Proximal tubule epithelium (clear cell renal cell carcinoma)', 'Urothelium (transitional cell carcinoma)', 'Metanephric blastema (Wilms tumor)', 'Collecting duct principal cells'],
    answer: 0,
    explanation: 'The classic triad of hematuria, flank pain, and a palpable mass in an older adult, with a propensity to invade the renal vein/IVC, is renal cell carcinoma - most commonly the clear cell subtype arising from PROXIMAL tubule epithelium (associated with VHL and smoking). Transitional cell carcinoma arises from urothelium (renal pelvis/bladder) and causes painless hematuria but not this solid parenchymal renal-vein-invading mass. Wilms tumor (metanephric blastema) is a childhood tumor.'
  },
  {
    id: 'renal-16', system: 'Renal', topic: 'Acid-base', difficulty: 'medium',
    stem: 'A patient with chronic vomiting has pH 7.50, PaCO2 48 mmHg, HCO3 36 mEq/L, and a urine chloride of 8 mEq/L. Which disorder is present and how would it respond to treatment?',
    options: ['Chloride-responsive metabolic alkalosis; give normal saline', 'Chloride-resistant metabolic alkalosis; give saline', 'Respiratory alkalosis; no treatment', 'Anion gap metabolic acidosis; give bicarbonate'],
    answer: 0,
    explanation: 'High pH with high HCO3 is a metabolic alkalosis; the elevated PaCO2 is appropriate respiratory compensation. Vomiting loses HCl and volume, and a LOW urine chloride (<20) marks a saline (chloride)-RESPONSIVE alkalosis that corrects with normal saline (restoring volume/chloride). Chloride-RESISTANT alkalosis (urine Cl >20) occurs with mineralocorticoid excess and does NOT respond to saline. This is not a respiratory or acidotic process.'
  },
  {
    id: 'renal-17', system: 'Renal', topic: 'Hormones', difficulty: 'medium',
    stem: 'A patient with chronic kidney disease develops anemia that is normocytic and normochromic with a low reticulocyte count. Deficiency of which kidney-derived substance is responsible?',
    options: ['Erythropoietin', 'Renin', '1,25-dihydroxyvitamin D', 'Thrombopoietin'],
    answer: 0,
    explanation: 'The kidney peritubular interstitial cells make erythropoietin; in CKD, reduced EPO causes a normocytic, normochromic anemia with low reticulocytes, treated with EPO-stimulating agents. Renin drives the RAAS (blood pressure/volume), not red cell production. Reduced 1,25-vitamin D in CKD causes secondary hyperparathyroidism and bone disease, not anemia. Thrombopoietin (made mainly by the liver) governs platelet production.'
  },

  /* ===================== GASTROINTESTINAL (gi) ===================== */
  {
    id: 'gi-01', system: 'Gastrointestinal', topic: 'Esophagus', difficulty: 'medium',
    stem: 'A 55-year-old with chronic acid reflux undergoes endoscopy showing salmon-colored mucosa extending above the gastroesophageal junction. Biopsy shows columnar epithelium with goblet cells. Which statement is correct?',
    options: ['This is squamous metaplasia with no cancer risk', 'This is intestinal metaplasia (Barrett esophagus) predisposing to adenocarcinoma', 'This predisposes to squamous cell carcinoma', 'This is a normal variant requiring no follow-up'],
    answer: 1,
    explanation: 'Chronic GERD drives replacement of the normal squamous esophageal lining with intestinal-type columnar epithelium containing goblet cells - Barrett esophagus, a metaplasia that predisposes to esophageal ADENOCARCINOMA (distal esophagus). Squamous cell carcinoma of the esophagus is linked to smoking, alcohol, and hot beverages, not Barrett. It is not squamous metaplasia and does require surveillance because of the dysplasia/cancer risk.'
  },
  {
    id: 'gi-02', system: 'Gastrointestinal', topic: 'Stomach', difficulty: 'medium',
    stem: 'A patient with epigastric pain has a duodenal ulcer. Which feature distinguishes a typical benign duodenal ulcer from a gastric ulcer?',
    options: ['Duodenal ulcer pain worsens with food', 'Duodenal ulcer pain improves with food; gastric ulcer pain worsens with food', 'Both are strongly associated with malignancy', 'Duodenal ulcers are usually caused by NSAIDs, not H. pylori'],
    answer: 1,
    explanation: 'Duodenal ulcer pain typically IMPROVES with food (and recurs 2-4 hours later), whereas gastric ulcer pain typically WORSENS with food - a classic distinguishing clue. Duodenal ulcers are almost always benign and are most strongly associated with H. pylori (and acid hypersecretion); gastric ulcers carry more malignant potential and are more NSAID-associated. So the food relationship and malignancy risk both differ.'
  },
  {
    id: 'gi-03', system: 'Gastrointestinal', topic: 'Liver', difficulty: 'hard',
    stem: 'A neonate has jaundice with elevated UNconjugated bilirubin, and phototherapy is only partially effective. The child later develops kernicterus. A near-complete absence of UDP-glucuronosyltransferase is found. Which condition is this?',
    options: ['Gilbert syndrome', 'Crigler-Najjar syndrome type I', 'Dubin-Johnson syndrome', 'Rotor syndrome'],
    answer: 1,
    explanation: 'Near-total absence of UDP-glucuronosyltransferase causes Crigler-Najjar type I: severe UNconjugated hyperbilirubinemia in the newborn, risk of kernicterus, and poor response to phototherapy (often fatal without liver transplant). Gilbert syndrome is a mild, benign reduction in the same enzyme causing intermittent jaundice with stress. Dubin-Johnson and Rotor cause CONJUGATED hyperbilirubinemia (defective excretion), not unconjugated.'
  },
  {
    id: 'gi-04', system: 'Gastrointestinal', topic: 'Pancreas', difficulty: 'medium',
    stem: 'A 45-year-old man with heavy alcohol use has severe epigastric pain radiating to the back, with serum lipase three times the upper limit of normal. Which is the most appropriate description of the primary mechanism of injury?',
    options: ['Autoimmune destruction of islet cells', 'Premature activation of pancreatic digestive enzymes causing autodigestion', 'Bacterial infection of the pancreatic duct', 'Ischemic infarction of the pancreas'],
    answer: 1,
    explanation: 'Acute pancreatitis (here, alcohol-induced) results from premature intra-acinar activation of digestive enzymes (especially trypsin), causing autodigestion, inflammation, and fat necrosis; lipase elevation supports the diagnosis. Autoimmune islet destruction causes type 1 diabetes, not pancreatitis. Primary bacterial ductal infection and ischemic infarction are not the usual initiating mechanisms; gallstones and alcohol are the two most common causes.'
  },
  {
    id: 'gi-05', system: 'Gastrointestinal', topic: 'Bowel', difficulty: 'medium',
    stem: 'A 28-year-old has chronic bloody diarrhea. Colonoscopy shows continuous inflammation extending proximally from the rectum with no skip lesions, and biopsy shows crypt abscesses limited to the mucosa and submucosa. Which complication is most associated with this disease?',
    options: ['Transmural fistula formation', 'Toxic megacolon and increased colorectal cancer risk', 'Gallstones from bile acid malabsorption', 'Perianal skin tags and strictures'],
    answer: 1,
    explanation: 'Continuous, rectum-to-proximal inflammation limited to the mucosa/submucosa with crypt abscesses is ulcerative colitis; complications include toxic megacolon and increased colorectal cancer risk (proportional to extent and duration). Transmural inflammation, fistulas, skip lesions, gallstones from bile-acid malabsorption, and perianal disease are features of CROHN disease, not ulcerative colitis. The mucosal, continuous pattern is the key discriminator.'
  },
  {
    id: 'gi-06', system: 'Gastrointestinal', topic: 'Malabsorption', difficulty: 'hard',
    stem: 'A patient with chronic diarrhea, weight loss, and a pruritic vesicular rash on the extensor surfaces has villous atrophy of the duodenum that improves on a gluten-free diet. Which antibody and HLA association is correct?',
    options: ['Anti-mitochondrial antibody; HLA-B27', 'Anti-tissue transglutaminase antibody; HLA-DQ2/DQ8', 'Anti-Saccharomyces antibody; HLA-DR3', 'Anti-smooth muscle antibody; HLA-DQ8 only'],
    answer: 1,
    explanation: 'Celiac disease features anti-tissue transglutaminase (and anti-endomysial) antibodies, association with HLA-DQ2/DQ8, duodenal villous atrophy, and the itchy dermatitis herpetiformis rash; symptoms respond to gluten withdrawal. Anti-mitochondrial antibody indicates primary biliary cholangitis. Anti-Saccharomyces antibodies are seen in Crohn disease. Anti-smooth muscle antibody indicates autoimmune hepatitis. The tTG antibody plus DQ2/DQ8 is the celiac fingerprint.'
  },
  {
    id: 'gi-07', system: 'Gastrointestinal', topic: 'Embryology', difficulty: 'hard',
    stem: 'A 3-week-old firstborn boy has projectile non-bilious vomiting after feeds and a palpable "olive" mass in the epigastrium. Which metabolic disturbance is expected?',
    options: ['Hypochloremic hypokalemic metabolic alkalosis', 'High anion gap metabolic acidosis', 'Respiratory alkalosis', 'Hyperchloremic metabolic acidosis'],
    answer: 0,
    explanation: 'Hypertrophic pyloric stenosis (classically a firstborn male, 3-6 weeks old) causes non-bilious projectile vomiting and a palpable olive; loss of gastric HCl produces a HYPOCHLOREMIC, HYPOKALEMIC METABOLIC ALKALOSIS. It does not cause an anion gap acidosis or respiratory alkalosis. A hyperchloremic metabolic acidosis would occur with lower-GI bicarbonate losses (diarrhea), the opposite of gastric acid loss.'
  },
  {
    id: 'gi-08', system: 'Gastrointestinal', topic: 'Liver', difficulty: 'medium',
    stem: 'A 50-year-old man with a history of hepatitis C cirrhosis has a rising alpha-fetoprotein and a new liver mass. Which is the most likely diagnosis?',
    options: ['Hepatic hemangioma', 'Hepatocellular carcinoma', 'Focal nodular hyperplasia', 'Hepatic adenoma'],
    answer: 1,
    explanation: 'A new liver mass with rising alpha-fetoprotein in a patient with cirrhosis (hepatitis C is a major risk factor, along with hepatitis B, alcohol, and aflatoxin) is hepatocellular carcinoma. Hepatic hemangioma is the most common benign liver tumor but does not raise AFP. Focal nodular hyperplasia is a benign hyperplastic nodule. Hepatic adenoma is associated with oral contraceptives and can rupture but does not typically elevate AFP.'
  },
  {
    id: 'gi-09', system: 'Gastrointestinal', topic: 'Biliary', difficulty: 'medium',
    stem: 'An obese 40-year-old woman has right upper quadrant pain after fatty meals. Ultrasound shows gallstones. Cholecystokinin is released in response to fat and protein. From which cells is CCK secreted, and what is one of its actions?',
    options: ['G cells; stimulates gastric acid', 'I cells of the duodenum; stimulates gallbladder contraction', 'S cells; stimulates gastric emptying', 'D cells; stimulates pancreatic bicarbonate'],
    answer: 1,
    explanation: 'CCK is secreted by I cells of the duodenum/jejunum in response to fatty acids and amino acids; it stimulates gallbladder contraction and pancreatic enzyme release and slows gastric emptying - which is why fatty meals provoke pain in gallstone disease. G cells secrete gastrin (acid). S cells secrete secretin (pancreatic bicarbonate). D cells secrete somatostatin (inhibitory). Only CCK from I cells drives gallbladder contraction.'
  },
  {
    id: 'gi-10', system: 'Gastrointestinal', topic: 'Colon', difficulty: 'medium',
    stem: 'A 65-year-old has left lower quadrant pain, fever, and altered bowel habits. CT shows inflamed outpouchings of the sigmoid colon. Which is the most likely underlying anatomic lesion?',
    options: ['True diverticula involving all bowel layers', 'False diverticula (mucosa/submucosa herniation) at points of vascular penetration', 'Colonic adenocarcinoma', 'Volvulus of the sigmoid colon'],
    answer: 1,
    explanation: 'Diverticulitis arises from inflamed FALSE diverticula - herniations of mucosa and submucosa through the muscular wall at sites where the vasa recta penetrate (points of weakness), typically in the sigmoid colon, related to low-fiber diets and increased intraluminal pressure. TRUE diverticula (all layers) are less common (e.g., Meckel). Adenocarcinoma and volvulus are separate entities that would show different imaging findings.'
  },
  {
    id: 'gi-11', system: 'Gastrointestinal', topic: 'Pediatrics', difficulty: 'hard',
    stem: 'A 2-year-old boy has painless lower GI bleeding. A technetium-99m pertechnetate scan lights up a structure in the right lower quadrant. Which embryologic remnant and tissue type explains the bleeding?',
    options: ['Omphalomesenteric (vitelline) duct remnant with ectopic gastric mucosa', 'Persistent urachus with transitional epithelium', 'Intestinal malrotation with midgut volvulus', 'Duplication cyst with squamous lining'],
    answer: 0,
    explanation: 'A Meckel diverticulum is a persistent omphalomesenteric (vitelline) duct remnant; when it contains ectopic GASTRIC mucosa, acid secretion causes painless lower GI bleeding, and the gastric mucosa takes up technetium-99m pertechnetate (the "Meckel scan"). The rule of 2s applies. A persistent urachus connects bladder to umbilicus (urine drainage). Malrotation with volvulus causes bilious vomiting and obstruction, not painless bleeding with gastric mucosa uptake.'
  },
  {
    id: 'gi-12', system: 'Gastrointestinal', topic: 'Genetics', difficulty: 'hard',
    stem: 'A 20-year-old has hundreds of colonic adenomatous polyps on colonoscopy, and his father had colon cancer at age 40. Which gene is mutated, and what is the natural history if untreated?',
    options: ['APC gene; near-100% progression to colorectal cancer', 'RET gene; medullary thyroid cancer', 'BRCA1; breast cancer', 'RB1; retinoblastoma'],
    answer: 0,
    explanation: 'Hundreds to thousands of adenomatous colon polyps in a young person with a dominant family history is familial adenomatous polyposis, caused by mutation of the APC tumor suppressor on chromosome 5q; without prophylactic colectomy, colorectal cancer is essentially inevitable. RET mutations cause MEN2/medullary thyroid cancer. BRCA1 relates to breast/ovarian cancer. RB1 causes retinoblastoma - none of these produce the diffuse adenomatous polyposis phenotype.'
  },
  {
    id: 'gi-13', system: 'Gastrointestinal', topic: 'Vitamins', difficulty: 'medium',
    stem: 'A patient with terminal ileum resection develops a macrocytic anemia and neurologic symptoms (loss of vibration and position sense). Malabsorption of which vitamin is responsible?',
    options: ['Folate', 'Vitamin B12 (cobalamin)', 'Vitamin C', 'Vitamin B1 (thiamine)'],
    answer: 1,
    explanation: 'The terminal ileum absorbs vitamin B12 (bound to intrinsic factor); its resection causes B12 deficiency, producing a MACROCYTIC (megaloblastic) anemia PLUS neurologic deficits (subacute combined degeneration - dorsal columns and corticospinal tracts). Folate deficiency also causes megaloblastic anemia but NOT the neurologic findings. Vitamin C deficiency causes scurvy. Thiamine deficiency causes Wernicke-Korsakoff/beriberi, a different neurologic picture without macrocytic anemia.'
  },
  {
    id: 'gi-14', system: 'Gastrointestinal', topic: 'Liver', difficulty: 'hard',
    stem: 'A 22-year-old has tremor, difficulty speaking, and abnormal liver function. Slit-lamp exam shows golden-brown rings at the corneal margins, and serum ceruloplasmin is low. Which treatment mechanism is appropriate?',
    options: ['Iron chelation with deferoxamine', 'Copper chelation with penicillamine', 'Phlebotomy to remove excess iron', 'Corticosteroids for autoimmune hepatitis'],
    answer: 1,
    explanation: 'Young age, neuropsychiatric signs, liver disease, Kayser-Fleischer rings, and low ceruloplasmin indicate Wilson disease (ATP7B mutation causing copper accumulation); treatment chelates COPPER (penicillamine or trientine) or uses zinc. Deferoxamine and phlebotomy treat IRON overload (hemochromatosis), a different disease. Corticosteroids treat autoimmune hepatitis, which does not produce Kayser-Fleischer rings or low ceruloplasmin.'
  },
  {
    id: 'gi-15', system: 'Gastrointestinal', topic: 'Physiology', difficulty: 'medium',
    stem: 'A patient with a gastrin-secreting tumor has recurrent, refractory peptic ulcers, including ulcers in the distal duodenum and jejunum, plus diarrhea. Which syndrome is this and what test confirms it?',
    options: ['Zollinger-Ellison syndrome; elevated fasting gastrin with positive secretin stimulation test', 'Carcinoid syndrome; elevated urinary 5-HIAA', 'VIPoma; elevated VIP with watery diarrhea', 'Glucagonoma; elevated glucagon with rash'],
    answer: 0,
    explanation: 'Multiple/refractory ulcers in unusual locations (distal duodenum, jejunum) plus diarrhea suggest a gastrinoma - Zollinger-Ellison syndrome; diagnosis shows high fasting gastrin, and paradoxically gastrin RISES with secretin (which normally suppresses gastrin), a positive secretin stimulation test. Carcinoid (5-HIAA) causes flushing/diarrhea, VIPoma causes profuse watery diarrhea, and glucagonoma causes hyperglycemia and necrolytic migratory erythema - none cause this ulcer pattern.'
  },
  {
    id: 'gi-16', system: 'Gastrointestinal', topic: 'Infection', difficulty: 'medium',
    stem: 'A hospitalized patient on broad-spectrum antibiotics develops profuse watery diarrhea, and colonoscopy shows yellow pseudomembranes. Which organism and toxin mechanism is responsible?',
    options: ['Clostridioides difficile; toxins A and B damaging colonic mucosa', 'Enterotoxigenic E. coli; heat-labile toxin raising cAMP', 'Vibrio cholerae; permanent activation of Gs', 'Shigella; Shiga toxin inactivating 60S ribosome'],
    answer: 0,
    explanation: 'Antibiotic-associated diarrhea with pseudomembranes is Clostridioides difficile colitis; toxin A (enterotoxin) and toxin B (cytotoxin) disrupt the colonic cytoskeleton and mucosa. ETEC heat-labile toxin (raising cAMP like cholera) causes traveler diarrhea without pseudomembranes. Cholera toxin permanently activates Gs. Shiga toxin (Shigella/EHEC) inactivates the 60S ribosome and causes bloody diarrhea/HUS - none produce the classic pseudomembranes of C. difficile.'
  },
  {
    id: 'gi-17', system: 'Gastrointestinal', topic: 'Anatomy', difficulty: 'hard',
    stem: 'A cirrhotic patient develops dilated periumbilical veins (caput medusae), esophageal varices, and internal hemorrhoids. These findings result from portosystemic anastomoses due to portal hypertension. Which pairing of a site and its systemic drainage is correct?',
    options: ['Esophageal varices: left gastric vein to azygos vein', 'Caput medusae: superior mesenteric to inferior mesenteric vein', 'Hemorrhoids: superior rectal to renal vein', 'Retroperitoneal varices: splenic vein to hepatic vein'],
    answer: 0,
    explanation: 'In portal hypertension, blood detours through portosystemic anastomoses. Esophageal varices form where the LEFT GASTRIC (portal) vein meets the esophageal tributaries of the AZYGOS (systemic) vein. Caput medusae involves paraumbilical veins to the systemic epigastric veins (not SMV-IMV). Hemorrhoids form where the superior rectal (portal) meets the middle/inferior rectal (systemic, to internal iliac), not the renal vein. The left gastric-azygos pairing is the correct classic anastomosis.'
  },

  /* ===================== HEMATOLOGY / ONCOLOGY (heme) ===================== */
  {
    id: 'heme-01', system: 'Hematology/Oncology', topic: 'Anemia', difficulty: 'easy',
    stem: 'A menstruating 30-year-old woman has fatigue. Labs show microcytic, hypochromic red cells, low ferritin, high total iron-binding capacity, and low transferrin saturation. Which diagnosis fits best?',
    options: ['Anemia of chronic disease', 'Iron deficiency anemia', 'Beta-thalassemia minor', 'Sideroblastic anemia'],
    answer: 1,
    explanation: 'Low ferritin (the most specific marker) with high TIBC and low transferrin saturation in a menstruating woman is iron deficiency anemia. Anemia of chronic disease shows LOW TIBC and normal/high ferritin (iron sequestered by hepcidin). Beta-thalassemia minor has a normal/high iron and a low RDW with target cells. Sideroblastic anemia shows high iron/ferritin with ringed sideroblasts. The low ferritin + high TIBC combination is the iron-deficiency signature.'
  },
  {
    id: 'heme-02', system: 'Hematology/Oncology', topic: 'Hemoglobinopathy', difficulty: 'medium',
    stem: 'A child of African descent has episodes of severe bone pain and a blood smear showing sickled cells. A single amino acid substitution causes this. Which substitution occurs in the beta-globin chain?',
    options: ['Glutamate replaced by valine at position 6', 'Valine replaced by glutamate at position 6', 'Lysine replaced by glutamate at position 6', 'Glutamate replaced by lysine (as in hemoglobin C)'],
    answer: 0,
    explanation: 'Sickle cell disease results from a point mutation replacing GLUTAMATE with VALINE at position 6 of the beta-globin chain; the hydrophobic valine promotes polymerization when deoxygenated, sickling the cell. The reverse (valine to glutamate) is not the mutation. Hemoglobin C is a different substitution (glutamate to LYSINE at the same position 6), which causes milder disease - so the specific glutamate-to-valine change defines HbS.'
  },
  {
    id: 'heme-03', system: 'Hematology/Oncology', topic: 'Coagulation', difficulty: 'hard',
    stem: 'A patient has a prolonged PTT that corrects on mixing with normal plasma, a normal PT, and a history of hemarthroses since childhood in a maternal uncle. Which factor is deficient?',
    options: ['Factor VII', 'Factor VIII', 'Von Willebrand factor only', 'Factor XIII'],
    answer: 1,
    explanation: 'X-linked inheritance (affected maternal uncle), hemarthroses, isolated PTT prolongation that CORRECTS on mixing (indicating a factor deficiency, not an inhibitor), with a normal PT points to hemophilia A - factor VIII deficiency. Factor VII deficiency prolongs the PT, not the PTT. Von Willebrand disease also involves factor VIII but classically causes mucocutaneous bleeding and an abnormal ristocetin test with usually milder joint bleeding. Factor XIII deficiency has normal PT/PTT.'
  },
  {
    id: 'heme-04', system: 'Hematology/Oncology', topic: 'Leukemia', difficulty: 'hard',
    stem: 'A 5-year-old has fatigue, bruising, and bone pain. CBC shows pancytopenia with lymphoblasts; the blasts are TdT-positive and CD10-positive. Which is the most likely diagnosis and a favorable prognostic marker?',
    options: ['Acute myeloid leukemia; Auer rods', 'Acute lymphoblastic leukemia (B-cell); t(12;21)', 'Chronic myeloid leukemia; t(9;22)', 'Chronic lymphocytic leukemia; smudge cells'],
    answer: 1,
    explanation: 'A young child with pancytopenia and TdT+/CD10+ lymphoblasts has B-cell acute lymphoblastic leukemia - the most common childhood leukemia; t(12;21) confers a favorable prognosis. Auer rods and myeloperoxidase mark AML. The t(9;22) BCR-ABL Philadelphia chromosome defines CML (and portends worse prognosis in ALL). Smudge cells and CLL occur in older adults, not young children.'
  },
  {
    id: 'heme-05', system: 'Hematology/Oncology', topic: 'Lymphoma', difficulty: 'medium',
    stem: 'A 25-year-old has a painless cervical lymph node and reports pain in the node after drinking alcohol, plus fevers and night sweats. Biopsy shows large cells with bilobed nuclei and prominent nucleoli ("owl eyes"). Which is the most likely diagnosis?',
    options: ['Burkitt lymphoma', 'Hodgkin lymphoma (Reed-Sternberg cells)', 'Follicular lymphoma', 'Chronic lymphocytic leukemia'],
    answer: 1,
    explanation: 'Reed-Sternberg cells (binucleate "owl eyes," CD15+/CD30+), a young patient, B symptoms, and alcohol-induced nodal pain are classic Hodgkin lymphoma, which spreads contiguously between nodal groups. Burkitt lymphoma shows a "starry sky" pattern and t(8;14) c-myc. Follicular lymphoma has t(14;18) BCL2 and a waxing/waning course. CLL is a leukemia of older adults with smudge cells, not Reed-Sternberg cells.'
  },
  {
    id: 'heme-06', system: 'Hematology/Oncology', topic: 'Hemolysis', difficulty: 'hard',
    stem: 'A patient develops acute hemolysis after eating fava beans and after starting an antimalarial. The blood smear shows bite cells and Heinz bodies. Which enzyme deficiency is responsible?',
    options: ['Pyruvate kinase deficiency', 'Glucose-6-phosphate dehydrogenase deficiency', 'Hexokinase deficiency', 'Spectrin deficiency'],
    answer: 1,
    explanation: 'Episodic hemolysis triggered by oxidant stress (fava beans, antimalarials, sulfa drugs, infection) with bite cells and Heinz bodies is G6PD deficiency; G6PD generates NADPH to regenerate glutathione, and without it, oxidized hemoglobin precipitates as Heinz bodies and splenic macrophages take "bites." Pyruvate kinase deficiency causes chronic hemolysis without oxidant triggers/Heinz bodies. Hexokinase deficiency is rare. Spectrin defects cause hereditary spherocytosis (spherocytes, positive osmotic fragility), not bite cells.'
  },
  {
    id: 'heme-07', system: 'Hematology/Oncology', topic: 'Platelets', difficulty: 'medium',
    stem: 'A previously healthy child develops petechiae and easy bruising 1-2 weeks after a viral illness. Platelet count is very low, but PT, PTT, and hemoglobin are normal, and the spleen is not enlarged. Which is the most likely diagnosis?',
    options: ['Immune thrombocytopenic purpura', 'Thrombotic thrombocytopenic purpura', 'Disseminated intravascular coagulation', 'Hemolytic uremic syndrome'],
    answer: 0,
    explanation: 'Isolated thrombocytopenia after a viral illness in an otherwise well child, with normal coagulation studies and no other cytopenias, is immune thrombocytopenic purpura (anti-platelet antibodies, increased peripheral destruction). TTP adds microangiopathic hemolytic anemia, neurologic changes, fever, and renal findings (a pentad). DIC prolongs PT/PTT and consumes fibrinogen. HUS features hemolysis and acute kidney injury, typically after E. coli O157:H7.'
  },
  {
    id: 'heme-08', system: 'Hematology/Oncology', topic: 'Coagulation pharmacology', difficulty: 'medium',
    stem: 'A patient is started on a drug that inhibits vitamin K epoxide reductase, reducing gamma-carboxylation of factors II, VII, IX, and X. Which statement about this drug is correct?',
    options: ['It is monitored with PTT and has an immediate onset', 'It is monitored with PT/INR and can cause an initial transient hypercoagulable state', 'It directly inhibits thrombin', 'It is safe in pregnancy'],
    answer: 1,
    explanation: 'Warfarin inhibits vitamin K epoxide reductase, lowering functional factors II, VII, IX, X and proteins C and S; it is monitored with the PT/INR (VII has the shortest half-life). Because protein C falls fastest, warfarin can transiently create a HYPERCOAGULABLE state early (risk of skin necrosis), so bridging with heparin is used. Heparin (not warfarin) is monitored with PTT. Warfarin does not directly inhibit thrombin and is TERATOGENIC (contraindicated in pregnancy).'
  },
  {
    id: 'heme-09', system: 'Hematology/Oncology', topic: 'Myeloproliferative', difficulty: 'hard',
    stem: 'A 60-year-old has facial plethora, pruritus after hot showers, and an elevated hematocrit. Erythropoietin is LOW, and a JAK2 mutation is found. Which is the most likely diagnosis?',
    options: ['Secondary polycythemia from hypoxia', 'Polycythemia vera', 'Relative polycythemia from dehydration', 'Chronic myeloid leukemia'],
    answer: 1,
    explanation: 'An elevated hematocrit with LOW erythropoietin and a JAK2 mutation, plus aquagenic pruritus and plethora, is polycythemia vera (a myeloproliferative neoplasm of autonomous erythrocyte production). SECONDARY polycythemia (hypoxia, EPO-secreting tumor) shows HIGH EPO. Relative polycythemia from dehydration has a normal red cell mass. CML is driven by BCR-ABL (t(9;22)) with a left-shifted granulocytosis, not isolated erythrocytosis with low EPO.'
  },
  {
    id: 'heme-10', system: 'Hematology/Oncology', topic: 'Plasma cell', difficulty: 'medium',
    stem: 'A 68-year-old has bone pain, anemia, hypercalcemia, and renal insufficiency. Serum protein electrophoresis shows a monoclonal spike, and the urine contains Bence Jones protein. Marrow shows >10% plasma cells. Which is the diagnosis?',
    options: ['Waldenstrom macroglobulinemia', 'Multiple myeloma', 'Monoclonal gammopathy of undetermined significance', 'Chronic lymphocytic leukemia'],
    answer: 1,
    explanation: 'The CRAB features (hyperCalcemia, Renal failure, Anemia, Bone lytic lesions) with a monoclonal M-spike, Bence Jones (light chain) proteinuria, and clonal marrow plasmacytosis define multiple myeloma. Waldenstrom is an IgM monoclonal gammopathy causing hyperviscosity WITHOUT lytic bone lesions. MGUS has an M-spike but no CRAB features and <10% plasma cells. CLL is a mature B-cell leukemia, not a plasma-cell dyscrasia.'
  },
  {
    id: 'heme-11', system: 'Hematology/Oncology', topic: 'Anemia', difficulty: 'medium',
    stem: 'A vegan patient develops a macrocytic anemia with hypersegmented neutrophils. Serum methylmalonic acid is NORMAL, but homocysteine is elevated. Which deficiency is most likely?',
    options: ['Vitamin B12 deficiency', 'Folate deficiency', 'Iron deficiency', 'Vitamin B6 deficiency'],
    answer: 1,
    explanation: 'Both B12 and folate deficiency cause megaloblastic anemia with hypersegmented neutrophils and elevated homocysteine, but only B12 deficiency raises METHYLMALONIC ACID. A normal methylmalonic acid with high homocysteine points to FOLATE deficiency. Iron deficiency is microcytic, not macrocytic. B6 deficiency causes a sideroblastic (microcytic) anemia and neurologic symptoms, not megaloblastic changes.'
  },
  {
    id: 'heme-12', system: 'Hematology/Oncology', topic: 'Thrombosis', difficulty: 'hard',
    stem: 'A young woman has recurrent deep vein thromboses. Testing shows that adding activated protein C fails to prolong her clotting time as expected. Which inherited condition is most likely?',
    options: ['Antithrombin III deficiency', 'Factor V Leiden', 'Protein C deficiency', 'Prothrombin gene mutation'],
    answer: 1,
    explanation: 'Factor V Leiden is a point mutation making factor V resistant to cleavage by activated protein C, so adding APC fails to appropriately prolong clotting (activated protein C resistance) - it is the most common inherited hypercoagulable state. Antithrombin III deficiency shows a poor PTT response to heparin. Protein C deficiency reduces a natural anticoagulant (and risks warfarin skin necrosis) but does not cause APC RESISTANCE. The prothrombin gene mutation raises prothrombin levels but does not cause APC resistance.'
  },
  {
    id: 'heme-13', system: 'Hematology/Oncology', topic: 'Transfusion', difficulty: 'medium',
    stem: 'Minutes into a blood transfusion, a patient develops fever, flank pain, hypotension, and hemoglobinuria. Which reaction is this and what is the mechanism?',
    options: ['Acute hemolytic transfusion reaction from ABO incompatibility (preformed IgM)', 'Febrile non-hemolytic reaction from cytokines', 'Anaphylaxis from IgA deficiency', 'Delayed hemolytic reaction from anamnestic antibody'],
    answer: 0,
    explanation: 'Rapid onset of fever, flank pain, hypotension, and hemoglobinuria during transfusion is an ACUTE hemolytic transfusion reaction, usually from ABO incompatibility, where preformed recipient IgM antibodies cause complement-mediated intravascular hemolysis. Febrile non-hemolytic reactions cause fever/chills WITHOUT hemolysis. Anaphylaxis (IgA-deficient recipients) causes urticaria/bronchospasm/shock without hemoglobinuria. Delayed hemolytic reactions occur days later via anamnestic (IgG) antibodies.'
  },
  {
    id: 'heme-14', system: 'Hematology/Oncology', topic: 'Chemotherapy', difficulty: 'hard',
    stem: 'A patient on a chemotherapeutic agent develops a dry cough and progressive pulmonary fibrosis. The drug generates free radicals and is cell-cycle specific for G2/M. Which agent is most likely?',
    options: ['Doxorubicin', 'Bleomycin', 'Vincristine', 'Cyclophosphamide'],
    answer: 1,
    explanation: 'Bleomycin induces free-radical DNA strand breaks (G2/M phase specific) and characteristically causes PULMONARY FIBROSIS. Doxorubicin signature toxicity is dilated CARDIOMYOPATHY (free-radical mediated, prevented by dexrazoxane). Vincristine causes peripheral NEUROPATHY (microtubule inhibition). Cyclophosphamide causes hemorrhagic CYSTITIS from acrolein (prevented by mesna). The lung fibrosis fingerprint points to bleomycin.'
  },
  {
    id: 'heme-15', system: 'Hematology/Oncology', topic: 'DIC', difficulty: 'hard',
    stem: 'A patient with gram-negative sepsis develops both bleeding from venipuncture sites and small-vessel thrombosis. Labs show low platelets, prolonged PT and PTT, low fibrinogen, and elevated D-dimer. Which process explains all findings?',
    options: ['Immune thrombocytopenic purpura', 'Disseminated intravascular coagulation', 'Hemophilia A', 'Vitamin K deficiency'],
    answer: 1,
    explanation: 'Simultaneous bleeding and thrombosis with low platelets, prolonged PT/PTT, LOW fibrinogen, and HIGH D-dimer is disseminated intravascular coagulation: widespread activation of coagulation consumes platelets and clotting factors (causing bleeding) while forming microthrombi, and fibrinolysis raises D-dimer. ITP shows isolated low platelets with normal coagulation times. Hemophilia A prolongs only the PTT. Vitamin K deficiency prolongs PT/PTT but does NOT consume fibrinogen or raise D-dimer.'
  },
  {
    id: 'heme-16', system: 'Hematology/Oncology', topic: 'Anemia', difficulty: 'medium',
    stem: 'A patient with rheumatoid arthritis has a mild normocytic anemia. Iron studies show low serum iron, LOW TIBC, and HIGH ferritin. Which mediator drives this pattern?',
    options: ['Erythropoietin excess', 'Hepcidin, which sequesters iron in macrophages', 'Intrinsic factor deficiency', 'Increased gastrointestinal blood loss'],
    answer: 1,
    explanation: 'Anemia of chronic disease is driven by hepcidin (an acute-phase reactant increased by inflammation), which traps iron in macrophages and reduces absorption - giving LOW serum iron, LOW TIBC, and HIGH ferritin. Erythropoietin is typically low/blunted, not excessive. Intrinsic factor deficiency causes megaloblastic (B12) anemia. GI blood loss would cause IRON DEFICIENCY with high TIBC and low ferritin, the opposite iron-study pattern.'
  },
  {
    id: 'heme-17', system: 'Hematology/Oncology', topic: 'Oncogenes', difficulty: 'hard',
    stem: 'A rapidly growing jaw mass in an African child shows a "starry sky" appearance on biopsy with a very high proliferation index. Which translocation and oncogene are involved, and what virus is associated?',
    options: ['t(9;22), BCR-ABL; associated with no virus', 't(8;14), c-myc; associated with Epstein-Barr virus', 't(14;18), BCL2; associated with HTLV-1', 't(15;17), PML-RARA; associated with HIV'],
    answer: 1,
    explanation: 'Burkitt lymphoma shows a "starry sky" pattern (macrophages amid sheets of tumor cells) and is driven by t(8;14) translocating c-MYC next to the immunoglobulin heavy-chain promoter; the endemic (African, jaw) form is associated with Epstein-Barr virus. t(9;22) BCR-ABL is CML/ALL. t(14;18) BCL2 is follicular lymphoma. t(15;17) PML-RARA is acute promyelocytic leukemia (treated with all-trans retinoic acid).'
  },

  /* ===================== ENDOCRINE (endo) ===================== */
  {
    id: 'endo-01', system: 'Endocrine', topic: 'Thyroid', difficulty: 'medium',
    stem: 'A 35-year-old woman has weight loss, heat intolerance, palpitations, and exophthalmos. TSH is low and free T4 is high. Radioactive iodine uptake is diffusely increased. Which mechanism explains her hyperthyroidism?',
    options: ['Thyroid-stimulating immunoglobulin activating the TSH receptor', 'Destructive release of preformed hormone', 'A TSH-secreting pituitary adenoma', 'Iodine deficiency'],
    answer: 0,
    explanation: 'Diffuse goiter, exophthalmos, and diffusely increased iodine uptake with low TSH indicate Graves disease, caused by thyroid-stimulating immunoglobulins (IgG) that activate the TSH receptor. Destructive thyroiditis (e.g., subacute) RELEASES preformed hormone but shows LOW uptake. A TSH-secreting adenoma would show HIGH TSH. Iodine deficiency causes hypothyroid goiter, not hyperthyroidism with exophthalmos. Only Graves explains the ophthalmopathy plus high uptake.'
  },
  {
    id: 'endo-02', system: 'Endocrine', topic: 'Adrenal', difficulty: 'hard',
    stem: 'A patient has hypertension, central obesity, purple striae, proximal muscle weakness, and hyperglycemia. A low-dose dexamethasone test fails to suppress cortisol, but a high-dose test does suppress it, and ACTH is elevated. Where is the lesion?',
    options: ['Adrenal cortisol-secreting adenoma', 'ACTH-secreting pituitary adenoma (Cushing disease)', 'Ectopic ACTH from small cell lung cancer', 'Exogenous glucocorticoid use'],
    answer: 1,
    explanation: 'Cortisol excess with HIGH ACTH that does NOT suppress at low-dose but DOES suppress at high-dose dexamethasone localizes to a pituitary ACTH-secreting adenoma (Cushing DISEASE) - pituitary tumors retain partial feedback sensitivity. An adrenal adenoma would have LOW ACTH (autonomous cortisol). Ectopic ACTH (small cell lung cancer) is high ACTH that does NOT suppress even at high dose. Exogenous steroids cause LOW ACTH and low endogenous cortisol.'
  },
  {
    id: 'endo-03', system: 'Endocrine', topic: 'Diabetes', difficulty: 'medium',
    stem: 'A 12-year-old presents with polyuria, polydipsia, weight loss, and diabetic ketoacidosis. Which pathophysiology best fits type 1 diabetes?',
    options: ['Peripheral insulin resistance with hyperinsulinemia', 'Autoimmune T-cell destruction of pancreatic beta cells', 'Amyloid deposition in islets', 'A single gene defect in glucokinase'],
    answer: 1,
    explanation: 'Type 1 diabetes is autoimmune (T-cell-mediated) destruction of beta cells, leading to absolute insulin deficiency, DKA, and onset typically in youth (associated with HLA-DR3/DR4 and anti-GAD antibodies). Insulin resistance with hyperinsulinemia and islet amyloid deposition describe type 2 diabetes. A glucokinase gene defect describes MODY (maturity-onset diabetes of the young), a monogenic non-ketotic form, not classic type 1.'
  },
  {
    id: 'endo-04', system: 'Endocrine', topic: 'Parathyroid', difficulty: 'medium',
    stem: 'An asymptomatic patient is found to have hypercalcemia, low phosphate, and an inappropriately elevated PTH. A single parathyroid adenoma is found. Which additional finding is expected?',
    options: ['Increased urinary calcium excretion and risk of kidney stones', 'Decreased bone resorption', 'Low 1,25-dihydroxyvitamin D', 'Metabolic acidosis with hyperphosphatemia'],
    answer: 0,
    explanation: 'Primary hyperparathyroidism (usually a solitary adenoma) raises PTH, causing hypercalcemia, HYPOphosphatemia (PTH is phosphaturic), increased bone resorption, and increased 1,25-vitamin D - with hypercalciuria and kidney stones ("stones, bones, groans, psychiatric overtones"). PTH INCREASES bone resorption (not decreases) and RAISES 1,25-vitamin D. Hyperphosphatemia would suggest renal failure or hypoparathyroidism, not primary hyperparathyroidism.'
  },
  {
    id: 'endo-05', system: 'Endocrine', topic: 'Adrenal', difficulty: 'hard',
    stem: 'A patient has episodic headaches, palpitations, diaphoresis, and severe paroxysmal hypertension. Plasma and urine metanephrines are elevated. Which tumor and treatment sequence is correct?',
    options: ['Pheochromocytoma; alpha-blockade (phenoxybenzamine) before beta-blockade', 'Pheochromocytoma; beta-blockade first', 'Aldosteronoma; spironolactone', 'Carcinoid; octreotide'],
    answer: 0,
    explanation: 'Episodic headache, palpitations, sweating, and paroxysmal hypertension with elevated metanephrines indicate a pheochromocytoma (catecholamine-secreting, chromaffin cells; rule of 10s). Management requires ALPHA-blockade first (phenoxybenzamine) to prevent an unopposed alpha crisis; beta-blockade is added only AFTER alpha-blockade. Aldosteronoma causes hypertension with hypokalemia (not paroxysms/metanephrines). Carcinoid causes flushing/diarrhea with high 5-HIAA, not catecholamine excess.'
  },
  {
    id: 'endo-06', system: 'Endocrine', topic: 'Pituitary', difficulty: 'medium',
    stem: 'A 45-year-old man has coarsening facial features, enlarging hands and a wide-set jaw, and new glucose intolerance. An MRI shows a pituitary mass. Which hormone excess and screening test is correct?',
    options: ['Prolactin; serum prolactin', 'Growth hormone; elevated IGF-1 and failure of GH to suppress after oral glucose', 'ACTH; 24-hour urinary cortisol', 'TSH; free T4'],
    answer: 1,
    explanation: 'Acromegaly (in adults after growth plate fusion) is caused by a GH-secreting pituitary adenoma, producing enlarged extremities/jaw, coarse features, and insulin resistance/glucose intolerance. Screening uses IGF-1 (integrated GH effect) and the oral glucose tolerance test - normally glucose SUPPRESSES GH, but in acromegaly it fails to suppress. Prolactin excess causes galactorrhea/amenorrhea, ACTH excess causes Cushing, and TSH excess causes hyperthyroidism - none give acromegalic features.'
  },
  {
    id: 'endo-07', system: 'Endocrine', topic: 'Thyroid', difficulty: 'medium',
    stem: 'A 50-year-old woman has fatigue, cold intolerance, constipation, and weight gain. TSH is high, free T4 is low, and anti-thyroid peroxidase antibodies are strongly positive. Which is the most likely diagnosis and a long-term risk?',
    options: ['Graves disease; risk of thyroid storm', 'Hashimoto thyroiditis; risk of B-cell (MALT) lymphoma', 'Subacute granulomatous thyroiditis; permanent hyperthyroidism', 'Iodine excess; toxic multinodular goiter'],
    answer: 1,
    explanation: 'Hypothyroid symptoms with high TSH, low free T4, and strongly positive anti-TPO antibodies indicate Hashimoto thyroiditis (autoimmune, lymphocytic infiltrate with Hurthle cells and germinal centers); a recognized long-term risk is thyroid B-cell (MALT) lymphoma. Graves and toxic multinodular goiter cause HYPERthyroidism. Subacute granulomatous (de Quervain) thyroiditis is painful and self-limited, usually returning to euthyroid, not a chronic autoimmune hypothyroidism.'
  },
  {
    id: 'endo-08', system: 'Endocrine', topic: 'Diabetes pharmacology', difficulty: 'medium',
    stem: 'A type 2 diabetic is started on a first-line oral agent that decreases hepatic gluconeogenesis and improves insulin sensitivity without causing hypoglycemia or weight gain. Which serious but rare adverse effect must be considered?',
    options: ['Lactic acidosis (avoid in renal insufficiency)', 'Severe hypoglycemia', 'Weight gain and edema', 'Pancreatitis'],
    answer: 0,
    explanation: 'Metformin (a biguanide) is first-line for type 2 diabetes; it reduces hepatic gluconeogenesis, does not cause hypoglycemia or weight gain, but rarely causes LACTIC ACIDOSIS, so it is avoided in significant renal insufficiency and around iodinated contrast. Sulfonylureas cause hypoglycemia and weight gain. Thiazolidinediones cause weight gain and edema. GLP-1/DPP-4 agents carry a pancreatitis association - none of these describe metformin lactic acidosis risk.'
  },
  {
    id: 'endo-09', system: 'Endocrine', topic: 'Calcium', difficulty: 'hard',
    stem: 'A patient after thyroid surgery develops perioral numbness and carpal spasm when a blood pressure cuff is inflated (Trousseau sign). Which electrolyte abnormality and mechanism is responsible?',
    options: ['Hypocalcemia from inadvertent parathyroid removal', 'Hypercalcemia from PTH excess', 'Hypomagnesemia unrelated to surgery', 'Hyperkalemia'],
    answer: 0,
    explanation: 'Perioral numbness, Trousseau sign, and Chvostek sign after thyroidectomy indicate acute HYPOcalcemia, most often from inadvertent removal or devascularization of the parathyroid glands (loss of PTH). Hypercalcemia causes the opposite (weakness, "stones/bones/groans"). Hypomagnesemia can cause hypocalcemia but is less likely the direct post-thyroidectomy cause. Hyperkalemia causes cardiac/muscle changes, not the neuromuscular irritability of low calcium.'
  },
  {
    id: 'endo-10', system: 'Endocrine', topic: 'Adrenal', difficulty: 'hard',
    stem: 'A patient has fatigue, hyperpigmentation, salt craving, hypotension, hyponatremia, and hyperkalemia. Morning cortisol is low and ACTH is high. Which is the diagnosis and why the hyperpigmentation?',
    options: ['Primary adrenal insufficiency (Addison); ACTH precursor (POMC) stimulates melanocytes', 'Secondary adrenal insufficiency; low ACTH', 'Cushing syndrome; excess cortisol', 'Conn syndrome; aldosterone excess'],
    answer: 0,
    explanation: 'Low cortisol with HIGH ACTH, hyponatremia, HYPERkalemia (aldosterone also lost), hypotension, salt craving, and hyperpigmentation is PRIMARY adrenal insufficiency (Addison disease). The high ACTH comes from POMC, whose cleavage also yields MSH-like activity that stimulates melanocytes, causing hyperpigmentation. SECONDARY insufficiency has LOW ACTH (no hyperpigmentation) and spares aldosterone (normal potassium). Cushing and Conn are hormone EXCESS states, not deficiency.'
  },
  {
    id: 'endo-11', system: 'Endocrine', topic: 'MEN syndromes', difficulty: 'hard',
    stem: 'A patient has medullary thyroid carcinoma, a pheochromocytoma, and a marfanoid habitus with mucosal neuromas. Which gene is mutated and which MEN syndrome is this?',
    options: ['MEN1 gene; MEN1', 'RET proto-oncogene; MEN2B', 'VHL gene; von Hippel-Lindau', 'NF1 gene; neurofibromatosis'],
    answer: 1,
    explanation: 'Medullary thyroid carcinoma + pheochromocytoma + mucosal neuromas/marfanoid habitus is MEN2B, caused by a RET proto-oncogene mutation (also underlying MEN2A). MEN1 (the "3 Ps": parathyroid, pituitary, pancreas) is due to the MEN1 tumor suppressor. VHL causes hemangioblastomas and renal cell carcinoma. NF1 causes neurofibromas and cafe-au-lait spots. The RET mutation with mucosal neuromas is specific for MEN2B.'
  },
  {
    id: 'endo-12', system: 'Endocrine', topic: 'Water balance', difficulty: 'medium',
    stem: 'A postoperative neurosurgical patient becomes hyponatremic. He is euvolemic, urine osmolality is high, urine sodium is elevated, and serum uric acid is low. Which is the most likely diagnosis?',
    options: ['SIADH', 'Diabetes insipidus', 'Cerebral salt wasting with hypovolemia', 'Primary polydipsia'],
    answer: 0,
    explanation: 'Euvolemic hyponatremia with inappropriately concentrated urine, elevated urine sodium, and low serum uric acid is SIADH - excess ADH retains free water. Diabetes insipidus causes HYPERnatremia with dilute urine (too little ADH/response). Cerebral salt wasting also causes hyponatremia but with HYPOvolemia (volume depletion), distinguishing it from euvolemic SIADH. Primary polydipsia produces dilute urine as the kidney tries to excrete the water load.'
  },
  {
    id: 'endo-13', system: 'Endocrine', topic: 'Thyroid physiology', difficulty: 'medium',
    stem: 'A critically ill patient in the ICU has low T3, low/normal T4, and normal or low TSH, but appears clinically euthyroid. Which is the best interpretation?',
    options: ['Euthyroid sick syndrome (low T3 syndrome); usually no treatment', 'Primary hypothyroidism; start levothyroxine', 'Central hypothyroidism; image the pituitary', 'Subclinical hyperthyroidism'],
    answer: 0,
    explanation: 'In serious nonthyroidal illness, peripheral conversion of T4 to active T3 falls (more reverse T3 forms), producing low T3 with normal/low TSH in a clinically euthyroid patient - euthyroid sick syndrome, which generally needs no thyroid treatment and resolves with recovery. Treating it as primary or central hypothyroidism risks overtreatment; the normal-range TSH and clinical euthyroidism argue against true hypo- or hyperthyroidism.'
  },
  {
    id: 'endo-14', system: 'Endocrine', topic: 'Diabetes complications', difficulty: 'medium',
    stem: 'A poorly controlled diabetic develops non-enzymatic glycosylation that thickens capillary basement membranes and damages the retina and glomeruli. Which additional mechanism contributes to diabetic cataracts and neuropathy via osmotic and oxidative stress?',
    options: ['Increased sorbitol accumulation via aldose reductase', 'Decreased advanced glycation end-products', 'Excess pyruvate dehydrogenase activity', 'Reduced protein kinase C activity'],
    answer: 0,
    explanation: 'Chronic hyperglycemia drives glucose into the polyol pathway, where ALDOSE REDUCTASE converts it to SORBITOL; sorbitol accumulation causes osmotic and oxidative damage in tissues with aldose reductase but low sorbitol dehydrogenase (lens, nerves, retina), contributing to cataracts and neuropathy. Diabetes INCREASES (not decreases) advanced glycation end-products and INCREASES protein kinase C activity. Excess pyruvate dehydrogenase activity is not a mechanism of diabetic complications.'
  },
  {
    id: 'endo-15', system: 'Endocrine', topic: 'Adrenal enzymes', difficulty: 'hard',
    stem: 'A newborn girl has ambiguous genitalia, hypotension, hyponatremia, and hyperkalemia. 17-hydroxyprogesterone is markedly elevated. Which enzyme is deficient?',
    options: ['21-hydroxylase', '11-beta-hydroxylase', '17-alpha-hydroxylase', 'Aromatase'],
    answer: 0,
    explanation: '21-hydroxylase deficiency is the most common congenital adrenal hyperplasia: blocked cortisol and aldosterone synthesis shunts precursors to androgens (virilization/ambiguous genitalia) and causes SALT WASTING (hypotension, hyponatremia, hyperkalemia); 17-hydroxyprogesterone accumulates. 11-beta-hydroxylase deficiency causes virilization but HYPERtension (11-deoxycorticosterone excess). 17-alpha-hydroxylase deficiency causes hypertension with LOW androgens. Aromatase deficiency does not fit this salt-wasting virilizing picture.'
  },
  {
    id: 'endo-16', system: 'Endocrine', topic: 'Pancreas', difficulty: 'hard',
    stem: 'A patient has episodes of confusion and sweating relieved by eating; during an episode, glucose is low, insulin is high, and C-peptide is HIGH. Which is the most likely cause?',
    options: ['Surreptitious exogenous insulin injection', 'Insulinoma', 'Sulfonylurea overdose only if C-peptide is low', 'Glucagonoma'],
    answer: 1,
    explanation: 'Hypoglycemia with HIGH insulin AND HIGH C-peptide indicates ENDOGENOUS insulin overproduction - an insulinoma (C-peptide is co-secreted with endogenous insulin). Exogenous insulin injection would show high insulin but LOW C-peptide (suppressed endogenous production). Sulfonylureas also raise C-peptide (they stimulate endogenous release), so a sulfonylurea screen is needed to distinguish it. Glucagonoma causes HYPERglycemia and necrolytic migratory erythema, not hypoglycemia.'
  },
  {
    id: 'endo-17', system: 'Endocrine', topic: 'Bone', difficulty: 'medium',
    stem: 'An elderly man has isolated elevation of alkaline phosphatase with normal calcium and phosphate. He has bone pain, an enlarging hat size, and hearing loss. X-ray shows a mosaic bone pattern. Which condition is this?',
    options: ['Osteoporosis', 'Paget disease of bone', 'Osteomalacia', 'Primary hyperparathyroidism'],
    answer: 1,
    explanation: 'Isolated high alkaline phosphatase with normal calcium/phosphate, bone pain, skull enlargement (increasing hat size), hearing loss, and a mosaic ("jigsaw") lamellar pattern is Paget disease of bone (disordered osteoclast/osteoblast remodeling). Osteoporosis has normal alkaline phosphatase and normal bone architecture. Osteomalacia shows low vitamin D with low calcium/phosphate. Primary hyperparathyroidism raises calcium and lowers phosphate, unlike the normal levels here.'
  },

  /* ===================== REPRODUCTIVE (repro) ===================== */
  {
    id: 'repro-01', system: 'Reproductive', topic: 'Menstrual physiology', difficulty: 'medium',
    stem: 'Which hormonal event directly triggers ovulation at mid-cycle?',
    options: ['A sharp fall in estrogen', 'A luteinizing hormone surge driven by high estrogen positive feedback', 'A progesterone surge from the corpus luteum', 'A drop in FSH below baseline'],
    answer: 1,
    explanation: 'Ovulation is triggered by an LH surge; near mid-cycle, sustained high ESTROGEN from the dominant follicle switches from negative to POSITIVE feedback on the pituitary, producing the LH surge (~day 14). Estrogen actually peaks just before ovulation, not falls. Progesterone rises AFTER ovulation from the corpus luteum (it dominates the luteal phase). FSH has a smaller mid-cycle bump, not a drop, and is not the direct ovulation trigger.'
  },
  {
    id: 'repro-02', system: 'Reproductive', topic: 'Pregnancy', difficulty: 'medium',
    stem: 'A pregnant woman at 10 weeks has severe nausea and vomiting, a uterus larger than expected for dates, and a markedly elevated beta-hCG. Ultrasound shows a "snowstorm" pattern with no fetus. Which is the most likely diagnosis?',
    options: ['Complete hydatidiform mole', 'Ectopic pregnancy', 'Threatened abortion', 'Normal twin pregnancy'],
    answer: 0,
    explanation: 'A "snowstorm"/cluster-of-grapes uterus with markedly elevated beta-hCG, hyperemesis, and size greater than dates, with NO fetus, is a complete hydatidiform mole (typically 46,XX of paternal origin, empty egg fertilized). An ectopic pregnancy usually has lower-than-expected hCG and adnexal findings. A threatened abortion has a viable intrauterine pregnancy with bleeding. A twin pregnancy shows two fetuses, not an absent fetus with molar tissue.'
  },
  {
    id: 'repro-03', system: 'Reproductive', topic: 'Male', difficulty: 'medium',
    stem: 'A 25-year-old man has a painless, firm testicular mass. Serum beta-hCG and alpha-fetoprotein help classify germ cell tumors. Which statement is correct?',
    options: ['Pure seminomas usually elevate AFP', 'Yolk sac tumors elevate AFP; choriocarcinoma elevates beta-hCG', 'Seminomas are radioresistant and have a poor prognosis', 'Leydig cell tumors are the most common testicular tumor'],
    answer: 1,
    explanation: 'Among germ cell tumors, YOLK SAC (endodermal sinus) tumors elevate AFP (Schiller-Duval bodies), and CHORIOCARCINOMA elevates beta-hCG (and can cause hyperthyroidism/gynecomastia). Pure seminomas do NOT elevate AFP (AFP suggests a nonseminomatous component). Seminomas are actually very RADIOSENSITIVE with an excellent prognosis. Germ cell tumors (not Leydig cell) are the most common testicular tumors overall.'
  },
  {
    id: 'repro-04', system: 'Reproductive', topic: 'Genetics', difficulty: 'hard',
    stem: 'A phenotypic female presents with primary amenorrhea, minimal pubic/axillary hair, a blind-ending vagina, and undescended testes; karyotype is 46,XY. Testosterone is normal/high. Which condition is this?',
    options: ['Complete androgen insensitivity syndrome', '5-alpha-reductase deficiency', 'Turner syndrome', 'Klinefelter syndrome'],
    answer: 0,
    explanation: 'A 46,XY individual with female external phenotype, blind vagina, absent uterus (anti-Mullerian hormone from testes worked), scant sexual hair, and undescended testes has complete androgen insensitivity (defective androgen receptor) - testosterone is normal/high but cannot act. 5-alpha-reductase deficiency causes ambiguous genitalia that virilize at puberty (normal androgen receptor). Turner is 45,XO female. Klinefelter is 47,XXY male with small testes and gynecomastia.'
  },
  {
    id: 'repro-05', system: 'Reproductive', topic: 'Gynecologic oncology', difficulty: 'medium',
    stem: 'A 30-year-old woman has an abnormal Pap smear. Which viral mechanism explains progression of cervical dysplasia to carcinoma?',
    options: ['HPV E6 and E7 proteins inactivate p53 and Rb', 'HPV integrates and activates BCL2', 'Epstein-Barr virus stimulates c-myc', 'Hepatitis B integrates near the RB1 gene'],
    answer: 0,
    explanation: 'High-risk HPV (types 16, 18) drives cervical carcinogenesis via E6 (degrades p53) and E7 (inhibits Rb), disabling two key tumor suppressors and removing cell-cycle checkpoints. BCL2 activation relates to follicular lymphoma, EBV/c-myc to Burkitt lymphoma, and hepatitis B to hepatocellular carcinoma - none are the cervical cancer mechanism. The E6/p53 and E7/Rb pairing is the high-yield HPV fact.'
  },
  {
    id: 'repro-06', system: 'Reproductive', topic: 'Obstetric complications', difficulty: 'hard',
    stem: 'A woman at 34 weeks gestation has new hypertension, proteinuria, headache, and right upper quadrant pain, with elevated liver enzymes and low platelets. Which is the most likely diagnosis and the definitive treatment?',
    options: ['Gestational hypertension; observation', 'Preeclampsia with HELLP syndrome; delivery', 'Chronic hypertension; increase antihypertensives', 'Acute cholecystitis; cholecystectomy'],
    answer: 1,
    explanation: 'New-onset hypertension with proteinuria after 20 weeks plus hemolysis, elevated liver enzymes, and low platelets is preeclampsia with HELLP syndrome; the definitive treatment is DELIVERY (with magnesium sulfate for seizure prophylaxis). Gestational hypertension lacks proteinuria/end-organ damage. Chronic hypertension predates 20 weeks. Acute cholecystitis can cause RUQ pain but does not explain the hypertension, proteinuria, hemolysis, and thrombocytopenia together.'
  },
  {
    id: 'repro-07', system: 'Reproductive', topic: 'Endocrine-repro', difficulty: 'medium',
    stem: 'A 24-year-old woman has oligomenorrhea, hirsutism, acne, and obesity. Labs show an elevated LH:FSH ratio and mild hyperandrogenism, and ultrasound shows multiple small ovarian follicles. Which long-term risk is most associated?',
    options: ['Endometrial hyperplasia and carcinoma from unopposed estrogen', 'Osteoporosis from estrogen deficiency', 'Ovarian germ cell tumor', 'Cervical carcinoma'],
    answer: 0,
    explanation: 'Polycystic ovary syndrome features hyperandrogenism, oligo-ovulation, and an elevated LH:FSH ratio; chronic anovulation means unopposed estrogen stimulates the endometrium, raising the risk of endometrial hyperplasia and carcinoma (and also insulin resistance/type 2 diabetes). PCOS involves estrogen EXCESS relative to progesterone, so osteoporosis from estrogen deficiency is not the concern. It does not specifically predispose to germ cell or cervical cancers.'
  },
  {
    id: 'repro-08', system: 'Reproductive', topic: 'Infection', difficulty: 'medium',
    stem: 'A pregnant woman is screened for infections that can cross the placenta. Which pairing of a TORCH infection and a classic fetal finding is correct?',
    options: ['Toxoplasmosis; chorioretinitis, hydrocephalus, and intracranial calcifications', 'Rubella; limb hypoplasia only', 'Cytomegalovirus; absent hearing loss', 'Syphilis; microcephaly with cataracts'],
    answer: 0,
    explanation: 'Congenital toxoplasmosis classically causes the triad of chorioretinitis, hydrocephalus, and diffuse intracranial calcifications (often from undercooked meat or cat feces exposure). Congenital rubella causes the triad of cataracts, cardiac defects (PDA), and deafness - not limb hypoplasia. CMV is a leading infectious cause of sensorineural HEARING LOSS (with periventricular calcifications), so "absent hearing loss" is wrong. Congenital syphilis causes snuffles, saber shins, and Hutchinson teeth, not cataracts.'
  },
  {
    id: 'repro-09', system: 'Reproductive', topic: 'Breast', difficulty: 'medium',
    stem: 'A 55-year-old woman has a firm, immobile breast mass with skin dimpling and nipple retraction. Biopsy shows malignant cells. Which histologic feature specifically predicts response to trastuzumab?',
    options: ['Estrogen receptor positivity', 'HER2/neu (ERBB2) overexpression', 'Progesterone receptor positivity', 'BRCA1 mutation'],
    answer: 1,
    explanation: 'Trastuzumab is a monoclonal antibody targeting the HER2/neu (ERBB2) receptor, so HER2 OVEREXPRESSION predicts its benefit (though HER2+ tumors are more aggressive). Estrogen and progesterone receptor positivity predict response to hormonal therapy (tamoxifen, aromatase inhibitors), not trastuzumab. BRCA1 mutation raises breast/ovarian cancer risk and predicts PARP-inhibitor sensitivity, but does not determine trastuzumab response.'
  },
  {
    id: 'repro-10', system: 'Reproductive', topic: 'Male pathology', difficulty: 'medium',
    stem: 'A 70-year-old man has nocturia, hesitancy, and a weak stream. Digital rectal exam shows a uniformly enlarged, smooth, rubbery prostate. Which zone is affected, and what medication class relaxes smooth muscle for symptom relief?',
    options: ['Peripheral zone; 5-alpha-reductase inhibitors only', 'Transitional (periurethral) zone; alpha-1 blockers', 'Central zone; beta-agonists', 'Anterior fibromuscular stroma; PDE5 inhibitors'],
    answer: 1,
    explanation: 'Benign prostatic hyperplasia arises in the TRANSITIONAL (periurethral) zone, compressing the urethra and causing obstructive symptoms; alpha-1 blockers (e.g., tamsulosin) relax prostatic/bladder-neck smooth muscle for rapid symptom relief (5-alpha-reductase inhibitors shrink the gland over months). Prostate CANCER typically arises in the PERIPHERAL zone (hard nodule). Beta-agonists and PDE5 inhibitors are not the primary BPH smooth-muscle treatment.'
  },
  {
    id: 'repro-11', system: 'Reproductive', topic: 'Ovarian tumors', difficulty: 'hard',
    stem: 'A postmenopausal woman has an ovarian mass and ascites, and a pleural effusion resolves after the ovarian tumor is removed. Histology shows spindle cells. Which tumor and eponymous syndrome is this?',
    options: ['Granulosa cell tumor; precocious puberty', 'Ovarian fibroma; Meigs syndrome', 'Serous cystadenocarcinoma; no syndrome', 'Krukenberg tumor; gastric metastasis'],
    answer: 1,
    explanation: 'An ovarian FIBROMA (benign spindle-cell stromal tumor) with ascites and pleural effusion that both resolve after tumor removal is Meigs syndrome. Granulosa cell tumors secrete estrogen (precocious puberty in girls, bleeding in adults) and show Call-Exner bodies. Serous cystadenocarcinoma is a common malignant epithelial tumor but is not the fibroma/Meigs triad. Krukenberg tumors are bilateral ovarian metastases (signet-ring cells) from the stomach, not a fibroma.'
  },
  {
    id: 'repro-12', system: 'Reproductive', topic: 'Contraception/pharm', difficulty: 'medium',
    stem: 'A woman is counseled about combined oral contraceptives. Which mechanism is the primary way they prevent pregnancy?',
    options: ['Suppression of GnRH/FSH/LH, preventing the LH surge and ovulation', 'Direct spermicidal action in the cervix', 'Blocking implantation only', 'Causing tubal contraction'],
    answer: 0,
    explanation: 'Combined oral contraceptives primarily work by negative feedback: estrogen and progestin suppress hypothalamic GnRH and pituitary FSH/LH, preventing the LH surge and thus OVULATION (progestin also thickens cervical mucus and thins the endometrium as secondary effects). They are not primarily spermicidal, do not work chiefly by blocking implantation, and do not act by causing tubal contraction. Ovulation suppression is the main mechanism.'
  },
  {
    id: 'repro-13', system: 'Reproductive', topic: 'Embryology', difficulty: 'hard',
    stem: 'In a male fetus, which structure is responsible for the regression of the paramesonephric (Mullerian) ducts, and what cell produces it?',
    options: ['Anti-Mullerian hormone from Sertoli cells', 'Testosterone from Leydig cells', 'Dihydrotestosterone from the prostate', 'Estrogen from the placenta'],
    answer: 0,
    explanation: 'In male development, Sertoli cells secrete anti-Mullerian hormone (Mullerian inhibiting substance), causing regression of the paramesonephric (Mullerian) ducts (which would otherwise form the uterus/tubes/upper vagina). Leydig-cell TESTOSTERONE stimulates the mesonephric (Wolffian) ducts to form male internal structures, and DHT drives external genitalia/prostate. Placental estrogen does not cause Mullerian regression. The Sertoli/AMH pairing is the key.'
  },
  {
    id: 'repro-14', system: 'Reproductive', topic: 'Infection', difficulty: 'medium',
    stem: 'A sexually active woman has lower abdominal pain, cervical motion tenderness, and mucopurulent discharge. Which complication is most associated with untreated pelvic inflammatory disease?',
    options: ['Ectopic pregnancy and infertility from tubal scarring', 'Cervical cancer', 'Endometriosis', 'Ovarian torsion'],
    answer: 0,
    explanation: 'Pelvic inflammatory disease (often Neisseria gonorrhoeae or Chlamydia trachomatis) with cervical motion tenderness ("chandelier sign") can scar the fallopian tubes, causing infertility and ectopic pregnancy, plus Fitz-Hugh-Curtis perihepatitis. Cervical cancer is HPV-driven, not a PID complication. Endometriosis is ectopic endometrial tissue, unrelated to infection. Ovarian torsion is a mechanical emergency, not a typical PID sequela. Tubal scarring is the classic long-term risk.'
  },
  {
    id: 'repro-15', system: 'Reproductive', topic: 'Placenta', difficulty: 'hard',
    stem: 'A woman with a prior cesarean delivery has painless vaginal bleeding in the third trimester, and ultrasound shows the placenta covering the internal cervical os. Which is the diagnosis, and how does it differ from abruption?',
    options: ['Placenta previa; painless bleeding, versus abruption which is painful', 'Placenta previa; painful bleeding, same as abruption', 'Placental abruption; painless bleeding', 'Vasa previa; maternal bleeding'],
    answer: 0,
    explanation: 'Placenta previa (placenta over the internal os, risk increased by prior cesarean) classically causes PAINLESS third-trimester bleeding; digital exam is avoided. Placental ABRUPTION (premature separation) causes PAINFUL bleeding with a firm, tender uterus and is associated with hypertension, cocaine, and trauma. Vasa previa involves rupture of FETAL vessels (fetal, not maternal, bleeding). The painless-versus-painful distinction is the key discriminator.'
  },
  {
    id: 'repro-16', system: 'Reproductive', topic: 'Menopause', difficulty: 'easy',
    stem: 'A 52-year-old woman has hot flashes, irregular then absent menses, and vaginal dryness. Which hormonal change confirms menopause?',
    options: ['Low FSH and high estrogen', 'High FSH and low estrogen', 'High progesterone', 'High prolactin'],
    answer: 1,
    explanation: 'Menopause results from ovarian follicular depletion: estrogen falls, removing negative feedback, so FSH (and LH) RISE - a high FSH with low estrogen confirms it. Low FSH with high estrogen is the opposite pattern. Progesterone is low (no corpus luteum without ovulation). High prolactin causes amenorrhea/galactorrhea but is not the menopausal pattern; the elevated FSH is the hallmark laboratory finding.'
  },

  /* ===================== NEUROLOGY (neuro) ===================== */
  {
    id: 'neuro-01', system: 'Neurology', topic: 'Stroke', difficulty: 'hard',
    stem: 'A patient suddenly develops right-sided face and arm weakness worse than the leg, with expressive aphasia. Which arterial territory is most likely affected?',
    options: ['Left anterior cerebral artery', 'Left middle cerebral artery', 'Right middle cerebral artery', 'Posterior cerebral artery'],
    answer: 1,
    explanation: 'Contralateral face/arm > leg weakness plus aphasia (in a left-dominant hemisphere) localizes to the LEFT middle cerebral artery, which supplies the lateral cortex including the face/arm motor strip and language areas (Broca/Wernicke). The ANTERIOR cerebral artery affects the leg MORE than the arm/face. The RIGHT MCA would cause left-sided deficits and neglect, not aphasia. The posterior cerebral artery causes visual field deficits, not this motor/aphasia pattern.'
  },
  {
    id: 'neuro-02', system: 'Neurology', topic: 'Neurodegeneration', difficulty: 'medium',
    stem: 'A 70-year-old has a resting "pill-rolling" tremor, cogwheel rigidity, bradykinesia, and a shuffling gait. Loss of which neurons and the pathologic hallmark are correct?',
    options: ['Dopaminergic neurons of the substantia nigra; Lewy bodies (alpha-synuclein)', 'Cholinergic neurons of the basal nucleus; neurofibrillary tangles', 'GABAergic neurons of the caudate; huntingtin aggregates', 'Motor neurons; Bunina bodies'],
    answer: 0,
    explanation: 'Parkinson disease results from loss of dopaminergic neurons in the substantia nigra pars compacta; the hallmark is intracytoplasmic Lewy bodies containing alpha-synuclein, producing resting tremor, rigidity, bradykinesia, and postural instability. Cholinergic basal-nucleus loss with tangles is Alzheimer disease. Caudate GABAergic loss with huntingtin is Huntington disease (chorea). Motor neuron loss with Bunina bodies is ALS. The nigral/Lewy body pairing is specific to Parkinson.'
  },
  {
    id: 'neuro-03', system: 'Neurology', topic: 'Demyelination', difficulty: 'medium',
    stem: 'A 28-year-old woman has episodes of optic neuritis, internuclear ophthalmoplegia, and limb weakness separated in time and space. MRI shows periventricular white-matter plaques and CSF shows oligoclonal bands. Which is the diagnosis?',
    options: ['Guillain-Barre syndrome', 'Multiple sclerosis', 'Amyotrophic lateral sclerosis', 'Myasthenia gravis'],
    answer: 1,
    explanation: 'CNS demyelinating lesions "separated in time and space" (optic neuritis, INO, weakness) with periventricular plaques and CSF oligoclonal bands are multiple sclerosis (autoimmune CNS demyelination). Guillain-Barre is a PERIPHERAL demyelinating ascending paralysis with albuminocytologic dissociation. ALS affects motor neurons without sensory/CNS plaques. Myasthenia gravis causes fatigable weakness from acetylcholine receptor antibodies, without CNS white-matter plaques or oligoclonal bands.'
  },
  {
    id: 'neuro-04', system: 'Neurology', topic: 'Peripheral nerve', difficulty: 'hard',
    stem: 'Two weeks after a Campylobacter jejuni gastroenteritis, a patient develops ascending symmetric weakness and areflexia. CSF shows elevated protein with normal cell count. Which is the mechanism?',
    options: ['Autoimmune demyelination of peripheral nerves (molecular mimicry)', 'Anterior horn cell destruction by poliovirus', 'Presynaptic acetylcholine release blockade', 'Central demyelination'],
    answer: 0,
    explanation: 'Guillain-Barre syndrome is an acute inflammatory demyelinating polyradiculopathy of PERIPHERAL nerves, often post-infectious (Campylobacter jejuni via molecular mimicry), causing ascending weakness, areflexia, and albuminocytologic dissociation (high CSF protein, normal cells). Poliovirus destroys anterior horn cells (asymmetric flaccid paralysis). Presynaptic ACh blockade is botulism/Lambert-Eaton. Central demyelination is multiple sclerosis, not this peripheral post-infectious pattern.'
  },
  {
    id: 'neuro-05', system: 'Neurology', topic: 'Tumors', difficulty: 'hard',
    stem: 'A 55-year-old has new seizures and headaches. MRI shows a ring-enhancing lesion crossing the corpus callosum ("butterfly" pattern). Biopsy shows pseudopalisading necrosis and microvascular proliferation. Which tumor is this?',
    options: ['Meningioma', 'Glioblastoma (grade IV astrocytoma)', 'Oligodendroglioma', 'Schwannoma'],
    answer: 1,
    explanation: 'A butterfly lesion crossing the corpus callosum with pseudopalisading necrosis and microvascular proliferation is glioblastoma, the most common and most aggressive primary adult brain tumor (GFAP-positive). Meningiomas are extra-axial, dural-based with psammoma bodies and a whorled pattern. Oligodendrogliomas show a "fried egg" appearance with calcification and 1p/19q codeletion. Schwannomas (S100+) arise at the cerebellopontine angle (CN VIII), not as a butterfly glioma.'
  },
  {
    id: 'neuro-06', system: 'Neurology', topic: 'Spinal cord', difficulty: 'hard',
    stem: 'A patient has bilateral loss of pain and temperature sensation in a "cape" distribution over the shoulders and arms, with preserved fine touch and proprioception. Which lesion explains this?',
    options: ['Syringomyelia affecting the crossing spinothalamic fibers', 'Posterior column degeneration', 'Anterior spinal artery infarct', 'Brown-Sequard hemisection'],
    answer: 0,
    explanation: 'A central cord lesion (syringomyelia) expands in the central canal and first interrupts the SPINOTHALAMIC fibers as they DECUSSATE in the anterior commissure, causing bilateral, "cape-like" loss of pain and temperature while sparing the dorsal columns (fine touch/proprioception). Posterior column degeneration would lose vibration/proprioception. Anterior spinal artery infarct affects motor and spinothalamic tracts bilaterally below the lesion. Brown-Sequard causes ipsilateral motor/dorsal-column and contralateral pain/temperature loss, not a symmetric cape.'
  },
  {
    id: 'neuro-07', system: 'Neurology', topic: 'Neuromuscular junction', difficulty: 'medium',
    stem: 'A woman has fluctuating ptosis and diplopia that worsen with sustained activity and improve with rest. Which antibody and associated tumor should be evaluated?',
    options: ['Antibodies to presynaptic calcium channels; small cell lung cancer', 'Antibodies to postsynaptic acetylcholine receptors; thymoma', 'Antibodies to voltage-gated potassium channels; ovarian teratoma', 'Antibodies to GAD; type 1 diabetes'],
    answer: 1,
    explanation: 'Fatigable weakness worsening with use and improving with rest, prominent ocular involvement, is myasthenia gravis, caused by antibodies to the POSTsynaptic acetylcholine receptor and associated with thymoma/thymic hyperplasia. Antibodies to PRESYNAPTIC calcium channels with small cell lung cancer are Lambert-Eaton (weakness IMPROVES with use). Potassium-channel and GAD antibodies relate to other conditions. The postsynaptic AChR antibody plus thymoma is the myasthenia fingerprint.'
  },
  {
    id: 'neuro-08', system: 'Neurology', topic: 'Dementia', difficulty: 'medium',
    stem: 'An elderly patient has progressive memory loss. Histology shows extracellular amyloid-beta plaques and intracellular neurofibrillary tangles of hyperphosphorylated tau, with cortical atrophy. Which is the diagnosis, and which neurotransmitter system is depleted?',
    options: ['Alzheimer disease; acetylcholine', 'Lewy body dementia; dopamine only', 'Vascular dementia; serotonin', 'Frontotemporal dementia; norepinephrine'],
    answer: 0,
    explanation: 'Amyloid-beta plaques (from APP cleavage) plus neurofibrillary tangles of hyperphosphorylated tau, with diffuse cortical atrophy, are Alzheimer disease; there is depletion of ACETYLCHOLINE (loss of nucleus basalis of Meynert neurons), which is why cholinesterase inhibitors are used. Lewy body dementia has alpha-synuclein inclusions with visual hallucinations and parkinsonism. Vascular dementia is stepwise from infarcts. Frontotemporal dementia has Pick bodies with personality/behavior change.'
  },
  {
    id: 'neuro-09', system: 'Neurology', topic: 'Seizures/pharm', difficulty: 'medium',
    stem: 'A child has episodes of staring and eyelid fluttering lasting seconds, with immediate recovery and no postictal state; EEG shows 3-Hz spike-and-wave discharges. Which is the diagnosis and first-line drug?',
    options: ['Absence seizures; ethosuximide', 'Tonic-clonic seizures; phenytoin', 'Focal seizures; carbamazepine', 'Status epilepticus; lorazepam'],
    answer: 0,
    explanation: 'Brief staring spells with 3-Hz spike-and-wave EEG and no postictal confusion are absence seizures; first-line therapy is ETHOSUXIMIDE (blocks thalamic T-type calcium channels). Phenytoin treats tonic-clonic/focal seizures and can WORSEN absence. Carbamazepine is first-line for focal seizures (and can also worsen absence). Lorazepam is for acute status epilepticus. The 3-Hz spike-wave with ethosuximide is the classic absence pairing.'
  },
  {
    id: 'neuro-10', system: 'Neurology', topic: 'Cranial nerves', difficulty: 'hard',
    stem: 'A patient cannot abduct the right eye and has horizontal diplopia worse on right gaze, but pupil size, eyelid position, and other movements are normal. Which cranial nerve is affected?',
    options: ['Right CN III (oculomotor)', 'Right CN IV (trochlear)', 'Right CN VI (abducens)', 'Right CN VII (facial)'],
    answer: 2,
    explanation: 'Isolated failure of eye ABDUCTION with horizontal diplopia points to CN VI (abducens), which innervates the lateral rectus; the long intracranial course makes it vulnerable to raised intracranial pressure. CN III controls most eye movements plus the eyelid and pupil (its palsy causes a "down-and-out" eye, ptosis, dilated pupil). CN IV (trochlear) affects the superior oblique (vertical diplopia, trouble looking down/in). CN VII is facial movement, not eye abduction.'
  },
  {
    id: 'neuro-11', system: 'Neurology', topic: 'Hemorrhage', difficulty: 'hard',
    stem: 'A patient has the "worst headache of my life" with sudden onset and neck stiffness. CT may be negative early, but lumbar puncture shows xanthochromia. Which is the most likely source?',
    options: ['Ruptured berry (saccular) aneurysm causing subarachnoid hemorrhage', 'Hypertensive rupture of lenticulostriate arteries', 'Bridging vein tear causing subdural hematoma', 'Middle meningeal artery tear causing epidural hematoma'],
    answer: 0,
    explanation: 'A sudden "thunderclap" worst-headache-of-life with meningismus and xanthochromia (blood breakdown pigment) in the CSF is a subarachnoid hemorrhage, most often from a ruptured berry aneurysm (associated with ADPKD, Ehlers-Danlos). Hypertensive lenticulostriate rupture causes INTRAparenchymal hemorrhage (e.g., basal ganglia). Bridging vein tears cause subdural hematomas (crescent-shaped, elderly/alcoholics). Middle meningeal artery tears cause epidural hematomas (lucid interval, lens-shaped) after trauma.'
  },
  {
    id: 'neuro-12', system: 'Neurology', topic: 'Movement disorders', difficulty: 'medium',
    stem: 'A 40-year-old develops choreiform movements, irritability, and progressive cognitive decline; his father had a similar illness that began at age 45. Which genetic mechanism explains earlier onset in successive generations?',
    options: ['Trinucleotide (CAG) repeat expansion with anticipation', 'Mitochondrial inheritance', 'Genomic imprinting', 'X-linked recessive inheritance'],
    answer: 0,
    explanation: 'Huntington disease is an autosomal dominant CAG trinucleotide repeat expansion in the huntingtin (HTT) gene; the repeats tend to EXPAND across generations (especially paternal transmission), causing ANTICIPATION - earlier onset and greater severity in successive generations. Mitochondrial inheritance is maternal. Imprinting explains parent-of-origin diseases like Prader-Willi/Angelman. X-linked recessive does not explain the dominant, expanding-repeat anticipation seen here.'
  },
  {
    id: 'neuro-13', system: 'Neurology', topic: 'Infection', difficulty: 'medium',
    stem: 'A college student has fever, headache, photophobia, and neck stiffness. CSF shows high opening pressure, high protein, LOW glucose, and neutrophil predominance. Which category of pathogen is most likely?',
    options: ['Bacterial meningitis', 'Viral (aseptic) meningitis', 'Fungal meningitis', 'Normal CSF'],
    answer: 0,
    explanation: 'CSF with neutrophilic pleocytosis, HIGH protein, and LOW glucose indicates BACTERIAL meningitis (bacteria consume glucose; in a young adult, think Neisseria meningitidis or S. pneumoniae). VIRAL meningitis shows lymphocytes, mildly high protein, and NORMAL glucose. Fungal/TB meningitis shows lymphocytes with low glucose but a more indolent course. The low glucose plus neutrophils is the classic bacterial pattern.'
  },
  {
    id: 'neuro-14', system: 'Neurology', topic: 'Autonomic/pharm', difficulty: 'medium',
    stem: 'A patient is brought in with pinpoint pupils, excessive salivation, lacrimation, urination, diarrhea, bronchospasm, and muscle fasciculations after pesticide exposure. Which antidote reverses the muscarinic effects?',
    options: ['Atropine', 'Physostigmine', 'Naloxone', 'Flumazenil'],
    answer: 0,
    explanation: 'Organophosphate (pesticide) poisoning inhibits acetylcholinesterase, causing a cholinergic crisis (the DUMBBELSS/SLUDGE signs, miosis, fasciculations). ATROPINE (a muscarinic antagonist) reverses the muscarinic effects, and pralidoxime regenerates acetylcholinesterase (best given early). Physostigmine is a cholinesterase INHIBITOR (would worsen it). Naloxone reverses opioids, and flumazenil reverses benzodiazepines - neither addresses cholinergic toxicity.'
  },
  {
    id: 'neuro-15', system: 'Neurology', topic: 'Vision', difficulty: 'hard',
    stem: 'A patient has bitemporal hemianopia (loss of both temporal visual fields). A lesion at which location is responsible?',
    options: ['Optic chiasm (e.g., pituitary adenoma)', 'Left optic nerve', 'Right optic tract', 'Occipital cortex'],
    answer: 0,
    explanation: 'Bitemporal hemianopia results from compression of the CROSSING nasal retinal fibers at the OPTIC CHIASM - classically a pituitary adenoma or craniopharyngioma pressing from below/above. A single optic NERVE lesion causes monocular blindness. An optic TRACT lesion causes a contralateral homonymous hemianopia. Occipital cortex lesions cause homonymous hemianopia with macular sparing. Only the chiasm produces the bilateral temporal field loss.'
  },
  {
    id: 'neuro-16', system: 'Neurology', topic: 'Pediatric/genetic', difficulty: 'hard',
    stem: 'A child has multiple cafe-au-lait macules, axillary freckling, Lisch nodules of the iris, and cutaneous neurofibromas. Which gene and chromosome are involved?',
    options: ['NF1 (neurofibromin) on chromosome 17', 'NF2 (merlin) on chromosome 22', 'TSC1/TSC2 (hamartin/tuberin)', 'VHL on chromosome 3'],
    answer: 0,
    explanation: 'Cafe-au-lait spots, axillary/inguinal freckling, Lisch nodules, and neurofibromas define neurofibromatosis type 1, caused by mutation of the NF1 gene (neurofibromin, a Ras-GAP tumor suppressor) on chromosome 17. NF2 (merlin, chromosome 22) causes BILATERAL vestibular schwannomas and meningiomas. Tuberous sclerosis (TSC1/2) causes ash-leaf spots, angiofibromas, and seizures. VHL (chromosome 3) causes hemangioblastomas and renal cell carcinoma. The Lisch nodules/chromosome 17 combination is NF1.'
  },

  /* ===================== MUSCULOSKELETAL & SKIN (msk) ===================== */
  {
    id: 'msk-01', system: 'Musculoskeletal/Skin', topic: 'Crystal arthropathy', difficulty: 'medium',
    stem: 'A 55-year-old man wakes with an exquisitely painful, red, swollen first metatarsophalangeal joint. Joint aspirate under polarized light shows needle-shaped, negatively birefringent crystals. Which crystal and first-line acute treatment?',
    options: ['Monosodium urate; NSAIDs or colchicine', 'Calcium pyrophosphate; allopurinol', 'Monosodium urate; allopurinol during the acute attack', 'Calcium pyrophosphate; colchicine only'],
    answer: 0,
    explanation: 'Acute podagra (first MTP) with NEEDLE-shaped, NEGATIVELY birefringent (yellow when parallel) crystals is gout (monosodium urate); acute treatment is NSAIDs, colchicine, or steroids. Allopurinol LOWERS urate for long-term prevention but should NOT be started (or stopped) during an acute attack because shifting urate can worsen it. Calcium pyrophosphate crystals (pseudogout) are RHOMBOID and POSITIVELY birefringent - a different crystal, so those options are incorrect.'
  },
  {
    id: 'msk-02', system: 'Musculoskeletal/Skin', topic: 'Autoimmune', difficulty: 'medium',
    stem: 'A 35-year-old woman has symmetric small-joint pain and morning stiffness lasting over an hour that improves with use. X-rays show joint erosions. Which antibody is most specific for this disease?',
    options: ['Rheumatoid factor', 'Anti-cyclic citrullinated peptide (anti-CCP)', 'Antinuclear antibody', 'Anti-dsDNA'],
    answer: 1,
    explanation: 'Symmetric small-joint inflammatory arthritis with prolonged morning stiffness that IMPROVES with use and erosive changes is rheumatoid arthritis; anti-CCP is the MOST SPECIFIC antibody (and predicts more severe disease). Rheumatoid factor is sensitive but less specific (also seen in other conditions). ANA is a sensitive screen for lupus (nonspecific). Anti-dsDNA is specific for SLE, not RA. Anti-CCP is the high-specificity RA marker.'
  },
  {
    id: 'msk-03', system: 'Musculoskeletal/Skin', topic: 'Bone tumor', difficulty: 'hard',
    stem: 'A 15-year-old has knee pain and a bony mass. X-ray of the distal femur metaphysis shows a "sunburst" pattern with periosteal elevation (Codman triangle). Which tumor is most likely?',
    options: ['Osteosarcoma', 'Ewing sarcoma', 'Osteochondroma', 'Giant cell tumor'],
    answer: 0,
    explanation: 'An adolescent with a metaphyseal (around the knee) lesion showing a sunburst pattern and Codman triangle is osteosarcoma, the most common primary malignant bone tumor in young people (associated with Rb mutation, Paget disease). Ewing sarcoma affects the DIAPHYSIS with an "onion-skin" periosteal reaction and t(11;22). Osteochondroma is a benign cartilage-capped exostosis. Giant cell tumor is EPIPHYSEAL with a "soap bubble" appearance in young adults, not the sunburst metaphyseal pattern.'
  },
  {
    id: 'msk-04', system: 'Musculoskeletal/Skin', topic: 'Connective tissue', difficulty: 'hard',
    stem: 'A tall young man with long fingers, a pectus deformity, lens dislocation, and aortic root dilation is evaluated. A defect in which protein causes this syndrome?',
    options: ['Type I collagen', 'Fibrillin-1', 'Type III collagen', 'Elastin'],
    answer: 1,
    explanation: 'Tall stature, arachnodactyly, pectus deformity, upward lens dislocation, and aortic root dilation/dissection risk is Marfan syndrome, caused by mutations in FIBRILLIN-1 (FBN1), a scaffold for elastic fibers. Type I collagen defects cause osteogenesis imperfecta (brittle bones, blue sclerae). Type III collagen defects cause vascular Ehlers-Danlos. Elastin defects relate to Williams/cutis laxa. The fibrillin-1 defect specifically explains the Marfan phenotype.'
  },
  {
    id: 'msk-05', system: 'Musculoskeletal/Skin', topic: 'Muscle genetics', difficulty: 'hard',
    stem: 'A 4-year-old boy has progressive proximal muscle weakness, calf pseudohypertrophy, and a positive Gowers sign. Which protein is absent, and how does this differ from Becker muscular dystrophy?',
    options: ['Dystrophin frameshift causing near-total absence (Duchenne); Becker has a partly functional protein', 'Dystrophin point mutation in Duchenne; Becker has total absence', 'Merosin absence; Becker is milder', 'Emerin absence; identical to Becker'],
    answer: 0,
    explanation: 'Duchenne muscular dystrophy is X-linked, caused by FRAMESHIFT (or nonsense) mutations that abolish dystrophin, giving early, severe weakness, calf pseudohypertrophy, Gowers sign, and elevated CK. BECKER results from IN-FRAME mutations that preserve a partially functional dystrophin, causing a milder, later-onset disease. So Duchenne = near-absent dystrophin (frameshift), Becker = reduced/partly functional dystrophin. Merosin and emerin defects cause different, rarer dystrophies.'
  },
  {
    id: 'msk-06', system: 'Musculoskeletal/Skin', topic: 'Vasculitis', difficulty: 'hard',
    stem: 'A 72-year-old woman has a new unilateral throbbing headache, scalp tenderness, jaw claudication, and transient vision loss. ESR is markedly elevated. What is the immediate next step, and the feared complication?',
    options: ['Start high-dose corticosteroids immediately to prevent blindness', 'Wait for temporal artery biopsy before any treatment', 'Order a CT angiogram and defer steroids', 'Prescribe NSAIDs and reassess in a week'],
    answer: 0,
    explanation: 'New headache, scalp tenderness, jaw claudication, and visual symptoms with a very high ESR in an older adult is giant cell (temporal) arteritis; the feared complication is irreversible blindness from anterior ischemic optic neuropathy, so high-dose CORTICOSTEROIDS are started IMMEDIATELY - do NOT wait for the biopsy (biopsy remains positive for ~2 weeks after steroids begin). Deferring treatment for imaging or using NSAIDs risks permanent vision loss. GCA is also associated with polymyalgia rheumatica.'
  },
  {
    id: 'msk-07', system: 'Musculoskeletal/Skin', topic: 'Skin cancer', difficulty: 'medium',
    stem: 'A fair-skinned older man has a pearly, dome-shaped papule with rolled borders and overlying telangiectasias on the nose. It rarely metastasizes. Which is the most likely diagnosis and its histology?',
    options: ['Basal cell carcinoma; palisading nuclei/"nests" of basaloid cells', 'Squamous cell carcinoma; keratin pearls', 'Melanoma; S100-positive atypical melanocytes', 'Actinic keratosis; parakeratosis'],
    answer: 0,
    explanation: 'A pearly, rolled-border papule with telangiectasias in sun-exposed skin that rarely metastasizes is basal cell carcinoma - the most common skin cancer - with peripheral PALISADING of basaloid cell nests on histology. Squamous cell carcinoma shows keratin pearls and can ulcerate/metastasize (linked to actinic keratosis). Melanoma is pigmented, S100+, and dangerous. Actinic keratosis is a precursor with parakeratosis, not a pearly nodule. The palisading basaloid nests define BCC.'
  },
  {
    id: 'msk-08', system: 'Musculoskeletal/Skin', topic: 'Autoimmune skin', difficulty: 'hard',
    stem: 'A middle-aged patient has flaccid oral and skin bullae that rupture easily; gentle lateral pressure on the skin extends the blister (positive Nikolsky sign). Immunofluorescence shows a "net-like" intercellular pattern. Which antibody target is involved?',
    options: ['Desmoglein (desmosomes) - pemphigus vulgaris', 'Hemidesmosomes (BP180/BP230) - bullous pemphigoid', 'Type VII collagen - epidermolysis bullosa acquisita', 'Tissue transglutaminase - dermatitis herpetiformis'],
    answer: 0,
    explanation: 'Flaccid, easily ruptured bullae with mucosal involvement, positive Nikolsky sign, and a "net-like"/reticular INTERCELLULAR immunofluorescence pattern is pemphigus vulgaris, caused by antibodies to DESMOGLEIN (desmosomes), which hold keratinocytes together (acantholysis). Bullous pemphigoid targets HEMIDESMOSOMES (BP antigens) with TENSE bullae, a NEGATIVE Nikolsky, and a LINEAR basement-membrane IF pattern. Dermatitis herpetiformis (tTG, celiac-associated) shows pruritic vesicles with dermal papillae IgA. The desmoglein/net pattern is pemphigus.'
  },
  {
    id: 'msk-09', system: 'Musculoskeletal/Skin', topic: 'Osteoarthritis', difficulty: 'easy',
    stem: 'A 65-year-old has knee pain that WORSENS with activity and is relieved by rest, with brief (<30 min) morning stiffness and bony enlargement of the distal interphalangeal joints. Which is the diagnosis and a classic finding?',
    options: ['Osteoarthritis; Heberden nodes at the DIP joints', 'Rheumatoid arthritis; symmetric MCP involvement', 'Gout; tophi', 'Septic arthritis; fever'],
    answer: 0,
    explanation: 'Activity-related joint pain relieved by rest, brief morning stiffness, and bony DIP enlargement (Heberden nodes; Bouchard nodes at the PIP) is osteoarthritis - a degenerative "wear and tear" cartilage loss with osteophytes. Rheumatoid arthritis has prolonged morning stiffness, symmetric MCP/PIP involvement, and spares the DIPs. Gout gives acute crystal attacks with tophi. Septic arthritis is an acute, hot, febrile monoarthritis. The DIP Heberden nodes point to osteoarthritis.'
  },
  {
    id: 'msk-10', system: 'Musculoskeletal/Skin', topic: 'Metabolic bone', difficulty: 'medium',
    stem: 'A postmenopausal woman has a low-trauma vertebral compression fracture. DEXA shows a T-score of -3.0. Calcium, phosphate, and alkaline phosphatase are all normal. Which is the diagnosis and a first-line pharmacologic option?',
    options: ['Osteoporosis; bisphosphonates', 'Osteomalacia; vitamin D', 'Paget disease; calcitonin', 'Osteopetrosis; bone marrow transplant'],
    answer: 0,
    explanation: 'A fragility fracture with a T-score <= -2.5 and NORMAL calcium, phosphate, and alkaline phosphatase is osteoporosis (reduced bone MASS with normal mineralization); bisphosphonates (inhibit osteoclasts) are first-line. Osteomalacia shows LOW vitamin D with low calcium/phosphate and high alkaline phosphatase. Paget disease has isolated high alkaline phosphatase. Osteopetrosis is dense, brittle bone from failed osteoclast resorption. Normal labs with low bone density define osteoporosis.'
  },
  {
    id: 'msk-11', system: 'Musculoskeletal/Skin', topic: 'Seronegative spondyloarthropathy', difficulty: 'hard',
    stem: 'A 24-year-old man has chronic low back pain and stiffness that IMPROVES with exercise and worsens with rest, plus reduced spinal mobility. He is HLA-B27 positive, and imaging shows sacroiliitis and a "bamboo spine." Which is the diagnosis?',
    options: ['Ankylosing spondylitis', 'Rheumatoid arthritis', 'Mechanical low back strain', 'Osteoarthritis of the spine'],
    answer: 0,
    explanation: 'Inflammatory back pain in a young man (better with exercise, worse with rest), sacroiliitis, bamboo spine, and HLA-B27 positivity is ankylosing spondylitis (a seronegative spondyloarthropathy that can also cause uveitis and aortitis). Rheumatoid arthritis targets peripheral small joints, not the SI joints/spine fusion. Mechanical strain and spinal osteoarthritis cause pain that WORSENS with activity and lacks the inflammatory/HLA-B27 features. The exercise-improved pattern is the key inflammatory clue.'
  },
  {
    id: 'msk-12', system: 'Musculoskeletal/Skin', topic: 'Infection', difficulty: 'medium',
    stem: 'A child with sickle cell disease develops bone pain and fever, and blood cultures grow a gram-negative rod. Which organism is the most characteristic cause of osteomyelitis in sickle cell disease, versus the general population?',
    options: ['Salmonella in sickle cell; Staphylococcus aureus in the general population', 'Staphylococcus aureus in sickle cell; Salmonella in the general population', 'Pseudomonas in both', 'Pasteurella in both'],
    answer: 0,
    explanation: 'Although Staphylococcus aureus is the MOST COMMON cause of osteomyelitis overall, patients with SICKLE CELL disease have a characteristic association with SALMONELLA osteomyelitis (a gram-negative rod). Pseudomonas is associated with osteomyelitis from puncture wounds through a shoe and in IV drug use. Pasteurella follows cat/dog bites. The Salmonella-sickle cell association is the classic board pairing.'
  },
  {
    id: 'msk-13', system: 'Musculoskeletal/Skin', topic: 'Pharmacology', difficulty: 'medium',
    stem: 'A patient with rheumatoid arthritis is started on a first-line disease-modifying agent that inhibits dihydrofolate reductase. Which supplement reduces its toxicity, and which organ needs monitoring?',
    options: ['Folinic/folic acid; monitor liver and bone marrow', 'Vitamin B12; monitor kidneys only', 'Iron; monitor the thyroid', 'Vitamin K; monitor the lungs'],
    answer: 0,
    explanation: 'Methotrexate, a first-line DMARD for rheumatoid arthritis, inhibits dihydrofolate reductase; supplementing FOLIC (or folinic) acid reduces mucosal and marrow toxicity, and monitoring focuses on the LIVER (hepatotoxicity/fibrosis), bone marrow (myelosuppression), and lungs (pneumonitis). Vitamin B12, iron, and vitamin K do not mitigate methotrexate toxicity. The folate rescue and hepatic/marrow monitoring are the key safety points.'
  },
  {
    id: 'msk-14', system: 'Musculoskeletal/Skin', topic: 'SLE', difficulty: 'hard',
    stem: 'A 28-year-old woman has a malar rash, photosensitivity, arthralgias, oral ulcers, and pancytopenia. Which pair of antibodies includes the most SPECIFIC markers for this disease?',
    options: ['Anti-dsDNA and anti-Smith', 'Rheumatoid factor and anti-CCP', 'Anti-centromere and anti-Scl-70', 'Anti-Jo-1 and anti-Mi-2'],
    answer: 0,
    explanation: 'Malar rash, photosensitivity, oral ulcers, arthritis, and cytopenias suggest systemic lupus erythematosus; ANA is sensitive but the MOST SPECIFIC antibodies are anti-dsDNA (also tracks disease/nephritis activity) and anti-Smith. Rheumatoid factor/anti-CCP mark rheumatoid arthritis. Anti-centromere (limited scleroderma/CREST) and anti-Scl-70 (diffuse scleroderma) mark systemic sclerosis. Anti-Jo-1/anti-Mi-2 mark inflammatory myopathies (polymyositis/dermatomyositis). Anti-dsDNA and anti-Smith are lupus-specific.'
  },
  {
    id: 'msk-15', system: 'Musculoskeletal/Skin', topic: 'Nerve compression', difficulty: 'medium',
    stem: 'A pregnant woman has numbness and tingling in the thumb, index, and middle fingers, worse at night, and weakness of thumb opposition. Compression of which nerve, and at what site?',
    options: ['Median nerve at the carpal tunnel', 'Ulnar nerve at the elbow', 'Radial nerve in the spiral groove', 'Axillary nerve at the surgical neck'],
    answer: 0,
    explanation: 'Numbness of the thumb, index, middle, and radial half of the ring finger with nocturnal worsening and weak thumb opposition (thenar muscles) is carpal tunnel syndrome - MEDIAN nerve compression at the wrist (associated with pregnancy, hypothyroidism, diabetes, repetitive use). Ulnar nerve compression at the elbow affects the 4th/5th fingers ("claw hand"). Radial nerve injury in the spiral groove causes wrist drop. Axillary nerve injury affects the deltoid and lateral shoulder sensation.'
  },
  {
    id: 'msk-16', system: 'Musculoskeletal/Skin', topic: 'Dermatology', difficulty: 'medium',
    stem: 'A patient has well-demarcated erythematous plaques with silvery scales on the extensor elbows and knees; removing the scale causes pinpoint bleeding. Which pathophysiology and nail finding are characteristic?',
    options: ['Epidermal hyperproliferation with parakeratosis; nail pitting', 'Autoimmune melanocyte destruction; depigmentation', 'IgE-mediated flexural rash; lichenification', 'Basement membrane antibody; tense bullae'],
    answer: 0,
    explanation: 'Silvery-scaled plaques on extensor surfaces with pinpoint bleeding when the scale is removed (Auspitz sign) are psoriasis, driven by epidermal HYPERPROLIFERATION with parakeratosis (retained nuclei) and a thinned granular layer; nail PITTING and onycholysis are characteristic, and it can associate with psoriatic arthritis. Autoimmune melanocyte destruction is vitiligo (depigmentation). An IgE-mediated FLEXURAL itchy rash is atopic dermatitis. Basement-membrane antibodies with tense bullae describe bullous pemphigoid. The Auspitz sign plus nail pitting is psoriasis.'
  }

];
