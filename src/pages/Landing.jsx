import Navbar from "../components/Navbar";
import Header from "../sections/Header";
import Projects from "../sections/Projects";
import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <Projects />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
