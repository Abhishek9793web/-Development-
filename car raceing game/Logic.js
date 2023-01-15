const car1 = document.getElementById("car1");
const car2 = document.getElementById("car2");

function moveCars() {
  car1.style.top = Math.random() * 250 + "px";
  car2.style.top = Math.random() * 250 + "px";
}

setInterval(moveCars, 500);
