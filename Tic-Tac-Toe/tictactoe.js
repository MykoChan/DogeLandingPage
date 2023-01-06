// TODOs
// Make use of player factory
// Add player names
// Use player objects to keep track of win/loss record
// Move controller logic out of playerStep and into displayController
// Add AI/bot option
// Add different bot difficulties

// const playerFactory = (sign) => {
//     const _sign = sign.toLowerCase();
//     let _wins = 0;

//     const getWins = () => _wins;
//     const addWin = () => _wins++;
//     const getSign = () => _sign;

//     return {
//         getWins,
//         addWin,
//         getSign,
//     };
// };

const gameboard = (() => {
    const _board = new Array(9);
    let _moveCount = 0;

    const getMoveCount = () => _moveCount;

    const getTile = (num) => _board[num];

    const getCurrentPlayerSign = () => (_moveCount % 2 === 0 ? "X" : "O");

    const incrementMoves = () => {
        _moveCount += 1;
    };

    const checkWin = (index, sign) => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        return winConditions
            .filter((applicableWinningCombinations) =>
                applicableWinningCombinations.includes(index)
            )
            .some((possibleWinningCombinations) =>
                possibleWinningCombinations.every(
                    (tileIndex) => _board[tileIndex] === sign
                )
            );
    };

    const setTile = (sign, num) => {
        const tile = document.querySelector(
            `.ttt-board div:nth-child(${num + 1})`
        );
        _board[num] = sign;
        tile.textContent = sign;
    };

    function restart() {
        for (let i = 0; i < 9; i++) {
            _board[i] = "";
            setTile("", i);
        }
        _moveCount = 0;
        displayController.updateStatus("Player X's turn");
    }

    return {
        setTile,
        getTile,
        getMoveCount,
        getCurrentPlayerSign,
        restart,
        checkWin,
        incrementMoves,
    };
})();

const gameController = (() => {
    // const player1 = playerFactory("x");
    // const player2 = playerFactory("o");

    let _gameOver = false;

    const playerStep = (num) => {
        if (_gameOver) return;
        if (
            gameboard.getTile(num) === undefined ||
            gameboard.getTile(num) === ""
        ) {
            gameboard.setTile(gameboard.getCurrentPlayerSign(), num);
            if (gameboard.checkWin(num, gameboard.getCurrentPlayerSign())) {
                _gameOver = true;
                displayController.updateStatus(
                    `Player ${gameboard.getCurrentPlayerSign()} wins!`
                );
            } else {
                gameboard.incrementMoves();
                if (gameboard.getMoveCount() >= 9) {
                    displayController.updateStatus("Tie game!");
                } else {
                    displayController.updateStatus(
                        `Player ${gameboard.getCurrentPlayerSign()}'s turn`
                    );
                }
            }
        }
    };

    const reset = () => {
        _gameOver = false;
    };

    return {
        playerStep,
        reset,
    };
})();

const displayController = (() => {
    const ticTacToeBoard = document.querySelector(".ttt-board");
    const restartButton = document.querySelector(".restart");
    const tiles = document.querySelectorAll(".ttt-tile");
    const gameStatus = document.querySelector(".game-status");

    tiles.forEach((tile) => {
        const index = parseInt(tile.attributes["data-index"].value, 10);
        if ([0, 1, 3, 4, 6, 7].includes(index)) {
            tile.classList.add("border-right");
        }

        if ([0, 1, 2, 3, 4, 5].includes(index)) {
            tile.classList.add("border-bottom");
        }

        tile.addEventListener(
            "click",
            gameController.playerStep.bind(tile, index)
        );

        ticTacToeBoard.appendChild(tile);
    });

    const resetBoard = function () {
        gameboard.restart();
        gameController.reset();
    };

    const updateStatus = (statusString) => {
        gameStatus.textContent = statusString;
    };

    restartButton.addEventListener("click", resetBoard);

    return { updateStatus };
})();
