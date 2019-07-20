#!/usr/bin/env node

import * as engine from '../../engine';

engine.youAreWelcome();
console.log('Find the greatest common divisor of given numbers.');

const userName = engine.getName();

const findGcd = (num1, num2) => {
  if (num2) {
    return findGcd(num2, num1 % num2);
  }

  return Math.abs(num1);
};

const gcd = (answerCounter) => {
  const firstRandomNumber = engine.getRandomNumber();
  const secondRandomNumber = engine.getRandomNumber();

  console.log(`Question: ${firstRandomNumber}, ${secondRandomNumber}`);
  const correctAnswer = findGcd(firstRandomNumber, secondRandomNumber);
  const userAnswer = parseInt(engine.getAnswer(), 10);

  const wrongAnswerIndex = 1;
  let answerChecker = answerCounter;
  if (userAnswer === correctAnswer) {
    engine.showCorrectMessage();
  } else if (userAnswer !== correctAnswer) {
    engine.showIncorrectMessage(userName, userAnswer, correctAnswer);
    answerChecker += wrongAnswerIndex;

    return answerChecker;
  }

  return answerChecker;
};

engine.gameIteration(gcd, userName);
