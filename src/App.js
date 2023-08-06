import './App.css';
import { Cards } from './components/Cards';
import { Jumbotron } from './components/Jumbotron';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
export const App=()=> {

 

  return (
    <div className="App">
    <Navbar />
    <Jumbotron/>
    <Cards/>
    <Footer/>
    </div>
  );
}

