#!/usr/bin/env node

import * as engine from '../engine';

engine.youAreWelcome();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

export const userName = engine.getName();

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

export const findPrimeGame = (answerCounter) => {
  const randomNumber = engine.getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const userAnswer = engine.getAnswer();

  const correctAnswer = boolToYesNo(isPrime(randomNumber));
  const wrongAnswerIndex = 1;
  let answerChecker = answerCounter;

  if (correctAnswer === 'yes' && userAnswer === 'yes') {
    engine.showCorrectMessage();
  } else if (correctAnswer === 'no' && userAnswer === 'yes') {
    engine.showIncorrectMessage(userName, userAnswer, correctAnswer);
    answerChecker += wrongAnswerIndex;

    return answerChecker;
  } else if (correctAnswer === 'yes' && userAnswer === 'no') {
    engine.showIncorrectMessage(userName, userAnswer, correctAnswer);
    answerChecker += wrongAnswerIndex;

    return answerChecker;
  } else if (correctAnswer === 'no' && userAnswer === 'no') {
    engine.showCorrectMessage();
  }

  return answerChecker;
};
