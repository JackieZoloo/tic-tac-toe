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
    boards.forEach(board => board.innerHTML = "");
})



const boards = document.querySelectorAll(".square");

squares.forEach(board => {
    board.addEventListener('click', function(){
        if(player === playerFirst) {
            board.innerHTML = playerFirst;
            player = playerSecond;
        } else if (player === playerSecond) {
            board.innerHTML = playerSecond;
            player = playerFirst;
        }
    })
  })
//   function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
// var player_one = 1;
// function display_input(square){ 
//     if ( player_one == 1 ){
//         document.getElementById(square).innerHTML = "X";
//         player_one = 0;
//     } else {
//         document.getElementById(square).innerHTML = "O";    
//         player_one = 1;
//     }   
// }