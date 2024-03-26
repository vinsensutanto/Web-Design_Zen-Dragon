let can = init("canvas")
cW = canvas.width = window.innerWidth;
cH = canvas.height = window.innerHeight;

//FireFly Class Init
class Firefly {
    constructor() {
        this.x = Math.random() * cW
        this.y = Math.random() * cH
        this.z = Math.random() * 2
        this.angle = Math.random() * 2 * Math.PI
        this.velocity = (this.z * this.z) / 4
    }
    move() {
        this.x += this.velocity * Math.cos(this.angle)
        this.y += this.velocity * Math.sin(this.angle)
        this.and += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180
    }
    show() {
        can.beginPath()
        can.arc(this.x, this.y, this.z, 0, 2 * Math.PI)
        can.fillStyle = "#fff700"
        can.fill();
    }
}
let ff = []

function draw() {
    if (ff.length < 200) {
        for (let i = 0; i < 200; i++) {
            ff.push(new Firefly())
        }
    }
    for (let j = 0; j < ff.length; j++) {
        ff[j].move()
        ff[j].show()
        if (ff[j].x < 0 || ff[j].x > cW || ff[j].y < 0 || ff[j].y > cH) {
            ff.splice(j, 1)
        }
    }
}

let mouse = {}
let last_mouse = {}

canvas.addEventListener("mouseover", function(e) {
    last_mouse.x = mouse.x
    last_mouse.y = mouse.y

    mouse.x = e.pageX - this.offsetLeft
    mouse.y = e.pageY - this.offsetTop
}, false)

function init(elemid) {
    let canvas = document.getElementById(elemid),
        can = canvas.getContext('2d'),
        cW = (canvas.width = window.innerWidth),
        cH = (canvas.height = window.innerHeight)
    can.fillStyle = "rgba(30,30,30,1)"
    can.fillRect(0, 0, cW, cH)
    return can
}
window.requestAnimationFrame = function() {
    return (
        window.requestAnimationFrame || function(callback) {
            window.setTimeout(callback)
        }
    )
}

function loop() {
    window.requestAnimationFrame(loop);
    can.clearRect(0, 0, cW, cH)
    draw()
}
window.addEventListener("resize", function() {
    (w = canvas.width = window.innerWidth),
    (h = canvas.height = window.innerHeight)
    loop()
})

loop()
setInterval(loop, 1)