// ==========================
// DOM ELEMENTS
// ==========================

const input = document.getElementById("textInput");
const button = document.getElementById("clickBtn");
const output = document.getElementById("output");
const form = document.getElementById("myForm");

// ==========================
// CLICK EVENT
// ==========================

button.addEventListener("click", () => {
    output.innerText = "Button Clicked!";
});

// ==========================
// INPUT EVENT
// ==========================

input.addEventListener("input", (e) => {
    output.innerText = "Typing: " + e.target.value;
});

// ==========================
// CHANGE EVENT
// ==========================

input.addEventListener("change", (e) => {
    console.log("Changed:", e.target.value);
});

// ==========================
// SUBMIT EVENT
// ==========================

form.addEventListener("submit", (e) => {
    e.preventDefault();
    output.innerText = "Form Submitted!";
});

// ==========================
// KEYUP EVENT
// ==========================

input.addEventListener("keyup", (e) => {
    console.log("Last key:", e.key);
});

// ==========================
// MOUSEOVER & MOUSEOUT
// ==========================

output.addEventListener("mouseover", () => {
    output.style.backgroundColor = "lightgreen";
});

output.addEventListener("mouseout", () => {
    output.style.backgroundColor = "white";
});

// ==========================
// FOCUS & BLUR
// ==========================

input.addEventListener("focus", () => {
    input.style.border = "2px solid green";
});

input.addEventListener("blur", () => {
    input.style.border = "1px solid gray";
});