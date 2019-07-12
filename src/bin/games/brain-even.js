#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * (Math.random() * 42));
export default (userName) => {
	console.log('Answer "yes" if number even otherwise answer "no". \n');

	for (let i = 0; i < 3; i += 1) {
		const number = getRandomNumber();
		console.log(`Question: ${number}`);
		const answer = readlineSync.question('Your answer: ');

		if (number % 2 === 0 && answer === 'yes') {
			console.log('Correct!');
		} else if (number % 2 === 0 && answer === 'no') {
			console.log(`"no" is wrong answer ;(. Correct answer was "yes". \n Let's try again, ${userName}.`);
			return;
		} else if (number % 2 !== 0 && answer === 'no') {
			console.log('Correct!');
		} else if (number % 2 !== 0 && answer === 'yes') {
			console.log(`"yes" is wrong answer ;(. Correct answer was "yes". \n Let's try again, ${userName}.`);
			return;
		}
		console.log(`\nCongratulations, ${userName}!!!`);
	}
};
