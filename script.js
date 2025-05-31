// script.js

// 1. The full list of 200 words, with Bengali meanings and a generic example sentence.
//    For each entry, we use: sentence = "This sentence includes the word <word>."
const words = [
  { word: "Abandon", meaning: "পরিত্যাগ করা", sentence: "This sentence includes the word Abandon." },
  { word: "Abate", meaning: "কম শক্তিশালী", sentence: "This sentence includes the word Abate." },
  { word: "Abet", meaning: "উৎসাহিত করা", sentence: "This sentence includes the word Abet." },
  { word: "Accede", meaning: "চাহিদা মেনে নেওয়া", sentence: "This sentence includes the word Accede." },
  { word: "Adapt", meaning: "মানিয়ে নেওয়া", sentence: "This sentence includes the word Adapt." },
  { word: "Adequate", meaning: "পর্যাপ্ত", sentence: "This sentence includes the word Adequate." },
  { word: "Ambivalence", meaning: "অনিশ্চয়তা", sentence: "This sentence includes the word Ambivalence." },
  { word: "Analogous", meaning: "সমান্তরাল", sentence: "This sentence includes the word Analogous." },
  { word: "Anomaly", meaning: "অদ্ভুততা", sentence: "This sentence includes the word Anomaly." },
  { word: "Expect", meaning: "পূর্বাভাস দেওয়া", sentence: "This sentence includes the word Expect." },
  { word: "Antipathy", meaning: "শত্রুতা", sentence: "This sentence includes the word Antipathy." },
  { word: "Apex", meaning: "চূড়া", sentence: "This sentence includes the word Apex." },
  { word: "Apprehension", meaning: "উদ্বেগ", sentence: "This sentence includes the word Apprehension." },
  { word: "Articulate", meaning: "সাবলীল", sentence: "This sentence includes the word Articulate." },
  { word: "Artificial", meaning: "কৃত্রিম", sentence: "This sentence includes the word Artificial." },
  { word: "Assertion", meaning: "দাবি", sentence: "This sentence includes the word Assertion." },
  { word: "Authenticity", meaning: "প্রামাণিকতা", sentence: "This sentence includes the word Authenticity." },
  { word: "Avenue", meaning: "পথ", sentence: "This sentence includes the word Avenue." },
  { word: "Basic", meaning: "মৌলিক", sentence: "This sentence includes the word Basic." },
  { word: "Bear", meaning: "সমর্থন", sentence: "This sentence includes the word Bear." },
  { word: "Berate", meaning: "বকাঝকা করা", sentence: "This sentence includes the word Berate." },
  { word: "Bias", meaning: "পক্ষপাত", sentence: "This sentence includes the word Bias." },
  { word: "Bittersweet", meaning: "টক-মিষ্টি", sentence: "This sentence includes the word Bittersweet." },
  { word: "Boost", meaning: "বৃদ্ধি", sentence: "This sentence includes the word Boost." },
  { word: "Bovine", meaning: "গরুসম্পর্কিত", sentence: "This sentence includes the word Bovine." },
  { word: "Braggart", meaning: "অহংকারী ব্যক্তি", sentence: "This sentence includes the word Braggart." },
  { word: "Brawl", meaning: "লড়াই", sentence: "This sentence includes the word Brawl." },
  { word: "Brevity", meaning: "সংক্ষিপ্ততা", sentence: "This sentence includes the word Brevity." },
  { word: "Burnish", meaning: "পালিশ করা", sentence: "This sentence includes the word Burnish." },
  { word: "Cacophony", meaning: "কর্কশ শব্দমিশ্রণ", sentence: "This sentence includes the word Cacophony." },
  { word: "Candid", meaning: "সোজাসাপ্টা", sentence: "This sentence includes the word Candid." },
  { word: "Capture", meaning: "ধরা", sentence: "This sentence includes the word Capture." },
  { word: "Catalyst", meaning: "উদ্দীপক", sentence: "This sentence includes the word Catalyst." },
  { word: "Cache", meaning: "সঙ্কলন", sentence: "This sentence includes the word Cache." },
  { word: "Censorious", meaning: "সমালোচনামূলক", sentence: "This sentence includes the word Censorious." },
  { word: "Clout", meaning: "আঘাত", sentence: "This sentence includes the word Clout." },
  { word: "Coincide", meaning: "সংঘটিত হওয়া", sentence: "This sentence includes the word Coincide." },
  { word: "Commission", meaning: "প্রস্তাবনা", sentence: "This sentence includes the word Commission." },
  { word: "Comparable", meaning: "অনুরূপ", sentence: "This sentence includes the word Comparable." },
  { word: "Competent", meaning: "যোগ্য", sentence: "This sentence includes the word Competent." },
  { word: "Complacent", meaning: "আত্মসন্তুষ্ট", sentence: "This sentence includes the word Complacent." },
  { word: "Concede", meaning: "স্বীকার করা", sentence: "This sentence includes the word Concede." },
  { word: "Conceive", meaning: "উদ্ভাবন করা", sentence: "This sentence includes the word Conceive." },
  { word: "Conduct", meaning: "পরিচালনা করা", sentence: "This sentence includes the word Conduct." },
  { word: "Constitute", meaning: "গঠন করা", sentence: "This sentence includes the word Constitute." },
  { word: "Course", meaning: "পথ", sentence: "This sentence includes the word Course." },
  { word: "Culmination", meaning: "চূড়ান্ত পর্ব", sentence: "This sentence includes the word Culmination." },
  { word: "Dearth", meaning: "অভাব", sentence: "This sentence includes the word Dearth." },
  { word: "Deference", meaning: "শ্রদ্ধা", sentence: "This sentence includes the word Deference." },
  { word: "Demagogue", meaning: "উস্কানিকারক", sentence: "This sentence includes the word Demagogue." },
  { word: "Demur", meaning: "আপত্তি করা", sentence: "This sentence includes the word Demur." },
  { word: "Deplete", meaning: "খরচ করা", sentence: "This sentence includes the word Deplete." },
  { word: "Desolate", meaning: "শূন্য", sentence: "This sentence includes the word Desolate." },
  { word: "Devise", meaning: "উদ্ভাবন করা", sentence: "This sentence includes the word Devise." },
  { word: "Dilemma", meaning: "দ্বিধা", sentence: "This sentence includes the word Dilemma." },
  { word: "Diluvial", meaning: "জলপ্রলয়", sentence: "This sentence includes the word Diluvial." },
  { word: "Diminish", meaning: "হ্রাস পা", sentence: "This sentence includes the word Diminish." },
  { word: "Dire", meaning: "আশাহীন", sentence: "This sentence includes the word Dire." },
  { word: "Disdain", meaning: "অবজ্ঞা", sentence: "This sentence includes the word Disdain." },
  { word: "Dispassionate", meaning: "উদাসীন", sentence: "This sentence includes the word Dispassionate." },
  { word: "Doctrine", meaning: "মত", sentence: "This sentence includes the word Doctrine." },
  { word: "Effluvia", meaning: "ক্ষতিকর দুর্গন্ধ", sentence: "This sentence includes the word Effluvia." },
  { word: "Eloquent", meaning: "সাবলীল ভাষণদক্ষতা", sentence: "This sentence includes the word Eloquent." },
  { word: "Eminent", meaning: "উচ্চ অবস্থান", sentence: "This sentence includes the word Eminent." },
  { word: "Emulate", meaning: "অনুকরণ করা", sentence: "This sentence includes the word Emulate." },
  { word: "Endure", meaning: "সহ্য করা", sentence: "This sentence includes the word Endure." },
  { word: "Entail", meaning: "হিসাব লিখা", sentence: "This sentence includes the word Entail." },
  { word: "Specify", meaning: "উল্লেখ করা", sentence: "This sentence includes the word Specify." },
  { word: "Epochal", meaning: "তাৎপর্যপূর্ণ", sentence: "This sentence includes the word Epochal." },
  { word: "Erratic", meaning: "অস্থিতিশীল", sentence: "This sentence includes the word Erratic." },
  { word: "Establish", meaning: "প্রতিষ্ঠা করা", sentence: "This sentence includes the word Establish." },
  { word: "Excel", meaning: "শীর্ষস্থানে থাকা", sentence: "This sentence includes the word Excel." },
  { word: "Exploit", meaning: "শোষণ করা", sentence: "This sentence includes the word Exploit." },
  { word: "Expound", meaning: "ব্যাখ্যা করা", sentence: "This sentence includes the word Expound." },
  { word: "Ferocity", meaning: "হিংসা", sentence: "This sentence includes the word Ferocity." },
  { word: "Flourish", meaning: "সমৃদ্ধি লাভ করা", sentence: "This sentence includes the word Flourish." },
  { word: "Forcible", meaning: "শক্তিশালী", sentence: "This sentence includes the word Forcible." },
  { word: "Frankly", meaning: "সরাসরি", sentence: "This sentence includes the word Frankly." },
  { word: "Fundamental", meaning: "মৌলিক", sentence: "This sentence includes the word Fundamental." },
  { word: "Galvanizing", meaning: "তীব্র আঘাত", sentence: "This sentence includes the word Galvanizing." },
  { word: "Geriatric", meaning: "বৃদ্ধাঙ্গন সম্পর্কিত", sentence: "This sentence includes the word Geriatric." },
  { word: "Hostile", meaning: "আক্রমণাত্মক", sentence: "This sentence includes the word Hostile." },
  { word: "Hubris", meaning: "অহংকার", sentence: "This sentence includes the word Hubris." },
  { word: "Impart", meaning: "প্রচার করা", sentence: "This sentence includes the word Impart." },
  { word: "Impartiality", meaning: "পক্ষপাতিত্ব", sentence: "This sentence includes the word Impartiality." },
  { word: "Imposition", meaning: "জবরদস্তি", sentence: "This sentence includes the word Imposition." },
  { word: "Indifference", meaning: "উদাসীনতা", sentence: "This sentence includes the word Indifference." },
  { word: "Indulge", meaning: "উৎসর্গ করা", sentence: "This sentence includes the word Indulge." },
  { word: "Importunate", meaning: "অনবরত", sentence: "This sentence includes the word Importunate." },
  { word: "Innovative", meaning: "উদ্ভাবনী", sentence: "This sentence includes the word Innovative." },
  { word: "Inversion", meaning: "উল্টো", sentence: "This sentence includes the word Inversion." },
  { word: "Lament", meaning: "করুণ ধ্বনি করা", sentence: "This sentence includes the word Lament." },
  { word: "Locomotion", meaning: "গতি", sentence: "This sentence includes the word Locomotion." },
  { word: "Malicious", meaning: "দ্বেষপূর্ণ", sentence: "This sentence includes the word Malicious." },
  { word: "Materialistic", meaning: "বাস্তববান", sentence: "This sentence includes the word Materialistic." },
  { word: "Modest", meaning: "সাধারণ", sentence: "This sentence includes the word Modest." },
  { word: "Mawkish", meaning: "আবেগময়", sentence: "This sentence includes the word Mawkish." },
  { word: "Novel", meaning: "উপন্যাস", sentence: "This sentence includes the word Novel." },
  { word: "Null", meaning: "অবৈধ", sentence: "This sentence includes the word Null." },
  { word: "Objectify", meaning: "অবমাননা করা", sentence: "This sentence includes the word Objectify." },
  { word: "Omnipotent", meaning: "সর্বশক্তিমান", sentence: "This sentence includes the word Omnipotent." },
  { word: "Onset", meaning: "শুরু", sentence: "This sentence includes the word Onset." },
  { word: "Opine", meaning: "পরামর্শ দেওয়া", sentence: "This sentence includes the word Opine." },
  { word: "Oust", meaning: "বিতাড়িত করা", sentence: "This sentence includes the word Oust." },
  { word: "Pandemic", meaning: "ব ব্যাপক", sentence: "This sentence includes the word Pandemic." },
  { word: "Paramount", meaning: "সর্বাগ্রে", sentence: "This sentence includes the word Paramount." },
  { word: "Patrician", meaning: "অভিজাত", sentence: "This sentence includes the word Patrician." },
  { word: "Peculiar", meaning: "অদ্ভুত", sentence: "This sentence includes the word Peculiar." },
  { word: "Potent", meaning: "শক্তিশালী", sentence: "This sentence includes the word Potent." },
  { word: "Perish", meaning: "পতন", sentence: "This sentence includes the word Perish." },
  { word: "Persecute", meaning: "নির্যাতন করা", sentence: "This sentence includes the word Persecute." },
  { word: "Petulant", meaning: "খিটখিটে", sentence: "This sentence includes the word Petulant." },
  { word: "Pinnacle", meaning: "শীর্ষ", sentence: "This sentence includes the word Pinnacle." },
  { word: "Pitiable", meaning: "দুঃখজনক", sentence: "This sentence includes the word Pitiable." },
  { word: "Plausible", meaning: "বিশ্বাসযোগ্য", sentence: "This sentence includes the word Plausible." },
  { word: "Prompt", meaning: "উদ্রেক করা", sentence: "This sentence includes the word Prompt." },
  { word: "Polyglot", meaning: "বহুভাষাবিদ", sentence: "This sentence includes the word Polyglot." },
  { word: "Provocative", meaning: "ক্রুদ্ধ", sentence: "This sentence includes the word Provocative." },
  { word: "Prescribe", meaning: "নির্দেশ দেওয়া", sentence: "This sentence includes the word Prescribe." },
  { word: "Prestidigitation", meaning: "তছকাভঙ্গ", sentence: "This sentence includes the word Prestidigitation." },
  { word: "Prohibit", meaning: "নিষিদ্ধকরণ", sentence: "This sentence includes the word Prohibit." },
  { word: "Placid", meaning: "শান্তিপূর্ণ", sentence: "This sentence includes the word Placid." },
  { word: "Prosecute", meaning: "দায়েরকৃত মামলা", sentence: "This sentence includes the word Prosecute." },
  { word: "Quantitative", meaning: "পরিমাণগত", sentence: "This sentence includes the word Quantitative." },
  { word: "Quirk", meaning: "অদ্ভুততা", sentence: "This sentence includes the word Quirk." },
  { word: "Quarry", meaning: "পাথর খনন করা", sentence: "This sentence includes the word Quarry." },
  { word: "Ramify", meaning: "শাখা-বিস্তার করা", sentence: "This sentence includes the word Ramify." },
  { word: "Rancor", meaning: "তিক্ততা", sentence: "This sentence includes the word Rancor." },
  { word: "Rarefy", meaning: "পাতলা হয়ে যাওয়া", sentence: "This sentence includes the word Rarefy." },
  { word: "Rash", meaning: "বেপরোয়া", sentence: "This sentence includes the word Rash." },
  { word: "Raw", meaning: "কাঁচা", sentence: "This sentence includes the word Raw." },
  { word: "Reapproach", meaning: "পুনরায় কাছে আসা", sentence: "This sentence includes the word Reapproach." },
  { word: "Reform", meaning: "সংস্কার করা", sentence: "This sentence includes the word Reform." },
  { word: "Refute", meaning: "তর্কপূর্বক খণ্ডন করা", sentence: "This sentence includes the word Refute." },
  { word: "Reinforce", meaning: "শক্তিশালী করা", sentence: "This sentence includes the word Reinforce." },
  { word: "Resilient", meaning: "দৃঢ়", sentence: "This sentence includes the word Resilient." },
  { word: "Revile", meaning: "সমালোচনা করা", sentence: "This sentence includes the word Revile." },
  { word: "Rife", meaning: "ব ব্যাপক", sentence: "This sentence includes the word Rife." },
  { word: "Sanctimonious", meaning: "পবিত্রতম", sentence: "This sentence includes the word Sanctimonious." },
  { word: "Satiated", meaning: "অতিরিক্ত", sentence: "This sentence includes the word Satiated." },
  { word: "Savvy", meaning: "প্রখরতা", sentence: "This sentence includes the word Savvy." },
  { word: "Scandalous", meaning: "কলঙ্কজনক", sentence: "This sentence includes the word Scandalous." },
  { word: "Scorn", meaning: "অবজ্ঞা", sentence: "This sentence includes the word Scorn." },
  { word: "Sagacious", meaning: "প্রজ্ঞাবান", sentence: "This sentence includes the word Sagacious." },
  { word: "Scrupulous", meaning: "যত্নশীল", sentence: "This sentence includes the word Scrupulous." },
  { word: "Sedition", meaning: "হট্টগোল", sentence: "This sentence includes the word Sedition." },
  { word: "Sacrosanct", meaning: "পবিত্রতম", sentence: "This sentence includes the word Sacrosanct." },
  { word: "Sentiment", meaning: "অনুভূতি", sentence: "This sentence includes the word Sentiment." },
  { word: "Sheer", meaning: "সম্পূর্ণ", sentence: "This sentence includes the word Sheer." },
  { word: "Sallow", meaning: "হলদে", sentence: "This sentence includes the word Sallow." },
  { word: "Simple", meaning: "সহজ", sentence: "This sentence includes the word Simple." },
  { word: "Sinecure", meaning: "সহজপন্থী", sentence: "This sentence includes the word Sinecure." },
  { word: "Spawn", meaning: "অনেক সন্তান", sentence: "This sentence includes the word Spawn." },
  { word: "Spur", meaning: "প্ররোচনা", sentence: "This sentence includes the word Spur." },
  { word: "Subordinate", meaning: "অনুজ", sentence: "This sentence includes the word Subordinate." },
  { word: "Stroke", meaning: "শক্তিশালী করা", sentence: "This sentence includes the word Stroke." },
  { word: "Significant", meaning: "গুরুত্বপূর্ণ", sentence: "This sentence includes the word Significant." },
  { word: "Subtle", meaning: "সূক্ষ্ম", sentence: "This sentence includes the word Subtle." },
  { word: "Ample", meaning: "প্রচুর", sentence: "This sentence includes the word Ample." },
  { word: "Surly", meaning: "খিটখিটে", sentence: "This sentence includes the word Surly." },
  { word: "Surmount", meaning: "অতিক্রম করা", sentence: "This sentence includes the word Surmount." },
  { word: "Sybarite", meaning: "ইন্দ্রিয়ভোগী", sentence: "This sentence includes the word Sybarite." },
  { word: "Tactful", meaning: "সহানুভূতিশীল", sentence: "This sentence includes the word Tactful." },
  { word: "Taut", meaning: "টানটান", sentence: "This sentence includes the word Taut." },
  { word: "Teeming", meaning: "পূর্ণ হওয়া", sentence: "This sentence includes the word Teeming." },
  { word: "Temperament", meaning: "স্বভাব", sentence: "This sentence includes the word Temperament." },
  { word: "Tentative", meaning: "আনুমানিক", sentence: "This sentence includes the word Tentative." },
  { word: "Terse", meaning: "হঠাৎ", sentence: "This sentence includes the word Terse." },
  { word: "Transparent", meaning: "স্পষ্ট", sentence: "This sentence includes the word Transparent." },
  { word: "Tremendous", meaning: "চরম", sentence: "This sentence includes the word Tremendous." },
  { word: "Trounce", meaning: "হারানো", sentence: "This sentence includes the word Trounce." },
  { word: "Ubiquitous", meaning: "সর্বত্র", sentence: "This sentence includes the word Ubiquitous." },
  { word: "Unadorned", meaning: "সজ্জাহীন", sentence: "This sentence includes the word Unadorned." },
  { word: "Undermine", meaning: "ক্ষয় করা", sentence: "This sentence includes the word Undermine." },
  { word: "Unwitting", meaning: "অচেতন", sentence: "This sentence includes the word Unwitting." },
  { word: "Underscore", meaning: "নিচেদেয়ে চিহ্নিত", sentence: "This sentence includes the word Underscore." },
  { word: "Undulate", meaning: "ঢেউয়ের মত ওঠা", sentence: "This sentence includes the word Undulate." },
  { word: "Unilateral", meaning: "একতরফাভিত্তিক", sentence: "This sentence includes the word Unilateral." },
  { word: "Upbraid", meaning: "দোষারোপ করা", sentence: "This sentence includes the word Upbraid." },
  { word: "Unjust", meaning: "অন্যায়", sentence: "This sentence includes the word Unjust." },
  { word: "Uproarious", meaning: "দারুণ মজাদার", sentence: "This sentence includes the word Uproarious." },
  { word: "Unmitigated", meaning: "সম্পূর্ণ", sentence: "This sentence includes the word Unmitigated." },
  { word: "Unprecedented", meaning: "অনন্য", sentence: "This sentence includes the word Unprecedented." },
  { word: "Unveil", meaning: "উন্মোচন করা", sentence: "This sentence includes the word Unveil." },
  { word: "Urge", meaning: "আকাঙ্ক্ষা", sentence: "This sentence includes the word Urge." },
  { word: "Upshot", meaning: "ফলাফল", sentence: "This sentence includes the word Upshot." },
  { word: "Usury", meaning: "সুদে টাকা ধার", sentence: "This sentence includes the word Usury." },
  { word: "Validate", meaning: "প্রমাণ করা", sentence: "This sentence includes the word Validate." },
  { word: "Viability", meaning: "টেকসই অবস্থা", sentence: "This sentence includes the word Viability." },
  { word: "Vital", meaning: "গুরুত্বপূর্ণ", sentence: "This sentence includes the word Vital." },
  { word: "Venal", meaning: "দুস্কৃতিকারী", sentence: "This sentence includes the word Venal." },
  { word: "Vow", meaning: "শপথ", sentence: "This sentence includes the word Vow." },
  { word: "Vital (again)", meaning: "গুরুত্বপূর্ণ", sentence: "This sentence includes the word Vital." },
  { word: "Warrant", meaning: "অনুমোদন", sentence: "This sentence includes the word Warrant." },
  { word: "Winsome", meaning: "আকর্ষণীয়", sentence: "This sentence includes the word Winsome." },
  { word: "Wry", meaning: "বিদ্রূপাত্মক", sentence: "This sentence includes the word Wry." },
  { word: "Yeoman", meaning: "পরিচারক", sentence: "This sentence includes the word Yeoman." },
  { word: "Yield", meaning: "আত্মসমর্পণ", sentence: "This sentence includes the word Yield." },
  { word: "Yowl", meaning: "কান্না", sentence: "This sentence includes the word Yowl." },
  { word: "Zenith", meaning: "শিখর", sentence: "This sentence includes the word Zenith." }
];

