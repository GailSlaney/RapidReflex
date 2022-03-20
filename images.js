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
        image: 'images/orangeSquare.png',
        name: 'Square',
        color: 'Orange'
    },
    {
        id: 5,
        image: 'images/blackSquare.png',
        name: 'Square',
        color: 'Black'
    },
    {
        id: 6,
        image: 'images/pinkSquare.png',
        name: 'Square',
        color: 'Pink'
    },
    {
        id: 7,
        image: 'images/blueTriangle.png',
        name: 'Triangle',
        color: 'Blue'
    },
    {
        id: 8,
        image: 'images/greenTriangle.png',
        name: 'Triangle',
        color: 'Green'
    },
    {
        id: 9,
        image: 'images/redTriangle.png',
        name: 'Triangle',
        color: 'Red'
    },
    {
        id: 10,
        image: 'images/yellowTriangle.png',
        name: 'Triangle',
        color: 'Yellow'
    },
    {
        id: 11,
        image: 'images/orangeTriangle.png',
        name: 'Triangle',
        color: 'Orange'
    },
    {
        id: 12,
        image: 'images/blackTriangle.png',
        name: 'Triangle',
        color: 'Black'
    },
    {
        id: 13,
        image: 'images/pinkTriangle.png',
        name: 'Triangle',
        color: 'Pink'
    },
    {
        id: 14,
        image: 'images/blueCircle.png',
        name: 'Circle',
        color: 'Blue'
    },
    {
        id: 15,
        image: 'images/greenCircle.png',
        name: 'Circle',
        color: 'Green'
    },
    {
        id: 16,
        image: 'images/redCircle.png',
        name: 'Circle',
        color: 'Red'
    },
    {
        id: 17,
        image: 'images/yellowCircle.png',
        name: 'Circle',
        color: 'Yellow'
    },
    {
        id: 18,
        image: 'images/orangeCircle.png',
        name: 'Circle',
        color: 'Orange'
    },
    {
        id: 19,
        image: 'images/blackCircle.png',
        name: 'Circle',
        color: 'Black'
    },
    {
        id: 20,
        image: 'images/pinkCircle.png',
        name: 'Circle',
        color: 'Pink'
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
        image: 'images/pinkOctagon.png',
        name: 'Octagon',
        color: 'Pink'
    },
    {
        id: 7,
        image: 'images/blackHexagon.png',
        name: 'Hexagon',
        color: 'Black'
    },
    {
        id: 8,
        image: 'images/blueHexagon.png',
        name: 'Hexagon',
        color: 'Blue'
    },
    {
        id: 9,
        image: 'images/greenHexagon.png',
        name: 'Hexagon',
        color: 'Green'
    },
    {
        id: 10,
        image: 'images/orangeHexagon.png',
        name: 'Hexagon',
        color: 'Orange'
    },
    {
        id: 11,
        image: 'images/redHexagon.png',
        name: 'Hexagon',
        color: 'Red'
    },
    {
        id: 12,
        image: 'images/yellowHexagon.png',
        name: 'Hexagon',
        color: 'Yellow'
    },
    {
        id: 13,
        image: 'images/pinkHexagon.png',
        name: 'Hexagon',
        color: 'Pink'
    },
    {
        id: 14,
        image: 'images/yellowPentagon.png',
        name: 'Pentagon',
        color: 'Yellow'
    },
    {
        id: 15,
        image: 'images/bluePentagon.png',
        name: 'Pentagon',
        color: 'Blue'
    },
    {
        id: 16,
        image: 'images/greenPentagon.png',
        name: 'Pentagon',
        color: 'Green'
    },
    {
        id: 17,
        image: 'images/orangePentagon.png',
        name: 'Pentagon',
        color: 'Orange'
    },
    {
        id: 18,
        image: 'images/redPentagon.png',
        name: 'Pentagon',
        color: 'Red'
    },
    {
        id: 19,
        image: 'images/blackPentagon.png',
        name: 'Pentagon',
        color: 'Black'
    },
    {
        id: 20,
        image: 'images/pinkPentagon.png',
        name: 'Pentagon',
        color: 'Pink'
    },
    {
        id: 21,
        image: 'images/blueHeptagon.png',
        name: 'Heptagon',
        color: 'Blue'
    },
    {
        id: 22,
        image: 'images/greenHeptagon.png',
        name: 'Heptagon',
        color: 'Green'
    },
    {
        id: 23,
        image: 'images/orangeHeptagon.png',
        name: 'Heptagon',
        color: 'Orange'
    },
    {
        id: 24,
        image: 'images/redHeptagon.png',
        name: 'Heptagon',
        color: 'Red'
    },
    {
        id: 25,
        image: 'images/yellowHeptagon.png',
        name: 'Heptagon',
        color: 'Yellow'
    },
    {
        id: 26,
        image: 'images/blackHeptagon.png',
        name: 'Heptagon',
        color: 'Black'
    },
    {
        id: 27,
        image: 'images/blueHeptagon.png',
        name: 'Heptagon',
        color: 'Blue'
    },
    {
        id: 28,
        image: 'images/blueTrapezoid.png',
        name: 'Trapezoid',
        color: 'Blue'
    },
    {
        id: 29,
        image: 'images/greenTrapezoid.png',
        name: 'Trapezoid',
        color: 'Green'
    },
    {
        id: 30,
        image: 'images/orangeTrapezoid.png',
        name: 'Trapezoid',
        color: 'Orange'
    },
    {
        id: 31,
        image: 'images/redTrapezoid.png',
        name: 'Trapezoid',
        color: 'Red'
    },
    {
        id: 32,
        image: 'images/yellowTrapezoid.png',
        name: 'Trapezoid',
        color: 'Yellow'
    },
    {
        id: 33,
        image: 'images/blackTrapezoid.png',
        name: 'Trapezoid',
        color: 'Black'
    },
    {
        id: 34,
        image: 'images/pinkTrapezoid.png',
        name: 'Trapezoid',
        color: 'Pink'
    },
    {
        id: 35,
        image: 'images/greenNonagon.png',
        name: 'Nonagon',
        color: 'Green'
    },
    {
        id: 36,
        image: 'images/orangeNonagon.png',
        name: 'Nonagon',
        color: 'Orange'
    },
    {
        id: 37,
        image: 'images/yellowNonagon.png',
        name: 'Nonagon',
        color: 'Yellow'
    },
    {
        id: 38,
        image: 'images/greenDecagon.png',
        name: 'Decagon',
        color: 'Green'
    },
    {
        id: 39,
        image: 'images/orangeDecagon.png',
        name: 'Decagon',
        color: 'Orange'
    },
    {
        id: 40,
        image: 'images/yellowDecagon.png',
        name: 'Decagon',
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
        image: 'images/javascriptComment.png',
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
        image: 'images/blackNonagon.png',
        name: 'Nonagon',
        color: 'Black'
    },
    {
        id: 9,
        image: 'images/blueNonagon.png',
        name: 'Nonagon',
        color: 'Blue'
    },
    {
        id: 10,
        image: 'images/pinkDecagon.png',
        name: 'Decagon',
        color: 'Pink'
    },
    {
        id: 11,
        image: 'images/redDecagon.png',
        name: 'Decagon',
        color: 'Red'
    },
    {
        id: 12,
        image: 'images/blueDecagon.png',
        name: 'Decagon',
        color: 'Blue'
    },
    {
        id: 13,
        image: 'images/blackDecagon.png',
        name: 'Decagon',
        color: 'Black'
    }
];