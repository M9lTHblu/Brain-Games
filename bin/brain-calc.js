#!/usr/bin/env node
import engine from '../src/index.js';
import { rule, game } from '../src/games/calc.js';

engine(rule, game);
