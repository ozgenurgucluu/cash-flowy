import classnames from 'classnames/bind';

const cn = classnames.bind({
  small: 'py-2 h-[40px] text-xs',
  medium: 'py-3 w-[390px] h-[50px] text-ms',
  large: 'px-8 h-[60px]',

  gray: '  text-black border border-gray-300 focus:ring-gray-400 ',
  black: ' text-white bg-black border border-black focus:ring-black ',
});

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium' | 'large';
  color?:
    | 'gray'
    | 'black'
    | 'white'
    | 'red'
    | 'sky'
    | 'purple'
    | 'orange'
    | 'green'
    | 'blue'
    | 'yellow';
}

const Input = ({
  title,
  value,
  onChange,
  size = 'medium',
  color = 'gray',
  className,
  ...rest
}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700 font-semibold">{title}</label>
      <input
        type="text"
        placeholder="Email address"
        className={cn(
          ' rounded-md px-2 focus:outline-none focus:ring-2 border-2 focus:border-transparent ',
          size,
          color,
          className
        )}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
