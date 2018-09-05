
const rectCanvas = {
    'canvas': document.getElementById('rectangle'),
    'context': canvasRect.getContext('2d')
}

rectCanvas.context.strokeStyle = '#81D742'
rectCanvas.context.lineWidth = 2
rectCanvas.context.strokeRect(10, 10, 200, 100)