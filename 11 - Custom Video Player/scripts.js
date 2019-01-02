// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build out functions
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  //console.log('Update the button');
  const icon = this.paused ? '►' : '❚ ❚'
  console.log(icon);
  toggle.textContent = icon;
}

function skip() {
  console.log('skipping!');
}

// Hook up the event listners
video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlay);
video.addEventListener('pause', togglePlay);

toggle.addEventListener('click',togglePlay);
