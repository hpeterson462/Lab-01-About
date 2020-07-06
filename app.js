// import functions and grab DOM elements
import { translateToAYes } from './utilities.js';

const button = document.getElementById('quiz-button');


button.addEventListener('click', () => {
  console.log('yes');

  // initialize state
  const confirmQuiz = confirm('Do you really want to take this quiz?');

  console.log(confirmQuiz);

  const userName = prompt('What is your name?');

  console.log(userName);

  const question1 = prompt('Are you from Oregon?');

  console.log(question1);

  const question2 = prompt('Is your favorite color blue?');

  console.log(question2);

  const question3 = prompt('Do you own a dog?');

  console.log(question3);
});

// set event listeners to update state and DOM
const result = document.getElementById('result-span');
let score = 0;
result.textContent(score);