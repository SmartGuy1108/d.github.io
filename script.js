const soundButtonsContainer = document.getElementById('sound-buttons');

for (let i = 1; i <= 1000; i++) {
    const button = document.createElement('button');
    button.innerText = `Sound ${i}`;
    button.onclick = () => playSound(`sounds/sound${i}.mp3`);
    soundButtonsContainer.appendChild(button);
}

function playSound(filename) {
    const audio = new Audio(filename);
    audio.play();
}
