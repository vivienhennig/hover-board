const containerID = 'container';
const colorContainerID = 'colorContainer';
const container = document.getElementById(containerID);
const colorContainer = document.getElementById(colorContainerID);

const colors = ['#F94144', '#F3722C', '#F8961E', '#F9844A', '#F9C74F', '#90BE6D', '#43AA8B', '#4D908E', '#577590', '#277DA1' ];
const colorsNeon = ['#01ffc3', '#01ffff', '#ffb3fd', '#9d72ff'];
const colorsBright = ['#EF476F', '#F78C6B', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];

const NUM_OF_SQUARES = 1500;

let colorsIDIndex = 0;
let usedColors = colors;

addColorPicker();


for (let i = 1; i <= NUM_OF_SQUARES; i++) {
  let square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseenter', () => addColor(square));

  square.addEventListener('mouseleave', () => removeColor(square));

  container.appendChild(square);
}

function addColor(square) {
  const backgroundColor = getRandomColor(colorsNeon);
  square.style.backgroundColor = backgroundColor;
  square.style.boxShadow = `0 0 2px ${backgroundColor}, 0 0 4px ${backgroundColor} `;
}

function removeColor(square) {
  square.style.backgroundColor = '#ced4da';
  square.style.boxShadow = `1px 1px #2d2d2d`;
}

function getRandomColor(colors) {
  return usedColors[Math.floor(Math.random() * usedColors.length)];
}

function displayColors(colors) {
  let colorRow = document.createElement('div');
  const id = `colors${colorsIDIndex}`;
  colorRow.classList.add('colorRow');
  colorRow.id = id;

  colorRow.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.id === id || event.target.parentNode.id === id) {
      usedColors = colors;
      console.log(colors);
    }
  });

  for (let i = 0; i < colors.length; i++) {
    let colorDiv = document.createElement('div');
    colorDiv.classList.add('color');

    colorDiv.style.backgroundColor = colors[i];
    console.log(colors[i], colorDiv)
    
    colorRow.appendChild(colorDiv);
  }
  colorContainer.appendChild(colorRow);
  colorsIDIndex++;
}

function addColorPicker() {
  displayColors(colors);
  displayColors(colorsNeon);
  displayColors(colorsBright);
}