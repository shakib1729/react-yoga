import './App.css';
import { AppProvider } from './context/globalContext';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <div className='App'>
        <Header />
        <Home />
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
