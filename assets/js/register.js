const form = document.getElementById("formRegis");
const errorFname = document.getElementById("errInputN");
const errorLname = document.getElementById("errInputL");
const errorGender = document.getElementById("errGender");
const errorAddress = document.getElementById("errAddress");
const errorEmail = document.getElementById("errEmail");
const errorPassword = document.getElementById("errPassword");
const regisForm = document.getElementById("regisForm");
let valid=0;

//validasi huruf besar di awal kata
function validFirstLetter(str) {
  if (!notEmpty(str)) {
    return false;
  }
  if (str[0] >= "A" && str[0] <= "Z") {
    return true;
  } else {
    return false;
  }
}

//validasi input tidak kosong
function notEmpty(str) {
  if (str === "") {
    return false;
  } else {
    return true;
  }
}

//validasi ada nomor di dalam input
function containNumber(str) {
  let num = false;
  str.split("").forEach((c) => {
    if (c >= "0" && c <= "9") num = true;
  });
  return num;
}

//validasi password harus kuat
function validPassword(str) {
  let num,
    lwr,
    upr,
    symb = false;
  var pw = str.split("");
  pw.forEach((c) => {
    if (c >= "0" && c <= "9") num = true;
    if (c >= "a" && c <= "z") lwr = true;
    if (c >= "A" && c <= "Z") upr = true;
    if (!(c >= 65 && c <= 90) && !(c >= 97 && c <= 122) && !(c >= 48 && c <= 57)) symb = true;
  });
  return num && lwr && upr && symb;
}

//validasi email
function validEmail(str) {
  let at = str.indexOf("@");
  let dot = str.lastIndexOf(".");
  let space = str.indexOf(" ");

  if (
    at != -1 &&
    at != 0 &&
    dot != -1 &&
    dot != 0 &&
    dot > at + 1 &&
    str.length > dot + 1 &&
    space == -1
  ) {
    return true;
  }
}

//validasi gender
function validGender(str) {
  return str === "male" || str === "female";
}

//validasi input lebih dari satu kata
function twoWords(str) {
  return str.trim().split(" ").length > 1;
}

const handleFormevent = (event) => {
  event.preventDefault();
  valid=1;
  const fName = document.getElementById("inputN");
  const lName = document.getElementById("inputL");
  const addr = document.getElementById("address");
  const email = document.getElementById("email");
  const passw = document.getElementById("password");
  const gender = document.querySelector('input[name="select"]:checked');

  if (!notEmpty(fName.value)) {
    valid--;
    errorFname.innerHTML = "First name musn't be empty";
  } else if (!validFirstLetter(fName.value)) {
    valid--;
    errorFname.innerHTML = "First letter must be capital";
  }else{
    errorFname.innerHTML = "First Name";
  }

  if (!notEmpty(lName.value)) {
    valid--;
    errorLname.innerHTML = "Last name musn't be empty";
  } else if (!validFirstLetter(lName.value)) {
    valid--;
    errorLname.innerHTML = "First letter must be capital";
  }else{
    errorLname.innerHTML = "Last Name";
  }

  if (!notEmpty(addr.value)) {
    valid--;
    errorAddress.innerHTML = "Address musn't be empty";
  } else if (!twoWords(addr.value)) {
    valid--;
    errorAddress.innerHTML = "Address is not specific enough";
  } else if (!containNumber(addr.value)) {
    valid--;
    errorAddress.innerHTML =
      "Address must contain number(s) (for: Block number, road number, etc)";
  }else{
    errorAddress.innerHTML = "Address";
  }

  if (!notEmpty(email.value)) {
    valid--;
    errorEmail.innerHTML = "Email musn't be empty";
  } else if (!validEmail(email.value)) {
    valid--;
    errorEmail.innerHTML = "Email not valid";
  }else{
    errorEmail.innerHTML = "Email Address";
  }

  if (!notEmpty(passw.value)) {
    valid--;
    errorPassword.innerHTML = "Password musn't be empty";
  }else if (!validPassword(passw.value)) {
    valid--;
    errorPassword.innerHTML = "Password not Strong Enough";
  }else{
    errorPassword.innerHTML = "Password";
  }

  if (!gender) {
    valid--;
    errorGender.innerHTML = "Gender must be selected";
  } else if (!validGender(gender.value)) {
    valid--;
    errorGender.innerHTML = "Gender not valid";
  }else{
    errorGender.innerHTML = "Gender";
  }

  if(valid==1){
    window.location.href="index.html";
  }
};
regisForm.addEventListener("submit", handleFormevent);

let can = init("canvas");
cW = canvas.width = window.innerWidth;
cH = canvas.height = window.innerHeight;

//FireFly Class Init
class Firefly {
  constructor() {
    this.x = Math.random() * cW;
    this.y = Math.random() * cH;
    this.z = Math.random() * 2;
    this.angle = Math.random() * 2 * Math.PI;
    this.velocity = (this.z * this.z) / 4;
  }
  move() {
    this.x += this.velocity * Math.cos(this.angle);
    this.y += this.velocity * Math.sin(this.angle);
    this.and += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
  }
  show() {
    can.beginPath();
    can.arc(this.x, this.y, this.z, 0, 2 * Math.PI);
    can.fillStyle = "#fff700";
    can.fill();
  }
}
let ff = [];

function draw() {
  if (ff.length < 200) {
    for (let i = 0; i < 200; i++) {
      ff.push(new Firefly());
    }
  }
  for (let j = 0; j < ff.length; j++) {
    ff[j].move();
    ff[j].show();
    if (ff[j].x < 0 || ff[j].x > cW || ff[j].y < 0 || ff[j].y > cH) {
      ff.splice(j, 1);
    }
  }
}

let mouse = {};
let last_mouse = {};

canvas.addEventListener(
  "mouseover",
  function (e) {
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  },
  false
);

function init(elemid) {
  let canvas = document.getElementById(elemid),
    can = canvas.getContext("2d"),
    cW = (canvas.width = window.innerWidth),
    cH = (canvas.height = window.innerHeight);
  can.fillStyle = "rgba(30,30,30,1)";
  can.fillRect(0, 0, cW, cH);
  return can;
}
window.requestAnimationFrame = function () {
  return (
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback);
    }
  );
};

function loop() {
  window.requestAnimationFrame(loop);
  can.clearRect(0, 0, cW, cH);
  draw();
}
window.addEventListener("resize", function () {
  (w = canvas.width = window.innerWidth),
    (h = canvas.height = window.innerHeight);
  loop();
});

loop();
setInterval(loop, 1);