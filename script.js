//code
// gets a random number from 1 - 20
let randomNumber = Math.floor(Math.random() * 20) + 1
let score = 20
let highScore = 0


document.querySelector("#check").addEventListener("click", function(){
    let input = document.querySelector("#guess_box").value


    score--;
    if (randomNumber == input){
        document.querySelector("#qmark").innerHTML = randomNumber
        document.querySelector("#container").style.background = "green"
        document.querySelector("#msg").innerHTML = "Correct!!"

        if (score > highScore){
            highScore = score;
            document.querySelector("#highest").innerHTML = `🥇 Highscore: ${score}`
        }
        

    }else if(!input){
        document.querySelector("#msg").innerHTML = '⛔️ No number!'
    }
    else if (input > randomNumber){
        
        document.querySelector("#msg").innerHTML = "Too High!!"
        document.querySelector("#container").style.background = "red"
        document.querySelector("#scoring").innerHTML = `💯 Score: ${score}`
    }
    else if(input < randomNumber){

        document.querySelector("#msg").innerHTML = "Too low!!"
        document.querySelector("#container").style.background = "red"
       document.querySelector("#scoring").innerHTML = `💯 Score: ${score}`

    }
    if (score === 0) {
        document.querySelector("#msg").innerHTML = "Game Over!";
        document.querySelector("#check").disabled = true; // Disable the "Check" button
    }
    
})

document.querySelector("#again").addEventListener("click", function(){
    randomNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    document.querySelector("#qmark").innerHTML = "?";
    document.querySelector("#container").style.background = "#222";
    document.querySelector("#msg").innerHTML = "Start guessing...";
    document.querySelector("#scoring").innerHTML = `💯 Score: ${score}`;
    document.querySelector("#guess_box").value = "";
    document.querySelector("#check").disabled = false; // Disable the "Check" button

})

document.querySelector("#again").addEventListener