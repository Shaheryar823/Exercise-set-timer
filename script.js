let totalSet;
let exerciseDuration;
let breakDuration;


let seconds = 0; 
let setTimeBreakId;
let setTimeIdForWorkOut;
let totalBreak;

function workOutTime(){

    if(seconds === -1)
    {
        seconds = 59;
        exerciseDuration -=1;
    }
    set = `${ZeroBefore(exerciseDuration)}:${ZeroBefore(seconds)}`;
    document.querySelector('.js-timer-display').innerHTML = String(set);
    seconds--;
    setTimeIdForWorkOut = setTimeout(workOutTime, 1000);
    if(seconds === -1 && exerciseDuration === 0)
    {
        clearTimeout(setTimeIdForWorkOut);
        if(totalBreak >= 1)
        {
            totalBreak--;
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
    set = `Break: 00:${ZeroBefore(breakDuration)}`;
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
    totalBreak = totalSet - 1;


    console.log(totalSet);
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



function clock()
{
    setTimeout(()=>{
        let day = new Date();
        let mintes = day.getMinutes();
        let hours = day.getHours() > 12? day.getHours() -12 : day.getHours() ;
        let sec = day.getSeconds();
        let currentTime =`<h1 class = "clock-display">${ZeroBefore(hours)}:${ZeroBefore(mintes)}:${ZeroBefore(sec)}</h1>`;
        document.querySelector('.js-clock-container').innerHTML = currentTime;
        clock();},1000);
}
clock();

function ZeroBefore(num)
{
    num = num > 9? num:`0${num}`;
    return num;
}
