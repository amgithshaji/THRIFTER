import React from 'react'
import StaggeredMenu from '@/components/StaggeredMenu'
import Profile from '../pages/Profile';
import { Link } from 'react-router-dom';


 const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Profile', ariaLabel: 'View our services', link: '/profile' },
    { label: 'logout', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];
function Header() {
  return (
    <div>
      
            <StaggeredMenu
              position="fixed"
              items={menuItems}
              socialItems={socialItems}
              isFixed={true}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#000"
              openMenuButtonColor="#fff"
              changeMenuColorOnOpen={true}
              colors={['#B19EEF', '#5227FF']}
              
              logoUrl="./logo2.png"
              accentColor="#ff6b6b"
              onMenuOpen={() => console.log('Menu opened')}
              onMenuClose={() => console.log('Menu closed')}
            />
    </div>
  )
}

export default Header