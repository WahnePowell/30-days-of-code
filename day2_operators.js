/*
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
*/
// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
	var tip = meal_cost * (tip_percent/100)
	var tax = meal_cost * (tax_percent/100)
	var totalCost =  meal_cost + tip + tax 
	
	console.log(Math.round(totalCost))
}

var meal_cost = 12.00
var tip_percent = 20
var tax_percent = 8
console.log(solve(meal_cost, tip_percent, tax_percent));

/*
function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
*/