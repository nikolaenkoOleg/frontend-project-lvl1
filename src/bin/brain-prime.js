#!/usr/bin/env node

import * as engine from '../engine';
import { findPrimeGame, userName } from '../games/brain-prime';

engine.gameIteration(findPrimeGame, userName);
