const canvas = document.querySelector("#js-Canvas")
const colors = document.getElementsByClassName("jsColor")
const ctx = canvas.getContext("2d")
const range = document.getElementById("js-range")
const mode = document.getElementById("js-Mode")
const save= document.getElementById("js-Save")

const initialColor = "#2c2c2c"

canvas.width = 1080
canvas.height = 720

ctx.fillStyle = "white"
ctx.fillRect(0, 0, 1080, 720)
ctx.strokeStyle = initialColor
ctx.lineWidth = 2.5
ctx.fillStyle = initialColor


let painting = false
let filling = false


function onMouseMove(event) {
    const offX = event.offsetX
    const offY = event.offsetY
    
    if (filling) {
        ctx.beginPath()
        ctx.moveTo(offX, offY)
    }

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
    canvas.style.cursor = "crosshair"
}


function paintStop() {
    painting = false
    canvas.style.cursor = "auto"
}

function handleColor(event) {
    const bgColor = event.target.style.backgroundColor
    ctx.strokeStyle = bgColor
    ctx.fillStyle = bgColor
}

function handleRange(event) {
    const widthSize = event.target.value
    ctx.lineWidth = widthSize
}


function handleModeClick(event) {
    if (filling === true) {
        filling = false
        mode.innerText = "Fill"
    } else {
        filling = true
        mode.innerText = "Paint"
    }
}

function handleCanvasClick(event) {
    if(filling) {
        ctx.fillRect(0, 0, 1080, 720)
    }

}

function handleContextMenu(event) {
    event.preventDefault()
}

function handleSaveClick(event) {
    const image = canvas.toDataURL("image/png")
    const link = document.createElement("a");
    link.href = image
    link.download = "New image"
    link.click()
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", paintStart)
    canvas.addEventListener("mouseup", paintStop)
    canvas.addEventListener("mouseleave", paintStop)
    canvas.addEventListener("click", handleCanvasClick)
    canvas.addEventListener("contextmenu", handleContextMenu)
}

function drawImageData(image) {
    
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColor))

if (range) {
    range.addEventListener("input", handleRange)
}

if (mode) {
    mode.addEventListener("click", handleModeClick)
}

if (save) {
    save.addEventListener("click", handleSaveClick)
}