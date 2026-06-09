function calcular() {
    let cantidad = document.getElementById("maruchanes").value;

    if(cantidad <= 0 || cantidad === ""){
        document.getElementById("resultado").innerHTML =
        "Ingresa una cantidad válida.";
        return;
    }

    let ahorro = cantidad * 1200;

    document.getElementById("resultado").innerHTML =
    `Al sustituir ${cantidad} Maruchanes tradicionales por una versión saludable podrías evitar aproximadamente ${ahorro} mg de sodio por semana.`;
}