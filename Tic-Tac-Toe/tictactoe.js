const playerFactory = (sign) => {
    const _sign = sign.toLowerCase();
    let _wins = 0;

    const getWins = () => _wins;
    const addWin = () => _wins++;
    const getSign = () => _sign;

    return {
        getWins,
        addWin,
        getSign,
    };
};

const gameboard = (() => {
    const _board = new Array(9);
    let _moveCount = 0;

    function getTile(num) {
        return _board[num];
    }

    // function checkWin() {
    //     const
    // }

    const setTile = (sign, num) => {
        const tile = document.querySelector(
            `.ttt-board div:nth-child(${num + 1})`
        );
        _board[num] = sign;
        _moveCount += 1;
        tile.textContent = sign;
    };

    function restart() {
        _moveCount = 0;
        for (let i = 0; i < 9; i++) {
            _board[i] = "";
            setTile("", i);
        }
    }

    const numMoves = () => _moveCount;

    return {
        setTile,
        getTile,
        numMoves,
        restart,
        // checkWin,
    };
})();

const gameController = (() => {
    const player1 = playerFactory("x");
    const player2 = playerFactory("o");

    const playerStep = (num) => {
        if (
            gameboard.getTile(num) === undefined ||
            gameboard.getTile(num) === ""
        ) {
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
    const ticTacToeBoard = document.querySelector(".ttt-board");
    const restartButton = document.querySelector(".restart");
    const tiles = document.querySelectorAll(".ttt-tile");

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
    };

    restartButton.addEventListener("click", resetBoard);
})();
