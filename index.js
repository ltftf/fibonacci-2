class FibonacciCalculator {
  #current;
  #last = [1];
  #prev = [0];
  #i = 0;
  calculateNext() {
    this.#current = [];
    let remainder = 0;
    for (let i = 0; i < this.#last.length; i++) {
      const sum = this.#last[i] + (this.#prev[i] ?? 0) + remainder;
      const digit = sum % 10;
      this.#current.push(digit);
      remainder = (sum - digit) / 10;
    }
    if (remainder) {
      this.#current.push(remainder);
    }
    this.#prev = this.#last;
    this.#last = this.#current;
  }
  get nextIndex() {
    return ++this.#i;
  }
  get index() {
    return this.#i;
  }
  get current() {
    return this.#current.toReversed().join("");
  }
}

export function fibonacci(n) {
  if (n === 0) return "0";
  if (n === 1) return "1";
  const fibo = new FibonacciCalculator();
  while (fibo.nextIndex < n) {
    fibo.calculateNext();
  }
  return fibo.current;
}

export function* fibonacciSeq(n) {
  if (n === 0) return;
  const fibo = new FibonacciCalculator();
  yield [fibo.nextIndex, "1"];
  while (fibo.nextIndex <= n) {
    fibo.calculateNext();
    yield [fibo.current, fibo.index];
  }
}
