#!/usr/bin/env node
import engine from '../src/index.js';
import { rule, createQuestionAndAnswer } from '../src/games/gcd.js';

engine(rule, createQuestionAndAnswer);
