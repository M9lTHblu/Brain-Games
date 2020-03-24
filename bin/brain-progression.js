#!/usr/bin/env node
import engine from '../src/index.js';
import { rule, createRandomProgression } from '../src/games/progression.js';

engine(rule, createRandomProgression);
