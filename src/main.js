import $ from 'jquery';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
  Simon
} from './Simon.js';

var game = new Simon();

$(document).ready(function() {
  $("#btn1").click(function() {
    response(1);
  });
  $("#btn2").click(function() {
    response(2);
  });
  $("#btn3").click(function() {
    response(3);
  });
  $("#btn4").click(function() {
    response(4);
  });


  $("#startbtn").click(function() {
    game = new Simon();
    game.addCommand();
    $("#level-num").text(game.commands.length);
    console.log(game.commands[0]);
    flashButton(game.commands[0]);
  });

});

function flashSequence(game){
  game.commands.forEach(function(commandNum, index){
    var timeoutValue = index * 1000;
    setTimeout(flashButton, timeoutValue, commandNum);
  });
}

function response(num){
  var passCompare = false;
  var isSeqChecked = false;
  flashButton(num);
  game.addResponse(num);
  if(game.commands.length === game.responses.length){
    isSeqChecked = true;
    passCompare = game.compareSequences();
  }

  if(isSeqChecked && passCompare){
    game.responses = [];
    // Next level
    game.addCommand();
    $("#level-num").text(game.commands.length);
    flashSequence(game);
  } else if(isSeqChecked){
    // Game is over
    $(".modal").modal("show");
    console.log("Game over");
    console.log("Resp", game.responses);
    console.log("comm", game.commands);
  }
}

function flashButton(num) {
  var color = "purple";
  switch (num) {
    case 1:
    color = 'blue';
    break;
    case 2:
    color = 'red';
    break;
    case 3:
    color = 'yellow';
    break;
    case 4:
    color = 'green';
    break;
  }
  var interval = setInterval(function() {
    $("#btn" + num).toggleClass(color);
    console.log(color);
  }, 750);

  setTimeout(clearInterval, 2000, interval);

}
