export const reportFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfXLqk9Q9hY7I-tAa3BSpHElz7IsMZ26rwPjAPzhJPW7BV8EA/viewform?fbclid=IwY2xjawNoxXxleHRuA2FlbQIxMABicmlkETFYa3VkUXR4ZGZEREZqSkROAR6RCgz55cuj_1yim0FYlcCVBvdwCH6Nh2OYC4pGPBlaZ67S--OqU2NwrPwfFA_aem_2wiYjUyn7aBoZEivJEIYTQ';

export const facebookUrl = 'https://www.facebook.com/groups/stlacroyogaclub/';

export const reportIssueContent = {
  intro: "If something happens that you'd like the group admins to be aware of, please use THIS FORM to anonymously or unanonymously report it.",
  contact: "If you're not comfortable bringing an issue to all of the admins, feel free to send a direct message to any of the admins via Facebook.",
};

export type ConductItem = {
  title: string;
  content: string;
};

export type ConductSection = {
  title: string;
  items: ConductItem[];
  bgColor: 'gray' | 'white';
};

export const conductData: ConductSection[] = [
  {
    title: 'CONSENT',
    bgColor: 'white',
    items: [
      {
        title: 'Get Consent',
        content:
          'Ask and communicate comfort levels with a potential acro partner before working together to avoid unintentionally making someone uncomfortable.',
      },
      {
        title: 'No means NO',
        content: "It's not up for debate, does not require an explanation, and shouldn't be taken personally.",
      },
      {
        title: 'A "yes" Can Change to a "NO" At Any Time',
        content:
          'Previous consent does not mean continued consent. A person can withdraw consent at any time, even if they initially agreed. If someone changes their mind and says "no," that decision must be respected immediately. Pushing someone to continue after they\'ve withdrawn consent violates their autonomy and boundaries. Respect cues such as "down". Be in tune with your partner; if their words are saying "yes" but their body is saying "no", err on the side of caution.',
      },
    ],
  },
  {
    title: 'SAFETY',
    bgColor: 'white',
    items: [
      {
        title: 'Use Accurate Self-Assessment',
        content: 'Know your limits/capabilities and respect them.',
      },
      {
        title: 'Every Body is Different',
        content:
          "Be mindful of your partner's capabilities, and use safe progressions. Different partnerships have different strengths and weaknesses, and not all skills transfer.",
      },
      {
        title: 'Reduce Risk',
        content: 'Use the appropriate safety infrastructure for the situation: spotters, experienced acro yogis, crash mats, etc.',
      },
      {
        title: 'Always Meet in Groups of 3 or More',
        content: "If you're unsure of the group size, invite a buddy along for safety.",
      },
    ],
  },
  {
    title: 'HARASSMENT',
    bgColor: 'white',
    items: [
      {
        title: 'Sexual Harassment is not Tolerated',
        content:
          "Acro is physical in nature, but physical doesn't mean sexual. Unwanted sexual advances, sexual coercion, or verbal/physical conduct of sexual nature are not allowed.",
      },
      {
        title: 'Be Kind',
        content:
          'Stay away from comments about weight, size, or physical appearance. Be kind; discussing mechanics of an interaction is important, but choose your words carefully.',
      },
      {
        title: 'We are an Inclusive Group',
        content:
          "Bullying of any kind isn't allowed, and degrading comments about things like race, religion, culture, sexual orientation, gender or identity will not be tolerated.",
      },
    ],
  },
];
