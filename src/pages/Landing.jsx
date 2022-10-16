import Navbar from "../components/Navbar";
import Header from "../sections/Header";
import Projects from "../sections/Projects";
import AboutMe from "../sections/AboutMe";
import Contact from "../sections/Contact";

const Landing = () => {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <Projects />
        <AboutMe />
        <Contact />
      </main>
    </>
  );
};

export default Landing;
