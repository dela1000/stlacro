import { discordb, discordw, facebookb, facebookw, instagramb, instagramw } from 'src/constants/images/images';

type Props = {
  darkMode?: boolean;
};

const Socials = ({ darkMode }: Props) => {
  return (
    <div className="flex gap-3 items-center">
      <a href="https://www.instagram.com/stlacro/" target="_blank" rel="noopener noreferrer">
        <img src={darkMode ? instagramb : instagramw} alt="logo" className="h-10 w-10" />
      </a>
      <a href="https://www.facebook.com/groups/stlacroyogaclub/" target="_blank" rel="noopener noreferrer">
        <img src={darkMode ? facebookb : facebookw} alt="logo" className="h-10 w-10" />
      </a>
      <a href="https://discord.gg/sAm9FqwbAC" target="_blank" rel="noopener noreferrer">
        <img src={darkMode ? discordb : discordw} alt="logo" className="h-10 w-10" />
      </a>
    </div>
  );
};

export default Socials;
