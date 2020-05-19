const playerTwo = document.getElementById("playerTwo");
const playerOne = document.getElementById("playerOne");
const reset = document.getElementById("reset");
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
const squares = Array.from(document.querySelectorAll('.square'));


let playerFirst = "o";
let playerSecond = "x";
let moves = 0;


let player
playerTwo.addEventListener("click", function(){
    player = playerSecond;
})
playerOne.addEventListener("click", function(){
    player = playerFirst;
})

reset.addEventListener("click", function(){
    squares.forEach(board => board.innerHTML = "");
})
const divs = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]



squares.forEach(function(square, index){
    square.addEventListener('click', function(){
            let numbers = square.id.split("");
            let indexOne = Number(numbers[0]);
            let indexTwo = Number(numbers[1]);
            console.log(indexOne, indexTwo);
        if(player === playerFirst) {
            square.innerHTML = playerFirst;
            player = playerSecond;
            divs[indexOne][indexTwo] = 1;
            console.log(divs);
        } else if (player === playerSecond) {
            square.innerHTML = playerSecond;
            player = playerFirst;
            divs[indexOne][indexTwo] = -1;
            console.log(divs);
        }
    })
  })
 