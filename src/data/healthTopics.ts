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

// NHF's own photos need only a credit. Third-party photos must also carry their
// source and licence wherever they are shown (CC BY / CC BY-SA require it).
export interface TopicPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl?: string;
  licence?: string;
  licenceUrl?: string;
}

export interface HealthTopic {
  /** Anchor for linking straight to the topic, e.g. from a social post. */
  id?: string;
  eyebrow: string;
  title: string;
  intro: string;
  photos?: TopicPhoto[];
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

// World Polio Day, 24 October 2026. Case counts are GPEI's country update as of
// 21 October 2026 and go stale weekly: re-check them before reusing this topic.
// Schedule is the NPHCDA routine immunisation card. Photos are NHF's own, from
// the joint free medical outreach at Ogbe-Ijaw Market, Warri South, on World
// Polio Day itself; everyone pictured gave consent. No polio vaccine was given
// there, so captions describe the outreach, not vaccination.
export const polioTopic: HealthTopic = {
  id: "polio",
  eyebrow: "World Polio Day · 24 October 2026",
  title: "Polio: protecting the victory Nigeria won",
  intro:
    "In August 2020, Nigeria and the whole WHO African Region were certified free of wild polio. But polio has not fully left Nigeria. This guide explains what polio is, why it is still a risk here, and the simple steps that keep every child safe.",

  photos: [
    {
      src: "/images/polio/polio-01-ogbe-ijaw-beneficiary.webp",
      width: 963,
      height: 1120,
      alt: "A woman in a bright floral dress holds a Napoleon Healthcare Foundation placard at the Ogbe-Ijaw Market outreach, with the medicines table behind her",
      caption: "World Polio Day 2026: a community member at our free medical outreach in Ogbe-Ijaw Market, Warri South, Delta State.",
      credit: "Napoleon Healthcare Foundation",
    },
    {
      src: "/images/polio/polio-02-ogbe-ijaw-outreach-tent.webp",
      width: 1220,
      height: 645,
      alt: "NHF and partner volunteers seated at tables under a white tent beside the NHF roll-up banner, attending to community members",
      caption: "NHF, Kings and Queens Helping Hand Foundation and Endybekx Initiative at work under the outreach tent.",
      credit: "Napoleon Healthcare Foundation",
    },
    {
      src: "/images/polio/polio-03-ogbe-ijaw-busy-tent.webp",
      width: 860,
      height: 670,
      alt: "A busy outreach tent with volunteers in purple caps registering and screening people beside a table of medicines",
      caption: "Registration, screening and free medicines for traders and families in the market.",
      credit: "Napoleon Healthcare Foundation",
    },
  ],

  sections: [
    {
      heading: "What polio is",
      body: "Polio is a highly infectious disease caused by a virus that attacks the nerves. It mainly affects children under five, but anyone who is not vaccinated can catch it.",
      points: [
        "It spreads mainly through the stool of an infected person, carried on unwashed hands, and less often through contaminated food or water.",
        "Most infected people show no signs at all, but they can still pass the virus on.",
        "About 1 in every 200 infections causes paralysis that cannot be reversed, usually of the legs. Some of those paralysed die when the muscles used for breathing stop working.",
        "There is no cure. Polio can only be prevented, and the vaccine, given several times, can protect a child for life.",
      ],
    },
    {
      heading: "Nigeria beat wild polio, and the world is close behind",
      body: "Nigeria was the last country in Africa with wild polio. Years of vaccination, much of it house to house in hard-to-reach communities, brought it to an end.",
      points: [
        "The WHO African Region was certified free of wild polio on 25 August 2020, after four years without a case.",
        "Wild polio now spreads in only two countries in the world: Afghanistan and Pakistan.",
        "Wild polio cases have fallen by more than 99% since 1988. When it is eradicated, polio will be only the second human disease ever wiped out, after smallpox.",
      ],
    },
    {
      heading: "Why polio is still a risk in Nigeria",
      body: "A different form of the virus, called variant polio (circulating vaccine-derived poliovirus, or cVDPV), still paralyses Nigerian children.",
      points: [
        "The polio drops contain a weakened virus. Where many children are unvaccinated, this weakened virus can pass from child to child for a year or more and slowly change until it can cause paralysis.",
        "The cause is low vaccination, not the vaccine. Where nearly every child is vaccinated, the virus has nowhere to spread.",
        "In 2026, Nigeria has recorded 50 children paralysed by variant polio: 36 by type 2 and 14 by type 3, the most recent in September. In 2025 there were 74.",
        "The vaccine protects against both wild and variant polio. Vaccinating every child is how outbreaks are stopped.",
      ],
    },
    {
      heading: "The polio vaccines your child needs",
      body: "Polio vaccines are free at government health facilities and are part of Nigeria's routine immunisation schedule.",
      points: [
        "Polio drops (oral polio vaccine): at birth, then at 6, 10 and 14 weeks. The birth dose should be given before the baby is two weeks old.",
        "Polio injection (inactivated polio vaccine, IPV): at 6 weeks and at 14 weeks, given in the thigh.",
        "Keep your child's immunisation card safe and take it to every clinic visit.",
        "If your child has missed any dose, go to the nearest primary health centre. Missed doses can still be given.",
      ],
    },
    {
      heading: "Say yes when vaccination teams come",
      body: "During polio campaigns, vaccination teams visit homes, markets, schools and places of worship to give extra polio drops to young children.",
      points: [
        "Extra doses are safe, even for a child who has completed routine vaccination, and each one adds protection.",
        "Vaccinators mark the child's finger with ink so that no child is missed or counted twice.",
        "Campaigns reach the children who missed routine doses, and that is exactly where variant polio spreads.",
      ],
    },
    {
      heading: "Clean habits help, alongside the vaccine",
      body: "Because polio spreads through stool, good hygiene slows it down, along with many other infections. It does not replace vaccination.",
      points: [
        "Wash hands with soap and water after using the toilet or changing a baby's nappy, and before preparing food or eating.",
        "Use a toilet or latrine, and dispose of children's stool safely.",
        "Drink water from a safe source, or treat it before drinking.",
      ],
    },
  ],

  warning: {
    heading: "Report sudden weakness in a child straight away",
    intro: "Health workers find polio outbreaks by checking every child who suddenly becomes weak or floppy. Take the child to the nearest health facility at once if a child under 15:",
    points: [
      "Suddenly becomes weak or floppy in one or both legs, or in an arm.",
      "Can no longer stand, walk or crawl the way they could before.",
      "Develops weakness after a fever, headache, stiff neck or pain in the limbs.",
    ],
    footer:
      "Health workers call this acute flaccid paralysis. Not every case is polio, but every case must be checked. Quick reporting lets the authorities test the child and protect the community before other children are paralysed.",
  },

  sources: [
    {
      label: "Poliomyelitis — fact sheet",
      publisher: "World Health Organization",
      url: "https://www.who.int/news-room/fact-sheets/detail/poliomyelitis",
    },
    {
      label: "Polio this week — country updates as of 21 October 2026",
      publisher: "Global Polio Eradication Initiative",
      url: "https://polioeradication.org/about-polio/polio-this-week/",
    },
    {
      label: "Variant poliovirus (cVDPV)",
      publisher: "Global Polio Eradication Initiative",
      url: "https://polioeradication.org/about-polio/the-virus/vaccine-derived-polioviruses/",
    },
    {
      label: "WHO African Region certified wild polio-free, 25 August 2020",
      publisher: "World Health Organization",
      url: "https://www.who.int/news/item/25-08-2020-global-polio-eradication-initiative-applauds-who-african-region-for-wild-polio-free-certification",
    },
    {
      label: "Nigeria routine immunisation schedule",
      publisher: "NPHCDA, published by UNICEF Nigeria",
      url: "https://www.unicef.org/nigeria/media/9911/file/Nigeria%20Immunization%20Schedule.pdf.pdf",
    },
    {
      label: "World Polio Day",
      publisher: "Rotary International",
      url: "https://www.endpolio.org/world-polio-day",
    },
  ],
};
