import About from './components/About';
import Chocolates from './components/Chocolates';
import Events from './components/Events';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

export default function Page() {
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