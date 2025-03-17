const board = (function () {
    let gameboard = [[0,0,0], [0,0,0], [0,0,0]];
    
    const change = (a, b, marker) => {
        if (marker == "X") {
            gameboard[a][b] = "X"
        } else {
            gameboard[a][b] = "O"
        }
    }

    return {gameboard, change};
})();

function createPlayer (name, num) {
    const playerNumber = "Player " + num;
    let marker = "";
    const checkMarker = (function(num) {
        if (num == 1) {
            marker = "X"
        } else {
            marker = "O";
        }
    })(num);
    return {name, playerNumber, marker}
}

const me = createPlayer ("Me", "1")
const dog = createPlayer ("Roma", "2")

console.log(me)
console.log(dog)

board.change(2, 1, me.marker)
board.change(2, 2, dog.marker)

console.log(board.gameboard)
console.log(board.gameboard[2])
console.log(board.gameboard[2][1])
