window.addEventListener ("keydown", checkKey);

function checkKey (key) {
  let panel;
  let audio;

  function addClass () {
    panel.setAttribute ("class", "panel panelPressed");
  }

  window.addEventListener ("keyup", function releaseKey(){
    panel.classList.remove("panelPressed");
  });

  switch (key.keyCode) {
    case 65:
      panel = document.getElementsByClassName("panel")[0];
      audio = document.getElementById("clap");
      break;
    case 83:
      panel = document.getElementsByClassName("panel")[1];
      audio = document.getElementById("hihat");
      break;
    case 68:
      panel = document.getElementsByClassName("panel")[2];
      audio = document.getElementById("kick");
      break;
    case 70:
      panel = document.getElementsByClassName("panel")[3];
      audio = document.getElementById("openhat");
      break;
    case 71:
      panel = document.getElementsByClassName("panel")[4];
      audio = document.getElementById("boom");
      break;
    case 72:
      panel = document.getElementsByClassName("panel")[5];
      audio = document.getElementById("ride");
      break;
    case 74:
      panel = document.getElementsByClassName("panel")[6];
      audio = document.getElementById("snare");
      break;
    case 75:
      panel = document.getElementsByClassName("panel")[7];
      audio = document.getElementById("tom");
      break;
    case 76:
      panel = document.getElementsByClassName("panel")[8];
      audio = document.getElementById("tink");
      break;
    default:
      break;
  }   
  addClass();
  audio.load();
  audio.play();
};