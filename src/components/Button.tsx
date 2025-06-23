import { clsx } from 'clsx';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ text, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'bg-[#D87D4A]',
        'text-white',
        'px-8 py-3',
        'cursor-pointer',
        'hover:bg-[#c16d39]',
        'transition-colors',
        'uppercase',
        'text-xs font-bold tracking-wider',
        className
      )}
    >
      {text}
    </button>
  );
}

