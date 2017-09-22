//for ping pong
function pingPong(userInput) {
  if (/[^\d]/.test(userInput) || userInput === "") {
    return null;
  }
  var output = [];
  var gameArray = ["ping","pong","ping-pong"];
  for (j=1; userInput >= j; j++) {
    if (j%3 === 0) {
      if (j%15 === 0) {
        output.push(gameArray[2] + "</li>")
      } else {
        output.push(gameArray[0] + "</li>")
      }
    } else if (j%5 === 0) {
      output.push(gameArray[1] + "</li>")
    } else {
      output.push(j);
    }
  }
  output = output.join('<li>')
  return output;
}
//reverse Ping Pong
function pingPongReverse(userInput) {
  if (/[^\d]/.test(userInput) || userInput === "") {
    return null;
  }
  var output = [];
  var gameArray = ["ping","pong","ping-pong"];
  for (j=1; userInput >= j; j++) {
    if (j%3 === 0) {
      if (j%15 === 0) {
        output.push(gameArray[2] + "</li>")
      } else {
        output.push(gameArray[0] + "</li>")
      }
    } else if (j%5 === 0) {
      output.push(gameArray[1] + "</li>")
    } else {
      output.push(j);
    }
  }
  output.reverse();
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
  //for reverse ping pong
  $("#reverse").click(function(event){
    event.preventDefault();
    $("#output").text("");
    var userInput = $("#userInput").val();
    if (pingPongReverse(userInput) === null) {
      $("#returnNull").show();
      $("#outputStyling").hide();
    } else {
      $("#returnNull").hide();
      $("#outputStyling").show();
      $("#output").append("<li>"+ pingPongReverse(userInput));
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
      $("#sternTalkingToo").text("")
    } else if(answerCheck === null) {
      $("#sternTalkingToo").text("Please enter a single letter")
    } else if(answerCheck === "E") {
      $("#E").show();
      $("#sternTalkingToo").text("")
    } else if(answerCheck === "P") {
      $("#P").show();
      $("#sternTalkingToo").text("")
    } else if(answerCheck === "I") {
      $("#I").show();
      $("#sternTalkingToo").text("")
    } else if(answerCheck === "C") {
      $("#C").show();
      $("#sternTalkingToo").text("")
    } else if(answerCheck === "O") {
      $("#O").show();
      $("#sternTalkingToo").text("")
    } else if(answerCheck === "D") {
      $("#D").show();
      $("#sternTalkingToo").text("")
    } else if(answerCheck === "U") {
      $("#U").show();
      $("#sternTalkingToo").text("")
    } else if(answerCheck === "S") {
      $("#S").show();
      $("#sternTalkingToo").text("")
    } else if (answerCheck === 1) {
      $("#post").hide();
      $("#head").show();
      $("#sternTalkingToo").text("")
    } else if (answerCheck === 2) {
      $("#head").hide();
      $("#body").show();
      $("#sternTalkingToo").text("")
    } else if (answerCheck === 3) {
      $("#body").hide();
      $("#armOne").show();
      $("#sternTalkingToo").text("")
    } else if (answerCheck === 4) {
      $("#armOne").hide();
      $("#armTwo").show();
      $("#sternTalkingToo").text("")
    } else if (answerCheck === 5) {
      $("#armTwo").hide();
      $("#legOne").show();
      $("#sternTalkingToo").text("")
    } else if (answerCheck === 6) {
      $("#secret").hide();
      $("#legOne").hide();
      $("#legTwo").show();
      $("#loss").show();
      $(".letters").hide();
      $("#sternTalkingToo").text("")
    }
    $("#letters").prepend(userInput);
  });
  $("#reset").click(function(){
    window.location.reload();
  })
});
