let ChangeBackgroundBtn = document.getElementById('ChangeBackgroundBtn')
let background = document.getElementById('background')

const randomColor = () => {
    return Math.floor(Math.random() * 255)
}

ChangeBackgroundBtn.addEventListener('click', () => {
    let color = background.style.backgroundColor = `rgb(${randomColor()} , ${randomColor()}, ${randomColor()})`
    console.log(color);
    let output = document.getElementById('output').innerHTML = 'color: ' + color
})


