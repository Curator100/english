// script.js

// =====================
// 1) FULL 200 WORD LIST
//    Each entry: { word, meaning (Bengali), sentence (real example) }.
//    We have provided a unique, illustrative sentence for each word.
const words = [
  {
    word: "Abandon",
    meaning: "পরিত্যাগ করা",
    sentence: "After the storm flooded the streets, she had to abandon her car and walk home."
  },
  {
    word: "Abate",
    meaning: "কম শক্তিশালী",
    sentence: "The storm finally began to abate, and the winds died down by midnight."
  },
  {
    word: "Abet",
    meaning: "উৎসাহিত করা",
    sentence: "He was arrested for helping to abet the thief in escaping the police."
  },
  {
    word: "Accede",
    meaning: "চাহিদা মেনে নেওয়া",
    sentence: "Under pressure from protesters, the mayor agreed to accede to their demands."
  },
  {
    word: "Adapt",
    meaning: "মানিয়ে নেওয়া",
    sentence: "She quickly adapted to her new high school by joining the drama club."
  },
  {
    word: "Adequate",
    meaning: "পর্যাপ্ত",
    sentence: "The small apartment provided just adequate space for her and her two cats."
  },
  {
    word: "Ambivalence",
    meaning: "অনিশ্চয়তা",
    sentence: "I felt ambivalence about moving abroad—excited yet terrified at the same time."
  },
  {
    word: "Analogous",
    meaning: "সমান্তরাল",
    sentence: "The structure of the atom is often described as analogous to a solar system."
  },
  {
    word: "Anomaly",
    meaning: "অদ্ভুততা",
    sentence: "The sudden drop in temperature was an anomaly in an otherwise mild spring."
  },
  {
    word: "Expect",
    meaning: "পূর্বাভাস দেওয়া",
    sentence: "Meteorologists expect heavy rainfall over the weekend."
  },
  {
    word: "Antipathy",
    meaning: "শত্রুতা",
    sentence: "Despite their antipathy in childhood, they eventually became close friends."
  },
  {
    word: "Apex",
    meaning: "চূড়া",
    sentence: "Standing at the apex of the cliff, she could see the entire valley below."
  },
  {
    word: "Apprehension",
    meaning: "উদ্বেগ",
    sentence: "He approached the stage with apprehension, his heart pounding."
  },
  {
    word: "Articulate",
    meaning: "সাবলীল",
    sentence: "She was able to articulate her ideas clearly during the debate."
  },
  {
    word: "Artificial",
    meaning: "কৃত্রিম",
    sentence: "Many prefer natural lighting, but the artificial bulbs were surprisingly warm."
  },
  {
    word: "Assertion",
    meaning: "দাবি",
    sentence: "Her assertion that the product was defect-free turned out to be false."
  },
  {
    word: "Authenticity",
    meaning: "প্রামাণিকতা",
    sentence: "Travelers treasure a restaurant’s authenticity when it serves genuine local dishes."
  },
  {
    word: "Avenue",
    meaning: "পথ",
    sentence: "He strolled down the tree-lined avenue, admiring the autumn leaves."
  },
  {
    word: "Basic",
    meaning: "মৌলিক",
    sentence: "Before building that software, we need to learn basic programming concepts."
  },
  {
    word: "Bear",
    meaning: "সমর্থন",
    sentence: "She couldn’t bear the pain of hearing bad news from her family."
  },
  {
    word: "Berate",
    meaning: "বকাঝকা করা",
    sentence: "The coach did not hesitate to berate the team after their poor performance."
  },
  {
    word: "Bias",
    meaning: "পক্ষপাত",
    sentence: "Journalists must avoid bias to report news objectively."
  },
  {
    word: "Bittersweet",
    meaning: "টক-মিষ্টি",
    sentence: "Graduation day was bittersweet; she was proud to succeed but sad to leave friends."
  },
  {
    word: "Boost",
    meaning: "বৃদ্ধি",
    sentence: "A cup of coffee in the morning gives her a much-needed boost of energy."
  },
  {
    word: "Bovine",
    meaning: "গরুসম্পর্কিত",
    sentence: "On the farm, he learned how to care for bovine animals responsibly."
  },
  {
    word: "Braggart",
    meaning: "অহংকারী ব্যক্তি",
    sentence: "Everyone found him annoying because he was such a braggart about his achievements."
  },
  {
    word: "Brawl",
    meaning: "লড়াই",
    sentence: "A brawl broke out outside the bar when two patrons started arguing."
  },
  {
    word: "Brevity",
    meaning: "সংক্ষিপ্ততা",
    sentence: "The brevity of his speech was appreciated by those who didn’t want to stay long."
  },
  {
    word: "Burnish",
    meaning: "পালিশ করা",
    sentence: "He took a soft cloth to burnish the tarnished silverware until it gleamed."
  },
  {
    word: "Cacophony",
    meaning: "কর্কশ শব্দমিশ্রণ",
    sentence: "The city streets at rush hour produced a cacophony of horns and sirens."
  },
  {
    word: "Candid",
    meaning: "সোজাসাপ্টা",
    sentence: "She gave a candid interview about her experiences overseas."
  },
  {
    word: "Capture",
    meaning: "ধরা",
    sentence: "The photographer tried to capture the sunrise over the ocean in one shot."
  },
  {
    word: "Catalyst",
    meaning: "উদ্দীপক",
    sentence: "Her speech was the catalyst that motivated everyone to volunteer."
  },
  {
    word: "Cache",
    meaning: "সঙ্কলন",
    sentence: "He discovered a hidden cache of old coins behind the fireplace."
  },
  {
    word: "Censorious",
    meaning: "সমালোচনামূলক",
    sentence: "His censorious tone made the audience uncomfortable during the critique."
  },
  {
    word: "Clout",
    meaning: "আঘাত",
    sentence: "The presidency gave him enough clout to negotiate with foreign leaders."
  },
  {
    word: "Coincide",
    meaning: "সংঘটিত হওয়া",
    sentence: "Their vacations coincide, so they plan to travel together every summer."
  },
  {
    word: "Commission",
    meaning: "প্রস্তাবনা",
    sentence: "She received a commission to paint a mural for the new community center."
  },
  {
    word: "Comparable",
    meaning: "অনুরূপ",
    sentence: "His achievements are comparable to those of the greatest athletes."
  },
  {
    word: "Competent",
    meaning: "যোগ্য",
    sentence: "The nurse was highly competent in administering emergency care."
  },
  {
    word: "Complacent",
    meaning: "আত্মসন্তুষ্ট",
    sentence: "He grew complacent after he aced all his exams, but the next test surprised him."
  },
  {
    word: "Concede",
    meaning: "স্বীকার করা",
    sentence: "The opposing candidate had to concede defeat after the votes were counted."
  },
  {
    word: "Conceive",
    meaning: "উদ্ভাবন করা",
    sentence: "Many scientists conceive new technologies that shape our future."
  },
  {
    word: "Conduct",
    meaning: "পরিচালনা করা",
    sentence: "She was hired to conduct research on improving water purification methods."
  },
  {
    word: "Constitute",
    meaning: "গঠন করা",
    sentence: "Fifty states constitute the United States of America."
  },
  {
    word: "Course",
    meaning: "পথ",
    sentence: "He followed the mountain course carefully, using a map and compass."
  },
  {
    word: "Culmination",
    meaning: "চূড়ান্ত পর্ব",
    sentence: "Graduating from university was the culmination of years of hard work."
  },
  {
    word: "Dearth",
    meaning: "অভাব",
    sentence: "A dearth of rain this year has led to a severe drought in the region."
  },
  {
    word: "Deference",
    meaning: "শ্রদ্ধা",
    sentence: "Out of deference to her elders, she always waited until others had eaten."
  },
  {
    word: "Demagogue",
    meaning: "উস্কানিকারক",
    sentence: "He was criticized as a demagogue who appealed to people’s fears rather than reason."
  },
  {
    word: "Demur",
    meaning: "আপত্তি করা",
    sentence: "She had to demur when they suggested an expensive plan she couldn’t afford."
  },
  {
    word: "Deplete",
    meaning: "খরচ করা",
    sentence: "Continuous use of fossil fuels will deplete natural resources rapidly."
  },
  {
    word: "Desolate",
    meaning: "শূন্য",
    sentence: "The abandoned town looked desolate under the pale winter sun."
  },
  {
    word: "Devise",
    meaning: "উদ্ভাবন করা",
    sentence: "They had to devise a new strategy after the old one failed."
  },
  {
    word: "Dilemma",
    meaning: "দ্বিধা",
    sentence: "She faced a dilemma: accept the job offer or stay close to her family."
  },
  {
    word: "Diluvial",
    meaning: "জলপ্রলয়",
    sentence: "Legends spoke of a diluvial flood that once submerged the entire valley."
  },
  {
    word: "Diminish",
    meaning: "হ্রাস পা",
    sentence: "Over time, his fame did not diminish; instead, it continued to grow."
  },
  {
    word: "Dire",
    meaning: "আশাহীন",
    sentence: "The villagers received dire warnings about the impending hurricane."
  },
  {
    word: "Disdain",
    meaning: "অবজ্ঞা",
    sentence: "He looked at the messy room with disdain and sighed loudly."
  },
  {
    word: "Dispassionate",
    meaning: "উদাসীন",
    sentence: "In court, the judge must remain dispassionate and fair to both sides."
  },
  {
    word: "Doctrine",
    meaning: "মত",
    sentence: "The new doctrine focused on sustainability and environmental protection."
  },
  {
    word: "Effluvia",
    meaning: "ক্ষতিকর দুর্গন্ধ",
    sentence: "The factory’s effluvia made it impossible to stand nearby for long."
  },
  {
    word: "Eloquent",
    meaning: "সাবলীল ভাষণদক্ষতা",
    sentence: "Her speech was so eloquent that even skeptics were moved to tears."
  },
  {
    word: "Eminent",
    meaning: "উচ্চ অবস্থান",
    sentence: "He is an eminent scientist known for groundbreaking research in genetics."
  },
  {
    word: "Emulate",
    meaning: "অনুকরণ করা",
    sentence: "She tried to emulate her older sister’s success in athletics."
  },
  {
    word: "Endure",
    meaning: "সহ্য করা",
    sentence: "Soldiers often endure extreme conditions during training."
  },
  {
    word: "Entail",
    meaning: "হিসাব লিখা",
    sentence: "The project would entail many hours of careful planning and execution."
  },
  {
    word: "Specify",
    meaning: "উল্লেখ করা",
    sentence: "Please specify your dietary restrictions when you make a reservation."
  },
  {
    word: "Epochal",
    meaning: "তৎপর্যপূর্ণ",
    sentence: "The development of the internet was an epochal event in human history."
  },
  {
    word: "Erratic",
    meaning: "অস্থিতিশীল",
    sentence: "His driving was erratic, swerving unexpectedly between lanes."
  },
  {
    word: "Establish",
    meaning: "প্রতিষ্ঠা করা",
    sentence: "They plan to establish a scholarship fund for underprivileged students."
  },
  {
    word: "Excel",
    meaning: "শীর্ষস্থানে থাকা",
    sentence: "She managed to excel in both academics and sports simultaneously."
  },
  {
    word: "Exploit",
    meaning: "শোষণ করা",
    sentence: "The company was fined for attempting to exploit child labor."
  },
  {
    word: "Expound",
    meaning: "ব্যাখ্যা করা",
    sentence: "The professor will expound on the theory in tomorrow’s lecture."
  },
  {
    word: "Ferocity",
    meaning: "হিংসা",
    sentence: "The ferocity of the storm caught everyone off guard."
  },
  {
    word: "Flourish",
    meaning: "সমৃদ্ধি লাভ করা",
    sentence: "Under her leadership, the small business began to flourish."
  },
  {
    word: "Forcible",
    meaning: "শক্তিশালী",
    sentence: "They made a forcible entry into the locked building to rescue the hostages."
  },
  {
    word: "Frankly",
    meaning: "সরাসরি",
    sentence: "He spoke frankly about his mistakes during the meeting."
  },
  {
    word: "Fundamental",
    meaning: "মৌলিক",
    sentence: "Honesty is fundamental to building trust in any relationship."
  },
  {
    word: "Galvanizing",
    meaning: "তীব্র আঘাত",
    sentence: "The galvanizing speech rallied volunteers for the community cleanup."
  },
  {
    word: "Geriatric",
    meaning: "বৃদ্ধাঙ্গন সম্পর্কিত",
    sentence: "She decided to specialize in geriatric medicine after her internship."
  },
  {
    word: "Hostile",
    meaning: "আক্রমণাত্মক",
    sentence: "The negotiations broke down when both sides grew too hostile to continue."
  },
  {
    word: "Hubris",
    meaning: "অহংকার",
    sentence: "His hubris led him to believe he could never fail, which ultimately caused his downfall."
  },
  {
    word: "Impart",
    meaning: "প্রচার করা",
    sentence: "Teachers impart knowledge to students through lessons and guidance."
  },
  {
    word: "Impartiality",
    meaning: "পক্ষপাতিত্ব",
    sentence: "A good referee must maintain impartiality at all times during the game."
  },
  {
    word: "Imposition",
    meaning: "জবরদস্তি",
    sentence: "He felt the new rules were an imposition on his personal freedom."
  },
  {
    word: "Indifference",
    meaning: "উদাসীনতা",
    sentence: "Their indifference to the suffering of others disturbed her greatly."
  },
  {
    word: "Indulge",
    meaning: "উৎসর্গ করা",
    sentence: "On weekends, she likes to indulge in reading old mystery novels."
  },
  {
    word: "Importunate",
    meaning: "অনবরত",
    sentence: "The importunate salesman would not stop calling her at odd hours."
  },
  {
    word: "Innovative",
    meaning: "উদ্ভাবনী",
    sentence: "Her innovative design transformed the way people use portable chargers."
  },
  {
    word: "Inversion",
    meaning: "উল্টো",
    sentence: "The inversion of the city’s skyline at night is captured on many postcards."
  },
  {
    word: "Lament",
    meaning: "করুণ ধ্বনি করা",
    sentence: "Villagers gathered to lament the passing of their beloved elder."
  },
  {
    word: "Locomotion",
    meaning: "গতি",
    sentence: "For centuries, humans have tried to improve locomotion with better vehicles."
  },
  {
    word: "Malicious",
    meaning: "দ্বেষপূর্ণ",
    sentence: "The hacker spread malicious software to damage the company’s data."
  },
  {
    word: "Materialistic",
    meaning: "বাস্তববান",
    sentence: "His materialistic tendencies made him value possessions over relationships."
  },
  {
    word: "Modest",
    meaning: "সাধারণ",
    sentence: "Despite all her achievements, she remained modest and down-to-earth."
  },
  {
    word: "Mawkish",
    meaning: "আবেগময়",
    sentence: "The movie was criticized for being overly mawkish with its sentimental scenes."
  },
  {
    word: "Novel",
    meaning: "উপন্যাস",
    sentence: "He wrote a science fiction novel about colonizing Mars."
  },
  {
    word: "Null",
    meaning: "অবৈধ",
    sentence: "The contract was declared null and void because it was signed under duress."
  },
  {
    word: "Objectify",
    meaning: "অবমাননা করা",
    sentence: "It is unfair to objectify people based on their appearance alone."
  },
  {
    word: "Omnipotent",
    meaning: "সর্বশক্তিমান",
    sentence: "In his novel, the villain believed himself to be omnipotent until the final showdown."
  },
  {
    word: "Onset",
    meaning: "শুরু",
    sentence: "The onset of winter brought heavy snowfall and freezing temperatures."
  },
  {
    word: "Opine",
    meaning: "পরামর্শ দেওয়া",
    sentence: "Critics opine that this painting might be the artist’s greatest work."
  },
  {
    word: "Oust",
    meaning: "বিতাড়িত করা",
    sentence: "Rebels tried to oust the dictator but were met with heavy resistance."
  },
  {
    word: "Pandemic",
    meaning: "ব ব্যাপক",
    sentence: "The COVID-19 pandemic changed global travel in unprecedented ways."
  },
  {
    word: "Paramount",
    meaning: "সর্বাগ্রে",
    sentence: "For her, safety was paramount before embarking on that risky journey."
  },
  {
    word: "Patrician",
    meaning: "অভিজাত",
    sentence: "He carried himself with patrician grace, as if royalty were his birthright."
  },
  {
    word: "Peculiar",
    meaning: "অদ্ভুত",
    sentence: "She had a peculiar habit of humming whenever she was nervous."
  },
  {
    word: "Potent",
    meaning: "শক্তিশালী",
    sentence: "That spice is so potent that only a pinch is enough to flavor the entire dish."
  },
  {
    word: "Perish",
    meaning: "পতন",
    sentence: "Many flowers perish after the first frost of winter."
  },
  {
    word: "Persecute",
    meaning: "নির্যাতন করা",
    sentence: "He was forced to flee the country to escape being persecuted for his beliefs."
  },
  {
    word: "Petulant",
    meaning: "খিটখিটে",
    sentence: "When he didn’t get his way, he became petulant and slammed the door."
  },
  {
    word: "Pinnacle",
    meaning: "শীর্ষ",
    sentence: "Winning the championship was the pinnacle of her athletic career."
  },
  {
    word: "Pitiable",
    meaning: "দুঃখজনক",
    sentence: "The abandoned puppy was in a pitiable state when they found him."
  },
  {
    word: "Plausible",
    meaning: "বিশ্বাসযোগ্য",
    sentence: "Her explanation for the missing funds sounded plausible at first."
  },
  {
    word: "Prompt",
    meaning: "উদ্রেক করা",
    sentence: "The success of that event will prompt more people to donate in the future."
  },
  {
    word: "Polyglot",
    meaning: "বহুভাষাবিদ",
    sentence: "As a polyglot, she could switch seamlessly between English, French, and Japanese."
  },
  {
    word: "Provocative",
    meaning: "ক্রুদ্ধ",
    sentence: "His provocative remarks during the debate sparked heated arguments."
  },
  {
    word: "Prescribe",
    meaning: "নির্দেশ দেওয়া",
    sentence: "The doctor will prescribe antibiotics if the infection persists."
  },
  {
    word: "Prestidigitation",
    meaning: "তছকাভঙ্গ",
    sentence: "The magician’s prestidigitation left the audience gasping in wonder."
  },
  {
    word: "Prohibit",
    meaning: "নিষিদ্ধকরণ",
    sentence: "The new law will prohibit smoking in all indoor public places."
  },
  {
    word: "Placid",
    meaning: "শান্তিপূর্ণ",
    sentence: "The lake was so placid that the mountains reflected perfectly on its surface."
  },
  {
    word: "Prosecute",
    meaning: "দায়েরকৃত মামলা",
    sentence: "The state decided to prosecute the accused for embezzlement."
  },
  {
    word: "Quantitative",
    meaning: "পরিমাণগত",
    sentence: "His research focused on quantitative analysis of population growth."
  },
  {
    word: "Quirk",
    meaning: "অদ্ভুততা",
    sentence: "She had a strange quirk of tapping her pen whenever she was thinking."
  },
  {
    word: "Quarry",
    meaning: "পাথর খনন করা",
    sentence: "Miners had to quarry limestone from the hillside to build the new road."
  },
  {
    word: "Ramify",
    meaning: "শাখা-বিস্তার করা",
    sentence: "The consequences of the decision will ramify throughout the entire industry."
  },
  {
    word: "Rancor",
    meaning: "তিক্ততা",
    sentence: "The rancor between the two families lasted generations after the feud began."
  },
  {
    word: "Rarefy",
    meaning: "পাতলা হয়ে যাওয়া",
    sentence: "As the hikers ascended, the air began to rarefy, making it hard to breathe."
  },
  {
    word: "Rash",
    meaning: "বেপরোয়া",
    sentence: "It would be rash to buy that expensive car without a proper test drive."
  },
  {
    word: "Raw",
    meaning: "কাঁচা",
    sentence: "She preferred raw vegetables in her salad for the crunchy texture."
  },
  {
    word: "Reapproach",
    meaning: "পুনরায় কাছে আসা",
    sentence: "After months away, he decided to reapproach his old mentor for advice."
  },
  {
    word: "Reform",
    meaning: "সংস্কার করা",
    sentence: "Voters demanded the government reform the outdated tax system."
  },
  {
    word: "Refute",
    meaning: "তর্কপূর্বক খণ্ডন করা",
    sentence: "The scientist used new data to refute the long-standing theory."
  },
  {
    word: "Reinforce",
    meaning: "শক্তিশালী করা",
    sentence: "Engineers will reinforce the bridge before the heavy storms arrive."
  },
  {
    word: "Resilient",
    meaning: "দৃঢ়",
    sentence: "Children can be amazingly resilient in the face of adversity."
  },
  {
    word: "Revile",
    meaning: "সমালোচনা করা",
    sentence: "Opponents were quick to revile him for his controversial remarks."
  },
  {
    word: "Rife",
    meaning: "ব ব্যাপক",
    sentence: "Rumors were rife that the company was about to declare bankruptcy."
  },
  {
    word: "Sanctimonious",
    meaning: "পবিত্রতম",
    sentence: "His sanctimonious tone annoyed everyone who knew his hypocritical actions."
  },
  {
    word: "Satiated",
    meaning: "অতিরিক্ত",
    sentence: "After the lavish feast, she felt completely satiated and struggled to stand."
  },
  {
    word: "Savvy",
    meaning: "প্রখরতা",
    sentence: "It takes real tech-savvy to build a fully functional gaming PC from scratch."
  },
  {
    word: "Scandalous",
    meaning: "কলঙ্কজনক",
    sentence: "The politician’s scandalous affair was splashed across every newspaper."
  },
  {
    word: "Scorn",
    meaning: "অবজ্ঞা",
    sentence: "She looked at the messy room with absolute scorn and walked away."
  },
  {
    word: "Sagacious",
    meaning: "প্রজ্ঞাবান",
    sentence: "The sagacious mentor guided his students through tough life decisions."
  },
  {
    word: "Scrupulous",
    meaning: "যত্নশীল",
    sentence: "A scrupulous editor corrected every punctuation and grammar mistake."
  },
  {
    word: "Sedition",
    meaning: "হট্টগোল",
    sentence: "He was arrested under charges of sedition for inciting unrest."
  },
  {
    word: "Sacrosanct",
    meaning: "পবিত্রতম",
    sentence: "Her private diary was sacrosanct; nobody was allowed to read it."
  },
  {
    word: "Sentiment",
    meaning: "অনুভূতি",
    sentence: "She kept the old letter out of sentiment, though it brought her sad memories."
  },
  {
    word: "Sheer",
    meaning: "সম্পূর্ণ",
    sentence: "Climbing the sheer cliff face tested his stamina and courage."
  },
  {
    word: "Sallow",
    meaning: "হলদে",
    sentence: "His sallow complexion worried the doctor, so more tests were ordered."
  },
  {
    word: "Simple",
    meaning: "সহজ",
    sentence: "She preferred a simple lifestyle without luxury or extravagance."
  },
  {
    word: "Sinecure",
    meaning: "সহজপন্থী",
    sentence: "The job turned out to be a sinecure—very little work but a good paycheck."
  },
  {
    word: "Spawn",
    meaning: "অনেক সন্তান",
    sentence: "In spring, frogs spawn large clutches of eggs in shallow ponds."
  },
  {
    word: "Spur",
    meaning: "প্ররোচনা",
    sentence: "The high sales figures will spur the company to launch new products."
  },
  {
    word: "Subordinate",
    meaning: "অনুজ",
    sentence: "He treated his subordinates with respect rather than barking orders."
  },
  {
    word: "Stroke",
    meaning: "শক্তিশালী করা",
    sentence: "A gentle stroke on the painting’s surface revealed hidden details."
  },
  {
    word: "Significant",
    meaning: "গুরুত্বপূর্ণ",
    sentence: "This discovery is significant; it may change how we treat the disease."
  },
  {
    word: "Subtle",
    meaning: "সূক্ষ্ম",
    sentence: "There was a subtle change in her tone that no one else noticed."
  },
  {
    word: "Ample",
    meaning: "প্রচুর",
    sentence: "They had ample time to finish the project before the deadline."
  },
  {
    word: "Surly",
    meaning: "খিটখিটে",
    sentence: "The surly guard refused to let anyone enter without proper ID."
  },
  {
    word: "Surmount",
    meaning: "অতিক্রম করা",
    sentence: "Despite many obstacles, she managed to surmount every challenge."
  },
  {
    word: "Sybarite",
    meaning: "ইন্দ্রিয়ভোগী",
    sentence: "He lived like a sybarite, surrounded by luxury and indulgence."
  },
  {
    word: "Tactful",
    meaning: "সহানুভূতিশীল",
    sentence: "She was tactful when delivering the bad news so as not to offend him."
  },
  {
    word: "Taut",
    meaning: "টানটান",
    sentence: "The rope was pulled taut, ready for the high-wire performance."
  },
  {
    word: "Teeming",
    meaning: "পূর্ণ হওয়া",
    sentence: "The river was teeming with fish after the rains swelled its waters."
  },
  {
    word: "Temperament",
    meaning: "স্বভাব",
    sentence: "Her calm temperament made her an excellent negotiator."
  },
  {
    word: "Tentative",
    meaning: "আনুমানিক",
    sentence: "They made tentative plans to visit the new exhibit next weekend."
  },
  {
    word: "Terse",
    meaning: "হঠাৎ",
    sentence: "His terse response left no room for further conversation."
  },
  {
    word: "Transparent",
    meaning: "স্পষ্ট",
    sentence: "The water in that mountain stream is so transparent you can see the pebbles."
  },
  {
    word: "Tremendous",
    meaning: "চরম",
    sentence: "She felt a tremendous wave of relief when she heard her name called."
  },
  {
    word: "Trounce",
    meaning: "হারানো",
    sentence: "Their team will trounce the competition if they keep playing this well."
  },
  {
    word: "Ubiquitous",
    meaning: "সর্বত্র",
    sentence: "Smartphones have become ubiquitous in nearly every corner of the globe."
  },
  {
    word: "Unadorned",
    meaning: "সজ্জাহীন",
    sentence: "He preferred an unadorned style—no fancy decorations, just clean lines."
  },
  {
    word: "Undermine",
    meaning: "ক্ষয় করা",
    sentence: "Spreading rumors can undermine a person’s reputation in an instant."
  },
  {
    word: "Unwitting",
    meaning: "অচেতন",
    sentence: "He was an unwitting accomplice in the scheme and had no idea until later."
  },
  {
    word: "Underscore",
    meaning: "নিচেদেয়ে চিহ্নিত",
    sentence: "Her performance underscores the importance of proper training."
  },
  {
    word: "Undulate",
    meaning: "ঢেউয়ের মত ওঠা",
    sentence: "Golden fields of wheat seemed to undulate in the breeze."
  },
  {
    word: "Unilateral",
    meaning: "একতরফাভিত্তিক",
    sentence: "A unilateral decision by the CEO left employees hungry for collaboration."
  },
  {
    word: "Upbraid",
    meaning: "দোষারোপ করা",
    sentence: "She would often upbraid herself for missing such an obvious mistake."
  },
  {
    word: "Unjust",
    meaning: "অন্যায়",
    sentence: "The defendant argued that the verdict was unjust and filed an appeal."
  },
  {
    word: "Uproarious",
    meaning: "দারুণ মজাদার",
    sentence: "The comedian’s jokes were so uproarious that tears streamed down our faces."
  },
  {
    word: "Unmitigated",
    meaning: "সম্পূর্ণ",
    sentence: "His fiasco was an unmitigated disaster—from start to finish."
  },
  {
    word: "Unprecedented",
    meaning: "অনন্য",
    sentence: "The speed of that technological advance was unprecedented in history."
  },
  {
    word: "Unveil",
    meaning: "উন্মোচন করা",
    sentence: "Tomorrow the company will unveil its new line of electric vehicles."
  },
  {
    word: "Urge",
    meaning: "আকাঙ্ক্ষা",
    sentence: "I feel the urge to travel again after being cooped up at home during lockdown."
  },
  {
    word: "Upshot",
    meaning: "ফলাফল",
    sentence: "The upshot of their negotiations was a fair compromise for both parties."
  },
  {
    word: "Usury",
    meaning: "সুদে টাকা ধার",
    sentence: "He was arrested for charging illegal rates of usury to desperate borrowers."
  },
  {
    word: "Validate",
    meaning: "প্রমাণ করা",
    sentence: "Researchers must validate their data before publishing their findings."
  },
  {
    word: "Viability",
    meaning: "টেকসই অবস্থা",
    sentence: "The viability of the new startup depends on securing enough investors."
  },
  {
    word: "Vital",
    meaning: "গুরুত্বপূর্ণ",
    sentence: "Regular exercise is vital for maintaining both physical and mental health."
  },
  {
    word: "Venal",
    meaning: "দুস্কৃতিকারী",
    sentence: "The venal official was caught taking bribes from contractors."
  },
  {
    word: "Vow",
    meaning: "শপথ",
    sentence: "They took a solemn vow to protect the environment for future generations."
  },
  {
    word: "Warrant",
    meaning: "অনুমোদন",
    sentence: "The police obtained a warrant to search the suspect’s house."
  },
  {
    word: "Winsome",
    meaning: "আকর্ষণীয়",
    sentence: "Her winsome smile won everyone over at the networking event."
  },
  {
    word: "Wry",
    meaning: "বিদ্রূপাত্মক",
    sentence: "He gave a wry grin when he realized the joke was on him."
  },
  {
    word: "Yeoman",
    meaning: "পরিচারক",
    sentence: "A yeoman served the feudal lord faithfully, tending to daily chores."
  },
  {
    word: "Yield",
    meaning: "আত্মসমর্পণ",
    sentence: "After hours of negotiation, the company had to yield to the union’s demands."
  },
  {
    word: "Yowl",
    meaning: "কান্না",
    sentence: "The stray cat let out a painful yowl when it got trapped in the alley."
  },
  {
    word: "Zenith",
    meaning: "শিখর",
    sentence: "At the zenith of her career, she was widely regarded as the best in the field."
  }
];
// =====================



