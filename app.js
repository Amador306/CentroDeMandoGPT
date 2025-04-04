document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.getElementById("chat-box");

    // Crear un mensaje
    const message = document.createElement("p");
    message.textContent = "¡Hola! Bienvenido al Centro de Mando GPT. ¿Cómo puedo ayudarte?";
    
    // Agregar el mensaje al chat-box
    chatBox.appendChild(message);
});
