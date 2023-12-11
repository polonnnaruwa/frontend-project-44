#!/usr/bin/env node
import { runBrainCalc, rule } from '../src/games/сalc.js';
import runEngine from '../src/index.js';

runEngine(rule, runBrainCalc);
