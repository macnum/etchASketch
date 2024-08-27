const gridContainer = document.querySelector('.grid-container');
const buttons = document.querySelectorAll('.btn')




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


buttons.forEach((button)=> {
    button.addEventListener('click', () => {
        const numberOfBox = +prompt('Enter a number');
        if(numberOfBox > 0 && numberOfBox <=100) {
            createGrid(numberOfBox);
            createHoverEffect(button);
        }
        else {
            alert("Enter a positive number between 1 and 100")
        }
    });
})

function createHoverEffect(color) {
    
    const cells = document.querySelectorAll('.grid-item');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            if(color.value === "black") {
                getBlackColor(cell);
            }
            else if(color.value === 'random') {
                getRandomColor(cell);
                
            }
    });
});

}
function getBlackColor(box) {
    box.classList.add('pixelated');
}

function getRandomColor(box) { 
    const randomNumber = () =>  Math.floor(Math.random() * 256); 
    box.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;  
}

