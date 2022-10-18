
const boton = document.querySelector("#btn");

boton.addEventListener("click", () => {
    alert("Click en el Boton")
    console.log("Boton")
});

$("button").click(function() {
    console.log("Hola, estoy utilizando jQuery");
})