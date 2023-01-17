const player = document.getElementById("player");
const game = document.getElementById("game");
const alien = document.getElementById("alien");

// result section
var result = document.getElementById("result");
const score = document.getElementById("score");
var counter = 0;

// sounds
const shoot = document.getElementById("shoot");
const gameOverSound = document.getElementById('gameover');

// fighter jet movement
window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if (playerLeft < 800) {
            player.style.left = (playerLeft + 130) + "px"
        }
    }

    if (e.keyCode == "37") {
        var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if (playerLeft > 0) {
            player.style.left = (playerLeft - 130) + "px"
        }
    }

})

// fire bullet
window.addEventListener("keydown", function (e) {
    if (e.keyCode == "32") {
        var canon = document.createElement("div");
        var img = document.createElement("img");
        img.src = "fire.png";
        img.classList.add("bulletImg");
        canon.classList.add("bullet");
        canon.style.left = player.style.left;
        canon.appendChild(img);
        game.appendChild(canon);
        shoot.play();


        //When bullet hit alien
        setInterval(function collision() {
            var canonLeft = parseInt(window.getComputedStyle(canon).getPropertyValue("left"));
            var canonTop = parseInt(window.getComputedStyle(canon).getPropertyValue("top"));
            var alienLeft = parseInt(window.getComputedStyle(alien).getPropertyValue("left"));
            var alienTop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));

            if (((canonTop - alienTop) < 100) && (alienTop < canonTop)
                && (alienLeft === canonLeft)) {
                canon.style.display = 'none';
                alien.style.display = 'none';
            }
        }, 10);
        
        setTimeout(function () { canon.remove() }, 2000)

    }

})

// Alien move
function alienMove() {
    alien.style.display = 'block';
    var random = ((Math.floor(Math.random() * 10)) * 130);
    alien.style.left = random + "px";
    alien.classList.add("alienMove");
    counter++;
    if (counter > 30) {
        alien.style.animationDuration = '2s';
    }

}

setInterval(alienMove, 2000);

// Game over
function gameOver() {
    var alienTop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));
    if (alienTop > 400) {
        result.style.display = 'block';
        game.style.display = 'none';
        score.innerHTML = `score: ${counter}`;
        counter = 0;
        gameOverSound.play();

    }
}

setInterval(gameOver, 10);