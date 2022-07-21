const gameArea = document.querySelector(".game-board");

const GameBoard = () => {
    const grid = [];
    for (let i = 0; i < 3; i++) {
        let row = []
        for (let j = 0; j < 3; j++) {
            let tile = Tile();
            gameArea.appendChild(tile.getElement());
            console.log("create");
            row.push(Tile())
        }
        grid.push(row);
    }

    return {grid};
}

const Tile = () => {
    const isFilled = false;
    const contents = "";
    const getContents = () => contents;
    const getElement = () => {
        let element = document.createElement('div');
        element.classList.add('grid-space');
        return element;
    };

    return {isFilled, getContents, getElement};
}

const gameBoard = GameBoard();
console.log(gameBoard);