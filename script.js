const c = document.getElementById("c");
const ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = c.height;
const pxsize = c.height / 128;
let key;
const fps = 15;

//[frame, x, y, width, height]

let FBI = ["frame", 0, 0, 10, 20];

function spriter(character) {
  ctx.fillRect(character[1] * pxsize, character[2] * pxsize, character[3] * pxsize, character[4] * pxsize);
}
let yv = 0;
let xv = 0;
let number = 0;
function onupdate() {
  ctx.clearRect(0, 0, c.width, c.height);
  spriter(FBI);
  //Game Play
  if (FBI[2] < 108) {
    yv += 1;
    ground = false;
  } else {
    yv = 0;
    FBI[2] = 108;
    ground = true;
  }
  if (map[translate("KeyW")] && ground) {
    yv = -6;
  }
  if (map[translate("KeyD")] && FBI[1] < 108) {
    xv += 1;
  }
  if (map[translate("KeyA")]) {
    xv -= 1;
  }
  if (!(map[translate("KeyD")]) && !(map[translate("KeyA")])) {
    xv = 0;
  }
  if (Math.abs(xv) > 10) {
    xv = Math.abs(xv)/xv * 10;
  }
  number++;
  FBI[1] += xv;
  FBI[2] += yv;
}


let state;
window.onload = () => {
  state = setInterval(onupdate, 1000 / fps);
}
window.onfocus = () => {
  state = setInterval(onupdate, 1000 / fps);
}
window.onblur = () => {
  state = "";
}

let map = []; // You could also use an array
onkeydown = onkeyup = function(e) {
  map[translate(e.code)] = e.type == 'keydown';
}
function translate(nm) {
  let text = nm;
  let a = [null, "a", 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "A", 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', " ", ".", "!", "ñ", "á", "ó", "ú", "é", "ä", "å", "®", "þ", "ü", "í", "ö", "ß", "ð", "ø", "æ", "©", "µ", "ç", "¿", "²", "³", "¤", "€", "¼", "½", "¾", "‘", "¥", "×", "¡", "¢", "°", "Ø", "1", "2", "3", "0", "5", "6", "9", "7", "8", "4"];
  text = text.split("");
  let i = -1;
  let shift = 0;
  if  (Number.isInteger(shift)) {} else {
    shift = 0;
  }
  let a2 = [];
  while (i<text.length-1) {
    i += 1;
    if (a.indexOf(text[i])==-1) {
      a2.push(0)
    } else {
      a2.push(a.indexOf(text[i])+shift)
    }
  }
  return parseInt(a2.join(""));
}