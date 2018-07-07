document.addEventListener('keydown', function (e) {

  // Cmd/Ctrl/Shift + Enter
  if (e.keyCode === 13 && (e.metaKey || e.ctrlKey || e.shiftKey)) {
    var audio = document.getElementsByTagName('audio')[0];
    audio.play();
  }

}, true);
