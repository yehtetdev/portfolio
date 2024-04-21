'use client';
import React, { useState, useEffect } from 'react';
import { SheetHeader } from './ui/sheet';


// components
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isHeaderSticky, setHeaderSticky] = useState(false); // Changed variable name and useState usage
  const pathname = usePathname ();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollYPos = window.scrollY;
      scrollYPos > 50 ? setHeaderSticky(true) : setHeaderSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`${
      Header 
      ? 'py-4 bg-white shadow-lg dark:bg-accent' 
      : 'py-6 dark:bg-transparent'
    } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
      >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          {/*nav */}
          <div className="flex items-center gap-x-6">
            <Nav 
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all' 
              underlineStyles='absolute left-0 bottom-0 h-2 bg-primary w-full'
              />
            <ThemeToggler />
            {/* Hide mobile nav on extra-large screens */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
