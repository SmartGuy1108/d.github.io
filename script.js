const soundFiles = [
    { name: 'Sound 1', file: 'sounds/sound1.mp3' },
    { name: 'Sound 2', file: 'sounds/sound2.mp3' },
    { name: 'Sound 3', file: 'sounds/sound3.mp3' },
    // ... add more sounds here
];

const soundButtonsContainer = document.getElementById('sound-buttons');

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
