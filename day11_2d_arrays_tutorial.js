var rowSize = 2
var colSize = 4
var myArray[][] = new Array[rowSize][colSize]

var count = 0

for(let i = 0; i < rowSize; i++) {

    for(let j = 0; j < colSize; j++, count++) {
        console.log(myArray[i][j] + ' ')
    }
	console.log()
}

// ouput
// 0 1 2 3 
// 4 5 6 7 