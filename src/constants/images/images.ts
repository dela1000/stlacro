// Acro
import a1 from 'src/assets/images/acro/1.jpg';
import a2 from 'src/assets/images/acro/2.jpg';
import a3 from 'src/assets/images/acro/3.jpg';
import a4 from 'src/assets/images/acro/4.jpg';

// Socials
import fb from 'src/assets/socials/fb2.png';
import insta from 'src/assets/socials/insta2.png';
import type { PhotoImage, Section } from 'src/constants/images/types';

// Acro
const acroImages: PhotoImage[] = [a4, a1, a3, a2];

// Socials
export const instagram = insta;
export const facebook = fb;

// Section
export const section: Section = { id: 'acro', title: 'STL Acro', images: acroImages };
