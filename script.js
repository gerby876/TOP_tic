const board = (function () {
    let gameboard = [[1,2,3], [4,5,6], [7,8,9]];
    let t=0;
    let gameend = 0;
    let active = 1;
    let score1 = 0;
    let score2 = 0;

    const turn = (a, b) => {
        change(a, b);
        t++;
        checkWin();
        if (gameend === 1) {
            display.winLose(active, document.getElementById("player1").textContent, document.getElementById("player2").textContent);
            return;
        };
        if(t==9) {
            display.draw();
        };
        nextPlayer();
    }

    const change = (a, b) => {
        if (active == 1) {
            gameboard[a][b] = "X";
        } else {
            gameboard[a][b] = "O";
        };
    };

    const checkWin = () => {
        // for (let i=0; i<3; i++) {
        //     for (let x=0; x<3; x++) {
        //         console.log(gameboard[i][x])
        //     };
        // };

        if(gameboard[0][0] == gameboard[0][1] && gameboard[0][0] == gameboard[0][2] ||
            gameboard[1][0] == gameboard[1][1] && gameboard[1][0] == gameboard[1][2] ||
            gameboard[2][0] == gameboard[2][1] && gameboard[2][0] == gameboard[2][2] ||
            gameboard[0][0] == gameboard[1][0] && gameboard[0][0] == gameboard[2][0] ||
            gameboard[0][1] == gameboard[1][1] && gameboard[0][1] == gameboard[2][1] ||
            gameboard[0][2] == gameboard[1][2] && gameboard[0][2] == gameboard[2][2] ||
            gameboard[0][0] == gameboard[1][1] && gameboard[0][0] == gameboard[2][2] ||
            gameboard[0][2] == gameboard[1][1] && gameboard[0][2] == gameboard[2][0] 
        ) {
            if (active == 1) {
                score1++;
            } else {
                score2++;
            }
            display.updateScore(score1, score2)
            gameend = 1;
        };
    };

    const nextPlayer = () => {
        if (active == 1) {
            active = 2;
        } else {
            active = 1;
        };
        return{active}
    };

    const newGame = () => {
        gameboard=[[1,2,3],[4,5,6],[7,8,9]];
        t=0;
        gameend=0;
        active=1;
    };

    const newMatch = () => {
        newGame();
        score1 = 0;
        score2 = 0;
        display.updateScore(score1, score2);
    };

    return {turn, newGame, newMatch, gameboard};
})();



