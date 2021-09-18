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

function main() {
    //const n = parseInt(readLine(), 10);
	//const n = 5;
	const n = 13;
	
	// to give an array of 1s
	console.log(n.toString(2))
	var BiArOfSubstrings = n.toString(2).split('0');
	//console.log(typeof BiArrOfSubstrings)
    var max = Math.max(...BiArOfSubstrings);
    console.log(max.toString().length);
}

/*
function main() {
    //const n = parseInt(readLine());
	//const n = 5;
	const n = 13;
	
    console.log(n.toString(2).split('0').sort((a, b) => a < b)[0].length)
}
*/
console.log(main())