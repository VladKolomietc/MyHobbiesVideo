var video = document.getElementById("myVideo");
var Button = document.getElementById("Button");
function myFunction() {
    if (video.paused) {
      video.play();
      Button.innerHTML = "Pause";
    } else {
      video.pause();
      Button.innerHTML = "Play";
    }
  }