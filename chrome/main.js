document.addEventListener('keyup', function (e) {
  switch (e.keyCode) {
    // Enter: play audio
    case 13:
      document.getElementById('proun_sound')
              .childNodes[0]
              .click();
      break;
  }
}, true);
