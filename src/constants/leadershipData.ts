import daniel from 'src/assets/leaders/daniel.jpg';
import joelle from 'src/assets/leaders/joelle.jpg';
import josh from 'src/assets/leaders/Josh.jpg';
import lisa from 'src/assets/leaders/lisa.jpg';

export type Leader = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const leadershipData: Leader[] = [
  {
    name: 'Lisa Tang',
    role: 'Community Leader, Jam Host',
    bio: 'Lisa brings her background in dance and circus arts to the St. Louis AcroYoga community. She organizes our weekly jams and ensures everyone feels welcome, regardless of their experience level. Ask her about flying crocs!',
    image: lisa,
  },
  {
    name: 'Josh Lester',
    role: 'Community Leader, Jam Host',
    bio: 'Josh brings his background in BJJ and physical therapy to the St. Louis AcroYoga community. With his unique abilities, he helps make our jams accessible and beneficial for all levels. He is also known for his creative transitions and playful approach to movement.',
    image: josh,
  },
  {
    name: 'Joelle Fettuccine (Fronzaglio)',
    role: 'Class Instructor',
    bio: 'Joelle specializes in teaching beginners and making AcroYoga approachable for everyone. Her patience and clear instruction have helped many students take their first flight. She bases and flies with equal skill, and her classes are always filled with laughter and encouragement.',
    image: joelle,
  },
  {
    name: 'Daniel De La Rosa',
    role: 'Class Instructor, Jam Host',
    bio: 'Daniel has been practicing AcroYoga for over 10 years and completed his teacher training with AcroYoga International in 2019. He is passionate about building community through movement and has helped hundreds of students all over the world discover the joy of basing and flying.',
    image: daniel,
  },
];
