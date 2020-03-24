#!/usr/bin/env node
import engine from '../src/index.js';
import { rule, getRandomExpression } from '../src/games/calc.js';

engine(rule, getRandomExpression);
