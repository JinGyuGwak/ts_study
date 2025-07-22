let person = {
    job : "test",
    "test test" : "이딴게 다 있냐"
}

let name = person["test test"];
console.log(name);

person[job];
person.test="key";
console.log(person);