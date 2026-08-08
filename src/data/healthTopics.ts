// Featured health topic for the Health Education Hub.
//
// Written for a lay audience — short sentences, no clinical jargon, and the
// local myths NHF actually heard from mothers during World Breastfeeding Week
// 2026 answered directly. Guidance follows WHO and UNICEF recommendations; every
// source link below was checked and resolves.

export interface TopicSection {
  heading: string;
  body: string;
  points?: string[];
}

export interface HealthTopic {
  eyebrow: string;
  title: string;
  intro: string;
  sections: TopicSection[];
  warning: { heading: string; intro: string; points: string[]; footer: string };
  sources: { label: string; publisher: string; url: string }[];
}

export const breastfeedingTopic: HealthTopic = {
  eyebrow: "Featured health topic",
  title: "Breastfeeding: a simple guide for mothers and families",
  intro:
    "Breastfeeding is the best start you can give your baby — and most of the problems mothers meet in the first weeks are normal, common, and fixable. This guide explains what to do, what to expect, and when to ask for help.",

  sections: [
    {
      heading: "Start within the first hour",
      body: "Put your baby to the breast as soon as possible after birth, ideally within the first hour.",
      points: [
        "The first milk is thick and yellowish. It is called colostrum.",
        "It is not dirty and it is not spoilt. It is small in amount but rich in protection — think of it as your baby's first vaccine.",
        "Do not throw it away, and do not give anything else before it.",
      ],
    },
    {
      heading: "Give only breast milk for the first six months",
      body: "For the first six months your baby needs nothing else — no water, no pap, no glucose, no herbal mixtures, not even in hot weather.",
      points: [
        "Breast milk is mostly water. It gives your baby all the water needed, even in the heat.",
        "Giving water or other foods early fills the baby up, reduces your milk, and can cause infection and diarrhoea.",
        "The only exceptions are medicines, vitamins, or rehydration solution given by a health worker.",
      ],
    },
    {
      heading: "Keep breastfeeding to two years and beyond",
      body: "From six months, start giving soft family foods alongside breast milk — but do not stop breastfeeding.",
      points: [
        "Breast milk still provides important nutrition and protection well into the second year.",
        "Add variety gradually: mashed foods, then family foods, kept clean and freshly prepared.",
      ],
    },
    {
      heading: "Feed as often as your baby wants",
      body: "In the early weeks most babies feed 8 to 12 times in 24 hours, day and night. This is normal, not a sign that anything is wrong.",
      points: [
        "Milk works on demand and supply: the more the breast is emptied, the more milk your body makes.",
        "Skipping feeds or giving formula 'to rest' will reduce your own supply.",
        "Feed from one breast until it softens, then offer the other.",
      ],
    },
    {
      heading: "Getting the latch right",
      body: "Most early pain and difficulty comes down to how the baby is attached — not to anything being wrong with you or your milk.",
      points: [
        "Your baby's mouth should be wide open, with the lower lip turned outwards.",
        "The chin should touch, or almost touch, your breast.",
        "More of the dark area around the nipple should show above your baby's mouth than below it.",
        "Breastfeeding should not be painful. Ongoing pain is a sign to get the latch checked, not a sign to stop.",
      ],
    },
    {
      heading: "How to know your baby is getting enough",
      body: "You cannot tell by the size of your breasts, by how soft they feel, or by how much you can express. Look at your baby instead.",
      points: [
        "Six or more wet nappies a day after the first week.",
        "Passing stool regularly.",
        "Gaining weight at clinic visits — keep going for weighing.",
        "Settling and appearing satisfied after most feeds.",
        "A baby who cries often is not automatically a hungry baby. Babies also cry from heat, wind, tiredness, and the need to be held.",
      ],
    },
    {
      heading: "Breastfeeding protects the mother too",
      body: "It is not only the baby who benefits.",
      points: [
        "It helps the womb contract back and reduces bleeding after delivery.",
        "It lowers a mother's long-term risk of breast and ovarian cancer.",
        "It supports child spacing — but on its own it is not a reliable family planning method. Speak to a health worker about your options.",
      ],
    },
    {
      heading: "Going back to work or school",
      body: "You can keep breastfeeding after you return to work by expressing your milk by hand or with a pump.",
      points: [
        "Express into a clean, covered cup or container.",
        "Freshly expressed milk keeps up to about four hours at room temperature — less in very hot weather — or up to four days in a working fridge.",
        "Never boil breast milk. Warm it by standing the container in warm water.",
        "Nigerian law protects nursing mothers at work, including paid maternity leave and a suitable place to express and keep milk. Ask your employer.",
      ],
    },
  ],

  warning: {
    heading: "Get help from a health worker quickly if",
    intro: "Most breastfeeding problems are minor. These ones are not — go to your nearest health centre without delay if you notice:",
    points: [
      "Your baby is passing very little urine, or fewer than six wet nappies a day.",
      "Your baby is too weak to suck, refuses to feed, or is unusually sleepy and hard to wake.",
      "Your baby is losing weight, or not gaining at clinic visits.",
      "Your baby's eyes or skin look yellow.",
      "One breast becomes red, hot, hard, and painful, especially with fever — this can be mastitis and needs treatment.",
      "Your nipples are cracked or bleeding and are not improving after the latch has been corrected.",
    ],
    footer:
      "Asking for help early is not a failure. Most of these are treatable, and breastfeeding can usually continue.",
  },

  sources: [
    {
      label: "Infant and young child feeding — fact sheet",
      publisher: "World Health Organization",
      url: "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding",
    },
    {
      label: "Breastfeeding — health topic",
      publisher: "World Health Organization",
      url: "https://www.who.int/health-topics/breastfeeding",
    },
    {
      label: "Common breastfeeding positions",
      publisher: "UNICEF Parenting",
      url: "https://www.unicef.org/parenting/food-nutrition/breastfeeding-positions",
    },
    {
      label: "Five common breastfeeding problems",
      publisher: "UNICEF Parenting",
      url: "https://www.unicef.org/parenting/food-nutrition/5-common-breastfeeding-problems",
    },
    {
      label: "Busted: 14 myths about breastfeeding",
      publisher: "UNICEF Parenting",
      url: "https://www.unicef.org/parenting/food-nutrition/14-myths-about-breastfeeding",
    },
    {
      label: "Nutrition in Nigeria",
      publisher: "UNICEF Nigeria",
      url: "https://www.unicef.org/nigeria/nutrition",
    },
  ],
};
