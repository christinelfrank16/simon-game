import $ from 'jquery';
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Simon } from './Simon.js';

$(document).ready(function() {
  $("#btn1").click(function() {
    $("#btn1").toggleClass("blue");
  });
  $("#btn2").click(function() {
    $("#btn2").toggleClass("red");
  });
  $("#btn3").click(function() {
    $("#btn3").toggleClass("yellow");
  });
  $("#btn4").click(function() {
    $("#btn4").toggleClass("green");
  });
});
