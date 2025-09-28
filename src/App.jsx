import { useState } from 'react';
import './App.css';

const App = () => {
  const [flashcards] = useState([
    { question: 'Who lives in a pineapple under the sea?', answer: 'Spongebob Squarepants' },
    { question: 'What is the name of the city where the Simpsons live?', answer: 'Springfield' },
    { question: 'What does Jimmy Neutron call himself?', answer: 'The Boy Genius' },
    { question: "What are Timmy Turner's fairy godparents' names?", answer: 'Cosmo and Wanda' },
    { question: 'What does Aang have to master to become the Avatar?', answer: 'The four elements (water, earth, fire, air)' },
    { question: 'Whose catchphrase is "I\'m gonna be king of the pirates!"?', answer: 'Monkey D. Luffy from One Piece' },
    { question: 'What did people call Naruto Uzumaki before he became a ninja?', answer: 'The knucklehead ninja' },
    { question: 'In Dragon Ball Z, what is Goku’s real name?', answer: 'Kakarot' },
    { question: 'In Death Note, what is L’s real name?', answer: 'L Lawliet' },
    { question: 'In My Hero Academia, which character has a quirk that is half-hot and half-cold?', answer: 'Shoto Todoroki' },
  ]);

  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const nextFlashcard = () => {
    setFlip(false);
    setCurrentFlashcardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <div className="App">
      <h1>Greatest Cartoon and Anime Quiz</h1>
      <h2>Let's see how much you know about cartoons and anime!</h2>
      <p>Total Flashcards: {flashcards.length}</p>

      <div 
        className={`flip-card ${flip ? 'flip' : ''}`} 
        onClick={() => setFlip(!flip)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h2>{flashcards[currentFlashcardIndex].question}</h2>
          </div>
          <div className="flip-card-back">
            <h2>{flashcards[currentFlashcardIndex].answer}</h2>
          </div>
        </div>
      </div>

      <button onClick={nextFlashcard}>Next Question</button>
    </div>
  );
};

export default App;
