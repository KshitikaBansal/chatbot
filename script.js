document.addEventListener('DOMContentLoaded', function() {
    const chatDisplay = document.getElementById('chat-display');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', function() {
        const userMessage = userInput.value.trim();
        if (userMessage !== '') {
            displayUserMessage(userMessage);
            // Here you would typically send the user message to the chatbot API
            // and handle the bot's response.
            // For demonstration purposes, we'll simulate a bot response after 1 second.
            setTimeout(() => displayBotMessage('Hello! How can I assist you?'), 1000);
            userInput.value = ''; // Clear input field
        }
    });

    function displayUserMessage(message) {
        const userBubble = document.createElement('div');
        userBubble.classList.add('chat-bubble', 'user-bubble');
        userBubble.textContent = message;
        chatDisplay.appendChild(userBubble);
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to bottom
    }

    function displayBotMessage(message) {
        const botBubble = document.createElement('div');
        botBubble.classList.add('chat-bubble');
        botBubble.textContent = message;
        chatDisplay.appendChild(botBubble);
        chatDisplay.scrollTop = chatDisplay.scrollHeight; // Scroll to bottom
    }
});