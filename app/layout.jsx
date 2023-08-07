import './globals.css';
import { Ubuntu } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: 'Soul Shards',
  description: 'Explore the definitive encyclopedia for the Soul Shards TTRPG system.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};