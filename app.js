// script.js

let progress = 0;

function increaseProgress() {
  // Increase progress by 10
  progress += 10;
  // If progress is more than 100, make it 100
  if (progress > 100) {
    progress = 100;
  }
  // Calculate how much of the circle is filled
  let degrees = (progress / 100) * 360;
  // Change the circle's look
  document.getElementById("progressCircle").style.transform = `rotate(${
    degrees - 90
  }deg)`;
}
