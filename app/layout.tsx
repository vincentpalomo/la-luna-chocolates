import './globals.css';
import { Inter, Roboto_Mono, Caveat, Commissioner } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const roboto_mono = Roboto_Mono({ subsets: ['latin'], display: 'swap', variable: '--roboto-mono' });
const caveat = Caveat({ subsets: ['latin'], display: 'swap', variable: '--caveat' });
const commissioner = Commissioner({ subsets: ['latin'], display: 'swap', variable: '--commissioner' });

export const metadata = {
  title: 'LA LUNA Chocolates',
  description: 'Small batch bean-to-bar chocolate made in Baton Rouge',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto_mono.variable} ${caveat.variable} ${commissioner.variable}`}>
        {children}
      </body>
    </html>
  );
}
