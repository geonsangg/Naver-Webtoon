window.onload = function() {
    let timerElement = document.getElementById("emptytime");
    let intervalID;
  
    function startTimer(duration, display) {
      let timer = duration, minutes, seconds;
      intervalID = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        display.textContent = minutes + ":" + seconds;
  
        if (--timer < 0) {
          clearInterval(intervalID);
          display.textContent = "시간 초과";
        }
      }, 1000);
    }
  
    function resetTimer() {
      clearInterval(intervalID);
      timerElement.textContent = "05:00";
      startTimer(300, timerElement);
    }
  
    startTimer(300, timerElement);
  
    let resetButton = document.querySelector(".qrtimer button[type='reset']");
    resetButton.onclick = resetTimer;
  };