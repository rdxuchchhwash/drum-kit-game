var gkey = null;
var delayTime = 1500;
var gameFlag = false;
var score = 3;
setInterval(function () {
    console.log("calling gameloop")
    if (gameFlag == true) {
        game();
        console.log("gameloop started")
    }
    if (gameFlag ==false){
        console.log("stoppedwsadjklx")
    }
}, delayTime);

// Events
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        if (gameFlag == true) {
            var btnInnerHtml = this.innerHTML;
            calcScore(btnInnerHtml);
            makesound(btnInnerHtml);
            buttonAnimation(btnInnerHtml);
        }
    })

}
document.addEventListener("keydown", function (event) {
    if (gameFlag == true) {
        calcScore(event.key.toLowerCase());
        makesound(event.key.toLowerCase());
        buttonAnimation(event.key.toLowerCase());
    }
})

function makesound(key) {
    if (gameFlag == true) {
        switch (key) {
            case "w":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                break;

            case "s":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;

            case "d":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

            case "j":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
                break;

            case "k":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                break;

            case "l":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();
                break;

            default:
                console.log("wrong key")
                break;
        }
    }
}

// Animations
function buttonAnimation(currentKey) {
    if (gameFlag == true) {
        var check = ["w", "a", "s", "d", "j", "k", "l"];
        if (check.includes(currentKey.toLowerCase())) {
            var activeButton = document.querySelector("." + currentKey);
            activeButton.classList.add("pressed");
            setTimeout(function () {
                activeButton.classList.remove("pressed")
            }, 200);
        }
    }
}


document.addEventListener("keydown", function (event) {
    var text = document.querySelector(".input-text");
    if (event.key.toLowerCase() == "x") {
        gameFlag = true;
        text.innerHTML = "Started. Press Z to Stop";
        // text.style.visibility = "hidden";
    }
    else if (event.key.toLowerCase() == "z") {
        gameFlag = false;
        text.innerHTML = "Press X To Start & Z To Stop The Game";
    }
})

function game() {
    if (gameFlag == true) {
        var inputKeys = ["w", "a", "s", "d", "j", "k", "l"];
        var input = document.querySelector(".game-input");
        gkey = inputKeys[(Math.floor(Math.random() * (6 - 1 + 1)) + 1)].toUpperCase();

        setTimeout(function () {
            input.innerHTML = gkey;
        }, delayTime);
    }
}

function calcScore(key) {
    if (gameFlag == true) {
        console.log("on calcscore: " + key + " && gkey is :" + gkey);
        var input = document.querySelector(".score");
        
        if (score < 0) {
            score = 0;
            gameFlag = false;
            input.innerHTML = score;
            var text = document.querySelector(".input-text");
            text.innerHTML = "Game Over. Press X to Start Again";
        }

        else if (key.toUpperCase() != gkey) {
            score -= 1;
            input.innerHTML = score;
        }

        else if (key.toUpperCase() == gkey) {
            console.log("scored");

            score += 1;
            input.innerHTML = score;
            if (score > 5 && score < 10) {
                delayTime = 1000;
            }
            else if (score >= 10 && score < 15) {
                delayTime = 500;
            }
            else if (score >= 15 && score < 20) {
                delayTime = 300;
            }
            else if (score >= 20 && score < 25) {
                delayTime = 100;
            }
            else if (score > 25) {
                delayTime = 50;
            }

            console.log(delayTime);
        }
 
    }
}