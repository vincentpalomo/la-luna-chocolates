import gsap from 'gsap';
import About from './components/About';
import Chocolates from './components/Chocolates';
import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Page() {
  // const scrollTo = (selector: string) => {
  //   gsap.to(window, { duration: 2, scrollTo: { y: selector } });
  // };

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Chocolates />
        <Events />
      </main>
      <Footer />
    </>
  );
}