// =====================
// 2) STATE VARIABLES
let currentBatch = [];      // Array of 5 word‐objects (from `words[]`)
let batchIndex = 0;         // 0…4, to track which word is currently displayed in the batch
let quizOrder = [];         // Array of indices 0…4, shuffled, to ask quiz questions
let quizIndex = 0;          // 0…4, to track which question in the current quiz
let score = 0;              // How many correct answers so far in the 5-question quiz

// DOM ELEMENTS
const displayWordEl = document.getElementById("display-word");
const displayMeaningEl = document.getElementById("display-meaning");
const displaySentenceEl = document.getElementById("display-sentence");
const nextBtn = document.getElementById("next-button");

const quizSection = document.getElementById("quiz-section");
const quizMeaningEl = document.getElementById("quiz-meaning");
const quizOptionsEl = document.getElementById("quiz-options");
const quizResultEl = document.getElementById("quiz-result");
const quizNextBtn = document.getElementById("quiz-next");

document.addEventListener("DOMContentLoaded", () => {
  pickNewBatch();      // Choose 5 random words from `words[]`
  showWordInBatch();   // Display the first word of that batch
  nextBtn.addEventListener("click", handleNextWord);
});


// =====================
// 3) PICK A NEW BATCH OF 5 WORDS (RANDOM, NO DUPLICATES within the batch)
//    This function selects 5 distinct random indices from `words[]` and stores them.
function pickNewBatch() {
  const indices = Array.from({ length: words.length }, (_, i) => i);
  // Shuffle indices
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const chosen = indices.slice(0, 5);
  currentBatch = chosen.map(i => words[i]);
  batchIndex = 0;
  // Prepare quiz order (0…4) and shuffle
  quizOrder = [0, 1, 2, 3, 4];
  for (let i = quizOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizOrder[i], quizOrder[j]] = [quizOrder[j], quizOrder[i]];
  }
  quizIndex = 0;
  score = 0;
}

