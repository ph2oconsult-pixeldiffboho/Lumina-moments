export interface Moment {
  title: string;
  theMoment: string;
  childExperience: string;
  parentRole: string;
  tryThisNow: string;
  reinforcement: string;
}

export interface Week {
  title: string;
  moments: Moment[];
}

export interface Phase {
  title: string;
  weeks: Week[];
}

export const journeyData: Phase[] = [
  {
    title: "Phase 1 — Building the Foundation",
    weeks: [
      {
        title: "Week 1 — Small Wins",
        moments: [
          {
            title: "The Hesitation",
            theMoment: "They stop before starting something new.",
            childExperience: "They are learning that it's okay to pause and observe before diving in.",
            parentRole: "Sit beside them. Say nothing. Just be there for ten seconds.",
            tryThisNow: "When they pause, just wait. Your presence is the safety net they need to try.",
            reinforcement: "Your quiet presence gave them the space to find their own courage."
          },
          {
            title: "The Mistake",
            theMoment: "A glass spills or a drawing goes wrong.",
            childExperience: "They are learning that mistakes are just part of life, not a reason for fear.",
            parentRole: "Smile. Say 'Oops' together. Clean it up as a team.",
            tryThisNow: "Handle the spill without drama. Show them that fixing things is just another task.",
            reinforcement: "Handling errors without drama removes the fear of failure forever."
          },
          {
            title: "The Choice",
            theMoment: "They have to pick between two simple things.",
            childExperience: "They are practicing the muscle of self-trust by making a decision.",
            parentRole: "Say 'I trust your choice'. Then wait. Don't help.",
            tryThisNow: "Offer two options. Say 'I trust you' and let them own the decision.",
            reinforcement: "Deciding for themselves builds the foundation of internal confidence."
          },
          {
            title: "The Effort",
            theMoment: "They are working hard on something difficult.",
            childExperience: "They are discovering that the process is just as valuable as the result.",
            parentRole: "Describe what you see. 'You are really focusing on that line'.",
            tryThisNow: "Notice the work, not the win. Point out the focus you see in their eyes.",
            reinforcement: "Noticing the effort makes the hard work feel worth doing."
          },
          {
            title: "The Success",
            theMoment: "They finally finish something they struggled with.",
            childExperience: "They are feeling the internal pride of overcoming a challenge.",
            parentRole: "High-five. Ask 'How does that feel for you?'.",
            tryThisNow: "Let them name the feeling. Ask: 'Are you proud of that?' and listen.",
            reinforcement: "Letting them own the pride makes the confidence stay inside them."
          }
        ]
      },
      {
        title: "Week 2 — Finding Their Feet",
        moments: [
          {
            title: "The Tangle",
            theMoment: "They are struggling with a zipper or a knot.",
            childExperience: "They are building resilience by working through a physical frustration.",
            parentRole: "Stand close. Don't touch. Wait for them to solve it or ask.",
            tryThisNow: "Watch the struggle without jumping in. Give them the gift of solving it.",
            reinforcement: "Letting them struggle safely builds their own internal strength."
          },
          {
            title: "The Wait",
            theMoment: "You are busy, and they want you right now.",
            childExperience: "They are learning that they are important even when they aren't the center.",
            parentRole: "Place a hand on their shoulder. Keep doing what you're doing.",
            tryThisNow: "Acknowledge them with a touch, but finish your task first.",
            reinforcement: "Patience is learned when they feel seen but not immediately served."
          },
          {
            title: "The Big Jump",
            theMoment: "They are standing at the edge of a small drop or a new challenge.",
            childExperience: "They are learning to listen to their own internal sense of readiness.",
            parentRole: "Say 'I'm right here.' Don't reach out. Let them decide.",
            tryThisNow: "Stay near but stay still. Let them choose the moment they are ready.",
            reinforcement: "Trusting their own timing builds a reliable internal compass."
          },
          {
            title: "The New Person",
            theMoment: "Someone they don't know says hello.",
            childExperience: "They are learning that their boundaries and comfort levels matter.",
            parentRole: "Say 'It's okay to take your time.' Don't force the 'hello'.",
            tryThisNow: "Protect their space. Show them you respect their social timing.",
            reinforcement: "Respecting their boundaries teaches them that their comfort is valid."
          },
          {
            title: "The Helping Hand",
            theMoment: "You are doing a chore or carrying something.",
            childExperience: "They are feeling like a capable and valued member of the family team.",
            parentRole: "Give them one small thing to carry. Even if it's just a spoon.",
            tryThisNow: "Invite them in. Give them a real task that actually helps you.",
            reinforcement: "Being useful is the fastest way to feel confident and capable."
          }
        ]
      },
      {
        title: "Week 3 — Making Choices",
        moments: [
          {
            title: "Choosing an Outfit",
            theMoment: "Getting ready in the morning.",
            childExperience: "They are learning that their preferences matter and they have agency over their day.",
            parentRole: "Offer two clear options and step back.",
            tryThisNow: "Pick two shirts. Ask: 'Which one feels like you today?' and wait for the choice.",
            reinforcement: "Choosing for themselves builds the foundation of self-trust."
          },
          {
            title: "The Snack Decision",
            theMoment: "Choosing what to eat between meals.",
            childExperience: "They are practicing weighing options and living with the outcome of a decision.",
            parentRole: "Present the choices and accept the result without comment.",
            tryThisNow: "Place an apple and a banana on the table. Say: 'You decide which one we have today.'",
            reinforcement: "Every small choice is a vote for their own independence."
          },
          {
            title: "Picking the Path",
            theMoment: "Walking to the park or around the block.",
            childExperience: "They are leading the way and feeling the weight of being the guide.",
            parentRole: "Follow their lead physically, staying close but letting them point the way.",
            tryThisNow: "At the next corner, stop. Ask: 'Left or right?' and follow whichever way they point.",
            reinforcement: "Leading the way builds the confidence to navigate the world."
          },
          {
            title: "The Bedtime Story",
            theMoment: "Selecting the final activity of the day.",
            childExperience: "They are prioritizing their interests and managing their time.",
            parentRole: "Set the limit (one book) and let them curate the experience.",
            tryThisNow: "Show them the bookshelf. Say: 'We have time for one story. Which one is the winner tonight?'",
            reinforcement: "Deciding what matters most is a skill they will use forever."
          },
          {
            title: "The Toy Rotation",
            theMoment: "Deciding what to play with or keep out.",
            childExperience: "They are learning to focus by narrowing their options.",
            parentRole: "Help them filter the noise so they can hear their own interests.",
            tryThisNow: "Bring out three toys. Say: 'We’re keeping one out for now. Which one stays?'",
            reinforcement: "Focus starts with the courage to say no to the things that don't matter."
          }
        ]
      }
    ]
  }
];
