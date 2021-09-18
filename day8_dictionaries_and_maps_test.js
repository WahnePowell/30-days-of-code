// Should be between O(1) and O(log(n)) 

/*
// Use object notation. However you split out person's name 
// and number, save them in an object with the name as the 
// property and the number as the value, then recall with the 
// same method.

var people = {};

// loop with your extraction of name and number
// logic to determin it is insert
people[name] = number;

// logic to determine it is recall
console.log(people.hasOwnProperty(name) ? name + '=' + number : 'Not found');

// At worst, this treats as hash or dictionary in other 
// languages and should be between O(1) and O(log(n)), if I 
// remember my processing times correctly.
*/
// /////////////////////////////////////////////////////////////
/*
function processData(input) {
  var tempArray = input.split('\n')
  var entriesLength = tempArray.splice(0, 1); //get the number of entries out of the array
  var queries = tempArray.splice(entriesLength) //dump the queries into their own array

  for (var i = 0; i < entriesLength; i++) {
    tempArray[i] = tempArray[i].split(' ')//split the names from the phones to prepare for mapping
  }
  
  var phoneBookMap = new Map(tempArray)//turn the array into a map
  
  for (var i = 0; i < queries.length; i++) {
    if (phoneBookMap.has(queries[i])) {//check if the qeury (name) exists in the phone book 
      console.log(queries[i] + '=' + phoneBookMap.get(queries[i]))
    } else {
      console.log('Not found')
    }
  }
} 
*/
/*
function processData(input) {
	var inArr = input.split('\n')
	var length = Number(inArr[0])
	inArr.shift()
	var people = {}
	
	while(length > 0){
		var temp = inArr[0].split(' ')
		people[temp[0]] = temp[1]
		length--
		inArr.shift()
	}
	
	var match = false
	
	while(inArr.length>0){
		if(inArr[0] === ''){
			inArr.shift()
			continue
		}
		for (key in people){
			if(inArr[0] === key){
				match = true
				console.log(key+'='+people[key])
			}
		}
		if (match === false){
        console.log('Not found')
		}
		
		match = false
		inArr.shift()
	}
} 
*/
/*
function processData(input) {
    var temp = input.split('\n');
    var n = temp.shift(); // shift may be too slow for O(N)
    var arr = [];
    var book = {};
    for (i = 0; i < n; i++) {
        arr[0] = (temp.shift().split(' '));
        book[arr[0][0]] = arr[0][1];
    }
    for (a = 0; a < temp.length; a++) {
        if (book.hasOwnProperty(temp[a])) {
            console.log(temp[a] + '=' + book[temp[a]]);
        } else {
            console.log('Not found');
        }
    }
}
*/
/*
function processData(input) {
    input = input.split('\n')
    var N = parseInt(input[0])

    var phonebook = []
    for (var k = 0; k< N; k++){
        var line = input[k+1]
        line = line.split(' ')
        phonebook[line[0]] = line[1]
    }

    for (var k = N+1; k < input.length; k++ ){
        var num = (phonebook[input[k]])
        if (num !== undefined){
            console.log(input[k]+'='+num)
        } else {
            console.log('Not found')
        }
    }

} 
*/
/*
function processData(input) {
    const [entries, ...arr] = input.split('\n');
    const n = parseInt(entries);
    const map = {};
    for(let i = 0; i < n; i++){
        const [name, number] = arr[i].split(' ');
        map[name] = number;
    }
    const log = [];
    for(let i = n; i < arr.length; i++){
        const key = arr[i];
        const val = map[key];
        log.push(val ? `${key}=${val}` : 'Not found');
    }
    console.log(log.join('\n'))
} 
*/
/*
function processData(input){
var n=parseInt(readLine()); //no. of entries
var dict = { }; //defining dictionary

//creating phonebook
for (i=0; i<n; i++){
    var temp_input=readLine().split(" ");
    dict[temp_input[0]] = temp_input[1];
}        

//checking entries
for (i=n; i<input_length-1; i++){     
    if(dict[input[i+1]]){
        console.log(input[i+1]+"="+dict[input[i+1]])
    }
    else {
        console.log("Not found");
    }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
var input_length=0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    input_length = input_stdin_array.length;
    processData(input_stdin_array);
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
*/

//var input = 
//console.log(processData(input))

/*
process.stdin.resume()
process.stdin.setEncoding('ascii')

var input_stdin = ''
var input_stdin_array = ''
var input_currentline = 0

process.stdin.on('data', function (data) {
    input_stdin += data
})

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split('\n');
    main()
})

function readLine() {
    return input_stdin_array[input_currentline++]
}

function main() {
	var n = parseInt(readLine())

    pbookname = []
    pbooknums = []
    query = []
    
    for (i=0; i<n; i++) {
         pbook = []
         pbook = readLine().split(' ')
         pbookname.push(pbook[0])
         pbooknums.push(pbook[1])
    }
    
    for (j=i; j<n*2; j++) {
		if (readLine != '') {
			query = readLine()
            pos = pbookname.indexOf(query)
			
            if (pos < 0) {
                console.log('Not found')
            } else {
                console.log(query +'='+ pbooknums[pos])
            }
        } else {
			break
        }
    }
    
    
    console.log('Names ' + pbookname)
    console.log('Numbers ' + pbooknums)
    console.log('Queries ' + query)
    
}
*/
//console.log(main())

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