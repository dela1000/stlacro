import { facebook, instagram } from 'src/constants/images/images';

const Socials = () => {
  return (
    <div className="flex gap-3 items-center">
      <a href="https://www.instagram.com/stlacro/" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="logo" className="h-10 w-10" />
      </a>
      <a href="https://www.facebook.com/groups/stlacroyogaclub/" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="logo" className="h-10 w-10" />
      </a>
    </div>
  );
};

export default Socials;
