'use strict';

var selector = document.querySelector('#shake-type');
var pr1 = document.querySelector('#pr1');
var pr2 = document.querySelector('#pr2');

var handleChangeShake = function handleChangeShake(e) {
  var regex = /shake-(hard|slow|little|horizontal|vertical|rotate|opacity|crazy)/;
  var classToRemove = regex.exec(pr1.classList.value)[0].trim();
  pr1.classList.remove(classToRemove);
  pr1.classList.add(e.target.value);
  pr2.classList.remove(classToRemove);
  pr2.classList.add(e.target.value);
};

selector.addEventListener('change', handleChangeShake);
