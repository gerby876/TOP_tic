const board = (function () {
    let gameboard = [[0,0,0], [0,0,0], [0,0,0]];

    //Add turn function here that runs change and check win before changing the players turn.  This is what will make the game function.

    const change = (a, b, marker) => {
        if (marker == "X") {
            gameboard[a][b] = "X";
        } else {
            gameboard[a][b] = "O";
        };
        console.log(gameboard);
    };

    //Add check win function to look for all three in a rows

    return {gameboard, change};
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

board.change(2, 1, me.marker)
board.change(2, 2, dog.marker)

