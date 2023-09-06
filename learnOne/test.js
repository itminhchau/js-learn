//kiểu dữ liệu tham chiếu và kiểu dữ liệu tham trị

// kiểu dữ
// number , string, boolean, ...

let a = 10 // ô nhớ a
let b = " van nhan"

let c = a; // ô nhớ c nào đó đang có giá trị là 10

a = 15

console.log(c);

// kiểu dữ liệu tham chiếu : object, array, function

let arrayA = [1, 2, 3, 4, 5] // nó sẽ lưu cái địa chỉ vào ô nhớ.

let arrayB = [...arrayA]

arrayA[1] = "minh chau"

console.log(arrayB);


let objectA = {
  name: "van nhan",
  age: 20,
  address: "quang nam"
}

let objectB = { ...objectA }

objectB.name = "van khang"


const { name, age, address } = { name: "minh chau", age: 26, address: "quang ngai" }

let [e, d, f] = [1, 2, 3]

console.log(e, d, f);
console.log(name, age, address);

console.log(objectA);



let x = [] + []
console.log(typeof null);



// for in


for (key in object) {
  console.log(object[key]);
}

// for of

const object = {
  name: "minh chau",
  age: 20
}
const array = [1, 2, 34, 5]
for (value of array) {
  console.log(value);
}