const board = (function () {
    let gameboard = [[1,2,3], [4,5,6], [7,8,9]];

    const turn = (a, b, marker) => {
        change(a, b, marker);
        checkWin()
    }

    const change = (a, b, marker) => {
        if (marker == "X") {
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
            alert("You win")
        };
    };

    return {gameboard, turn};
})();

function createPlayer (name, num) {
    const playerNumber = "Player " + num;
    let marker = "";
    const checkMarker = (function(num) {
        if (num == 1) {
            marker = "X";
        } else {
            marker = "O";
        }
    })(num);
    return {name, playerNumber, marker};
};

const me = createPlayer ("Me", "1");
const dog = createPlayer ("Roma", "2");

console.log(me)
console.log(dog)


board.turn(0, 2, me.marker)
board.turn(1, 1, me.marker)
board.turn(2, 0, me.marker)

console.log(board.gameboard)

