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

const shapes2 = [
    {
        id: 0,
        image: 'images/blueOctagon.png',
        name: 'Octagon',
        color: 'Blue'
    },
    {
        id: 1,
        image: 'images/greenOctagon.png',
        name: 'Octagon',
        color: 'Green'
    },
    {
        id: 2,
        image: 'images/redOctagon.png',
        name: 'Octagon',
        color: 'Red'
    },
    {
        id: 3,
        image: 'images/yellowOctagon.png',
        name: 'Octagon',
        color: 'Yellow'
    },
    {
        id: 4,
        image: 'images/blackOctagon.png',
        name: 'Octagon',
        color: 'Black'
    },
    {
        id: 5,
        image: 'images/orangeOctagon.png',
        name: 'Octagon',
        color: 'Orange'
    },
    {
        id: 6,
        image: 'images/blackHexagon.png',
        name: 'Hexagon',
        color: 'Black'
    },
    {
        id: 7,
        image: 'images/blueHexagon.png',
        name: 'Hexagon',
        color: 'Blue'
    },
    {
        id: 8,
        image: 'images/greenHexagon.png',
        name: 'Hexagon',
        color: 'Green'
    },
    {
        id: 9,
        image: 'images/orangeHexagon.png',
        name: 'Hexagon',
        color: 'Orange'
    },
    {
        id: 10,
        image: 'images/redHexagon.png',
        name: 'Hexagon',
        color: 'Red'
    },
    {
        id: 11,
        image: 'images/yellowPentagon.png',
        name: 'Pentagon',
        color: 'Yellow'
    }
];

//Page initially opens
let randomInt,
    shapeArray,
    shapesArray = new Array(0),
    shapeColor,
    shapeName,
    shapeImage,
    colorAndName,
    iBox,
    boxShapes,
    arrayLength,
    level = 1,
    chances = 3,
    round = 1,
    elapsedTime = 0,
    startTime,
    timerInterval;

const sGrid = document.getElementById("imagesBox");
/*let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByName("cell");*/

//let gridCells = document.querySelectorAll('.child');
//console.log(gridCells);

fillLevel(level);
fillChances(chances);

function fillLevel(level){
    const levelText = document.getElementById('level');
    levelText.textContent = `Level ${level}`;
}

function fillChances(chances){
    const chanceText = document.getElementById('chances');
    chanceText.textContent = `${chances} Chances Left`;
}

let numShapes = 2;
console.log(numShapes);

getGridLayout(numShapes);
//console.log(layout);


//Let's Play button is clicked
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('button click');
    
    //Game begins with 2 images displayed
    numShapes = 2;
    buttonClick(numShapes);
    console.log('actual button click');
    
})



//Shape is clicked
const displayedShapes = document.querySelectorAll('.sImgA');
displayedShapes.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('shape click');
    console.log(randomInt);
    shapeClick();
})
//const displayedShapes = document.querySelectorAll('.sImgA');
//console.log(displayedShapes);

/*for (displayedShape of displayedShapes) 
if {
    displayedShape.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('image click');
        console.log(randomInt);
        shapeClick();
    })
}
*/

function shapeClick() {
    console.log(randomInt);
    if (shapesArray[randomInt].image = img.src) {
        round = round + 1;
        //set 
    }

}

//Populates the random shapes
function getGridLayout(numShapes) {
    for (let i = 0; i < numShapes; i++) {
        getRandomInt();
        console.log(randomInt);
        if (shapesArray.length > 0) {
            for (let j = 0; j < shapesArray.length; j++) {
                while (shapesArray[j].id === randomInt) {
                    getRandomInt();
                    console.log(randomInt);
                    j=0;
                }
                console.log("ourside while");
            } 
            console.log("ourside for");
        }
        console.log("ourside if");
        //initial button click called when form opens
        getImage(randomInt);
        console.log(shapeImage);
       
    }
}

//getRandomInt function determines which shapes and colors to display
function getRandomInt(maxNumber = shapes.length) {
    randomInt = Math.floor(Math.random() * maxNumber);
    return randomInt;
}


function buttonClick(numShapes) {
    clearText();
    clearImages();
    shapesArray = new Array(0);
    getGridLayout(numShapes);
    getShapeToClick();
    //startTimer();
}

function getImage(randomInt) {
   /* shapeImage = shapes.filter(function(shape){
        return shape.id === randomInt;
    }).map(function(shape){
        return shape.image;
    });
    console.log(shapeImage);*/
    shapeArray = shapes[randomInt];
    console.log(shapeArray);
    arrayLength = shapesArray.push(shapeArray);
    console.log(shapesArray);
    shapeImage = shapeArray.image;
    


    //append the image to the list of images in box
    
    let img = document.createElement("img");
    let a = document.createElement("a");
    let imagesBox = document.getElementById("imagesBox");
    //let div = document.createElement("div");
    //div.setAttribute("class", "sImgDiv");
    img.src = shapeImage;
    img.setAttribute("class", "sImage");
    
    a.href = "";
    a.setAttribute("class", "sImgA");
    a.appendChild(img);
    imagesBox.appendChild(a);
    //div.appendChild(a);
    //document.getElementById("imagesBox").appendChild(a);
}

