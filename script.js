// ============================
// MODO OSCURO
// ============================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("modo","oscuro");

    }else{

        localStorage.setItem("modo","claro");

    }

});

if(localStorage.getItem("modo") === "oscuro"){

    document.body.classList.add("dark");

}

// ============================
// CONTADORES ANIMADOS
// ============================

function animarContador(id, objetivo, velocidad){

    const elemento = document.getElementById(id);

    let contador = 0;

    const intervalo = setInterval(() => {

        contador++;

        elemento.textContent = contador;

        if(contador >= objetivo){

            clearInterval(intervalo);

        }

    }, velocidad);

}

window.addEventListener("load", () => {

    animarContador("sodioCounter", 1200, 2);

    animarContador("proteinaCounter", 35, 50);

    animarContador("fibraCounter", 60, 25);

});

// ============================
// CALCULADORA DE SODIO
// ============================

function calcularAhorro(){

    const cantidad =
    document.getElementById("cantidad").value;

    const resultado =
    document.getElementById("resultado");

    if(cantidad === ""){

        resultado.innerHTML =
        "⚠ Ingresa una cantidad válida.";

        return;

    }

    const ahorro = cantidad * 1000;

    resultado.innerHTML = `
        <h3>🎉 Resultado</h3>

        <p>
        Ahorrarías aproximadamente
        <strong>${ahorro} mg</strong>
        de sodio al mes.
        </p>
    `;

}

// ============================
// QUIZ NUTRICIONAL
// ============================

let puntosQuiz = 0;

function sumarPuntos(valor){

    puntosQuiz += valor;

}

function mostrarResultadoQuiz(){

    const resultado =
    document.getElementById("quizResultado");

    if(puntosQuiz <= 1){

        resultado.innerHTML = `
        <h3>🍜 Nivel Básico</h3>

        <p>
        Tu sopa puede mejorar mucho.
        Agrega verduras y proteína.
        </p>
        `;

    }

    else if(puntosQuiz <= 2){

        resultado.innerHTML = `
        <h3>🥗 Nivel Bueno</h3>

        <p>
        Vas por buen camino.
        Puedes mejorar algunos ingredientes.
        </p>
        `;

    }

    else{

        resultado.innerHTML = `
        <h3>🏆 Excelente</h3>

        <p>
        Tu sopa es una opción muy equilibrada.
        </p>
        `;

    }

    puntosQuiz = 0;

}

// ============================
// APARICIÓN AL HACER SCROLL
// ============================

const elementos =
document.querySelectorAll(
".history-card, .benefit-card, .ingredient-card, .comparison-card, .stat-card"
);

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.2
});

elementos.forEach(elemento=>{

    observer.observe(elemento);

});

// ============================
// EFECTO NAVBAR
// ============================

window.addEventListener("scroll", ()=>{

    const nav =
    document.querySelector("nav");

    if(window.scrollY > 100){

        nav.style.padding =
        "12px 8%";

    }

    else{

        nav.style.padding =
        "20px 8%";

    }

});
// ============================
// BOTÓN VOLVER ARRIBA
// ============================

const btnTop = document.createElement("button");

btnTop.innerHTML = "⬆";

btnTop.id = "btnTop";

document.body.appendChild(btnTop);

btnTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        btnTop.classList.add("showTop");

    }else{

        btnTop.classList.remove("showTop");

    }

});

// ============================
// LIGHTBOX GALERÍA
// ============================

const imagenes =
document.querySelectorAll(".gallery img");

const lightbox =
document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

imagenes.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        const imagenGrande =
        document.createElement("img");

        imagenGrande.src = img.src;

        while(lightbox.firstChild){

            lightbox.removeChild(
                lightbox.firstChild
            );

        }

        lightbox.appendChild(
            imagenGrande
        );

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// ============================
// BARRA DE PROGRESO
// ============================

const progressBar =
document.createElement("div");

progressBar.id = "progressBar";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const alturaTotal =

    document.documentElement.scrollHeight -

    document.documentElement.clientHeight;

    const progreso =

    (window.scrollY / alturaTotal) * 100;

    progressBar.style.width =
    progreso + "%";

});

// ============================
// EFECTO PARALLAX HERO
// ============================

window.addEventListener("scroll", () => {

    const heroImg =
    document.querySelector(".hero-image img");

    if(heroImg){

        heroImg.style.transform =

        `translateY(${window.scrollY * 0.08}px)`;

    }

});

// ============================
// REVELAR FAQ
// ============================

const detalles =
document.querySelectorAll("details");

detalles.forEach(detalle => {

    detalle.addEventListener("toggle", () => {

        if(detalle.open){

            detalle.style.transform =
            "scale(1.02)";

        }else{

            detalle.style.transform =
            "scale(1)";

        }

    });

});

// ============================
// MENSAJE DE BIENVENIDA
// ============================

setTimeout(() => {

    const aviso =
    document.createElement("div");

    aviso.classList.add("toast");

    aviso.innerHTML =
    "🍜 Bienvenido a MaruFit";

    document.body.appendChild(aviso);

    setTimeout(() => {

        aviso.remove();

    },4000);

},1500);

// ============================
// EFECTO ESCRITURA
// ============================

const titulo =
document.querySelector(".hero-content h1");

if(titulo){

    const textoOriginal =
    titulo.innerHTML;

    titulo.innerHTML = "";

    let i = 0;

    const escribir = () => {

        if(i < textoOriginal.length){

            titulo.innerHTML +=
            textoOriginal.charAt(i);

            i++;

            setTimeout(escribir,25);

        }

    };

    escribir();

}