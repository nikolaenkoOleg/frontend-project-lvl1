#!/usr/bin/env node

import * as engine from '../engine';
import { findEvenGame, userName } from '../games/brain-even';

engine.gameIteration(findEvenGame, userName);
