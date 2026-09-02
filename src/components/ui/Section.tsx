import type { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
};

export function Section({ children, className = '', id, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${className}`}
      {...rest}
    >
      {children}
    </section>
  );
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`container-ax ${className}`}>{children}</div>;
}

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}
