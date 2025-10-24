import type { PhotoImage, Section } from 'src/constants/images/types';

// Acro
import a1 from 'src/assets/images/acro/1.jpg';
import a2 from 'src/assets/images/acro/2.jpg';
import a3 from 'src/assets/images/acro/3.jpg';
import a4 from 'src/assets/images/acro/4.jpg';
import a5 from 'src/assets/images/acro/5.jpg';

// Socials
import discw from 'src/assets/socials/discw.png';
import fbw from 'src/assets/socials/fbw.png';
import instaw from 'src/assets/socials/instaw.png';

import discb from 'src/assets/socials/discb.png';
import fbb from 'src/assets/socials/fbb.png';
import instab from 'src/assets/socials/instab.png';

// Acro
const acroImages: PhotoImage[] = [a4, a1, a3, a2, a5];

// Socials
export const instagramw = instaw;
export const facebookw = fbw;
export const discordw = discw;

export const instagramb = instab;
export const facebookb = fbb;
export const discordb = discb;

// Section
export const section: Section = { id: 'acro', images: acroImages };
