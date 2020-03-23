#!/usr/bin/env node
import engine from '../src/index.js';
import { rule, createQuestionAndAnswer } from '../src/games/progression.js';

engine(rule, createQuestionAndAnswer);
