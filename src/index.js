const excersiceSelector = '#huidigeredactiesom';

// Observe the excersice 
const excersice = document.querySelector(excersiceSelector);
const mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        addSpeakButton();
        mutationObserver.disconnect();
    });
});

mutationObserver.observe(excersice, {
    attributes: true,
});

// Predict based on base speechPace how long the speech will take.
function calculateTimeout(textLenght) {
    const speechPace = 55;
    return textLenght * speechPace
}

// Add button to page to enable user to click it.
function addSpeakButton() {
    const excersice = document.querySelector(excersiceSelector)
    const speakerButton = document.createElement('button');
    speakerButton.setAttribute('class', 'speaker-button');
    excersice.insertAdjacentElement('afterend', speakerButton)
    speakerButton.addEventListener('click', speakExcersie)
}


// Speak with spoken library on Click
const speakExcersie = async (e) => {
    const speakerButton = e.target;
    const excersice = document.querySelector(excersiceSelector).textContent;
    speakerButton.setAttribute('data-speaking', true);
    (await spoken.voices())
        .filter(voice => voice.name.indexOf('Google Nederlands') == 0)
        .forEach(voice =>
            spoken.say(excersice, voice.name, 0.7).then(() => {
                speakerButton.removeAttribute('data-speaking', true)
            })
        )
}



