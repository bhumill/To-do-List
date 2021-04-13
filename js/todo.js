const jsTodoCont = document.querySelector(".task-list-wrapper");
var jsInTask = document.querySelector(".todo-add-task");
const jsAddTask = document.querySelector(".add-task-btn");

if (window.localStorage.getItem("jsStoreTodos") == undefined) {
    var jsStoreTodos = [];
    window.localStorage.setItem("jsStoreTodos", JSON.stringify(jsStoreTodos));
}

var jsStoreTodosEX = window.localStorage.getItem("jsStoreTodos");
var jsStoreTodos = JSON.parse(jsStoreTodosEX);

class jsTask {
    constructor(jsTaskNm) {
        this.createItem(jsTaskNm);
    }
    createItem(jsTaskNm) {
        var jsTaskBox = document.createElement("div");
        jsTaskBox.classList.add("added-task");

        var jsInT = document.createElement("input");
        jsInT.type = "text";
        jsInT.disabled = true;
        jsInT.value = jsTaskNm;
        jsInT.classList.add("added-task-input");

        var jsEdTask = document.createElement("button");
        jsEdTask.classList.add("task-edit");
        jsEdTask.innerHTML = "EDIT";
        jsEdTask.addEventListener("click", () => this.jsEdTaskFunc(jsInT, jsTaskNm));
        jsEdTask.addEventListener("click", () => {
            jsInT.select();
        });

        var jsRemTask = document.createElement("button");
        jsRemTask.classList.add("task-remove");
        jsRemTask.innerHTML = "REMOVE";
        jsRemTask.addEventListener("click", () => this.jsRemTaskFunc(jsTaskBox, jsTaskNm));

        jsTodoCont.appendChild(jsTaskBox);

        jsTaskBox.appendChild(jsInT);
        jsTaskBox.appendChild(jsEdTask);
        jsTaskBox.appendChild(jsRemTask);
    }

    jsEdTaskFunc(jsInT, jsTaskNm) {
        if (jsInT.disabled == true) {
            jsInT.disabled = !jsInT.disabled;
        } else {
            jsInT.disabled = !jsInT.disabled;
            let indexof = jsStoreTodos.indexOf(jsTaskNm);
            jsStoreTodos[indexof] = jsInT.value;
            window.localStorage.setItem("jsStoreTodos", JSON.stringify(jsStoreTodos));
        }
    }

    jsRemTaskFunc(jsTaskBox, jsTaskNm) {
        jsTaskBox.parentNode.removeChild(jsTaskBox);
        let index = jsStoreTodos.indexOf(jsTaskNm);
        jsStoreTodos.splice(index, 1);
        window.localStorage.setItem("jsStoreTodos", JSON.stringify(jsStoreTodos));
    }
}

jsAddTask.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
    if (e.which == 13) {
        check();
    }
});

function check() {
    if (jsInTask.value != "") {
        new jsTask(jsInTask.value);
        jsStoreTodos.push(jsInTask.value);
        window.localStorage.setItem("jsStoreTodos", JSON.stringify(jsStoreTodos));
        jsInTask.value = "";
    }
}

for (var jsTaskList = 0; jsTaskList < jsStoreTodos.length; jsTaskList++) {
    new jsTask(jsStoreTodos[jsTaskList]);
}
