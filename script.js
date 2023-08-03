function updateClock() {
  const currentTime = new Date();
  const hours = formatTimeComponent(currentTime.getHours());
  const minutes = formatTimeComponent(currentTime.getMinutes());
  const seconds = formatTimeComponent(currentTime.getSeconds());
  const ampm = currentTime.getHours() >= 12 ? "PM" : "AM"; // Determine AM or PM

  const boxes = document.querySelectorAll(".timebox div");
  flipBox(boxes[0], hours[0]);
  flipBox(boxes[1], hours[1]);
  flipBox(boxes[2], ":");
  flipBox(boxes[3], minutes[0]);
  flipBox(boxes[4], minutes[1]);
  flipBox(boxes[5], ":");
  flipBox(boxes[6], seconds[0]);
  flipBox(boxes[7], seconds[1]);

  const ampmBox = document.querySelector(".ampm");
  ampmBox.innerText = ampm;

  const dateBox = document.querySelector(".date");
  dateBox.innerText = formatTimeComponent(currentTime.getDate());

  const monthBox = document.querySelector(".month");
  monthBox.innerText = getCurrentMonth(currentTime);

  const yearBox = document.querySelector(".year");
  yearBox.innerText = currentTime.getFullYear();
}

function getCurrentMonth(date) {
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  return months[date.getMonth()];
}
function formatTimeComponent(component) {
  return component < 10 ? "0" + component : component.toString();
}

function flipBox(boxElement, digit) {
  if (boxElement.innerText !== digit) {
    boxElement.classList.add("flipped");
    setTimeout(() => {
      boxElement.innerText = digit;
      boxElement.classList.remove("flipped");
    }, 300);
  }
}

// Update the clock every second
setInterval(updateClock, 1000);
