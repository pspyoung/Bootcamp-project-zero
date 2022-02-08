console.log("%c [project-zero app.js] loaded 🧸", "color:white; background-color:brown; padding:5px;");

let eat = 10; // button class eat
let sleep = 8; // button class sleep
let hug = 6; // buton class hug

// === Names of Things === //
// Start Button = $("#startGame"); // 
// Eat Button = $(".eat");          // $("#eatTimer");
// Sleep Button = $(".sleep");      // $("#sleepTimer");
// Hug Button = $(".hug");          // $("#hugTimer");


// === Buttons, Timers === //

$('#startGame').on('click', () => {
console.log ("It started!");
});

const eatTimer = () => {
    time--; 
    $("#eatTimer").text("timer: " + time);
};

const sleepTimerGo = () => {
    time--; 
    $("#sleepTimer").text("timer: " + time);
};

const hugTimerGo = () => {
    time--; 
    $("#hugTimer").text("timer: " + time);
};

