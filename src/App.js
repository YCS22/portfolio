import Navbar from "./cards/Navbar";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import Skills from "./Page/Skills";
import About from "./Page/About";
import Project from "./Page/Project";

function App() {
  return (
    <div className="overflow-y-hidden">
      <Navbar />

      <section id="page1">
        <Home />
      </section>
      <section id="page2">
        <About />
      </section>
      <section id="page3">
        <Skills />
      </section>
      <section id="page4">
        <Project />
      </section>
      <section id="page5">
        <Contact />
      </section>
    </div>
  );
}

export default App;
