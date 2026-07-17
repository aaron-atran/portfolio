import './css/App.css';
import './css/index.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner.jsx';
import { Bento } from './components/Bento.jsx';
import { Skills } from './components/Skill.jsx';
import { Projects } from './components/Projects.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { ThemeProvider } from './util.js/ThemeContext.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// export const ThemeContext = createContext(null);

function App() {

  return (
    <ThemeProvider>
      <div className="App" >
        <NavBar />
        <Banner />
        <Bento />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
