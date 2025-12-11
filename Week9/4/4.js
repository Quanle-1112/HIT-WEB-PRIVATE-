let todoList = [];

mainLoop: while (true) {
    let action = prompt("Nhập yêu cầu (add, show, remove, exit):");

    switch (action) {
        case "add":
            let newWork = prompt("Nhập tên công việc mới:");
            todoList.push(newWork);
            break;

        case "show":
            let listContent = "";
            let count = 1;
            for (let work of todoList) {
                listContent += `${count}. ${work}\n`;
                count++;
            }
            alert(listContent);
            break;

        case "remove":
            let removeWork = prompt("Nhập tên công việc muốn xóa:");
            let index = todoList.indexOf(removeWork);
            if (index !== -1) {
                todoList.splice(index, 1);
            } else {
                alert("Không tìm thấy công việc này.");
            }
            break;

        case "exit":
            break mainLoop;

        default:
            alert("Lệnh không hợp lệ.");
    }
}