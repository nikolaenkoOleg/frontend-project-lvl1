#!/usr/bin/env node

import * as engine from '../engine';
import { findSolutionGame, userName } from '../games/calc';

engine.gameIteration(findSolutionGame, userName);
