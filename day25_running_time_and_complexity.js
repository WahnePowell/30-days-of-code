function processData(input) {
    //Enter your code here
	const inputs = input.split('\n').splice(1).map(Number);
    
inputs.forEach((num) => {
  if (num === 2) {
    process.stdout.write('Prime\n');
    return;
  }

  if (num === 1 || num % 2 === 0) {
    process.stdout.write('Not prime\n');
    return;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      process.stdout.write('Not prime\n');
      return;
    }
  }

  process.stdout.write('Prime\n');
});
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

