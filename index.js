// FIRST STAGE -- SET UP TIMER CLASS ONLY -- FIGURE THIS ONE COMPONENT OUT

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    // arrow function solve "this" problem
    start = () => {
        // invoke tick at start to start ticking AT CLICK
        this.tick();
        //setting interval
        this.interval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.interval);
    }
    // run once every second
    tick = () => {
        //to check when timer stops aka 0
        if (this.timeRemaining <= 0) {
            this.pause();
        } else {
        //old way -- remember to convert to number from string (since value is a string)
            // const timeRemaining = parseFloat(this.durationInput.value);
        //new way - use getter ( timeRemaining a class method for internal class stuff )
        // //update the duration to reflect now
        // OLD WAY w/o setter
            // this.durationInput.value = timeRemaining - 1;
            this.timeRemaining= this.timeRemaining - 1;
        }
    };

    // use 'get' keyword before function (getter) - allows to retrieve var out of a class w/o creating a new method
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        // this.durationInput.value = time;
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);

