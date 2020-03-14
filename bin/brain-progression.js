#!/usr/bin/env node
import engine from '../src/index.js';
import { rule, game } from '../src/games/progression.js';

engine(rule, game);
