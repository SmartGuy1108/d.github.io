let users = [];
let currentUser = null;
let friends = [];
let groups = [];
let messages = [];

function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    if (users.find(u => u.email === email)) {
        alert('Email already registered.');
        return;
    }
    const user = { email, password, username: email.split('@')[0] };
    users.push(user);
    sendEmail(email, password);
    alert('Registration successful! Please login.');
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
        loadFriends();
        loadGroups();
    } else {
        alert('Invalid email or password.');
    }
}

function logout() {
    currentUser = null;
    document.getElementById('login').style.display = 'block';
    document.getElementById('register').style.display = 'block';
    document.getElementById('chat').style.display = 'none';
}

function changeUsername() {
    const username = document.getElementById('username').value;
    if (username.trim()) {
        currentUser.username = username;
    }
}

function loadFriends() {
    const friendList = document.getElementById('friendList');
    friendList.innerHTML = '';
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        friendList.appendChild(li);
    });
}

function loadGroups() {
    const groupList = document.getElementById('groupList');
    groupList.innerHTML = '';
    groups.forEach(group => {
        const li = document.createElement('li');
        li.textContent = group;
        groupList.appendChild(li);
    });
}

function createGroup() {
    const groupName = document.getElementById('newGroupName').value;
    if (groupName.trim()) {
        groups.push(groupName);
        loadGroups();
    }
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message.trim()) {
        messages.push({ user: currentUser.email, text: message });
        displayMessages();
        messageInput.value = '';
    }
}

function displayMessages() {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = '';
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${message.user}: ${message.text}`;
        messagesDiv.appendChild(messageElement);
    });
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function changeColorScheme(scheme) {
    document.documentElement.className = scheme;
}

function sendEmail(email, password) {
    console.log(`Send email to: ${email}, Password: ${password}`);
    // Use an actual email service to send emails in a real application
}
