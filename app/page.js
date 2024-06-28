import Link from 'next/link';
import Header from '@/components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <p>🥗🔥</p>
      <p>
        <Link href='/about'>About Us</Link>
      </p>
      <p>
        <Link href='/blog'>Blog</Link>
      </p>
    </main>
  );
}
