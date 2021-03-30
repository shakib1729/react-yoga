import './App.css';
import { AppProvider } from './context/globalContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
