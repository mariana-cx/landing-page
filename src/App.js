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
    img: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/01/21182224/software-engineering.jpg",
    title: "Second",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  }, {
    img: "https://img.freepik.com/premium-vector/programmer-work-laptop-computer-website-code-program-concept_133260-5402.jpg",
    title: "Third",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  }, {
    img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg",
    title: "Last",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  }]

  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <div className="card-group mt-3 mb-3">
        <div className="col-2"></div>
        {cards.map((e, i) => {
          return <React.Fragment key={i}>
            <Cards content={e} isFirst={i === 0} />
          </React.Fragment>
        })}
        <div className="col-2"></div>
      </div>
      <Footer />
    </div>
  );
}

