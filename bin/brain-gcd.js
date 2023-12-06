#!/usr/bin/env node
import { runBrainGcd, rule } from '../src/games/brainGcd.js';
import runEngine from '../src/index.js';

runEngine(rule, runBrainGcd);
