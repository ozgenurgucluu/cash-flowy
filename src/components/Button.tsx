import classNames from 'classnames/bind';

const cn = classNames.bind({
  small: 'py-2 h-[40px] text-xs',
  medium: 'py-3 w-[390px] h-[50px] text-ms',
  large: 'px-8 h-[60px]',
  blue: 'bg-blue-400 border hover:bg-blue-500 py-3 text-lg text-white',
});

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  color?: 'blue';
  className?: string;
  title: string;
}
const Button = ({ size = 'medium', color, className, title }: Props) => {
  return (
    <button
      className={cn(
        'rounded-md font-semibold transition',
        size,
        color,
        className
      )}
    >
      {title}
    </button>
  );
};

export default Button;
