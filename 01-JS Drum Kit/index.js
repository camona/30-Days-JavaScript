function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the function from running all together
    audio.currentTime = 0; // rewind to start to be able to play multiple sounds without waiting for each sound to end
    audio.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing'); // adding css style when hitting a button
}

// removing css transformation
function removeTransition(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
}

// looping through each key
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// hit a button to play
window.addEventListener('keydown', playSound);