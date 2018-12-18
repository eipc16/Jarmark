let red = false;

setInterval(function() {
  let title = document.getElementById('main-title');

  if(!red) {
    title.style.color = 'red';
    red = true;
  } else {
    title.style.color = 'green';
    red = false;
  }
}, 1000);
