export interface Day {
  title: string;
  youKnowWhen: string;
  whatHappens: string;
  tryThis: string;
  parentMoment: string;
}

export interface Week {
  title: string;
  days: Day[];
}

export interface Phase {
  title: string;
  weeks: Week[];
}

export const journeyData: Phase[] = [
  {
    title: "Phase 1 — Understanding Myself",
    weeks: [
      {
        title: "Week 1 — Noticing Feelings",
        days: [
          {
            title: "When something feels off",
            youKnowWhen: "You're playing or working and suddenly stop, feeling like something is wrong, but you can't name it.",
            whatHappens: "You get quiet, fidget, or get snappy without a clear reason.",
            tryThis: "Stop what you are doing, look at each other, and name one thing you feel in your body right now (e.g., 'my chest feels tight').",
            parentMoment: "Later, ask: 'When we stopped earlier, did your body feel better after we named it?'"
          },
          {
            title: "When you feel annoyed but don’t know why",
            youKnowWhen: "Everything feels irritating—the noise, the game, the chair—and you want to be left alone.",
            whatHappens: "You snap at someone or push things away.",
            tryThis: "Together, find a 'quiet corner' for 2 minutes. Sit back-to-back without talking, just breathing.",
            parentMoment: "Ask: 'Did sitting back-to-back help the irritation feel smaller?'"
          },
          {
            title: "When your mood changes quickly",
            youKnowWhen: "You were laughing a moment ago, and now you feel sad or angry for no apparent reason.",
            whatHappens: "You feel confused and might withdraw.",
            tryThis: "When you notice the shift, say 'Switch!' and both of you stand up and shake your whole body for 10 seconds.",
            parentMoment: "Ask: 'Did shaking help you feel like you could start fresh?'"
          },
          {
            title: "When something small feels big",
            youKnowWhen: "You drop a pencil or make a tiny mistake, and it feels like the end of the world.",
            whatHappens: "You feel like crying or shouting.",
            tryThis: "Together, pick up the object and say 'Oops!' loudly, then give it a high-five.",
            parentMoment: "Ask: 'Was it easier to laugh at the mistake after we high-fived?'"
          },
          {
            title: "When you feel quiet for no reason",
            youKnowWhen: "You just don't feel like talking to anyone, even if nothing bad happened.",
            whatHappens: "You feel lonely but also want to be alone.",
            tryThis: "Sit together and draw a picture on the same piece of paper for 5 minutes without saying a word.",
            parentMoment: "Ask: 'Did drawing together feel okay even without talking?'"
          },
          {
            title: "When you want to do it yourself",
            youKnowWhen: "You're trying to build or fix something and it's not working, but you don't want help.",
            whatHappens: "You get tense and push my hands away.",
            tryThis: "I'll sit nearby and just watch. When you're ready, just point to where you're stuck.",
            parentMoment: "Ask: 'Did it feel better knowing I was just waiting until you were ready?'"
          },
          {
            title: "When you feel proud of a small thing",
            youKnowWhen: "You finished something you've been working on, even if it's just a small drawing or a block tower.",
            whatHappens: "You want to show it to me and see me smile.",
            tryThis: "Take a 'mental picture' of it together. Close your eyes and describe one detail you both love.",
            parentMoment: "Ask: 'How does it feel to share that proud moment with me?'"
          }
        ]
      },
      { title: "Week 2 — Naming Feelings", days: [] },
      { title: "Week 3 — What I Do When I Feel This", days: [] }
    ]
  },
  { title: "Phase 2 — Taking Action", weeks: [{title: "Week 1", days: []}, {title: "Week 2", days: []}, {title: "Week 3", days: []}] },
  { title: "Phase 3 — With Other People", weeks: [{title: "Week 1", days: []}, {title: "Week 2", days: []}, {title: "Week 3", days: []}] }
];
