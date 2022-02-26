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

const shapes3 = [
    {
        id: 0,
        image: 'images/logicalOR.png',
        name: 'OR',
        color: 'Logical'
    },
    {
        id: 1,
        image: 'images/logicalAND.png',
        name: 'AND',
        color: 'Logical'
    },
    {
        id: 2,
        image: 'images/logicalNOT.png',
        name: 'NOT',
        color: 'Logical'
    },
    {
        id: 3,
        image: 'images/cssID.png',
        name: 'ID',
        color: 'CSS'
    },
    {
        id: 4,
        image: 'images/HTMLComment.png',
        name: 'Comment',
        color: 'HTML'
    },
    {
        id: 5,
        image: 'images/jsComment.png',
        name: 'Comment',
        color: 'javascript'
    },
    {
        id: 6,
        image: 'images/pinkNonagon.png',
        name: 'Nonagon',
        color: 'Pink'
    },
    {
        id: 7,
        image: 'images/redNonagon.png',
        name: 'Nonagon',
        color: 'Red'
    },
    {
        id: 8,
        image: 'images/pinkDecagon.png',
        name: 'Decagon',
        color: 'Pink'
    },
    {
        id: 9,
        image: 'images/redDecagon.png',
        name: 'Decagon',
        color: 'Red'
    },
    {
        id: 10,
        image: 'images/pinkHexagon.png',
        name: 'Hexagon',
        color: 'Pink'
    },
    {
        id: 11,
        image: 'images/redPentagon.png',
        name: 'Pentagon',
        color: 'Red'
    }
];

//Page initially opens
let randomInt,
    shapeArray = new Array(0),
    shapesArray = new Array(0),
    colorAndName,
    arrayLength,
    level = 1,
    chances = 3,
    round = 1,
    elapsedTime = 0,
    timerInterval,
    maxNumber = shapes.length,
    bgdColor = 'ivory',
    numShapes = 2,
    timeMessage;

const sGrid = document.getElementById('imagesBox');
const chanceText = document.getElementById('chances');

//Update Level #
function fillLevel(){
    const levelText = document.getElementById('level');
    levelText.textContent = `Level ${level}`;
}

//Updated # Chances Left
function fillChances(){
    chanceText.textContent = `${chances} Chances`;
    chanceText.style.backgroundColor = bgdColor;
    console.log(chanceText);
}

fillLevel();
fillChances();
getGridLayout();



//Let's Play button is clicked
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', (e) => {
    e.preventDefault();    
    //Game begins with 2 images displayed
    numShapes = 2;
    level = 1;
    chances = 3;
    round = 1;
    bgdColor = 'ivory';
    resetTimer();
    startTimer();
    newRound();
    displayedShapes.addEventListener('click', checkClick);
    console.log('actual button click');
})



//Shape is clicked

const displayedShapes = document.getElementById("imagesBox");
displayedShapes.addEventListener('click', checkClick);

function checkClick(e) {
    const tgt = e.target;
    if (tgt.classList.contains("sImage")) {
        console.log(e.currentTarget.tagName);
        if (chances > 0 && elapsedTime > 0 && round < 17)    {
            if (tgt.attributes.src.value === shapeArray.image) {
                updateRound();
            }
            else {
                updateChances();
            }
        }
    }
}


function updateChances() {
    if (chances > 0) {
        chances --;
    }
    switch (chances)
    {
        case 2:
            bgdColor = "yellow";
            updateRound();
            break;

        case 1:
            bgdColor = "orange";
            updateRound();
            break;
        
        case 0:
            bgdColor = "red";
            loser();
            break;
    }
            fillChances();
}

function updateRound() {
    round ++;
    switch (round) 
    {
        case 2: case 3: case 4:
            numShapes = 2;
            maxNumber = shapes.length;
            level = 1;
            break;
        case 5: case 6: case 7: case 8:
            numShapes = 4;
            maxNumber = shapes.length;
            level = 2;
            break; 
        case 9: case 10: case 11:  case 12:
            numShapes = 4;
            maxNumber = shapes2.length;
            level = 3;
            break;
        case 13: case 14: case 15:  case 16:
            numShapes = 4;
            maxNumber = shapes3.length;
            level = 4;
            //make special case for get coding
            break;
        default:
            winner();
    }
    if (round < 17) {
    newRound();
    console.log("updateRound Function");
    }

}

