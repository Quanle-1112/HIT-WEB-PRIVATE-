let birthYear = Number(prompt("Nhập năm sinh của người dùng:"));
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

let message = (age < 18) ? "Bạn chưa đủ tuổi lái xe." : 
              (age === 18) ? "Bạn vừa đủ tuổi lái xe, hãy cẩn thận." : 
              "Bạn đã đủ tuổi lái xe.";

alert(message);

console.log(age == "18");
console.log(age === "18");