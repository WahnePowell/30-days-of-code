function processData(input) {
	var input2 = input.split('\n').slice(1) 
	
    input2.forEach((str) => {
		let even = ''
		let odd = ''
	  
        for(let i = 0; i < str.length; i++) {
			i % 2 ? odd += str[i] : even += str[i] 
        }
        console.log(`${even} ${odd}`) 
    })
}

var input = '2\nHacker\nRank' 
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