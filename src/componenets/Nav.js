import React, { useState, useEffect } from 'react';
import './Nav.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Nav() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeLink, setActiveLink] = useState('Home'); // State to track active section

    useEffect(() => {
        const sectionRefs = [
            { section: 'Home', ref: document.getElementById('Home') },
            { section: 'About', ref: document.getElementById('About') },
            { section: 'Skills', ref: document.getElementById('Skills') },
            { section: 'Projects', ref: document.getElementById('Projects') },
            { section: 'Connect', ref: document.getElementById('Connect') }
        ];

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Check which section is in view based on scroll position
            for (const { section, ref } of sectionRefs) {
                if (ref && ref.offsetTop <= scrollPosition + 50 && ref.offsetTop + ref.offsetHeight > scrollPosition + 50) {
                    setActiveLink(section);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    //on scroll change the color of the navbar
    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', changeBackground);
        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, []);

  useEffect(() => {
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => link.classList.remove('active'));
    const activeLinkElement = document.querySelector(`.navbar a[href='#${activeLink}']`);
    if (activeLinkElement) {
      activeLinkElement.classList.add('active');
    }
  }, [activeLink]);

  const handleClick = (section) => {
    setActiveLink(section);
    setIsMenuOpen(false); // Close menu on link click
  };

  const handleClickLogo = () => {
    setActiveLink('Home');
    setIsMenuOpen(false); // Close menu on logo click
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <a href='#Home' className='logo' onClick={handleClickLogo}>Vishal.</a>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <a href='#Home' className='active' onClick={() => handleClick('Home')}>Home</a>
        <a href='#About' onClick={() => handleClick('About')}>About</a>
        <a href='#Skills' onClick={() => handleClick('Skills')}>Skills</a>
        <a href='#Projects' onClick={() => handleClick('Projects')}>Projects</a>
        <a href='#Connect' onClick={() => handleClick('Connect')}>Connect</a>
      </nav>
      <GiHamburgerMenu className='hamburger' onClick={toggleMenu} aria-label="Toggle menu" />
    </header>
  );
}
