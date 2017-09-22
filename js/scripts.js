
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

$(document).ready(function(){
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
});
