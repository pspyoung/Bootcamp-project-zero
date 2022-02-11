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

let bearWin = $(`<img id="wave"/>`);
bearWin.attr("src", "https://user-images.githubusercontent.com/90462032/153540623-9af11936-a897-4dd4-888a-6f573d511c5d.gif");

let sadPanda =$(`<img id="sad"/>`);
sadPanda.attr("src", "https://user-images.githubusercontent.com/90462032/153541139-b73dbf93-a1d4-48bd-9aed-4b79eeb9af9f.gif");

let bearZero =$(`<img id=teddy"/>`);
bearZero.attr("src", "https://user-images.githubusercontent.com/90462032/153544591-243898a8-e8f3-4e5c-af20-d5d41eefc99e.jpeg");

let instructions=$(".instructions");


// === Buttons, Timers === //

$("#startGame").on("click", () => {
    // console.log ("It started!");
    instructions.remove();
    bearOne.remove();
    bearTwo.remove();
    bearThree.remove();
    bearZero.remove();
    sadPanda.remove();
    bearWin.remove();
    $(".notifications").text("");
    time = 1; 
    ageInterval = setInterval(ageTimer, 1000);
    eat = 10; 
    eatInterval = setInterval(eatTimer, 1000);
    sleep = 10;
    sleepInterval = setInterval(sleepTimer, 1000);
    hug = 10;
    hugInterval = setInterval(hugTimer, 1000);
});

$(".bear_container").append(bearZero);
let formText = document.getElementById("nameBear");

// == Alternative click to name functionality
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
    if (time < 15) {
        $("#species").text("The Baby Bear");
        $(".bear_container").append(bearOne);
        $(".notifications").text("Look at this cutie. Don't let any of the bars go empty!");
    } else if (time < 30) {
        $("#species").text("The Kid Bear");
        bearOne.remove();
        $(".bear_container").append(bearTwo);
        $(".notifications").text("You've grown up! Look Ma, a Bear-rel row!!");
    } else if (time < 45) {
        $("#species").text("The Growed Up Bear");
        bearTwo.remove();
        $(".bear_container").append(bearThree);
        $(".notifications").text("You've turned into a Bi-Polar! Get it?? Bi..polar..."); 
    } else if (time < 53) {
        $(".notifications").text("You're almost there! You can bear it! *click click*") 
    } else if (time > 60) {
        $(".notifications").text("Congratlations! We've beared witness to some master survival skills. You win!");
        stopEatInterval();
        stopAgeInterval();
        stopHugInterval();
        stopSleepInterval();
        bearThree.remove();
        $(".bear_container").append(bearWin);
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
        $(".notifications").text("You could not bear the hunger!");
        // alert("You could not bear the hunger!");
        bearOne.remove();
        bearTwo.remove();
        bearThree.remove();
        $(".bear_container").append(sadPanda); 
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
        $(".notifications").text("You went into deep hybearnation! Better luck next time!");
        bearOne.remove();
        bearTwo.remove();
        bearThree.remove();
        $(".bear_container").append(sadPanda); 
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
        $(".notifications").text("You need moar bearhugs. Try again :(");
        bearOne.remove();
        bearTwo.remove();
        bearThree.remove();
        $(".bear_container").append(sadPanda); 
    }
};

function stopHugInterval() {
    clearInterval(hugInterval);
}

$(".hug").on("click", () => {
    hug++;
});

