// ========================
// AOS
// ========================
AOS.init({
    duration: 1200,
    once: true
});


// ========================
// ABRIR INVITACIÓN (FIX TOTAL)
// ========================
document.addEventListener("DOMContentLoaded", () => {

    const botonAbrir = document.getElementById("abrir");
    const hero = document.querySelector(".hero");
    const contenido = document.getElementById("contenido");

    if (!botonAbrir || !hero || !contenido) {
        console.error("Error: elementos no encontrados");
        return;
    }

    botonAbrir.addEventListener("click", () => {

        hero.style.transition = "all .6s ease";
        hero.style.opacity = "0";
        hero.style.transform = "scale(0.95)";

        setTimeout(() => {
            hero.style.display = "none";
            contenido.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 600);

    });

});


// ========================
// CUENTA REGRESIVA
// ========================
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


// ========================
// WHATSAPP CONFIRMAR
// ========================
const confirmar = document.getElementById("confirmar");
const rechazar = document.getElementById("rechazar");

confirmar?.addEventListener("click", () => {

    const nombre = document.getElementById("nombre").value.trim();
    const personas = document.getElementById("personas").value || "1 Persona";

    if (!nombre) {
        alert("Por favor escribe tu nombre.");
        return;
    }

    confetti({
        particleCount: 200,
        spread: 160,
        origin: { y: 0.6 }
    });

    const telefono = "573125579526";

    const mensaje = `Hola Stefany 😊

Soy ${nombre}.

Confirmo mi asistencia a tu ceremonia de grado.

Asistiremos: ${personas}.

Nos vemos el 18 de julio 🎓💜`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.location.href = url;
});


// ========================
// WHATSAPP RECHAZAR
// ========================
rechazar?.addEventListener("click", () => {

    let nombre = document.getElementById("nombre").value.trim();
    if (!nombre) nombre = "Sin nombre";

    const telefono = "573125579526";

    const mensaje = `Hola Stefany.

Soy ${nombre}.

Lamentablemente no podré asistir.

Te deseo muchos éxitos 💜`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.location.href = url;
});


// ========================
// EFECTOS UI
// ========================

// botones hover suave
document.querySelectorAll("button").forEach(boton => {
    boton.addEventListener("mouseenter", () => {
        boton.style.transform = "translateY(-4px)";
    });

    boton.addEventListener("mouseleave", () => {
        boton.style.transform = "translateY(0px)";
    });
});


// tarjetas hover
document.querySelectorAll(".card,.dress-card,.box").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px) scale(1)";
    });
});


// ========================
// SCROLL INICIAL
// ========================
window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});