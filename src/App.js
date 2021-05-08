import './App.css' ;
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Footer  from './components/Footer'
import NavBar from './components/NavBar/NavBar'
import Skills from './components/Skills'
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <NavBar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/skills" component={Skills}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/projects" component={Projects}/>
    
    </Switch>
    
    <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
