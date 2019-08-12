#!/usr/bin/env node

import * as engine from '../engine';

const progressionSize = 10;

const getProgression = (size, start, step) => {
  const progression = [];
  for (let i = 0; i < size; i += 1) {
    progression[i] = start + (step * i);
  }

  return progression;
};

const createGameData = () => {
  const startProgression = engine.getRandomNumber();
  const stepProgression = engine.getRandomNumber();
  const fullArray = getProgression(progressionSize, startProgression, stepProgression);

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
  const createQuestion = () => createGameData();
  const gameTitle = 'What number is missing in the progression?';

  engine.playGame(gameTitle, createQuestion);
};