// =====================
// 4) DISPLAY A SINGLE WORD IN THE CURRENT BATCH
function showWordInBatch() {
  const entry = currentBatch[batchIndex];
  displayWordEl.textContent = entry.word;
  displayMeaningEl.textContent = entry.meaning;
  displaySentenceEl.textContent = entry.sentence;
  nextBtn.textContent = "Next Word";
  quizResultEl.textContent = "";
  quizNextBtn.classList.add("hidden");
}

// =====================
// 5) HANDLE “Next Word” BUTTON CLICK
function handleNextWord() {
  batchIndex++;
  if (batchIndex < 5) {
    // Show next word in the batch
    showWordInBatch();
  } else {
    // After 5 words, hide word-section and start the quiz
    document.getElementById("word-section").classList.add("hidden");
    quizSection.classList.remove("hidden");
    startQuiz();
  }
}

// =====================
// 6) START THE 5-QUESTION QUIZ ON THE CURRENT BATCH
function startQuiz() {
  displayQuizQuestion();
}

// DISPLAY ONE QUIZ QUESTION (based on quizOrder[quizIndex])
function displayQuizQuestion() {
  const questionIdx = quizOrder[quizIndex];
  const correctEntry = currentBatch[questionIdx];

  // Clear previous result & hide “Continue”
  quizResultEl.textContent = "";
  quizNextBtn.classList.add("hidden");
  // Clear old options
  quizOptionsEl.innerHTML = "";

  // Show the Bengali meaning for that word
  quizMeaningEl.textContent = correctEntry.meaning;

  // Build buttons from all 5 words in currentBatch, then shuffle them here
  const optionsCopy = currentBatch.slice(); // shallow copy of 5 word-objects
  // Shuffle optionsCopy
  for (let i = optionsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsCopy[i], optionsCopy[j]] = [optionsCopy[j], optionsCopy[i]];
  }

  // Create one button per option
  optionsCopy.forEach(optionEntry => {
    const btn = document.createElement("button");
    btn.textContent = optionEntry.word;
    btn.classList.add("option");
    btn.addEventListener("click", () => handleOptionClick(optionEntry, correctEntry));
    quizOptionsEl.appendChild(btn);
  });
}

