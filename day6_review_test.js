/*
function processData(input) {
	//console.log(input) 
	var input2 = input.split('\n').slice(1) 
	//console.log(input2)
	
	input2.forEach(function(str){
		var even = ''
		var odd = '' 
		
		for (let i = 0; i < str.length; i++){
			if (i % 2 == 0){
			even += str[i]
			//console.log(even)
			}else{
			odd += str[i]  
			//console.log(odd) 
			}
		}
		
		console.log(even + ' ' + odd)
		//return even + ' ' + odd  
	})
} 

var input = '2\nHacker\nRank' 
console.log(processData(input)) 
*/

function processData(input) {
	//console.log(input) 
    var input2 = input.split('\n').slice(1)
	//console.log(input2)
	
    input2.forEach((str) => {
      let even = '';
      let odd = '';
        for(let i = 0; i < str.length; i++) {
			//console.log(i + ' ' + i % 2) 
            i % 2 ? odd += str[i] : even += str[i]
        }
        console.log(`${even} ${odd}`)
    })
}

var input = '2\nHacker\nRank' 
console.log(processData(input))

/*
function processData(input){
input.split('\n').slice(1).forEach(line => 
console.log(line.split('').reduce(([evens, odds], current, i) => 
(i % 2 === 0 ? [evens + current, odds] : [evens, odds + current]), 
['', '']).join(' ')));
}

var input = 'Hacker\nRank'  
console.log(processData(input))
*/
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