import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function GuessingGame() {
  const [randomNumber,setRandomNumber] = useState(Math.floor(Math.random()*100)+1);
  const [guess,setGuess] = useState('');
  const [message,setMessage] = useState('');
  const [guessedRight,setGuessedRight] = useState(false)
  const [guesses,setGuesses] = useState(1)
  const handleGuessChange = (event) =>{
    setGuess(event.target.value);
  };
  const handleGuessSubmit = ()=>{
    const userGuess = parseInt(guess);
    setGuesses(guesses + 1);
    if (userGuess === randomNumber){
      setMessage(`You guessed the number correctly! It took ${guesses} tries!`);
      setGuessedRight(true)
     } 
     else if(userGuess<randomNumber){
      setMessage(`You guessed too low! You have guessed ${guesses} times!`);
     }
     else if(userGuess>randomNumber){
      setMessage(`You guessed too high! You have guessed ${guesses} times!`);
     }
     else{
      setMessage("Hmmm something isn't quite right.")
     }
  };
  const handleNewGame = () =>{
    setRandomNumber(Math.floor(Math.random()*100)+1);
    setGuess('');
    setMessage('');
    setGuessedRight(false);
    setGuesses(0);
  };
  return (
    <div>
      <h1>Guessing Game!</h1>
      <p>Please pick a whole number between 1 and 100.</p>
      <input
        type ="number"
        value = {guess}
        onChange={handleGuessChange}
        />
      <button onClick={handleGuessSubmit}>Guess</button>
      {guessedRight && <button onClick={handleNewGame}>New Game</button>}
      <p>{message}</p>
    </div>
  );
}

export default GuessingGame
