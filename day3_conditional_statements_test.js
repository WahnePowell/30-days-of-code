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
/*
function main() {
    //const N = parseInt(readLine(), 10);
	const N = 24;
	console.log(N);
	
	if (N % 2 == 1){
		console.log('Weird')
	}
		
	if (N % 2 == 0){
		if (2 <= N <= 5) {console.log('Not Weird')}
		else if (6 <= N <= 20) {console.log('Not Weird')}
		else if (N > 20) {console.log('Not Weird')}
		//else {console.log('Input not within constraints, try again!')}
	}
	
	return '' 
}

console.log(main());
*/
/*
function isOdd(n) {
	console.log(n % 2 == 1)
    return n % 2 == 1
}

function between(low, n, high) {
	console.log(low <= n && n <= high)
    return low <= n && n <= high
}

function main() {
    //const N = parseInt(readLine(), 10)
	const n = 24

    console.log(isOdd(n) || between(6, n, 20) ? "Weird" : "Not Weird")
}

console.log(main())
*/


function main() {
	//const N = parseInt(readLine(), 10)
	const N = 3
	
	if ( N % 2 == 1 || (N >= 6 && N <= 20)) {
		console.log('Weird')
	} else {console.log('Not Weird')} 
}

console.log(main())












