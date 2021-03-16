import './App.css';
import Home from './pages/Home';
import {Switch, Route} from 'react-router-dom'
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';
import { PRIMARY_COLOR } from './styles';
import ComponentDemo from './pages/ComponentDemo'

function App() {
  return (
    <>
    <NavBar />
    <h1 style={{color: PRIMARY_COLOR}}>Page Heading</h1>
    <Container>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route exact path='/componentDemo' component={ComponentDemo}/>
    </Switch>
    </Container>
    </>
  );
}

export default App;
