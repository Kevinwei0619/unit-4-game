
var computerChoice = 0;
var imageScore = 0;
var  wins=0;
var losses=0;
var totalScore=0;
var crystals_1 =0;
var crystals_2 =0;
var crystals_3 =0;
var crystals_4 =0;
var crystalsArray = [];



function startGame(){

     totalScore=0;
     $("#scoreBoard").html(totalScore);
    
     //n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;  
     computerChoice = Math.floor(Math.random()*(120-19 +1))+19;
     console.log(computerChoice + " computer choice");
     $("#randomNumber").html(computerChoice);


    for(var i = 0 ; i < 4 ; i++){
    //n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;  
    crystalsArray[i] = Math.floor(Math.random()*(12)+ 1);
    console.log(crystalsArray[i] + " is the first number for Image." + i);
   
    if(crystalsArray[1] === crystalsArray[0] || crystalsArray[1]===crystalsArray[2] || crystalsArray[1]===crystalsArray[3]){
        crystalsArray[1] = Math.floor(Math.random()*(12)+ 1);
        i--;
    }else if (crystalsArray[2] === crystalsArray[0] || crystalsArray[2]===crystalsArray[1] || crystalsArray[2]===crystalsArray[3]){
        crystalsArray[2] = Math.floor(Math.random()*(12)+ 1);
        i--;
    }else if(crystalsArray[3] === crystalsArray[0] || crystalsArray[3]===crystalsArray[1] || crystalsArray[3]===crystalsArray[2]){
        crystalsArray[3] = Math.floor(Math.random()*(12)+ 1);
        i--;
    }else if(crystalsArray[0] === crystalsArray[1] || crystalsArray[0]===crystalsArray[2] || crystalsArray[0]===crystalsArray[3]){
        crystalsArray[0] = Math.floor(Math.random()*(12)+ 1);
        i--;
    }

}

console.log("");
    for(var i = 0 ; i < 4 ; i++){
    console.log(crystalsArray[i] + " is the number for Image." + i);
    }


}





startGame();

$("#crystalImg_1").on("click" , function(){

    crystals_1 = crystalsArray[0];
   console.log(crystals_1 + "  test for image_1");
   totalScore = crystals_1 + totalScore;
   $("#scoreBoard").html(totalScore);

   if(totalScore === computerChoice ){
    wins++;
    $("#showWinOrLosses").html("<p> You Win !!!</P>");
    $("#wins").html("<p>Wins: " + wins +"</P>");
    startGame()
   } else if( totalScore > computerChoice){
       losses++;
       $("#showWinOrLosses").html("<p> You Losses !!!</P>");
       $("#losses").html("<p>Losses: " + losses + "</P>");
       startGame()
   }
       



     
});


$("#crystalImg_2").on("click" , function(){

    crystals_2 = crystalsArray[1];
   console.log(crystals_2 + "  test for image_2");
   totalScore = crystals_2 + totalScore;
   $("#scoreBoard").html(totalScore);


   if(totalScore === computerChoice ){
    wins++;
    $("#showWinOrLosses").html("<p> You Win !!!</P>");
    $("#wins").html("<p>Wins: " + wins +"</P>");
    startGame()
   } else if( totalScore > computerChoice){
       losses++;
       $("#showWinOrLosses").html("<p> You Losses !!!</P>");
       $("#losses").html("<p>Losses: " + losses + "</P>");
       startGame()
   }


});

$("#crystalImg_3").on("click" , function(){

    crystals_3 = crystalsArray[2];
   console.log(crystals_3 + "  test for image_3");
   totalScore = crystals_3 + totalScore;
   $("#scoreBoard").html(totalScore);


   if(totalScore === computerChoice ){
    wins++;
    $("#showWinOrLosses").html("<p> You Win !!!</P>");
    $("#wins").html("<p>Wins: " + wins +"</P>");
    startGame()
   } else if( totalScore > computerChoice){
       losses++;
       $("#showWinOrLosses").html("<p> You Losses !!!</P>");
       $("#losses").html("<p>Losses: " + losses + "</P>");
       startGame()
   }
     
});


$("#crystalImg_4").on("click" , function(){

    crystals_4 = crystalsArray[3];
   console.log(crystals_4 + "  test for image_4");
   totalScore = crystals_4 + totalScore;
   $("#scoreBoard").html(totalScore);


   if(totalScore === computerChoice ){
    wins++;
    $("#showWinOrLosses").html("<p> You Win !!!</P>");
    $("#wins").html("<p>Wins: " + wins +"</P>");
    startGame()
   } else if( totalScore > computerChoice){
       losses++;
       $("#showWinOrLosses").html("<p> You Losses !!!</P>");
       $("#losses").html("<p>Losses: " + losses + "</P>");
       startGame()
   }
     
});





