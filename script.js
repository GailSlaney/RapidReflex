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

// Page initially opens
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
    timeMessage,
    animImage;

const sGrid = document.getElementById('imagesBox');
const chanceText = document.getElementById('chances');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const welcome = document.getElementById('welcome');
const pony = document.getElementById('pony');

// Object to hold animation images and x, y positions
let levelCel = {
    anim2: new Image(),
    anim3: new Image(),
    anim4: new Image(),
    posX: canvas.width,
    posY: 10
};

let requestId = 0;

// Assign source for animation images
levelCel.anim2.src = "images/anim2.png";
levelCel.anim3.src = "images/anim3.png";
levelCel.anim4.src = "images/anim4.png";

// Functions called when page opens to initially fill game contents
fillLevel();
fillChances();
getGridLayout();
resizeCanvas();
drawHeadings();
drawPony();
setTimeout(removeWelcome,5000);

// Sets canvas space size for headings/animation based on device size
function resizeCanvas() {
    if (document.documentElement.clientWidth < 775) {
        canvas.width = document.documentElement.clientWidth * 0.98;
    } else {
        canvas.width = document.documentElement.clientWidth * 0.83;
    }
}
// Use canvas to draw headings above game
function drawHeadings() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (document.documentElement.clientWidth < 775) {
        ctx.font = 'bold 24px serif';
        ctx.fillText('How fast are your reflexes?', 2, 50);
        ctx.font = '16px serif';
        ctx.fillText('Click the image that matches the description below', 2, 90);
        ctx.fillText('as the stopclock records your response time!', 2, 110);
    } else {
        ctx.font = 'bold 36px serif';
        ctx.fillText('How fast are your reflexes?', 2, 50);
        ctx.font = '20px serif';
        ctx.fillText('Click the image that matches the description below as the stopclock records your response time!', 2, 100);
    }

}

// Animates images at beginning of each level
let pixelsPerFrame = 5,
    x = levelCel.posX,
    y = levelCel.posY;
function animate() {
    requestId = requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(anImage, x, y);
    if (x > -(canvas.width)) {
        x -= pixelsPerFrame;
    } else {
        cancelAnimationFrame(requestId);
        x = levelCel.posX;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

    console.log(pony.style.display);
// Draw Pony animation below game
function drawPony() {
pony.style.display = 'block';
welcome.style.display = 'block';
}

// Remove welcome image from screen
function removeWelcome() {
    welcome.style.display = 'none';
}

// Let's Play button is clicked
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', (e) => {
    e.preventDefault();    
    // Game begins with 2 images displayed
    numShapes = 2;
    level = 1;
    chances = 3;
    round = 1;
    bgdColor = 'ivory';
    resetTimer();
    startTimer();
    newRound();
    drawHeadings();
    displayedShapes.addEventListener('click', checkClick);
})

// Shape is clicked
const displayedShapes = document.getElementById("imagesBox");
displayedShapes.addEventListener('click', checkClick);

function checkClick(e) {
    const tgt = e.target;
    if (tgt.classList.contains("sImage")) {
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

// Populates Level # textbox
function fillLevel(){
    const levelText = document.getElementById('level');
    levelText.textContent = `Level ${level}`;
}

// Populates # Chances Left textbox
function fillChances(){
    chanceText.textContent = `${chances} Chances`;
    chanceText.style.backgroundColor = bgdColor;
}

// Populates the random shapes
function getGridLayout() {
    for (let i = 0; i < numShapes; i++) {
        getRandomInt(maxNumber);
        if (shapesArray.length > 0) {
            for (let j = 0; j < shapesArray.length; j++) {
                while (shapesArray[j].id === randomInt) {
                    getRandomInt(maxNumber);
                    j=0;
                }
            } 
        }
        // Initial button click called when form opens
        getImage(randomInt);       
    }
}

// Updates #Chances
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

// Updates round#
function updateRound() {
    round ++;
    switch (round) 
    {
        case 2: case 3: case 4:
            numShapes = 2;
            maxNumber = shapes.length;
            level = 1;
            break;
        case 5:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            anImage = levelCel.anim2;
            animate();
            numShapes = 4;
            maxNumber = shapes.length;
            level = 2;
            break; 
        case 6: case 7: case 8:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            numShapes = 4;
            maxNumber = shapes.length;
            level = 2;
            break; 
        case 9:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            anImage = levelCel.anim3;
            animate();            
            numShapes = 4;
            maxNumber = shapes2.length;
            level = 3;
            break;
        case 10: case 11:  case 12:
            numShapes = 4;
            maxNumber = shapes2.length;
            level = 3;
            break;
        case 13:
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            anImage = levelCel.anim4;
            animate();            
            numShapes = 4;
            maxNumber = shapes2.length;
            // Revert back to shapes3
            //maxNumber = shapes3.length;
            level = 4;
            // Special case for get coding
            break;
        case 14: case 15:  case 16:
            numShapes = 4;
            maxNumber = shapes2.length;
            // Revert back to shapes3
            //maxNumber = shapes3.length;
            level = 4;
            break;
        default:
            winner();
    }
    if (round < 17) {
    newRound();
    }
}

// Gets final time at end of game
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

// Fills textbox with message if player beats the game
function winner() {
    getFinalTime();
    const tText = document.querySelector('h3');
    tText.textContent = `You Beat the Game in ${timeMessage}!! Play Again?`;
    gameOver();
}

// Fills textbox with message if player loses game
function loser() {
    getFinalTime();
    const tText = document.querySelector('h3');
    tText.textContent = `Good Try! You lasted for ${timeMessage}!! Play Again?`;
    gameOver();
}

// Stops game and displays gameover image
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

// Determines which shapes and colors to display
function getRandomInt(maxNumber) {
    randomInt = Math.floor(Math.random() * maxNumber);
    return randomInt;
}

// Updates all fields to start each round
function newRound() {
    clearImages();
    shapesArray = new Array(0);
    fillLevel();
    fillChances();
    getGridLayout();
    getShapeToClick();
}

// Randomly selects image to display in box based on which level is being played
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
            // Revert back to shapes3
            shapeArray = shapes2[randomInt];
            //shapeArray = shapes3[randomInt];
            break;
    }
    arrayLength = shapesArray.push(shapeArray);
    const shapeImage = shapeArray.image;
    // Append the image to the list of images in box
    let img = document.createElement("img");
    let imagesBox = document.getElementById("imagesBox");
    img.src = shapeImage;
    img.setAttribute("class", "sImage");
    imagesBox.appendChild(img);
}

// Remove images from box
function clearImages() {
    //let sImgA = document.getElementsByClassName("sImgA");
    let imagesBox = document.getElementById("imagesBox");
    let sButton = document.querySelector("button");
    let childElementCount = imagesBox.childElementCount;
    let child = imagesBox.lastElementChild;
    while (child) {
        imagesBox.removeChild(child);
        child = imagesBox.lastElementChild;
    }
}

// Populates the random shapes
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

// Fills textbox with description of image to click
function getShapeToClick(level, chances, round) {
    getShape();
    const tText = document.querySelector('h3');
    tText.textContent = colorAndName;
}

// Start timer at beginning of game
function startTimer() {
    const startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
}

// Fills timer display digits
function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

// Stops timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Resets timer to 0 at beginning of game
function resetTimer(){
    clearInterval(timerInterval);
    print("00:00:000");
    elapsedTime = 0;
}

// Formats time to display properly
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