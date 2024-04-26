const stopWatchTag = document.getElementsByClassName("stopWatch")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];


let seconds = 0;
let minutes = 0;
let hours = 0;

// setInterval(callback,1000);

const startTime = ()=>{
    // console.log("this function was called...");
    seconds += 1;
    if(seconds === 60){
        seconds = 0;
        minutes += 1;

        if(minutes === 60){
            minutes = 0;
            hours += 1;
        }
    }
    // condition? code : code;

    const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourText = hours < 10 ? "0" + hours.toString() : hours;

    stopWatchTag.textContent = hourText + ":" + minuteText + ":" + secondText ;
}

let intervalId;
startButtonTag.addEventListener("click",function(){
    // console.log("hello world");
    intervalId = setInterval(startTime,1000);
    
})

pauseButtonTag.addEventListener("click",function(){
    clearInterval(intervalId);
})

continueButtonTag.addEventListener("click",()=>{
    // console.log("hello world")
    clearInterval(intervalId);
    intervalId = setInterval(startTime,1000);

})


restartButtonTag.addEventListener("click",()=>{
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 1000);
})










