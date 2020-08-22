const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
// the white space
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
//optional 4th argument
const timer = new Timer(durationInput, startButton, pauseButton, {
    //series of diff callbacks -- invoked at specific times - for user feedback
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute(
            'stroke-dashoffset',
            (perimeter * timeRemaining)/ duration - perimeter
        );
    },
    onComplete() {
        console.log('timer done');
    }
});
