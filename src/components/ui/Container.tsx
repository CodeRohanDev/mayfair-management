import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 w-full lg:w-[65%] ${className}`} style={{ maxWidth: 'none' }}>
      {children}
    </div>
  );
}