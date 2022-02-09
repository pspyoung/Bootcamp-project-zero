console.log("%c [project-zero app.js] loaded 🧸", "color:white; background-color:brown; padding:5px;");

let eat = 10; // button class eat
let sleep = 0; // button class sleep
let hug = 0; // buton class hug
let eatInterval;
let species; 


// === Names of Things === //
// Start Button = $("#startGame"); // 
// Eat Button = $(".eat");          // $("#eatTimer");
// Sleep Button = $(".sleep");      // $("#sleepTimer");
// Hug Button = $(".hug");          // $("#hugTimer");


// === Buttons, Timers === //

$('#startGame').on('click', () => {
    // console.log ("It started!");
    eat = 500; 
    eatInterval = setInterval(eatTimer, 1000);
    ageTimer();
    setInterval(ageTimer,)
    console.log("I'm getting older"!);
});

// === Age Timer

function ageTimer () {
    time = 0;
    time ++; 
    // if (time <5) {
    //     $("#species").text("Baby Bear");
    // } else if (time >=6 && time < 10) {
    //     $("#species").text("Kid Bear");
    // } else {
    //     $("#species").text("Growed Up Bear");
    // }
}; 

// === Eat Timer
function eatTimer () {
    eat--; 
    $("#eatTimer").text(`${eat}`);
    if (eat===0) {
        stopEatInterval();
        return alert("You have died of hunger");
    }
};

$(".eat").on("click", () => {
    eat++;
});

function stopEatInterval() {
    clearInterval(eatInterval); 
}

// === Sleep Timer
const sleepTimerGo = () => {
    time = 30;
    time--; 
    $("#sleepTimer").text("Wokeness level: " + sleep);
};

// === Hug Timer

const hugTimerGo = () => {
    time--; 
    $("#hugTimer").text("Loneliness level: " + time);
};