const display = (function() {
    let gameend = 0;
    let active = 1;
    let start = 0;
    let name1 = ""
    let name2 = ""

    const players = document.querySelector(".players");
    const bgame = document.getElementsByClassName("game");
    const newGame = document.querySelector(".ngame");
    const newMatch = document.querySelector(".nmatch");
    const b1 = document.querySelector(".b1");
    const b2 = document.querySelector(".b2");
    const b3 = document.querySelector(".b3");
    const b4 = document.querySelector(".b4");
    const b5 = document.querySelector(".b5");
    const b6 = document.querySelector(".b6");
    const b7 = document.querySelector(".b7");
    const b8 = document.querySelector(".b8");
    const b9 = document.querySelector(".b9");;
    const s1 = document.querySelector("#score1")
    const s2 = document.querySelector("#score2");
    const p1 = document.querySelector("#p1");
    const p2 = document.querySelector("#p2");
    const player1 = document.querySelector("#player1");
    const player2 = document.querySelector("#player2");
    const vs = document.querySelector("#vs");
    
    const createPlayer = () => {
        if (p1 !== "") {
            name1 = p1.value;
        };
        if (p2 !== "") {
             name2 = p2.value;
        };
    };

    const updateDisplay = () => {
        if (name1 !== "") {
            player1.textContent = name1;
            p1.value = "";
        }
        if (name2 !== "") {
            player2.textContent = name2;
            p2.value = "";
        }

    };

    const updateScore = (score1, score2) => {
        s1.textContent = score1;
        s2.textContent = score2;
        if (score1 > 9) {
            s1.style.fontSize = "20em"
        };
        if (score2 > 9) {
            s2.style.fontSize = "20em"
        }
    };

    const winLose = (active, name1, name2) => {
        
        if (active == 1) {
            vs.textContent = name1 + " WINS!"
            vs.style.backgroundColor =" #D3AE36";
        } else {
            vs.textContent = name2 + " WINS!"
            vs.style.backgroundColor =" #A6A6A6";
        };
        vs.style.fontSize = "3em"
        gameend = 1;
    };

    const draw = () => {
        vs.textContent = "DRAW"
    }

    const clearBoard = () => {
        for (let i=0; i<bgame.length; i++) {
            bgame[i].textContent = ""
            bgame[i].removeAttribute("id");
        };
    }

    const setVs = () => {
        vs.textContent = "VS";
        vs.style.fontSize = "5em";
        vs.style.backgroundColor = "";
    }

    const scoreSize = () => {
        s1.style.fontSize = "30em";
        s2.style.fontSize = "30em";
    }

    const gameState = () => {
        active = 1;
        gameend = 0;
        start = 1;
    }

    const placeMarker = (button) => {
        if (active == 1) {
            button.textContent="X"
            active = 2
            button.id = "player1"
        } else {
            button.textContent="O"
            active = 1
            button.id = "player2"
        };
    }

    players.addEventListener("click", () => {
        createPlayer();
        updateDisplay();
        clearBoard();
        setVs();
        scoreSize();
        board.newMatch();
        gameState()
    });

    newGame.addEventListener("click", () => {
        board.newGame();
        clearBoard();
        setVs();
        gameState()
    });

    newMatch.addEventListener("click", () => {
        board.newMatch();
        clearBoard();
        setVs();
        scoreSize();
        gameState()
    })

    b1.addEventListener("click", () => {
        if (b1.textContent == "X" || b1.textContent == "O" || gameend == 1 || start == 0)
        {
            return
        };
        placeMarker(b1);
        board.turn(0,0);
    });
    
    b2.addEventListener("click", () => {
        if (b2.textContent == "X" || b2.textContent == "O" || gameend == 1 || start == 0)
            {
                return
            };
       placeMarker(b2);
        board.turn(0,1);
    });

    b3.addEventListener("click", () => {
        if (b3.textContent == "X" || b3.textContent == "O" || gameend == 1 || start == 0)
            {
                return
            };
        placeMarker(b3);
        board.turn(0,2);
    });

    b4.addEventListener("click", () => {
        if (b4.textContent == "X" || b4.textContent == "O" || gameend == 1 || start == 0) 
            {
                return
            };
        placeMarker(b4);
        board.turn(1,0);
    });

    b5.addEventListener("click", () => {
        if (b5.textContent == "X" || b5.textContent == "O" || gameend == 1 || start == 0)
            {
                return
            };
        placeMarker(b5);
        board.turn(1,1);
    });

    b6.addEventListener("click", () => {
        if (b6.textContent == "X" || b6.textContent == "O" || gameend == 1 || start == 0)
            {
                return
            };
        placeMarker(b6);
        board.turn(1,2);
    });

    b7.addEventListener("click", () => {
        if (b7.textContent == "X" || b7.textContent == "O" || gameend == 1 || start == 0)
            {
                return
            };
        placeMarker(b7);
        board.turn(2,0);
    });

    b8.addEventListener("click", () => {
        if (b8.textContent == "X" || b8.textContent == "O" || gameend == 1 || start == 0)
            {
                return
            };
        placeMarker(b8);
        board.turn(2,1);
    });

    b9.addEventListener("click", () => {
        if (b9.textContent == "X" || b9.textContent == "O" || gameend == 1 || start == 0)
            {
                return
            };
        placeMarker(b9);
        board.turn(2,2);
    });

    return {updateScore, winLose, draw}
})();
