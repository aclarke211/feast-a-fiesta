import Link from 'next/link';
import mainHeaderStyles from '@/components/main-header.module.css';

import logoImg from '@/assets/logo.png';

const navLinks = [
  {
    name: 'Browse Meals',
    url: '/meals',
  },
  {
    name: 'Feastas Community',
    url: '/community',
  },
];

export default function MainHeader() {
  return (
    <header className={mainHeaderStyles.header}>
      <Link className={mainHeaderStyles.logo} href='/'>
        <img src={logoImg.src} alt='Feast-a-Fiesta logo image' />
        Feast-a-Fiesta
      </Link>

      <nav className={mainHeaderStyles.nav}>
        <ul>
          {navLinks.map((navLink, key) => {
            return (
              <li key={key}>
                <Link href={navLink.url}>{navLink.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