//Remove images from box
function clearImages() {
    let sImgA = document.getElementsByClassName("sImgA");
    let imagesBox = document.getElementById("imagesBox");
    let a = document.querySelector("a");
    let childElementCount = imagesBox.childElementCount;
    console.log(imagesBox.childElementCount);
    console.log(imagesBox.childNodes);
    console.log(imagesBox.children);
    console.log(imagesBox.lastElementChild);
    let child = imagesBox.lastElementChild;
    while (child) {
        imagesBox.removeChild(child);
        child = imagesBox.lastElementChild;
    }
   
}

/*function getShape() {
    //get current shapes from imagesBox. Are they automatically indexed 0, 1, etc?
    //randomly select one of these... maxNumber = # of "a" elements in "imagesBox"
    iBox = document.getElementById("imagesBox");
    numShapes = iBox.getElementsByTagName("img").length;
    //maxNumber= document.getElementsByTagName("img").length;
    getRandomInt(numShapes);
    console.log(randomInt);
    //associate randomInt with img.src ... shapes.image = img.src
    randomImage=iBox.img(randomInt);
    shapeName = shapes.filter(function(shape){
        return shape.image === randomImage;
    }).map(function(shape){
        return shape.name;
    })
}
*/
//Populates the random shapes
function getShape() {
    arrayLength = shapesArray.length;
    getRandomInt(arrayLength);
    console.log(randomInt);
    //initial button click called when form opens
    shapeArray = shapesArray[randomInt];
    shapeColor = shapeArray.color;
    shapeName = shapeArray.name;
    colorAndName = `${shapeColor} ${shapeName}`;
    console.log(colorAndName);
    return colorAndName;
      
}

/*function getShapeColor() {
    //get current shapes from imagesBox. Are they automatically indexed 0, 1, etc?
    //randomly select one of these... maxNumber = # of "a" elements in "imagesBox"
    let imagesBox = document.getElementById("imagesBox");
    let maxNumber= imagesBox.childElementCount;
    let children = imagesBox.children;
    getRandomInt(maxNumber);
    //associate randomInt with img.src ... shapes.image = img.src
    let selShape = children[randomInt];
    console.log(selShape);
    
    randomImage=img.src;
    shapeColor = shapes.filter(function(shape){
        return shape.image === randomImage;
    }).map(function(shape){
        return shape.color;
    })
    console.log(shapeColor);
}

function getShapeName() {
    //get current shapes from imagesBox. Are they automatically indexed 0, 1, etc?
    //randomly select one of these... maxNumber = # of "a" elements in "imagesBox"
    //iBox = document.getElementById("imagesBox");
    //numShapes = iBox.getElementsByTagName("img").length;
    //maxNumber= document.getElementsByTagName("img").length;
    let imagesBox = document.getElementById("imagesBox");
    let maxNumber= imagesBox.childElementCount;
    let children = imagesBox.children;
    getRandomInt(maxNumber);
    //associate randomInt with img.src ... shapes.image = img.src
    let selShape = children[randomInt];
    console.log(selShape);
    
    randomImage=img.src;
    shapeName = shapes.filter(function(shape){
        return shape.image === randomImage;
    }).map(function(shape){
        return shape.name;
    })
    console.log(shapeName);
}

function getColorAndName(shapeColor, shapeName) {
    colorAndName = `${shapeColor} ${shapeName}`;
    console.log(colorAndName);
    return colorAndName
}
*/


function clearText() {
    //const tText = document.querySelector('colAndShapeName h2');
    const tText = document.querySelector('h3');
    tText.textContent = '';
}


function getShapeToClick(level, chances, round) {
    getShape();
    //getShapeColor();
    //getShapeName();
    //getColorAndName(shapeColor, shapeName);
    const tText = document.querySelector('h3');
    tText.textContent = colorAndName;
    //let clickThis = document.getElementById('h3');
    //clickThis.textContent = colorAndName;
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
  //  showButton("PAUSE");

}

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function pause() {
    clearInterval(timerInterval);
   // showButton("PLAY");
}

function reset(){
    clearInterval(timerInterval);
    print("00:00:00:000");
    elapsedTime = 0;
    //showButton("PLAY");
}

/*
function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}
*/

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(3, "0");
    return `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`;
}


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
