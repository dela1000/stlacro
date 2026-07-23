import type { PhotoImage, Section } from 'src/constants/images/types';

// Acro
import a1 from 'src/assets/images/acro/1.jpg';
import a10 from 'src/assets/images/acro/10.jpg';
import a11 from 'src/assets/images/acro/11.jpg';
import a12 from 'src/assets/images/acro/12.png';
import a13 from 'src/assets/images/acro/13.jpg';
import a2 from 'src/assets/images/acro/2.jpg';
import a3 from 'src/assets/images/acro/3.jpg';
import a4 from 'src/assets/images/acro/4.jpg';
import a5 from 'src/assets/images/acro/5.jpg';
import a6 from 'src/assets/images/acro/6.jpg';
import a7 from 'src/assets/images/acro/7.jpg';
import a8 from 'src/assets/images/acro/8.jpg';
import a9 from 'src/assets/images/acro/9.jpg';

// Socials
import discw from 'src/assets/socials/discw.png';
import fbw from 'src/assets/socials/fbw.png';
import instaw from 'src/assets/socials/instaw.png';

import discb from 'src/assets/socials/discb.png';
import fbb from 'src/assets/socials/fbb.png';
import instab from 'src/assets/socials/instab.png';

// Acro
const acroImages: PhotoImage[] = [a4, a1, a3, a2, a5, a6, a7, a8, a9, a10, a11, a12, a13];

// Socials
export const instagramw = instaw;
export const facebookw = fbw;
export const discordw = discw;

export const instagramb = instab;
export const facebookb = fbb;
export const discordb = discb;

// Section
export const section: Section = { id: 'acro', images: acroImages };
