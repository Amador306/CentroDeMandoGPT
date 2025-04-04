document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos los elementos del DOM
    const sendButton = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    // Mensaje inicial en el chat
    const initialMessage = document.createElement("p");
    initialMessage.textContent = "¡Hola! Bienvenido al Centro de Mando GPT. ¿Cómo puedo ayudarte?";
    chatBox.appendChild(initialMessage);

    // Función para enviar mensaje
    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value.trim(); // Obtenemos el mensaje del usuario
        if (userMessage) { // Si el mensaje no está vacío
            const message = document.createElement("p");
            message.textContent = userMessage;
            chatBox.appendChild(message); // Añadimos el mensaje al chat

            userInput.value = "";  // Limpiamos el campo de texto
            chatBox.scrollTop = chatBox.scrollHeight;  // Desplazamos el chat hacia abajo para ver el nuevo mensaje
        }
    });

    // Permitir enviar mensaje cuando el usuario presiona "Enter"
    userInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") { // Si presionan Enter
            sendButton.click(); // Ejecutamos el mismo código que si presionaran el botón
        }
    });
});
