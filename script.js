const board = (function () {
    let gameboard = [[1,2,3], [4,5,6], [7,8,9]];
    t=0;
    gameend = 0;
    active = 1;
    score1 = 0;
    score2 = 0;

    const turn = (a, b) => {
        change(a, b);
        t++;
        checkWin();
        if (gameend === 1) {
            return;
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
            gameend = 1;
            console.log(score1);
            console.log(score2);
            return(gameend);
        };
    };

    const nextPlayer = () => {
        if (active == 1) {
            active = 2;
        } else {
            active = 1;
        };
    }

    return {gameboard, turn};
})();

function createPlayer (name, num) {
    const playerNumber = "Player " + num;
    return {name, playerNumber};
};

const me = createPlayer ("Me", "1");
const dog = createPlayer ("Roma", "2");

console.log(me)
console.log(dog)


board.turn(0, 2)
board.turn(1, 2)
board.turn(2, 0)
board.turn(1, 0)
board.turn(1, 1)

console.log(board.gameboard)

