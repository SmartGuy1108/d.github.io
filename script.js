const soundFiles = [
    { name: 'Sound Effect 1', file: 'https://www.freesound.org/data/previews/459/459966_939774-lq.mp3' },
    { name: 'Sound Effect 2', file: 'https://www.freesound.org/data/previews/220/220173_4105938-lq.mp3' },
    { name: 'Sound Effect 3', file: 'https://www.freesound.org/data/previews/348/348654_6970090-lq.mp3' },
    { name: 'Sound Effect 4', file: 'https://www.freesound.org/data/previews/368/368738_5121236-lq.mp3' },
    { name: 'Sound Effect 5', file: 'https://www.freesound.org/data/previews/150/150963_2530208-lq.mp3' },
    // Repeat or find more URLs to complete 500 sound effects
];

for (let i = 6; i <= 500; i++) {
    soundFiles.push({ name: `Sound Effect ${i}`, file: `https://www.freesound.org/data/previews/459/459966_939774-lq.mp3` });
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