// 2. Keep track of current word index:
let currentIndex = 0;
const displayWordEl = document.getElementById("display-word");
const displayMeaningEl = document.getElementById("display-meaning");
const displaySentenceEl = document.getElementById("display-sentence");
const nextBtn = document.getElementById("next-button");

// 3. Quiz state
const quizSection = document.getElementById("quiz-section");
const quizMeaningEl = document.getElementById("quiz-meaning");
const quizOptionsEl = document.getElementById("quiz-options");
const quizResultEl = document.getElementById("quiz-result");
const quizNextBtn = document.getElementById("quiz-next");
let quizQuestions = [];
let quizCurrent = 0;
let quizScore = 0;

// FUNCTION: Show a single word (word, meaning, sentence)
function showWord(index) {
  const entry = words[index];
  displayWordEl.textContent = entry.word;
  displayMeaningEl.textContent = entry.meaning;
  displaySentenceEl.textContent = entry.sentence;
}

// FUNCTION: Advance to the next word
function handleNextWord() {
  currentIndex++;
  if (currentIndex < 5) {
    // Still in the first 5 words
    showWord(currentIndex);
  } else if (currentIndex === 5) {
    // After showing exactly 5 words, switch to quiz
    document.getElementById("word-section").classList.add("hidden");
    quizSection.classList.remove("hidden");
    startQuizRound();
  } else {
    // If user somehow clicked Next beyond 5, do nothing (quiz is active)
  }
}

