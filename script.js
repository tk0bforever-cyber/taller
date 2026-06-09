const modoBtn = document.getElementById("modoBtn");

modoBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

function mostrarReceta(){

document.getElementById("recetaBox").innerHTML = `

<h3>🍜 Ingredientes</h3>

<p>
✔ Fideos integrales<br>
✔ Zanahoria<br>
✔ Brócoli<br>
✔ Espinaca<br>
✔ Pollo o tofu<br>
✔ Caldo bajo en sodio
</p>

<h3>👨‍🍳 Preparación</h3>

<p>
1. Cocina los fideos.<br>
2. Agrega verduras frescas.<br>
3. Añade proteína.<br>
4. Incorpora el caldo.<br>
5. Sirve caliente.
</p>

`;
}

function animar(id, final, velocidad){

let valor = 0;

let intervalo = setInterval(() => {

valor++;

document.getElementById(id).textContent = valor;

if(valor >= final){
clearInterval(intervalo);
}

}, velocidad);

}

animar("sodio",1200,2);
animar("proteina",35,50);
animar("fibra",60,25);