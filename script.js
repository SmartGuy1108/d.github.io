const users = [];
let currentUser = null;

function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    users.push({ email, password });
    alert('Registration successful! Please login.');
    sendEmail(email, password);
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
        document.getElementById('chat').style.display = 'block';
    } else {
        alert('Invalid email or password.');
    }
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message.trim()) {
        const messagesDiv = document.getElementById('messages');
        const messageElement = document.createElement('div');
        messageElement.textContent = `${currentUser.email}: ${message}`;
        messagesDiv.appendChild(messageElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        messageInput.value = '';
    }
}

function changeColorScheme(scheme) {
    document.documentElement.className = scheme;
}

function sendEmail(email, password) {
    console.log(`Send email to: ${email}, Password: ${password}`);
    // Use an actual email service to send emails in a real application
}
