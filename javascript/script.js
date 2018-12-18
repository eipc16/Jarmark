let red = false;
let title = document.querySelector('.main-menu-title');

setInterval(function() {
  if(!red) {
    title.style.color = 'red';
    red = true;
  } else {
    title.style.color = 'green';
    red = false;
  }
}, 100);

setInterval
