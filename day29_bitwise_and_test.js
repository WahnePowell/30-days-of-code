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
    //const t = parseInt(readLine(), 10);
	const t = 3
	
	let str = '3\n5 2\n8 5\n2 2'
	//console.log(str)
	let arr = str.replace(/\s|\n/g, '').substring(1, 7).split('')
	//console.log(arr) 
	
    for (let i = 0; i < t; i++) {
        //const nk = readLine().split(' ');
		
		//let arr2 = arr.slice(0, 2)
		//console.log(arr2)
		/*for(let j = 0; j < t; j += 2){*/
		//const nk = arr.slice((j), (j + 2)) 
		const nk = arr.slice(0, 2)
		//console.log(nk) 
		//console.log(i)		
        const n = parseInt(nk[0], 10);
		//const n = nk[0]
		//console.log('n type: ' + typeof(n) + ' and n value: ' + n)
		//console.log('n: ' + n)	
        const k = parseInt(nk[1], 10);
		//const k = nk[1]
		//console.log('k: ' + k)	
		let a = k - 1
		//console.log('a: ' + a)	
		//console.log('~a: ' + ~a) 
		//console.log('-(~a): ' + -(~a))	
        let b = (~a) & -(~a)
		//console.log('b: ' + b)
		//console.log('(a | b): ' + (a | b)) 
        console.log((a | b) > n ? a - 1 : a)
		
		
		//let arr3 = arr.slice(2, 4)
		//console.log(arr3)
		const nk2 = arr.slice(2, 4)		
        const n2 = parseInt(nk2[0], 10);
        const k2 = parseInt(nk2[1], 10);
		let a2 = k2 - 1
        let b2 = (~a2) & -(~a2)
        console.log((a2 | b2) > n2 ? a2 - 1 : a2)
		
		//let arr4 = arr.slice(4, 6)
		//console.log(arr4)
		const nk3 = arr.slice(4, 6)		
        const n3 = parseInt(nk3[0], 10);
        const k3 = parseInt(nk3[1], 10);
		let a3 = k3 - 1
        let b3 = (~a3) & -(~a3)
        console.log((a3 | b3) > n3 ? a - 1 : a3) 
		
		/*}*/
    }
}
main()