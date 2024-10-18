import React, { useState } from 'react';
import BitwiseMatrix from './BitwiseMatrix';
import BirthdayRevelation from './BirthdayRevelation';
import { birthdayLists } from '../constants/Constants';
import './BirthdayGuesser.css';

const BirthdayGuesser = () => {
  const [currentMatrixIndex, setCurrentMatrixIndex] = useState(0);
  const [userChoices, setUserChoices] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);

  const handleChoice = (choice) => {
    const newChoices = [...userChoices, choice];
    setUserChoices(newChoices);

    if (currentMatrixIndex < birthdayLists.length - 1) {
      setCurrentMatrixIndex(currentMatrixIndex + 1);
    } else {
      setGameEnded(true);
    }
  };

  const calculateBirthday = () => {
    return userChoices.reduce((sum, choice, index) => {
      return choice ? sum + Math.pow(2, index) : sum;
    }, 0);
  };

  const resetGame = () => {
    setCurrentMatrixIndex(0);
    setUserChoices([]);
    setGameEnded(false);
  };

  if (gameEnded) {
    const guessedBirthday = calculateBirthday();
    return (
      <div className="birthday-guesser">
        <h1>Interdimensional Birthday Predicto-matic C-137</h1>
        {userChoices.some(choice => choice) ? (
          <BirthdayRevelation
            guessedBirthday={guessedBirthday}
            userChoices={userChoices}
            resetGame={resetGame}
          />
        ) : (
          <div className="no-selection-message">
            <p>Good lord, Rick! You didn't pick any dates! W-were you too drunk to remember your own birthday?</p>
            <button onClick={resetGame}>C'mon Rick, l-let's try again!</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="birthday-guesser">
      <h1>Interdimensional Birthday Predicto-matic C-137</h1>
      <p>Picture your birthday like it's a pickle, Rick! Now let's see if this oracle can burp out the right date!</p>
      {currentMatrixIndex < birthdayLists.length && (
        <>
          <BitwiseMatrix
            title={birthdayLists[currentMatrixIndex].title}
            numbers={birthdayLists[currentMatrixIndex].numbers}
          />
          <p>{birthdayLists[currentMatrixIndex].question}</p>
          <div className="choice-buttons">
            <button onClick={() => handleChoice(true)}>*Burp* Y-yeah, it's there, Morty!</button>
            <button onClick={() => handleChoice(false)}>Not even close, you little turd!</button>
          </div>
        </>
      )}
    </div>
  );
};

export default BirthdayGuesser;
