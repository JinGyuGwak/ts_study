interface Person {
  name: string;
  age: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "곽진규",
  age: 28,
  sayHi: () => {
    console.log("test");
  },
};
