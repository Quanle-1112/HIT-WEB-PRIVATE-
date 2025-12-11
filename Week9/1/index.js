// let userName = prompt("Nhập tên của bạn:");
// let userAgeInput = prompt("Nhập tuổi của bạn:");
// let userAge = Number(userAgeInput);

// if (isNaN(userAge)) {
//     alert("Vui lòng nhập tuổi là một con số hợp lệ!");
//     let userAgeInput = prompt("Nhập tuổi của bạn:");
//     let userAge = Number(userAgeInput);
//     let upperName = userName.toUpperCase();
//     let nameLength = userName.length;
//     let nextAge = userAge + 1;
//     alert(`Chào mừng ${upperName}! Tên của bạn thật đẹp, nó có ${nameLength} ký tự. Năm sau, bạn sẽ ${nextAge} tuổi.`);
// }
//  else {
//     let upperName = userName.toUpperCase();
//     let nameLength = userName.length;
//     let nextAge = userAge + 1;

//     alert(`Chào mừng ${upperName}! Tên của bạn thật đẹp, nó có ${nameLength} ký tự. Năm sau, bạn sẽ ${nextAge} tuổi.`);
// }


let userName = prompt("Nhập tên của bạn:");
let userAgeInput = prompt("Nhập tuổi của bạn:");
let userAge = Number(userAgeInput);

while (isNaN(userAge)) {
    alert("Vui lòng nhập tuổi là một con số hợp lệ!");
    userAgeInput = prompt("Nhập lại tuổi của bạn:");
    userAge = Number(userAgeInput);
}

let upperName = userName.toUpperCase();
let nameLength = userName.length;
let nextAge = userAge + 1;

alert(`Chào mừng ${upperName}! Tên của bạn thật đẹp, nó có ${nameLength} ký tự. Năm sau, bạn sẽ ${nextAge} tuổi.`);