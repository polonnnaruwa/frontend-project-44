#!/usr/bin/env node
import { runBrainProgression, rule } from '../src/games/brainProgression.js';
import runEngine from '../src/index.js';

runEngine(rule, runBrainProgression);