// HANDLE CLICK ON AN OPTION BUTTON
function handleOptionClick(selectedEntry, correctEntry) {
  // Disable all option buttons
  document.querySelectorAll(".option").forEach(btn => btn.disabled = true);

  if (selectedEntry.word === correctEntry.word) {
    quizResultEl.textContent = "Correct! ✅";
    score++;
  } else {
    quizResultEl.textContent = `Wrong ❌  (Correct: "${correctEntry.word}")`;
  }
  // Show “Continue” button
  quizNextBtn.classList.remove("hidden");
}

// WHEN USER CLICKS “Continue” IN QUIZ
quizNextBtn.addEventListener("click", () => {
  quizIndex++;
  if (quizIndex < 5) {
    // Next quiz question
    displayQuizQuestion();
  } else {
    // Quiz finished: show final score & prepare for next batch
    quizResultEl.textContent = `Quiz Completed! You scored ${score} / 5. 🎉`;
    quizNextBtn.textContent = "Learn More Words";
    quizNextBtn.removeEventListener("click", arguments.callee);
    quizNextBtn.addEventListener("click", () => {
      // Reset sections
      document.getElementById("word-section").classList.remove("hidden");
      quizSection.classList.add("hidden");
      pickNewBatch();
      showWordInBatch();
    }, { once: true });
  }
});
