#!/usr/bin/env node

import * as engine from '../engine';

engine.youAreWelcome();
console.log('What number is missing in the progression?');

export const userName = engine.getName();
engine.greetingUser(userName);

const getArithmeticProgression = () => {
  const startProgression = engine.getRandomNumber(); // определяем стартовое число прогрессии
  const stepProgression = engine.getRandomNumber(); // определяем шаг прогрессии
  const progressionSize = 10;

  const arr = [startProgression]; // спросить про const тут...
  for (let i = 1; i < progressionSize; i += 1) {
    arr[i] = arr[i - 1] + stepProgression; // тут формируется массив с арифметической прогрессией
  }

  return arr;
};

export const findProgressionElementGame = () => {
  const progression = getArithmeticProgression(); // массив с прогрессией
  const randomProgressionIndex = Math.floor(Math.random() * 10);
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
