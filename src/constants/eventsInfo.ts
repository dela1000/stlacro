export type Event = {
  location: string;
  locationUrl?: string;
  days: string;
  address: string;
  lead: string;
  buttonText: string;
  buttonUrl: string;
};

export type Workshop = {
  title: string;
  location: string;
  locationUrl?: string;
  days: string;
  address: string;
  lead: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  endDate: string;
};

export const eventsInfo: Event[] = [
  {
    location: 'Climb So iLL at the Power Plant',
    days: 'Tuesdays 6:30 PM - 8:00 PM',
    address: '1419 Carroll St, St. Louis, MO 63104',
    lead: 'Joelle & Daniel',
    buttonText: 'Learn more',
    buttonUrl: 'https://stlouis.climbsoill.com/classes-yoga-power-plant/#:~:text=ACRO%20YOGA',
  },
];

export const jamsInfo: Event[] = [
  {
    location: 'Tower Grove Park or Indoor Location (Weather Dependent)',
    days: 'Sundays 2:00 PM - 5:00 PM',
    address: '3606 Arsenal St, St. Louis, MO 63116',
    lead: 'Josh & Lisa (Usually)',
    buttonText: 'Learn more',
    buttonUrl: 'https://facebook.com/groups/stlacroyogaclub/',
  },
  {
    location: 'Tower Grove Park or Indoor Location (Weather Dependent)',
    days: 'Wednesdays 6:00 PM - 8:00 PM',
    address: '3606 Arsenal St, St. Louis, MO 63116',
    lead: 'Josh & Lisa (Usually)',
    buttonText: 'Learn more',
    buttonUrl: 'https://facebook.com/groups/stlacroyogaclub/',
  },
];

export const workshopsInfo: Workshop[] = [];

// Example event:
// {
//   title: 'Intro to Acroyoga Weekend',
//   location: 'The Nest Yoga Studio',
//   days: 'March 14-15, 2026',
//   address: '123 Main St, St. Louis, MO 63101',
//   lead: 'Daniel & Joelle',
//   description: 'A weekend intensive for beginners learning the foundations of acroyoga.',
//   buttonText: 'Register',
//   buttonUrl: 'https://example.com',
//   endDate: '2026-03-15',
// },
