import { fibonacci, fibonacciSeq } from "./index.js";

let res = [];

function check(name) {
  for (let i = 2; i < res.length; i++) {
    if (BigInt(res[i - 1]) + BigInt(res[i - 2]) !== BigInt(res[i])) {
      throw `${name} fail at ${i}`
    }
  }
}

for (let i = 0; i < 2000; i++) {
  res.push(fibonacci(i));
}
check("fibonacci");
res = [];
for (const [val] of fibonacciSeq(2000)) {
  res.push(val);
}
check("fibonacciSeq");

console.log("OK");