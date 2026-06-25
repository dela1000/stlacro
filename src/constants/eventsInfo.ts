export type Event = {
  location: string;
  locationUrl?: string;
  days: string;
  address: string;
  lead: string;
  buttonText: string;
  buttonUrl: string;
  info?: string;
};

export type Workshop = {
  title: string;
  location: string;
  locationUrl?: string;
  days: string;
  address: string;
  lead: string;
  info: string;
  buttonText: string;
  buttonUrl: string;
  endDate: string;
};

export const eventsInfo: Event[] = [
  {
    location: 'Climb So iLL at the Power Plant',
    days: 'Tuesdays 6:30 PM - 8:00 PM',
    address: '1419 Carroll St, St. Louis, MO 63104',
    lead: 'Joelle',
    buttonText: 'Sign up here',
    buttonUrl:
      'https://app.rockgympro.com/b/widget/?a=offering&offering_guid=1f2f4d46dcb944879be518ed677ab63b&widget_guid=06b83d0ddad54d23bdf3338515e791df&course_guid=1b04770c58c8ff722255ae692805271d036f4291&mode=p&_gl=1*13mjniy*_ga*MTExNjI0NzAyNC4xNzcyMDQxNTkz*_ga_BTSPCJMNEC*czE3NzIwNDE1OTIkbzEkZzAkdDE3NzIwNDE1OTIkajYwJGwwJGgw',
    info: '$16/class for non-members, free for CSI members. 10 punch yoga pass available to save some bucks for non-members',
  },
];

export const jamsInfo: Event[] = [
  {
    location: 'Tower Grove Park or Indoor Location (Weather Dependent)',
    days: 'Sundays 2:00 PM - 5:00 PM',
    address: '3606 Arsenal St, St. Louis, MO 63116',
    lead: 'Josh & Lisa (Usually)',
    buttonText: 'Learn more',
    buttonUrl: 'https://www.facebook.com/groups/StLAcroYogaClub/events',
  },
  {
    location: 'Currently at the MOBOT Whitaker Festival at the Botanical Gardens, or Indoor Location (Weather Dependent)',
    days: 'Wednesdays 6:30 PM - 9:00 PM',
    address: '4344 Shaw Blvd, St. Louis, MO 63110',
    // address: '3606 Arsenal St, St. Louis, MO 63116',
    lead: 'Josh & Lisa (Usually)',
    buttonText: 'Learn more',
    buttonUrl: 'https://www.facebook.com/groups/StLAcroYogaClub/events',
  },
];

export const workshopsInfo: Workshop[] = [
  {
    title: 'Intro to AcroYoga',
    location: 'MOVE by BJC',
    days: 'March 7, 14, 28, April 4, 11, 25, 2026',
    address: '4220 Duncan Ave Unit 103, St. Louis, MO 63110',
    lead: 'Kimberly Akuna',
    info: 'Discovery Topics, Skills & drills, Acroyoga foundations, Static moves & flows, Intro to washing machines. $150 per person or discount for registering in pairs $240/pair. No experience necessary.',
    buttonText: 'Register',
    buttonUrl: 'https://www.movebybjc.org/',
    endDate: '2026-04-25',
  },
];

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
