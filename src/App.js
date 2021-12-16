import Navbar from './cards/Navbar';
import Home from './Page/Home';
import Contact from './Page/Contact';
import Skills from './Page/Skills';
import About from './Page/About';
import Project from './Page/Project';

function App() {
  document.title = 'Yigitcan Sezek';
  return (
    <div className="overflow-y-hidden">
      <Navbar />

      <section id="page1">
        <Home />
      </section>
      <section id="page2" className="h-70px bg-primary-sunflower"></section>

      <About />

      <section id="page3" className="h-200px bg-primary-whiteblue "></section>
      <Skills />

      <section id="page4" className="h-200px bg-primary-turquoise "></section>
      <Project />

      <section id="page5" className="h-200px bg-primary-softblue "></section>
      <Contact />
    </div>
  );
}

export default App;
