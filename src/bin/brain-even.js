#!/usr/bin/env node

import * as engine from '../engine';
import { findEvenGame, userName } from '../games/even';

engine.gameIteration(findEvenGame, userName);
