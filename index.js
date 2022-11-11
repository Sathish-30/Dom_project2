document.querySelectorAll(".drum")[0].addEventListener("click", function () {
  var music = new Audio("sounds/crash.mp3");
  music.play();
});
document.querySelectorAll(".drum")[1].addEventListener("click", function () {
  var music = new Audio("sounds/kick-bass.mp3");
  music.play();
});
document.querySelectorAll(".drum")[2].addEventListener("click", function () {
  var music = new Audio("sounds/snare.mp3");
  music.play();
});
document.querySelectorAll(".drum")[3].addEventListener("click", function () {
  var music = new Audio("sounds/tom-1.mp3");
  music.play();
});
document.querySelectorAll(".drum")[4].addEventListener("click", function () {
  var music = new Audio("sounds/tom-2.mp3");
  music.play();
});
document.querySelectorAll(".drum")[5].addEventListener("click", function () {
  var music = new Audio("sounds/tom-3.mp3");
  music.play();
});
document.querySelectorAll(".drum")[6].addEventListener("click", function () {
  var music = new Audio("sounds/tom-4.mp3");
  music.play();
});

document.addEventListener("keypress", (event) => {
  if (event.keyCode === 119) {
    var music = new Audio("sounds/crash.mp3");
    music.play();
  } else if (event.keyCode === 97) {
    var music = new Audio("sounds/kick-bass.mp3");
    music.play();
  } else if (event.keyCode === 115) {
    var music = new Audio("sounds/snare.mp3");
    music.play();
  } else if (event.keyCode === 100) {
    var music = new Audio("sounds/tom-1.mp3");
    music.play();
  } else if (event.keyCode === 106) {
    var music = new Audio("sounds/tom-2.mp3");
    music.play();
  } else if (event.keyCode === 107) {
    var music = new Audio("sounds/tom-3.mp3");
    music.play();
  } else if (event.keyCode === 108) {
    var music = new Audio("sounds/tom-4.mp3");
    music.play();
  }
});
