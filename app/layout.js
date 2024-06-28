import './globals.css';

export const metadata = {
  title: 'Feast-a-Fiesta',
  description: 'Food to celebrate!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
