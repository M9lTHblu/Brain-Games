#!/usr/bin/env node
import engine from '../src/index.js';
import { rule, createQuestionAndAnswer } from '../src/games/calc.js';

engine(rule, createQuestionAndAnswer);
