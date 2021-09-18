function processData(input) {
  let inputArray = input.split('\n')
  let numEntries = inputArray.splice(0, 1)
  //console.log(numEntries)
  let queries = inputArray.splice(numEntries)
  //console.log(queries)

  for (let i = 0; i < numEntries; i++) {
    inputArray[i] = inputArray[i].split(' ')
  }
  
  let phoneBookMap = new Map(inputArray)
  
  for (let i = 0; i < queries.length; i++) {
    if (phoneBookMap.has(queries[i])) {
      console.log(queries[i] + '=' + phoneBookMap.get(queries[i]))
    } else {
      console.log('Not found')
    }
  }
}


var input = '3\nsam 99912222\ntom 11122222\nharry 12299933'
console.log(processData(input))

/*
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
*/