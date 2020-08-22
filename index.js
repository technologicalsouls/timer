//  ADDING IN THE STOP / START/ PAUSE FUNCTIONALITY AND HOW TO EXPRESS THAT TO THE USER -- ALERTING / GIVING FEEDBACK TO USER WHEN SOMETHING IMPORTANT HAPPENED TO THE 'MECHANICS' OF THE TIMER.

//also made TIMER class into it's own file -- timer.js (deleted class timer here to clean file )

class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            // if there is an onStart callback
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
// chieck if there was an onstart callback already
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.interval);
    }

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) [
                this.onComplete()
            ]
        } else {
            this.timeRemaining = this.timeRemaining - 1;
            if (this.onTick) {
                this.onTick();
            }
        }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

//optional 4th argument
const timer = new Timer(durationInput, startButton, pauseButton, {
    //series of diff callbacks -- invoked at specific times - for user feedback
    onStart() {
        console.log('timer started');
    },
    onTick() {
        console.log('timer just ticked down');
    },
    onComplete() {
        console.log('timer done');
    }
});

