import './sass/main.scss';

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Content from './components/content/Content';
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>
        <Hero />
        <Content />
        <Testimonial />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;