import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [personIndex, setPersonIndex] = useState(0)
  const {image, name, job, text} = people[personIndex]

  function switchForth(limit) {
    setPersonIndex(
      prevState =>  prevState + 1 < limit ? prevState + 1 : 0
    )
  }

  function switchBack(limit) {
    setPersonIndex(
      prevState => prevState - 1 >= 0 ? prevState - 1 : limit - 1
    )
  }

  function showRandomPerson(limit) {
    const randomIndex = Math.floor(Math.random() * limit)

    setPersonIndex(prevState => 
      randomIndex !== prevState ? randomIndex 
        : prevState + 1 < limit ? prevState + 1 : 0 
    )
  }

  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt="" className="person-img"/>
        <div className="quote-icon">
          <FaQuoteRight />
        </div>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div>
        <button 
          className="prev-btn"
          onClick={ () => switchBack(people.length) }
        >
          <FaChevronLeft />
        </button>

        <button 
          className="next-btn"
          onClick={ () => switchForth(people.length) }
        >    
          <FaChevronRight />
        </button>
      </div>

      <button 
        className="random-btn"
        onClick={ () => showRandomPerson(people.length) }
      >
        Surprise Me
      </button>
    </div>
  )
};

export default Review;
