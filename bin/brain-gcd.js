#!/usr/bin/env node
import { runBrainGcd, rule } from '../src/games/gcd.js';
import runEngine from '../src/index.js';

runEngine(rule, runBrainGcd);
