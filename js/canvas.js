
var shapes = {
    'rectangle': document.getElementById('rectangle'),
    'triangle': document.getElementById('triangle'),
    'circle': document.getElementById('circle'),
    'text': document.getElementById('text'),
    'image': document.getElementById('image'),
}

var neonGreen = '#81D742',
    rectDraw = shapes.rectangle.getContext('2d'),
    triDraw = shapes.triangle.getContext('2d'),
    cirDraw = shapes.circle.getContext('2d'),
    txtDraw = shapes.text.getContext('2d'),
    imgDraw = shapes.image.getContext('2d')


// Rectangle
rectDraw.strokeStyle = neonGreen
rectDraw.lineWidth = '2'
rectDraw.strokeRect(10, 10, 200, 100)

// Triangle
triDraw.moveTo(-10, 200)
triDraw.lineTo(80, 90)
triDraw.lineTo(400, 500)
triDraw.fillStyle = neonGreen
triDraw.fill()
triDraw.closePath()
triDraw.lineJoin = 'round'

// Circle
cirDraw.arc(70, 100, 50, 0, Math.PI*2, false)
cirDraw.fillStyle = neonGreen
cirDraw.fill()

// Text
txtDraw.fillStyle = neonGreen
txtDraw.font = '20px "Ariel Black"'
txtDraw.fillText('Type Text rending through canvas', 20, 60)

// Image
var picture = new Image()
picture.src = 'https://www.evankemp.com/images/profile-square.jpg'
picture.onload = () => imgDraw.drawImage(picture, 20, 20, picture.width * 0.05, picture.height * 0.05)

// #######
// Animation
// #######

var canvas = document.getElementById("animation")
var draw = canvas.getContext('2d')

var canvasWidth = canvas.width
var canvasHeight = canvas.height

var angle = 0

function drawCircle() {
    draw.clearRect(0, 0, canvasWidth, canvasHeight)

    draw.beginPath();

    var radius = 25 + 50 * Math.abs(Math.cos(angle))
    draw.arc(canvasWidth /2, canvasHeight / 2, radius, 0, Math.PI * 2, false)
    draw.closePath()

    draw.fillStyle = neonGreen
    draw.fill();

    angle += Math.PI / 64

}

setInterval(drawCircle, 10)



