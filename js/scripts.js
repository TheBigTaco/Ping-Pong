//for ping pong
function pingPong(userInput) {
  if (/[^\d]/.test(userInput) || /[\s]/.test(userInput) || userInput === "") {
    return null;
  }
  var counter = 1;
  var output = [];
  var gameArray = ["ping","pong","ping-pong"];
  while (userInput >= counter) {
    if (counter%3 === 0) {
      if (counter%15 === 0) {
        output.push(gameArray[2] + "</li>")
        counter++
      } else {
        output.push(gameArray[0] + "</li>")
        counter++
      }
    } else if (counter%5 === 0) {
      output.push(gameArray[1] + "</li>")
      counter++
    } else {
      output.push(counter);
      counter++
    }
  }
  output = output.join('<li>')
  return output;
}



//for super secret game
var checker = 0;
var winner = 0;
var doubleLetterChecker = "";
function hangman(userInput){
  if (/.{2}/.test(userInput) || /[^A-Z]/i.test(userInput)){
    return null;
  }
  userInput = userInput.toUpperCase();
  var answerArray = ["E", "P", "I", "C", "O", "D", "U", "S"];
  for (i=0; i<=8; i++) {
    if (userInput === answerArray[i]) {
      winner++
      if(winner === 8){
        return winner
      }
      return answerArray[i]
    }
  }
  checker++
  return checker;
}

$(document).ready(function(){
  //for ping pong
  $("#game").submit(function(event){
    event.preventDefault();
    $("#output").text("");
    var userInput = $("#userInput").val();
    if (pingPong(userInput) === null) {
      $("#returnNull").show();
      $("#outputStyling").hide();
    } else {
      $("#returnNull").hide();
      $("#outputStyling").show();
      $("#output").append("<li>"+ pingPong(userInput));
    }
  });


  //for super secret game
  $("#secret").submit(function(event){
    event.preventDefault();
    var userInput = $("#secret input").val();
    var answerCheck = hangman(userInput);
    if (answerCheck === 8) {
      $("#secret").hide();
      $(".hangmanWord").show();
      $("#winner").show();
      $(".letters").hide();
    } else if(answerCheck === null) {
      $("#sternTalkingToo").text("Please enter a single letter")
    } else if(answerCheck === "E") {
      $("#E").show();
    } else if(answerCheck === "P") {
      $("#P").show();
    } else if(answerCheck === "I") {
      $("#I").show();
    } else if(answerCheck === "C") {
      $("#C").show();
    } else if(answerCheck === "O") {
      $("#O").show();
    } else if(answerCheck === "D") {
      $("#D").show();
    } else if(answerCheck === "U") {
      $("#U").show();
    } else if(answerCheck === "S") {
      $("#S").show();
    } else if (answerCheck === 1) {
      $("#post").hide();
      $("#head").show();
    } else if (answerCheck === 2) {
      $("#head").hide();
      $("#body").show();
    } else if (answerCheck === 3) {
      $("#body").hide();
      $("#armOne").show();
    } else if (answerCheck === 4) {
      $("#armOne").hide();
      $("#armTwo").show();
    } else if (answerCheck === 5) {
      $("#armTwo").hide();
      $("#legOne").show();
    } else if (answerCheck === 6) {
      $("#secret").hide();
      $("#legOne").hide();
      $("#legTwo").show();
      $("#loss").show();
      $(".letters").hide();
    }
    $("#letters").prepend(userInput);
  });
});
