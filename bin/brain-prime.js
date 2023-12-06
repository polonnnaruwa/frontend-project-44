#!/usr/bin/env node
import { runBrainPrime, rule } from '../src/games/brainPrime.js';
import runEngine from '../src/index.js';

runEngine(rule, runBrainPrime);
