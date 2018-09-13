
const correctOrder = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]

$('.drag-piece').each((index, piece) => {
    let pieceText = $(piece).text()

    $(piece).attr('id', pieceText)
})

const onDrag = event => {
    event.dataTransfer.setData('text/plain', event.target.textContent)
}

const dragOver = event => {
    event.preventDefault()
}

const movePiece = event => {
    const data = event.dataTransfer.getData('text/plain')

    event.target.appendChild(document.getElementById(data))

    var draggedOrder = []

    $('.drag-placeholder').each((index, placeHolder) => {
        var pieceID = $(placeHolder).find('.drag-piece').attr('id')

        draggedOrder.push(pieceID)
    })

    congratsMsg(draggedOrder)
}

function congratsMsg(draggedOrder) {
    if (draggedOrder.equals(correctOrder)) {
        alert('Congrats! You got it right')
    }
}