function getFinalTime(){
    let diffInMin = elapsedTime/60000;
    let mins = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mins) * 60;
    let secs = diffInSec.toFixed(1);
  
    if(mins > 1) {
        timeMessage = `${mins} Minutes, ${secs} Seconds`;
    } else if(mins > 0) {
        timeMessage = `${mins} Minute, ${secs} Seconds`;
    } else {
        timeMessage = `${secs} Seconds`;
    }
    return timeMessage;
}

function winner() {
    getFinalTime();
    const tText = document.querySelector('h3');
    tText.textContent = `You Beat the Game in ${timeMessage}!! Play Again?`;
    gameOver();
}

function loser() {
    getFinalTime();
    const tText = document.querySelector('h3');
    tText.textContent = `Good Try! You lasted for ${timeMessage}!! Play Again?`;
    gameOver();
}

function gameOver() {
    stopTimer();
    clearImages();
    let img = document.createElement("img");
    let imagesBox = document.getElementById("imagesBox");
    img.src = "images/gameOver.png";
    img.setAttribute("class", "sImage");
    imagesBox.appendChild(img);
    displayedShapes.removeEventListener('click', checkClick);
}

//Populates the random shapes
function getGridLayout() {
    for (let i = 0; i < numShapes; i++) {
        getRandomInt(maxNumber);
        if (shapesArray.length > 0) {
            for (let j = 0; j < shapesArray.length; j++) {
                while (shapesArray[j].id === randomInt) {
                    getRandomInt(maxNumber);
                    j=0;
                }
                console.log("outside while");
            } 
            console.log("outside for");
        }
        console.log("outside if");
        //initial button click called when form opens
        getImage(randomInt);       
    }
}

//getRandomInt function determines which shapes and colors to display
function getRandomInt(maxNumber) {
    randomInt = Math.floor(Math.random() * maxNumber);
    return randomInt;
}


function newRound() {
    //clearText();
    clearImages();
    shapesArray = new Array(0);
    fillLevel();
    fillChances();
    getGridLayout();
    getShapeToClick();
}

function getImage() {
   
    switch (level)
    {
        case 1: case 2:
            shapeArray = shapes[randomInt];
            break;
        case 3:
            shapeArray = shapes2[randomInt];
            break;
        case 4:
            shapeArray = shapes3[randomInt];
            break;
    }
   
    arrayLength = shapesArray.push(shapeArray);
    const shapeImage = shapeArray.image;
    //append the image to the list of images in box
    let img = document.createElement("img");
    let imagesBox = document.getElementById("imagesBox");
    img.src = shapeImage;
    img.setAttribute("class", "sImage");
    imagesBox.appendChild(img);
}

//Remove images from box
function clearImages() {
    //let sImgA = document.getElementsByClassName("sImgA");
    let imagesBox = document.getElementById("imagesBox");
    let sButton = document.querySelector("button");
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


//Populates the random shapes
function getShape() {
    arrayLength = shapesArray.length;
    getRandomInt(arrayLength);
    //initial button click called when form opens
    shapeArray = shapesArray[randomInt];
    const shapeColor = shapeArray.color;
    const shapeName = shapeArray.name;
    colorAndName = `${shapeColor} ${shapeName}`;
    return colorAndName;      
}


function getShapeToClick(level, chances, round) {
    getShape();
    const tText = document.querySelector('h3');
    tText.textContent = colorAndName;
}

function startTimer() {
    const startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
}

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer(){
    clearInterval(timerInterval);
    print("00:00:000");
    elapsedTime = 0;
}

function timeToString(time) {
    let diffInMin = time/60000;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 1000;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(3, "0");

    if(mm>0) {
        timeMessage = `${mm} Minutes, ${diffInSec} Seconds`;
    } else {
        timeMessage = `${diffInSec} Seconds`;
    }

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
      
}