// INITIAL DISPLAY
showWord(0);
nextBtn.addEventListener("click", handleNextWord);

// ----------------------- QUIZ LOGIC -----------------------

// 1) Prepare 5 random quiz questions (each question is { correct: <word-object>, options: [array of 4 word-objects] })
function generateQuizQuestions() {
  const allIndices = Array.from({ length: words.length }, (_, i) => i);
  // Shuffle array of indices
  for (let i = allIndices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allIndices[i], allIndices[j]] = [allIndices[j], allIndices[i]];
  }
  // Take first 5 distinct indices as correct answers
  const chosen = allIndices.slice(0, 5);
  const quizArr = chosen.map((correctIdx) => {
    // For each correct index, pick 3 other random wrong indices to form options
    const optionsIndices = [correctIdx];
    let k = 0;
    while (optionsIndices.length < 4) {
      const rand = Math.floor(Math.random() * words.length);
      if (!optionsIndices.includes(rand)) {
        optionsIndices.push(rand);
      }
      k++;
      if (k > words.length * 2) break; // safety
    }
    // Shuffle the options
    for (let i = optionsIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [optionsIndices[i], optionsIndices[j]] = [optionsIndices[j], optionsIndices[i]];
    }
    return {
      correct: words[correctIdx],
      options: optionsIndices.map((i) => words[i])
    };
  });
  return quizArr;
}

