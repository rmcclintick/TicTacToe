const gameArea = document.querySelector(".game-board");
const infoText = document.querySelector(".info-text");

const GameBoard = () => {
    //create game board
    const grid = [];
    for (let i = 0; i < 3; i++) {
        let row = []
        for (let j = 0; j < 3; j++) {
            let tile = Tile();
            gameArea.appendChild(tile.getElement());
            row.push(Tile())
        }
        grid.push(row);
    }

    const gameEnded = false;

    return {grid, gameEnded};
}

const Tile = () => {
    const isFilled = false;
    const contents = "";
    const getContents = () => contents;
    const getElement = () => {
        let element = document.createElement('div');
        element.classList.add('grid-space');
        element.classList.add('playable');
        return element;
    };

    return {isFilled, getContents, getElement};
}

const Player = (name) => {
    return {name};
};

const gameBoard = GameBoard();
const playerX = Player("X");
const playerY = Player("Y");

infoText.innerHTML = playerX.name + "'s Turn";