"use strict";
/*******************************************************
 *     tictactoe.js - 50p.
 *
 *     When you fought Dr. DOM today, to me it looked like two super heroes playing
 *     TIC TAC TOE! At times, it was hard to tell, who would have won which fight...
 *
 *     To solve my misfortune, please write a little program, that takes a (hard-coded)
 *     two-dimensional Array (BATTLEFIELD) and checks if one of the two opponents has
 *     won the battle, and if so, how (vertical, horizontal, main-diagonal, anti-diagonal).
 *
 *     Since you have already had a couple of encounters of different severities, I simply
 *     can't translate all your battles to TIC TAC TOE matches of the same size.
 *     For that reason, your little program should be written in a way, that it can
 *     scale with the size of the battlefield (3x3, 4x4, ..., nxn).
 *
 *     Bratlsoft - 2026-03-15
 *******************************************************/

const X = "Savior (X)";
const O = "Dr. DOM (O)";

//Some of your epic battles:
/*const BATTLEFIELD =
    [
        [O, X, O],
        [X, X, X],
        [O, O, X],
    ];*/

// const BATTLEFIELD =
//     [
//         [null, X, X],
//         [X, O, null],
//         [O, O, O],
//     ];
// const BATTLEFIELD =
//     [
//         [O, O, X],
//         [X, O, X],
//         [O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X],
//         [X, O, X],
//         [O, X, O],
//     ];
//
// const BATTLEFIELD =
//     [
//         [O, X, X, X],
//         [X, O, X, O],
//         [O, X, O, X],
//         [X, O, X, X],
//     ];
// const BATTLEFIELD =
//     [
//         [O, X, X, X, null],
//         [X, O, X, O, O],
//         [O, X, O, null,  X],
//         [X, null, X, O, O],
//         [X, null, O, X, O],
//     ];

//TODO: Check if the battle is over, and if so, announce the winner!

// Check Horizontal
// Check Vertical
// Check Main Diagonal
// Check Anti Diagonal


let n = BATTLEFIELD.length;
let winner = null;


//Horizontal

for (let i = 0; i < n; i++) {
    let counter_x = 0;
    let counter_o = 0;

    for (let j = 0; j < n; j++) {
        if (BATTLEFIELD[i][j] === X) counter_x++;
        if (BATTLEFIELD[i][j] === O) counter_o++;
    }

    if (counter_x === n) winner = "Savior wins (horizontal)!";
    if (counter_o === n) winner = "Dr. DOM wins (horizontal)!";
}


//Vertical
for (let j = 0; j < n; j++) {
    let counter_x = 0;
    let counter_o = 0;

    for (let i = 0; i < n; i++) {
        if (BATTLEFIELD[i][j] === X) counter_x++;
        if (BATTLEFIELD[i][j] === O) counter_o++;
    }

    if (counter_x === n) winner = "Savior wins (vertical)!";
    if (counter_o === n) winner = "Dr. DOM wins (vertical)!";
}


//Main Diagonal
let counter_x = 0;
let counter_o = 0;
for (let i = 0; i < n; i++) {
    if (BATTLEFIELD[i][i] === X) counter_x++;
    if (BATTLEFIELD[i][i] === O) counter_o++;
}
if (counter_x === n) winner = "Savior wins (main diagonal)!";
if (counter_o === n) winner = "Dr. DOM wins (main diagonal)!";


//Anti Diagonal
counter_x = 0;
counter_o = 0;
for (let i = 0; i < n; i++) {
    if (BATTLEFIELD[i][n - 1 - i] === X) counter_x++;
    if (BATTLEFIELD[i][n - 1 - i] === O) counter_o++;
}
if (counter_x === n) winner = "Savior wins (anti diagonal)!";
if (counter_o === n) winner = "Dr. DOM wins (anti diagonal)!";


if (winner) {
    console.log(winner);
} else {
    console.log("No winner yet!");
}


