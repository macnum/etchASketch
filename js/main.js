const gridContainer = document.querySelector('.grid-container');
const startBtn = document.querySelector('.start-btn');


console.log(gridContainer);



function createGrid(number) {
    gridContainer.innerHTML = '';
    const containerWidth = 500; 
    const containerHeight = 500;
    const itemWidth = (containerWidth / number);
    const itemHeight = (containerHeight / number);

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.style.width = `${itemWidth}px`;
            gridItem.style.height = `${itemHeight}px`;
            gridContainer.appendChild(gridItem);
        }
    }
}
startBtn.addEventListener('click', () => {
    const numberOfBox = +prompt('Enter a number');
    createGrid(numberOfBox);
    createHoverEffect();
})

function createHoverEffect() {
    const items = document.querySelectorAll('.grid-item');
    
    items.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
        item.classList.add('pixelated');
    } )
});

}
createPixel();