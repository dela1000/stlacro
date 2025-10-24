import { buttonSize, type ButtonProps } from 'src/components/Button/type';
import { sizeStyle } from 'src/components/Button/utils';

const Button = ({ text, hoverAnimation = false, size = buttonSize.sm, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      className={`px-10 py-2 bg-white outline outline-blue-900 text-blue-900 rounded-full
      cursor-pointer opacity-100 duration-350 transition ease-in-out
      ${hoverAnimation ? 'hover:bg-blue-900 hover:text-white' : ''}
      ${sizeStyle(size)}`}
    >
      {text}
    </button>
  );
};

export default Button;
