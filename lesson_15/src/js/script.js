require('nodelist-foreach-polyfill');
require('formdata-polyfill')
window.addEventListener('DOMContentLoaded', function () {
  'use strict';

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