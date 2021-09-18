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
// Passed all 8(0 thru 7) Test cases
// 30 out of 30 total points 100%
function main() {
	const N = parseInt(readLine(), 10)
	//const N = 3
	
	if ( N % 2 == 1 || (N >= 6 && N <= 20)) {
		console.log('Weird')
	} else {console.log('Not Weird')} 
}

console.log(main())
/*
// Passed 6 out of 8 test cases 
// Passed cases 0, 1, 2, 4, 5, and 6
// Failed cases 3 and 7 only
// 20 out of 30 total points 
function main() {
    //const N = parseInt(readLine(), 10);
	const N = 3;
	
	if (N % 2 == 1){
		console.log('Weird')
	}
		
	if (N % 2 == 0){
		if (2 <= N <= 5) {console.log('Not Weird')}
		else if (6 <= N <= 20) {console.log('Not Weird')}
		else if (N > 20) {console.log('Not Weird')}
	}
}

console.log(main());
