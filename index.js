window.addEventListener ("keydown", checkKey);

function checkKey (key) {
  let pressedKey;
  let sound;
  let panel;
  let audio;

  function addClass () {
    pressedKey.setAttribute ("class", "key pressed");
    sound.setAttribute ("class", "sound pressed");
    panel.setAttribute ("class", "panel panelPressed");
  }

  window.addEventListener ("keyup", function releaseKey(){
    pressedKey.classList.remove("pressed");
    sound.classList.remove("pressed");
    panel.classList.remove("panelPressed");
  });

  switch (key.keyCode) {
    case 65:
      pressedKey = document.getElementById("a");
      sound = document.getElementById("CLAP");
      panel = document.getElementsByClassName("panel")[0];
      audio = document.getElementById("clap");
      break;
    case 83:
      pressedKey = document.getElementById("s");
      sound = document.getElementById("HIHAT");
      panel = document.getElementsByClassName("panel")[1];
      audio = document.getElementById("hihat");
      break;
    case 68:
      pressedKey = document.getElementById("d");
      sound = document.getElementById("KICK");
      panel = document.getElementsByClassName("panel")[2];
      audio = document.getElementById("kick");
      break;
    case 70:
      pressedKey = document.getElementById("f");
      sound = document.getElementById("OPENHAT");
      panel = document.getElementsByClassName("panel")[3];
      audio = document.getElementById("openhat");
      break;
    case 71:
      pressedKey = document.getElementById("g");
      sound = document.getElementById("BOOM");
      panel = document.getElementsByClassName("panel")[4];
      audio = document.getElementById("boom");
      break;
    case 72:
      pressedKey = document.getElementById("h");
      sound = document.getElementById("RIDE");
      panel = document.getElementsByClassName("panel")[5];
      audio = document.getElementById("ride");
      break;
    case 74:
      pressedKey = document.getElementById("j");
      sound = document.getElementById("SNARE");
      panel = document.getElementsByClassName("panel")[6];
      audio = document.getElementById("snare");
      break;
    case 75:
      pressedKey = document.getElementById("k");
      sound = document.getElementById("TOM");
      panel = document.getElementsByClassName("panel")[7];
      audio = document.getElementById("tom");
      break;
    case 76:
      pressedKey = document.getElementById("l");
      sound = document.getElementById("TINK");
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