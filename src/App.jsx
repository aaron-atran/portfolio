import './css/index.css';

import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner.jsx';
import { Bento } from './components/Bento.jsx';
import { Skills } from './components/Skill.jsx';
import { SkillCards } from './components/SkillCards.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { ThemeProvider } from './util.js/ThemeContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BookProjects } from './components/BookProjects.jsx';
import SkillsCarousel from './components/Models/skill_component/SkillCarousel.jsx';

function App() {

  return (
    <ThemeProvider>
      <div className="App" >
        <NavBar />
        <Banner />
        <Bento />
        <SkillCards />
        <BookProjects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
