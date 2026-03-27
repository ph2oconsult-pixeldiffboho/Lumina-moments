export interface Moment {
  title: string;
  theMoment: string;
  whatYouNotice: string;
  tryThis: string;
  whyThisMatters: string;
  laterReflective: string;
  laterCasual: string;
  finalReward: string;
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
            whatYouNotice: "A quiet 'I can't'.\nShoulders slightly up.\nEyes searching for yours.",
            tryThis: "Sit beside them. Say nothing. Just be there for ten seconds.",
            whyThisMatters: "Your presence is the safety net they need to try.",
            laterReflective: "I saw how you just sat with that for a moment. That was strong.",
            laterCasual: "Nice job taking your time there.",
            finalReward: "That moment? That’s confidence growing."
          },
          {
            title: "The Mistake",
            theMoment: "A glass spills or a drawing goes wrong.",
            whatYouNotice: "Immediate 'Oops'.\nA quick look to see if you're angry.\nWaiting for the reaction.",
            tryThis: "Smile. Say 'Oops' together. Clean it up as a team.",
            whyThisMatters: "Handling errors without drama removes the fear of failure.",
            laterReflective: "We handled that little mess perfectly. No drama.",
            laterCasual: "No big deal. We fixed it.",
            finalReward: "You just helped build real confidence."
          },
          {
            title: "The Choice",
            theMoment: "They have to pick between two simple things.",
            whatYouNotice: "Long pauses.\nAsking 'What do you think?'.\nLooking for the 'right' answer.",
            tryThis: "Say 'I trust your choice'. Then wait. Don't help.",
            whyThisMatters: "Deciding builds the muscle of self-trust.",
            laterReflective: "I trust your choices. That was a good one.",
            laterCasual: "I like what you picked.",
            finalReward: "That’s how small moments become big confidence."
          },
          {
            title: "The Effort",
            theMoment: "They are working hard on something difficult.",
            whatYouNotice: "Tongue poking out.\nDeep focus.\nHeavy breathing.",
            tryThis: "Describe what you see. 'You are really focusing on that line'.",
            whyThisMatters: "Noticing the work makes the effort feel valuable.",
            laterReflective: "I noticed how much focus you put into that.",
            laterCasual: "You really worked hard on that.",
            finalReward: "You anchored a win. That's a moment they'll remember."
          },
          {
            title: "The Success",
            theMoment: "They finally finish something they struggled with.",
            whatYouNotice: "A big smile.\nA look of relief.\nRunning to show you.",
            tryThis: "High-five. Ask 'How does that feel for you?'.",
            whyThisMatters: "Letting them own the pride makes the confidence internal.",
            laterReflective: "You stuck with it until it worked. That's resilience.",
            laterCasual: "You did it! Knew you could.",
            finalReward: "That’s how small moments become big confidence."
          }
        ]
      },
      {
        title: "Week 2 — Finding Their Feet",
        moments: [
          {
            title: "The Tangle",
            theMoment: "They are struggling with a zipper or a knot.",
            whatYouNotice: "Tugging hard.\nA frustrated huff.\nLooking for a way out.",
            tryThis: "Stand close. Don't touch. Wait for them to solve it or ask.",
            whyThisMatters: "Letting them struggle safely builds their own strength.",
            laterReflective: "You didn't give up on that zipper. You found a way.",
            laterCasual: "You got it! Nice work.",
            finalReward: "You just helped build real confidence."
          },
          {
            title: "The Wait",
            theMoment: "You are busy, and they want you right now.",
            whatYouNotice: "Pulling your sleeve.\nLoud voices.\nPacing.",
            tryThis: "Place a hand on their shoulder. Keep doing what you're doing.",
            whyThisMatters: "They learn they are important even when they aren't the center.",
            laterReflective: "I really appreciate how you waited while I finished.",
            laterCasual: "Thanks for being so patient.",
            finalReward: "That moment? That’s confidence growing."
          },
          {
            title: "The Big Jump",
            theMoment: "They are standing at the edge of a small drop or a new challenge.",
            whatYouNotice: "Looking down.\nShaking slightly.\nChecking your face.",
            tryThis: "Say 'I'm right here.' Don't reach out. Let them decide.",
            whyThisMatters: "Trusting their timing builds their internal compass.",
            laterReflective: "You decided when you were ready. That's self-trust.",
            laterCasual: "You did it when you felt ready. Good job.",
            finalReward: "That’s how small moments become big confidence."
          },
          {
            title: "The New Person",
            theMoment: "Someone they don't know says hello.",
            whatYouNotice: "Hiding behind your leg.\nLooking at the floor.\nSilence.",
            tryThis: "Say 'It's okay to take your time.' Don't force the 'hello'.",
            whyThisMatters: "Respecting their boundaries teaches them their comfort matters.",
            laterReflective: "I like how you listened to your own timing today.",
            laterCasual: "No rush to talk. You're doing fine.",
            finalReward: "You just helped build real confidence."
          },
          {
            title: "The Helping Hand",
            theMoment: "You are doing a chore or carrying something.",
            whatYouNotice: "Watching you closely.\nMoving toward you.\nReaching out.",
            tryThis: "Give them one small thing to carry. Even if it's just a spoon.",
            whyThisMatters: "Being useful makes them feel like a valued part of the team.",
            laterReflective: "We're a good team. That help made a difference.",
            laterCasual: "Thanks for the help! We got it done.",
            finalReward: "That moment? That’s confidence growing."
          }
        ]
      },
      {
        title: "Week 3 — Doing Something With It",
        moments: [
          {
            title: "The Decision",
            theMoment: "You notice what’s going on… and now you can choose what to do.",
            whatYouNotice: "You hesitate.\nYou think 'maybe later'.",
            tryThis: "Take one small step straight away. Not perfect. Just start.",
            whyThisMatters: "Action turns awareness into real change.",
            laterReflective: "You noticed the hesitation and moved anyway. That's growth.",
            laterCasual: "You just went for it. That was cool.",
            finalReward: "That’s how action starts. You're moving forward."
          },
          {
            title: "The Action",
            theMoment: "You notice something… and don’t wait as long.",
            whatYouNotice: "You still feel unsure.\nBut you move anyway.",
            tryThis: "Act before the doubt gets too loud.",
            whyThisMatters: "Speed builds momentum. Momentum builds confidence.",
            laterReflective: "You didn't let the doubt stop you today. I saw that.",
            laterCasual: "You moved fast today. Nice one.",
            finalReward: "You're getting faster. That's progress."
          },
          {
            title: "The Small Choice",
            theMoment: "A tiny decision needs to be made.",
            whatYouNotice: "Overthinking the small things.\nLooking for a 'perfect' path.",
            tryThis: "Pick one. Right now. It doesn't matter which.",
            whyThisMatters: "Decisiveness is a muscle. You're training it.",
            laterReflective: "Quick decisions build trust in yourself. Good work.",
            laterCasual: "Good call. Simple and quick.",
            finalReward: "You just saved time and built trust in yourself."
          },
          {
            title: "The Follow Through",
            theMoment: "You said you'd do something, and now it's time.",
            whatYouNotice: "Finding excuses.\nThe couch looks comfortable.",
            tryThis: "Do the thing. Just for two minutes.",
            whyThisMatters: "Keeping promises to yourself is the root of self-respect.",
            laterReflective: "You kept your word to yourself. That's powerful.",
            laterCasual: "You did exactly what you said. Nice.",
            finalReward: "You can trust your own word. That's huge."
          },
          {
            title: "The Review",
            theMoment: "The day is ending and you're looking back.",
            whatYouNotice: "Focusing on what went wrong.\nIgnoring the small wins.",
            tryThis: "Name one thing that worked today. Just one.",
            whyThisMatters: "What you focus on grows. Focus on the win.",
            laterReflective: "We did some meaningful work today. Let's keep it going.",
            laterCasual: "Good day today. We did well.",
            finalReward: "You're building a new habit. Keep going."
          }
        ]
      }
    ]
  },
  {
    title: "Phase 2 — Emotional Regulation",
    weeks: [
      {
        title: "Week 1 — The Storm",
        moments: [
          {
            title: "The Stuck Block",
            theMoment: "A toy isn't working the way they want it to.",
            whatYouNotice: "Gritting teeth.\nThrowing the piece down.\nA sharp, frustrated breath.",
            tryThis: "Narrate the feeling. 'That is so frustrating when it doesn't fit'. Then wait.",
            whyThisMatters: "Naming the feeling takes the power out of the explosion.",
            laterReflective: "You were frustrated, but you didn't let it break the whole game.",
            laterCasual: "Tough break with those blocks. You handled it.",
            finalReward: "You just taught them that frustration is okay to feel."
          },
          {
            title: "The Sensory Spike",
            theMoment: "The room is loud, bright, or busy, and they are starting to 'spin'.",
            whatYouNotice: "Hands over ears.\nRunning aimlessly.\nIncreased volume in their own voice.",
            tryThis: "Lower your own voice to a whisper. Move closer and just be still.",
            whyThisMatters: "Your calm becomes their anchor in a chaotic moment.",
            laterReflective: "I saw how you found your quiet even when it was loud earlier.",
            laterCasual: "Nice job staying cool when things got busy.",
            finalReward: "That’s how we build a calm internal world."
          },
          {
            title: "The Wrong Plate",
            theMoment: "A tiny detail isn't 'right' and it feels like the end of the world.",
            whatYouNotice: "Immediate tears.\n'I wanted the other one!'.\nRefusal to eat or play.",
            tryThis: "Acknowledge the preference without changing it. 'You really wanted the red one'.",
            whyThisMatters: "Validation doesn't mean giving in; it means being heard.",
            laterReflective: "It was hard when things weren't exactly right, but you kept going.",
            laterCasual: "Thanks for being flexible with the blue plate today.",
            finalReward: "Flexibility is a superpower. You're helping them find it."
          },
          {
            title: "The 'Not Fair'",
            theMoment: "A sibling or friend gets something they don't have right now.",
            whatYouNotice: "Comparing sizes or amounts.\n'Why do they get that?'.\nSlumped posture.",
            tryThis: "Focus on their 'enough'. 'You have exactly what you need right here'.",
            whyThisMatters: "Shifting focus from 'more' to 'enough' builds contentment.",
            laterReflective: "I noticed how you focused on your own fun today. That was great.",
            laterCasual: "You did a good job enjoying what you had.",
            finalReward: "Contentment starts with these small shifts."
          },
          {
            title: "The Tired Wall",
            theMoment: "It's late, and the smallest thing triggers a total collapse.",
            whatYouNotice: "Rubbing eyes.\nWhining over nothing.\nLosing physical coordination.",
            tryThis: "Skip the lesson. Just offer a 'body reset'—a hug or a quiet seat.",
            whyThisMatters: "When the brain is tired, connection is the only thing that works.",
            laterReflective: "We were both tired, but we stayed kind to each other.",
            laterCasual: "Glad we got some rest. You were a trooper.",
            finalReward: "You chose connection over correction. That's a win."
          }
        ]
      },
      {
        title: "Week 2 — The Bridge",
        moments: [
          {
            title: "The Five-Minute Warning",
            theMoment: "It's almost time to stop a favorite activity.",
            whatYouNotice: "Ignoring you.\nPlaying even harder.\nSaying 'No!'.",
            tryThis: "Get on their level. Make eye contact. Say 'Five more minutes, then we go'.",
            whyThisMatters: "Predictability reduces the anxiety of transitions.",
            laterReflective: "You handled leaving the park so well today. It was smooth.",
            laterCasual: "Thanks for listening to the timer. Made it easy.",
            finalReward: "Smooth transitions build a sense of cooperation."
          },
          {
            title: "The Shoe Struggle",
            theMoment: "You're in a rush, and they are moving in slow motion.",
            whatYouNotice: "Looking at their feet.\nPlaying with laces.\nGetting distracted by a bug.",
            tryThis: "Turn it into a race or a rhythm. 'Left foot, right foot, let's go!'.",
            whyThisMatters: "Playfulness bypasses the power struggle of 'hurry up'.",
            laterReflective: "We moved fast when we needed to. Good teamwork.",
            laterCasual: "Fastest shoes in the house today!",
            finalReward: "You traded a fight for a bit of fun. Well done."
          },
          {
            title: "The Screen Swap",
            theMoment: "The tablet or TV needs to go off for dinner.",
            whatYouNotice: "The 'zombie' stare.\nHand gripping the device.\nImmediate protest when it's gone.",
            tryThis: "Talk about what's next *before* turning it off. 'After this, it's taco time!'.",
            whyThisMatters: "Giving them a 'landing pad' makes the 'takeaway' easier.",
            laterReflective: "I liked how you moved from the screen to the table so easily.",
            laterCasual: "Good job switching gears for dinner.",
            finalReward: "You're helping them learn to regulate their own focus."
          },
          {
            title: "The Bath-to-Bed",
            theMoment: "The fun of the water needs to end for the quiet of the bed.",
            whatYouNotice: "Splashing more.\nRefusing to get out.\nRunning away naked.",
            tryThis: "Use a 'bridge' object—a favorite towel or a specific bedtime story.",
            whyThisMatters: "Consistent cues tell the brain it's safe to slow down.",
            laterReflective: "Our bedtime routine felt really peaceful tonight. Thank you.",
            laterCasual: "Nice job getting ready for sleep.",
            finalReward: "Peaceful nights start with these small bridges."
          },
          {
            title: "The Store Exit",
            theMoment: "Leaving a place full of things they want but can't have.",
            whatYouNotice: "Touching everything.\nAsking 'Can I have this?'.\nDragging feet toward the door.",
            tryThis: "Take a 'mental picture' of the toy for the wish list. Then walk.",
            whyThisMatters: "Acknowledging the desire without the purchase builds self-control.",
            laterReflective: "You were tempted by all those toys, but you stayed focused on our walk.",
            laterCasual: "Good job leaving the store without a fuss.",
            finalReward: "That's self-control in action. You're building it."
          }
        ]
      },
      {
        title: "Week 3 — The Anchor",
        moments: [
          {
            title: "The Heavy Sigh",
            theMoment: "You notice their energy is getting jagged or frantic.",
            whatYouNotice: "Short breaths.\nShoulders up to ears.\nMoving too fast.",
            tryThis: "Model a big, dramatic 'reset breath' yourself. Don't tell them to do it.",
            whyThisMatters: "Co-regulation is more powerful than instructions.",
            laterReflective: "I noticed we both took a breath when things got busy. It helped.",
            laterCasual: "Nice deep breath there. Felt good, right?",
            finalReward: "You're teaching them how to find their own center."
          },
          {
            title: "The Big Hug",
            theMoment: "They are overwhelmed by a big emotion (sad or mad).",
            whatYouNotice: "Tense body.\nLoud crying.\nLooking lost.",
            tryThis: "Offer a 'safe squeeze'. Firm pressure can ground a nervous system.",
            whyThisMatters: "Physical touch is the fastest way to lower cortisol.",
            laterReflective: "That hug really helped us both reset. I'm glad we did that.",
            laterCasual: "Best hug of the day. Thanks.",
            finalReward: "You're their safe harbor. That's a huge gift."
          },
          {
            title: "The Water Break",
            theMoment: "Things are spiraling, and words aren't working anymore.",
            whatYouNotice: "Repetitive arguing.\nFlushed face.\nCircular logic.",
            tryThis: "Say 'Let's have a quick drink of water'. The physical act of swallowing resets the brain.",
            whyThisMatters: "A physical reset breaks the emotional loop.",
            laterReflective: "That little water break really helped us find our words again.",
            laterCasual: "Good reset. We're back on track.",
            finalReward: "You found a simple tool for a complex moment."
          },
          {
            title: "The Low Light",
            theMoment: "The evening energy is too high and getting chaotic.",
            whatYouNotice: "Running in circles.\nLoud screeching.\nBumping into things.",
            tryThis: "Turn off the overhead lights. Use a lamp or just the dim light.",
            whyThisMatters: "Environment dictates energy. Lower the light, lower the pulse.",
            laterReflective: "I loved how the room felt quieter once we dimmed the lights.",
            laterCasual: "Nice and cozy in here now.",
            finalReward: "You're learning to lead the energy of the room."
          },
          {
            title: "The Repair",
            theMoment: "You or they lost your cool, and now there's a distance.",
            whatYouNotice: "Avoiding eye contact.\nQuietness.\nA heavy feeling in the air.",
            tryThis: "Apologize for your part. 'I'm sorry I raised my voice. I was frustrated'.",
            whyThisMatters: "Repairing the bond is more important than being 'right'.",
            laterReflective: "I'm glad we talked about what happened. Our bond is strong.",
            laterCasual: "Glad we're back to being buddies.",
            finalReward: "You just taught them that mistakes can be fixed. That's love."
          }
        ]
      }
    ]
  }
];
