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
    shapeColor,
    shapeName,
    level = 1;

const sGrid = document.getElementById("imagesBox");
/*let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByName("cell");*/

//let gridCells = document.querySelectorAll('.child');
//console.log(gridCells);

let numShapes = 2;
//let totRows = Math.sqrt(gridSize);
//let totCols = totRows;
console.log(numShapes);

//HOW DO I ACTUALLY DISPLAY THE GRID?
getGridLayout(numShapes);
//console.log(layout);

//Populates the random shapes
function getGridLayout(numShapes) {
    for (let i = 0; i < numShapes; i++) {
        getRandomInt();
        console.log(randomInt);
        //initial button click called when form opens
        let shapeImage = getImage(randomInt);
        console.log(shapeImage);
        placeImage(shapeImage, i);
        
    }
}
//Let's Play button is clicked
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('button click');
    numShapes = 2;
    
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


function getImage(randomInt) {
    shapeImage = shapes.filter(function(shape){
        return shape.id === randomInt;
    }) .map(function(shape){
        return shape.image;
    });
    
    //append the image to the list of images in box
    img.src = shapeImage;
    //should img.src actually be child.
}

/*function placeImage(shapeImage, i) {

}*/


/*
//creates rows
function makeRows(totRows) {
    for (i = 0; i < totRows; i++) {
        //let row = document.createElement("a");
        let cell = level_Grid.createElement("a");


        level_Grid.appendChild(rows).className = "gridRow";
    };
};
*/

/*
//creates columns
function makeColumns(totRows) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < totRows; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };
    };
};
*/

/*
//fills cells with images
function placeImage(shapeImage, i) {
    let row = Math.floor(i/totRows);
    let col = i % totRows;
}
*/