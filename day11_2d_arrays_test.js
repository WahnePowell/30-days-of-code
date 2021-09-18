
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

/*
function main() {
    var arr = [];
    for(let arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
 
    //setting highestSum initially to -63 because that is lowest 
	//possible outcome for hourglass.
    //-9 -9 -9
    //   -9
    //-9 -9 -9
    // = -63
    var highestSum = -63;
    var tempSum = 0;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {           
            tempSum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if(tempSum > highestSum) {
                highestSum = tempSum;           
            }
        }
    }
    
    console.log(highestSum);
}
console.log(main())
*/
/*
function main() {
    let arr = [];
    for(let arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    
    let total = -63;
    for (let i=0; i < arr.length-2; i++) {
        for (let j=0, curSum = 0; j < arr[i].length-2; j++) {
            curSum = arr[i][j] + 
                     arr[i][j+1] + 
                     arr[i][j+2] + 
                     arr[i+1][j+1] + 
                     arr[i+2][j] + 
                     arr[i+2][j+1] + 
                     arr[i+2][j+2];
            if (curSum > total) total = curSum;
        }
    }
    console.log(total);
}
console.log(main())
*/
/*
function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    let arrs = []
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let row1 = arr[i].slice(j, j + 3)
            let row2 = arr[i + 1].slice(j, j + 3)
            let row3 = arr[i + 2].slice(j, j + 3)
            row2.shift();
            row2.pop();
            arrs.push([...row1, ...row2, ...row3].reduce((a, b) => a + b))
        }
    }
    let resArr = arrs.sort((a, b) => a - b)
    console.log(resArr[resArr.length - 1])
}
console.log(main())
*/

function main() {
	let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let max = -63;//-9 < A[i][j] < 9;
	
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                                  arr[i + 1][j + 1] +
                      arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
					  
					  if (sum > max) max = sum;
            }
        }
		console.log(max);
}
console.log(main())

/*
function arrSum(arr) {
    let results = []; // array with all the sum
    let sum = 0;
    let filas = 0, columnas = 0, vecesFilas = 3, vecesColumnas = 3;
    for (let z = 0; z < 16; z++){

    for (let i = filas; i < vecesFilas; i++){
        for (let j = columnas; j < vecesColumnas; j++){                                          // conditionals for not add the second file positions
            if (i == (filas + 1) && j == columnas) sum + 0; 
            else if(i == (filas + 1) && j == (columnas + 2)) sum + 0;
            else sum += arr[i][j];
            
        }
    }
        results.push(sum); // add sum
        sum = 0; // set to zero for the next iteration
        columnas++;
        vecesColumnas++;
        if (vecesColumnas > 6) { // if the collum's repeat time is more than 6
            vecesColumnas = 3; columnas = 0; filas++; vecesFilas++; 
        }
        if (vecesFilas > 6) break;
    }     // end principal for loop
    console.log(Math.max(...results)); // show the result
}
console.log(arrSum())
*/
/*
function hourglassSum(arr) {
    let i = arr[0].length;
    let j = arr.length;
    let totalX = (i - 3 + 1); //3 is the i of hourglass
    let totalY = (j - 3 + 1); //3 is the j of hourglass
    let sum = 0;

    for (i = 0; i < totalX * totalY; i++) {
        var res = GetHourGlass(arr,i+1,totalX,totalY);
        if(i == 0 || res > sum) sum = res;
    }
    return sum;
}

var rowSize = 2
var colSize = 4
var arr = [[rowSize], [colSize]]
console.log(hourglassSum(arr))
*/
/*
function GetHourGlass(arr, no, TotalX, TotalY){
    var x = Math.ceil(no/TotalX);
    var y = no % TotalX;
    y = y == 0 ? TotalY : y;
    var sum = 0;
    //var items = [];

    for(var k=x;k<x+3;k++)
        for(var l=y;l<y+3;l++){
            //items.push(arr[k-1][l-1]);
            if(k==(x+1) && (l==y||l==y+2)){

            }else{
                sum += arr[k-1][l-1];
            }
        }
    //console.log(items);
    return sum;
}
console.log(hourglassSum(arr))
*/
/*
function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
}
*/