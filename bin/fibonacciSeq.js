#!/usr/bin/env node

import { fibonacciSeq } from "../index.js";

const [, , ...args] = process.argv;

if (
  args.length !== 1 ||
  !/^\d+$/.test(args[0])
) {
  console.log("Usage: fibonacci-seq <number>");
} else {
  for (const [value, n] of fibonacciSeq(parseInt(args[0]))) {
    console.log(`${n.toString().padStart(args[0].length, " ")}: ${value}`);
  }
}