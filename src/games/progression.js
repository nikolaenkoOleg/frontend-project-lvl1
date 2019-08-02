#!/usr/bin/env node

import * as engine from '../engine';

engine.youAreWelcome();
engine.showGameDescription('brain-progression');

export const userName = engine.getName();
engine.greetingUser(userName);

const getArithmeticProgression = () => {
  const startProgression = engine.getRandomNumber();
  const stepProgression = engine.getRandomNumber();
  const progressionSize = 10;

  const arr = [];
  for (let i = 0; i < progressionSize; i += 1) {
    arr[i] = startProgression + (stepProgression * i);
  }

  return arr;
};

export const findProgressionElementGame = () => {
  const progression = getArithmeticProgression(); // массив с прогрессией
  const randomProgressionIndex = engine.getRandomNumber(10);
  /* индекс случайного элемента в
     массиве от 0 до 10 */
  const correctAnswer = progression[randomProgressionIndex]; // формируем правильный ответ...
  progression[randomProgressionIndex] = '..'; // и меняем его на двоеточие

  const stringProgression = progression.join(' '); // прогрессия в виде строки для пользователя
  engine.askQuestion(stringProgression);
  const userAnswer = parseInt(engine.getAnswer(), 10);

  const wrongAnswerAcc = 0;
  return engine.checkAnswer(userName, userAnswer, correctAnswer, wrongAnswerAcc);
};
