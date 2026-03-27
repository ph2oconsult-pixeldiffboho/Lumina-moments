export interface Day {
  title: string;
  youKnowWhen: string;
  whatHappens: string;
  tryThis: string;
  parentMoment: string;
  completionMessage?: string;
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
        title: "Week 1 — Noticing the Shift",
        days: [
          {
            title: "Noticing the Shift",
            youKnowWhen: "You're in the middle of something and feel your energy change.",
            whatHappens: "You become a little quieter or more restless than usual.",
            tryThis: "Stop for a second, look at each other, and name one thing you feel in your body right now (like 'my feet feel heavy').",
            parentMoment: "Naming that feeling helped us get back to what we were doing, didn't it?"
          },
          {
            title: "Resetting Energy",
            youKnowWhen: "Everything feels a bit much—the noise, the room, or the task at hand.",
            whatHappens: "You feel a bit irritated or just want some space.",
            tryThis: "Find a 'quiet corner' for 2 minutes. Sit back-to-back without talking, just breathing together.",
            parentMoment: "That quiet time really helped us reset, didn't it?"
          },
          {
            title: "Shifting Gears",
            youKnowWhen: "You were full of energy a moment ago, and now you feel like slowing down.",
            whatHappens: "Your mood shifts and you're not sure why.",
            tryThis: "When you notice the shift, say 'Switch!' and both of you stand up and shake your whole body for 10 seconds.",
            parentMoment: "Shaking it out helped us start fresh, didn't it?"
          },
          {
            title: "Handling the Hiccups",
            youKnowWhen: "A small mistake happens, like dropping something or getting a detail wrong.",
            whatHappens: "You feel like reacting strongly to a small thing.",
            tryThis: "Together, pick up the object and say 'Oops!' loudly, then give it a high-five.",
            parentMoment: "We handled that little hiccup together. High-five!"
          },
          {
            title: "Quiet Connection",
            youKnowWhen: "You're feeling a bit reflective and don't really want to talk much.",
            whatHappens: "You're happy to be near someone, but you're keeping to yourself.",
            tryThis: "Sit together and draw on the same piece of paper for 5 minutes without saying a word.",
            parentMoment: "It was nice just being together while we drew, wasn't it?"
          },
          {
            title: "Taking the Lead",
            youKnowWhen: "You're working on something and want to figure it out on your own.",
            whatHappens: "You're focused and prefer to try it without help for a while.",
            tryThis: "I'll sit nearby and just watch. When you're ready, you can show me what you've done.",
            parentMoment: "I loved watching you take the lead on that."
          },
          {
            title: "Celebrating Progress",
            youKnowWhen: "You've finished something you've been working on, no matter how small.",
            whatHappens: "You're feeling proud and want to share that feeling.",
            tryThis: "Take a 'mental picture' of it together. Close your eyes and describe one detail you both love.",
            parentMoment: "Sharing that proud moment made it even better, didn't it?"
          }
        ]
      },
      { title: "Week 2 — Naming Feelings", days: [] },
      {
        title: "Week 3 — Doing Something With It",
        days: [
          {
            title: "When you decide to do something",
            youKnowWhen: "You notice what’s going on… And now you can choose what to do.",
            whatHappens: "You hesitate. You think “maybe later”.",
            tryThis: "Take one small step straight away. Not perfect. Just start.",
            parentMoment: "What was one small step you took today?",
            completionMessage: "That’s how action starts."
          },
          {
            title: "When you act earlier",
            youKnowWhen: "You notice something… And don’t wait as long.",
            whatHappens: "You still feel unsure. But you act anyway.",
            tryThis: "Try to act just a little bit sooner than you usually would.",
            parentMoment: "I noticed you acted quickly today. How did that feel?",
            completionMessage: "Acting sooner builds confidence."
          },
          {
            title: "When you simplify",
            youKnowWhen: "Something feels complicated or too big to handle.",
            whatHappens: "You feel overwhelmed. You want to stop.",
            tryThis: "Break it down. What is the very next tiny thing you can do?",
            parentMoment: "You made that look simple by taking it one step at a time.",
            completionMessage: "Simple steps lead to big results."
          },
          {
            title: "When you handle the discomfort",
            youKnowWhen: "Doing something new feels a bit awkward or uncomfortable.",
            whatHappens: "You want to go back to what feels easy.",
            tryThis: "Stay with it for just one more minute. You’re doing it.",
            parentMoment: "I saw you stick with that even when it felt new. That’s growth.",
            completionMessage: "You can handle new things."
          },
          {
            title: "When you adjust and try again",
            youKnowWhen: "Something didn’t go exactly as you planned.",
            whatHappens: "You feel like it didn’t work. You might feel frustrated.",
            tryThis: "Adjust one small thing and try it again straight away.",
            parentMoment: "I loved how you adjusted and went again. That’s how we learn.",
            completionMessage: "Adjusting is part of the process."
          },
          {
            title: "When you notice what works",
            youKnowWhen: "You did something and it felt a bit easier than before.",
            whatHappens: "You might not notice it at first. It just feels smoother.",
            tryThis: "Stop and notice: What exactly did you do that worked?",
            parentMoment: "What’s one thing you did today that felt good?",
            completionMessage: "Noticing what works helps you do it again."
          },
          {
            title: "When you trust yourself",
            youKnowWhen: "You have a choice to make and you feel a bit of a 'tug'.",
            whatHappens: "You look for someone else to tell you what to do.",
            tryThis: "Listen to that tug. Make the choice that feels right to you.",
            parentMoment: "I trust your judgment. You made a great choice today.",
            completionMessage: "Trusting yourself is a superpower."
          }
        ]
      }
    ]
  },
  { title: "Phase 2 — Taking Action", weeks: [{title: "Week 1", days: []}, {title: "Week 2", days: []}, {title: "Week 3", days: []}] },
  { title: "Phase 3 — With Other People", weeks: [{title: "Week 1", days: []}, {title: "Week 2", days: []}, {title: "Week 3", days: []}] }
];
