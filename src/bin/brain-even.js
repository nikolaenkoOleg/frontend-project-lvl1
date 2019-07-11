#!/usr/bin/env node
import readlineSync from 'readline-sync';
// import getName from '..';

const getRandomNumber = () => Math.floor(Math.random() * 42);

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no". \n');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hi, ${userName}!\n`);

const even = () => { // функция для того, чтобы через return прекращать игру
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

even();
