import { Roboto_Condensed } from 'next/font/google';
import './styles/globals.css';

import Header from '@/compositions/Header';
import Footer from '@/compositions/Footer';
import Container from '@/componets/Container';

const roboto = Roboto_Condensed({ subsets: ['latin'] });

export const metadata = {
  title: 'Dental Elida Groupe',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
