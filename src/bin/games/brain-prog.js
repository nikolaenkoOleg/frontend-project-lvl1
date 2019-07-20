#!/usr/bin/env node

import * as engine from '../../engine';

engine.youAreWelcome();
console.log('What number is missing in the progression?');

const userName = engine.getName();

const getArithmeticProgression = () => {
  const startNumber = engine.getRandomNumber(); // определяем стартовое число прогрессии
  const stepNumber = engine.getRandomNumber(); // определяем шаг прогрессии

  const arr = [startNumber]; // спросить про const тут...
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + stepNumber; // тут формируется массив с арифметической прогрессией
  }

  return arr;
};

const prog = (answerCounter) => {
  const progression = getArithmeticProgression(); // массив с прогрессией
  const randomProgressionIndex = Math.floor(Math.random() * 10);
  /* индекс случайного элемента в
     массиве от 0 до 10 */

  const correctAnswer = progression[randomProgressionIndex]; // формируем правильный ответ...
  progression[randomProgressionIndex] = '..'; // и меняем его на двоеточие

  const stringProgression = progression.join(' '); // прогрессия в виде строки для пользователя
  console.log(`Question: ${stringProgression}`);
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

engine.gameIteration(prog, userName);
