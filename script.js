const shapes = [
    {
        id: 0,
        image: 'images/blueSquare.png',
        name: 'Square',
        color: 'Blue'
    },
    {
        id: 1,
        image: 'images/greenSquare.png',
        name: 'Square',
        color: 'Green'
    },
    {
        id: 2,
        image: 'images/redSquare.png',
        name: 'Square',
        color: 'Red'
    },
    {
        id: 3,
        image: 'images/yellowSquare.png',
        name: 'Square',
        color: 'Yellow'
    },
    {
        id: 4,
        image: 'images/blueTriangle.png',
        name: 'Triangle',
        color: 'Blue'
    },
    {
        id: 5,
        image: 'images/greenTriangle.png',
        name: 'Triangle',
        color: 'Green'
    },
    {
        id: 6,
        image: 'images/redTriangle.png',
        name: 'Triangle',
        color: 'Red'
    },
    {
        id: 7,
        image: 'images/yellowTriangle.png',
        name: 'Triangle',
        color: 'Yellow'
    },
    {
        id: 8,
        image: 'images/blueCircle.png',
        name: 'Circle',
        color: 'Blue'
    },
    {
        id: 9,
        image: 'images/greenCircle.png',
        name: 'Circle',
        color: 'Green'
    },
    {
        id: 10,
        image: 'images/redCircle.png',
        name: 'Circle',
        color: 'Red'
    },
    {
        id: 11,
        image: 'images/yellowCircle.png',
        name: 'Circle',
        color: 'Yellow'
    }
];

//Page initially opens
let randomInt,
    shapeImage,
    shapeColor,
    shapeName,
    level = 1;
let gridCells = document.querySelectorAll('.child');
console.log(gridCells);

let gridSize = gridCells.length;
console.log(gridSize);

getRandomInt();
console.log(randomInt);
//initial button click called when form opens
buttonClick(randomInt);
console.log(shapeImage);

//Let's Play button is clicked
const button = document.querySelector('.button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('button click');
    //Will need to getRandomInt for all cells in grid...4, 9, 16...
    getRandomInt();
    buttonClick(RandomInt);
    console.log('actual button click');
})

//Shape is clicked
const img = document.querySelector('img');
img.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('image click');
    console.log(randomInt);
    shapeClick();
})

//getRandomInt function determines which shapes and colors to display
function getRandomInt(maxNumber = shapes.length) {
    randomInt = Math.floor(Math.random() * maxNumber);
    return randomInt;
}

function buttonClick(randomInt) {
    shapeImage = shapes.filter(function(shape){
        return shape.id === randomInt;
    }) .map(function(shape){
        return shape.image;
    });
    img.src = shapeImage;
    //should img.src actually be child.
}