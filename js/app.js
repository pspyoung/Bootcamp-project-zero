console.log("%c [project-zero app.js] loaded 🧸", "color:white; background-color:brown; padding:5px;");

let eat = 0; // button class eat
let sleep = 0; // button class sleep
let hug = 0; // buton class hug
let time = 0; 
let ageInterval;
let eatInterval;
let sleepInterval;
let hugInterval;
let species; 


// === Names of Things === //
// Start Button = $("#startGame"); // 
// Eat Button = $(".eat");          // $("#eatTimer");
// Sleep Button = $(".sleep");      // $("#sleepTimer");
// Hug Button = $(".hug");          // $("#hugTimer");


// === Buttons, Timers === //

$('#startGame').on('click', () => {
    // console.log ("It started!");
    time = 1; 
    ageInterval = setInterval(ageTimer, 1000);
    // eat = 10; 
    // eatInterval = setInterval(eatTimer, 1000);
    // sleep = 10;
    // sleepInterval = setInterval(sleepTimer, 1000);
    hug = 10;
    hugInterval = setInterval(hugTimer, 1000);
});

// === Age Timer

function ageTimer () {
    time ++; 
    $("#ageTimer").text(`${time}`);
    if (time <5) {
        $("#species").text("Baby Bear");
    } else if (time < 10) {
        $("#species").text("Kid Bear");
    } else {
        $("#species").text("Growed Up Bear");
    }
}; 
    
function stopAgeInterval() {
    clearInterval(ageInterval);
};

    // === Eat Timer
function eatTimer () {
    eat--; 
    $("#eatTimer").text(`${eat}`);
    if (eat===0) {
        stopEatInterval(); 
        stopAgeInterval();
        alert("You have died of hunger"); 
    };
}

$(".eat").on("click", () => {
    eat++;
});



function stopEatInterval() {
    clearInterval(eatInterval); 
}

// === Sleep Timer
function sleepTimer () {
    sleep--; 
    $("#sleepTimer").text(`${sleep}`);
    if (sleep===0) {
        stopSleepInterval();
        stopAgeInterval(); 
        alert("You went into deep hybearnation! Better luck next time!");
    }
};

function stopSleepInterval() {
    clearInterval(sleepInterval);
}

$(".sleep").on("click", () => {
    sleep++;
});

// === Hug Timer

function hugTimer () {
    hug--; 
    $("#hugTimer").text(`${hug}`);    
    if (hug ===0) {
        stopHugInterval();
        stopAgeInterval();
        alert("You need moar bearhugs. Try again :(")
    }
};

function stopHugInterval() {
    clearInterval(hugInterval);
}

$(".hug").on("click", () => {
    hug++;
});

