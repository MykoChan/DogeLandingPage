const playerFactory = (sign) => {
    const _sign = sign.toLowerCase();
    let _wins = 0;

    const getWins = () => _wins;
    const addWin = () => _wins++;
    const getSign = () => _sign;
    // const setSign = (s) => {
    //     _sign = s;
    // };

    return {
        getWins,
        addWin,
        getSign,
        // setSign,
    };
};

const gameboard = (() => {
    const _board = new Array(9);
    let _moveCount = 0;

    function getTile(num) {
        return _board[num];
    }

    const setTile = (sign, num) => {
        const tile = document.querySelector(
            `.ttt-board button:nth-child(${num + 1})`
        );
        _board[num] = sign;
        _moveCount += 1;
        tile.textContent = sign;
    };

    const numMoves = () => _moveCount;

    return {
        setTile,
        getTile,
        numMoves,
    };
})();

const gameController = (() => {
    const player1 = playerFactory("x");
    const player2 = playerFactory("o");

    const playerStep = (num) => {
        if (gameboard.getTile(num) === undefined) {
            if (gameboard.numMoves() % 2 === 0) {
                gameboard.setTile(player1.getSign(), num);
            } else {
                gameboard.setTile(player2.getSign(), num);
            }
        }
    };
    return { playerStep };
})();

const displayController = (() => {
    // const ticTacToeTiles = document.querySelectorAll(".ttt-tile");

    const ticTacToeBoard = document.querySelector(".ttt-board");
    // const restartButton = document.querySelector(".restart");

    const _setupBoard = (() => {
        for (let i = 0; i < 9; i++) {
            const ticTacToeTile = document.createElement("button");
            ticTacToeTile.classList.add("ttt-tile");
            ticTacToeTile.classList.add(`ttt-tile-${i}`);
            // ticTacToeTile.textContent = i;

            // Add borders to draw tic tac toe board
            if ([0, 1, 3, 4, 6, 7].includes(i)) {
                ticTacToeTile.classList.add("border-right");
            }

            if ([0, 1, 2, 3, 4, 5].includes(i)) {
                ticTacToeTile.classList.add("border-bottom");
            }

            ticTacToeTile.addEventListener(
                "click",
                gameController.playerStep.bind(ticTacToeTile, i)
            );
            ticTacToeBoard.appendChild(ticTacToeTile);
        }
    })();

    // function resetBoard() {
    //     ticTacToeBoard.innerText = "";

    // }

    // restartButton.addEventListener("click", resetBoard());
})();
