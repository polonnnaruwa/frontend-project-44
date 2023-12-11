#!/usr/bin/env node
import { runBrainPrime, rule } from '../src/games/prime.js';
import runEngine from '../src/index.js';

runEngine(rule, runBrainPrime);
