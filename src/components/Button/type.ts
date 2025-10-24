export const buttonSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

export type ButtonSizes = keyof typeof buttonSize;

export type ButtonProps = {
  text: string;
  hoverAnimation?: boolean;
  onClick?: () => void;
  size?: ButtonSizes;
};
