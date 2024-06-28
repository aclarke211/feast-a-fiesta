import Link from 'next/link';

const links = [
  { name: 'Meals', url: '/meals' },
  { name: 'Share', url: '/meals/share' },
  { name: 'Community', url: '/community' },
];

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Feast-a-Fiesta</h1>

      <div class='links'>
        {links.map((link, key) => {
          return (
            <p key={key}>
              <Link href={link.url}>{link.name}</Link>
            </p>
          );
        })}
      </div>
    </main>
  );
}
