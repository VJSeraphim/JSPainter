const canvas = document.querySelector("#js-Canvas")
const ctx = canvas.getContext("2d")

canvas.width = 1080
canvas.height = 720

ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5


let painting = false


function onMouseMove(event) {
    const offX = event.offsetX
    const offY = event.offsetY
    if(!painting) {
        ctx.beginPath()
        ctx.moveTo(offX, offY)
    } else {
        ctx.lineTo(offX, offY)
        ctx.stroke()
    }
}


function paintStart(){
    painting = true
}


function paintStop() {
    painting = false
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", paintStart)
    canvas.addEventListener("mouseup", paintStop)
    canvas.addEventListener("mouseleave", paintStop)
}