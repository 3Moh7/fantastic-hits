function sendMessage() {
    const inputField = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userInput = inputField.value.trim().toUpperCase();

    // Hide all city buttons first (just in case)
    document.querySelectorAll('.b1, .b2, .kkf button, .kkf2 button').forEach(btn => {
        btn.style.display = 'none';
    });

    // Show only the matching city button
    if (userInput === 'DAMMAM') {
        document.querySelector('button:has(a[href*="Dammam"])').style.display = 'inline-block';
    } else if (userInput === 'AL-AHSA') {
        document.querySelector('button:has(a[href*="Al_Ahsa"])').style.display = 'inline-block';
    } else if (userInput === 'KHOBAR') {
        document.querySelector('button:has(a[href*="Al_Khobar"])').style.display = 'inline-block';
    } else if (userInput === 'AL-HOFUF') {
        document.querySelector('button:has(a[href*="Al_Hofuf"])').style.display = 'inline-block';
    } else if (userInput === 'RIYADH') {
        document.querySelector('button:has(a[href*="Riyadh"])').style.display = 'inline-block';
    } else if (userInput === 'JEDDAH') {
        document.querySelector('button:has(a[href*="Jeddah"])').style.display = 'inline-block';
    } else if (userInput === 'AL-MEDINA') {
        document.querySelector('button:has(a[href*="Al_Madinah"])').style.display = 'inline-block';
    } else if (userInput === 'AL-TAIF') {
        document.querySelector('button:has(a[href*="Taif"])').style.display = 'inline-block';
    } else if (userInput === 'TABUK-PROVINCE') {
        document.querySelector('button:has(a[href*="Tabuk"])').style.display = 'inline-block';
    } else if (userInput === 'ABHA') {
        document.querySelector('button:has(a[href*="Abha"])').style.display = 'inline-block';
    } else {
        // Not a valid city
        // You can show an error or keep buttons hidden
    }

    // Show user message
    const userMsg = document.createElement('div');
    userMsg.classList.add('user-message');
    userMsg.textContent = `You: ${inputField.value}`;
    chatBox.appendChild(userMsg);

    // Show bot reply
    const botMsg = document.createElement('div');
    botMsg.classList.add('bot-message');
    if (
        ['DAMMAM', 'AL-AHSA', 'KHOBAR', 'AL-HOFUF', 'RIYADH', 'JEDDAH', 'AL-MEDINA', 'AL-TAIF', 'TABUK-PROVINCE', 'ABHA']
        .includes(userInput)
    ) {
        botMsg.textContent = "Bot: Here's the best attraction in" + userInput;
    } else if (userInput === 'OTHER CITIES') {
        botMsg.textContent = "Bot: Sure! Here's the full website." + '[https://www.tripadvisor.com/]';
    } else {
        botMsg.textContent = "Bot: I don't recognize that city.";
    }

    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
    inputField.value = '';
}
