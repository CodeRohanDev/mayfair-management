import Link from 'next/link';
import { companyData } from '@/data/company';
import { navigationData } from '@/data/navigation';
import Container from '@/components/ui/Container';

export default function Header() {
  return (
    <>
      {/* Extra space above navbar */}
      <div className="bg-purple-950 h-5"></div>
      <header className="bg-white border-b border-gray-100">
        <Container>
          <div className="flex justify-between items-end pt-0 py-4">
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <img src="/logo.jpg" alt={companyData.name} className="h-[100px] w-[220px]" />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-15 items-end py-2">
              {navigationData.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base text-gray-700 hover:text-gray-900 transition-colors tracking-wide"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
}