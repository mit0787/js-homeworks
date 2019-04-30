'use strict';

let timer = document.querySelector('.timer'),
  options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };

  function showTimer() { 
    timer.innerHTML = new Date().toLocaleString('ru', options);
  }

let timerShown = setInterval(showTimer, 1000);