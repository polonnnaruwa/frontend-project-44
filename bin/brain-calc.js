#!/usr/bin/env node
import { runBrainCalc, rule } from '../src/games/brainCalc.js';
import runEngine from '../src/index.js';

runEngine(rule, runBrainCalc);
