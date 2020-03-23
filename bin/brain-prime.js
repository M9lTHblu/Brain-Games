#!/usr/bin/env node
import engine from '../src/index.js';
import { rule, createQuestionAndAnswer } from '../src/games/prime.js';

engine(rule, createQuestionAndAnswer);
