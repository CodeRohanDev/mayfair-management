import { ReactNode } from 'react';
import { theme } from '@/config/theme';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${className}`} style={{ width: '60%', maxWidth: 'none' }}>
      {children}
    </div>
  );
}