// Lista de emojis que se pueden mostrar de forma aleatoria
const emojis = ["❤️", "💖", "💘", "💝", "💕", "🥰", "💗", "💌", "😍", "😘", "🌹", "🎉", "🍫", "💋", "🌷", "🐶", "🐱", "🍓"];

// Función para crear emojis flotantes
function createHeart() {
    const heartContainer = document.getElementById("heart-container");
    const heart = document.createElement("div");

    // Selección aleatoria de un emoji
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    heart.classList.add("heart");
    heart.textContent = randomEmoji;

    // Asignar una posición aleatoria en el eje X y una duración aleatoria
    const startPositionX = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 2 + 3; // Duración aleatoria entre 3s y 5s
    
    heart.style.left = `${startPositionX}px`;
    heart.style.animationDuration = `${animationDuration}s`;

    heartContainer.appendChild(heart);

    // Eliminar el emoji después de que termine la animación
    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000);
}

// Crear un emoji cada 500 ms
setInterval(createHeart, 500);

// Función para mostrar el mensaje
function showMessage() {
    document.getElementById("message").style.display = "block";
}

// Función para cerrar el mensaje
function closeMessage() {
    document.getElementById("message").style.display = "none";
}
