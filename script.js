// Variables
var character = document.getElementById("character");
var block = document.getElementById("block");
var score = -1;
var score_display = document.getElementById("score");

// Moves
window.addEventListener("click", jump);

window.onkeydown = function(key_pressed) {
    if (key_pressed.key == " " || 
        key_pressed.code == "Space" || 
        key_pressed.keyCode == 32) {
        jump();
    }
}

// Functions
function jump() {
    if (character.classList != "animate-jump") {
        character.classList.add("animate-jump");
        setTimeout(function(){
            character.classList.remove("animate-jump");
        }, 600);
    }
}

// Detect if Game is Lost
setInterval(function() {
    const rect_character = character.getBoundingClientRect();
    const rect_block = block.getBoundingClientRect();
    var block_top = rect_block.top;
    var block_left = rect_block.left;
    var block_right = rect_block.right;
    var character_bottom = rect_character.bottom;
    var character_left = rect_character.left;
    var character_right = rect_character.right;

    if (block_top <= character_bottom && 
        ((character_left <= block_right && character_left >= block_left) || 
        (character_right <= block_right && character_right >= block_left))) {
            alert("Game Over! Your Score Was: " + Math.floor(score));
            location.reload();
            block.classList.remove("animate-block")
            score = 0;
    } else {
        score = score + 0.01;
        var displayed_score;
        if (score < 0) {
            displayed_score = 0;
        } else {
            displayed_score = Math.floor(score);
        }
        score_display.innerHTML = "Score: " + displayed_score;
    }
}, 10);

// Change Ball
setInterval(function() {
    block.style.opacity = "1";
    block.classList.add("animate-block");
    var random_number = Math.floor(Math.random() * 3);
    if (random_number == 0) {
        block.src = "/Images/Soccer.png";
    } else if (random_number == 1) {
        block.src = "/Images/Basketball.png";
    } else if (random_number == 2) {
        block.src = "/Images/Beachball.png";
    }
}, 1000);