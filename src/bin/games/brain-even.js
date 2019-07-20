#!/usr/bin/env node
import * as engine from '../../engine';

engine.youAreWelcome();
console.log('Answer "yes" if number even otherwise answer "no".');

const userName = engine.getName();

const even = (answerCounter) => {
  const randomNumber = engine.getRandomNumber();
  console.log(`Question: ${randomNumber}`);

  const userAnswer = engine.getAnswer();
  const parirtyChecker = 2;
  const wrongAnswerIndex = 1;

  let answerChecker = answerCounter;

  if (randomNumber % parirtyChecker === 0 && userAnswer === 'yes') {
    engine.showCorrectMessage();
  } else if (randomNumber % parirtyChecker === 0 && userAnswer !== 'yes') {
    const correctAnswer = 'yes';
    engine.showIncorrectMessage(userName, userAnswer, correctAnswer);
    answerChecker += wrongAnswerIndex;

    return answerChecker;
  } else if (randomNumber % parirtyChecker !== 0 && userAnswer === 'no') {
    engine.showCorrectMessage();
  } else if (randomNumber % parirtyChecker !== 0 && userAnswer !== 'no') {
    const correctAnswer = 'no';
    engine.showIncorrectMessage(userName, userAnswer, correctAnswer);
    answerChecker += wrongAnswerIndex;

    return answerChecker;
  }

  return answerChecker;
};

engine.gameIteration(even, userName);
