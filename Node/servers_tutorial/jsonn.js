// json to object

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.age);

const objectJson = {
    name: "Aiet",
    age: 25
};

const StringJson = JSON.stringify(objectJson);
console.log(typeof StringJson);
console.log(objectJson);