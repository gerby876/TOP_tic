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
            return
        };
        nextPlayer();
    }

    const change = (a, b) => {
        if (active == 1) {
            gameboard[a][b] = "X";
        } else {
            gameboard[a][b] = "O";
        };
        console.log(gameboard)
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
        gameboard=[[1,2,3],[4,5,6],[7,8,9]];
        t=0;
        gameend=0;
        active=1;
        score1 = 0
        score2 = 0
        display.updateScore(score1, score2)
    };

    return {turn, newGame, newMatch};
})();



const display = (function() {
    let active = 1;

    const createPlayer = () => {
        if (document.getElementById("p1") !== "") {
            name1 = document.getElementById("p1").value;
        };
        if (document.getElementById("p2") !== "") {
            name2 = document.getElementById("p2").value;
        };
        return {name1, name2};
    };

    const updateDisplay = () => {
        if (name1 !== "") {
            document.getElementById("player1").textContent = name1;
            document.getElementById("p1").value = "";
        }
        if (name2 !== "") {
            document.getElementById("player2").textContent = name2;
            document.getElementById("p2").value = "";
        }

    };

    const players = document.querySelector(".players");
    players.addEventListener("click", () => {
        createPlayer();
        updateDisplay();
        for (let i=0; i<bgame.length; i++) {
            bgame[i].textContent = ""
        };
        document.getElementById("vs").textContent = "VS"
        board.newMatch();
    });

    const bgame = document.getElementsByClassName("game");

    const newGame = document.querySelector(".ngame");
    newGame.addEventListener("click", () => {
        board.newGame();
        for (let i=0; i<bgame.length; i++) {
            bgame[i].textContent = ""
        };
        document.getElementById("vs").textContent = "VS"
        active = 1;
    });

    const newMatch = document.querySelector(".nmatch");
    newMatch.addEventListener("click", () => {
        board.newMatch();
        for (let i=0; i<bgame.length; i++) {
            bgame[i].textContent = ""
        }
        document.getElementById("vs").textContent = "VS"
        active = 1;
    })

    const b1 = document.querySelector(".b1");
    b1.addEventListener("click", () => {
        if (b1.textContent == "X" || b1.textContent == "O")
        {
            return
        };
        if (active == 1) {
            b1.textContent="X"
            active = 2
        } else {
            b1.textContent="O"
            active = 1
        };
        board.turn(0,0);
    });
    
    const b2 = document.querySelector(".b2");
    b2.addEventListener("click", () => {
        if (b2.textContent == "X" || b2.textContent == "O")
            {
                return
            };
        if (active == 1) {
            b2.textContent="X"
            active = 2
        } else {
            b2.textContent="O"
            active = 1
        };
        board.turn(0,1);
    });

    const b3 = document.querySelector(".b3");
    b3.addEventListener("click", () => {
        if (b3.textContent == "X" || b3.textContent == "O")
            {
                return
            };
        if (active == 1) {
            b3.textContent="X"
            active = 2
        } else {
            b3.textContent="O"
            active = 1
        };
        board.turn(0,2);
    });

    const b4 = document.querySelector(".b4");
    b4.addEventListener("click", () => {
        if (b4.textContent == "X" || b4.textContent == "O")
            {
                return
            };
        if (active == 1) {
            b4.textContent="X"
            active = 2
        } else {
            b4.textContent="O"
            active = 1
        };
        board.turn(1,0);
    });

    const b5 = document.querySelector(".b5");
    b5.addEventListener("click", () => {
        if (b5.textContent == "X" || b5.textContent == "O")
            {
                return
            };
        if (active == 1) {
            b5.textContent="X"
            active = 2
        } else {
            b5.textContent="O"
            active = 1
        };
        board.turn(1,1);
    });

    const b6 = document.querySelector(".b6");
    b6.addEventListener("click", () => {
        if (b6.textContent == "X" || b6.textContent == "O")
            {
                return
            };
        if (active == 1) {
            b6.textContent="X"
            active = 2
        } else {
            b6.textContent="O"
            active = 1
        };
        board.turn(1,2);
    });

    const b7 = document.querySelector(".b7");
    b7.addEventListener("click", () => {
        if (b7.textContent == "X" || b7.textContent == "O")
            {
                return
            };
        if (active == 1) {
            b7.textContent="X"
            active = 2
        } else {
            b7.textContent="O"
            active = 1
        };
        board.turn(2,0);
    });

    const b8 = document.querySelector(".b8");
    b8.addEventListener("click", () => {
        if (b8.textContent == "X" || b8.textContent == "O")
            {
                return
            };
        if (active == 1) {
            b8.textContent="X"
            active = 2
        } else {
            b8.textContent="O"
            active = 1
        };
        board.turn(2,1);
    });

    const b9 = document.querySelector(".b9");
    b9.addEventListener("click", () => {
        if (b9.textContent == "X" || b9.textContent == "O")
            {
                return
            };
        if (active == 1) {
            b9.textContent="X"
            active = 2
        } else {
            b9.textContent="O"
            active = 1
        };
        board.turn(2,2);
    });

    const updateScore = (score1, score2) => {
        const s1 = document.getElementById("score1")
        const s2 = document.getElementById("score2")
        s1.textContent = score1;
        s2.textContent = score2;
    }

    const winLose = (active, name1, name2) => {
        const vs = document.querySelector("#vs");
        if (active == 1) {
            vs.textContent = name1 + " WINS!"
        } else {
            vs.textContent = name2 + " WINS!"
        }
    }

    return {updateScore, winLose}
})();


