const playerTwo = document.getElementById("playerTwo");
const playerOne = document.getElementById("playerOne");
const reset = document.getElementById("reset");
const winner = document.getElementById("winner");



const squares = Array.from(document.querySelectorAll('.square'));


let playerFirst = "o";
let playerSecond = "x";
let moves = 0;
let divs = [
    null, null, null,
    null, null, null,
    null, null, null
]


let player
playerTwo.addEventListener("click", function(){
    player = playerSecond;
})
playerOne.addEventListener("click", function(){
    player = playerFirst;
})

reset.addEventListener("click", function(){
    squares.forEach(board => board.innerHTML = "");
     divs = [
        null, null, null,
        null, null, null,
        null, null, null
    ]
})




squares.forEach(function(square, index){
    square.addEventListener('click', function() {
        if(!square.innerHTML)  {
            if(player === playerFirst)  {
                square.innerHTML = playerFirst;
                player = playerSecond;
                divs[square.id]= 1;
                checkWinner();
                
            } else if (player === playerSecond) {
                square.innerHTML = playerSecond;
                player = playerFirst;
                divs[square.id] = -1;
                console.log(divs);
                checkWinner();
            
        }
        }  
        
    })
  })
function checkWinner() {
    winningCombos.forEach(function(array){
        // console.log(array);
        // console.log(divs);
        if(divs[array[0]] !== null && divs[array[1]] !== null && divs[array[2]] !== null){
            if(divs[array[0]] === divs[array[1]] && divs[array[1]] === divs[array[2]] ) {
                if(player === playerFirst) {
                    winner.innerHTML = "X wins";
                } else {
                    winner.innerHTML = "O wins";
                }
            }

        }

       
    })

    

}
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
