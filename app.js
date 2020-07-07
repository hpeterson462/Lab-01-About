// import functions and grab DOM elements
import { translateToAYes } from './utilities.js';

const button = document.getElementById('quiz-button');

const result = document.getElementById('result-span');


// initialize state
button.addEventListener('click', () => {
  console.log('yes');

  const confirmQuiz = confirm('Do you really want to take this quiz?');
  if (confirmQuiz === false) {
    return;
  }

  const userName = prompt('What is your name?');

  const question1 = prompt(userName + ', ' + 'do you like hiking?');

  const question2 = prompt(userName + ', ' + 'is your favorite color blue?');

  const question3 = prompt(userName + ', ' + 'are you from out of state?');
});

// set event listeners to update state and DOM
let score = 0;

result.textContent = score++;