const soundFiles = [];

for (let i = 1; i <= 1000; i++) {
    soundFiles.push({ name: `Sound ${i}`, file: `sounds/sound${i}.mp3` });
}

const soundButtonsContainer = document.getElementById('sound-buttons');
const modeToggleButton = document.getElementById('mode-toggle');
const body = document.body;

soundFiles.forEach(sound => {
    const button = document.createElement('button');
    button.innerText = sound.name;
    button.onclick = () => playSound(sound.file);
    soundButtonsContainer.appendChild(button);
});

function playSound(filename) {
    const audio = new Audio(filename);
    audio.play();
}

modeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    modeToggleButton.innerText = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
