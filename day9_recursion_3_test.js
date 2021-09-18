'use strict';

const fs = require('fs');

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

// Complete the factorial function below.

function factorial(n) {
	return (n > 1 ? n * factorial(n - 1) : n)
}

/*
function factorial(n) {
	return n == 1 ? 1 : n * factorial(n - 1)
}
*/
/*
function factorial(n) {
	console.log(n)
	return n != 1 ? n * factorial(n - 1) : 1
}
*/
/*
function factorial(n) {
	const factorial = n => n > 1 ? n * factorial(--n) : 1
	return factorial
}
*/
/*
function factorial(n) {
	if(n == 1){
		return n
	}else{
		return n * factorial(n - 1)
	}
}
*/
console.log(factorial(5))


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = factorial(n);

    ws.write(result + "\n");

    ws.end();
}
