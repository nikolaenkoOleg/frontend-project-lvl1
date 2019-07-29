#!/usr/bin/env node

import * as engine from '../engine';

engine.youAreWelcome();
console.log('What is the result of the expression?');

export const userName = engine.getName();
engine.greetingUser(userName);

const calculator = (num1, num2, symbol) => {
  let result = 0;
  if (symbol === '-') {
    result = num1 - num2;
  } else if (symbol === '+') {
    result = num1 + num2;
  } else if (symbol === '*') {
    result = num1 * num2;
  }

  return result;
};

export const findSolutionGame = () => {
  const first = engine.getRandomNumber();
  const second = engine.getRandomNumber();

  const arithmeticSigns = ['-', '+', '*'];
  const randomSignIndex = Math.floor(Math.random() * arithmeticSigns.length);
  const arithmeticSign = arithmeticSigns[randomSignIndex];
  const question = `${first} ${arithmeticSign} ${second}`;
  engine.askQuestion(question);

  const userAnswer = parseInt(engine.getAnswer(), 10);

  // const wrongAnswerIndex = 1;
  // let answerChecker = answerCounter;
  const correctAnswer = calculator(first, second, arithmeticSign);

  engine.checkAnswer(userName, userAnswer, correctAnswer);

  // if (userAnswer === correctAnswer) {
  //   engine.showCorrectMessage();
  // } else if (userAnswer !== correctAnswer) {
  //   engine.showIncorrectMessage(userName, userAnswer, correctAnswer);
  //   answerChecker += wrongAnswerIndex;

  //   return answerChecker;
  // }

  // return answerChecker;
};
