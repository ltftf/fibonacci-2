#!/usr/bin/env node

import { fibonacci } from "../index.js";

const [, , ...args] = process.argv;

if (
  args.length !== 1 ||
  !/^\d+$/.test(args[0])
) {
  console.log("Usage: fibonacci <number>");
} else {
  console.log(fibonacci(parseInt(args[0])));
}