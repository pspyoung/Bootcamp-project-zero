console.log("%c [project-zero app.js] loaded 🧸", "color:white; background-color:brown; padding:5px;");

let eat = 10; // button class eat
let sleep = 0; // button class sleep
let hug = 0; // buton class hug
let eatInterval;


// === Names of Things === //
// Start Button = $("#startGame"); // 
// Eat Button = $(".eat");          // $("#eatTimer");
// Sleep Button = $(".sleep");      // $("#sleepTimer");
// Hug Button = $(".hug");          // $("#hugTimer");


// === Buttons, Timers === //

$('#startGame').on('click', () => {
    // console.log ("It started!");
    eat = 3; 
    eatInterval = setInterval(eatTimer, 1000);
});

// === Eat Timer
function eatTimer () {
    eat--; 
    $("#eatTimer").text(`${eat}`);
    if (eat===0) {
        stopEatInterval();
        return alert("You have died of hunger");
    }
};

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

