#!/usr/bin/env node

import * as engine from '../engine';
import { findSolutionGame, userName } from '../games/brain-calc';

engine.gameIteration(findSolutionGame, userName);