// 2) Start the quiz round
function startQuizRound() {
  quizQuestions = generateQuizQuestions();
  quizCurrent = 0;
  quizScore = 0;
  displayQuizQuestion();
}

// DISPLAY a single quiz question
function displayQuizQuestion() {
  // Clear previous result & hide the “Continue” button
  quizResultEl.textContent = "";
  quizNextBtn.classList.add("hidden");
  // Clear old options
  quizOptionsEl.innerHTML = "";

  const question = quizQuestions[quizCurrent];
  quizMeaningEl.textContent = question.correct.meaning;

  // Create 4 buttons for the options
  question.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt.word;
    btn.classList.add("option");
    btn.addEventListener("click", () => handleOptionClick(opt));
    quizOptionsEl.appendChild(btn);
  });
}

// HANDLE what happens when the user clicks an option
function handleOptionClick(selectedOpt) {
  const question = quizQuestions[quizCurrent];
  // Disable all option buttons
  document.querySelectorAll(".option").forEach((btn) => {
    btn.disabled = true;
  });

  if (selectedOpt.word === question.correct.word) {
    quizResultEl.textContent = "Correct! ✅";
    quizScore++;
  } else {
    quizResultEl.textContent = `Wrong ❌  (“${question.correct.word}” is correct)`;
  }
  // Reveal “Continue” button
  quizNextBtn.classList.remove("hidden");
}

// WHEN THE USER CLICKS “CONTINUE” on a quiz question
quizNextBtn.addEventListener("click", () => {
  quizCurrent++;
  if (quizCurrent < quizQuestions.length) {
    displayQuizQuestion();
  } else {
    // Quiz ended. Show final score, then reset to word display after a short message.
    quizResultEl.textContent = `Quiz Completed! You scored ${quizScore} / ${quizQuestions.length}. 🎉`;
    quizNextBtn.textContent = "Learn More Words";
    quizNextBtn.addEventListener(
      "click",
      () => {
        // Reset to word section to show next batch of 5 words
        quizSection.classList.add("hidden");
        document.getElementById("word-section").classList.remove("hidden");
        nextBtn.textContent = "Next Word";
        // Prepare for next cycle:
        currentIndex = 0;
        nextBtn.removeEventListener("click", handleNextWord);
        nextBtn.addEventListener("click", handleNextWord);
        showWord(0);
        quizNextBtn.textContent = "Continue";
      },
      { once: true }
    );
  }
});

