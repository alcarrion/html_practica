const btnChange = document.getElementById("btn-change");
const btnAlert = document.getElementById("btn-alert");

const colors = ["#f8f9fa", "#ffcccc", "#ccffcc", "#ccccff", "#fff3cd", "#e0ffff"];

btnChange.addEventListener("click", function () {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

btnAlert.addEventListener("click", function () {
    alert("🚀 Hola! Este es un proyecto de prueba.");
});
