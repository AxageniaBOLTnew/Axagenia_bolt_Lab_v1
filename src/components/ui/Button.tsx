import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm shadow-primary-600/20',
  secondary:
    'bg-ink-900 text-white hover:bg-ink-800 active:bg-ink-950 shadow-sm',
  ghost:
    'text-ink-700 hover:bg-ink-100 hover:text-ink-900 active:bg-ink-200',
  outline:
    'border border-ink-300 text-ink-800 hover:border-primary-500 hover:text-primary-700 hover:bg-primary-50 active:bg-primary-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-lg gap-2',
  lg: 'px-7 py-3.5 text-base rounded-xl gap-2',
};

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsLinkProps = CommonProps & {
  to: string;
  onClick?: () => void;
};

type ButtonAsButtonProps = CommonProps & {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  'aria-label'?: string;
};

function isLinkProps(props: ButtonAsLinkProps | ButtonAsButtonProps): props is ButtonAsLinkProps {
  return 'to' in props;
}

export function Button(props: ButtonAsLinkProps | ButtonAsButtonProps) {
  const { children, variant = 'primary', size = 'md', className = '' } = props;
  const base = `inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (isLinkProps(props)) {
    return (
      <Link to={props.to} onClick={props.onClick} className={base}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      aria-label={props['aria-label']}
      className={`${base} ${props.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
    >
      {children}
    </button>
  );
}
