$(document).ready(function(){
    var numberToGet = Math.floor(Math.random()*100 + 20)

    //Sending numberToGet to randomNumber id
    
    $("#randomNumber").text(numberToGet);

    //Random numbers for each jewel.

    var diamond = Math.floor(Math.random()*11 + 1)
    var ruby = Math.floor(Math.random()*11 + 1)
    var pearl = Math.floor(Math.random()*11 + 1)
    var turquoise = Math.floor(Math.random()*11 + 1)

    //Scoreboard variables

    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses)


    function reset(){
        numberToGet = Math.floor(Math.random()*100 + 20)
        $("#randomNumber").text(numberToGet)
        diamond = Math.floor(Math.random()*11 + 1);
        ruby = Math.floor(Math.random()*11 + 1);
        pearl = Math.floor(Math.random()*11 + 1);
        turquoise = Math.floor(Math.random()*11 + 1);
        playerTotal = 0;
        $('#finalTotal').text(playerTotal);
        } 
    // Adding wins to playerTotal
    function win (){
        alert("You win!");
        wins++;
        $("#numberWins").text(wins)
         reset();
    }

    function loss(){
        alert("You lost");
        losses++;
        $("#numberLosses").text(losses)
        reset();
    }

    // Click events for jewels
    $('#one').on ('click', function(){
        playerTotal = playerTotal + diamond;
        console.log("New userTotal= " + playerTotal);
        $('#finalTotal').text(playerTotal); 
              //sets win/lose conditions
            if (playerTotal == numberToGet){
              win();
            }
            else if ( playerTotal > numberToGet){
              loss();
            } 

    $('#two').on ('click', function(){
      playerTotal = playerTotal + ruby;
      console.log("New userTotal= " + playerTotal);
      $('#finalTotal').text(playerTotal); 
          if (playerTotal == numberToGet){
            win();
          }
          else if ( playerTotal > numberToGet){
            loss();
          } 
    })  
    $('#three').on ('click', function(){
      playerTotal = playerTotal + pearl;
      console.log("New userTotal= " + playerTotal);
      $('#finalTotal').text(playerTotal);
  //sets win/lose conditions
            if (playerTotal == numberToGet){
            win();
          }
          else if ( playerTotal > numberToGet){
            loss();
          } 
    })  
    $('#four').on ('click', function(){
      playerTotal = playerTotal + turquoise;
      console.log("New userTotal= " + playerTotal);
      $('#finalTotal').text(playerTotal); 
        
            if (playerTotal == numberToGet){
            win();
          }
          else if ( playerTotal > numberToGet){
            loss();
          }
    });   
  });
})

    



















