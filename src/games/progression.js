#!/usr/bin/env node

import * as engine from '../engine';

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

const createGameData = (progression) => {
  const fullArray = progression;
  let arrWithHiddenElement = [];
  const randomProgressionIndex = engine.getRandomNumber();
  const hiddenElement = fullArray[randomProgressionIndex];

  arrWithHiddenElement = fullArray;
  arrWithHiddenElement[randomProgressionIndex] = '..';
  const gameData = {
    question: arrWithHiddenElement.join(' '),
    answer: hiddenElement,
  };

  return gameData;
};

export default () => {
  const createQuestion = () => createGameData(getArithmeticProgression());

  engine.playGame('brain-progression', createQuestion);
};
