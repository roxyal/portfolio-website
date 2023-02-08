import Head from 'next/head'
//"use client" // this is a client component
import NavBar from '../components/NavBar';
import { ThemeProvider } from 'next-themes';
import Default from '@/components/Default';
import Footer from '@/components/Footer';

export default function Home() {

  return (
      <div>
        <Head>
          <link rel="icon" href="/totoro.png" />
          <meta
            name="description"
            content="My mini portfolio"
          />
          <title>KELVIN Website</title>
        </Head>
        <ThemeProvider enableSystem={true} attribute="class">
              <NavBar />
              <Default />
              <Footer />
          </ThemeProvider>
      </div>
  );
}