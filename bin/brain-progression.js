#!/usr/bin/env node
import { runBrainProgression, rule } from '../src/games/progression.js';
import runEngine from '../src/index.js';

runEngine(rule, runBrainProgression);
