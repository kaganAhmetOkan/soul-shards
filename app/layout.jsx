import './globals.css';
import { Ubuntu } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import SignIn from '@/components/SignIn/SignIn';
import { AuthContextProvider } from '@/firebase/AuthContext';

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
        <AuthContextProvider>
          <Navbar />
          {children}
          <SignIn />
        </AuthContextProvider>
      </body>
    </html>
  );
};