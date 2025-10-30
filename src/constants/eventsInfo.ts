export type Event = {
  location: string;
  days: string;
  address: string;
  lead: string;
  buttonText: string;
  buttonUrl: string;
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
    location: 'Tower Grove Park',
    days: 'Sundays 2:00 PM - 5:00 PM',
    address: '3606 Arsenal St, St. Louis, MO 63116',
    lead: 'Josh & Lisa (Usually)',
    buttonText: 'Learn more',
    buttonUrl: 'https://facebook.com/groups/stlacroyogaclub/',
  },
  {
    location: 'Tower Grove Park',
    days: 'Wednesdays 6:00 PM - 8:00 PM',
    address: '3606 Arsenal St, St. Louis, MO 63116',
    lead: 'Josh & Lisa (Usually)',
    buttonText: 'Learn more',
    buttonUrl: 'https://facebook.com/groups/stlacroyogaclub/',
  },
];
