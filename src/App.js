import './App.css';
import { Cards } from './components/Cards';
import { Jumbotron } from './components/Jumbotron';
import { Navbar } from './components/Navbar';
export const App=()=> {

 

  return (
    <div className="App">
    <Navbar />
    <Jumbotron/>
    <Cards/>
    </div>
  );
}

