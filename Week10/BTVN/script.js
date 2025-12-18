const btnAdd = document.getElementById("btnAdd");
const inputName = document.getElementById("studentName");
const inputScore = document.getElementById("studentScore");
const studentList = document.getElementById("studentList");

btnAdd.addEventListener("click", function () {
  const name = inputName.value.trim();
  const score = parseFloat(inputScore.value);

  if (name === "" || isNaN(score)) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${name} - ${score} điểm`;

  if (score >= 5) {
    li.classList.add("blue-text");
  } else {
    li.classList.add("red-text");
  }

  li.addEventListener("click", function () {
    this.remove();
  });

  studentList.appendChild(li);

  inputName.value = "";
  inputScore.value = "";
  inputName.focus();
});
