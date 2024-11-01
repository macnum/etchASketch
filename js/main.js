const gridContainer = document.querySelector('.grid-container');
const buttons = document.querySelectorAll('.btn');

/**create grid */

function createGrid(number) {
  gridContainer.innerHTML = '';
  const containerWidth = 500;
  const containerHeight = 500;
  const itemWidth = containerWidth / number;
  const itemHeight = containerHeight / number;

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.style.width = `${itemWidth}px`;
      gridItem.style.height = `${itemHeight}px`;
      gridItem.style.backgroundColor = '#101010'; // Starting color
      gridItem.style.opacity = '0';
      gridContainer.appendChild(gridItem);
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const numberOfBox = +prompt('Enter a number');
    if (numberOfBox > 0 && numberOfBox <= 100 && numberOfBox != NaN) {
      createGrid(numberOfBox);
      createHoverEffect(button);
    } else {
      alert('Enter a positive number between 1 and 100');
    }
  });
});

function createHoverEffect(button) {
  const cells = document.querySelectorAll('.grid-item');
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', (e) => {
      if (button.value === 'black') {
        getBlackColor(cell);
      } else if (button.value === 'random') {
        getRandomColor(cell);
      } else if (button.value === 'shade') {
        console.log(button.value);
        applyShadeEffect(cell);
      }
    });
  });
}
function getBlackColor(box) {
  box.classList.add('blackHover');
  box.style.opacity = '1';
}
function applyShadeEffect(box) {
  let currentOpacity = parseFloat(box.style.opacity) || 0;
  currentOpacity = Math.min(currentOpacity + 0.1, 1);
  console.log(currentOpacity);
  box.style.opacity = currentOpacity;
}

function getRandomColor(box) {
  const randomNumber = () => Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
  box.style.opacity = '1';
}
