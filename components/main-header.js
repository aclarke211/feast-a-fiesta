import Link from 'next/link';

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
    <header>
      <Link href='/'>
        <img src={logoImg.src} alt='Feast-a-Fiesta logo image' />
        <h1>Feast-a-Fiesta</h1>
      </Link>

      <nav>
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
