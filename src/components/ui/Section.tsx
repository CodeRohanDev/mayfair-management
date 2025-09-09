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
    dark: '',
    gradient: `bg-gradient-to-r ${theme.gradients.hero}`
  };
  
  const backgroundStyles = {
    white: {},
    dark: { backgroundColor: '#0a1b2f' },
    gradient: {}
  };

  return (
    <section 
      className={`${theme.spacing.section} ${backgroundClasses[background]} ${className}`}
      style={backgroundStyles[background]}
    >
      {children}
    </section>
  );
}