'use strict';
window.addEventListener('DOMContentLoaded', function () {

  let tabs = require('./parts/tabs'),
      timer = require('./parts/timer'),
      modals = require('./parts/modals'),
      forms = require('./parts/forms'),
      slider = require('./parts/slider'),
      calc = require('./parts/calc');

  tabs();
  timer();
  modals();
  forms();
  slider();
  calc();
});