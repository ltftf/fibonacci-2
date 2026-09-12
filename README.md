# fibonacci-2

Library to calculate fibonacci numbers. Large numbers are supported. Can be used from CLI.

## Installation

```shell
npm i fibonacci-2
```

Or install globally to access anywhere from CLI:

```shell
npm i -g fibonacci-2
```

## Usage

```js
import { fibonacci, fibonacciSeq } from "fibonacci-2";

console.log(fibonacci(12));
// 144

for (const [value, n] of fibonacciSeq(8)){
  console.log(`${n}. ${value}`);
  // 1. 1
  // 2. 1
  // 3. 2
  // 4. 3
  // 5. 5
  // 6. 8
  // 7. 13
  // 8. 21
}
```

From CLI:

```shell
$ fibonacci 12
144
```

```shell
$ fibonacci-seq 8
1: 1
2: 1
3: 2
4: 3
5: 5
6: 8
7: 13
8: 21
```

## Why another library

There is [fibonacci](https://github.com/fvdm/nodejs-fibonacci), but its dependance on `bn.js` makes it very slow for large numbers. 

Speed comparison:

| F(n)    | fibonacci-2 | fibonacci | Faster by |
| ------- | ----------- | --------- | --------- |
| 1,000   | 13ms        | 22ms      | 1.7x      |
| 10,000  | 181ms       | 8.4s      | 46x       |
| 100,000 | 17.6s       | 2hr 14min | 457x      |

There is no dependencies so it should also work on client side.

## License

MIT