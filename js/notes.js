const jsNoteBox = document.getElementById("noteBox");
const jsSaveNote = document.getElementById("saveNote");
const jsRemoveNote = document.getElementById("removeNote");
let jsNoteItms = document.querySelectorAll("li");
let JsTb = [];
let jsIn;

for (let i = 0; i < jsNoteItms.length; i++) {
    JsTb.push(jsNoteItms[i].innerHTML);
}

for (let i = 0; i < jsNoteItms.length; i++) {
    jsNoteItms[i].onclick = function () {
        jsIn = JsTb.indexOf(this.innerHTML);
        console.log(this.innerHTML + " INDEX = " + jsIn);
    };
}

function refNotes() {
    JsTb.length = 0;
    jsNoteItms = document.querySelectorAll("li");
    for (let i = 0; i < jsNoteItms.length; i++) {
        JsTb.push(jsNoteItms[i].innerHTML);
    }
}
function editNotesLI() {
    jsNoteItms[jsIn].innerHTML = jsNoteBox.value;
    jsNoteBox.value = "";
    refNotes();
}

function removeNotesLI() {
    refNotes();
    if (jsNoteItms.length > 0) {
        jsNoteItms[jsIn].parentNode.removeChild(jsNoteItms[jsIn]);
        jsNoteBox.value = "";
    }
}

jsSaveNote.addEventListener("click", () => {
    const ulNotes = document.querySelector("ul");
    const liNotes = document.createElement("li");
    const removeX = document.createElement("button");

    ulNotes.appendChild(liNotes);
    liNotes.innerHTML = jsNoteBox.value;
    liNotes.className = "item";

    refNotes();

    liNotes.onclick = function () {
        jsIn = JsTb.indexOf(liNotes.innerHTML);
        console.log(liNotes.innerHTML + " INDEX = " + jsIn);
        jsNoteBox.value = liNotes.innerHTML;
    };
    jsNoteBox.value = "";
});

jsRemoveNote.addEventListener("click", () => {
    const ulNotes = document.querySelector("ul");
    const liNotes = document.querySelector("li:last-child");
    ulNotes.removeChild(liNotes);
});
