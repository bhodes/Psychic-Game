window.onload=function(){

    var wins = 0; 
    var losses = 0;
    var maxTries = 9;
    var currentTries = "";
    var randomLetter = getRandomLetter();

    
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = maxTries;
    document.getElementById("guessesSoFar").innerHTML = currentTries;
                    

  
    document.addEventListener("keydown",function(e){
       var input=String.fromCharCode(e.keyCode);


    
        maxTries--;
        
        if (currentTries !== ""){
            currentTries = currentTries + ", " + input.toLowerCase();
        }
        else {
            currentTries = input.toLowerCase();
        }

        
        if (input.toLowerCase() === randomLetter){
            wins++;
            maxTries = 9;
            randomLetter = getRandomLetter();
            currentTries ="";
            console.log(randomLetter);
        }

        
        else if (maxTries === 0){
            losses++;
            maxTries = 9;
            randomLetter = getRandomLetter();
            currentTries = "";
            
        }

        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guessesLeft").innerHTML = maxTries;
        document.getElementById("guessesSoFar").innerHTML = currentTries;

    });



};
//possibleLetters is a string. Then it picks a character at random character from the string.
function getRandomLetter (){
    var possibleLetters = "abcdefghijklmnopqrstuvwxzy"
    return possibleLetters.charAt(Math.floor(Math.random()*possibleLetters.length));
}

