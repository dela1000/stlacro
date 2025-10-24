import { buttonSize, type ButtonSizes } from 'src/components/Button/type';

export const sizeStyle = (size: ButtonSizes) => {
  switch (size) {
    case buttonSize.lg:
      return 'text-lg py-6 px-16';
    case buttonSize.md:
      return 'text-sm py-4 px-12';
    case buttonSize.sm:
    default:
      return 'text-sm py-1 px-4';
  }
};
