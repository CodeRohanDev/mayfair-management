import { ReactNode } from 'react';
import { theme } from '@/config/theme';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'dark' | 'gradient';
}

export default function Section({ 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    dark: 'bg-slate-800',
    gradient: `bg-gradient-to-r ${theme.gradients.hero}`
  };

  return (
    <section className={`${theme.spacing.section} ${backgroundClasses[background]} ${className}`}>
      {children}
    </section>
  );
}