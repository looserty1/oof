const c = document.getElementById("c");
const ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = c.height;
const pxsize = c.height / 128;
let key;

function onupdate() {
  ctx.clearRect(0, 0, c.width, c.height);
  //Game Play
}

document.addEventListener("keypress", function(e) {
  key = e.key;
});

let state;
window.onload = () => {
  state = setInterval(onupdate, 1000/fps);
}
window.onfocus = () => {
  state = setInterval(onupdate, 1000/fps);
}
window.onblur = () => {
  state = "";
}
