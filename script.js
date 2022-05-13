window.addEventListener("load", (e) => {
    e.preventDefault();
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    let width ;
    let color;
    let painting;

    const startPainting = (e) => {
        painting = true
        draw(e, () => {
        })
    }
    const endPainting = () => {
        painting = false
        ctx.beginPath()
    }
    //text modiication functions

    function changeColor(col) {
        color = col
    }

    let black = document.querySelector(".color1")
    black.addEventListener("click", () => {
        color = "black"
    })
    let blue = document.querySelector(".color2")
    blue.addEventListener("click", () => {
        color = "blue"
    })
    let green = document.querySelector(".color3")
    green.addEventListener("click", () => {
        color = "chartreuse"
    })
    let red = document.querySelector(".color4")
    red.addEventListener("click", () => {
        color = "red"
    })
    let eraser = document.querySelector(".color5")
    eraser.addEventListener("click", () => {
        color = "white"
    })

    let widthMaker = document.querySelector('#linewidth')
    widthMaker.addEventListener("mouseleave", () => {
        width = widthMaker.value
    })

    const draw = (e) => {
        if (!painting) return;
        ctx.lineWidth = width
        ctx.strokeStyle = color
        ctx.lineCap = 'round'

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)

    }


    canvas.addEventListener("mousedown", startPainting)
    canvas.addEventListener("mouseup", endPainting)
    canvas.addEventListener("mousemove", draw)

})  