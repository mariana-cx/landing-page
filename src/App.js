import './App.css';
import { Cards } from './components/Cards';
import { Jumbotron } from './components/Jumbotron';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import React from 'react';

export const App = () => {

  const cards = [{
    img: "https://www.edumilestones.com/career-library/images/programming.png",
    title: "First",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  }, {
    img: "https://www.edumilestones.com/career-library/images/programming.png",
    title: "First",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  }, {
    img: "https://www.edumilestones.com/career-library/images/programming.png",
    title: "First",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  }, {
    img: "https://www.edumilestones.com/career-library/images/programming.png",
    title: "First",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  }]

  return (
    <div className="App">
      <Navbar />
      <Jumbotron />




      <div className="card-group mt-3 mb-3">
        <div className="col-2"></div>
        {cards.map((e, i) => {
          const startMargin = "ms-2"
          if (i === 0) {
            return (
              <React.Fragment key={i}>
                <Cards content={e} isFirst={true} />
              </React.Fragment>
            )
          } else {
            return (<React.Fragment key={i}>
              <Cards content={e} />
            </React.Fragment>)
          }
        })}
        <div className="col-2"></div>
      </div>




      <Footer />
    </div>
  );
}

