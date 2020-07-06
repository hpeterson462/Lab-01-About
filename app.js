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

  console.log(userName);

  const question1 = prompt('Do you like hiking?');

  console.log(question1);

  const question2 = prompt('Is your favorite color blue?');

  console.log(question2);

  const question3 = prompt('Are you from out of state?');

  console.log(question3);
});

// set event listeners to update state and DOM
let score = 0;

result.textContent = score;