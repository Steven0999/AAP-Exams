    // Get DOM elements
    const contentsPage = document.getElementById('contents-page');
const quizApp = document.getElementById('quiz-app');
const resultsPage = document.getElementById('results-page');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupMessage = document.getElementById('popup-message');
const examButtonsContainer = document.getElementById('exam-buttons');
const progressBar = document.getElementById('progress-bar');
const finalScoreElement = document.getElementById('final-score');
const disclaimerPopup = document.getElementById('disclaimer-popup');

    // Quiz state variables
    let currentQuestionIndex = 0;
    let questions = []; // This will hold the 55 random questions for the current session
    let score = 0;
    let currentExamIndex = -1; // To keep track of the currently selected exam

    // --- Quiz Data ---
    // This is where you define your exams and their questions.
    // Each exam object has a 'title' and an array of 'questions'.
    // Each question object has 'question' text, an array of 'options',
    // the 'correctAnswerIndex' (0-based), and an 'explanation'.
    const exams = [
      {
        title: "Trauma",
        questions: [
          {
            question: "What is the definition of 'Trauma' according to the provided materials?",
           options: [
              "Any injury caused by a fall from height.",
              "The acute physiological and structural change that occurs in a patient’s body when an external source of energy transfers to the body faster than the body’s ability to sustain and dissipate it.",
              "A minor injury that does not require hospital admission.",
              "A psychological response to a distressing event."
            ],
            correctAnswerIndex: 1,
            explanation: "Trauma is defined as the acute physiological and structural change that occurs in a patient’s body when an external source of energy transfers to the body faster than the body’s ability to sustain and dissipate it."
          },
          {
            question: "How is 'Major Trauma' defined?",
           options: [
              "An injury requiring only basic first aid.",
              "An injury that is life-threatening but not life-changing.",
              "An injury or combination of injuries that are life-threatening and could be life changing because it may result in long-term disability.",
              "Any injury sustained in a road traffic collision."
            ],
            correctAnswerIndex: 2,
            explanation: "Major trauma is defined as an injury or combination of injuries that are life-threatening and could be life changing because it may result in long-term disability."
          },
          {
            question: "Which of the following is NOT listed as a leading cause of trauma in the provided documents?",
              options: [
              "Road Traffic Collisions (RTC)",
              "Falls in people over the age of 75",
              "Work-related accidents",
              "Sports injuries in children"
            ],
            correctAnswerIndex: 3,
            explanation: "The leading causes mentioned are Road Traffic Collisions, falls in people over 75, and work-related accidents. While sports injuries can cause trauma, they are not listed as a *leading* cause in the provided context."
          },
          {
            question: "What is the primary concern of 'Mechanism of Injury (MOI)'?",
              options: [
              "The patient's medical history.",
              "The sum of all physical forces that result in the patient's injury, primarily concerned with the transfer of energy.",
              "The time elapsed since the injury occurred.",
              "The emotional impact of the injury on the patient."
            ],
            correctAnswerIndex: 1,
            explanation: "Mechanism of Injury (MOI) is the sum of all physical forces that result in the patient's injury and is primarily concerned with the transfer of energy."
          },
          {
            question: "Which term is defined as 'the study of the relationship between motion and its forces'?",
               options: [
              "Thermodynamics",
              "Kinetics",
              "Statics",
              "Dynamics"
            ],
            correctAnswerIndex: 1,
            explanation: "Kinetics is the study of the relationship between motion and its forces."
          },
          {
            question: "What is 'Energy Transfer' in the context of trauma?",
              options: [
              "The conversion of potential energy to kinetic energy.",
              "The process by which energy is relocated from one system to another, for example, through the transfer of heat, work or mass transfer.",
              "The amount of energy an object possesses due to its motion.",
              "The rate at which energy is consumed by the body."
            ],
            correctAnswerIndex: 1,
            explanation: "Energy transfer is the process by which energy is relocated from one system to another, for example, through the transfer of heat, work or mass transfer."
          },
          {
            question: "Why is considering the Mechanism of Injury (MOI) important in trauma patients?",
            options: [
              "It helps determine the patient's insurance coverage.",
              "It provides an idea of the extent of injury, may indicate internal injuries, assists in determining appropriate destination, and allows for immobilisation decisions.",
              "It is only relevant for penetrating trauma.",
              "It solely dictates the type of pain relief to be administered."
            ],
            correctAnswerIndex: 1,
            explanation: "Considering the MOI gives an idea of the extent of injury, may indicate internal injuries, assists in determining the appropriate destination, and allows for decisions regarding immobilisation."
          },
          {
            question: "What is 'Blunt Trauma'?",
            options: [
              "An injury caused by a sharp object piercing the skin.",
              "An injury resulting from a fall from a low height.",
              "A usually serious injury caused by a blunt object or collision with a blunt surface.",
              "An injury that only affects soft tissues without breaking the skin."
            ],
            correctAnswerIndex: 2,
            explanation: "Blunt trauma is a usually serious injury caused by a blunt object or collision with a blunt surface, such as in Road Traffic Collisions (RTCs) or falls from height."
          },
          {
            question: "Which of the following is an example of 'Penetrating Trauma'?",
            options: [
              "A concussion from a fall.",
              "A broken arm from a sports injury.",
              "A gunshot wound.",
              "A bruise from bumping into furniture."
            ],
            correctAnswerIndex: 2,
            explanation: "Penetrating trauma is an injury caused by a foreign object piercing the skin, damaging underlying tissues, with common causes being gunshot and stab wounds."
          },
          /*{
            question: "What is an 'Inclusive Trauma System'?",
            options: [
              "A system that only includes major trauma centers.",
              "A collaborative system within a geographical area between ambulance services, hospital trusts, commissioners, and public health representatives.",
              "A system designed exclusively for military trauma.",
              "A network of hospitals that only treat minor injuries."
            ],
            correctAnswerIndex: 1,
            explanation: "An inclusive trauma system is a collaborative system within a geographical area between various healthcare and public health entities, forming a trauma network."
          },*/
          {
            question: "What is the primary purpose of an inclusive trauma system?",
            options: [
              "To reduce the cost of trauma care.",
              "To ensure patients are taken to the most suitable hospital to appropriately manage their injuries.",
              "To centralize all trauma care in one location.",
              "To provide only basic life support at the scene."
            ],
            correctAnswerIndex: 1,
            explanation: "The primary purpose is to ensure patients are taken to the most suitable hospital to appropriately manage their injuries, allowing for appropriate use of high-level resources."
          },
          {
            question: "Which of the following is a category of hospital within a trauma network?",
            options: [
              "Local Emergency Hospitals",
              "Community Clinics",
              "General Practitioner Surgeries",
              "Rehabilitation Centers"
            ],
            correctAnswerIndex: 0,
            explanation: "The trauma network separates hospitals into Major Trauma Centres, Trauma Units, and Local Emergency Hospitals."
          },
          {
            question: "Why is 'Multi-disciplinary working' essential in trauma management?",
            options: [
              "It is a legal requirement for all incidents.",
              "It allows for sharing of resources and expertise, scene management, public management, safety, and good communication to provide optimal patient care.",
              "It speeds up the patient handover process.",
              "It reduces the need for advanced clinical interventions."
            ],
            correctAnswerIndex: 1,
            explanation: "Multi-disciplinary working is essential for sharing resources and expertise, effective scene management, public safety, and ensuring good communication for optimal patient care."
          },
          {
            question: "What does the 'S' in the SCENE mnemonic for scene assessment stand for?",
            options: [
              "Survey",
              "Safety",
              "Severity",
              "Situation"
            ],
            correctAnswerIndex: 1,
            explanation: "In the SCENE mnemonic, 'S' stands for Safety, emphasizing the need to perform a dynamic risk assessment and utilize appropriate PPE."
          },
          {
            question: "During the primary survey, what is the main goal?",
            options: [
              "To gather a detailed patient history.",
              "To identify and address immediate threats to life.",
              "To perform a head-to-toe examination.",
              "To determine the patient's long-term prognosis."
            ],
            correctAnswerIndex: 1,
            explanation: "The primary survey aims to identify IMMEDIATE THREATS TO LIFE and should be undertaken sequentially, addressing issues as they are identified."
          },
         /* {
            question: "What is the recommended timeframe for completing a primary survey?",
            options: [
              "5-10 minutes",
              "30-60 seconds",
              "60-90 seconds",
              "2-5 minutes"
            ],
            correctAnswerIndex: 2,
            explanation: "The primary survey should ideally take 60-90 seconds to complete."
          },*/
          {
            question: "Which of the following is the first step in the CA<C>BCDE approach to primary survey?",
            options: [
              "Airway",
              "Breathing",
              "Catastrophic Haemorrhage",
              "Circulation"
            ],
            correctAnswerIndex: 2,
            explanation: "The CA<C>BCDE approach begins with 'C' for Catastrophic Haemorrhage, as it is the most rapid cause of death in trauma."
          },
          {
            question: "What is the most rapid cause of death in trauma?",
            options: [
              "Airway obstruction",
              "Tension Pneumothorax",
              "Catastrophic Haemorrhage",
              "Traumatic Brain Injury"
            ],
            correctAnswerIndex: 2,
            explanation: "Catastrophic haemorrhage is identified as the most rapid cause of death in trauma and must be controlled immediately."
          },
          {
            question: "When managing the airway in a trauma patient with suspected C-spine injury, what maneuver should be used?",
            options: [
              "Head tilt-chin lift",
              "Jaw thrust",
              "Oropharyngeal airway insertion",
              "Nasopharyngeal airway insertion"
            ],
            correctAnswerIndex: 1,
            explanation: "In suspected C-spine injuries, a jaw thrust should be used to open the airway while minimizing neck movement."
          },
          {
            question: "What does the 'B' in CA<C>BCDE stand for in the primary survey?",
            options: [
              "Body temperature",
              "Blood pressure",
              "Breathing",
              "Bowel sounds"
            ],
            correctAnswerIndex: 2,
            explanation: "The 'B' in CA<C>BCDE stands for Breathing, which involves assessing rate, rhythm, depth, and checking for chest trauma."
          },
          {
            question: "Which of the following is NOT a site where significant internal hemorrhage ('blood on the floor plus 4 more') can occur?",
            options: [
              "Thoracic cavity",
              "Abdominal cavity",
              "Pelvic fractures",
              "Minor superficial lacerations"
            ],
            correctAnswerIndex: 3,
            explanation: "The 'blood on the floor plus 4 more' refers to external blood loss, and internal bleeding into the thoracic cavity, abdominal cavity, pelvic fractures, and long bone fractures. Minor superficial lacerations are not typically associated with significant internal hemorrhage."
          },
          {
            question: "What is the 'Lethal Triad of Trauma'?",
            options: [
              "Hypoxia, Hypotension, Acidosis",
              "Coagulopathy, Hypothermia, Acidosis",
              "Tachycardia, Tachypnea, Hypertension",
              "Pain, Infection, Disability"
            ],
            correctAnswerIndex: 1,
            explanation: "The Lethal Triad of Trauma consists of coagulopathy (blood clotting problem), hypothermia (low body temperature), and acidosis (acidic blood), which can lead to decreased heart performance and severe blood loss."
          },
          {
            question: "When should the secondary survey commence?",
            options: [
              "Immediately upon patient contact.",
              "Only after all life-threatening injuries identified in the primary survey have been addressed.",
              "After transferring the patient to the hospital.",
              "Before initiating any treatment."
            ],
            correctAnswerIndex: 1,
            explanation: "The secondary survey should only commence once all life-threatening injuries identified in the primary survey have been addressed."
          },
          {
            question: "What mnemonic is used for the head-to-toe assessment in the secondary survey?",
            options: [
              "ABCDE",
              "SAMPLE",
              "DCAP-BTLS",
              "ATMIST"
            ],
            correctAnswerIndex: 2,
            explanation: "DCAP-BTLS is used for the head-to-toe assessment, standing for Deformities, Contusions, Abrasions, Punctures, Burns, Tenderness, Lacerations, Swelling."
          },
         /* {
            question: "What does a low EtCO2 reading in a trauma patient often indicate?",
            options: [
              "Improved perfusion.",
              "Reducing perfusion.",
              "Hyperventilation.",
              "Increased metabolic rate."
            ],
            correctAnswerIndex: 1,
            explanation: "Low CO2 is a bad sign of reducing perfusion and EtCO2 records immediate changes, being one of the first observations to show changes."
          },*/
          {
            question: "What does the 'M' in the ATMIST handover tool stand for?",
            options: [
              "Medications",
              "Mechanism of injury",
              "Management",
              "Monitoring"
            ],
            correctAnswerIndex: 1,
            explanation: "In the ATMIST handover tool, 'M' stands for Mechanism of Injury."
          },
          /*{
          question: "What is the recommended maximum duration for an ATMIST handover?",
            options: [
              "5 minutes",
              "2 minutes",
              "60 seconds",
              "30 seconds"
            ],
            correctAnswerIndex: 2,
            explanation: "The ATMIST handover should be kept brief and concise, ideally no longer than 60 seconds."
      },*/
          {
            question: "What is the definition of 'Bleeding'?",
            options: [
              "The escape of blood from the closed cardiovascular system.",
              "Any visible blood on the patient's clothing.",
              "A minor cut that requires a bandage.",
              "The process of blood clotting."
            ],
            correctAnswerIndex: 0,
            explanation: "Bleeding is defined as the escape of blood from the closed cardiovascular system."
          },
          {
            question: "What is 'Catastrophic Haemorrhage'?",
            options: [
              "Minor bleeding that stops on its own.",
              "Bleeding that is likely to cause death in minutes.",
              "Any internal bleeding.",
              "Bleeding that requires a simple dressing."
            ],
            correctAnswerIndex: 1,
            explanation: "Catastrophic haemorrhage is severe bleeding that 'is likely to cause death in minutes'."
          },
          {
            question: "Which type of bleeding is characterized by bright red blood spurting from the wound?",
            options: [
              "Venous bleeding",
              "Capillary bleeding",
              "Arterial bleeding",
              "Internal bleeding"
            ],
            correctAnswerIndex: 2,
            explanation: "Arterial bleeding is typically characterized by bright red, spurting blood due to the high pressure from the arteries."
          },
         /* {
            question: "In the context of stemming bleeding, what does 'Turn off the tap' refer to?",
            options: [
              "Stopping all fluid administration.",
              "Preserving the patient's existing blood volume rather than just replacing with IV fluids.",
              "Applying a tourniquet to all bleeding wounds.",
              "Initiating a massive transfusion protocol."
            ],
            correctAnswerIndex: 1,
            explanation: "Cannulation and IV fluids do not stop the bleeding; 'Turn off the tap' means to preserve the patient's blood volume and control the source of bleeding, rather than just replacing with IV fluids."
          },*/
        /*  {
            question: "How much blood loss is approximately represented by a fist-sized pool on a non-absorbent surface?",
            options: [
              "5 ml",
              "10 ml",
              "20 ml",
              "50 ml"
            ],
            correctAnswerIndex: 2,
            explanation: "The MAR method of estimation states that the size of a fist on a non-absorbent surface is approximately 20mls of blood loss."
          },*/
     /*     {
            question: "Approximately how much blood loss is indicated by a 100cm diameter floor spill?",
            options: [
              "500 ml",
              "1000 ml",
              "1500 ml",
              "2000 ml"
            ],
            correctAnswerIndex: 2,
            explanation: "A 100cm diameter floor spill is estimated to represent 1500ml of blood loss."
          },*/
          {
            question: "Which layer of the skin is the outermost layer?",
            options: [
              "Dermis",
              "Hypodermis",
              "Epidermis",
              "Subcutaneous tissue"
            ],
            correctAnswerIndex: 2,
            explanation: "The epidermis is the outermost layer of the skin, followed by the dermis and hypodermis (subcutaneous tissue)."
          },
          {
            question: "What type of wound is characterized by a physical injury to the body consisting of a laceration or breaking of the skin or mucous membrane, often with damage to underlying tissue?",
            options: [
              "Contusion",
              "Abrasion",
              "Wound",
              "Incision"
            ],
            correctAnswerIndex: 2,
            explanation: "A wound is defined as a physical injury to the body consisting of a laceration or breaking of the skin or mucous membrane, often with damage to underlying tissue."
          },
          {
            question: "A bruise is categorized as which type of wound?",
            options: [
              "Laceration",
              "Puncture",
              "Contusion",
              "Incision"
            ],
            correctAnswerIndex: 2,
            explanation: "A bruise is medically known as a contusion, which is a type of wound."
          },
          {
            question: "What is a fracture found commonly in paediatrics under 10 years old?",
            options: [
              "Young partial fracture.",
              "Paediatric complex fracture",
              "Greenstick fracture.",
              "Bluetwig fracture."
            ],
            correctAnswerIndex: 2,
            explanation: "Green stick fracture is commonly found in those under 10 years old,this is due to the fact the bone can bend cause a fracture that looks like a greenstick that breaks."
              },
          /*{
           question: "What is the recommended management for small embedded foreign objects in a wound?",
            options: [
              "Surgical removal immediately.",
              "Leaving them in place and applying a dressing.",
              "Irrigation to remove them.",
              "Applying direct pressure only."
            ],
            correctAnswerIndex: 2,
            explanation: "It may be possible to remove small objects by irrigation. Larger objects that appear embedded should be left in place."
          },*/
          {
            question: "Which stage of wound healing involves the formation of a blood clot?",
            options: [
              "Inflammatory",
              "Proliferative",
              "Bleeding",
              "Remodeling"
            ],
            correctAnswerIndex: 2,
            explanation: "The first stage of wound healing is the bleeding phase, where a blood clot forms."
          },
       /*   {
            question: "What is 'Primary Intention' wound healing?",
            options: [
              "The wound is left open to heal by itself.",
              "New tissue formation from the base upwards.",
              "Wound edges are surgically closed, leading to better healing and fewer complications.",
              "Healing that occurs in multiple stages over a long period."
            ],
            correctAnswerIndex: 2,
            explanation: "Primary intention healing occurs when wound edges are surgically closed, resulting in better healing and fewer complications."
          },*/
          {
            question: "Which of the following is an INTERNAL factor that can influence wound formation?",
            options: [
              "Temperature extremes",
              "Microorganisms",
              "Diabetes",
              "Repeated trauma"
            ],
            correctAnswerIndex: 2,
            explanation: "Internal factors affecting wound formation include circulatory system failure, diabetes, neuropathy, age, nutrition, obesity, medication, and smoking."
          },
          {
            question: "Which of the following is an EXTERNAL factor that can influence wound formation?",
            options: [
              "Age",
              "Smoking",
              "Microorganisms",
              "Medication"
            ],
            correctAnswerIndex: 2,
            explanation: "External factors affecting wound formation include temperature extremes, microorganisms, and repeated trauma."
          },
          {
            question: "Which advanced clinical intervention is specifically mentioned for bleeding and wound management?",
            options: [
              "Oral antibiotics only",
              "Tranexamic Acid (TXA)",
              "Cough suppressants",
              "Antihistamines"
            ],
            correctAnswerIndex: 1,
            explanation: "Tranexamic Acid (TXA) is mentioned as an advanced clinical intervention for bleeding and wound management, along with fluids, Co-Amoxiclav, sedation/RSI, and advanced pain management."
          },
          {
            question: "What is a key characteristic of bleeding from long bone fractures?",
            options: [
              "It is usually minimal and self-limiting.",
              "It can be very significant (up to 2000ml).",
              "It only occurs if the skin is broken.",
              "It is easily controlled with simple direct pressure."
            ],
            correctAnswerIndex: 1,
            explanation: "Long bones bleed heavily, and blood loss from femoral shaft fractures can be very significant (up to 2000ml)."
          },
          {
            question: "What is the correct placement for a pelvic binder?",
            options: [
              "Around the waist.",
              "Over the greater trochanter.",
              "Below the knees.",
              "Around the chest."
            ],
            correctAnswerIndex: 1,
            explanation: "The location for a pelvic binder is key: over the greater trochanter."
          },
          {
            question: "What is 'Permissive Hypotension' in trauma management, and when is it generally NOT allowed?",
            options: [
              "Allowing blood pressure to be high; always allowed.",
              "Allowing blood pressure to be low; not allowed in isolated head injuries.",
              "Allowing blood pressure to be low; always allowed.",
              "Allowing blood pressure to be high; not allowed in chest trauma."
            ],
            correctAnswerIndex: 1,
            explanation: "Permissive Hypotension means it's okay for BP to be low in trauma, but the exception is Traumatic Brain Injuries / isolated head injuries where adequate pressure is required to overcome intracranial pressure."
          },
          {
            question: "What is the aim for maintaining consciousness and radial pulse in a trauma patient with bleeding?",
            options: [
              "To avoid fluid administration.",
              "To indicate the patient is not in pain.",
              "To ensure organ perfusion is maintained.",
              "To prepare for immediate surgery."
            ],
            correctAnswerIndex: 2,
            explanation: "The aim is to maintain radial pulse and patient alertness, and use fluids only to ensure organ perfusion is maintained."
          },
        /*  {
            question: "Which professional can activate the 'Code Red' protocol?",
            options: [
              "Any paramedic.",
              "A Critical Care Paramedic (CCP) or HEMS.",
              "A nurse in the emergency department.",
              "Any first responder."
            ],
            correctAnswerIndex: 1,
            explanation: "The Code Red protocol can only be activated by a Critical Care Paramedic (CCP) or HEMS (Helicopter Emergency Medical Service)."
          },*/
          {
            question: "What is the primary function of a traction splint for a femur fracture?",
            options: [
              "To completely stop all bleeding.",
              "To immobilize the joint above and below the fracture.",
              "To reduce the fracture and control associated bleeding.",
              "To provide a rigid cast for transport."
            ],
            correctAnswerIndex: 2,
            explanation: "Use Kendrick/Prometheus Femur splint to reduce the fracture, which also helps control bleeding from the highly vascular long bone."
          },
          {
            question: "Which of the following is a potential complication of bleeding and wounds?",
            options: [
              "Improved circulation",
              "Fat embolism",
              "Enhanced wound healing",
              "Increased body temperature"
            ],
            correctAnswerIndex: 1,
            explanation: "Potential complications include infection, further damage to soft tissues, fat embolus, and pain. Hypothermia is also a risk."
          },
          {
            question: "What is 'Secondary Intention' wound healing?",
            options: [
              "Wound edges are surgically closed.",
              "New tissue formation from the base upwards, with the wound left open to heal by itself.",
              "Healing that involves skin grafting.",
              "Healing that occurs without any scarring."
            ],
            correctAnswerIndex: 1,
            explanation: "Secondary Intention healing occurs when the wound is left open to heal by itself, with new tissue forming from the base upwards."
          },
          {
            question: "Why should patients with significant trauma be kept warm?",
            options: [
              "To make them more comfortable.",
              "To prevent shivering.",
              "Because hypothermia can impair the body's ability to clot.",
              "To speed up their metabolism."
            ],
            correctAnswerIndex: 2,
            explanation: "Patients must be kept warm as hypothermia can impair the body's ability to clot, contributing to the lethal triad of trauma."
          },
          {
            question: "What type of wound is a 'scrape' or 'graze'?",
            options: [
              "Laceration",
              "Incision",
              "Abrasion",
              "Puncture"
            ],
            correctAnswerIndex: 2,
            explanation: "An abrasion is a wound caused by superficial damage to the skin, commonly known as a scrape or graze."
      },
          {
            question: "What is the definition of 'Thermal Injury'?",
            options: [
              "Injury caused by exposure to cold only.",
              "Injury caused by chemical substances.",
              "Injury that occurs when energy is transferred from a heat source to the body, causing an increase in the temperature of local tissue.",
              "Any injury resulting in a blister."
            ],
            correctAnswerIndex: 2,
            explanation: "Thermal injury occurs when energy is transferred from a heat source to the body, causing an increase in the temperature of local tissue, leading to irreversible cellular injury."
          },
          {
            question: "Which of the following is NOT a type of thermal injury mentioned?",
            options: [
              "Chemical burns",
              "Electrical burns",
              "Friction burns",
              "Radiation poisoning"
            ],
            correctAnswerIndex: 3,
            explanation: "The types of thermal injury mentioned are Chemical, Electrical, Cold, Friction, Radiation (burns), and Heat Contact. Radiation poisoning is a broader term."
          },
          {
            question: "In the pathophysiology of burns, which zone is where the most damage has occurred and tissue death (necrosis) is present?",
            options: [
              "Zone of Hyperaemia",
              "Zone of Stasis",
              "Zone of Coagulation",
              "Zone of Regeneration"
            ],
            correctAnswerIndex: 2,
            explanation: "The Zone of Coagulation is where the most damage has occurred, leading to tissue death (necrosis)."
          },
          {
            question: "Which zone in a burn is damaged but can be significantly impacted by proper care?",
            options: [
              "Zone of Coagulation",
              "Zone of Stasis",
              "Zone of Hyperaemia",
              "Zone of Necrosis"
            ],
            correctAnswerIndex: 1,
            explanation: "The Zone of Stasis is damaged, but this is where care can make significant changes to a patient’s outcome."
          },
         /* {
           question: "A systemic response to a burn injury is likely if the Total Body Surface Area (TBSA) burnt is greater than what percentage?",
            options: [
              "5%",
              "10%",
              "15%",
              "20%"
            ],
            correctAnswerIndex: 3,
            explanation: "If the total body surface area (TBSA) burnt is greater than 20%, a systemic response is likely."
          },*/
          {
            question: "What happens to capillary permeability in a significant burn injury?",
            options: [
              "It decreases.",
              "It remains unchanged.",
              "It increases.",
              "It becomes selective."
            ],
            correctAnswerIndex: 2,
            explanation: "In a significant burn, capillary permeability increases, leading to fluid loss."
          },
          {
            question: "Which method is considered 'best for children' when assessing burn size?",
            options: [
              "Rule of Nines",
              "Lund & Browder chart",
              "The patient's palm method",
              "Estimating by visual inspection only"
            ],
            correctAnswerIndex: 1,
            explanation: "The Lund & Browder chart is indicated as 'Best for Children' for assessing burn size."
          },
          {
            question: "What percentage of a patient's Total Body Surface Area (TBSA) is approximately represented by their palm (including fingers)?",
            options: [
              "0.5%",
              "1%",
              "5%",
              "10%"
            ],
            correctAnswerIndex: 1,
            explanation: "A patient's palm (including fingers) is approximately 1% of their Total Body Surface Area."
          },
          {
            question: "A Superficial (1st degree) burn involves which layer(s) of the skin?",
            options: [
              "Dermis and Hypodermis",
              "Only the Epidermis",
              "Epidermis and Dermis",
              "All layers including subcutaneous tissue"
            ],
            correctAnswerIndex: 1,
            explanation: "Superficial (1st degree) burns involve only the epidermis and are characterized by redness and pain."
          },
          {
            question: "Which burn classification is characterized by redness with clear blisters?",
            options: [
              "Superficial (1st degree)",
              "Superficial partial thickness (2nd degree)",
              "Deep dermal",
              "Full thickness"
            ],
            correctAnswerIndex: 1,
            explanation: "Superficial partial thickness (2nd degree) burns are described as red with clear blisters."
          },
          {
            question: "A Full Thickness burn is characterized by which of the following signs?",
            options: [
              "Redness and pain only.",
              "Clear blisters and extreme pain.",
              "Stiff, white and brown appearance, often painless.",
              "Redness with bloody blisters."
            ],
            correctAnswerIndex: 2,
            explanation: "Full thickness burns extend through the entire dermis, appearing stiff, white, and brown, and are typically painless due to nerve destruction."
          },
          {
            question: "According to referral criteria, what percentage of TBSAB in children requires referral to a local burn service?",
            options: [
              "Any burn",
              ">1%",
              ">2%",
              ">5%"
            ],
            correctAnswerIndex: 2,
            explanation: "All burns >2% TBSAB in children require referral to the local burn service."
          },
          {
            question: "Which type of burn, regardless of size, requires referral to a local burn service?",
            options: [
              "Superficial burns",
              "All deep dermal and full thickness burns",
              "Small sunburns",
              "Minor friction burns"
            ],
            correctAnswerIndex: 1,
            explanation: "All deep dermal and full thickness burns, regardless of size, require referral to a local burn service."
          },
          {
            question: "What is the recommended duration for cooling a thermal burn with tepid running water?",
            options: [
              "5 minutes",
              "10 minutes",
              "20 minutes",
              "30 minutes"
            ],
            correctAnswerIndex: 2,
            explanation: "The recommendation is to cool for 20 minutes with tepid running water, ideally within 3 hours of the burn."
          },
          {
            question: "Why should ice NOT be used for cooling burns?",
            options: [
              "It is not effective.",
              "It can cause hypothermia and further tissue damage.",
              "It makes the burn more painful.",
              "It delays transport to hospital."
            ],
            correctAnswerIndex: 1,
            explanation: "Using ice is not recommended as it can cause hypothermia and further tissue damage."
          },
        /*  {
          question: "Why are gel dressings generally NOT recommended for burns?",
            options: [
              "They are too expensive.",
              "They are lacking in evidence for effectiveness.",
              "They cause allergic reactions.",
              "They are difficult to remove."
            ],
            correctAnswerIndex: 1,
            explanation: "Gel dressings are not recommended because they are lacking in evidence. Alternatives like saline or wet gauze are suggested."
          },*/
          {
            question: "What is the recommended material for covering a burn after cooling?",
            options: [
              "Cotton wool",
              "Adhesive plaster",
              "Cling film (transparent, non-adherent)",
              "Thick blankets"
            ],
            correctAnswerIndex: 2,
            explanation: "Cling film is recommended for covering burns as it is transparent, non-adherent, cheap, and acts as a barrier. However, it should not be used on faces or severe burns."
          },
          {
            question: "What is a primary concern for airway management in severe burns, especially with smoke inhalation?",
            options: [
              "Ensuring the patient can speak clearly.",
              "Bronchoconstriction and development of ARDS.",
              "Preventing nausea and vomiting.",
              "Administering oral fluids."
            ],
            correctAnswerIndex: 1,
            explanation: "Bronchoconstriction and the development of Acute Respiratory Distress Syndrome (ARDS) can occur with severe burns, especially with smoke inhalation, making airway management critical."
          },
          {
            question: "When managing chemical burns, what is the first step after ensuring safety?",
            options: [
              "Apply a neutralizing agent.",
              "Remove contaminated clothing.",
              "Cover the burn with a dry dressing.",
              "Induce vomiting."
            ],
            correctAnswerIndex: 1,
            explanation: "After evacuating the casualty to a clean area away from the hazard and ensuring safety, the next step is to remove contaminated clothing."
          },
        /*  {
          question: "What is the recommended irrigation duration for chemical burns?",
            options: [
              "1-2 minutes",
              "5 minutes",
              "Minimum 15 minutes, ideally up to 1 hour",
              "Until the pain subsides"
            ],
            correctAnswerIndex: 2,
            explanation: "Chemical burns should be irrigated with copious amounts of water for a minimum of 15 minutes, ideally up to 1 hour."
          },*/
          {
            question: "For radiation burns (like sunburn), what is a key management step?",
            options: [
              "Apply ice directly to the burn.",
              "Cover with light clothing or a towel and move the patient out of the sun.",
              "Pop any blisters that form.",
              "Administer strong pain medication immediately."
            ],
            correctAnswerIndex: 1,
            explanation: "For radiation burns like sunburn, cover with light clothing or a towel and move the patient out of the sun. Cooling with cold water and sips of cold water are also recommended."
          },
          {
            question: "In electrical burns, what is the 'SAFETY FIRST!' instruction?",
            options: [
              "Do not touch the patient until they are conscious.",
              "Do not approach the patient until you are certain that the source of electricity has been cut off.",
              "Ensure the patient is fully exposed before treatment.",
              "Immediately apply a dry dressing to the burn."
            ],
            correctAnswerIndex: 1,
            explanation: "For electrical burns, the 'SAFETY FIRST!' instruction is to not approach the patient until you are certain that the source of electricity has been cut off."
          },
        /*  {
           question: "Which of the following is an 'Other consideration' when managing thermal injury?",
            options: [
              "Patient's favorite color",
              "Scarring",
              "Preferred hospital location",
              "Dietary preferences"
            ],
            correctAnswerIndex: 1,
            explanation: "Other considerations for thermal injury include Mechanism, Pain assessment, %TBSAB, Fluids, Scarring, and Non-Accidental Injury (NAI)."
          },*/
        /*  {
            question: "What is a characteristic of paediatric burns compared to adult burns?",
            options: [
              "They are less likely to be deeper.",
              "They are likely to be deeper due to skin changes.",
              "They have a lower %TBSAB due to skin changes.",
              "Age is not associated with poorer outcomes."
            ],
            correctAnswerIndex: 1,
            explanation: "Paediatric burns are likely to be deeper and age is associated with poorer outcomes due to skin changes."
      },*/
          {
            question: "Which of the following is NOT a common mechanism of head injury?",
            options: [
              "Penetrating Injuries",
              "Ejection from a vehicle",
              "Minor sprains",
              "Pedestrians and Pedal Cyclists"
            ],
            correctAnswerIndex: 2,
            explanation: "Common mechanisms of head injury include penetrating injuries, NAI in children under 5, pedestrians and pedal cyclists, ejection from a vehicle, 'bulls-eye' injuries, and damage to helmets. Minor sprains are not a mechanism of head injury."
          },
          {
            question: "What is 'Primary Brain Injury'?",
            options: [
              "Changes that evolve over hours to days after the initial injury.",
              "The initial damage that results directly at the time of the injury occurring.",
              "Brain damage caused by lack of oxygen after the initial trauma.",
              "Damage to the brain due to infection."
            ],
            correctAnswerIndex: 1,
            explanation: "Primary brain injury is the initial damage that results directly at the time of the injury occurring."
          },
          {
            question: "What is 'Secondary Brain Injury'?",
            options: [
              "The immediate impact of trauma on the brain.",
              "Damage that can be undone with good prehospital management.",
              "Changes that evolve over a period of hours to days after the primary brain injury, contributing to further destruction of brain tissue.",
              "A type of concussion."
            ],
            correctAnswerIndex: 2,
            explanation: "Secondary brain injury refers to changes that evolve over a period of hours to days after the primary brain injury, which can be minimized with good prehospital management."
          },
          {
            question: "Which of the following is a component of Cushing's Triad, indicative of increased intracranial pressure (ICP)?",
            options: [
              "Decreased Systolic BP",
              "Increased Heart Rate",
              "Increased Systolic BP",
              "Increased Respirations"
            ],
            correctAnswerIndex: 2,
            explanation: "Cushing's Triad consists of increased systolic blood pressure, decreased heart rate, and decreased respirations, which are signs of increased intracranial pressure."
          },
          {
            question: "When managing head injuries, what is the aim regarding oxygen levels?",
            options: [
              "Hypoxia",
              "Hyperoxia",
              "Normoxia (preventing hypoxia)",
              "Any oxygen level is fine"
            ],
            correctAnswerIndex: 2,
            explanation: "Management of head injuries should focus on reducing secondary brain injury by aiming for the brain's normal parameters, including preventing hypoxia (Normoxia) with an SpO2 of 94-98%."
          },
      /*    {
            question: "What is the recommended ventilation rate to aim for in a head injury patient to manage CO2 levels?",
            options: [
              "Less than 10 per minute",
              "10-12 per minute",
              "More than 20 per minute",
              "As fast as possible"
            ],
            correctAnswerIndex: 1,
            explanation: "To manage hypo/hyper-capnia, aim for 10-12 ventilations per minute, and do not hyperventilate to target a particular reading."
          },*/
          {
            question: "What is a common cause of maxillofacial injuries?",
            options: [
              "Sudden loud noises",
              "Road Traffic Collisions (RTC)",
              "Excessive sunlight exposure",
              "Lack of sleep"
            ],
            correctAnswerIndex: 1,
            explanation: "Common causes of maxillofacial injuries include RTCs, assault, falls, and sporting injuries."
          },
       /*   {
            question: "Which type of Le Fort fracture (maxillofacial) involves complete craniofacial destruction and presents a significant airway risk?",
            options: [
              "Type I",
              "Type II",
              "Type III",
              "Type IV"
            ],
            correctAnswerIndex: 2,
            explanation: "Le Fort Type III fracture involves complete craniofacial destruction and poses a significant airway risk."
          },*/
          {
            question: "What is a 'blow-out fracture' typically associated with?",
            options: [
              "Fracture of the jaw.",
              "A blow to the eye leading to an orbital fracture.",
              "Fracture of the nasal bone.",
              "A fracture of the cheekbone."
            ],
            correctAnswerIndex: 1,
            explanation: "A blow-out fracture is a blow to the eye that can lead to orbital fractures."
          },
          {
            question: "Why is airway management a main concern in facial injuries?",
            options: [
              "Facial injuries cause immediate cardiac arrest.",
              "Swelling and pooling blood can cause airway compromise and potentially induce vomiting.",
              "Patients with facial injuries cannot breathe on their own.",
              "It is the least important aspect of facial injury management."
            ],
            correctAnswerIndex: 1,
            explanation: "Airway is potentially the main concern in facial injuries because swelling and pooling blood can cause airway compromise and potentially induce vomiting."
          },
        /*  {
            question: "What percentage of deaths from trauma are accounted for by severe thoracic injuries?",
            options: [
              "5%",
              "10%",
              "25%",
              "50%"
            ],
            correctAnswerIndex: 2,
            explanation: "Severe thoracic injuries are one of the most common causes of death from Trauma, accounting for approximately 25% of such deaths."
          },*/
          {
            question: "Which of the following is NOT one of the six major thoracic injuries encountered in the pre-hospital setting?",
            options: [
              "Pneumothorax",
              "Massive Haemothorax",
              "Appendicitis",
              "Flail Chest"
            ],
            correctAnswerIndex: 2,
            explanation: "The six major thoracic injuries include Pneumothorax/Tension Pneumothorax, Massive Haemothorax, Open Chest Wounds, Flail Chest, Cardiac Tamponade, and Air Embolism. Appendicitis is not a thoracic injury."
          },
          {
            question: "What is a 'closed pneumothorax' most commonly caused by?",
            options: [
              "A stab wound to the chest.",
              "A rib fracture that punctures a lung, releasing air into the pleural space.",
              "Spontaneous lung collapse.",
              "An allergic reaction."
            ],
            correctAnswerIndex: 1,
            explanation: "A closed pneumothorax most commonly results from trauma, such as a rib fracture that punctures a lung, releasing air into the pleural space."
          },
          {
            question: "Which of the following is a sign of a Tension Pneumothorax?",
            options: [
              "Bradycardia",
              "Tracheal deviation",
              "Warm, flushed skin",
              "Equal chest movement"
            ],
            correctAnswerIndex: 1,
            explanation: "Signs of a Tension Pneumothorax include chest pain, dyspnea, tachypnea, tachycardia, tracheal deviation, unilateral/unequal chest movement, and hyperresonance."
          },
          {
            question: "What is the definitive pre-hospital treatment for a Tension Pneumothorax?",
            options: [
              "Chest compressions",
              "Needle decompression (by Paramedic/CCP)",
              "Oral pain relief",
              "Applying a simple bandage"
            ],
            correctAnswerIndex: 1,
            explanation: "Treatment for Tension Pneumothorax is by Chest Decompression, typically performed by a Paramedic or Critical Care Paramedic."
          },
          {
            question: "What is 'Haemothorax'?",
            options: [
              "Air in the pleural cavity.",
              "Blood in the pleural cavity.",
              "Fluid around the heart.",
              "A collapsed lung due to infection."
            ],
            correctAnswerIndex: 1,
            explanation: "Haemothorax refers to a collection of blood within the pleural cavity, primarily caused by sharp or blunt trauma to the chest."
          },
     /*     {
            question: "Which sign is characteristic of a Haemothorax on percussion?",
            options: [
              "Hyperresonance",
              "Tympanic sounds",
              "Dull chest sounds",
              "Normal resonance"
            ],
            correctAnswerIndex: 2,
            explanation: "Haemothorax is characterized by dull chest sounds on percussion."
          },*/
          {
            question: "A 'Flail Chest' typically occurs when how many ribs are broken in at least how many places?",
            options: [
              "1 rib in 1 place",
              "2 ribs in 1 place",
              "3 or more ribs in at least 2 places",
              "Any number of ribs in 1 place"
            ],
            correctAnswerIndex: 2,
            explanation: "A flail chest may occur when 3 or more ribs are broken in at least 2 places, causing a segment of the chest wall to move independently."
          },
       /*   {
            question: "What is the recommended management approach for a Flail Chest regarding immobilization?",
            options: [
              "Immobilize the flail segment with tape.",
              "Apply a rigid splint to the chest.",
              "DO NOT attempt to immobilize the injury.",
              "Apply direct pressure to the flail segment."
            ],
            correctAnswerIndex: 2,
            explanation: "For a flail chest, it is explicitly stated to DO NOT attempt to immobilize the injury; focus on managing hypoxia and ventilation."
          },*/
          {
            question: "What is a common mechanism for internal hemorrhage in abdominal injuries?",
            options: [
              "Minor cuts",
              "Sudden deceleration mechanisms",
              "Direct blows to the chest",
              "Superficial abrasions"
            ],
            correctAnswerIndex: 1,
            explanation: "Internal hemorrhage in abdominal injuries is commonly seen in sudden deceleration mechanisms."
          },
          {
            question: "If a patient with abdominal trauma has bowel evisceration, what is the immediate management?",
            options: [
              "Attempt to push the bowel back in.",
              "Cover the bowel evisceration with a warm non-adhesive dressing.",
              "Apply a tight bandage directly over the exposed bowel.",
              "Irrigate the exposed bowel with cold water."
            ],
            correctAnswerIndex: 1,
            explanation: "For bowel evisceration, the management is to cover it with a warm non-adhesive dressing. Do not attempt to push it back in."
          },
          {
            question: "What is the general principle for managing penetrating objects in the abdomen?",
            options: [
              "Remove them immediately.",
              "Remove them only if they are small.",
              "Do not remove any penetrating objects; secure appropriately.",
              "Apply direct pressure around the object and then remove."
            ],
            correctAnswerIndex: 2,
            explanation: "The principle is to not remove any penetrating objects; instead, secure them appropriately, allowing for movement if pulsating."
      },
          {
            question: "Which of the following is the main cause of spinal cord injuries?",
            options: [
              "Tumors",
              "Thrombosis",
              "Infection",
              "Trauma"
            ],
            correctAnswerIndex: 3,
            explanation: "While spinal cord injuries can occur due to tumors, thrombosis, and infection, the main cause is trauma."
          },
          {
            question: "Damage to the spinal cord above T6 can lead to an interruption of which nervous system division?",
            options: [
              "Somatic",
              "Parasympathetic",
              "Sympathetic",
              "Enteric"
            ],
            correctAnswerIndex: 2,
            explanation: "Damage to the spinal cord above T6 can lead to an interruption of the sympathetic division, causing vasodilation, bradycardia, hypotension, and a flushed appearance."
          },
          {
            question: "What is the target systolic blood pressure for a patient with a spinal cord injury?",
            options: [
              "Below 90mmHg",
              "90-100mmHg",
              "Needs to be targeted to 100mmHg",
              "Above 120mmHg"
            ],
            correctAnswerIndex: 2,
            explanation: "For spinal cord injuries, the systolic blood pressure needs to be targeted to 100mmHg."
          },
          {
            question: "In which of the following situations may spinal immobilization NOT be appropriate?",
            options: [
              "Suspected spinal fracture",
              "Increased intracranial pressure (ICP)",
              "Conscious and cooperative patient",
              "Absence of pain"
            ],
            correctAnswerIndex: 1,
            explanation: "Immobilization may not be appropriate in patients with airway compromise, increased ICP, pain, or restricted respirations."
          },
        /*  {
            question: "Pelvic injuries are found in what percentage of injuries involving significant mechanism?",
            options: [
              "2-8%",
              "10%",
              "20%",
              "44-46%"
            ],
            correctAnswerIndex: 2,
            explanation: "Pelvic injuries are found in 20% of injuries involving significant mechanism, although they make up only 2-8% of all skeletal injuries."
          },*/
          {
            question: "What is the most pressing concern in pelvic fractures?",
            options: [
              "Pain management",
              "Haemodynamic instability",
              "Risk of infection",
              "Long-term disability"
            ],
            correctAnswerIndex: 1,
            explanation: "Haemodynamic instability is the most pressing concern in pelvic fractures due to potential significant bleeding."
          },
      /*    {
            question: "What percentage of haemodynamic instability in pelvic fractures is accounted for by arterial bleeding?",
            options: [
              "5%",
              "10%",
              "25%",
              "50%"
            ],
            correctAnswerIndex: 2,
            explanation: "Arterial bleeding accounts for 25% of haemodynamic instability in pelvic fractures, with the majority of bleeding being low pressure and responsive to pelvic binders."
          },*/
          {
            question: "What is the estimated blood loss from a femoral shaft fracture?",
            options: [
              "Up to 500ml",
              "Up to 1000ml",
              "Up to 2000ml",
              "More than 3000ml"
            ],
            correctAnswerIndex: 2,
            explanation: "Blood loss from Femoral shaft fractures can be very significant, up to 2000ml."
          },
          {
            question: "When assessing other musculoskeletal injuries, what should always be assessed to ensure there is no neurovascular compromise?",
            options: [
              "Only the injured limb.",
              "The joint above and the joint below the injury.",
              "Only the patient's GCS.",
              "The patient's medical history."
            ],
            correctAnswerIndex: 1,
            explanation: "Always assess the joint above and the joint below an injury as forces can be transferred, and injuries need to be assessed for neurovascular compromise."
          },
          {
            question: "What is the difference between a 'sprain' and a 'strain'?",
            options: [
              "Sprains affect muscles, strains affect ligaments.",
              "Sprains affect ligaments, strains affect muscles and tendons.",
              "Sprains are minor, strains are major.",
              "There is no difference, the terms are interchangeable."
            ],
            correctAnswerIndex: 1,
            explanation: "Sprains are ligamental injuries, while strains are related to muscles and tendons."
          },
          {
            question: "What does 'PRICE' stand for in the management of minor musculoskeletal injuries?",
            options: [
              "Pain, Rest, Ice, Compression, Elevation",
              "Protect, Rest, Ice, Compress, Elevate",
              "Pressure, Rest, Immobilize, Cool, Exercise",
              "Prevent, Reassure, Inspect, Clean, Elevate"
            ],
            correctAnswerIndex: 1,
            explanation: "PRICE stands for Protect from further injury, Rest injured limb, Ice, Compress, and Elevate."
          },
          {
            question: "What is 'Light rescue' defined as?",
            options: [
              "Extrication requiring heavy machinery.",
              "Extrication performed without the use of specialist or heavy-duty equipment.",
              "Any rescue operation in daylight.",
              "Rescue operations involving only one rescuer."
            ],
            correctAnswerIndex: 1,
            explanation: "Light rescue is defined as extrication performed without the use of specialist or heavy-duty equipment."
          },
          {
            question: "What is the definition of 'Immobilisation'?",
            options: [
              "Allowing full range of motion.",
              "Preventing (something or someone) from moving or operating as normal.",
              "The act of freeing an entrapped person.",
              "Applying a cast to a broken bone."
            ],
            correctAnswerIndex: 1,
            explanation: "Immobilisation is defined as preventing (something or someone) from moving or operating as normal."
          },
          {
            question: "Which of the following is a type of entrapment?",
            options: [
              "Psychological",
              "Mechanical",
              "Chemical",
              "Thermal"
            ],
            correctAnswerIndex: 1,
            explanation: "The types of entrapment mentioned are Mechanical, Environmental, and Physical."
          },
          {
            question: "Which factor should be considered when forming an extrication plan?",
            options: [
              "The patient's preferred hospital.",
              "The weather forecast for the next day.",
              "Time critical factors and constraints.",
              "The cost of extrication equipment."
            ],
            correctAnswerIndex: 2,
            explanation: "Factors to consider when forming an extrication plan include environmental and safety factors, time critical factors and constraints, and the condition of the patient."
          },
          {
            question: "What is a primary reason for removing a crash helmet from a trauma patient?",
            options: [
              "To make the patient more comfortable.",
              "To assess for scalp lacerations only.",
              "To gain access to the airway and assess for C-spine injury.",
              "To reduce the patient's anxiety."
            ],
            correctAnswerIndex: 2,
            explanation: "Crash helmets are removed to gain access to the airway and allow for proper assessment of potential C-spine injuries."
          },
          {
            question: "Which of the following is a risk associated with removing a crash helmet?",
            options: [
              "Increased patient comfort.",
              "Further damage to the cervical spine.",
              "Reduced intracranial pressure.",
              "Improved patient communication."
            ],
            correctAnswerIndex: 1,
            explanation: "A significant risk associated with removing a crash helmet is the potential for further damage to the cervical spine."
          },
          {
            question: "What is a benefit of skeletal immobilization?",
            options: [
              "Increased pain.",
              "Increased risk of fat embolus.",
              "Reduction in pain and control of bleeding.",
              "Delayed healing."
            ],
            correctAnswerIndex: 2,
            explanation: "Benefits of immobilization include reduction in pain, reduction in risk of further damage/fat embolus/infection, control of bleeding, and restoration/maintenance of circulation."
          },
          {
            question: "What is a specific consideration when performing immobilization on elderly patients?",
            options: [
              "They are less likely to experience pain.",
              "They have a higher risk of pressure sores and underlying health conditions.",
              "They are always cooperative.",
              "Immobilization is never appropriate for them."
            ],
            correctAnswerIndex: 1,
            explanation: "Elderly patients have a higher risk of pressure sores and underlying health conditions, which are specific considerations for immobilization."
          },
          {
            question: "Why can immobilization be difficult for paediatric patients?",
            options: [
              "They are usually too heavy.",
              "They cannot understand instructions.",
              "They can become distressed, causing more damage.",
              "Their bones are too flexible."
            ],
            correctAnswerIndex: 2,
            explanation: "Paediatric patients can become distressed during immobilization, which may cause more damage."
      },
          {
            question: "In pregnant trauma patients, why might bleeding be asymptomatic in later stages of pregnancy?",
            options: [
              "They have a lower pain threshold.",
              "Their blood clots faster.",
              "They have a greater amount of blood in circulation.",
              "The fetus absorbs the blood."
            ],
            correctAnswerIndex: 2,
            explanation: "Pregnant patients have a greater amount of blood in circulation in later stages, meaning significant bleeding may initially be asymptomatic."
          },
          {
            question: "What is the target systolic blood pressure for a pregnant trauma patient?",
            options: [
              "Permissive hypotension is allowed.",
              "Below 90mmHg.",
              "At 100mmHg.",
              "As high as possible."
            ],
            correctAnswerIndex: 2,
            explanation: "For pregnant trauma patients, the target systolic BP is 100mmHg, and permissive hypotension should NOT be used."
          },
          {
            question: "When managing a pregnant trauma patient, what position should they be placed in if possible?",
            options: [
              "Supine (flat on back).",
              "Trendelenburg position.",
              "Left lateral tilt (approximately 30 degrees).",
              "Right lateral tilt."
            ],
            correctAnswerIndex: 2,
            explanation: "A left lateral tilt of approximately 30 degrees is recommended for pregnant trauma patients to prevent supine hypotensive syndrome."
          },
          {
            question: "Which type of ballistic trauma is more likely to have significant internal damage if there is no exit wound?",
            options: [
              "Low velocity (e.g., shotgun).",
              "High velocity (e.g., rifles).",
              "Both types equally.",
              "Neither type, as exit wounds are always present."
            ],
            correctAnswerIndex: 1,
            explanation: "For high velocity ballistic trauma (e.g., rifles), if there is no exit wound, it indicates significant internal damage."
          },
          {
            question: "In ballistic trauma management, what should be considered regarding the bullet's path?",
            options: [
              "It always travels in a straight line.",
              "No chest wounds do not always mean no internal chest damage.",
              "It only causes external damage.",
              "It can only cause damage if it exits the body."
            ],
            correctAnswerIndex: 1,
            explanation: "In ballistic trauma, consider the bullet's path; no chest wounds do not always mean no internal chest damage, and internal ricochet can cause huge damage."
          },
          {
            question: "Which phase of blast injury involves injuries caused by the pressure wave moving outward from the blast center?",
            options: [
              "Primary Injury",
              "Secondary Injury",
              "Tertiary Injury",
              "Quaternary Injury"
            ],
            correctAnswerIndex: 0,
            explanation: "Primary injury in blast trauma is caused by the pressure wave moving outward from the blast center, resulting in pressure injuries."
          },
          {
            question: "What is often the most critical aspect of blast trauma, even if external damage looks overwhelming?",
            options: [
              "External bleeding.",
              "Psychological impact.",
              "Internal damage (e.g., pneumothorax, bowel rupture, cardiac damage).",
              "Minor abrasions."
            ],
            correctAnswerIndex: 2,
            explanation: "In blast trauma, external damage can look overwhelming, but it is usually the internal damage (e.g., pneumothorax, bowel rupture, cardiac damage) that kills."
          },
          {
            question: "What is a key consideration for managing patients with 'Polytrauma'?",
            options: [
              "They have a lower risk of bleeding.",
              "They only have visible injuries.",
              "Don't delay on scene, and consider unseen injuries.",
              "They require minimal immobilization."
            ],
            correctAnswerIndex: 2,
            explanation: "For polytrauma patients, it's important not to delay on scene and to consider injuries that may not be immediately visible, as they have a higher risk of bleeding and infection."
          },
          {
            question: "In 'Suspension Injuries', if the patient is still conscious, what should they be encouraged to do?",
            options: [
              "Remain completely still.",
              "Move their limbs and paddle their feet to encourage circulation.",
              "Hold their breath.",
              "Attempt to self-extricate immediately."
            ],
            correctAnswerIndex: 1,
            explanation: "If a patient in suspension is still conscious, they should be encouraged to move their limbs and paddle their feet to encourage circulation."
          },
          {
            question: "How does 'Traumatic Cardiac Arrest (TCA)' differ from medical cardiac arrest?",
            options: [
              "TCA patients are usually unhealthy before the trauma.",
              "TCA is caused by a reduced cardiac output due to serious trauma, requiring aggressive management of reversible causes.",
              "CPR is always emphasized more in TCA.",
              "TCA is managed with the same approach as medical cardiac arrest."
            ],
            correctAnswerIndex: 1,
            explanation: "TCA is completely different from medical cardiac arrest; most patients were healthy until serious trauma caused reduced cardiac output, and aggressive management of reversible causes saves lives."
          },
          {
            question: "Which of the following is a reversible cause of Traumatic Cardiac Arrest (TCA)?",
            options: [
              "Hypothermia",
              "Hypoxia",
              "Hyperglycemia",
              "Hyperthermia"
            ],
            correctAnswerIndex: 1,
            explanation: "The reversible causes of TCA include Hypoxia, Hypovolaemia, Tension Pneumothorax, and Cardiac Tamponade."
          },
          {
            question: "What is 'Impact Brain Apnea (IBA)'?",
            options: [
              "A condition where breathing stops permanently after head trauma.",
              "Sudden blunt force trauma to the head that stuns the brain into unconsciousness, causing breathing to stop temporarily.",
              "A type of seizure activity after head injury.",
              "Brain death due to severe hypoxia."
            ],
            correctAnswerIndex: 1,
            explanation: "Impact Brain Apnea (IBA) is a sudden blunt force trauma to the head that stuns the brain into unconsciousness, causing breathing to stop for several minutes, though it will return unless the airway is obstructed."
          },
          {
            question: "According to the HOTT Algorithm, what is a key point regarding CPR in TCA?",
            options: [
              "CPR is the most important intervention.",
              "CPR should be performed continuously without interruption.",
              "There is a de-emphasis on CPR, but it doesn't mean don't do it.",
              "CPR is only for medical cardiac arrest."
            ],
            correctAnswerIndex: 2,
            explanation: "A key point of the HOTT Algorithm is a de-emphasis on CPR, but it doesn’t mean don’t do it; the focus is on correcting reversible causes."
          },
          {
            question: "Which of the following is an external hemorrhage control technique mentioned in the HOTT Algorithm?",
            options: [
              "Direct pressure only.",
              "Tourniquets.",
              "Applying ice packs.",
              "Elevating the limb above the heart."
            ],
            correctAnswerIndex: 1,
            explanation: "External Haemorrhage Control techniques mentioned include Tourniquets, Pelvic Splinting, and traction for long bones."
          },
          {
            question: "What is the importance of early basic airway support in cases of Impact Brain Apnea (IBA)?",
            options: [
              "It helps to diagnose the type of head injury.",
              "It directly treats brain swelling.",
              "It helps prevent Traumatic Cardiac Arrest (TCA).",
              "It is only necessary if the patient is conscious."
            ],
            correctAnswerIndex: 2,
            explanation: "Early Basic Airway Support helps prevent Traumatic Cardiac Arrest (TCA) in cases of Impact Brain Apnea."
          },
        ],
      },
      {
        title: "Anatomy & Physiology",
        questions: [
                               // --- NEW ANATOMY & PHYSIOLOGY QUESTIONS ---

                // Musculoskeletal System (30 questions)
               /* {
                    question: "Which of these are functions of the skeletal system (Select all that apply)?",
                    options: ["Provides protection for vital organs", "Blood cell production", "Mineral storage", "Provides support, shape & attachment for muscles & tendons"],
                    correctAnswerIndex: 0, // This question has multiple correct answers, but the quiz format only supports one. I'll pick the first one as the 'primary' or rephrase. Rephrasing to a single best answer.
                    explanation: "The skeletal system provides protection for vital organs, produces blood cells, stores minerals, and provides support and attachment for muscles and tendons."
                },*/
                {
                    question: "Which type of bone cell is primarily responsible for forming new bone tissue?",
                    options: ["Osteogenic cells", "Osteoclasts", "Osteoblasts", "Osteocytes"],
                    correctAnswerIndex: 2,
                    explanation: "Osteoblasts are bone-forming cells that synthesize and deposit new bone matrix."
                },
             
                {
                    question: "Which type of bone cell is primarily responsible for forming breaking down bone tissue?",
                    options: ["Osteogenic cells", "Osteoclasts", "Osteoblasts", "Osteocytes"],
                    correctAnswerIndex: 1,
                    explanation: "Osteoclasts are breaking down bone cells that remove calcium from the bone and helps with bone remodeling."
                }, 
                {
                    question: "Which of these is NOT part of the appendicular skeleton?",
                    options: ["Vertebral column", "Upper limb bones", "Pelvic girdle", "Lower limb bones"],
                    correctAnswerIndex: 0,
                    explanation: "The vertebral column is part of the axial skeleton, which forms the central axis of the body."
                },
                {
                    question: "Which of these describes irregular bones?",
                    options: ["Short, flat and irregular bones that have no shaft", "Vertebrae and some bones of the skull", "Sternum, ribs & most of the bones of the skull", "Develop deep within a sheath of cartilage and include the patella & hyoid bone"],
                    correctAnswerIndex: 1,
                    explanation: "Irregular bones have complex shapes and include vertebrae and some bones of the skull."
                },
                {
                    question: "Where might I find the maxilla bone?",
                    options: ["In the spine", "In the hands", "Under the arms", "Face"],
                    correctAnswerIndex: 3,
                    explanation: "The maxilla is a bone of the face, forming the upper jaw."
                },
                {
                    question: "Which of these can NOT be found distal to the shoulder?",
                    options: ["Ulna", "Sternum", "Phalanges", "Metacarpals"],
                    correctAnswerIndex: 1,
                    explanation: "The sternum (breastbone) is part of the axial skeleton and is not found distal (further away from the center of the body) to the shoulder."
                },
                {
                    question: "What do tendons do?",
                    options: ["Attach muscle to bone.", "Made up of a number of parallel tube-shaped units called Osteons", "Attaches bone to bone.", "Looks like honeycomb and contains osteocytes & few lamellae"],
                    correctAnswerIndex: 0,
                    explanation: "Tendons are strong, fibrous connective tissues that connect muscle to bone, enabling movement."
                },
                {
                    question: "Which of these is an example of a gliding joint?",
                    options: ["Knee", "Ulna", "Hip", "Ankle (intertarsal joints)"],
                    correctAnswerIndex: 3,
                    explanation: "Intertarsal joints in the ankle are examples of gliding (plane) joints, allowing limited sliding movements."
                },
                /*{
                    question: "Which of these describes contractility of muscles?",
                    options: ["The ability to be stretched or extended", "Ability to shorten and thicken to meet the requirements communicated by the reception of a sufficient stimulus", "Ability to receive and respond to stimuli", "The ability to return to its original shape"],
                    correctAnswerIndex: 1,
                    explanation: "Contractility is the unique ability of muscle tissue to shorten and thicken, generating force."
                },*/
                {
                    question: "Which of these describes cardiac muscle?",
                    options: ["Involuntary & striated muscle", "Involuntary muscle, lacks striation. Found in the internal organs such as gall bladder", "Voluntary & striated muscle. Attached to bones via tendons", "Voluntary muscle, lacks striation"],
                    correctAnswerIndex: 0,
                    explanation: "Cardiac muscle is found only in the heart, is involuntary (not consciously controlled), and has a striated (striped) appearance."
                },
                {
                    question: "What are the five different types of bones based on their shape?",
                    options: ["Long, short, flat, irregular, sesamoid", "Large, small, thick, thin, curved", "Axial, appendicular, cranial, facial, vertebral", "Compact, spongy, red, yellow, bone marrow"],
                    correctAnswerIndex: 0,
                    explanation: "Bones are classified into five main types: long, short, flat, irregular, and sesamoid bones."
                },
                {
                    question: "The shaft (the middle) of a long bone is called the:",
                    options: ["Epiphysis", "Diaphysis", "Periosteum", "Articular cartilage"],
                    correctAnswerIndex: 1,
                    explanation: "The diaphysis is the main or midsection (shaft) of a long bone."
                },
                /*{
                    question: "What type of bone tissue is dense, has few spaces, and provides high stress-bearing capability?",
                    options: ["Spongy bone", "Cancellous bone", "Trabecular bone", "Compact bone"],
                    correctAnswerIndex: 3,
                    explanation: "Compact bone is dense and strong, forming the outer layer of bones and providing structural support."
                },*/
                {
                    question: "Which type of bone marrow is responsible for producing red blood cells, white blood cells, and platelets?",
                    options: ["Yellow bone marrow", "Red bone marrow", "Trabecular marrow", "Compact marrow"],
                    correctAnswerIndex: 1,
                    explanation: "Red bone marrow is the primary site of hematopoiesis (blood cell formation)."
                },
                {
                    question: "The axial skeleton includes which of the following?",
                    options: ["Upper limbs", "Pelvic girdle", "Skull and vertebral column", "Lower limbs"],
                    correctAnswerIndex: 2,
                    explanation: "The axial skeleton consists of the bones of the head (skull), neck (vertebrae), and trunk (ribs, sternum, vertebral column)."
                },
                {
                    question: "How many cervical vertebrae are typically found in the human vertebral column?",
                    options: ["5", "7", "12", "9"],
                    correctAnswerIndex: 1,
                    explanation: "There are typically 7 cervical vertebrae (C1-C7) in the neck region."
                },
                {
                    question: "Which type of joint allows for no movement (immoveable), such as the sutures in the skull?",
                    options: ["Cartilaginous joint", "Synovial joint", "Fibrous joint", "Hinge joint"],
                    correctAnswerIndex: 2,
                    explanation: "Fibrous joints are connected by dense connective tissue, allowing little to no movement."
                },
                {
                    question: "Which type of joint is freely moveable and characterized by a joint capsule, synovial fluid, and articular cartilage?",
                    options: ["Fibrous joint", "Cartilaginous joint", "Synovial joint", "Fixed joint"],
                    correctAnswerIndex: 2,
                    explanation: "Synovial joints are the most common type of joint in the body and allow for a wide range of motion."
                },
                /*{
                    question: "The ability of muscle to be stretched or extended is called:",
                    options: ["Excitability", "Contractility", "Extensibility", "Elasticity"],
                    correctAnswerIndex: 2,
                    explanation: "Extensibility is the ability of muscle tissue to be stretched without tearing."
                },*/
                {
                    question: "What is the primary function of ligaments?",
                    options: ["Connect muscle to bone", "Connect bone to bone", "Produce movement", "Store minerals"],
                    correctAnswerIndex: 1,
                    explanation: "Ligaments are strong, flexible bands of fibrous connective tissue that connect bones to other bones, providing joint stability."
                },
                {
                    question: "What is the role of cartilage in joints?",
                    options: ["To produce blood cells", "To store calcium", "To reduce friction and act as a shock absorber", "To connect muscles to bones"],
                    correctAnswerIndex: 2,
                    explanation: "Cartilage provides a smooth, slippery surface for bones to glide over and absorbs shock, protecting the ends of bones."
                },
                {
                    question: "The process of blood cell formation is known as:",
                    options: ["Osteogenesis", "Myogenesis", "Haematopoiesis", "Glycogenesis"],
                    correctAnswerIndex: 2,
                    explanation: "Haematopoiesis is the process by which all blood cells are formed, primarily in the bone marrow."
                },
                {
                    question: "Which major muscle group is located on the front of the thigh?",
                    options: ["Hamstrings", "Gluteals", "Quadriceps", "Calves"],
                    correctAnswerIndex: 2,
                    explanation: "The quadriceps femoris group is a large muscle group that covers the front and sides of the thigh."
                },
                {
                    question: "Movement that decreases the angle between two body parts is called:",
                    options: ["Extension", "Abduction", "Flexion", "Adduction"],
                    correctAnswerIndex: 2,
                    explanation: "Flexion is a bending movement that decreases the angle between two parts."
                },
                {
                    question: "Movement of a limb away from the midline of the body is called:",
                    options: ["Adduction", "Flexion", "Abduction", "Rotation"],
                    correctAnswerIndex: 2,
                    explanation: "Abduction is the movement of a body part away from the midline."
                },
                {
                    question: "Which bone is commonly known as the 'collarbone'?",
                    options: ["Scapula", "Humerus", "Clavicle", "Sternum"],
                    correctAnswerIndex: 2,
                    explanation: "The clavicle is the scientific name for the collarbone."
                },
                {
                    question: "The bone of the upper arm is the:",
                    options: ["Radius", "Ulna", "Femur", "Humerus"],
                    correctAnswerIndex: 3,
                    explanation: "The humerus is the long bone in the upper arm."
                },
                {
                    question: "Which of the following is an example of a ball-and-socket joint?",
                    options: ["Elbow joint", "Knee joint", "Shoulder joint", "Ankle joint"],
                    correctAnswerIndex: 2,
                    explanation: "Ball-and-socket joints, like the shoulder and hip, allow for movement in many directions."
                },
                /*{
                    question: "The process by which muscles return to their original shape after contraction or extension is called:",
                    options: ["Excitability", "Contractility", "Extensibility", "Elasticity"],
                    correctAnswerIndex: 3,
                    explanation: "Elasticity is the ability of muscle tissue to recoil to its original resting length after being stretched or contracted."
                },*/
                {
                    question: "What is the largest bone in the human body?",
                    options: ["Tibia", "Fibula", "Femur", "Humerus"],
                    correctAnswerIndex: 2,
                    explanation: "The femur, or thigh bone, is the longest and strongest bone in the human body."
                },
                {
                    question: "What is the anatomical neutral position?",
                    options: ["facing forwards looking straight ahead, palms facing forward with arms by your side and body standing up straight (erect)", "facing forward, hunched over, with bent knees", "Looking forward standing up straight palms facing behind you", "Lying on the floor facing the ceiling"],
                    correctAnswerIndex: 0,
                    explanation: "Anatomically Neutral is facing forwards looking straight ahead, palms facing forward with arms by your side and body standing up straight (erect)."
                },
                {
                    question: "How many vertabraes in the spine",
                    options: ["24","33","35","28"],
                    correctAnswerIndex: 1,
                    explanation: "24 Moveable (Cervical=7, Thoracic=12, Lumbar=5), 9 Fused (Sacral=5, Coccyx=4"
                },
                /*{
                    question: "What i",
                    options: ["facing forwards looking straight ahead, palms facing forward with arms by your side and body standing up straight (erect)", "facing forward, hunched over, with bent knees", "Looking forward standing up straight palms facing behind you", "Lying on the floor facing the ceiling"],
                    correctAnswerIndex: 0,
                    explanation: "Anatomically Neutral is facing forwards looking straight ahead, palms facing forward with arms by your side and body standing up straight (erect)."
                },*/

                // Nervous System (30 questions)
                {
                    question: "What is the primary function of the nervous system?",
                    options: ["Digestion of food", "Detecting and interpreting stimuli, and coordinating responses", "Pumping blood", "Filtering waste from blood"],
                    correctAnswerIndex: 1,
                    explanation: "The nervous system is the body's control and communication system, responsible for detecting stimuli, processing information, and coordinating responses."
                },
                {
                    question: "The central nervous system (CNS) consists of the:",
                    options: ["Nerves and ganglia", "Brain and spinal cord", "Sensory and motor neurons", "Sympathetic and parasympathetic divisions"],
                    correctAnswerIndex: 1,
                    explanation: "The CNS is composed of the brain and spinal cord, which are the main control centers of the body."
                },
                {
                    question: "Which part of the brain is the largest and is responsible for higher-level functions like thought, language, and voluntary movement?",
                    options: ["Cerebellum", "Brainstem", "Cerebrum", "Diencephalon"],
                    correctAnswerIndex: 2,
                    explanation: "The cerebrum is the largest part of the brain and is involved in complex cognitive functions."
                },
                /*{
                    question: "The outer part of the cerebrum, composed of nerve cell bodies, is called the:",
                    options: ["White matter", "Corpus callosum", "Cerebral cortex (grey matter)", "Ventricles"],
                    correctAnswerIndex: 2,
                    explanation: "The cerebral cortex, or grey matter, is the highly folded outer layer of the cerebrum where most neural processing occurs."
                },*/
                /*{
                    question: "Which part of the diencephalon controls appetite, thirst, body temperature, and emotional reactions?",
                    options: ["Thalamus", "Hypothalamus", "Hippocampus", "Pituitary gland"],
                    correctAnswerIndex: 1,
                    explanation: "The hypothalamus is a vital control center for many homeostatic functions and emotional responses."
                },*/
                {
                    question: "The brainstem includes which three main parts?",
                    options: ["Cerebrum, cerebellum, diencephalon", "Midbrain, pons, medulla oblongata", "Thalamus, hypothalamus, hippocampus", "Frontal lobe, parietal lobe, temporal lobe"],
                    correctAnswerIndex: 1,
                    explanation: "The brainstem connects the cerebrum and cerebellum to the spinal cord and consists of the midbrain, pons, and medulla oblongata."
                },
                {
                    question: "What vital center located in the medulla oblongata controls breathing and heart rate?",
                    options: ["Sensory cortex", "Motor cortex", "Respiratory and Cardiovascular Center", "Visual association area"],
                    correctAnswerIndex: 2,
                    explanation: "The medulla oblongata contains vital centers that regulate essential involuntary functions like respiration and cardiovascular activity."
                },
                {
                    question: "What is the primary function of the cerebellum?",
                    options: ["Processing sensory information", "Coordinating voluntary movements, balance, and posture", "Controlling emotions", "Regulating body temperature"],
                    correctAnswerIndex: 1,
                    explanation: "The cerebellum is crucial for fine-tuning motor movements, maintaining balance, and coordinating muscle activity."
                },
                {
                    question: "The spinal cord acts as the center of what type of action?",
                    options: ["Voluntary movement", "Conscious thought", "Reflex action", "Hormone secretion"],
                    correctAnswerIndex: 2,
                    explanation: "The spinal cord is responsible for mediating reflex actions, which are rapid, involuntary responses to stimuli."
                },
                {
                    question: "What are the three protective membranes that surround the brain and spinal cord, collectively known as the meninges?",
                    options: ["Epidermis, dermis, hypodermis", "Pericardium, pleura, peritoneum", "Dura mater, arachnoid mater, pia mater", "Cortex, medulla, pelvis"],
                    correctAnswerIndex: 2,
                    explanation: "The meninges consist of three layers: the dura mater (outermost), arachnoid mater (middle), and pia mater (innermost), which protect the CNS."
                },
                {
                    question: "What is the function of cerebrospinal fluid (CSF)?",
                    options: ["To transport oxygen to the brain", "To lubricate, act as a shock absorber, support, and nourish the brain and spinal cord", "To filter waste products from the blood", "To produce hormones"],
                    correctAnswerIndex: 1,
                    explanation: "CSF provides buoyancy, protection, and nutrient/waste exchange for the brain and spinal cord."
                },
                {
                    question: "Nerves that travel towards the brain carrying sensory information are called:",
                    options: ["Motor nerves (efferent)", "Autonomic nerves", "Sensory nerves (afferent)", "Cranial nerves"],
                    correctAnswerIndex: 2,
                    explanation: "Afferent neurons (sensory nerves) transmit signals from sensory receptors to the central nervous system."
                },
                {
                    question: "Nerves that travel away from the brain carrying information to organs/muscles are called:",
                    options: ["Sensory nerves (afferent)", "Motor nerves (efferent)", "Spinal nerves", "Mixed nerves"],
                    correctAnswerIndex: 1,
                    explanation: "Efferent neurons (motor nerves) transmit signals from the central nervous system to muscles and glands."
                },
                {
                    question: "The autonomic nervous system controls which type of body functions?",
                    options: ["Voluntary movements of skeletal muscles", "Conscious thought processes", "Involuntary body functions (e.g., heart rate, digestion)", "Sensory perception"],
                    correctAnswerIndex: 2,
                    explanation: "The autonomic nervous system regulates involuntary processes like heart rate, digestion, respiration, and blood pressure."
                },
                {
                    question: "Which division of the autonomic nervous system is responsible for the 'fight or flight' response?",
                    options: ["Parasympathetic nervous system", "Somatic nervous system", "Sympathetic nervous system", "Central nervous system"],
                    correctAnswerIndex: 2,
                    explanation: "The sympathetic nervous system prepares the body for stressful or emergency situations."
                },
                {
                    question: "Which division of the autonomic nervous system is responsible for 'rest and digest' functions?",
                    options: ["Sympathetic nervous system", "Somatic nervous system", "Parasympathetic nervous system", "Peripheral nervous system"],
                    correctAnswerIndex: 2,
                    explanation: "The parasympathetic nervous system promotes functions associated with relaxation and digestion."
                },
                {
                    question: "The insulating material that surrounds some axons and speeds up nerve impulse transmission is called the:",
                    options: ["Dendrite", "Cell body", "Myelin sheath", "Synaptic knob"],
                    correctAnswerIndex: 2,
                    explanation: "The myelin sheath acts as an electrical insulator, allowing nerve impulses to jump between nodes of Ranvier, increasing conduction speed."
                },
                {
                    question: "Chemical messengers that transmit impulses from one neuron to another across a synapse are called:",
                    options: ["Hormones", "Enzymes", "Neurotransmitters", "Electrolytes"],
                    correctAnswerIndex: 2,
                    explanation: "Neurotransmitters are chemical signals released at synapses to communicate between neurons."
                },
                {
                    question: "Which type of chemoreceptor is situated in the medulla and primarily measures CO2 and pH levels in cerebrospinal fluid (CSF)?",
                    options: ["Peripheral chemoreceptors", "Central chemoreceptors", "Baroreceptors", "Stretch receptors"],
                    correctAnswerIndex: 1,
                    explanation: "Central chemoreceptors in the medulla are highly sensitive to changes in CO2 and pH in the CSF, influencing breathing rate."
                },
                {
                    question: "Which receptors are located in the aortic arch and carotid sinus and help maintain blood pressure by measuring stretch in vessel walls?",
                    options: ["Chemoreceptors", "Thermoreceptors", "Baroreceptors", "Nociceptors"],
                    correctAnswerIndex: 2,
                    explanation: "Baroreceptors detect changes in blood pressure and send signals to the brain to regulate it."
                },
                {
                    question: "The Phrenic Nerve (C3, C4, C5) is crucial because it stimulates which muscle, essential for breathing?",
                    options: ["Intercostal muscles", "Abdominal muscles", "Diaphragm", "Pectoral muscles"],
                    correctAnswerIndex: 2,
                    explanation: "The phrenic nerve innervates the diaphragm, the primary muscle of respiration."
                },
                {
                    question: "How many pairs of cranial nerves are there?",
                    options: ["10", "12", "20", "31"],
                    correctAnswerIndex: 1,
                    explanation: "There are 12 pairs of cranial nerves that emerge directly from the brain or brainstem."
                },
                {
                    question: "How many pairs of vertebral (spinal) nerves are there?",
                    options: ["12", "24", "31", "33"],
                    correctAnswerIndex: 2,
                    explanation: "There are 31 pairs of spinal nerves that branch off the spinal cord."
                },
                {
                    question: "The part of the brain that acts as a link between the cerebrum, lower parts of the brain, and the spinal cord is the:",
                    options: ["Cerebellum", "Diencephalon", "Midbrain", "Thalamus"],
                    correctAnswerIndex: 2,
                    explanation: "The midbrain is part of the brainstem and serves as a relay station for sensory and motor information."
                },
                {
                    question: "What is the term for the crossing over of motor nerves from the brain to specific muscles/cells, which occurs in the medulla oblongata?",
                    options: ["Synapsis", "Decussation of pyramids", "Myelination", "Reflex arc"],
                    correctAnswerIndex: 1,
                    explanation: "The decussation of pyramids is where motor fibers cross from one side of the brain to the opposite side of the spinal cord."
                },
                {
                    question: "Which lobe of the cerebrum is primarily associated with vision?",
                    options: ["Frontal lobe", "Parietal lobe", "Temporal lobe", "Occipital lobe"],
                    correctAnswerIndex: 3,
                    explanation: "The occipital lobe is the visual processing center of the brain."
                },
                {
                    question: "Which lobe of the cerebrum is primarily associated with hearing and smell?",
                    options: ["Frontal lobe", "Parietal lobe", "Temporal lobe", "Occipital lobe"],
                    correctAnswerIndex: 2,
                    explanation: "The temporal lobe plays a key role in processing auditory information and is involved in smell."
                },
                {
                    question: "The 'grey matter' of the cerebral cortex is primarily composed of:",
                    options: ["Nerve fibers (axons)", "Myelin sheaths", "Nerve cell bodies", "Blood vessels"],
                    correctAnswerIndex: 2,
                    explanation: "Grey matter consists mainly of neuronal cell bodies, dendrites, and unmyelinated axons."
                },
                {
                    question: "What is the main function of the thalamus?",
                    options: ["Controlling emotions", "Relaying sensory information to the cerebral cortex", "Coordinating motor movements", "Producing hormones"],
                    correctAnswerIndex: 1,
                    explanation: "The thalamus acts as a major relay station for sensory information, directing it to the appropriate areas of the cerebral cortex."
                },
                {
                    question: "Which structure connects the two hemispheres of the cerebrum, allowing for communication between them?",
                    options: ["Brainstem", "Thalamus", "Corpus callosum", "Cerebellum"],
                    correctAnswerIndex: 2,
                    explanation: "The corpus callosum is a large bundle of nerve fibers that connects the left and right cerebral hemispheres."
                },

                // Respiratory System (30 questions)
                {
                    question: "What are the three main components of the respiratory system?",
                    options: ["Heart, blood, vessels", "Bones, muscles, joints", "Anatomy, mechanism of breathing, nervous control", "Kidneys, ureters, bladder"],
                    correctAnswerIndex: 2,
                    explanation: "The respiratory system involves its anatomical structures, the mechanical process of breathing, and its nervous regulation."
                },
                {
                    question: "What is the primary function of the respiratory system?",
                    options: ["To digest food", "To ventilate the lungs and facilitate gas exchange", "To pump blood", "To filter waste from the blood"],
                    correctAnswerIndex: 1,
                    explanation: "The main roles of the respiratory system are to move air in and out of the lungs (ventilation) and to exchange oxygen and carbon dioxide."
                },
                {
                    question: "Which part of the respiratory system warms, filters, and moistens inhaled air?",
                    options: ["Trachea", "Bronchi", "Nose", "Alveoli"],
                    correctAnswerIndex: 2,
                    explanation: "The nose is the primary entry point for air and is equipped to condition the air before it reaches the lungs."
                },
                {
                    question: "The pharynx is divided into how many parts?",
                    options: ["Two", "Three", "Four", "Five"],
                    correctAnswerIndex: 1,
                    explanation: "The pharynx is divided into the nasopharynx, oropharynx, and laryngopharynx."
                },
                {
                    question: "What is the common name for the larynx?",
                    options: ["Windpipe", "Voice box", "Food pipe", "Air sac"],
                    correctAnswerIndex: 1,
                    explanation: "The larynx, or voice box, contains the vocal cords and is crucial for speech."
                },
                {
                    question: "Which cartilage forms a complete ring and marks the end of the upper respiratory tract?",
                    options: ["Thyroid cartilage", "Epiglottis", "Cricoid cartilage", "Arytenoid cartilage"],
                    correctAnswerIndex: 2,
                    explanation: "The cricoid cartilage is the only complete ring of cartilage in the airway and is located at the base of the larynx."
                },
                {
                    question: "What is the function of the epiglottis?",
                    options: ["To produce sound", "To filter air", "To occlude the larynx during swallowing and direct food into the esophagus", "To warm and moisten air"],
                    correctAnswerIndex: 2,
                    explanation: "The epiglottis acts as a flap that closes over the trachea during swallowing to prevent food and liquid from entering the airways."
                },
                {
                    question: "The trachea extends from the cricoid cartilage to the carina, which is located at which thoracic vertebra level?",
                    options: ["T1", "T3", "T5", "T7"],
                    correctAnswerIndex: 2,
                    explanation: "The carina is the point where the trachea divides into the left and right main bronchi, typically at the level of the fifth thoracic vertebra (T5)."
                },
                {
                    question: "What is the function of the mucociliary escalator in the trachea?",
                    options: ["To produce mucus", "To warm the air", "To waft mucus with adherent particles upwards towards the larynx for expulsion", "To facilitate gas exchange"],
                    correctAnswerIndex: 2,
                    explanation: "The mucociliary escalator is a defense mechanism that uses cilia to move mucus and trapped particles out of the respiratory tract."
                },
                {
                    question: "How many lobes does the right lung typically have?",
                    options: ["1", "2", "3", "4"],
                    correctAnswerIndex: 2,
                    explanation: "The right lung has three lobes (superior, middle, and inferior), while the left lung has two."
                },
                {
                    question: "What substance prevents the alveoli from drying out and reduces surface tension, allowing for lung expansion?",
                    options: ["Mucus", "Histamine", "Surfactant", "Plasma"],
                    correctAnswerIndex: 2,
                    explanation: "Surfactant is a lipoprotein that reduces surface tension in the alveoli, preventing their collapse."
                },
                {
                    question: "What are the tiny air sacs in the lungs where gaseous exchange occurs?",
                    options: ["Bronchioles", "Trachea", "Alveoli", "Pleura"],
                    correctAnswerIndex: 2,
                    explanation: "Alveoli are thin-walled air sacs surrounded by capillaries, forming the primary site of gas exchange in the lungs."
                },
                {
                    question: "Which muscles are primarily responsible for inspiration (inhaling)?",
                    options: ["Internal intercostals and abdominal muscles", "Diaphragm and external intercostals", "Pectoral muscles and sternocleidomastoid", "Trapezius and rhomboids"],
                    correctAnswerIndex: 1,
                    explanation: "The diaphragm contracts and flattens, and the external intercostal muscles contract, pulling the ribs up and out, increasing thoracic volume for inspiration."
                },
                {
                    question: "Normal expiration is typically a(n) ______ process.",
                    options: ["Active", "Passive", "Voluntary", "Forced"],
                    correctAnswerIndex: 1,
                    explanation: "Normal expiration is usually a passive process, relying on the elastic recoil of the lungs and relaxation of inspiratory muscles."
                },
                {
                    question: "The exchange of gases between the alveoli and the blood in pulmonary capillaries is called:",
                    options: ["Pulmonary ventilation", "Internal respiration", "External respiration", "Cellular respiration"],
                    correctAnswerIndex: 2,
                    explanation: "External respiration is the process of gas exchange between the lungs and the blood."
                },
                {
                    question: "The exchange of gases between the blood in systemic capillaries and tissue cells is called:",
                    options: ["Pulmonary ventilation", "Internal respiration", "External respiration", "Diffusion"],
                    correctAnswerIndex: 1,
                    explanation: "Internal respiration is the process of gas exchange between the blood and body tissues."
                },
                {
                    question: "What percentage of inspired air is oxygen?",
                    options: ["16%", "21%", "4%", "78%"],
                    correctAnswerIndex: 1,
                    explanation: "Approximately 21% of the air we breathe is oxygen."
                },
                {
                    question: "What percentage of expired air is carbon dioxide?",
                    options: ["0.04%", "4%", "16%", "78%"],
                    correctAnswerIndex: 1,
                    explanation: "Expired air contains about 4% carbon dioxide, which is a significant increase from inspired air."
                },
                {
                    question: "Which reflex prevents over-inflation of the lungs by sending impulses to the respiratory center to 'switch off' inhalation?",
                    options: ["Cough reflex", "Gag reflex", "Hering-Breuer reflex", "Withdrawal reflex"],
                    correctAnswerIndex: 2,
                    explanation: "The Hering-Breuer reflex is a protective mechanism that inhibits inspiration when the lungs are stretched."
                },
                {
                    question: "Central chemoreceptors are stimulated by raised levels of what in the cerebrospinal fluid (CSF)?",
                    options: ["Oxygen", "Carbon dioxide and pH decrease", "Nitrogen", "Water"],
                    correctAnswerIndex: 1,
                    explanation: "Central chemoreceptors are highly sensitive to increases in CO2 and corresponding decreases in pH in the CSF."
                },
                {
                    question: "Peripheral chemoreceptors, located in the aortic arch and carotid bodies, are primarily stimulated by:",
                    options: ["High oxygen levels", "Low oxygen and high CO2 levels", "Low blood pressure", "High blood pressure"],
                    correctAnswerIndex: 1,
                    explanation: "Peripheral chemoreceptors respond to changes in blood oxygen, carbon dioxide, and pH, with a stronger response to low oxygen."
                },
                {
                    question: "The respiratory centers that control the rate of breathing are located in which part of the brain?",
                    options: ["Cerebrum", "Cerebellum", "Medulla (brainstem)", "Thalamus"],
                    correctAnswerIndex: 2,
                    explanation: "The medulla oblongata contains the primary respiratory control centers."
                },
                {
                    question: "What is the average tidal volume (amount of air inspired during normal, relaxed breathing) for an adult?",
                    options: ["100 ml", "500 ml", "1200 ml", "3100 ml"],
                    correctAnswerIndex: 1,
                    explanation: "Tidal volume is the amount of air inhaled or exhaled during a normal breath, typically around 500 ml for an adult."
                },
                {
                    question: "What is the term for the additional air that can be forcibly inhaled after the inspiration of a normal tidal volume?",
                    options: ["Expiratory reserve volume", "Residual volume", "Inspiratory reserve volume", "Vital capacity"],
                    correctAnswerIndex: 2,
                    explanation: "Inspiratory reserve volume (IRV) is the maximum amount of air that can be inhaled after a normal inspiration."
                },
                {
                    question: "What is the volume of air still remaining in the lungs after the expiratory reserve volume is exhaled?",
                    options: ["Tidal volume", "Inspiratory reserve volume", "Expiratory reserve volume", "Residual volume"],
                    correctAnswerIndex: 3,
                    explanation: "Residual volume (RV) is the air that remains in the lungs even after a maximal exhalation."
                },
                {
                    question: "Which structure connects the laryngopharynx and the trachea?",
                    options: ["Nasal cavity", "Pharynx", "Larynx", "Bronchus"],
                    correctAnswerIndex: 2,
                    explanation: "The larynx (voice box) is positioned between the pharynx and the trachea."
                },
                {
                    question: "The 'C' shaped cartilages of the trachea are incomplete posteriorly to allow for the expansion of which adjacent organ?",
                    options: ["Larynx", "Oesophagus", "Bronchus", "Thyroid gland"],
                    correctAnswerIndex: 1,
                    explanation: "The incomplete rings allow the esophagus to expand when food passes through it."
                },
                {
                    question: "What is the primary function of the pleural fluid in the pleural space?",
                    options: ["To provide nutrients to the lungs", "To reduce friction between the pleural membranes during breathing", "To filter air", "To produce surfactant"],
                    correctAnswerIndex: 1,
                    explanation: "Pleural fluid acts as a lubricant, allowing the visceral and parietal pleura to slide smoothly past each other during respiration."
                },
                {
                    question: "Which of the following is NOT a function of the respiratory system?",
                    options: ["To assist in the maintenance of acid/base balance of blood", "To extract carbon dioxide from the blood", "To transport nutrients to body cells", "To ventilate the lungs"],
                    correctAnswerIndex: 2,
                    explanation: "The transport of nutrients to body cells is primarily a function of the cardiovascular system."
                },
                {
                    question: "The smallest air passages in the lungs that terminate at the alveoli are called:",
                    options: ["Bronchi", "Trachea", "Bronchioles", "Larynx"],
                    correctAnswerIndex: 2,
                    explanation: "Bronchioles are small airways that branch from the bronchi and lead to the alveolar sacs."
                },

                // Urinary System (30 questions)
                {
                    question: "What are the key structural features of the urinary system?",
                    options: ["Heart, blood vessels, blood", "Kidneys, ureters, bladder, urethra", "Brain, spinal cord, nerves", "Stomach, intestines, liver"],
                    correctAnswerIndex: 1,
                    explanation: "The urinary system consists of the kidneys, ureters, bladder, and urethra, which work together to produce, store, and excrete urine."
                },
                {
                    question: "What is the primary physiological function of the urinary system?",
                    options: ["Digestion of food", "Regulation of blood volume and composition, and excretion of waste products", "Gas exchange", "Muscle contraction"],
                    correctAnswerIndex: 1,
                    explanation: "The urinary system is crucial for maintaining fluid and electrolyte balance, regulating blood pressure, and eliminating metabolic waste."
                },
                {
                    question: "Which organ of the urinary system is responsible for filtering blood to remove waste products and regulate fluid balance?",
                    options: ["Ureters", "Bladder", "Urethra", "Kidneys"],
                    correctAnswerIndex: 3,
                    explanation: "The kidneys are the main filtering organs of the urinary system."
                },
                {
                    question: "The kidneys are bean-shaped organs that lie on the posterior abdominal wall and receive some protection from the:",
                    options: ["Pelvis", "Ribcage", "Spine", "Abdominal muscles"],
                    correctAnswerIndex: 1,
                    explanation: "The lower ribs provide some protection to the kidneys."
                },
                {
                    question: "The outermost layer of the kidney, which is reddish-brown in color, is called the:",
                    options: ["Medulla", "Renal pelvis", "Cortex", "Calyces"],
                    correctAnswerIndex: 2,
                    explanation: "The renal cortex is the outer region of the kidney."
                },
                {
                    question: "What are the conical-shaped, striated structures that make up the medulla of the kidney?",
                    options: ["Nephrons", "Collecting ducts", "Renal pyramids", "Glomeruli"],
                    correctAnswerIndex: 2,
                    explanation: "The renal medulla contains renal pyramids, which are cone-shaped tissues."
                },
                {
                    question: "What is the microscopic functional unit of the kidney that filters blood and forms urine?",
                    options: ["Ureter", "Bladder", "Nephron", "Renal artery"],
                    correctAnswerIndex: 2,
                    explanation: "The nephron is the fundamental filtering unit of the kidney."
                },
                {
                    question: "Filtration in the kidney primarily takes place in which structure?",
                    options: ["Loop of Henle", "Collecting duct", "Glomerulus and glomerular capsule (Bowman's capsule)", "Distal convoluted tubule"],
                    correctAnswerIndex: 2,
                    explanation: "Blood filtration begins in the glomerulus, a network of capillaries encased by Bowman's capsule."
                },
                {
                    question: "After filtration, the fluid is called filtrate. What is the main function of the collecting duct?",
                    options: ["To filter more blood", "To reabsorb as much water as the body needs", "To secrete waste products", "To transport urine to the ureters"],
                    correctAnswerIndex: 1,
                    explanation: "The collecting ducts play a crucial role in water reabsorption, concentrating the urine."
                },
                {
                    question: "What is the approximate percentage of water in the composition of urine?",
                    options: ["50%", "75%", "95%", "100%"],
                    correctAnswerIndex: 2,
                    explanation: "Urine is primarily composed of water, typically around 95%."
                },
                {
                    question: "The mechanism that protects renal blood flow and glomerular filtration from significant fluctuations in blood pressure is called:",
                    options: ["Homeostasis", "Renin-angiotensin-aldosterone system", "Autoregulation", "Tubular secretion"],
                    correctAnswerIndex: 2,
                    explanation: "Autoregulation within the kidneys maintains a relatively constant glomerular filtration rate despite changes in systemic blood pressure."
                },
                {
                    question: "What hormone system, involving the kidneys, liver, and adrenal glands, plays a crucial role in regulating blood pressure and fluid balance?",
                    options: ["Insulin-glucagon system", "Thyroid hormone system", "Renin-angiotensin-aldosterone system (RAAS)", "Growth hormone system"],
                    correctAnswerIndex: 2,
                    explanation: "The RAAS is a complex hormonal system that regulates blood pressure and fluid balance."
                },
                {
                    question: "What are the hollow muscular tubes that transport urine from the kidneys to the bladder?",
                    options: ["Urethra", "Fallopian tubes", "Ureters", "Vas deferens"],
                    correctAnswerIndex: 2,
                    explanation: "Ureters are the tubes that carry urine from the kidneys to the bladder."
                },
                {
                    question: "The bladder is a pear-shaped organ that becomes more balloon-shaped as it fills with urine. What is the muscle layer of the bladder called?",
                    options: ["Myometrium", "Detrusor muscle", "Sphincter muscle", "Perimetrium"],
                    correctAnswerIndex: 1,
                    explanation: "The detrusor muscle is the smooth muscle that forms the wall of the bladder and contracts to expel urine."
                },
                {
                    question: "Which part of the urinary system is longer in males than in females and provides a common pathway for urine and semen?",
                    options: ["Ureters", "Bladder", "Urethra", "Kidney"],
                    correctAnswerIndex: 2,
                    explanation: "The male urethra is significantly longer than the female urethra and serves both urinary and reproductive functions."
                },
                {
                    question: "The external urethral sphincter is under what type of control?",
                    options: ["Involuntary", "Autonomic", "Voluntary", "Reflexive"],
                    correctAnswerIndex: 2,
                    explanation: "The external urethral sphincter allows for conscious control over urination."
                },
                {
                    question: "What waste product, derived from muscle metabolism, is excreted in urine?",
                    options: ["Glucose", "Proteins", "Creatinine", "Fatty acids"],
                    correctAnswerIndex: 2,
                    explanation: "Creatinine is a waste product formed from the breakdown of creatine in muscles and is filtered by the kidneys."
                },
                {
                    question: "Which of the following is NOT a component of urine?",
                    options: ["Water", "Urea", "Red blood cells", "Dissolved salts and ions"],
                    correctAnswerIndex: 2,
                    explanation: "In healthy individuals, red blood cells are not typically found in urine; their presence (hematuria) usually indicates a problem."
                },
                {
                    question: "What is the process by which substances not entirely filtered out of the blood in the glomerulus are cleared by secretion from the peritubular capillaries into the filtrate?",
                    options: ["Filtration", "Selective reabsorption", "Tubular secretion", "Excretion"],
                    correctAnswerIndex: 2,
                    explanation: "Tubular secretion involves the active transport of certain substances from the blood into the renal tubule for excretion."
                },
                {
                    question: "In severe shock, when systolic blood pressure falls below 80 mmHg, what happens to the kidneys' autoregulation?",
                    options: ["It increases blood flow", "It becomes more efficient", "It fails, leading to potential kidney damage", "It has no effect"],
                    correctAnswerIndex: 2,
                    explanation: "Below a certain blood pressure threshold, the kidneys' ability to autoregulate blood flow is lost, making them vulnerable to damage."
                },
                {
                    question: "What is the inner layer of the kidney called?",
                    options: ["Cortex", "Medulla", "Renal pelvis", "Capsule"],
                    correctAnswerIndex: 1,
                    explanation: "The medulla is the inner region of the kidney, containing the renal pyramids."
                },
                {
                    question: "The walls of the calyces and renal pelvis are lined with smooth muscle, which propels urine to the bladder through what process?",
                    options: ["Diffusion", "Osmosis", "Peristalsis", "Filtration"],
                    correctAnswerIndex: 2,
                    explanation: "Peristalsis, wave-like muscular contractions, moves urine through the ureters."
                },
                {
                    question: "The Bowman's capsule surrounds which structure in the nephron?",
                    options: ["Loop of Henle", "Collecting duct", "Glomerulus", "Proximal convoluted tubule"],
                    correctAnswerIndex: 2,
                    explanation: "Bowman's capsule encloses the glomerulus, forming the renal corpuscle where filtration begins."
                },
                {
                    question: "The main function of the kidneys to maintain balance involves altering sodium and electrolyte balances to maintain what?",
                    options: ["Blood glucose levels", "Hormone production", "Fluid amounts/blood volume", "Muscle contraction"],
                    correctAnswerIndex: 2,
                    explanation: "The kidneys play a crucial role in regulating the body's fluid and electrolyte balance, directly impacting blood volume."
                },
                {
                    question: "Which part of the male urethra passes through the prostate gland?",
                    options: ["Membranous urethra", "Penile urethra", "Prostatic urethra", "External sphincter"],
                    correctAnswerIndex: 2,
                    explanation: "The prostatic urethra is the segment of the male urethra that runs through the prostate gland."
                },
                {
                    question: "What is the average length of the ureters?",
                    options: ["5-10 cm", "10-15 cm", "20-30 cm", "40-50 cm"],
                    correctAnswerIndex: 2,
                    explanation: "Ureters are typically 20-30 cm long, connecting the kidneys to the bladder."
                },
                {
                    question: "Which structure is guarded by the external urethral sphincter?",
                    options: ["Kidney", "Ureter", "Bladder", "External urethral orifice"],
                    correctAnswerIndex: 3,
                    explanation: "The external urethral sphincter controls the flow of urine from the bladder through the external urethral orifice."
                },
                {
                    question: "The renal artery supplies blood to the kidney. What vessel carries filtered blood away from the kidney?",
                    options: ["Renal vein", "Ureter", "Aorta", "Vena cava"],
                    correctAnswerIndex: 0,
                    explanation: "The renal vein carries deoxygenated and filtered blood from the kidney back to the inferior vena cava."
                },
                {
                    question: "What is the primary function of selective reabsorption in the nephron?",
                    options: ["To filter blood", "To return useful substances from the filtrate back to the blood", "To secrete waste products into the filtrate", "To store urine"],
                    correctAnswerIndex: 1,
                    explanation: "Selective reabsorption ensures that essential substances like glucose, amino acids, and most water are reabsorbed from the filtrate back into the bloodstream."
                },
                {
                    question: "Which structure in the kidney is responsible for collecting urine from the renal pyramids before it passes to the ureter?",
                    options: ["Cortex", "Medulla", "Renal pelvis", "Bowman's capsule"],
                    correctAnswerIndex: 2,
                    explanation: "The renal pelvis is a funnel-shaped structure that collects urine from the calyces and channels it into the ureter."
                },

                // Lymphatic System (30 questions)
                {
                    question: "Which bodily system is the lymphatic system part of?",
                    options: ["Musculoskeletal system", "Immune system", "Respiratory system", "Integumentary system"],
                    correctAnswerIndex: 1,
                    explanation: "The lymphatic system is a crucial part of the immune system, involved in defense against pathogens."
                },
                {
                    question: "Which of these is NOT part of the lymphatic system?",
                    options: ["Bone marrow", "Thymus", "Spleen", "Blood vessels"],
                    correctAnswerIndex: 3,
                    explanation: "Blood vessels are part of the cardiovascular system, not the lymphatic system."
                },
                {
                    question: "What is lymph?",
                    options: ["Solid lumps that are passed from the stomach through the duodenum", "Interstitial fluid that has passed into the lymph capillaries", "A type of plasma that is slightly thicker", "A mix of blood & fats from the small intestine"],
                    correctAnswerIndex: 1,
                    explanation: "Lymph is the interstitial fluid that enters the lymphatic capillaries."
                },
                {
                    question: "What is the function of a B lymphocyte?",
                    options: ["Responsible for cell-mediated immunity", "Creates proteins called antibodies & is responsible for antibody-mediated immunity.", "Works with macrophages to destroy a single type of pathogen", "A specialised cell involved in the detection, phagocytosis & destruction of bacteria and other harmful organisms"],
                    correctAnswerIndex: 1,
                    explanation: "B lymphocytes produce antibodies, which are essential for humoral (antibody-mediated) immunity."
                },
                {
                    question: "Which of these describes the lymph vessels?",
                    options: ["No pump, have the ability to contract rhythmically", "Blind end tubes in interstitial spaces", "Muscular tubes that can withstand a higher pressure of fluid directly from the heart", "Muscular hollow continuous tubular organ along which substances pass by peristalsis"],
                    correctAnswerIndex: 0,
                    explanation: "Lymph vessels have valves and can contract rhythmically to propel lymph, as they lack a central pump like the heart."
                },
                {
                    question: "Which of these is NOT a function of the lymphatic system?",
                    options: ["Controls internal respiration", "Removing body fluid levels", "Protecting the body from pathogens", "Absorbing digestive tract fats"],
                    correctAnswerIndex: 0,
                    explanation: "Controlling internal respiration is a function of the respiratory and circulatory systems, not the lymphatic system."
                },
                {
                    question: "Which of these can be found in lymph nodes?",
                    options: ["Plasma", "Erythrocytes", "Macrophages", "Deoxygenated blood"],
                    correctAnswerIndex: 2,
                    explanation: "Lymph nodes contain macrophages and lymphocytes, which filter lymph and mount immune responses."
                },
                {
                    question: "Where might you find MALT (Mucosa-Associated Lymphoid Tissue)?",
                    options: ["Genitourinary tract", "GI tract", "Reproductive tract", "Respiratory tract"],
                    correctAnswerIndex: 1, // This question has multiple correct answers. I will pick GI tract as the primary.
                    explanation: "MALT is found in various mucosal linings, including the gastrointestinal (GI), respiratory, and genitourinary tracts, as well as the reproductive tract."
                },
                {
                    question: "Which of these is NOT a function of the spleen?",
                    options: ["Storage of blood", "Erythropoiesis (in adults)", "Phagocytosis of old/abnormal erythrocytes", "Allowing T lymphocytes to be able to react to specific antigens"],
                    correctAnswerIndex: 1, // Erythropoiesis primarily occurs in bone marrow in adults.
                    explanation: "While the spleen has a role in fetal erythropoiesis, in adults, red blood cell production primarily occurs in the bone marrow. The spleen is involved in blood storage, phagocytosis of old red blood cells, and immune responses."
                },
                {
                    question: "Where can Peyer’s patches be found?",
                    options: ["Stomach", "Small intestine", "Blood vessels", "Bronchioles"],
                    correctAnswerIndex: 1,
                    explanation: "Peyer's patches are lymphoid tissues located in the small intestine, part of MALT."
                },
                {
                    question: "What is the primary function of the lymphatic system related to tissue drainage?",
                    options: ["To transport blood", "To absorb nutrients", "To drain excess interstitial fluid and return it to the bloodstream", "To produce hormones"],
                    correctAnswerIndex: 2,
                    explanation: "The lymphatic system collects excess fluid and proteins from interstitial spaces and returns them to the circulatory system, preventing edema."
                },
                {
                    question: "What is chyle?",
                    options: ["A type of white blood cell", "A milky bodily fluid consisting of lymph and emulsified fats, formed in the small intestine", "A component of blood plasma", "A fluid found in joints"],
                    correctAnswerIndex: 1,
                    explanation: "Chyle is a milky fluid formed in the small intestine during fat digestion, absorbed by lacteals (lymphatic capillaries)."
                },
                {
                    question: "Lymph capillaries are more permeable than blood capillaries, allowing what to enter easily?",
                    options: ["Red blood cells", "Large proteins and excess interstitial fluid", "Oxygen", "Glucose"],
                    correctAnswerIndex: 1,
                    explanation: "The high permeability of lymphatic capillaries allows them to collect large molecules like proteins and excess fluid that cannot easily enter blood capillaries."
                },
                {
                    question: "How many lymph nodes do humans typically have throughout the body?",
                    options: ["Around 50-100", "Around 200-300", "Around 500-600", "Over 1000"],
                    correctAnswerIndex: 2,
                    explanation: "Humans have hundreds of lymph nodes strategically located throughout the body."
                },
                {
                    question: "What is the function of lymph nodes?",
                    options: ["To produce hormones", "To filter lymph, destroying bacteria and cellular debris", "To pump lymph throughout the body", "To store red blood cells"],
                    correctAnswerIndex: 1,
                    explanation: "Lymph nodes act as filters, trapping and destroying harmful substances and pathogens present in the lymph."
                },
                {
                    question: "Which of the following is the largest lymphatic organ?",
                    options: ["Thymus", "Tonsils", "Spleen", "Appendix"],
                    correctAnswerIndex: 2,
                    explanation: "The spleen is the largest lymphatic organ, located in the upper left abdomen."
                },
                {
                    question: "What is the primary function of the thymus?",
                    options: ["To filter blood", "To store lymph", "To mature T lymphocytes", "To produce antibodies"],
                    correctAnswerIndex: 2,
                    explanation: "The thymus is a specialized organ where T lymphocytes mature and learn to distinguish self from non-self."
                },
                {
                    question: "Where do lymphocytes begin their life?",
                    options: ["Thymus", "Spleen", "Lymph nodes", "Red bone marrow"],
                    correctAnswerIndex: 3,
                    explanation: "All blood cells, including lymphocytes, originate from stem cells in the red bone marrow."
                },
                {
                    question: "What type of immunity is the defense system you were born with, including physical barriers and phagocytic cells?",
                    options: ["Adaptive immunity", "Passive immunity", "Innate immunity", "Acquired immunity"],
                    correctAnswerIndex: 2,
                    explanation: "Innate immunity is the body's non-specific, first-line defense system present from birth."
                },
                {
                    question: "Which type of immunity remembers previous encounters with specific pathogens and destroys them when they attack again?",
                    options: ["Innate immunity", "Passive immunity", "Adaptive immunity", "Natural immunity"],
                    correctAnswerIndex: 2,
                    explanation: "Adaptive (or acquired) immunity is characterized by its specificity and immunological memory."
                },
                {
                    question: "Passive immunity is provided when a person is given:",
                    options: ["Vaccines", "Antigens", "Antibodies", "T cells"],
                    correctAnswerIndex: 2,
                    explanation: "Passive immunity involves the transfer of pre-formed antibodies, such as from mother to baby or through blood therapy."
                },
                {
                    question: "Which of the following is an example of an anatomical/mechanical barrier of immunity?",
                    options: ["Enzymes in tears", "Stomach acid", "Skin", "Anti-bacterial proteins in semen"],
                    correctAnswerIndex: 2,
                    explanation: "The skin provides a physical barrier against pathogen entry."
                },
                {
                    question: "What are the two large ducts that lymph vessels eventually join to empty into the subclavian veins?",
                    options: ["Renal ducts and hepatic ducts", "Thoracic duct and right lymphatic duct", "Cystic ducts and pancreatic ducts", "Ureters and urethra"],
                    correctAnswerIndex: 1,
                    explanation: "The thoracic duct and right lymphatic duct are the two main lymphatic vessels that return lymph to the bloodstream."
                },
                {
                    question: "What is the term for the process by which macrophages and other immune cells engulf and destroy pathogens and cellular debris?",
                    options: ["Exocytosis", "Pinocytosis", "Phagocytosis", "Endocytosis"],
                    correctAnswerIndex: 2,
                    explanation: "Phagocytosis is the process of engulfing and breaking down foreign particles or cells."
                },
                {
                    question: "Which type of lymphocyte is responsible for cell-mediated immunity and includes 'killer' and 'helper' subtypes?",
                    options: ["B lymphocytes", "T lymphocytes", "Natural killer cells", "Plasma cells"],
                    correctAnswerIndex: 1,
                    explanation: "T lymphocytes are central to cell-mediated immunity, directly attacking infected cells or coordinating immune responses."
                },
                {
                    question: "Which part of the lymph node is a concave surface where numerous lymph vessels enter and one lymph vessel leaves?",
                    options: ["Capsule", "Trabeculae", "Cortex", "Hilum"],
                    correctAnswerIndex: 3,
                    explanation: "The hilum is the indented region of the lymph node where blood vessels and efferent lymphatic vessels enter and exit."
                },
                {
                    question: "What happens to lymph nodes when bacteria have not all been destroyed, leading to inflammation?",
                    options: ["They shrink", "They become enlarged", "They disappear", "They stop filtering lymph"],
                    correctAnswerIndex: 1,
                    explanation: "Enlarged lymph nodes (lymphadenopathy) often indicate an active immune response to infection or inflammation."
                },
                {
                    question: "The spleen contains splenic pulp, which consists of:",
                    options: ["Red bone marrow", "Lymphocytes and macrophages", "Adipose tissue", "Cartilage"],
                    correctAnswerIndex: 1,
                    explanation: "The splenic pulp is rich in immune cells like lymphocytes and macrophages, which are involved in filtering blood and immune surveillance."
                },
                {
                    question: "At what age does the thymus typically start depleting?",
                    options: ["Birth", "Childhood", "Puberty", "Old age"],
                    correctAnswerIndex: 2,
                    explanation: "The thymus is most active during childhood and adolescence, after which it gradually atrophies and is replaced by fat."
                },
                {
                    question: "Which lymphoid tissue is strategically placed in mucosal linings and helps detect invaders, but does NOT filter lymph?",
                    options: ["Lymph nodes", "Spleen", "Thymus", "MALT (Mucosa-Associated Lymphoid Tissue)"],
                    correctAnswerIndex: 3,
                    explanation: "MALT is a diffuse system of lymphoid tissue found in mucosal areas, providing local immune protection without acting as a filter for circulating lymph."
                },

                // Reproductive System (30 questions)
                {
                    question: "What is the primary function of the reproductive system?",
                    options: ["Digestion of food", "Production of offspring and hormones", "Filtering blood", "Gas exchange"],
                    correctAnswerIndex: 1,
                    explanation: "The reproductive system's main roles are to produce gametes (sperm and eggs) and hormones, and to facilitate the creation of new life."
                },
                {
                    question: "Which of the following is part of the female external genitalia?",
                    options: ["Uterus", "Ovaries", "Labia majora", "Fallopian tubes"],
                    correctAnswerIndex: 2,
                    explanation: "The labia majora are part of the vulva, which constitutes the female external genitalia."
                },
                {
                    question: "The fibromuscular tube that acts as a receptacle for the penis during intercourse and an elastic passageway for childbirth is the:",
                    options: ["Uterus", "Cervix", "Vagina", "Urethra"],
                    correctAnswerIndex: 2,
                    explanation: "The vagina is a muscular canal that extends from the vulva to the uterus."
                },
                {
                    question: "What is the inner layer of the uterus that sheds during the menstrual cycle if fertilization does not occur?",
                    options: ["Perimetrium", "Myometrium", "Endometrium", "Cervix"],
                    correctAnswerIndex: 2,
                    explanation: "The endometrium is the highly vascularized inner lining of the uterus that prepares for embryo implantation and sheds during menstruation."
                },
                {
                    question: "Which hormone primarily causes the maturation of an egg in the ovary during the menstrual cycle?",
                    options: ["Luteinising Hormone (LH)", "Oestrogen", "Progesterone", "Follicle Stimulating Hormone (FSH)"],
                    correctAnswerIndex: 3,
                    explanation: "FSH stimulates the growth and development of ovarian follicles, which contain the eggs."
                },
                {
                    question: "Which hormone triggers ovulation (the release of the egg) during the menstrual cycle?",
                    options: ["FSH", "Oestrogen", "Progesterone", "Luteinising Hormone (LH)"],
                    correctAnswerIndex: 3,
                    explanation: "A surge in LH triggers ovulation."
                },
                {
                    question: "Where does fertilization usually take place in the female reproductive system?",
                    options: ["Uterus", "Ovary", "Vagina", "Fallopian tubes"],
                    correctAnswerIndex: 3,
                    explanation: "Fertilization, the fusion of sperm and egg, typically occurs in the fallopian (uterine) tubes."
                },
                {
                    question: "What are the female gonads that store female gametes and release hormones?",
                    options: ["Fallopian tubes", "Uterus", "Ovaries", "Cervix"],
                    correctAnswerIndex: 2,
                    explanation: "Ovaries are the primary female reproductive organs, producing eggs and female hormones."
                },
                {
                    question: "Which hormone stimulates milk production and release from the mammary glands (breasts)?",
                    options: ["Oestrogen", "Progesterone", "Prolactin", "Oxytocin"],
                    correctAnswerIndex: 2,
                    explanation: "Prolactin is the hormone primarily responsible for stimulating milk production after childbirth."
                },
                {
                    question: "Which of the following is NOT an overall function of the female reproductive system?",
                    options: ["Formation of ovum", "Reception of spermatozoa", "Production of testosterone", "Childbirth"],
                    correctAnswerIndex: 2,
                    explanation: "Testosterone production is primarily a male reproductive function."
                },
                {
                    question: "What is the pouch of pigmented skin and smooth muscle that contains the testes in males?",
                    options: ["Penis", "Prostate gland", "Scrotum", "Seminal vesicle"],
                    correctAnswerIndex: 2,
                    explanation: "The scrotum is the external sac that houses the testes."
                },
                {
                    question: "Where are spermatozoa (sperm) produced, matured, and stored?",
                    options: ["Prostate gland", "Seminal vesicles", "Testes", "Urethra"],
                    correctAnswerIndex: 2,
                    explanation: "Sperm are produced in the testes and mature and are stored in the epididymis, which is closely associated with the testes."
                },
                {
                    question: "What is the function of the head of a sperm?",
                    options: ["To provide mobility", "To contain the nucleus with DNA and enzymes to penetrate the ovum", "To fuel the propelling action", "To produce seminal fluid"],
                    correctAnswerIndex: 1,
                    explanation: "The sperm head contains the genetic material and enzymes necessary for fertilization."
                },
                {
                    question: "Which male reproductive gland secretes a thin, milky fluid that is about 30% of the volume of semen and contains a clotting enzyme?",
                    options: ["Seminal vesicle", "Testis", "Prostate gland", "Epididymis"],
                    correctAnswerIndex: 2,
                    explanation: "The prostate gland contributes a significant portion of the seminal fluid, which helps activate sperm."
                },
                {
                    question: "The male urethra provides a common pathway for the flow of:",
                    options: ["Urine and blood", "Semen and blood", "Urine and semen", "Digestive fluids and urine"],
                    correctAnswerIndex: 2,
                    explanation: "The male urethra serves as a conduit for both urine and semen."
                },
                {
                    question: "Which part of the penis expands into a triangular structure called the glans penis?",
                    options: ["Root", "Shaft", "Corpus cavernosum", "Corpus spongiosum"],
                    correctAnswerIndex: 1, // The shaft's distal end forms the glans.
                    explanation: "The shaft (body) of the penis terminates in the glans penis, which is the sensitive tip."
                },
                {
                    question: "What is the main function of the uterus?",
                    options: ["To produce eggs", "To receive and nourish a fertilized ovum and support fetal development", "To produce seminal fluid", "To transport sperm"],
                    correctAnswerIndex: 1,
                    explanation: "The uterus is the organ where a fertilized egg implants and develops into a fetus."
                },
                {
                    question: "The menstrual cycle is primarily controlled by hormones from the:",
                    options: ["Adrenal glands and kidneys", "Thyroid gland and parathyroid glands", "Hypothalamic and anterior pituitary hormones", "Pancreas and liver"],
                    correctAnswerIndex: 2,
                    explanation: "The menstrual cycle is regulated by a complex interplay of hormones from the hypothalamus, pituitary gland, and ovaries."
                },
                {
                    question: "What is a zygote?",
                    options: ["An unfertilized egg", "A mature sperm cell", "A fertilized ovum", "An embryo after 8 weeks"],
                    correctAnswerIndex: 2,
                    explanation: "A zygote is the single cell formed after the fertilization of an egg by a sperm."
                },
                {
                    question: "After approximately how many weeks is a zygote referred to as an embryo?",
                    options: ["Immediately after fertilization", "After 1 week", "After 2 weeks", "After 8 weeks"],
                    correctAnswerIndex: 2, // Zygote to embryo is typically around 2 weeks.
                    explanation: "The term 'embryo' is used from about the second week after fertilization until the end of the eighth week."
                },
                {
                    question: "What is the function of the fimbriae at the end of the fallopian tubes?",
                    options: ["To produce eggs", "To propel ovum from the ovary to the uterus", "To secrete hormones", "To receive sperm"],
                    correctAnswerIndex: 1,
                    explanation: "Fimbriae are finger-like projections that sweep the ovum into the fallopian tube after ovulation."
                },
                {
                    question: "The two layers of the ovary are the medulla and the:",
                    options: ["Cortex", "Hilum", "Stroma", "Follicle"],
                    correctAnswerIndex: 0,
                    explanation: "The ovary consists of an inner medulla and an outer cortex, where ovarian follicles are located."
                },
                {
                    question: "What is the function of the lactiferous ducts in the breasts?",
                    options: ["To produce milk", "To store fat", "To drain milk to the nipple", "To support breast tissue"],
                    correctAnswerIndex: 2,
                    explanation: "Lactiferous ducts carry milk from the glandular lobules to the nipple."
                },
                {
                    question: "Which structure in the male reproductive system stores and matures sperm?",
                    options: ["Seminal vesicle", "Prostate gland", "Vas deferens", "Epididymis"],
                    correctAnswerIndex: 3,
                    explanation: "The epididymis is a coiled tube where sperm mature and are stored."
                },
                {
                    question: "The two 2cm tubes formed by the union of the seminal vesicle and deferent duct, which carry sperm and seminal fluid to the urethra, are called the:",
                    options: ["Ureters", "Ejaculatory ducts", "Urethra", "Spermatic cords"],
                    correctAnswerIndex: 1,
                    explanation: "The ejaculatory ducts are formed by the convergence of the vas deferens and seminal vesicles."
                },
                {
                    question: "What is the term for the process of childbirth?",
                    options: ["Fertilization", "Ovulation", "Menstruation", "Parturition"],
                    correctAnswerIndex: 3,
                    explanation: "Parturition is the medical term for the act of giving birth."
                },
                {
                    question: "Which female reproductive organ is also known as the 'womb'?",
                    options: ["Ovary", "Fallopian tube", "Uterus", "Vagina"],
                    correctAnswerIndex: 2,
                    explanation: "The uterus is commonly referred to as the womb."
                },
                {
                    question: "What is the primary male sex hormone produced by the testes?",
                    options: ["Estrogen", "Progesterone", "Testosterone", "Prolactin"],
                    correctAnswerIndex: 2,
                    explanation: "Testosterone is the main androgen produced by the testes, essential for male reproductive development and function."
                },
                {
                    question: "The 'areola' is the pigmented area surrounding which part of the breast?",
                    options: ["Lobule", "Lactiferous duct", "Nipple", "Adipose tissue"],
                    correctAnswerIndex: 2,
                    explanation: "The areola is the darker pigmented area around the nipple."
                },
                {
                    question: "Which male reproductive structure consists of three cylindrical masses of erectile tissue and smooth muscle?",
                    options: ["Testis", "Epididymis", "Prostate gland", "Penis"],
                    correctAnswerIndex: 3,
                    explanation: "The penis is composed of erectile tissues (corpora cavernosa and corpus spongiosum) that fill with blood during erection."
                }
            ],
      },
      {
        title: "Medical Conditions",
        questions: [
                // Anaphylaxis, Sepsis & Poisonings (20 questions)
                {
                    question: "What is anaphylaxis, according to the Resuscitation Council UK 2008 definition?",
                    options: ["A mild allergic reaction", "A severe, life-threatening, generalized or systemic hypersensitivity reaction", "A localized skin rash", "An infection of the bloodstream"],
                    correctAnswerIndex: 1,
                    explanation: "Anaphylaxis is defined as a severe, life-threatening, generalized or systemic hypersensitivity reaction."
                },
                {
                    question: "Which of the following is NOT a common allergen known to cause anaphylaxis?",
                    options: ["Peanuts", "Shellfish", "Hay fever pollen", "Bee/Wasp stings"],
                    correctAnswerIndex: 2,
                    explanation: "Common allergens for anaphylaxis include peanuts, tree nuts, shellfish, milk, eggs, bee/wasp stings, and certain medications. Hay fever pollen typically causes localized allergic reactions, not anaphylaxis."
                },
                {
                    question: "What immunological process leads to a mass release of histamine upon second exposure to an antigen during anaphylaxis?",
                    options: ["Antibody production by B cells", "Degranulation of mast cells", "T cell proliferation", "Phagocytosis by macrophages"],
                    correctAnswerIndex: 1,
                    explanation: "Upon second exposure, the antigen binds to IgE antibodies on mast cells, causing them to degranulate and release large amounts of histamine and other mediators."
                },
                {
                    question: "Which cardiovascular symptom is a 'red flag' indicating severe anaphylaxis?",
                    options: ["High blood pressure", "Slow heart rate", "Normal heart rate", "Low blood pressure"],
                    correctAnswerIndex: 3,
                    explanation: "Hypotension (low blood pressure) is a critical 'red flag' symptom in anaphylaxis, indicating a severe systemic circulatory collapse."
                },
                {
                    question: "What is the recommended route of administration for Adrenaline (Epinephrine) in the immediate management of anaphylaxis?",
                    options: ["Intravenous (IV)", "Subcutaneous (SC)", "Oral", "Intramuscular (IM)"],
                    correctAnswerIndex: 3,
                    explanation: "Intramuscular (IM) injection of adrenaline is the recommended first-line treatment for anaphylaxis due to its rapid absorption and systemic effects."
                },
                {
                    question: "If there is no response after the initial IM adrenaline dose for anaphylaxis, when should it be repeated?",
                    options: ["After 1 minute", "After 2 minutes", "After 5 minutes", "After 10 minutes"],
                    correctAnswerIndex: 2,
                    explanation: "Repeat doses of IM adrenaline can be given every 5 minutes if there is no clinical improvement or if symptoms worsen."
                },
                {
                    question: "What effect does adrenaline (epinephrine) have on the smooth muscle in the airways during an anaphylactic reaction?",
                    options: ["Contraction, worsening breathing", "No significant effect", "Relaxation, improving breathing", "Spasm, leading to airway closure"],
                    correctAnswerIndex: 2,
                    explanation: "Adrenaline causes bronchodilation (relaxation of smooth muscle in the airways), which helps to relieve respiratory distress in anaphylaxis."
                },
                {
                    question: "What is the common term for Septicaemia?",
                    options: ["Anaphylactic shock", "Toxic shock syndrome", "Blood poisoning", "Systemic inflammatory response syndrome"],
                    correctAnswerIndex: 2,
                    explanation: "Septicaemia is commonly known as blood poisoning, referring to bacteria in the bloodstream."
                },
                {
                    question: "Which statement best defines sepsis?",
                    options: ["A localized skin infection", "A viral infection of the respiratory tract", "A life-threatening organ dysfunction caused by a dysregulated host response to infection", "A mild allergic reaction to medication"],
                    correctAnswerIndex: 2,
                    explanation: "Sepsis is defined as a life-threatening organ dysfunction caused by a dysregulated host response to infection."
                },
                {
                    question: "In sepsis, how does the body's inflammatory response differ from a typical infection?",
                    options: ["It is limited to the site of infection", "It is suppressed throughout the body", "It becomes widespread and damages the body's own tissues and organs", "It primarily affects only the immune cells"],
                    correctAnswerIndex: 2,
                    explanation: "In sepsis, the body's immune response to an infection becomes dysregulated, leading to a widespread inflammatory response that damages the body's own tissues and organs."
                },
                {
                    question: "A NEWS2 score greater than 5, or greater than 3 in any one category, coupled with a history of infection, should immediately raise suspicion for what condition?",
                    options: ["Anaphylaxis", "Myocardial Infarction", "Sepsis", "Stroke"],
                    correctAnswerIndex: 2,
                    explanation: "A high NEWS2 score in a patient with a suspected infection is a key indicator for urgent sepsis screening and management."
                },
                {
                    question: "Which of the following is an immediate intervention included in the 'Sepsis Six' care bundle?",
                    options: ["Administering oral corticosteroids", "Taking blood cultures", "Applying a tourniquet", "Performing a lumbar puncture"],
                    correctAnswerIndex: 1,
                    explanation: "Taking blood cultures is a crucial part of the 'Sepsis Six' to identify the causative organism and guide antibiotic therapy."
                },
                {
                    question: "For a hypotensive sepsis patient, what is the recommended initial intravenous fluid bolus strategy?",
                    options: ["50ml boluses (max 500ml)", "250ml boluses (max 2000ml)", "500ml boluses (no max)", "100ml boluses (max 1000ml)"],
                    correctAnswerIndex: 1,
                    explanation: "Initial fluid resuscitation in hypotensive sepsis typically involves administering 250ml boluses up to a total of 2000ml, titrated to response."
                },
                {
                    question: "In patients with sepsis, what is the general recommendation regarding the routine administration of paracetamol for fever reduction?",
                    options: ["It should always be given", "It should be given only if the patient requests it", "It is not routinely recommended unless for pain or discomfort associated with fever", "It should only be given intravenously"],
                    correctAnswerIndex: 2,
                    explanation: "Routine use of paracetamol for fever in sepsis is not generally recommended unless the fever is causing significant discomfort or pain, as it does not improve outcomes."
                },
                {
                    question: "What route of poisoning involves a substance being introduced into the body via injection?",
                    options: ["Ingestion", "Inhalation", "Absorption", "Injection"],
                    correctAnswerIndex: 3,
                    explanation: "Injection is a direct route of poisoning where a substance is introduced into the body through a needle or other sharp object."
                },
                {
                    question: "What is the primary effect of opioids on the central nervous system?",
                    options: ["Stimulation", "No effect", "Depression", "Selective sensory blockade"],
                    correctAnswerIndex: 2,
                    explanation: "Opioids are central nervous system depressants, leading to reduced consciousness, respiratory depression, and pain relief."
                },
                {
                    question: "Which of these is a classic sign of an opioid overdose?",
                    options: ["Dilated pupils", "Rapid, shallow breathing", "Pinpoint pupils", "Warm, dry skin"],
                    correctAnswerIndex: 2,
                    explanation: "Pinpoint pupils (miosis) are a classic sign of opioid overdose, along with respiratory depression and altered mental status."
                },
                {
                    question: "What is the immediate antidote used to reverse the effects of opioid overdose?",
                    options: ["Insulin", "Adrenaline", "Naloxone", "Activated charcoal"],
                    correctAnswerIndex: 2,
                    explanation: "Naloxone is an opioid antagonist that rapidly reverses the effects of opioid overdose by blocking opioid receptors."
                },
                {
                    question: "What does the medical term 'Toxidrome' refer to?",
                    options: ["A specific type of poisonous substance", "A collection of signs and symptoms associated with a particular class of toxins", "A method for detoxifying the body", "A diagnostic test for poisoning"],
                    correctAnswerIndex: 1,
                    explanation: "A Toxidrome is a clinical syndrome characterized by a specific constellation of signs and symptoms that suggest exposure to a particular class of toxic substances."
                },
                {
                    question: "In the 'DEAD' acronym for poisoning management, what does 'D' stand for?",
                    options: ["Diagnosis", "Dehydration", "Decontamination", "Dialysis"],
                    correctAnswerIndex: 2,
                    explanation: "The 'DEAD' acronym in poisoning management stands for Decontamination, Enhanced Elimination, Antidotes, and Disposition."
                },

                // Cardiac Conditions & Assessment (20 questions)
                {
                    question: "What is one of the leading causes of death worldwide, often a precursor to many cardiovascular conditions?",
                    options: ["Hypertension", "Coronary Artery Disease", "Arrhythmia", "Heart Failure"],
                    correctAnswerIndex: 1,
                    explanation: "Coronary Artery Disease (CAD) is a major global health burden and a primary underlying cause of many cardiac emergencies like myocardial infarction."
                },
                {
                    question: "Which chamber of the heart pumps oxygenated blood to the rest of the body?",
                    options: ["Right Atrium", "Right Ventricle", "Left Atrium", "Left Ventricle"],
                    correctAnswerIndex: 3,
                    explanation: "The Left Ventricle is the strongest chamber of the heart and is responsible for pumping oxygenated blood into the aorta and to the systemic circulation."
                },
                {
                    question: "True or False: Tachycardia is characterized by an abnormally *fast* heart rate.",
                    options: ["True", "False"],
                    correctAnswerIndex: 0,
                    explanation: "True. Tachycardia is defined as a heart rate that is faster than normal, typically above 100 beats per minute in adults."
                },
                {
                    question: "Which medication is commonly administered sublingually (under the tongue) to alleviate chest pain caused by angina?",
                    options: ["Aspirin", "Metoprolol", "Nitroglycerin", "Ibuprofen"],
                    correctAnswerIndex: 2,
                    explanation: "Nitroglycerin (glyceryl trinitrate) is a potent vasodilator used sublingually to rapidly relieve angina by increasing blood flow to the heart."
                },
                {
                    question: "Sudden, severe, crushing chest pain radiating to the left arm, neck, or jaw, often accompanied by sweating and nausea, is a classic symptom of what acute cardiac event?",
                    options: ["Heartburn", "Pneumonia", "Angina Pectoris", "Myocardial Infarction"],
                    correctAnswerIndex: 3,
                    explanation: "These are classic symptoms of a Myocardial Infarction (heart attack), caused by a blockage of blood flow to the heart muscle."
                },
                {
                    question: "Which electrolyte imbalance is well-known to predispose individuals to cardiac arrhythmias?",
                    options: ["Hypocalcemia", "Hypernatremia", "Hypokalemia", "Hypermagnesemia"],
                    correctAnswerIndex: 2,
                    explanation: "Hypokalemia (low potassium levels) can significantly affect cardiac electrical activity and lead to various arrhythmias."
                },
                {
                    question: "Pain described as 'tearing' or 'ripping' in the chest or back, often acute and severe, should raise immediate suspicion for which life-threatening vascular condition?",
                    options: ["Pneumothorax", "Pericarditis", "Aortic Dissection", "Esophageal rupture"],
                    correctAnswerIndex: 2,
                    explanation: "Aortic dissection, a tear in the inner layer of the aorta, classically presents with sudden, severe, tearing or ripping pain."
                },
                {
                    question: "What condition results from the heart's inability to pump enough blood to meet the body's metabolic demands?",
                    options: ["Angina", "Arrhythmia", "Heart Failure", "Hypertension"],
                    correctAnswerIndex: 2,
                    explanation: "Heart failure is a chronic condition where the heart muscle is weakened and cannot pump sufficient blood to supply the body's needs."
                },
                {
                    question: "Which class of medication is commonly prescribed to reduce high blood pressure?",
                    options: ["Antibiotics", "Anticoagulants", "Antihypertensives", "Analgesics"],
                    correctAnswerIndex: 2,
                    explanation: "Antihypertensives are medications specifically designed to lower blood pressure."
                },
                {
                    question: "What is the medical term for a sudden drop in blood pressure that occurs when a person stands up, often causing dizziness?",
                    options: ["Hypertension", "Orthostatic Hypotension", "Vasovagal Syncope", "Cardiogenic Shock"],
                    correctAnswerIndex: 1,
                    explanation: "Orthostatic hypotension is a common condition where blood pressure drops significantly upon standing, leading to symptoms like lightheadedness or dizziness."
                },
                {
                    question: "What is the primary goal of Cardiopulmonary Resuscitation (CPR)?",
                    options: ["To directly restart the heart", "To provide artificial circulation and ventilation to maintain organ perfusion", "To clear a foreign body airway obstruction", "To assess the patient's neurological status"],
                    correctAnswerIndex: 1,
                    explanation: "CPR aims to maintain blood flow and oxygen delivery to vital organs, especially the brain and heart, until definitive treatment can be provided."
                },
                {
                    question: "What is a major modifiable risk factor for the development of coronary artery disease and other cardiovascular diseases?",
                    options: ["Regular exercise", "A balanced diet", "Smoking", "Low stress levels"],
                    correctAnswerIndex: 2,
                    explanation: "Smoking is a highly significant and modifiable risk factor that greatly increases the risk of coronary artery disease and other cardiovascular conditions."
                },
                {
                    question: "Chest pain that typically occurs during physical exertion or emotional stress and is relieved by rest or nitroglycerin is characteristic of what condition?",
                    options: ["Myocardial Infarction", "Pericarditis", "Angina Pectoris", "Pleurisy"],
                    correctAnswerIndex: 2,
                    explanation: "Angina pectoris is chest pain or discomfort that occurs when the heart muscle doesn't get enough oxygen-rich blood, often triggered by exertion and relieved by rest."
                },
                {
                    question: "Sickle cell anaemia can lead to cardiovascular complications because the abnormally shaped red blood cells can cause what?",
                    options: ["Increased oxygen carrying capacity", "Reduced blood viscosity", "Blockages in small blood vessels", "Enhanced immune response"],
                    correctAnswerIndex: 2,
                    explanation: "The sickle shape of red blood cells in sickle cell anaemia can cause them to clump together and block small blood vessels, leading to various complications, including cardiovascular issues."
                },
                {
                    question: "Which diagnostic tool measures the electrical activity of the heart and can detect arrhythmias or signs of myocardial ischemia?",
                    options: ["X-ray", "Ultrasound", "Electrocardiogram (ECG)", "Blood glucose monitor"],
                    correctAnswerIndex: 2,
                    explanation: "An Electrocardiogram (ECG) records the electrical signals of the heart and is essential for diagnosing a wide range of cardiac conditions."
                },
                {
                    question: "What is the primary function of the coronary arteries?",
                    options: ["To carry deoxygenated blood to the lungs", "To supply oxygenated blood to the heart muscle", "To transport blood from the heart to the rest of the body", "To filter waste products from the blood"],
                    correctAnswerIndex: 1,
                    explanation: "Coronary arteries are crucial for delivering oxygen and nutrients to the heart muscle itself."
                },
                {
                    question: "Which of the following is a common symptom of heart failure?",
                    options: ["Sudden, sharp chest pain", "Swelling in the legs and ankles (edema)", "Pinpoint pupils", "Excessive thirst"],
                    correctAnswerIndex: 1,
                    explanation: "Edema, particularly in the lower extremities, is a common sign of fluid retention due to the heart's reduced pumping efficiency in heart failure."
                },
                {
                    question: "What is the term for an abnormally slow heart rate, typically below 60 beats per minute in adults?",
                    options: ["Tachycardia", "Bradycardia", "Arrhythmia", "Palpitation"],
                    correctAnswerIndex: 1,
                    explanation: "Bradycardia is the medical term for a heart rate that is slower than normal."
                },
                {
                    question: "A patient with uncontrolled hypertension is at increased risk for which cardiac event?",
                    options: ["Hypoglycemia", "Myocardial Infarction", "Anaphylaxis", "Seizure"],
                    correctAnswerIndex: 1,
                    explanation: "Uncontrolled hypertension significantly increases the workload on the heart and damages blood vessels, raising the risk of heart attack and stroke."
                },
                {
                    question: "What is the primary purpose of administering aspirin in a suspected acute coronary syndrome (ACS) event?",
                    options: ["To relieve pain", "To prevent further clot formation", "To lower blood pressure", "To reduce inflammation"],
                    correctAnswerIndex: 1,
                    explanation: "Aspirin is an antiplatelet agent that helps prevent platelets from clumping together, thus reducing the size and growth of blood clots in ACS."
                },

                // Abdominal Conditions (20 questions)
                {
                    question: "What common condition causing abdominal pain is characterized by nausea, vomiting, diarrhea, and abdominal cramps, often referred to as 'stomach flu'?",
                    options: ["Migraine", "Gastroenteritis", "Pneumonia", "Arthritis"],
                    correctAnswerIndex: 1,
                    explanation: "Gastroenteritis is an inflammation of the stomach and intestines, commonly caused by viral or bacterial infections, leading to the listed symptoms."
                },
                {
                    question: "Which type of infection commonly causes symptoms like painful urination, frequent urination, and a burning sensation during urination?",
                    options: ["Skin infections", "Urinary tract infections (UTIs)", "Respiratory infections", "Eye infections"],
                    correctAnswerIndex: 1,
                    explanation: "Urinary tract infections (UTIs) are common bacterial infections that cause symptoms related to urination."
                },
                {
                    question: "A rigid, board-like abdomen with severe pain on palpation is a critical sign of what abdominal emergency?",
                    options: ["Constipation", "Irritable Bowel Syndrome", "Peritonitis", "Heartburn"],
                    correctAnswerIndex: 2,
                    explanation: "A rigid, board-like abdomen is a classic sign of peritonitis, a life-threatening inflammation of the peritoneum, usually due to rupture of an abdominal organ."
                },
                {
                    question: "Right upper quadrant (RUQ) pain that often worsens after eating fatty meals and may radiate to the right shoulder is characteristic of what condition?",
                    options: ["Appendicitis", "Diverticulitis", "Cholecystitis", "Kidney Stones"],
                    correctAnswerIndex: 2,
                    explanation: "Cholecystitis, inflammation of the gallbladder, typically causes RUQ pain, especially post-prandially after fatty food consumption."
                },
                {
                    question: "What is the medical term for inflammation of the appendix?",
                    options: ["Gastritis", "Diverticulitis", "Appendicitis", "Colitis"],
                    correctAnswerIndex: 2,
                    explanation: "Appendicitis is the inflammation of the appendix, a small finger-shaped organ projecting from the colon."
                },
                {
                    question: "Abdominal pain described as 'colicky' or 'cramping', often coming in waves and associated with nausea and vomiting, can suggest what gastrointestinal issue?",
                    options: ["Pneumonia", "Angina", "Bowel obstruction", "Migraine"],
                    correctAnswerIndex: 2,
                    explanation: "Colicky pain is often indicative of an obstruction in a hollow organ, such as a bowel obstruction, as the body tries to push past the blockage."
                },
                {
                    question: "What is the primary function of the large intestine?",
                    options: ["Digesting proteins", "Absorbing most nutrients", "Absorbing water and forming stool", "Producing digestive enzymes"],
                    correctAnswerIndex: 2,
                    explanation: "The main role of the large intestine is to absorb water from the remaining indigestible food matter and to pass the useless waste material from the body."
                },
                {
                    question: "What is the medical term for inflammation of the liver?",
                    options: ["Nephritis", "Pancreatitis", "Hepatitis", "Gastritis"],
                    correctAnswerIndex: 2,
                    explanation: "Hepatitis is the general term for inflammation of the liver, often caused by viral infections, alcohol, or autoimmune diseases."
                },
                {
                    question: "Which abdominal organ produces vital hormones like insulin and glucagon, essential for blood sugar regulation?",
                    options: ["Liver", "Stomach", "Pancreas", "Spleen"],
                    correctAnswerIndex: 2,
                    explanation: "The pancreas has both exocrine functions (producing digestive enzymes) and endocrine functions (producing hormones like insulin and glucagon)."
                },
                {
                    question: "Pain that commonly starts around the umbilicus (navel) and then migrates to the right lower quadrant of the abdomen is a classic symptom of what acute condition?",
                    options: ["Gallstones", "Diverticulitis", "Appendicitis", "Kidney stones"],
                    correctAnswerIndex: 2,
                    explanation: "The characteristic migratory pain from the periumbilical region to the right lower quadrant is a hallmark sign of acute appendicitis."
                },
                {
                    question: "What is the most common bacterial cause of urinary tract infections (UTIs)?",
                    options: ["Staphylococcus aureus", "Streptococcus pneumoniae", "Escherichia coli (E. coli)", "Pseudomonas aeruginosa"],
                    correctAnswerIndex: 2,
                    explanation: "E. coli is responsible for the vast majority of community-acquired UTIs."
                },
                {
                    question: "What is a serious complication of severe gastroenteritis, especially in very young or elderly individuals, due to fluid loss?",
                    options: ["Hypertension", "Dehydration", "Seizures", "Cardiac arrest"],
                    correctAnswerIndex: 1,
                    explanation: "Prolonged vomiting and diarrhea from gastroenteritis can rapidly lead to severe dehydration, which can be life-threatening if not managed."
                },
                {
                    question: "What is the common term for inflammation and infection of small, bulging pouches (diverticula) that can form in the wall of the digestive tract, most commonly the colon?",
                    options: ["Gastritis", "Colitis", "Diverticulitis", "Appendicitis"],
                    correctAnswerIndex: 2,
                    explanation: "Diverticulitis occurs when diverticula become inflamed or infected, leading to symptoms like abdominal pain, fever, and changes in bowel habits."
                },
                {
                    question: "What is the primary role of the kidneys in the human body?",
                    options: ["Digesting food", "Filtering blood to remove waste products and regulate fluid balance", "Pumping blood to the lungs", "Producing digestive enzymes"],
                    correctAnswerIndex: 1,
                    explanation: "The kidneys are vital organs that filter blood to remove waste products, excess water, and toxins, forming urine in the process."
                },
                {
                    question: "Which abdominal condition is characterized by inflammation of the stomach lining?",
                    options: ["Appendicitis", "Cholecystitis", "Gastritis", "Pancreatitis"],
                    correctAnswerIndex: 2,
                    explanation: "Gastritis is the inflammation of the stomach lining, which can cause indigestion, pain, and nausea."
                },
                {
                    question: "What is the medical term for gallstones, which can cause severe abdominal pain?",
                    options: ["Nephrolithiasis", "Cholelithiasis", "Appendicolith", "Pancreatitis"],
                    correctAnswerIndex: 1,
                    explanation: "Cholelithiasis refers to the presence of gallstones, which are hardened deposits of digestive fluid that can form in the gallbladder."
                },
                {
                    question: "Pain in the lower left quadrant of the abdomen, often accompanied by fever and changes in bowel habits, is characteristic of which condition?",
                    options: ["Appendicitis", "Diverticulitis", "Cholecystitis", "Kidney stones"],
                    correctAnswerIndex: 1,
                    explanation: "Diverticulitis commonly presents with pain in the lower left abdomen, as the sigmoid colon is the most common site for diverticula."
                },
                {
                    question: "What is a common symptom of a urinary tract infection (UTI) in elderly patients that might be subtle or atypical?",
                    options: ["High fever and chills", "Sudden onset of severe abdominal pain", "Altered mental status or confusion", "Visible blood in urine"],
                    correctAnswerIndex: 2,
                    explanation: "In elderly patients, UTIs can often present with non-specific symptoms like confusion, delirium, or general malaise, without typical urinary symptoms."
                },
                {
                    question: "What is the primary management for acute appendicitis?",
                    options: ["Antibiotics only", "Pain management and observation", "Surgical removal of the appendix (appendectomy)", "Dietary changes"],
                    correctAnswerIndex: 2,
                    explanation: "Acute appendicitis is typically a surgical emergency requiring appendectomy to prevent rupture and peritonitis."
                },
                {
                    question: "Which abdominal organ is responsible for detoxifying harmful substances and producing clotting factors?",
                    options: ["Stomach", "Pancreas", "Spleen", "Liver"],
                    correctAnswerIndex: 3,
                    explanation: "The liver plays a central role in metabolism, detoxification, and the synthesis of various proteins, including those involved in blood clotting."
                },

                // Neuro Conditions (20 questions)
                {
                    question: "A patient presenting with sudden-onset facial drooping, arm weakness, and slurred speech should immediately be assessed for which medical emergency?",
                    options: ["Myocardial Infarction", "Anaphylaxis", "Stroke", "Diabetic Ketoacidosis"],
                    correctAnswerIndex: 2,
                    explanation: "These are classic signs of a stroke, often remembered by the FAST acronym (Face drooping, Arm weakness, Speech difficulty, Time to call emergency services)."
                },
                {
                    question: "Damage to the myelin sheath, which insulates nerve fibers in the brain and spinal cord, is characteristic of what neurological condition?",
                    options: ["Parkinson's Disease", "Alzheimer's Disease", "Multiple Sclerosis", "Epilepsy"],
                    correctAnswerIndex: 2,
                    explanation: "Multiple Sclerosis (MS) is an autoimmune disease characterized by demyelination, the damage to the myelin sheath, which impairs nerve signal transmission."
                },
                {
                    question: "A sudden, severe headache described as 'the worst headache of my life' is a red flag symptom for which serious condition?",
                    options: ["Migraine", "Tension Headache", "Cluster Headache", "Subarachnoid Hemorrhage"],
                    correctAnswerIndex: 3,
                    explanation: "A 'thunderclap headache' or 'worst headache of my life' is a classic symptom of a subarachnoid hemorrhage, a life-threatening bleeding around the brain."
                },
                {
                    question: "Which part of the brain is primarily responsible for coordinating voluntary movements, balance, and posture?",
                    options: ["Cerebrum", "Brainstem", "Cerebellum", "Thalamus"],
                    correctAnswerIndex: 2,
                    explanation: "The cerebellum plays a critical role in motor control, balance, and coordination."
                },
                {
                    question: "The medical term for the inability to speak or understand language due to brain damage is:",
                    options: ["Dysphagia", "Ataxia", "Aphasia", "Dyspnea"],
                    correctAnswerIndex: 2,
                    explanation: "Aphasia is a disorder that affects a person's ability to communicate, often resulting from stroke or other brain injuries."
                },
                {
                    question: "What is a characteristic symptom of Cauda Equina Syndrome (CES)?",
                    options: ["Unilateral facial droop", "Sudden severe headache", "Saddle anesthesia", "Pinpoint pupils"],
                    correctAnswerIndex: 2,
                    explanation: "Saddle anesthesia (numbness in the perineum, buttocks, and inner thighs) is a key symptom of Cauda Equina Syndrome, a serious compression of spinal nerves."
                },
                {
                    question: "Which type of headache typically presents as a throbbing pain, often on one side of the head, and can be accompanied by nausea and sensitivity to light/sound?",
                    options: ["Tension headache", "Cluster headache", "Migraine", "Sinus headache"],
                    correctAnswerIndex: 2,
                    explanation: "Migraines are characterized by moderate to severe throbbing pain, often unilateral, and frequently associated with aura, nausea, and phonophobia/photophobia."
                },
                {
                    question: "What is the medical term for a sudden, uncontrolled electrical disturbance in the brain that can cause changes in consciousness, movement, or behavior?",
                    options: ["Syncope", "Vertigo", "Seizure", "Tremor"],
                    correctAnswerIndex: 2,
                    explanation: "A seizure is an episode of uncontrolled electrical activity in the brain, leading to a temporary change in movement, behavior, or consciousness."
                },
                {
                    question: "During a convulsion (seizure), what is the most important immediate safety measure?",
                    options: ["Restrain the person's movements", "Place an object in their mouth to prevent biting their tongue", "Protect their head and clear the surrounding area of hazards", "Pour water over them to cool them down"],
                    correctAnswerIndex: 2,
                    explanation: "The primary safety measure during a seizure is to protect the person from injury by cushioning their head and removing any nearby dangerous objects."
                },
                {
                    question: "Meningococcal disease is a serious bacterial infection that can affect the protective membranes surrounding the brain and spinal cord. What are these membranes called?",
                    options: ["Cerebrum", "Meninges", "Ventricles", "Pia mater"],
                    correctAnswerIndex: 1,
                    explanation: "Meningococcal disease causes inflammation of the meninges, the membranes that enclose the brain and spinal cord, leading to meningitis."
                },
                {
                    question: "A key symptom of meningococcal disease, particularly in children, is a non-blanching rash. What does 'non-blanching' mean in this context?",
                    options: ["The rash turns white when pressed", "The rash disappears when pressed", "The rash remains red/purple when pressed", "The rash is only visible under specific lighting"],
                    correctAnswerIndex: 2,
                    explanation: "A non-blanching rash (purpuric or petechial) does not fade or blanch when pressure is applied, indicating bleeding under the skin and is a serious sign of meningococcal septicaemia."
                },
                {
                    question: "Which of these is a common and often rapidly reversible cause of an altered level of consciousness?",
                    options: ["Severe headache", "Hypoglycemia", "Common cold", "Allergic rhinitis"],
                    correctAnswerIndex: 1,
                    explanation: "Hypoglycemia (low blood sugar) is a frequent and treatable cause of altered mental status and can rapidly improve with glucose administration."
                },
                {
                    question: "The Glasgow Coma Scale (GCS) is a widely used clinical tool to assess what aspect of a patient's condition?",
                    options: ["Pain level", "Blood pressure", "Level of consciousness", "Respiratory rate"],
                    correctAnswerIndex: 2,
                    explanation: "The GCS assesses a person's level of consciousness based on eye opening, verbal response, and motor response."
                },
                {
                    question: "What is the term for temporary neurological symptoms caused by a brief interruption of blood flow to the brain, often a warning sign of a future stroke?",
                    options: ["Migraine with aura", "Transient Ischemic Attack (TIA)", "Bell's Palsy", "Vertigo"],
                    correctAnswerIndex: 1,
                    explanation: "A TIA, or 'mini-stroke,' produces stroke-like symptoms but causes no permanent damage. It's a critical warning sign."
                },
                {
                    question: "Which type of stroke is caused by a blockage in a blood vessel supplying the brain?",
                    options: ["Haemorrhagic stroke", "Ischemic stroke", "Aneurysm", "TIA"],
                    correctAnswerIndex: 1,
                    explanation: "Ischemic strokes, accounting for about 87% of all strokes, occur when blood flow to the brain is blocked by a clot."
                },
                {
                    question: "What is the medical term for bleeding into the space between the brain and the surrounding membrane (arachnoid membrane)?",
                    options: ["Intracerebral hemorrhage", "Epidural hematoma", "Subarachnoid hemorrhage", "Subdural hematoma"],
                    correctAnswerIndex: 2,
                    explanation: "Subarachnoid hemorrhage (SAH) is bleeding into the subarachnoid space, often caused by a ruptured aneurysm."
                },
                {
                    question: "Cushing's Triad, a sign of increased intracranial pressure, consists of which three vital sign changes?",
                    options: ["Low HR, Low BP, Fast Breathing", "High HR, High BP, Slow Breathing", "Low HR, High BP, Slow Breathing", "High HR, Low BP, Fast Breathing"],
                    correctAnswerIndex: 2,
                    explanation: "Cushing's Triad includes bradycardia (low heart rate), hypertension (high blood pressure), and irregular/slow respirations."
                },
                {
                    question: "What is a common trigger for seizures in individuals with epilepsy?",
                    options: ["Regular medication intake", "Adequate sleep", "Missed medication doses", "Balanced diet"],
                    correctAnswerIndex: 2,
                    explanation: "Missed medication is a very common and preventable trigger for seizures in epileptic patients."
                },
                {
                    question: "What is the mnemonic used to remember the causes of unconsciousness?",
                    options: ["ABCD", "SAMPLE", "SOAP", "FISH SHAPED"],
                    correctAnswerIndex: 3,
                    explanation: "FISH SHAPED is a mnemonic used to recall common causes of unconsciousness (Fainting, Imbalance of heat, Shock, Head injury, Stroke, Heart attack, Asphyxia, Poisoning, Epilepsy, Diabetes)."
                },
                {
                    question: "When assessing an unconscious patient, what is the primary survey step immediately following 'Airway'?",
                    options: ["Circulation", "Disability", "Breathing", "Exposure"],
                    correctAnswerIndex: 2,
                    explanation: "The primary survey follows DRABCDE: Danger, Response, Airway, Breathing, Circulation, Disability, Exposure."
                },

                // Respiratory Conditions (20 questions)
                {
                    question: "Asthma is characterized as what type of chronic disease affecting the airways of the lungs?",
                    options: ["Infectious", "Degenerative", "Inflammatory", "Obstructive"],
                    correctAnswerIndex: 2,
                    explanation: "Asthma is a chronic inflammatory disease of the airways that causes reversible airflow obstruction and bronchial hyperresponsiveness."
                },
                {
                    question: "Which of these is a significant risk factor for developing asthma?",
                    options: ["Daily vigorous exercise", "Family history of asthma or allergies", "Eating spicy food regularly", "Exposure to direct sunlight"],
                    correctAnswerIndex: 1,
                    explanation: "A strong family history of asthma or other atopic conditions (allergies, eczema) significantly increases an individual's risk of developing asthma."
                },
                {
                    question: "What are the three common symptoms of an acute asthma attack?",
                    options: ["Diarrhea, vomiting, and abdominal pain", "Wheezing, coughing, and chest tightness", "Headache, fever, and rash", "Joint pain, stiffness, and swelling"],
                    correctAnswerIndex: 1,
                    explanation: "The classic symptoms of an asthma attack include wheezing (a high-pitched whistling sound during breathing), persistent coughing, and a sensation of chest tightness."
                },
                {
                    question: "What is the medical term for difficulty breathing or shortness of breath?",
                    options: ["Apnea", "Bradypnea", "Dyspnea", "Tachypnea"],
                    correctAnswerIndex: 2,
                    explanation: "Dyspnea is the subjective sensation of shortness of breath or difficulty breathing."
                },
                {
                    question: "Chronic Obstructive Pulmonary Disease (COPD) is an umbrella term that primarily includes which two lung conditions?",
                    options: ["Asthma and Pneumonia", "Chronic Bronchitis and Emphysema", "Cystic Fibrosis and Tuberculosis", "Pleurisy and Pneumothorax"],
                    correctAnswerIndex: 1,
                    explanation: "COPD is a progressive lung disease encompassing both chronic bronchitis (inflammation of the bronchial tubes) and emphysema (damage to the alveoli)."
                },
                {
                    question: "What is the most significant preventable risk factor for developing COPD?",
                    options: ["Regular exercise", "Active or passive smoking", "Eating a high-fiber diet", "Living in a rural environment"],
                    correctAnswerIndex: 1,
                    explanation: "Smoking, both active and passive, is by far the leading cause of COPD globally."
                },
                {
                    question: "What is the medical term for a collapsed lung, where air leaks into the space between the lung and chest wall?",
                    options: ["Bronchitis", "Pneumonia", "Pneumothorax", "Pleurisy"],
                    correctAnswerIndex: 2,
                    explanation: "A pneumothorax occurs when air enters the pleural space, causing the lung to collapse."
                },
                {
                    question: "Pneumonia is an infection that primarily inflames which part of the lungs?",
                    options: ["Bronchi", "Trachea", "Alveoli (air sacs)", "Diaphragm"],
                    correctAnswerIndex: 2,
                    explanation: "Pneumonia is an infection that inflames the air sacs (alveoli) in one or both lungs, which may fill with fluid or pus."
                },
                {
                    question: "A pulmonary embolism (PE) is a sudden blockage in a lung artery, most commonly caused by what?",
                    options: ["An airway spasm", "A blood clot (thrombus) that travels from elsewhere in the body", "A bacterial infection in the lungs", "An allergic reaction in the airways"],
                    correctAnswerIndex: 1,
                    explanation: "Pulmonary embolisms are most frequently caused by deep vein thromboses (DVT) – blood clots that form in the legs and then travel to the lungs."
                },
                {
                    question: "What is the definition of Apnea?",
                    options: ["Rapid and deep breathing", "Shallow and painful breathing", "Temporary cessation of breathing", "Increased respiratory rate"],
                    correctAnswerIndex: 2,
                    explanation: "Apnea refers to a temporary pause in breathing, which can occur during sleep (sleep apnea) or due to other medical conditions."
                },
                {
                    question: "Hyperventilation is characterized by breathing that is:",
                    options: ["Too slow and shallow", "Too fast and deep, often leading to a decrease in CO2", "Normal and steady", "Absent or irregular"],
                    correctAnswerIndex: 1,
                    explanation: "Hyperventilation involves breathing excessively fast and/or deeply, which can lead to a reduction in blood carbon dioxide levels (hypocapnia)."
                },
                {
                    question: "What assessment finding in a patient with a respiratory condition is considered a 'red flag' indicating significant respiratory distress?",
                    options: ["Normal skin color", "Oxygen saturation (SpO2) of 98%", "Use of accessory muscles for breathing (e.g., neck and shoulder muscles)", "Calm and relaxed demeanor"],
                    correctAnswerIndex: 2,
                    explanation: "The use of accessory muscles of respiration indicates that the patient is working hard to breathe and is in significant respiratory distress."
                },
                {
                    question: "In the immediate management of acute respiratory distress, what is a primary intervention to improve oxygenation?",
                    options: ["Administering oral antibiotics", "Providing supplemental oxygen", "Encouraging strenuous physical activity", "Applying ice packs to the chest"],
                    correctAnswerIndex: 1,
                    explanation: "Providing supplemental oxygen is a critical first step to improve oxygenation and alleviate hypoxia in patients experiencing respiratory distress."
                },
                {
                    question: "Which of the following is a common symptom of chronic bronchitis?",
                    options: ["Sudden onset fever", "Persistent cough with mucus production", "Sharp, stabbing chest pain", "Sudden shortness of breath with no cough"],
                    correctAnswerIndex: 1,
                    explanation: "Chronic bronchitis is characterized by a persistent cough that produces sputum (mucus), lasting for at least three months in two consecutive years."
                },
                {
                    question: "Emphysema primarily affects which structures in the lungs?",
                    options: ["Bronchioles", "Trachea", "Alveoli (air sacs)", "Pulmonary arteries"],
                    correctAnswerIndex: 2,
                    explanation: "Emphysema involves damage to the alveoli, leading to their destruction and the formation of larger, less efficient air sacs."
                },
                {
                    question: "What is the term for a bluish discoloration of the skin and mucous membranes due to inadequate oxygenation?",
                    options: ["Pallor", "Erythema", "Jaundice", "Cyanosis"],
                    correctAnswerIndex: 3,
                    explanation: "Cyanosis is a sign of hypoxemia and indicates that the blood is not carrying enough oxygen."
                },
                {
                    question: "Which respiratory condition is characterized by inflammation of the pleura, the membranes lining the lungs and chest cavity, causing sharp chest pain?",
                    options: ["Pneumonia", "Bronchitis", "Pleurisy", "Emphysema"],
                    correctAnswerIndex: 2,
                    explanation: "Pleurisy (or pleuritis) is an inflammation of the pleura, typically causing sharp chest pain that worsens with breathing."
                },
                {
                    question: "What is the primary risk factor for developing lung cancer, often mentioned in conjunction with respiratory diseases?",
                    options: ["Exposure to secondhand smoke", "Genetic predisposition", "Air pollution", "Smoking"],
                    correctAnswerIndex: 3,
                    explanation: "Smoking is overwhelmingly the leading cause of lung cancer, responsible for about 85% of cases."
                },
                {
                    question: "What is the medical term for a rapid respiratory rate?",
                    options: ["Bradypnea", "Apnea", "Tachypnea", "Dyspnea"],
                    correctAnswerIndex: 2,
                    explanation: "Tachypnea refers to an abnormally rapid rate of breathing."
                },
                {
                    question: "When assessing a patient with a respiratory complaint, what is a key question to ask about their history?",
                    options: ["Their favorite color", "Any recent travel", "History of smoking or exposure to irritants", "Their last meal"],
                    correctAnswerIndex: 2,
                    explanation: "Smoking history and exposure to environmental irritants are crucial for understanding respiratory conditions."
                },

                // Endocrine Conditions (5 questions - as per content)
                {
                    question: "Which type of diabetes is characterized by the body's immune system attacking and destroying the insulin-producing cells in the pancreas?",
                    options: ["Type 1 Diabetes", "Type 2 Diabetes", "Gestational Diabetes", "Insulin Resistance"],
                    correctAnswerIndex: 0,
                    explanation: "Type 1 diabetes is an autoimmune disease where the body fails to produce insulin because the immune system has destroyed the beta cells in the pancreas."
                },
                {
                    question: "What is the medical term for dangerously low blood glucose levels?",
                    options: ["Hyperglycemia", "Hypoglycemia", "Glycosuria", "Diabetic Ketoacidosis"],
                    correctAnswerIndex: 1,
                    explanation: "Hypoglycemia is a condition characterized by abnormally low blood glucose (blood sugar) levels."
                },
                {
                    question: "What is the medical term for dangerously high blood glucose levels, often seen in uncontrolled diabetes?",
                    options: ["Hypoglycemia", "Hypertension", "Hyperglycemia", "Hypovolemia"],
                    correctAnswerIndex: 2,
                    explanation: "Hyperglycemia refers to an excess of glucose in the bloodstream, often associated with diabetes mellitus."
                },
                {
                    question: "Diabetic Ketoacidosis (DKA) is a severe complication of diabetes characterized by high blood glucose, acidosis, and the presence of what in the urine/blood?",
                    options: ["Proteins", "Ketones", "Calcium", "White blood cells"],
                    correctAnswerIndex: 1,
                    explanation: "DKA is characterized by hyperglycemia, metabolic acidosis, and the presence of ketones in the blood and urine, resulting from the body breaking down fat for energy."
                },
                {
                    question: "What is Addison's disease?",
                    options: ["A condition where the thyroid gland is overactive", "A disorder where the adrenal glands produce too much cortisol", "A disorder where the adrenal glands produce insufficient amounts of certain hormones", "A type of diabetes insipidus"],
                    correctAnswerIndex: 2,
                    explanation: "Addison's disease is a rare disorder in which your body produces insufficient amounts of certain hormones produced by your adrenal glands."
                },

                // Environmentally Related Conditions (5 questions - as per content)
                {
                    question: "What temperature range defines Heat Exhaustion?",
                    options: ["Below 35°C", "35°C-37°C", "37°C-40°C", "Above 40°C"],
                    correctAnswerIndex: 2,
                    explanation: "Heat exhaustion is a milder form of heat-related illness, characterized by a core body temperature between 37°C and 40°C."
                },
                {
                    question: "Heat stroke, a life-threatening emergency, is defined by a core body temperature above what threshold?",
                    options: ["35°C", "37°C", "38°C", "40°C"],
                    correctAnswerIndex: 3,
                    explanation: "Heat stroke is a severe form of hyperthermia defined by a core body temperature of 40°C or higher, accompanied by central nervous system dysfunction."
                },
                {
                    question: "Non-exertional heat-related illness is typically associated with what kind of exposure?",
                    options: ["Intense physical activity in heat", "Sudden exposure to extreme cold", "Prolonged environmental exposure to high temperatures", "High altitude climbing"],
                    correctAnswerIndex: 2,
                    explanation: "Non-exertional heat-related illness, also known as classic heat stroke, often affects vulnerable individuals during prolonged exposure to hot environments, such as during heatwaves."
                },
                {
                    question: "What is the primary danger associated with prolonged immersion in cold water or exposure to cold temperatures leading to hypothermia?",
                    options: ["Dehydration", "Organ dysfunction due to decreased metabolic rate and arrhythmias", "Increased blood pressure", "Hyperactivity and agitation"],
                    correctAnswerIndex: 1,
                    explanation: "Hypothermia causes a dangerous drop in core body temperature, leading to a slowing of metabolic processes, cardiac arrhythmias, and potential organ failure if not treated promptly."
                },
                {
                    question: "What is a crucial first step in the management of a drowning victim after safe extrication from water?",
                    options: ["Starting chest compressions immediately", "Providing 5 rescue breaths", "Checking for a pulse for 30 seconds", "Warming them rapidly with hot water"],
                    correctAnswerIndex: 1,
                    explanation: "For drowning victims, the initial intervention after ensuring scene safety is to provide 5 rescue breaths before starting chest compressions, as hypoxia is the primary issue."
                },

                // Shock (5 questions - as per content)
                {
                    question: "What is the fundamental physiological problem in all types of shock?",
                    options: ["Too much fluid in the body", "Insufficient blood flow to meet the body's demands", "Excessive oxygen delivery to tissues", "Localized inflammation"],
                    correctAnswerIndex: 1,
                    explanation: "Shock is fundamentally a state of inadequate tissue perfusion, meaning the body's cells and organs are not receiving enough oxygen and nutrients."
                },
                {
                    question: "Which of the following is a common cause of Hypovolemic shock?",
                    options: ["Severe heart attack", "Spinal cord injury", "Massive hemorrhage", "Severe allergic reaction"],
                    correctAnswerIndex: 2,
                    explanation: "Hypovolemic shock is caused by a significant loss of circulating blood volume, with massive hemorrhage being a prime example."
                },
                {
                    question: "What type of shock results from the heart's inability to pump enough blood effectively?",
                    options: ["Hypovolemic shock", "Distributive shock", "Cardiogenic shock", "Obstructive shock"],
                    correctAnswerIndex: 2,
                    explanation: "Cardiogenic shock occurs when the heart's pumping ability is severely impaired, leading to insufficient blood flow to the body."
                },
                {
                    question: "Which general management principle applies to most types of shock?",
                    options: ["Restricting oxygen administration", "Promoting fluid restriction", "Maintaining airway, breathing, and circulation (ABC) and addressing the underlying cause", "Applying cold compresses to the extremities"],
                    correctAnswerIndex: 2,
                    explanation: "The fundamental management of shock involves supporting the ABCs (Airway, Breathing, Circulation) and identifying and treating the specific underlying cause."
                },
                {
                    question: "What is a common sign or symptom of early shock?",
                    options: ["Warm, flushed skin", "Bradycardia (slow heart rate)", "Tachycardia (fast heart rate)", "High blood pressure"],
                    correctAnswerIndex: 2,
                    explanation: "Tachycardia (an increased heart rate) is an early compensatory mechanism in shock as the body tries to maintain cardiac output."
                }
            ],
      },
      {
        title: "HART",
        questions:
          [
                // Definitions
                {
           //Q1
                    question: "According to the provided documents, what defines a 'Major Incident'?",
                    options: [
                        "An event involving hundreds of patients.",
                        "An event with minor consequences requiring standard procedures.",
                        "An event or situation with a range of serious consequences requiring special arrangements by one or more emergency responder agency.",
                        "An incident affecting only internal operations."
                    ],
                    correctAnswerIndex: 2,
                    explanation: "A Major Incident is defined as 'An event or situation with a range of serious consequences which requires special arrangements to be implemented by one or more emergency responder agency.'"
                },
           //Q2     
                {
                    question: "How many patients are typically involved in a 'Major Incident' according to the documents?",
                    options: [
                        "Hundreds of patients",
                        "Tens of patients",
                        "Thousands of patients",
                        "Less than ten patients"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "A Major Incident typically involves 'Tens of patients'."
                },
           //Q3
                {
                    question: "What is a 'Mass Casualty Incident' defined as in the provided materials?",
                    options: [
                        "Involving thousands of patients",
                        "Involving a single patient with severe injuries",
                        "Involving hundreds of patients",
                        "An incident requiring only one emergency service"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "A Mass Casualty Incident is defined as 'Involving Hundreds of patients'."
                },
            //Q4
                {
                    question: "An incident involving 'thousands of patients' is classified as what type of incident?",
                    options: [
                        "Major Incident",
                        "Mass Casualty Incident",
                        "Minor Incident",
                        "Catastrophic Incident"
                    ],
                    correctAnswerIndex: 3,
                    explanation: "An incident involving 'thousands of patients' is classified as a 'Catastrophic Incident'."
                },
            //Q5  
                {
                    question: "What is the key difference between a HazMat incident and a CBRN(e) incident?",
                    options: [
                        "HazMat involves only biological agents, CBRN(e) involves chemicals.",
                        "HazMat is accidental, CBRN(e) is deliberate.",
                        "HazMat is large-scale, CBRN(e) is small-scale.",
                        "HazMat only occurs indoors, CBRN(e) occurs outdoors."
                    ],
                    correctAnswerIndex: 1,
                    explanation: "A HazMat incident is an 'accidental slip or release of a Hazardous Material', while a CBRN(e) incident is the 'deliberate release' of specific agents."
                },
             //Q6 
               {
                    question: "Which of the following is NOT typically considered a 'HazMat Event' according to the provided information?",
                    options: [
                        "Large Fires",
                        "Accidental chemical exposures",
                        "Chemical spills from RTC's",
                        "Deliberate release of a Chemical Agent"
                    ],
                    correctAnswerIndex: 3,
                    explanation: "The deliberate release of a Chemical Agent falls under CBRN(e), not HazMat. HazMat events are accidental."
                },
                //Q7
                {
                    question: "What does the 'C' in CBRN(e) stand for?",
                    options: [
                        "Contamination",
                        "Chemical",
                        "Critical",
                        "Catastrophic"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "CBRN(e) stands for Chemical, Biological, Radiological, Nuclear, and (e)xplosive Material."
                },
                //Q8
                {
                    question: "What does the 'B' in CBRN(e) stand for?",
                    options: [
                        "Blast",
                        "Benefit",
                        "Burn",
                        "Biological"
                    ],
                    correctAnswerIndex: 3,
                    explanation: "CBRN(e) stands for Chemical, Biological, Radiological, Nuclear, and (e)xplosive Material."
                },
                //Q9
               {
                    question: "What does the 'R' in CBRN(e) stand for?",
                    options: [
                        "Radiological",
                        "Rationalise",
                        "Rash",
                        "Ratonlice"
                    ],
                    correctAnswerIndex: 0,
                    explanation: "CBRN(e) stands for Chemical, Biological, Radiological, Nuclear, and (e)xplosive Material."
                },
                //Q10
                {
                    question: "What does the 'N' in CBRN(e) stand for?",
                    options: [
                        "Number",
                        "Nuclear",
                        "News",
                        "Nation"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "CBRN(e) stands for Chemical, Biological, Radiological, Nuclear, and (e)xplosive Material."
                },
                //Q11
                {
                    question: "What does the 'e' in CBRN(e) stand for?",
                    options: [
                        "Emergency",
                        "Environmental",
                        "Explosive",
                        "Exposure"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "The 'e' in CBRN(e) stands for '(e)xplosive Material'."
                },

                // Mnemonics
                //Q12
                {
                    question: "Which mnemonic is used for constructing a report for major incidents, including details like what happened and patient numbers?",
                    options: [
                        "CRESS",
                        "R-A-R",
                        "METHANE",
                        "BAD COLDS"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "METHANE is the mnemonic used for constructing a report, asking questions like 'What happened?' and 'How many patients?'."
                },
                //Q13
                {
                    question: "The METHANE report should include what information regarding patients?",
                    options: [
                        "Their names and addresses",
                        "How many patients and what you would expect their injuries and priorities to be",
                        "Their medical history prior to the incident",
                        "Their next of kin contact details"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "The METHANE report includes 'How many patients and what would you expect their injuries and priorities to be?'."
                },
                //Q14
                {
                    question: "In the context of the METHANE report, what question relates to inter-agency communication?",
                    options: [
                        "What is the weather like?",
                        "What could you tell the other agencies in attendance?",
                        "What is your personal opinion?",
                        "What is the incident budget?"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "The METHANE report covers 'What could you tell the other agencies in attendance?' and 'What information would you like from other agencies?'."
                },
                //Q15
                {
                    question: "Which of the following is a component of the 'RESCUE FORMULA' for water incidents?",
                    options: [
                        "SWIM",
                        "SHOUT",
                        "RUN",
                        "WAIT"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "The RESCUE FORMULA includes SHOUT, REACH, THROW, ROW, GO AND TOW, HELO, DIVERT FLOW, NO GO."
                },
                //Q16
                {
                    question: "Which of the following is one of the principles of the R-A-R mnemonic for Hazard Assessment?",
                    options: [
                        "Respond",
                        "Recognise",
                        "Report",
                        "Reassure"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "R-A-R stands for RECOGNISE, ASSESS, REACT."
                },
                //Q17
                {
                    question: "The CRESS tool is primarily used for what purpose in a hazardous substance incident?",
                    options: [
                        "To determine incident command structure",
                        "To report back key information from casualties to identify the type and nature of the incident",
                        "To manage logistics and resource allocation",
                        "To provide immediate medical treatment"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "The CRESS tool helps health services identify the type and nature of the hazardous substance incident by reporting key information from casualties."
                },
                //Q18
                {
                    question: "What is the primary function of the BAD COLDS tool?",
                    options: [
                        "To assist with patient decontamination",
                        "To categorise and identify substances causing concern",
                        "To manage media relations during an incident",
                        "To provide psychological first aid"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "The BAD COLDS tool is used to support the categorisation and potential identification of substance(s) causing concern."
                },

                // Scene Management
                //Q19
                {
                    question: "According to the Scene Assessment revision list, what is important for maximizing safety for 'everyone on scene'?",
                    options: [
                        "Limiting the number of responders",
                        "Ignoring environmental factors",
                        "Dynamic risk assessment (DRA)",
                        "Not establishing the presenting complaint early"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Maximising safety for everyone on scene and dynamic risk assessment (DRA) are highlighted as important."
                },
                //Q20
                {
                    question: "In scene assessment for trauma cases, what is it important to establish?",
                    options: [
                        "The patient's full medical history",
                        "The Mechanism of Injury (MOI)",
                        "The patient's insurance details",
                        "The nearest hospital's bed availability"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "It is important to establish the Mechanism of Injury (MOI) in trauma cases."
                },
                //Q21
                {
                    question: "Which cordon zone is described as requiring 'Specialist Responders'?",
                    options: [
                        "Cold Zone",
                        "Warm Zone",
                        "Hot Zone",
                        "Green Zone"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "The Hot Zone is for 'Specialist Responders'."
                },
                //Q22
                {
                    question: "Which cordon zone is described as for 'Non Specialist's With Appropriate PPE'?",
                    options: [
                        "Hot Zone",
                        "Cold Zone",
                        "Warm Zone",
                        "Red Zone"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "The Warm Zone is for 'Non Specialist's With Appropriate PPE'."
                },
                //Q23
                {
                    question: "What is the primary characteristic of the 'Cold Zone' in incident cordons?",
                    options: [
                        "Requires full hazmat suits",
                        "No PPE required",
                        "Strictly for casualties only",
                        "Where initial triage takes place"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "The Cold Zone is characterized by 'No PPE' required."
                },
                {
                    question: "Emergency Responders should NOT cross which cordon into the Warm Zone under any circumstances?",
                    options: [
                        "Outer Cordon",
                        "Inner Cordon",
                        "Safety Cordon",
                        "Green Cordon"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Emergency Responders should 'Do Not Cross the Inner Cordon into the Warm Zone under any circumstances'."
                },
                {
                    question: "What is the aim of triage?",
                    options: [
                        "To provide definitive medical treatment to all patients immediately.",
                        "To transport all patients to the nearest hospital at once.",
                        "To categorize patients based on the severity of their injuries and the likelihood of survival, prioritizing treatment.",
                        "To determine the legal liability of the incident."
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Triage aims to categorize patients based on the severity of their injuries to prioritize treatment."
                },
                {
                    question: "What are the two phases of triages used currently?",
                    options: [
                        "Assessment and Treatment",
                        "Triage Sieve and Triage Sort",
                        "Initial and Secondary",
                        "Ten Second Triage and Major Incidence Triage Tool"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "The two phases of triage are Triage Sieve and Triage Sort."
                },
                {
                    question: "What are the primary objectives of the Initial Operational Response (IOR) to incidents involving hazardous substances or CBRN materials?",
                    options: [
                        "To conduct criminal investigations and gather evidence.",
                        "To maximize media coverage and public relations.",
                        "To maximize the safety of the public and save lives, minimize operational risk to responders, and ensure effective transition to Specialist Operational Response.",
                        "To determine the financial cost of the incident."
                    ],
                    correctAnswerIndex: 2,
                    explanation: "The primary objectives of IOR are to maximise public safety and save lives, minimise operational risk, and ensure effective transition to SOR."
                },
                {
                    question: "What should always be in place for an Industry Confined Space according to the 'Working in Hazardous Environments' document?",
                    options: [
                        "A single rescuer",
                        "A pre-arranged rescue and medical team",
                        "A direct line to 999 for emergency entry",
                        "No specific safety measures"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "An Industry Confined Space 'Should always have a pre arranged rescue and medical team'."
                },
                {
                    question: "When responding on an airfield, what should responders wait for before proceeding?",
                    options: [
                        "All planes to land",
                        "Permission from airport control tower only",
                        "Escort Vehicles",
                        "A green light from ground staff"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "When responding on an airfield, responders should 'Wait for your Escort Vehicles'."
                },
                {
                    question: "Who has control of the scene at an aviation incident on an airfield?",
                    options: [
                        "The most senior paramedic",
                        "The Captain of the aircraft",
                        "Airport security",
                        "The Fire & Rescue Incident Commander"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "The 'Captain of the aircraft has control' at an airfield incident."
                },
                {
                    question: "Which type of RTC involves potential hazards from Lithium Ion Batteries?",
                    options: [
                        "LGV/HVG",
                        "Coach / Bus",
                        "Electric Vehicle RTC’s",
                        "Armoured Vehicles"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Electric Vehicle RTC’s involve potential hazards from Lithium Ion Batteries."
                },
                {
                    question: "Who grants emergency access at Rail Incidents?",
                    options: [
                        "The Station Master",
                        "Mobile Operations Manager (MOM)",
                        "British Transport Police",
                        "Network Rail Control"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Emergency Access at Rail Incidents is granted by the Mobile Operations Manager – (MOM)."
                },
                {
                    question: "Which of the following is NOT listed as a potential hazard during water incidents?",
                    options: [
                        "Unstable Street Furniture",
                        "Deceptive speed of water",
                        "Bio Hazards",
                        "Absence of current"
                    ],
                    correctAnswerIndex: 3,
                    explanation: "Potential hazards during water incidents include Unstable Street Furniture, Deceptive speed of water, and Bio Hazards."
                },
                {
                    question: "What type of decontamination involves patients removing contaminated clothing, with items categorised as 'Orange = Dirty' and 'Green = Clean'?",
                    options: [
                        "Dry Decontamination",
                        "Improvised Wet Decontamination",
                        "Clinical Decontamination - SORT",
                        "Emergency Disrobe Packs"
                    ],
                    correctAnswerIndex: 3,
                    explanation: "Emergency Disrobe Packs are used for patients to remove contaminated clothing, with 'Orange = Dirty' and 'Green = Clean' labels."
                },

                // Incident Types / Hazards
                {
                    question: "What is 'Operation Plato' identified as in the 'Introduction to Major Incidents' document?",
                    options: [
                        "A national exercise for floods",
                        "A national identifier for the response to a marauding terrorist attack (MTA)",
                        "A plan for managing internal incidents only",
                        "A training program for CBRN response"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Operation Plato is the 'national identifier for the response to a marauding terrorist attack (MTA)'."
                },
                {
                    question: "Which of these is a listed type of 'Rising Tide' major incident?",
                    options: [
                        "A serious transport accident",
                        "A developing epidemic",
                        "A significant chemical release",
                        "A fire within an organization"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "A 'Rising Tide' incident can include 'a developing epidemic, or staffing crisis'."
                },
                {
                    question: "Which type of CBRN(e) agent is associated with symptoms like fever, shortness of breath, and chest infection?",
                    options: [
                        "Chemical Agent",
                        "Biological Agent",
                        "Radiological Agent",
                        "Nuclear Material"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Biological agent symptoms include Fever, Shortness of breath, and Chest infection."
                },
                {
                    question: "Initial signs of exposure to a Radiological Agent often include:",
                    options: [
                        "Rash and skin blistering",
                        "Pinpoint pupils",
                        "Nausea & vomiting",
                        "Sudden death with no prior symptoms"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Initial signs of radiation exposure include Nausea & vomiting, Loss of appetite, and Malaise."
                },
                {
                    question: "Which route of entry for hazardous substances involves breathing it in?",
                    options: [
                        "Ingestion",
                        "Inoculation",
                        "Inhalation",
                        "Wound Absorption"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Inhalation involves breathing in the substance."
                },
                {
                    question: "What is a potential effect of poor practice when dealing with hazardous materials in the workplace?",
                    options: [
                        "Improved efficiency",
                        "Decreased risk of exposure",
                        "Potential consequences for health and safety",
                        "Automatic hazard mitigation"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Poor practice when dealing with hazardous materials can lead to potential negative consequences."
                },
                {
                    question: "According to the documents, what is important to consider regarding 'environmental factors' during scene assessment?",
                    options: [
                        "Their irrelevance to scene safety",
                        "Their potential to speed up the assessment process",
                        "Their impact on scene safety",
                        "Only their financial impact"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "It is important to consider the 'impact of environmental factors on scene safety'."
                },
                {
                    question: "The document highlights the importance of determining what 'early on in assessment' regarding patients?",
                    options: [
                        "Their full medical history",
                        "Their family contacts",
                        "Patient numbers",
                        "Their preferred hospital"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "It is important to determine 'patient numbers early on in assessment'."
                },
                {
                    question: "What does the 'E' in CBRN(e) specifically refer to as a deliberate release?",
                    options: [
                        "Environmental",
                        "Explosive Material",
                        "Epidemic",
                        "Evacuation"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "The 'e' in CBRN(e) refers to '(e)xplosive Material' as a deliberate release."
                },
                {
                    question: "Which of the following is NOT a type of major incident listed in the 'Introduction to Major Incidents' document?",
                    options: [
                        "Big Bang",
                        "Rising Tide",
                        "Small Scale Local Incident",
                        "Cloud on the Horizon"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Types of Major Incidents listed include Big Bang, Rising Tide, Cloud on the Horizon, Headline News, Internal Incidents, CBRN, HAZMAT, Mass Casualties, and Operation Plato."
                },
                {
                    question: "What is one of the key responsibilities of Police at a HazMat/CBRN(e) incident?",
                    options: [
                        "Mass decontamination - NHS Support",
                        "Search and rescue",
                        "Crime scene - perpetrators and Cordoning",
                        "Clinical decontamination"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Police responsibilities include 'Crime scene - perpetrators' and 'Cordoning'."
                },
                {
                    question: "What is one of the key responsibilities of Fire & Rescue Service at a HazMat/CBRN(e) incident?",
                    options: [
                        "Providing nerve agent antidotes",
                        "Search and rescue",
                        "Setting up a cold zone only",
                        "Lead on decontamination of non-ambulatory patients"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Fire & Rescue Service responsibilities include 'Search and rescue' and 'Mass decontamination - NHS Support'."
                },
                {
                    question: "What kind of incidents are LGV/HVG, Coach/Bus, and Electric Vehicle RTC’s considered?",
                    options: [
                        "Minor traffic incidents",
                        "Standard road traffic collisions",
                        "Special Circumstance RTC’s",
                        "Internal Incidents"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "LGV/HVG, Coach/Bus, and Electric Vehicle RTC’s are considered 'Special Circumstance RTC’s'."
                },
                {
                    question: "What is the meaning of 'IOR' in the context of Ambulance Response to HazMat / CBRN(e) Incidents?",
                    options: [
                        "Immediate Operational Review",
                        "Initial Operational Response",
                        "Incident Officer Ranking",
                        "International Organization for Rescue"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "IOR stands for Initial Operational Response."
                },
                {
                    question: "Which type of blast injury is caused by the impact of the over-pressurization wave on body surfaces?",
                    options: [
                        "Secondary",
                        "Tertiary",
                        "Primary",
                        "Quaternary"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Primary blast injuries are 'Due to high-order explosives' and 'Impact of over pressurisation wave on body surfaces'."
                },
                {
                    question: "Blast injuries due to flying debris, bomb fragments, or other projectiles are classified as what type?",
                    options: [
                        "Primary",
                        "Secondary",
                        "Tertiary",
                        "Quaternary"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Secondary blast injuries are 'Due to flying debris, bomb fragments, other projectiles'."
                },
                {
                    question: "If individuals are thrown by blast winds, what type of blast injury is sustained?",
                    options: [
                        "Primary",
                        "Secondary",
                        "Tertiary",
                        "Quaternary"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Tertiary blast injuries are 'Due to individuals being thrown by blast winds'."
                },
                {
                    question: "What type of blast injury includes exacerbations/complications of pre-existing illnesses or injuries not due to primary, secondary, or tertiary mechanisms?",
                    options: [
                        "Primary",
                        "Secondary",
                        "Tertiary",
                        "Quaternary"
                    ],
                    correctAnswerIndex: 3,
                    explanation: "Quaternary blast injuries include 'any explosion-related injury, illness, or disease not due to primary, secondary, or tertiary mechanisms'."
                },
                {
                    question: "What does 'EPRR' stand for in the context of major incidents?",
                    options: [
                        "Emergency Preparedness, Response and Recovery",
                        "Emergency Planning and Resource Readiness",
                        "Environmental Protection and Rapid Response",
                        "Emergency Preparedness, Resilience and Response"
                    ],
                    correctAnswerIndex: 3,
                    explanation: "EPRR stands for Emergency Preparedness, Resilience and Response."
                },
                {
                    question: "Which is a listed objective for 'Working in Hazardous Environments'?",
                    options: [
                        "To increase response times",
                        "To reduce the need for specialized equipment",
                        "To improve awareness of the risk when working in Transport Incidents",
                        "To delegate all risk to external agencies"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "An objective is to 'improve awareness of the risk when working: Transport Incidents'."
                },
                {
                    question: "What distinguishes a 'Cloud on the Horizon' type of major incident?",
                    options: [
                        "It's a serious transport accident.",
                        "It's a developing epidemic.",
                        "It's a serious threat such as a significant chemical or nuclear release.",
                        "It's a local internal incident."
                    ],
                    correctAnswerIndex: 2,
                    explanation: "A 'Cloud on the Horizon' is 'a serious threat such as a significant chemical or nuclear release'."
                },
                {
                    question: "What kind of major incident involves public or media alarm about an impending situation?",
                    options: [
                        "Big Bang",
                        "Rising Tide",
                        "Headline News",
                        "Internal Incident"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "A 'Headline News' incident involves 'public or media alarm about an impending situation'."
                },
                {
                    question: "What is an 'Internal Incident' in the context of major incidents?",
                    options: [
                        "A chemical spill at an industrial site",
                        "A developing epidemic affecting staff",
                        "Fire, breakdown of utilities or violent crime within an organisation",
                        "A large-scale public gathering"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Internal Incidents include 'fire, breakdown of utilities or violent crime' within an organization."
                },
                {
                    question: "What is the recommended action for patients during a CBRN(e) release to manage their exposure?",
                    options: [
                        "Remain stationary and await rescue",
                        "Move to a safe area and remove contaminated clothing",
                        "Attempt to neutralize the substance themselves",
                        "Wait for specialist decontamination teams before moving"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Own role in the management of a CBRN(e) release includes encouraging patients to 'Move to a safe area' and 'Remove contaminated clothing'."
                },
                {
                    question: "What is a potential health effect of hazardous materials via 'routes of entry'?",
                    options: [
                        "Increased appetite",
                        "Improved respiratory function",
                        "Specific effects on health depending on the substance",
                        "Enhanced cognitive abilities"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Potential consequences for health and safety are highlighted, implying specific effects depending on the substance and route of entry."
                },
                {
                    question: "What information must be provided on the label of hazardous materials and substances?",
                    options: [
                        "Only the company logo",
                        "Detailed information about the hazard, as outlined by legislation",
                        "Marketing slogans",
                        "The price of the material"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Labels on hazardous materials must provide detailed information about the hazard, as outlined by current legislation."
                },
                {
                    question: "What does the provided documentation indicate about 'nerve agent antidotes'?",
                    options: [
                        "They are not effective.",
                        "Their use is outlined as part of CBRN(e) management.",
                        "They are only for self-administration by responders.",
                        "They are only available at hospitals."
                    ],
                    correctAnswerIndex: 1,
                    explanation: "The use of 'nerve agent antidotes' is outlined within the management of major incidents, specifically CBRN(e) incidents."
                },
                {
                    question: "What is a characteristic of 'Sudden Onset' CBRN(e) events?",
                    options: [
                        "Surge of casualties over days or weeks",
                        "More likely with biological agents",
                        "More likely with chemical agents and includes bombs within CBRN",
                        "May go unrecognised"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Sudden Onset events are 'More likely with chemical' and 'Includes bombs within CBRN'."
                },
                {
                    question: "What is a characteristic of 'Slowly Evolving (Emerging)' CBRN(e) events?",
                    options: [
                        "Obvious scene or cause",
                        "Surge of casualties over hours",
                        "May go unrecognised and be mistaken for natural cause (e.g., food poisoning)",
                        "Rapid unconsciousness"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Slowly Evolving events 'May go unrecognised' and 'May be mistaken for natural cause (food poisoning)'."
                },
                {
                    question: "What are the effects of hydrogen sulphide at concentrations of 700-1000 ppm?",
                    options: [
                        "Odour threshold",
                        "Slight conjunctivitis after 1hr",
                        "Rapid unconsciousness, breathing stops, death within minutes",
                        "Prolonged exposure may cause nausea"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "At 700-1000 ppm, hydrogen sulphide causes 'Rapid unconsciousness, 'knockdown' or immediate collapse within 1 to 2 breaths, breathing stops, death within minutes'."
                },
                {
                    question: "What is the recommended action for rescuers concerning unresponsive patients in a hydrogen sulphide incident?",
                    options: [
                        "Immediately attempt retrieval without PPE",
                        "Attempt retrieval only if by HART/Fire Service in appropriate PPE",
                        "Assume they are deceased and do not approach",
                        "Provide immediate mouth-to-mouth resuscitation"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Patient retrieval 'Should not be attempted unless by HART/Fire Service in appropriate PPE'."
                },
                {
                    question: "What is a clinical sign/symptom of Fentanyl & Carfentanil toxicity and overdose?",
                    options: [
                        "Dilated pupils",
                        "Rapid breathing",
                        "Pinpoint (constricted) pupils",
                        "Increased energy levels"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Signs and symptoms of Fentanyl & Carfentanil toxicity and overdose include 'Pinpoint (constricted) pupils'."
                },
                {
                    question: "According to the 'Working in Hazardous Environments' document, what does 'A floating body in the water is not immediately a ROLE' imply?",
                    options: [
                        "It means the body is not a rescue priority.",
                        "It signifies that immediate resuscitation should begin without assessment.",
                        "It means it is not immediately considered a 'Rescue Operation Life Extension' and requires further assessment (weather, age, medical history) before progression.",
                        "It indicates the body is already deceased and no action is needed."
                    ],
                    correctAnswerIndex: 2,
                    explanation: "A floating body in the water is not immediately a ROLE; progression depends on weather, age, and medical history."
                },
                {
                    question: "Which route of entry for hazardous substances involves ingesting or eating/drinking the material?",
                    options: [
                        "Inhalation",
                        "Ingestion",
                        "Inoculation",
                        "Eyes"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Ingestion is a route of exposure when hazardous substances are eaten or drunk."
                },
                {
                    question: "Which of the following is an example of 'Inoculation' as a route of entry for hazardous substances?",
                    options: [
                        "Breathing in a gas",
                        "Touching a contaminated surface with intact skin",
                        "Percutaneous absorption through skin or via needles/bites",
                        "Swallowing contaminated water"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Inoculation involves percutaneous entry through the skin, or via needles/bites/pellets."
                },
                {
                    question: "What symptom is typically associated with Blistering agents like Mustard Gas?",
                    options: [
                        "Pinpoint pupils",
                        "Pulmonary oedema and haemorrhage, rash and skin blistering",
                        "Sudden loss of smell",
                        "Diarrhoea and fever"
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Blistering agents can cause 'Pulmonary oedema and haemorrhage Rash and skin blistering'."
                },
                {
                    question: "Choking agents such as Chlorine and Phosgene primarily affect which body system?",
                    options: [
                        "Cardiovascular system",
                        "Gastrointestinal system",
                        "Upper airway and lungs, leading to pulmonary oedema",
                        "Nervous system"
                    ],
                    correctAnswerIndex: 2,
                    explanation: "Choking agents cause 'Upper airway distress' and can lead to 'Fatal pulmonary oedema'."
                },
                {
                    question: "Which of the following describes a key principle for responders when dealing with HazMat/CBRN incidents, as per the documents?",
                    options: [
                        "Prioritize collecting evidence over personal safety.",
                        "Use caution and keep a safe distance to avoid exposure to themselves.",
                        "Immediately enter the hot zone without full PPE if casualties are present.",
                        "Withhold information from the control room until the scene is fully clear."
                    ],
                    correctAnswerIndex: 1,
                    explanation: "Responders must 'Use caution and keep a safe distance to avoid exposure to themselves'."
                },
                {
                    question: "What is a core responsibility of Ambulance services during a major incident, as per the revision list?",
                    options: [
                        "To manage media communications.",
                        "To cordon off the entire incident area.",
                        "To explain the purpose of the incident command and control system.",
                        "The NHS lead on decontamination of non-ambulatory patients."
                    ],
                    correctAnswerIndex: 3,
                    explanation: "The NHS leads on decontamination of non-ambulatory patients during a HazMat/CBRN(e) incident, which is a core responsibility."
                },
    //New Code is Here

    // Definitions and Classifications (from "01. Intro to Major Incidents")
    {
        question: "What does EPRR stand for in the context of major incidents?",
        options: [
            "Emergency Preparedness, Response and Recovery",
            "Emergency Planning and Resource Readiness",
            "Emergency Preparedness, Resilience and Response",
            "Environmental Protection and Rapid Response"
        ],
        correctAnswerIndex: 2,
        explanation: "EPRR stands for Emergency Preparedness, Resilience and Response."
    },
    {
        question: "A 'Big Bang' type of major incident is typically characterized by:",
        options: [
            "A developing epidemic",
            "A serious transport accident or explosion",
            "A public or media alarm about an impending situation",
            "A significant chemical or nuclear release"
        ],
        correctAnswerIndex: 1,
        explanation: "A 'Big Bang' incident is defined as 'a serious transport accident or explosion'."
    },
    {
        question: "What is an 'Internal Incident' as classified in the major incident types?",
        options: [
            "An incident affecting multiple organizations across a region",
            "Fire, breakdown of utilities or violent crime within an organisation",
            "An incident that requires international cooperation",
            "A major incident that is kept secret from the public"
        ],
        correctAnswerIndex: 1,
        explanation: "Internal Incidents are defined as 'fire, breakdown of utilities or violent crime' within an organization."
    },
    {
        question: "Which term describes an event involving 'hundreds of patients'?",
        options: [
            "Major Incident",
            "Mass Casualty Incident",
            "Catastrophic Incident",
            "Minor Incident"
        ],
        correctAnswerIndex: 1,
        explanation: "A Mass Casualty Incident involves 'Hundreds of patients'."
    },
    {
        question: "According to the documents, what is the 'national identifier for the response to a marauding terrorist attack (MTA)'?",
        options: [
            "Operation Nightingale",
            "Operation Merlin",
            "Operation Plato",
            "Operation Horizon"
        ],
        correctAnswerIndex: 2,
        explanation: "Operation Plato is the 'national identifier for the response to a marauding terrorist attack (MTA)'."
    },
    {
        question: "A 'Cloud on the Horizon' incident refers to:",
        options: [
            "A sudden, unexpected natural disaster",
            "A serious threat such as a significant chemical or nuclear release",
            "An incident caused by weather changes",
            "A minor incident that is escalating slowly"
        ],
        correctAnswerIndex: 1,
        explanation: "A 'Cloud on the Horizon' is described as 'a serious threat such as a significant chemical or nuclear release'."
    },
    {
        question: "What defines a 'Major Incident' in terms of required arrangements?",
        options: [
            "Any incident that requires police presence.",
            "An event requiring standard procedures from a single agency.",
            "An event or situation with serious consequences requiring special arrangements by one or more emergency responder agency.",
            "An incident affecting only a small local area."
        ],
        correctAnswerIndex: 2,
        explanation: "A Major Incident is 'An event or situation with a range of serious consequences which requires special arrangements to be implemented by one or more emergency responder agency'."
    },

    // Scene Assessment and Environmental Safety (from "C12 - Scene Assessment, Environmental Safety Revision List")
    {
        question: "What is highlighted as important for maximizing safety for 'everyone on scene'?",
        options: [
            "Restricting information flow",
            "Ignoring environmental factors",
            "Dynamic risk assessment (DRA)",
            "Minimizing resources"
        ],
        correctAnswerIndex: 2,
        explanation: "Dynamic risk assessment (DRA) is crucial for maximizing safety on scene."
    },
    {
        question: "In trauma cases, what is it important to establish during scene assessment?",
        options: [
            "The patient's personal history",
            "The Mechanism of Injury (MOI)",
            "The patient's contact information",
            "The time of the next ambulance arrival"
        ],
        correctAnswerIndex: 1,
        explanation: "Establishing the Mechanism of Injury (MOI) in trauma cases is important."
    },
    {
        question: "What should be determined early on in assessment regarding patients at a scene?",
        options: [
            "Their names and addresses",
            "Their medical insurance details",
            "Patient numbers",
            "Their dietary preferences"
        ],
        correctAnswerIndex: 2,
        explanation: "It is important to determine 'patient numbers early on in assessment'."
    },
    {
        question: "What is a key aim of current legislation relating to hazardous materials and substances in the workplace?",
        options: [
            "To promote the use of all hazardous materials.",
            "To outline the safe handling and management of these substances.",
            "To reduce the number of employees in hazardous roles.",
            "To shift all responsibility to the employees."
        ],
        correctAnswerIndex: 1,
        explanation: "Legislation aims to ensure the safe handling and management of hazardous materials and substances."
    },
    {
        question: "What does 'routes of entry' for substances hazardous to health refer to?",
        options: [
            "The different roads used to transport hazardous materials.",
            "The pathways by which hazardous substances enter the body.",
            "The entry points to a hazardous site.",
            "The methods for calling emergency services."
        ],
        correctAnswerIndex: 1,
        explanation: "Routes of entry describe how hazardous substances enter the body (e.g., Ingestion, Inhalation, Absorption, Injection/Inoculation)."
    },
    {
        question: "What information must be provided on the label of hazardous materials?",
        options: [
            "Only the country of origin.",
            "Detailed information about the hazard, as outlined by legislation.",
            "The product's price.",
            "A list of alternative non-hazardous products."
        ],
        correctAnswerIndex: 1,
        explanation: "Labels on hazardous materials must provide detailed information about the hazard, as outlined by current legislation."
    },
    {
        question: "Poor practice when dealing with hazardous materials in the workplace can lead to:",
        options: [
            "Increased productivity",
            "Automatic hazard mitigation",
            "Potential consequences for health and safety",
            "Reduced need for PPE"
        ],
        correctAnswerIndex: 2,
        explanation: "Poor practice can lead to 'potential consequences of poor practice when dealing with hazardous materials in the workplace' for health and safety."
    },

    // CBRN(e) / HazMat (from "05. CBRN(e) HazMat Version 3")
    {
        question: "What is the primary difference between a HazMat incident and a CBRN(e) incident?",
        options: [
            "HazMat involves only solids, CBRN(e) involves gases.",
            "HazMat is accidental, CBRN(e) is a deliberate release.",
            "HazMat is always small scale, CBRN(e) is large scale.",
            "HazMat only occurs indoors, CBRN(e) outdoors."
        ],
        correctAnswerIndex: 1,
        explanation: "HazMat is an 'accidental slip or release', while CBRN(e) is a 'deliberate release'."
    },
    {
        question: "Which of these is considered a HazMat Event?",
        options: [
            "Deliberate release of a Biological Agent",
            "Large Fires",
            "Nuclear detonation",
            "A terrorist attack with explosives"
        ],
        correctAnswerIndex: 1,
        explanation: "HazMat Events include 'Large Fires', 'Accidental chemical exposures', and 'Chemical spills at industrial sites or from RTC’s'."
    },
    {
        question: "What does the 'B' in CBRN(e) stand for?",
        options: [
            "Bomb",
            "Biological",
            "Burn",
            "Blast"
        ],
        correctAnswerIndex: 1,
        explanation: "CBRN(e) stands for Chemical, Biological, Radiological, Nuclear, and (e)xplosive Material."
    },
    {
        question: "What is a characteristic symptom of exposure to a Chemical Nerve Agent?",
        options: [
            "Fever and shortness of breath",
            "Pinpoint pupils and secretions",
            "Skin blistering and rash",
            "Nausea and vomiting initially"
        ],
        correctAnswerIndex: 1,
        explanation: "Nerve agents cause 'Pinpoint pupils' and 'secretions'."
    },
    {
        question: "Choking agents like Chlorine and Phosgene primarily affect which part of the body?",
        options: [
            "The heart and circulation",
            "The digestive system",
            "The upper airway and lungs, leading to pulmonary oedema",
            "The skin, causing blistering"
        ],
        correctAnswerIndex: 2,
        explanation: "Choking agents cause 'Upper airway distress' and can lead to 'Fatal pulmonary oedema'."
    },
    {
        question: "What is a characteristic symptom of a Biological Agent exposure?",
        options: [
            "Immediate unconsciousness",
            "Skin blistering",
            "Fever, shortness of breath, and chest infection (slow onset)",
            "Violent coughing and vomiting immediately"
        ],
        correctAnswerIndex: 2,
        explanation: "Biological agent symptoms include Fever, Shortness of breath, and Chest infection, typically with a slow onset."
    },
    {
        question: "Initial signs of exposure to a Radiological Agent often include:",
        options: [
            "Sudden loss of sight",
            "Nausea & vomiting",
            "Extreme euphoria",
            "Rapid onset of seizures"
        ],
        correctAnswerIndex: 1,
        explanation: "Initial signs of radiation exposure include Nausea & vomiting, Loss of appetite, and Malaise."
    },
    {
        question: "Which cordon zone is described as 'No PPE required'?",
        options: [
            "Hot Zone",
            "Warm Zone",
            "Cold Zone",
            "Green Zone"
        ],
        correctAnswerIndex: 2,
        explanation: "The Cold Zone is characterized by 'No PPE' required."
    },
    {
        question: "Emergency Responders are strictly instructed NOT to cross which cordon?",
        options: [
            "The Outer Cordon into the Cold Zone",
            "The Inner Cordon into the Warm Zone",
            "The Green Cordon into the Safety Zone",
            "The Blue Cordon into the Triage Zone"
        ],
        correctAnswerIndex: 1,
        explanation: "Emergency Responders should 'Do Not Cross the Inner Cordon into the Warm Zone under any circumstances'."
    },
    {
        question: "What are the primary objectives of the Initial Operational Response (IOR) to incidents involving hazardous substances?",
        options: [
            "To secure media attention and public praise.",
            "To maximize the safety of the public and save lives, minimize operational risk to responders, and ensure effective transition to Specialist Operational Response.",
            "To immediately arrest all potential perpetrators.",
            "To assess the long-term environmental damage only."
        ],
        correctAnswerIndex: 1,
        explanation: "IOR objectives are to maximise public safety/save lives, minimise operational risk, and ensure effective transition to SOR."
    },
    {
        question: "What does the 'e' in CBRN(e) specifically represent when referring to a deliberate release?",
        options: [
            "Emergency procedures",
            "Environmental impact",
            "Explosive Material",
            "Evacuation plans"
        ],
        correctAnswerIndex: 2,
        explanation: "The 'e' in CBRN(e) stands for '(e)xplosive Material'."
    },
    {
        question: "Which type of blast injury is caused by the impact of the over-pressurization wave on body surfaces?",
        options: [
            "Secondary",
            "Primary",
            "Tertiary",
            "Quaternary"
        ],
        correctAnswerIndex: 1,
        explanation: "Primary blast injuries are due to the 'Impact of over pressurisation wave on body surfaces'."
    },
    {
        question: "Blast injuries resulting from flying debris or bomb fragments are classified as what type?",
        options: [
            "Primary",
            "Secondary",
            "Tertiary",
            "Quaternary"
        ],
        correctAnswerIndex: 1,
        explanation: "Secondary blast injuries are 'Due to flying debris, bomb fragments, other projectiles'."
    },
    {
        question: "If individuals are thrown by blast winds, what type of blast injury is sustained?",
        options: [
            "Primary",
            "Secondary",
            "Tertiary",
            "Quaternary"
        ],
        correctAnswerIndex: 2,
        explanation: "Tertiary blast injuries are 'Due to individuals being thrown by blast winds'."
    },
    {
        question: "Which type of blast injury includes exacerbations of pre-existing illnesses or injuries not due to primary, secondary, or tertiary mechanisms?",
        options: [
            "Primary",
            "Secondary",
            "Tertiary",
            "Quaternary"
        ],
        correctAnswerIndex: 3,
        explanation: "Quaternary blast injuries include 'any explosion-related injury, illness, or disease not due to primary, secondary, or tertiary mechanisms'."
    },
    {
        question: "What is the term for a CBRN(e) event that 'May go unrecognised' and 'May be mistaken for natural cause (e.g., food poisoning)'?",
        options: [
            "Sudden Onset",
            "Rapid Response",
            "Slowly Evolving (Emerging)",
            "Immediate Impact"
        ],
        correctAnswerIndex: 2,
        explanation: "Slowly Evolving (Emerging) events 'May go unrecognised' and 'May be mistaken for natural cause (food poisoning)'."
    },
    {
        question: "What are the effects of hydrogen sulphide at concentrations of 700-1000 ppm?",
        options: [
            "Only a slight unpleasant odour",
            "Slight eye irritation after several hours",
            "Rapid unconsciousness, breathing stops, death within minutes",
            "Temporary dizziness only"
        ],
        correctAnswerIndex: 2,
        explanation: "At 700-1000 ppm, hydrogen sulphide causes 'Rapid unconsciousness, 'knockdown' or immediate collapse within 1 to 2 breaths, breathing stops, death within minutes'."
    },
    {
        question: "What is a clinical sign/symptom of Fentanyl & Carfentanil toxicity and overdose?",
        options: [
            "Dilated pupils",
            "Rapid and shallow breathing",
            "Pinpoint (constricted) pupils",
            "Extreme hyperactivity"
        ],
        correctAnswerIndex: 2,
        explanation: "Signs and symptoms of Fentanyl & Carfentanil toxicity and overdose include 'Pinpoint (constricted) pupils'."
    },
    {
        question: "What does 'IOR' stand for in the context of Ambulance Response to HazMat / CBRN(e) Incidents?",
        options: [
            "Immediate Operational Review",
            "Initial Operational Response",
            "Incident Officer Readiness",
            "International Oversight Regulation"
        ],
        correctAnswerIndex: 1,
        explanation: "IOR stands for Initial Operational Response."
    },
    {
        question: "Which route of entry for hazardous substances involves ingestion?",
        options: [
            "Breathing in gases",
            "Absorption through intact skin",
            "Eating or drinking the material",
            "Injection via a wound"
        ],
        correctAnswerIndex: 2,
        explanation: "Ingestion refers to eating or drinking the hazardous material."
    },
    {
        question: "What is an example of 'Inoculation' as a route of entry for hazardous substances?",
        options: [
            "Inhaling chemical fumes",
            "Absorption through the eyes",
            "Percutaneous absorption through skin or via needles/bites",
            "Swallowing contaminated food"
        ],
        correctAnswerIndex: 2,
        explanation: "Inoculation involves percutaneous entry through the skin, or via needles/bites/pellets."
    },
    {
        question: "What symptom is typically associated with Blistering agents like Mustard Gas?",
        options: [
            "Pinpoint pupils",
            "Pulmonary oedema and haemorrhage, rash and skin blistering",
            "Sudden loss of smell",
            "Diarrhoea and fever"
        ],
        correctAnswerIndex: 1,
        explanation: "Blistering agents can cause 'Pulmonary oedema and haemorrhage Rash and skin blistering'."
    },

    // Working in Hazardous Environments (from "06. TAAP ONLY - Working in Hazardous Environments Version 3")
    {
        question: "One of the objectives for 'Working in Hazardous Environments' is to improve awareness of risk when working in:",
        options: [
            "Office environments",
            "Transport Incidents",
            "Controlled laboratory settings",
            "Retail stores"
        ],
        correctAnswerIndex: 1,
        explanation: "An objective is to 'improve awareness of the risk when working: Transport Incidents'."
    },
    {
        question: "When responding on an airfield, what is a crucial safety measure responders should adhere to?",
        options: [
            "Proceed immediately at maximum speed.",
            "Ignore all ground crew instructions.",
            "Wait for your Escort Vehicles.",
            "Assume planes will stop for emergency vehicles."
        ],
        correctAnswerIndex: 2,
        explanation: "When responding on an airfield, responders should 'Wait for your Escort Vehicles'."
    },
    {
        question: "At an aviation incident on an airfield, who typically has control of the scene?",
        options: [
            "The most senior paramedic on scene",
            "Airport security personnel",
            "The Captain of the aircraft",
            "The Fire & Rescue Incident Commander"
        ],
        correctAnswerIndex: 2,
        explanation: "The 'Captain of the aircraft has control' at an airfield incident."
    },
    {
        question: "Which of the following is considered a 'Special Circumstance RTC'?",
        options: [
            "A minor fender-bender",
            "A collision involving an Electric Vehicle due to potential Lithium Ion Battery hazards",
            "A car breakdown on a quiet street",
            "A collision with no injuries"
        ],
        correctAnswerIndex: 1,
        explanation: "Electric Vehicle RTC’s are listed as 'Special Circumstance RTC’s' due to Lithium Ion Batteries."
    },
    {
        question: "Who grants emergency access at Rail Incidents?",
        options: [
            "The local police chief",
            "The Train Driver",
            "The Mobile Operations Manager (MOM)",
            "The general public"
        ],
        correctAnswerIndex: 2,
        explanation: "Emergency Access at Rail Incidents is granted by the Mobile Operations Manager – (MOM)."
    },
    {
        question: "Which of the following is NOT listed as a potential hazard during water incidents?",
        options: [
            "Unstable Street Furniture",
            "Deceptive speed of water",
            "Absence of current (still water)",
            "Bio Hazards"
        ],
        correctAnswerIndex: 2,
        explanation: "Potential hazards include Unstable Street Furniture, Deceptive speed of water, and Bio Hazards. Absence of current is not listed as a hazard."
    },
    {
        question: "Regarding Industrial Confined Spaces, what should always be in place?",
        options: [
            "A single, highly trained rescuer.",
            "A direct phone line to emergency services for immediate entry.",
            "A pre-arranged rescue and medical team.",
            "No specific safety measures if the space is small."
        ],
        correctAnswerIndex: 2,
        explanation: "An Industry Confined Space 'Should always have a pre arranged rescue and medical team'."
    },
    {
        question: "What does 'A floating body in the water is not immediately a ROLE' imply?",
        options: [
            "It means the body is already deceased and no action is needed.",
            "It signifies that immediate resuscitation should begin without assessment.",
            "It means it is not immediately considered a 'Recognition Of Life Extinct' and requires further assessment (medical assessment) before progression.",
            "It means the body should be ignored until specialist divers arrive."
        ],
        correctAnswerIndex: 2,
        explanation: "A floating body in the water is not immediately a ROLE; progression depends on weather, age, and medical history."
    },
    {
        question: "What is an important consideration when dealing with 'Plant Machinery' in a hazardous environment?",
        options: [
            "That it can be used to clear the scene quickly.",
            "The potential for crush injuries and entanglement.",
            "Its suitability as a temporary shelter.",
            "Its ability to provide electrical power."
        ],
        correctAnswerIndex: 1,
        explanation: "Plant Machinery poses hazards such as crush injuries and entanglement."
    },
    {
        question: "What is a key risk associated with 'Unstable Structures' in a hazardous environment?",
        options: [
            "The possibility of them being a good vantage point.",
            "The risk of collapse or falling debris.",
            "Their suitability for creating a safe zone.",
            "Their ability to block radio signals."
        ],
        correctAnswerIndex: 1,
        explanation: "Unstable Structures pose a risk of collapse and falling debris, impacting scene safety."
    },

    // Mnemonics & Communications (Cross-document)
    {
        question: "What does the 'E' in METHANE stand for when constructing a report?",
        options: [
            "Environment",
            "Equipment",
            "Emergency Services (information for other agencies)",
            "Evacuation"
        ],
        correctAnswerIndex: 2,
        explanation: "The 'E' in METHANE relates to 'Emergency Services' (What could you tell the other agencies in attendance?)."
    },
    {
        question: "The 'R-A-R' mnemonic in hazard assessment stands for:",
        options: [
            "Respond, Assess, React",
            "Recognise, Assess, React",
            "Review, Analyze, Report",
            "Rescue, Alert, Retreat"
        ],
        correctAnswerIndex: 1,
        explanation: "R-A-R stands for RECOGNISE, ASSESS, REACT."
    },
    {
        question: "Which of the following is a component of the 'RESCUE FORMULA' for water incidents?",
        options: [
            "DRIVE",
            "SHOUT",
            "WATCH",
            "RUN"
        ],
        correctAnswerIndex: 1,
        explanation: "The RESCUE FORMULA includes SHOUT, REACH, THROW, ROW, GO AND TOW, HELO, DIVERT FLOW, NO GO."
    },
    {
        question: "The CRESS tool is used to identify the type and nature of an incident involving hazardous substances by primarily gathering information from where?",
        options: [
            "Witness statements",
            "Satellite imagery",
            "Key information from casualties",
            "Historical weather data"
        ],
        correctAnswerIndex: 2,
        explanation: "The CRESS tool helps identify the incident type by reporting 'key information from casualties'."
    },
    {
        question: "What is the main purpose of the BAD COLDS tool?",
        options: [
            "To provide immediate medical treatment for blast injuries.",
            "To categorise and identify substances causing concern.",
            "To manage the psychological impact on responders.",
            "To calculate the cost of incident response."
        ],
        correctAnswerIndex: 1,
        explanation: "The BAD COLDS tool is used to 'support the categorisation and potential identification of substance(s) causing concern'."
    },

    // Triage and Patient Management (from "C13 - Management of Major Incidents Revision List")
    {
        question: "What is the primary aim of triage?",
        options: [
            "To provide definitive medical treatment to all patients immediately.",
            "To transport all patients to the nearest hospital as quickly as possible.",
            "To categorize patients based on the severity of their injuries and the likelihood of survival, prioritizing treatment.",
            "To determine the legal liability for injuries sustained."
        ],
        correctAnswerIndex: 2,
        explanation: "Triage aims to categorize patients based on severity and survival likelihood to prioritize treatment."
    },
    {
        question: "What are the two phases of triage?",
        options: [
            "Ten Second Triage and Major Incidence Triage Tool",
            "Assessment and Treatment Triage",
            "Triage Sieve and Triage Sort",
            "Initial and Secondary Triage"
        ],
        correctAnswerIndex: 0,
        explanation: "The two phases of triage are TST and MITT."
    },
    {
        question: "What is a potential risk associated with 'over-triaging' patients?",
        options: [
            "Delaying treatment for critically injured patients.",
            "Categorizing patients as more severe than they are, potentially overwhelming resources.",
            "Missing subtle injuries in patients.",
            "Sending patients home too early."
        ],
        correctAnswerIndex: 1,
        explanation: "Over-triaging can lead to categorizing patients as more severe than they are, potentially overwhelming resources."
    },
    {
        question: "What is the importance of 'accounting for vulnerable populations' during triage?",
        options: [
            "To give them preferential treatment regardless of injury.",
            "To ensure their specific needs (e.g., children, elderly, disabled) are considered in assessment and care.",
            "To exclude them from the triage process.",
            "To send them to a separate, less equipped facility."
        ],
        correctAnswerIndex: 1,
        explanation: "Accounting for vulnerable populations ensures their specific needs are considered during triage and management."
    },
    {
        question: "What type of decontamination involves patients removing contaminated clothing, with items categorised as 'Orange = Dirty' and 'Green = Clean'?",
        options: [
            "Dry Decontamination",
            "Improvised Wet Decontamination",
            "Clinical Decontamination - SORT",
            "Emergency Disrobe Packs"
        ],
        correctAnswerIndex: 3,
        explanation: "Emergency Disrobe Packs are used for patients to remove contaminated clothing, with 'Orange = Dirty' and 'Green = Clean' labels."
    },
    {
        question: "What is one's own role in the management of a CBRN(e) release concerning patients?",
        options: [
            "To collect personal belongings for safekeeping.",
            "To encourage patients to move to a safe area and remove contaminated clothing.",
            "To provide immediate definitive medical treatment on scene.",
            "To instruct patients to remain where they are."
        ],
        correctAnswerIndex: 1,
        explanation: "Own role includes encouraging patients to 'Move to a safe area' and 'Remove contaminated clothing'."
    },
    {
        question: "What is the purpose of nerve agent antidotes?",
        options: [
            "To induce vomiting in exposed individuals.",
            "To counteract the effects of nerve agent poisoning.",
            "To act as a general pain reliever.",
            "To treat radiation sickness."
        ],
        correctAnswerIndex: 1,
        explanation: "The use of 'nerve agent antidotes' is outlined within the management of CBRN(e) incidents to counteract their effects."
    },

    // Incident Command and Control (from "C13 - Management of Major Incidents Revision List")
    {
        question: "What does 'interoperability' refer to in the context of major incident management?",
        options: [
            "The ability of one agency to operate independently.",
            "The capacity of different organizations to work together effectively.",
            "The speed at which an incident can be resolved.",
            "The financial cost of inter-agency cooperation."
        ],
        correctAnswerIndex: 1,
        explanation: "Interoperability is the ability of different organizations to work together effectively."
    },
    {
        question: "What is the purpose of the 'incident command and control system'?",
        options: [
            "To centralize all decision-making with a single individual.",
            "To provide a structured framework for managing complex incidents.",
            "To assign blame after an incident.",
            "To limit the involvement of external agencies."
        ],
        correctAnswerIndex: 1, // Changed from 2 to 1 assuming it refers to "a structured framework"
        explanation: "The incident command and control system provides a structured framework for managing major incidents."
    },
    {
        question: "Who is responsible for 'strategic' decisions at a major incident?",
        options: [
            "Front-line responders",
            "Tactical commanders",
            "Strategic commanders (senior leadership setting overall objectives)",
            "Volunteer staff"
        ],
        correctAnswerIndex: 2,
        explanation: "Strategic commanders are responsible for setting overall objectives and policy for the incident."
    },
    {
        question: "What is the importance of 'briefings and debriefings' in major incident management?",
        options: [
            "They are optional and can be skipped.",
            "To ensure information sharing, learning, and accountability.",
            "To assign blame to individuals.",
            "To solely focus on media relations."
        ],
        correctAnswerIndex: 1,
        explanation: "Briefings and debriefings are important for information sharing, learning, and accountability."
    },
    {
        question: "What is a key responsibility of Ambulance services during a major incident?",
        options: [
            "To manage all media communications.",
            "To provide clinical care and transport of casualties.",
            "To conduct criminal investigations.",
            "To cordon off the entire incident area."
        ],
        correctAnswerIndex: 1,
        explanation: "Ambulance services are responsible for providing clinical care and transport of casualties."
    },

    // Hazardous Materials & Substances (from "C12 - Scene Assessment, Environmental Safety Revision List")
    {
        question: "Which of the following is a 'route of entry' for hazardous substances into the body?",
        options: [
            "Observation",
            "Ingestion",
            "Calculation",
            "Prediction"
        ],
        correctAnswerIndex: 1,
        explanation: "Ingestion is a pathway for hazardous substances to enter the body."
    },
    {
        question: "What is the significance of 'Hazard warning panels' on hazardous materials?",
        options: [
            "They indicate the material's market value.",
            "They provide quick information about the type and severity of hazards.",
            "They are for decorative purposes only.",
            "They list the ingredients of the material."
        ],
        correctAnswerIndex: 1,
        explanation: "Hazard warning panels provide crucial, quick information about the hazards of the material."
    },
    {
        question: "Where can information about hazardous materials be obtained?",
        options: [
            "Only from the internet.",
            "From specialized databases, safety data sheets, and emergency guides.",
            "From general newspapers.",
            "Only by contacting the manufacturer directly."
        ],
        correctAnswerIndex: 1,
        explanation: "Information can be obtained from various sources like safety data sheets (SDS) and emergency response guides."
    },
    {
        question: "What does 'DIM' stand for in the context of CBRN(e) incidents, especially for Fire & Rescue Service?",
        options: [
            "Decision, Intervention, Management",
            "Detection, Identification, Monitoring",
            "Decontamination, Isolation, Mitigation",
            "Damage, Inquiry, Movement"
        ],
        correctAnswerIndex: 1,
        explanation: "DIM stands for Detection, Identification and Monitoring."
    },
    {
        question: "What does the CRESS tool help health services identify?",
        options: [
            "The cost of the incident response.",
            "The number of available hospital beds.",
            "The type and nature of the hazardous substance incident through casualty information.",
            "The psychological impact on witnesses."
        ],
        correctAnswerIndex: 2,
        explanation: "The CRESS tool helps health services identify 'the type and nature of the hazardous substance incident' by reporting key information from casualties."
    },
    {
        question: "What kind of onset is more likely with chemical agents and includes bombs within CBRN?",
        options: [
            "Slowly Evolving",
            "Gradual Progression",
            "Sudden Onset",
            "Delayed Reaction"
        ],
        correctAnswerIndex: 2,
        explanation: "Sudden Onset events are 'More likely with chemical' and 'Includes bombs within CBRN'."
    },
    {
        question: "What are the effects of hydrogen sulphide at concentrations of 150-250 ppm?",
        options: [
            "Odour threshold",
            "Slight conjunctivitis after 1hr",
            "Rapid unconsciousness",
            "Death within minutes"
        ],
        correctAnswerIndex: 1,
        explanation: "At 150-250 ppm, hydrogen sulphide causes 'Slight conjunctivitis after 1hr'."
    },
    {
        question: "What is the recommended action for rescuers regarding unresponsive patients in a hydrogen sulphide incident?",
        options: [
            "Immediately attempt retrieval without PPE.",
            "Attempt retrieval only if by HART/Fire Service in appropriate PPE.",
            "Assume they are deceased and do not approach.",
            "Provide immediate mouth-to-mouth resuscitation."
        ],
        correctAnswerIndex: 1,
        explanation: "Patient retrieval 'Should not be attempted unless by HART/Fire Service in appropriate PPE'."
    },
    {
        question: "What is a common sign of a Fentanyl or Carfentanil overdose that responders should look for?",
        options: [
            "Extremely rapid breathing",
            "Pinpoint pupils",
            "Dilated pupils",
            "High fever"
        ],
        correctAnswerIndex: 1,
        explanation: "A common sign of overdose is 'Pinpoint (constricted) pupils'."
    },

    // Additional Hazards and Specific Incidents
    {
        question: "What are some hazards associated with 'Road incidents'?",
        options: [
            "Only minor traffic delays.",
            "Only vehicle damage, no personal harm.",
            "Spillage of fuel, broken glass, unstable vehicles, secondary collisions.",
            "Only a risk to the drivers involved."
        ],
        correctAnswerIndex: 2,
        explanation: "Road incidents involve hazards like spillage, broken glass, unstable vehicles, and secondary collisions."
    },
    {
        question: "When working in an airfield, why do planes have right of way?",
        options: [
            "To make it easier for emergency vehicles.",
            "Because they cannot stop or maneuver as quickly as ground vehicles.",
            "It is a suggestion, not a rule.",
            "To allow passengers to disembark faster."
        ],
        correctAnswerIndex: 1,
        explanation: "Planes have right of way because of their limited maneuverability and stopping capabilities."
    },
    {
        question: "What potential hazard is specific to Electric Vehicle RTC’s?",
        options: [
            "Increased risk of fire from conventional fuel.",
            "Explosion risk from diesel engines.",
            "Hazards from high voltage systems and Lithium Ion Batteries.",
            "No unique hazards compared to petrol cars."
        ],
        correctAnswerIndex: 2,
        explanation: "Electric Vehicle RTC’s involve potential hazards from Lithium Ion Batteries and high voltage systems."
    },
    {
        question: "What does the 'SHOUT' component of the RESCUE FORMULA for water incidents imply?",
        options: [
            "Shouting for help from distant relatives.",
            "Shouting commands at the victim from a safe distance.",
            "Shouting for help from other emergency services only.",
            "Shouting for a boat."
        ],
        correctAnswerIndex: 1,
        explanation: "SHOUT implies attempting to communicate with the victim from a safe distance to provide instructions or reassure."
    },
    {
        question: "What is the characteristic of a 'Sudden Onset' CBRN(e) event?",
        options: [
            "A gradual increase in casualties over days.",
            "More likely with biological agents.",
            "Often includes bombs within CBRN and rapid unconsciousness.",
            "Always goes unrecognized initially."
        ],
        correctAnswerIndex: 2,
        explanation: "Sudden Onset events are 'More likely with chemical' and 'Includes bombs within CBRN', often leading to rapid unconsciousness."
    },
    {
        question: "Which of the following is an example of an 'environmental factor' affecting scene safety?",
        options: [
            "The number of emergency vehicles on scene.",
            "The experience level of the responders.",
            "Weather conditions like heavy rain or strong winds.",
            "The type of communication equipment used."
        ],
        correctAnswerIndex: 2,
        explanation: "Environmental factors include weather conditions which can significantly impact scene safety."
    },
    {
        question: "What is a 'Catastrophic Incident' defined as?",
        options: [
            "Involving tens of patients.",
            "Involving hundreds of patients.",
            "Involving thousands of patients.",
            "An incident with only minor injuries."
        ],
        correctAnswerIndex: 2,
        explanation: "A Catastrophic Incident involves 'thousands of patients'."
    },
    {
        question: "What is the significance of the term 'Hazardous Material pictograms'?",
        options: [
            "They are decorative symbols.",
            "They are used for advertising.",
            "They are standardized graphic symbols indicating specific hazards.",
            "They denote the manufacturer's location."
        ],
        correctAnswerIndex: 2,
        explanation: "Hazardous material pictograms are standardized graphic symbols indicating specific hazards."
    },
    {
        question: "The 'Warm Zone' in incident cordons is for:",
        options: [
            "Specialist Responders only.",
            "Non Specialist's With Appropriate PPE.",
            "The general public without any PPE.",
            "The media and press only."
        ],
        correctAnswerIndex: 1,
        explanation: "The Warm Zone is for 'Non Specialist's With Appropriate PPE'."
    },
    {
        question: "What does the 'Hot Zone' in incident cordons require?",
        options: [
            "No PPE.",
            "Standard uniform.",
            "Non Specialist's with minimal PPE.",
            "Specialist Responders with full appropriate PPE."
        ],
        correctAnswerIndex: 3,
        explanation: "The Hot Zone is for 'Specialist Responders'."
    },
    {
        question: "When is a 'hazard assessment' conducted in a CBRN(e) release?",
        options: [
            "Only after the incident is completely over.",
            "Before any responders arrive on scene.",
            "When responding to potential CBRN(e) release incidents.",
            "Only if there are no visible signs of danger."
        ],
        correctAnswerIndex: 2,
        explanation: "A hazard assessment should be conducted 'when to conduct a hazard assessment' in response to potential CBRN(e) release incidents."
    },
    {
        question: "What is the primary concern when working 'at height' in a hazardous environment?",
        options: [
            "The risk of extreme temperatures.",
            "The risk of falls and falling objects.",
            "The ease of communication.",
            "The availability of fast food."
        ],
        correctAnswerIndex: 1,
        explanation: "Working at height primarily poses risks of falls and falling objects."
    },
    {
        question: "What is the main objective of using the 'METHANE' report?",
        options: [
            "To assign blame for the incident.",
            "To provide a structured initial report for major incidents.",
            "To create a detailed financial analysis.",
            "To plan post-incident recovery efforts."
        ],
        correctAnswerIndex: 1,
        explanation: "METHANE is used for 'Construct a METHANE report' to provide structured initial information."
    },
    {
        question: "Which type of CBRN(e) agent is associated with a 'surge of casualties over hours' and an 'obvious scene or cause'?",
        options: [
            "Slowly Evolving",
            "Sudden Onset",
            "Delayed Impact",
            "Emerging Threat"
        ],
        correctAnswerIndex: 1,
        explanation: "Sudden Onset events are characterized by a 'Surge of casualties over hours' and an 'Obvious scene or cause'."
    },
    {
        question: "What is 'HINs' (Hazard Identification Numbers) significance on hazardous material labels?",
        options: [
            "They indicate the date of manufacture.",
            "They provide information about the specific hazards and emergency action codes.",
            "They are for internal company use only.",
            "They represent the batch number of the product."
        ],
        correctAnswerIndex: 1,
        explanation: "Hazard Identification Numbers (HINs) provide specific hazard and emergency action information."
    },
    {
        question: "What is an 'Accidental chemical exposure' an example of?",
        options: [
            "A CBRN(e) incident.",
            "A Mass Casualty Incident.",
            "A HazMat event.",
            "A Catastrophic Incident."
        ],
        correctAnswerIndex: 2,
        explanation: "Accidental chemical exposures are listed under HazMat Events."
    },
    {
        question: "In the context of 'Water Incidents', what does 'Deceptive speed of water' refer to?",
        options: [
            "The water always looks faster than it is.",
            "The water appears slow but can be very powerful and dangerous.",
            "The speed of water changes rapidly without warning.",
            "It refers to the speed of boats on the water."
        ],
        correctAnswerIndex: 1,
        explanation: "Deceptive speed of water means it can appear slow but possess significant force."
    },
    {
        question: "What type of decontamination involves using minimal water and often includes brushing off powders?",
        options: [
            "Improvised Wet Decontamination",
            "Dry Decontamination",
            "Clinical Decontamination - SORT",
            "Emergency Disrobe Packs"
        ],
        correctAnswerIndex: 1,
        explanation: "Dry Decontamination typically involves removing contaminated clothing and brushing off dry agents."
    },
    {
        question: "What is a key consideration when utilizing 'extra resources' at a major incident?",
        options: [
            "To always decline additional help.",
            "To ensure they are properly managed and integrated into the response.",
            "To send them home if not immediately needed.",
            "To only use resources that are familiar with the area."
        ],
        correctAnswerIndex: 1,
        explanation: "The importance of utilizing 'extra resources' implies effective management and integration."
    },
    {
        question: "Which of these is a listed hazard during 'Rail incidents'?",
        options: [
            "Slow-moving trains only.",
            "No overhead electric lines.",
            "The risk of secondary collisions and electrocution from overhead lines/third rail.",
            "Only a risk to train drivers."
        ],
        correctAnswerIndex: 2,
        explanation: "Rail incidents involve hazards like secondary collisions and electrocution from overhead lines/third rail."
    },
    {
        question: "What defines 'Hazardous materials and substances'?",
        options: [
            "Any material that is liquid.",
            "Materials that pose a risk to health, safety, or the environment.",
            "Only materials that are explosive.",
            "Only materials found in industrial settings."
        ],
        correctAnswerIndex: 1,
        explanation: "Hazardous materials and substances are those that pose a risk to health, safety, or the environment."
    },
    {
        question: "What is the significance of 'Signal Words' on hazardous material labels?",
        options: [
            "They are marketing terms.",
            "They indicate the severity of the hazard ('Danger' or 'Warning').",
            "They tell you where to buy the product.",
            "They specify the color of the material."
        ],
        correctAnswerIndex: 1,
        explanation: "Signal words indicate the severity of the hazard, such as 'Danger' (more severe) or 'Warning' (less severe)."
    },
    {
        question: "What is an 'Outer Cordon' used for in scene management?",
        options: [
            "To prevent entry for all personnel.",
            "To define the immediate danger zone.",
            "To create a safe perimeter and control access for non-essential personnel.",
            "To perform decontamination."
        ],
        correctAnswerIndex: 2,
        explanation: "The Outer Cordon creates a safe perimeter for support functions and controls access for non-essential personnel."
    },
    {
        question: "What is the purpose of 'handovers' in major incident management?",
        options: [
            "To transfer responsibility and information effectively between shifts or arriving crews.",
            "To assign blame for mistakes.",
            "To delay the response.",
            "To eliminate the need for future communication."
        ],
        correctAnswerIndex: 0, // This is standard practice in incident management for continuity
        explanation: "Handovers ensure the effective transfer of information and responsibility between personnel."
    },
    {
        question: "What information should be gathered when assessing the 'presenting complaint' from a patient's perspective?",
        options: [
            "Their full life story.",
            "What they feel is wrong and their symptoms.",
            "Their financial status.",
            "Their political views."
        ],
        correctAnswerIndex: 1,
        explanation: "Establishing the presenting complaint from the patient's perspective means understanding their chief complaint and symptoms."
    },
    {
        question: "What are the common dangers associated with 'Confined Spaces'?",
        options: [
            "Only loud noises.",
            "Risk of entrapment, hazardous atmospheres, lack of oxygen, and toxic gases.",
            "Excessive light exposure.",
            "Only comfortable working conditions."
        ],
        correctAnswerIndex: 1,
        explanation: "Confined spaces can have hazards like entrapment, hazardous atmospheres, and oxygen deficiency."
    },
    {
        question: "What is the responsibility of the 'Attendant' if first on scene at a major incident?",
        options: [
            "To drive the ambulance away from the scene, very fast!.",
            "Assume the role of Operational Commander (OC) until relieved by trained Ambulance Commander, Don PPE, assess scene and carry out a METHANE to ambulance Control.",
            "To conduct initial patient assessment and assist the driver's role.",
            "Treat the first person you see."
        ],
        correctAnswerIndex: 1,
        explanation: "The attendant's role via NARU Action card is to park as near scene as safety permits, provide intial windscreen report, assume role as OC, Don PPE, DO NOT ATTEMPT RESCUE OR TREATMENT OF CASUALTIES and provide a METHANE to control."
    },
    {
        question: "What are 'standard communication methods' essential for in major incidents?",
        options: [
            "To create confusion among agencies.",
            "To ensure clear, concise, and consistent information exchange.",
            "To limit information to a select few.",
            "To delay decision-making."
        ],
        correctAnswerIndex: 1,
        explanation: "Standard communication methods ensure clear, concise, and consistent information exchange during multi-agency incidents."
    },
    {
        question: "What defines 'Over-triaging'?",
        options: [
            "Underestimating the severity of injuries.",
            "Categorizing patients as more critical than they truly are.",
            "Skipping the triage process entirely.",
            "Providing too little treatment."
        ],
        correctAnswerIndex: 1,
        explanation: "Over-triaging means categorizing patients as more severe than they are, potentially leading to misallocation of resources."
    },
    {
        question: "What defines 'Under-triaging'?",
        options: [
            "Overestimating the severity of injuries.",
            "Categorizing patients as less critical than they truly are, potentially delaying vital treatment.",
            "Applying too much treatment.",
            "Only assessing patients who can walk."
        ],
        correctAnswerIndex: 1,
        explanation: "Under-triaging means categorizing patients as less critical, which could delay life-saving treatment."
    },
    {
        question: "Why is 'Recording triage findings' important?",
        options: [
            "It is optional and rarely done.",
            "To create unnecessary paperwork.",
            "For continuity of care, resource allocation, and post-incident analysis.",
            "Only for legal purposes."
        ],
        correctAnswerIndex: 2,
        explanation: "Recording triage findings is crucial for continuity of care, guiding resource allocation, and enabling post-incident analysis."
    },
    {
        question: "What type of incident might involve 'staffing crisis' as a 'Rising Tide' event?",
        options: [
            "A sudden explosion.",
            "A developing epidemic affecting staff numbers.",
            "A single vehicle collision.",
            "An internal dispute."
        ],
        correctAnswerIndex: 1,
        explanation: "A 'Rising Tide' incident can be a 'developing epidemic, or staffing crisis'."
    },
    {
        question: "What does 'SOR' refer to in the context of Ambulance Response to HazMat / CBRN(e) Incidents?",
        options: [
            "Strategic Operational Response",
            "Specialist Operational Response",
            "Standard Operating Regulations",
            "Scene Observation and Reporting"
        ],
        correctAnswerIndex: 1,
        explanation: "SOR stands for Specialist Operational Response."
    },
    {
        question: "What is a primary clinical responsibility of Ambulance services during a HazMat/CBRN(e) incident?",
        options: [
            "Mass decontamination - NHS Support",
            "Lead on criminal investigations",
            "Managing fire suppression",
            "Setting up cordons"
        ],
        correctAnswerIndex: 0,
        explanation: "Ambulance services provide 'Mass decontamination - NHS Support' alongside other agencies."
    },
    {
        question: "Which of the following describes a key principle for responders when dealing with HazMat/CBRN incidents?",
        options: [
            "Always be the first to enter the hot zone.",
            "Use caution and keep a safe distance to avoid exposure to themselves.",
            "Withhold information from the control room until the scene is fully clear.",
            "Prioritize collecting evidence over personal safety."
        ],
        correctAnswerIndex: 1,
        explanation: "Responders must 'Use caution and keep a safe distance to avoid exposure to themselves'."
    },
    {
        question: "What is the primary role of 'Subsequent crews' arriving on scene at a major incident?",
        options: [
            "To take over command immediately.",
            "To observe from a distance without engaging.",
            "To integrate into the existing command structure and follow assigned roles.",
            "To provide unsolicited advice to the first crew."
        ],
        correctAnswerIndex: 2,
        explanation: "Subsequent crews integrate into the established command structure and carry out assigned roles effectively."
    },
    {
        question: "What is the potential impact of 'Bio Hazards' during water incidents?",
        options: [
            "They make the water colder.",
            "They can cause illness or infection through contaminated water.",
            "They improve water visibility.",
            "They act as natural filters."
        ],
        correctAnswerIndex: 1,
        explanation: "Bio Hazards in water can lead to illness or infection."
    },
    {
        question: "What hazard is specifically mentioned for LGV/HVG (Large Goods Vehicle/Heavy Goods Vehicle) RTCs?",
        options: [
            "Only minor fuel leaks.",
            "Increased difficulty in extrication due to vehicle size and structure.",
            "No specific hazards compared to cars.",
            "Always involves hazardous cargo."
        ],
        correctAnswerIndex: 1,
        explanation: "LGV/HVG RTCs often involve increased difficulty in extrication due to vehicle size and construction."
    },
    {
        question: "What is 'Clinical Decontamination - SORT' primarily focused on?",
        options: [
            "Decontaminating equipment only.",
            "Providing immediate clinical care alongside decontamination for specific casualties.",
            "Large-scale public decontamination.",
            "Decontaminating a building."
        ],
        correctAnswerIndex: 1,
        explanation: "Clinical Decontamination - SORT refers to specific clinical procedures integrated with decontamination for casualties."
    },
    {
        question: "What type of incident often involves 'crowd control' as a key police responsibility?",
        options: [
            "Small, isolated domestic incidents.",
            "Major incidents with public presence or media interest.",
            "Routine traffic stops.",
            "Internal office disputes."
        ],
        correctAnswerIndex: 1,
        explanation: "Crowd control is a key police responsibility at major incidents with public or media involvement."
    },
    {
        question: "What is the aim of 'standard decision-making processes' in major incident management?",
        options: [
            "To delay decisions as much as possible.",
            "To ensure consistent, effective, and timely decision-making across agencies.",
            "To allow individual responders to make independent decisions without coordination.",
            "To avoid making any decisions at all."
        ],
        correctAnswerIndex: 1,
        explanation: "Standard decision-making processes ensure consistent, effective, and timely decisions in multi-agency responses."
    },
    {
        question: "What is a 'Runway Visual Range (RVR)' related to, in aviation incidents?",
        options: [
            "The distance an aircraft can travel.",
            "The visibility on a runway.",
            "The range of airport radio communication.",
            "The maximum speed for aircraft."
        ],
        correctAnswerIndex: 1,
        explanation: "RVR refers to the visibility on an airport runway, which is critical for aircraft operations and emergency response."
    },
    {
        question: "What should responders do regarding 'Planes have right of way' when on an airfield?",
        options: [
            "Always ignore them to get to the scene faster.",
            "Obey this rule, as planes cannot stop or maneuver like ground vehicles.",
            "Only applies if there are passengers on board.",
            "It's a suggestion, not a strict rule."
        ],
        correctAnswerIndex: 1,
        explanation: "Responders must 'Obey all signs & Instructions' including that planes have right of way."
    },
    {
        question: "What type of incident is 'Buncfield Fuel Farm Fire (Dec 2005)' an example of?",
        options: [
            "A CBRN(e) incident.",
            "A major HazMat event.",
            "A minor internal incident.",
            "A biological attack."
        ],
        correctAnswerIndex: 1,
        explanation: "The Buncfield Fuel Farm Fire is given as an example of a HazMat event."
    },
    {
        question: "What is a major concern with 'Unstable Street Furniture' during water incidents or flooding?",
        options: [
            "They are easily moved by water and can become hazards.",
            "They block views of the water.",
            "They are good to use as flotation devices.",
            "They provide shelter from the rain."
        ],
        correctAnswerIndex: 0,
        explanation: "Unstable Street Furniture can be moved by water, becoming dangerous projectiles or obstacles."
    },
    {
        question: "What are the common symptoms of 'Carbon Monoxide Poisoning'?",
        options: [
            "Bright red skin and hyperactivity.",
            "Headache, dizziness, nausea, flu-like symptoms, and confusion.",
            "Severe skin rashes.",
            "Increased heart rate and high fever."
        ],
        correctAnswerIndex: 1,
        explanation: "Common CO poisoning symptoms include headache, dizziness, nausea, and confusion."
    },
    {
        question: "What is the importance of 'Utilise airfield experts' when responding to an aviation incident on an airfield?",
        options: [
            "They will take over all emergency operations.",
            "They provide valuable local knowledge and specific airport procedures.",
            "They are responsible for media relations.",
            "They are just there for observation."
        ],
        correctAnswerIndex: 1,
        explanation: "Utilizing airfield experts provides crucial local knowledge and procedural guidance."
    },
    {
        question: "What is a key difference in response between 'Rural Vs. Urban' aviation incidents?",
        options: [
            "Rural incidents are always smaller.",
            "Urban incidents are always more complex due to population density and infrastructure.",
            "Rural incidents have more resources available.",
            "There is no difference in response."
        ],
        correctAnswerIndex: 1,
        explanation: "Urban incidents are typically more complex due to population density, infrastructure, and access challenges."
    },
    {
        question: "Who is responsible for 'Operational' decisions at a major incident?",
        options: [
            "Strategic commanders only.",
            "The most junior staff.",
            "Those managing immediate tasks and resources at the scene.",
            "Government officials."
        ],
        correctAnswerIndex: 2,
        explanation: "Operational commanders manage the immediate tasks and deployment of resources at the scene level."
    },
    {
        question: "What is the 'Driver’s role' if first on scene at a major incident?",
        options: [
            "To immediately drive to the nearest hospital.",
            "To conduct an initial scene assessment and provide a METHANE report.",
            "To direct all other emergency services.",
            "To solely focus on treating the most injured patient."
        ],
        correctAnswerIndex: 1,
        explanation: "The driver's role often includes conducting the initial scene assessment and providing key information like a METHANE report."
    },
    {
        question: "What does 'Catastrophic Incident: Involving thousands of patients' highlight about this incident type?",
        options: [
            "It is a minor event.",
            "It requires minimal resources.",
            "It is of an extremely large scale, overwhelming local resources.",
            "It only affects animals."
        ],
        correctAnswerIndex: 2,
        explanation: "Involving thousands of patients signifies an extremely large-scale event, likely overwhelming local resources."
    },
    {
        question: "What is the significance of 'Danger labels' on hazardous materials?",
        options: [
            "They are purely for aesthetic purposes.",
            "They indicate a more severe hazard than 'Warning' labels.",
            "They mean the material is safe to handle without PPE.",
            "They are used for general household products."
        ],
        correctAnswerIndex: 1,
        explanation: "Danger labels indicate a more severe hazard compared to 'Warning' labels."
    },
    {
        question: "What is the common term for 'Emergency Preparedness, Resilience and Response'?",
        options: [
            "EPR",
            "EPRR",
            "EPAR",
            "ERRS"
        ],
        correctAnswerIndex: 1,
        explanation: "The common acronym for Emergency Preparedness, Resilience and Response is EPRR."
    },
    {
        question: "Which type of CBRN(e) agent causes symptoms like 'Pulmonary oedema and haemorrhage' and 'Rash and skin blistering'?",
        options: [
            "Nerve Agent",
            "Blistering Agent",
            "Blood Agent",
            "Radiological Agent"
        ],
        correctAnswerIndex: 1,
        explanation: "Blistering agents are known to cause pulmonary oedema, haemorrhage, rash, and skin blistering."
    },
    {
        question: "What are 'Hazard Warning Panels' often used on?",
        options: [
            "Office doors.",
            "Vehicles transporting hazardous substances.",
            "Children's toys.",
            "Food packaging."
        ],
        correctAnswerIndex: 1,
        explanation: "Hazard Warning Panels are commonly found on vehicles transporting hazardous substances to inform about their cargo."
    },
    {
        question: "What is the typical timeframe for a 'Sudden Onset' CBRN(e) event to cause casualties?",
        options: [
            "Days or weeks.",
            "Hours.",
            "Months or years.",
            "Immediately upon exposure."
        ],
        correctAnswerIndex: 1,
        explanation: "Sudden Onset events often result in a 'Surge of casualties over hours'."
    },
    {
        question: "Why is 'Dynamic Risk Assessment (DRA)' important at an incident scene?",
        options: [
            "It is only done at the beginning of an incident.",
            "It allows for continuous assessment and adjustment of risks as the situation evolves.",
            "It eliminates all risks.",
            "It is only done by one person."
        ],
        correctAnswerIndex: 1,
        explanation: "Dynamic risk assessment involves continuous evaluation and adjustment of risks as the incident unfolds."
    },
    {
        question: "What is a 'Cloud on the Horizon' major incident characterized by?",
        options: [
            "A minor local issue.",
            "A serious threat such as a significant chemical or nuclear release.",
            "A sudden, unexpected natural disaster.",
            "A historical event."
        ],
        correctAnswerIndex: 1,
        explanation: "A 'Cloud on the Horizon' is 'a serious threat such as a significant chemical or nuclear release'."
    },
    {
        question: "What is an 'Internal Incident' in the context of major incidents?",
        options: [
            "An incident that occurs inside a patient's body.",
            "A fire, breakdown of utilities or violent crime within an organisation.",
            "An incident that requires no external support.",
            "A minor disagreement between colleagues."
        ],
        correctAnswerIndex: 1,
        explanation: "Internal Incidents include 'fire, breakdown of utilities or violent crime' within an organization."
    },
    {
        question: "What is the primary concern with 'Subsurface Objects' during water incidents?",
        options: [
            "They make the water look deeper.",
            "They can cause entanglement or impact injuries.",
            "They are typically harmless.",
            "They are always visible from the surface."
        ],
        correctAnswerIndex: 1,
        explanation: "Subsurface Objects pose risks of entanglement or impact injuries."
    },
    {
        question: "What does 'NO GO' mean in the 'RESCUE FORMULA' for water incidents?",
        options: [
            "Go ahead and jump in the water.",
            "Do not enter the water if it's unsafe or beyond your training/equipment.",
            "Only go if you have a boat.",
            "No one should attempt any rescue."
        ],
        correctAnswerIndex: 1,
        explanation: "'NO GO' signifies that one should not enter the water if it's unsafe or beyond their capabilities/equipment."
    },
    {
        question: "What is an important aspect of 'Mass decontamination - NHS Support' for HazMat/CBRN(e) incidents?",
        options: [
            "It is solely performed by the military.",
            "It involves large-scale decontamination efforts with medical support for numerous casualties.",
            "It only applies to small spills.",
            "It's only for inanimate objects."
        ],
        correctAnswerIndex: 1,
        explanation: "Mass decontamination involves large-scale efforts for numerous casualties, with NHS providing support."
    },
    {
        question: "What is a 'Headline News' type of major incident characterized by?",
        options: [
            "Lack of public awareness.",
            "Public or media alarm about an impending situation.",
            "An incident kept completely secret.",
            "Only affecting a small, isolated group."
        ],
        correctAnswerIndex: 1,
        explanation: "A 'Headline News' incident involves 'public or media alarm about an impending situation'."
    },
    {
        question: "What is the definition of 'Emergency' in the context of major incidents?",
        options: [
            "Any situation requiring a single ambulance.",
            "A serious, unexpected, and often dangerous situation requiring immediate action.",
            "A minor inconvenience.",
            "A planned event."
        ],
        correctAnswerIndex: 1,
        explanation: "An 'Emergency' is a serious, unexpected, and often dangerous situation requiring immediate action."
    },
    {
        question: "What does the 'R' in R-A-R (Recognise, Assess, React) stand for?",
        options: [
            "Response",
            "Report",
            "Recognise",
            "Rescue"
        ],
        correctAnswerIndex: 2,
        explanation: "R-A-R stands for RECOGNISE, ASSESS, REACT."
    },
    {
        question: "What is the importance of 'establishing the presenting complaint' from the patient’s perspective during scene assessment?",
        options: [
            "It is irrelevant to the overall assessment.",
            "It provides crucial subjective information about their symptoms and helps guide care.",
            "It only serves to delay the assessment.",
            "It is only for legal documentation."
        ],
        correctAnswerIndex: 1,
        explanation: "Establishing the presenting complaint from the patient’s perspective helps understand their symptoms and guide assessment."
    },
    {
        question: "What are 'Standard Operating Procedures (SOPs)' useful for in major incident management?",
        options: [
            "To allow for ad-hoc decision making.",
            "To ensure consistency, safety, and efficiency in common tasks.",
            "To discourage inter-agency cooperation.",
            "To increase complexity."
        ],
        correctAnswerIndex: 1,
        explanation: "SOPs help ensure consistency, safety, and efficiency in responding to incidents."
    },
    {
        question: "What kind of incident is 'A developing epidemic' an example of?",
        options: [
            "Big Bang",
            "Rising Tide",
            "Cloud on the Horizon",
            "Internal Incident"
        ],
        correctAnswerIndex: 1,
        explanation: "A 'Rising Tide' incident can be 'a developing epidemic'."
    },
    {
        question: "What is the primary benefit of 'interoperability' when managing major incidents?",
        options: [
            "Reduced communication needs.",
            "Improved coordination and effectiveness among different emergency services.",
            "Increased competition between agencies.",
            "Slower response times."
        ],
        correctAnswerIndex: 1,
        explanation: "Interoperability is important for improved coordination and effectiveness among different emergency services."
    },
    {
        question: "When is a 'scene assessment' typically conducted?",
        options: [
            "Only at the end of an incident.",
            "Continuously throughout the incident, from arrival.",
            "Only by senior commanders.",
            "Only for very minor incidents."
        ],
        correctAnswerIndex: 1,
        explanation: "Scene assessment should be conducted 'continuously throughout the incident, from arrival'."
    },
    {
        question: "What are 'Hazardous Material Signal Words' used for?",
        options: [
            "To indicate the price of the material.",
            "To provide a quick indication of the severity of the hazard ('Danger' or 'Warning').",
            "To identify the manufacturer.",
            "To describe the color of the material."
        ],
        correctAnswerIndex: 1,
        explanation: "Signal Words ('Danger' or 'Warning') indicate the severity of the hazard."
    },
    {
        question: "What are 'Handovers' critical for?",
        options: [
            "Ensuring delays in response.",
            "Maintaining continuity of operations and patient care when personnel change shifts or new crews arrive.",
            "Creating confusion.",
            "Limiting information flow."
        ],
        correctAnswerIndex: 1,
        explanation: "Handovers are crucial for maintaining continuity of operations and patient care."
    },
    {
        question: "What type of incident classification would 'tens of patients' fall under?",
        options: [
            "Mass Casualty Incident",
            "Catastrophic Incident",
            "Major Incident",
            "Minor Event"
        ],
        correctAnswerIndex: 2,
        explanation: "A Major Incident involves 'Tens of patients'."
    },
    {
        question: "What is an important factor to consider regarding 'environmental factors' during scene assessment?",
        options: [
            "Their impact on the aesthetic of the scene.",
            "Their potential to increase operational risk and influence safety measures.",
            "Their ability to reduce the need for PPE.",
            "Their irrelevance to emergency response."
        ],
        correctAnswerIndex: 1,
        explanation: "Environmental factors (like weather, terrain) impact operational risk and necessitate adjusted safety measures."
    },
    {
        question: "What type of incident involves 'thousands of patients'?",
        options: [
            "Major Incident",
            "Mass Casualty Incident",
            "Catastrophic Incident",
            "Minor Incident"
        ],
        correctAnswerIndex: 2,
        explanation: "A Catastrophic Incident involves 'thousands of patients'."
    },
    {
        question: "What is the primary characteristic of the 'Cold Zone' in incident cordons?",
        options: [
            "It's the immediate danger area.",
            "It's where heavy decontamination takes place.",
            "It's a safe area where no PPE is typically required.",
            "It's where the initial casualties are found."
        ],
        correctAnswerIndex: 2,
        explanation: "The Cold Zone is a safe area where 'No PPE' is required."
    },
    {
        question: "What does 'REACH' refer to in the RESCUE FORMULA for water incidents?",
        options: [
            "Reaching out to other agencies for help.",
            "Extending an object to the person in the water from a safe position.",
            "Reaching for a mobile phone.",
            "Reaching for your car keys."
        ],
        correctAnswerIndex: 1,
        explanation: "REACH involves extending an object to the person from a safe position on land."
    },
    {
        question: "What does 'THROW' refer to in the RESCUE FORMULA for water incidents?",
        options: [
            "Throwing a stone at the person.",
            "Throwing a buoyant aid (e.g., rope, life buoy) to the person.",
            "Throwing away your equipment.",
            "Throwing dirt on the person."
        ],
        correctAnswerIndex: 1,
        explanation: "THROW involves throwing a buoyant aid (e.g., rope, life buoy) to the person in the water."
    },
    {
        question: "What does 'ROW' refer to in the RESCUE FORMULA for water incidents?",
        options: [
            "Rowing a boat to the person.",
            "Rowing with other emergency services.",
            "Rowing your hands in the water.",
            "Sitting and waiting."
        ],
        correctAnswerIndex: 0,
        explanation: "ROW involves using a boat to reach the person in the water."
    },
    {
        question: "What does 'GO AND TOW' refer to in the RESCUE FORMULA for water incidents?",
        options: [
            "Immediately swimming to the person.",
            "Going to the person with appropriate training and equipment, and towing them to safety.",
            "Going to get a tow truck.",
            "Going to the bank for money."
        ],
        correctAnswerIndex: 1,
        explanation: "GO AND TOW involves a trained and equipped rescuer entering the water and towing the person to safety."
    },
    {
        question: "What does 'HELO' refer to in the RESCUE FORMULA for water incidents?",
        options: [
            "Calling for help from a friend.",
            "Requesting helicopter assistance.",
            "Using a megaphone.",
            "Saying 'hello' to the person."
        ],
        correctAnswerIndex: 1,
        explanation: "HELO refers to requesting helicopter assistance for rescue."
    },
    {
        question: "What does 'DIVERT FLOW' refer to in the RESCUE FORMULA for water incidents?",
        options: [
            "Diverting attention away from the incident.",
            "Changing the course of the water flow if possible and safe.",
            "Diverting traffic.",
            "Diverting phone calls."
        ],
        correctAnswerIndex: 1,
        explanation: "DIVERT FLOW involves attempting to change the course of the water flow if it is safe and feasible."
    },
    {
        question: "What is an 'Inner Cordon' primarily used for?",
        options: [
            "Providing a safe zone for the public.",
            "Defining the immediate danger or hazard zone.",
            "Media interviews.",
            "Parking emergency vehicles."
        ],
        correctAnswerIndex: 1,
        explanation: "The Inner Cordon defines the immediate danger or hazard zone where only specialist personnel with appropriate PPE should operate."
    },
    {
        question: "What are 'Standard Decision-Making Processes' important for in multi-agency incidents?",
        options: [
            "To allow each agency to make decisions independently.",
            "To ensure a coordinated and consistent approach to decision-making.",
            "To speed up individual actions without consultation.",
            "To create competition among agencies."
        ],
        correctAnswerIndex: 1,
        explanation: "Standard decision-making processes ensure a coordinated and consistent approach across multiple agencies."
    },
    {
        question: "What is the difference between an 'Amber Light ON' and 'Green Light ON' when responding on an airfield?",
        options: [
            "Amber means clear to proceed, Green means wait.",
            "Amber means wait for escort/clearance, Green means clear to proceed.",
            "They mean the same thing.",
            "Amber is for day, Green is for night."
        ],
        correctAnswerIndex: 1,
        explanation: "On an airfield, 'Amber Light ON' typically means wait, while 'Green Light ON' means clear to proceed."
    },
    {
        question: "What is a 'Runway Guard Light' designed to do on an airfield?",
        options: [
            "Illuminate the runway for landing.",
            "Indicate an intersection with a runway to prevent incursions.",
            "Signal for emergency vehicles to stop.",
            "Show the direction of wind."
        ],
        correctAnswerIndex: 1,
        explanation: "Runway Guard Lights are designed to indicate an intersection with a runway, preventing incursions."
    },
    {
        question: "What is the primary risk associated with 'Unstable Structures'?",
        options: [
            "They are difficult to paint.",
            "They may collapse, causing further injury or entrapment.",
            "They block radio signals.",
            "They are usually made of lightweight materials."
        ],
        correctAnswerIndex: 1,
        explanation: "Unstable structures pose a significant risk of collapse, leading to further injuries or entrapment."
    },
    {
        question: "What is the purpose of 'Hazardous material signal words' like 'Danger' and 'Warning'?",
        options: [
            "To add aesthetic value to the label.",
            "To indicate the level of severity of the hazard.",
            "To suggest a safe storage method.",
            "To promote the product."
        ],
        correctAnswerIndex: 1,
        explanation: "Signal words 'Danger' and 'Warning' indicate the relative severity of the hazard posed by the material."
    },
    {
        question: "What kind of specific hazard is related to 'Coach / Bus' RTCs?",
        options: [
            "Always carrying flammable liquids.",
            "Large number of potential casualties, complex extrication, and vehicle stability issues.",
            "Only minor damage to other vehicles.",
            "No unique hazards compared to cars."
        ],
        correctAnswerIndex: 1,
        explanation: "Coach/Bus RTCs involve a large number of potential casualties, complex extrication challenges, and vehicle stability issues."
    },
    {
        question: "What is the significance of 'Hazard identification numbers (HINs)'?",
        options: [
            "They are random numbers for tracking.",
            "They are used to identify the specific hazards and guide emergency response actions.",
            "They indicate the manufacturing batch.",
            "They refer to the number of people involved in transport."
        ],
        correctAnswerIndex: 1,
        explanation: "Hazard identification numbers (HINs) specifically identify the hazards and guide emergency response."
    },
    {
        question: "What is the main purpose of 'Emergency Disrobe Packs' in a decontamination setting?",
        options: [
            "To provide new clothes for patients.",
            "To facilitate the rapid and safe removal of contaminated clothing for patients.",
            "To store medical equipment.",
            "To provide a place for patients to rest."
        ],
        correctAnswerIndex: 1,
        explanation: "Emergency Disrobe Packs facilitate the rapid and safe removal of contaminated clothing to minimize exposure."
    },
    {
        question: "What is 'Improvised Wet Decontamination'?",
        options: [
            "Using a full, dedicated decontamination shower system.",
            "Using available water sources (e.g., hose, bucket) to wash contaminants off quickly.",
            "Decontaminating items with dry wipes.",
            "Only for chemical spills."
        ],
        correctAnswerIndex: 1,
        explanation: "Improvised Wet Decontamination involves using readily available water sources to rapidly wash off contaminants."
    },
    {
        question: "What is the role of 'Acute Hospital Trusts' in response to HazMat/CBRN(e) incidents?",
        options: [
            "They set up the cordons.",
            "They provide specialized medical treatment for exposed patients.",
            "They lead the search and rescue operations.",
            "They are responsible for public relations."
        ],
        correctAnswerIndex: 1,
        explanation: "Acute Hospital Trusts provide specialized medical treatment for exposed or injured patients."
    },
    {
        question: "What is the 'Mass Casualty Incident: Involving Hundreds of patients' classification primarily meant to indicate?",
        options: [
            "A small-scale event.",
            "An event requiring significant resources and coordinated response.",
            "An incident that can be handled by a single ambulance crew.",
            "A non-serious event."
        ],
        correctAnswerIndex: 1,
        explanation: "Hundreds of patients indicate a significant event requiring substantial resources and coordinated response."
    },
    {
        question: "What does 'EPRR' contribute to within an organization?",
        options: [
            "Decreased overall preparedness.",
            "Enhanced ability to plan for, respond to, and recover from emergencies.",
            "Increased administrative burden with no practical benefit.",
            "Reduction in communication effectiveness."
        ],
        correctAnswerIndex: 1,
        explanation: "EPRR enhances an organization's ability to plan for, respond to, and recover from emergencies."
    },
    {
        question: "Which type of incident involves 'Mass Casualties'?",
        options: [
            "Major Incident",
            "Catastrophic Incident",
            "Mass Casualty Incident",
            "Minor Incident"
        ],
        correctAnswerIndex: 2,
        explanation: "Mass Casualty Incident specifically refers to 'Involving Hundreds of patients'."
    },
    {
        question: "What is a 'Runway Incursion' on an airfield?",
        options: [
            "An authorized entry onto a runway.",
            "Any unauthorized intrusion onto a runway, which is a serious safety concern.",
            "A type of aircraft landing.",
            "A designated parking area for vehicles."
        ],
        correctAnswerIndex: 1,
        explanation: "A runway incursion is any unauthorized intrusion onto a runway, posing a significant safety risk."
    },
    {
        question: "What is the significance of 'Know your airport RVP’s' when responding on an airfield?",
        options: [
            "It means knowing the fastest routes for takeoff.",
            "It refers to knowing the designated Rendezvous Points for emergency services.",
            "It means knowing the types of planes at the airport.",
            "It means knowing all airport staff."
        ],
        correctAnswerIndex: 1,
        explanation: "Knowing your airport RVP's (Rendezvous Points) is crucial for coordinated emergency response."
    },
    {
        question: "What is the primary concern when dealing with a 'Trench' collapse in an industrial incident?",
        options: [
            "The depth of the trench only.",
            "Risk of secondary collapse, entrapment, and hazardous atmospheres.",
            "The amount of mud.",
            "The duration of the incident."
        ],
        correctAnswerIndex: 1,
        explanation: "Trench collapses pose risks of secondary collapse, entrapment, and hazardous atmospheres."
    },
    {
        question: "What kind of incident is 'A serious transport accident or explosion'?",
        options: [
            "Rising Tide",
            "Cloud on the Horizon",
            "Big Bang",
            "Internal Incident"
        ],
        correctAnswerIndex: 2,
        explanation: "A 'Big Bang' incident is 'a serious transport accident or explosion'."
    },
    {
        question: "What does the 'A' in R-A-R (Recognise, Assess, React) stand for?",
        options: [
            "Analyze",
            "Action",
            "Assess",
            "Alert"
        ],
        correctAnswerIndex: 2,
        explanation: "R-A-R stands for RECOGNISE, ASSESS, REACT."
    },
    {
        question: "What is one of the types of 'Biological Agents' mentioned that causes a slow evolving CBRN(e) event?",
        options: [
            "Nerve gas",
            "Anthrax or Smallpox (epidemic potential)",
            "Chlorine gas",
            "Nuclear waste"
        ],
        correctAnswerIndex: 1,
        explanation: "Biological agents like Anthrax or Smallpox are often associated with slowly evolving events with epidemic potential."
    },
    {
        question: "What are 'Hazard Warning Panels' intended to convey?",
        options: [
            "Product advertisements.",
            "Quick visual warnings about the dangers of the substance being transported.",
            "Instructions for cleaning up spills.",
            "Information about the vehicle's maintenance."
        ],
        correctAnswerIndex: 1,
        explanation: "Hazard Warning Panels provide quick visual warnings about the dangers of the transported substance."
    },
    {
        question: "What is 'Improvised Wet Decontamination' typically used for?",
        options: [
            "For full-scale decontamination of large areas.",
            "For rapid, initial decontamination of a small number of casualties using available water sources.",
            "Only for biological agents.",
            "For dry powder removal only."
        ],
        correctAnswerIndex: 1,
        explanation: "Improvised Wet Decontamination is for rapid, initial decontamination using available water, especially for a small number of casualties."
    },
    {
        question: "What is the main role of 'Tactical Commanders' at a major incident?",
        options: [
            "To provide overall policy and strategy.",
            "To manage the immediate scene and direct resources.",
            "To provide logistical support from a remote location.",
            "To oversee all media communications."
        ],
        correctAnswerIndex: 1,
        explanation: "Tactical commanders focus on managing the immediate scene and directing resources to achieve strategic objectives."
    },
    {
        question: "What is the purpose of 'Standard communication methods' in major incident response?",
        options: [
            "To encourage informal communication only.",
            "To ensure clear and consistent information flow between all agencies and responders.",
            "To restrict information to prevent panic.",
            "To make communication more complex."
        ],
        correctAnswerIndex: 1,
        explanation: "Standard communication methods ensure clear and consistent information flow, crucial for multi-agency coordination."
    },
    {
        question: "What does the concept of 'Utilising extra resources' entail for effective incident management?",
        options: [
            "Avoiding the use of additional resources to save costs.",
            "Ensuring that additional personnel and equipment are effectively integrated and deployed.",
            "Only calling for more resources when absolutely necessary and unavoidable.",
            "Relying solely on existing on-scene resources."
        ],
        correctAnswerIndex: 1,
        explanation: "Utilizing extra resources effectively means integrating and deploying them in a way that enhances the overall response."
    },
    {
        question: "What is the primary aim of 'hazard assessment' in a CBRN(e) incident?",
        options: [
            "To determine who is at fault for the incident.",
            "To identify the type and extent of hazards present and inform appropriate safety measures.",
            "To decide on patient transport destinations only.",
            "To calculate the total cost of damage."
        ],
        correctAnswerIndex: 1,
        explanation: "Hazard assessment aims to identify the hazards and guide appropriate safety measures and response."
    },
    {
        question: "What type of hazardous substance affects the central nervous system, leading to rapid unconsciousness and respiratory arrest?",
        options: [
            "Blistering agents",
            "Choking agents",
            "Blood agents (e.g., Cyanide)",
            "Radiological agents"
        ],
        correctAnswerIndex: 2,
        explanation: "Blood agents affect the central nervous system, causing rapid unconsciousness and respiratory arrest."
    },
    {
        question: "What is the significance of 'warning' signal words on hazardous material labels?",
        options: [
            "They indicate a high-level, immediate danger.",
            "They indicate a less severe hazard than 'Danger' but still require caution.",
            "They are for marketing purposes only.",
            "They suggest the product is completely safe."
        ],
        correctAnswerIndex: 1,
        explanation: "Warning signal words indicate a less severe hazard than 'Danger' but still alert to potential risks."
    },
                {
                    question: "Which of these is NOT a Cat 1 responder?",
                options: [
                    "Emergency Services (Police, Fire, Ambulance)",
                    "Local Authorities (local councils)",
                    "Transport Operatores",
                    "Environmental Agencies"
                ],
                correctAnswerIndex: 3,
                explination:"Transport Operators are Cat 2 responders. Cat 1 also includes: HM Coastguard and NHS Trusts."
                },
                {
                    question: "Which of these is NOT a Cat 2 responder?",
                options: [
                    "Utilitiy Companies",
                    "Local Authorities (local councils)",
                    "Transport Operatores",
                    "Harbout authories "
                ],
                correctAnswerIndex: 3,
                explination:"Local Authorities are classed as Cat 1 responders."
                },
                {
                    question: "What does NARU stand for?",
                options: [
                    "National Ambulance Resource Unit",
                    "National Ambulance Resource Utilities",
                    "National Ambulance Resilience Unit",
                    "National Ambulance Resilience Utilities"
                ],
                correctAnswerIndex: 2,
                explination: "NARU (National Ambulance Resilience Unit, supports specialist training to NHS staff focusing on Major Incidence and Hazardous Environments"
                },
    ],
      },
      ];


// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// --- Initial setup: Populate exam buttons on the contents page ---
function initializeExamButtons() {
    examButtonsContainer.innerHTML = '';
    exams.forEach((exam, index) => {
        const button = document.createElement('button');
        button.className = 'exam-btn';
        button.textContent = `${index + 1}. ${exam.title}`;
        button.onclick = () => startExam(index);
        examButtonsContainer.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', initializeExamButtons);

// --- Navigation Functions ---

function goToContentsPage() {
    quizApp.classList.add('hidden');
    resultsPage.classList.add('hidden');
    contentsPage.classList.remove('hidden');
}

function startExam(index) {
    currentExamIndex = index;

    let allExamQuestions = [...exams[index].questions];
    shuffleArray(allExamQuestions);

    questions = allExamQuestions.slice(0, 55);

    currentQuestionIndex = 0;
    score = 0;

    contentsPage.classList.add('hidden');
    resultsPage.classList.add('hidden');
    quizApp.classList.remove('hidden');

    displayQuestion();
}

function retakeQuiz() {
    if (currentExamIndex !== -1) {
        startExam(currentExamIndex);
    } else {
        goToContentsPage();
    }
}

function goToContentsPageFromResults() {
    goToContentsPage();
}

// --- Quiz Logic Functions ---

function displayQuestion() {
    progressBar.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    const current = questions[currentQuestionIndex];

    if (!current) {
        showResultsPage();
        return;
    }

    questionElement.innerText = current.question;
    optionsElement.innerHTML = '';

    const shuffledOptions = [...current.options];
    shuffleArray(shuffledOptions);

    shuffledOptions.forEach((option) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = option;
        button.onclick = () => checkAnswer(current.options.indexOf(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const current = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === current.correctAnswerIndex;

    popupTitle.innerText = isCorrect ? "Correct!" : "Incorrect.";
    popupTitle.classList.remove('correct', 'incorrect');
    popupTitle.classList.add(isCorrect ? 'correct' : 'incorrect');

    popupMessage.innerText = current.explanation;

    if (isCorrect) {
        score++;
    }
    showPopup(popup);
}

// Function to show any popup element
function showPopup(popupElement) {
    popupElement.classList.remove('hidden');
}

// Closes the answer explanation popup and continues
function closePopupAndContinue() {
    popup.classList.add('hidden');
    currentQuestionIndex++;
    displayQuestion();
}

function showResultsPage() {
    quizApp.classList.add('hidden');
    contentsPage.classList.add('hidden');
    resultsPage.classList.remove('hidden');
    finalScoreElement.innerText = `You scored ${score} out of ${questions.length} questions correctly!`;
}

function showDisclaimerPopup() {
    disclaimerPopup.classList.remove('hidden');
}

function closeDisclaimerPopup() {
    disclaimerPopup.classList.add('hidden');
              }
