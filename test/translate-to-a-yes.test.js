// IMPORT MODULES under test here:
// import example from '../example.js';
import { translateToATest } from './utilities.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const answer1 = 'y';
    const answer2 = 'yes';
    const answer3 = 'Y';
    const answer4 = 'yeah';
    const expected = 'Yes';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true(answer1, answer2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
