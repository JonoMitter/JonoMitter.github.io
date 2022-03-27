import ContactMe from './components/ContactMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Splash from './components/Splash';
import Volunteering from './components/Volunteering';
import './styles/style.css'

function App() {
  return (
    <div className="App">
      <Splash />
      <Experience />
      <Projects />
      <Volunteering />
      <ContactMe />
    </div>
  );
}

export default App;
