//========================
// INICIAR AOS
//========================

AOS.init({
    duration: 1000,
    once: true,
    offset: 80
});

//========================
// ABRIR INVITACIÓN
//========================

const botonAbrir = document.getElementById("abrir");
const hero = document.querySelector(".hero");
const contenido = document.getElementById("contenido");

botonAbrir.addEventListener("click", () => {

    hero.style.transition = "all 0.6s ease";
    hero.style.opacity = "0";

    setTimeout(() => {

        hero.style.display = "none";

        contenido.style.display = "block";
        contenido.style.opacity = "1";
        contenido.style.transform = "none";

        window.scrollTo({ top: 0 });

    }, 600);

});

//========================
// CUENTA REGRESIVA
//========================

const fechaEvento = new Date("July 18, 2026 19:00:00").getTime();

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

setInterval(() => {

    const ahora = new Date().getTime();

    const distancia = fechaEvento - ahora;

    if (distancia <= 0) {

        dias.innerHTML = "00";
        horas.innerHTML = "00";
        minutos.innerHTML = "00";
        segundos.innerHTML = "00";

        return;

    }

    dias.innerHTML = Math.floor(distancia / (1000 * 60 * 60 * 24));

    horas.innerHTML = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    minutos.innerHTML = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

    segundos.innerHTML = Math.floor((distancia % (1000 * 60)) / 1000);

}, 1000);

//========================
// CONFIRMAR ASISTENCIA
//========================

const confirmar = document.getElementById("confirmar");

confirmar.addEventListener("click", () => {

    let nombre = document.getElementById("nombre").value.trim();

    let personas = document.getElementById("personas").value;

    if (nombre === "") {

        alert("Por favor escribe tu nombre.");

        return;

    }

    confetti({

        particleCount: 250,
        spread: 180,
        origin: {
            y: 0.6
        }

    });

    setTimeout(() => {

        let mensaje = `Hola Stefany 😊

Soy ${nombre}.

Confirmo mi asistencia a tu ceremonia de grado.

Asistiremos: ${personas}.

Nos vemos el 18 de julio. 🎓💜`;

        let url = "https://wa.me/573012988549?text=" + encodeURIComponent(mensaje);

        window.open(url, "_blank");

    }, 1200);

});

//========================
// NO ASISTIRÉ
//========================

const rechazar = document.getElementById("rechazar");

rechazar.addEventListener("click", () => {

    let nombre = document.getElementById("nombre").value.trim();

    if (nombre === "") {

        nombre = "Sin nombre";

    }

    let mensaje = `Hola Stefany.

Soy ${nombre}.

Lamentablemente no podré asistir a tu ceremonia de grado.

Te deseo muchos éxitos en esta nueva etapa. 💜`;

    let url = "https://wa.me/573125579526?text=" + encodeURIComponent(mensaje);

    window.open(url, "_blank");

});

//========================
// EFECTO BOTONES
//========================

document.querySelectorAll("button").forEach(boton => {

    boton.addEventListener("mouseenter", () => {

        boton.style.transform = "translateY(-4px)";

    });

    boton.addEventListener("mouseleave", () => {

        boton.style.transform = "translateY(0px)";

    });

});

//========================
// EFECTO TARJETAS
//========================

document.querySelectorAll(".card,.dress-card,.box").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

//========================
// SCROLL ARRIBA
//========================

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

});

function crearCorazones() {
    const container = document.querySelector(".hearts");

    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");

        heart.innerHTML = "❤";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (10 + Math.random() * 25) + "px";
        heart.style.animationDuration = (4 + Math.random() * 6) + "s";
        heart.style.animationDelay = Math.random() * 5 + "s";
        heart.style.opacity = Math.random();

        container.appendChild(heart);
    }
}

crearCorazones();