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

// Bear Images
let bearOne = $(`<img id ="cub"/>`);
bearOne.attr("src", "https://user-images.githubusercontent.com/90462032/153273913-1a062cbd-f12d-4b0c-9e4f-d3e91bfc0ac8.gif");

let bearTwo = $(`<img id ="polar"/>`);
bearTwo.attr("src", "https://user-images.githubusercontent.com/90462032/153276597-b33ac10a-9db9-4606-bcaf-bfef23ca1098.gif");

let bearThree = $(`<img id ="panda"/>`);
bearThree.attr("src", "https://user-images.githubusercontent.com/90462032/153276694-5987b03c-203b-4699-baa2-b765a4aafa9f.gif");


// === Names of Things === //
// Start Button = $("#startGame"); // 
// Eat Button = $(".eat");          // $("#eatTimer");
// Sleep Button = $(".sleep");      // $("#sleepTimer");
// Hug Button = $(".hug");          // $("#hugTimer");


// === Form for Name
// let nameBear = prompt("What is your name?");

// === Buttons, Timers === //

$("#startGame").on("click", () => {
    // console.log ("It started!");
    bearThree.remove();
    time = 1; 
    ageInterval = setInterval(ageTimer, 1000);
    eat = 10; 
    eatInterval = setInterval(eatTimer, 1000);
    sleep = 10;
    sleepInterval = setInterval(sleepTimer, 1000);
    hug = 10;
    hugInterval = setInterval(hugTimer, 1000);
});

// <h4>Name<input id = "nameBear" type="text"></h4><button class = "nameForm">Ok</button>

// working vanilla javascript targetting #nameBear
let formText = document.getElementById("nameBear");
// const $formText = $("#nameBear");


// $(".nameForm").on("click", () => {
//     console.log($formText);
    // $("#name").text($formText.value);
//     console.log($("#name").text());
// });

// == Additional functionality to update as typing
$("#nameBear").on("keyup", () => {
    $("#name").text(formText.value + ", ");
});

// === Age Timer

function ageTimer () {
    time ++; 
    $("#ageTimer").text(`${time}`);
    if (time <5) {
        $("#species").text("Baby Bear");
        $(".bear_container").append(bearOne);
    } else if (time < 10) {
        $("#species").text("Kid Bear");
        bearOne.remove();
        $(".bear_container").append(bearTwo);
    } else if (time < 20) {
        $("#species").text("Growed Up Bear");
        bearTwo.remove();
        $(".bear_container").append(bearThree);
    } else if (time > 21) {
        alert("Congratlations! We've beared witness to some master survival skills. You win!");
        stopEatInterval();
        stopAgeInterval();
        stopHugInterval();
        stopSleepInterval();
    }
}; 
    
function stopAgeInterval() {
    clearInterval(ageInterval);
};

// == Eat Progress
// <progress id = "eatProgress" class="progress is-warning" value="100" max="0">100%</progress>

    // === Eat Timer
function eatTimer () {
    $("#eatProgress").attr("value", eat.toString());
    eat--; 
    // $("#eatTimer").text(`${eat}`);
    if (eat===0) {
        stopEatInterval(); 
        stopAgeInterval();
        stopSleepInterval();
        stopHugInterval();
        alert("You could not bear the hunger"); 
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
    $("#sleepProgress").attr("value", sleep.toString());
    sleep--; 
    // $("#sleepTimer").text(`${sleep}`);
    if (sleep===0) {
        stopSleepInterval();
        stopEatInterval();
        stopHugInterval();
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
    $("#hugProgress").attr("value", hug.toString());
    hug--; 
    // $("#hugTimer").text(`${hug}`);    
    if (hug ===0) {
        stopHugInterval();
        stopAgeInterval();
        stopEatInterval();
        stopSleepInterval();
        alert("You need moar bearhugs. Try again :(")
    }
};

function stopHugInterval() {
    clearInterval(hugInterval);
}

$(".hug").on("click", () => {
    hug++;
});

