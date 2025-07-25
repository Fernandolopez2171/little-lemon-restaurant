import Hero from "./Hero";
import About from "./About/About";
import Menu from "./Menu/Menu";
import Testimonials from "./Testimonials/Testimonials";
import "./Home.css";

function Home() {
  return (
    <main className="flex-grow-1 home-main">
      <section id="home" className="home-section">
        <Hero />
      </section>

      <section id="about" className="home-section">
        <About />
      </section>

      <section id="menu" className="home-section">
        <Menu />
      </section>

      <section id="testimonials" className="home-section">
        <Testimonials />
      </section>
    </main>
  );
}

export default Home;
