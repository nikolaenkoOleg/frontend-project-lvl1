#!/usr/bin/env node

import * as engine from '../engine';

engine.youAreWelcome();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const userName = engine.getName();
engine.greetingUser(userName);

const isPrime = (number) => {
  if (number === 0 || number === 1) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const boolToYesNo = (bool) => {
  const result = bool ? 'yes' : 'no';

  return result;
};

export const findPrimeGame = () => {
  const gameItem = engine.getRandomNumber();
  const question = `${gameItem}`;

  engine.askQuestion(question);
  const userAnswer = engine.getAnswer();

  const correctAnswer = boolToYesNo(isPrime(gameItem));

  const wrongAnswerAcc = 0;
  return engine.checkAnswer(userName, userAnswer, correctAnswer, wrongAnswerAcc);
};
