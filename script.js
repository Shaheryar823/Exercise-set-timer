let totalSet;
let exerciseDuration;
let breakDuration;


let seconds = 0; 
let setTimeBreakId;
let setTimeIdForWorkOut;

function workOutTime(){

    if(seconds === -1)
    {
        seconds = 9;
        exerciseDuration -=1;
    }
    m = exerciseDuration <= 9? `0${exerciseDuration}`: `${exerciseDuration}`;
    s = seconds <= 9? `0${seconds}`: `${seconds}`;
    set = `${m}:${s}`;
    document.querySelector('.js-timer-display').innerHTML = String(set);
    seconds--;
    setTimeIdForWorkOut = setTimeout(workOutTime, 1000);
    if(seconds === -1 && exerciseDuration === 0)
    {
        clearTimeout(setTimeIdForWorkOut);
        if(totalSet > 1)
        {
            breakTime();
            exerciseDuration = Number(document.querySelector('.js-set-duration').value);
            seconds = 0;
            return;
        }
    }
    
    
}

function breakTime()
{
    totalSet--;
    m = breakDuration <= 9? `0${breakDuration}`: `${breakDuration}`;
    set = `Break: 00:${m}`;
    document.querySelector('.js-break-display').innerHTML = String(set);
    breakDuration--;
    setTimeBreakId = setTimeout(breakTime, 1000);
    if(breakDuration === -1)
    {
        clearTimeout(setTimeBreakId);
        workOutTime();            
        breakDuration = Number(document.querySelector('.js-break-duration').value);
    }
}

function start()
{
    seconds = 0;
    totalSet = Number(document.querySelector('.js-sets').value);
    console.log(typeof totalSet);
    exerciseDuration = Number(document.querySelector('.js-set-duration').value);
    breakDuration = Number(document.querySelector('.js-break-duration').value);
    document.querySelector('.js-break-display').innerHTML = `Break: 00:${breakDuration}`;
    clearTimeout(setTimeBreakId);
    clearTimeout(setTimeIdForWorkOut);
    workOutTime();
}


document.querySelector('.js-stop-btn').addEventListener('click',()=>{
    clearTimeout(setTimeBreakId);
    clearTimeout(setTimeIdForWorkOut);
});


