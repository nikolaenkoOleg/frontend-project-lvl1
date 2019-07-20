#!/usr/bin/env node

import * as engine from '../../engine';

engine.youAreWelcome();
console.log('What is the result of the expression?');

const userName = engine.getName();

const calculator = (num1, num2, symbol) => {
  let value = 0;
  if (symbol === '-') {
    value = num1 - num2;
  } else if (symbol === '+') {
    value = num1 + num2;
  } else if (symbol === '*') {
    value = num1 * num2;
  }

  return value;
};

const calc = (answerCounter) => {
  const firstRandomNumber = engine.getRandomNumber();
  const secondRandomNumber = engine.getRandomNumber();

  const arithmeticSymbols = ['-', '+', '*'];
  const randomSymbolIndex = Math.floor(Math.random() * arithmeticSymbols.length);
  const randomSymbol = arithmeticSymbols[randomSymbolIndex];

  console.log(`Question: ${firstRandomNumber} ${randomSymbol} ${secondRandomNumber}`);
  const userAnswer = parseInt(engine.getAnswer(), 10);

  const wrongAnswerIndex = 1;
  let answerChecker = answerCounter;
  const correctAnswer = calculator(firstRandomNumber, secondRandomNumber, randomSymbol);

  if (userAnswer === correctAnswer) {
    engine.showCorrectMessage();
  } else if (userAnswer !== correctAnswer) {
    engine.showIncorrectMessage(userName, userAnswer, correctAnswer);
    answerChecker += wrongAnswerIndex;

    return answerChecker;
  }

  return answerChecker;
};

engine.gameIteration(calc, userName);
