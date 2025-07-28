function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 2예시
 */
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue(["hello", 1, "mynameis"]);

/**
 * 3 사례
 */
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}
