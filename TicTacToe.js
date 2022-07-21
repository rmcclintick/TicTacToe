const gameArea = document.querySelector(".game-board");
const infoText = document.querySelector(".info-text");

let currentPlayer = {};

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

    const playerX = Player("X");
    const playerO = Player("O");
    const togglePlayer = () => {
        if (currentPlayer === playerX) {
            currentPlayer = playerO;
        }
        else {
            currentPlayer = playerX;
        }
        console.log(currentPlayer.name);
        infoText.innerHTML = currentPlayer.name + "'s Turn";
    };
    togglePlayer();

    

    return {grid, gameEnded, togglePlayer};
}

const Tile = () => {
    let isFilled = false;
    const contents = "";
    const getContents = () => contents;
    const getElement = () => {
        let element = document.createElement('div');
        element.classList.add('grid-space');
        element.classList.add('playable');
        element.addEventListener("click", function(){
            if(!isFilled)
            {
                element.innerHTML = currentPlayer.name;
                isFilled = true;
                element.classList.remove('playable');
                gameBoard.togglePlayer();
            }
        });
        return element;
    };

    return {isFilled, getContents, getElement};
}

const Player = (name) => {
    return {name};
};


const gameBoard = GameBoard();



