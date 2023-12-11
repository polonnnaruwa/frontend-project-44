#!/usr/bin/env node
import runEngine from '../src/index.js';
import { runBrainEvenGame, rule } from '../src/games/even.js';

runEngine(rule, runBrainEvenGame);
