#!/usr/bin/env node

import * as engine from '../engine';
import { findProgressionElementGame, userName } from '../games/brain-progression';

engine.gameIteration(findProgressionElementGame, userName);
