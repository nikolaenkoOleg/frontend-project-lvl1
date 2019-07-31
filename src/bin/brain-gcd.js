#!/usr/bin/env node

import * as engine from '../engine';
import { findGsdGame, userName } from '../games/gcd';

engine.gameIteration(findGsdGame, userName);
