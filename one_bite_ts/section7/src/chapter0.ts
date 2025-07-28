function func<T>(value: T): T {
  return value;
}

let num = func(10);
num.toFixed();
console.log(num);

let bool = func(true);

let str = func("string");
