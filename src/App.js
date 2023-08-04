import './App.css';
import { Jumbotron } from './components/Jumbotron';
import { Navbar } from './components/Navbar';
export const App=()=> {

 

  return (
    <div className="App">
    <Navbar />
    <Jumbotron/>
    </div>
  );
}

