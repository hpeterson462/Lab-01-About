// import functions and grab DOM elements
import { translateToAYes } from './utilities.js';

const button = document.getElementById('quiz-button');

const result = document.getElementById('result-span');


// initialize state
button.addEventListener('click', () => {
  console.log('hello');

  const confirmQuiz = confirm('Do you really want to take this quiz?');
  if (confirmQuiz === false) {
    return;
  }

  const userName = prompt('What is your name?');
  console.log('yep');

  const question1 = prompt(userName + ', ' + 'do you like hiking?');
  console.log('yep');

  const question2 = prompt(userName + ', ' + 'is your favorite color blue?');
  console.log('yep');

  const question3 = prompt(userName + ', ' + 'are you from out of state?');
  console.log('yep');
});

// set event listeners to update state and DOM
let score = 0;

document.getElementById('result-span').textContent = score++;