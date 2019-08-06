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

const randomProgressionIndex = engine.getRandomNumber();
export default () => {
  const createQuestion = () => {
    const progression = getArithmeticProgression();
    progression[randomProgressionIndex] = '..';

    return progression.join(' ');
  };
  const createAnswer = progression => String(progression[randomProgressionIndex]);

  engine.playGame('brain-progression', createQuestion, createAnswer);
};
