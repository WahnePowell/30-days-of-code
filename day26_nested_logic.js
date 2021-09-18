const calculateFine = (actual, expected) => {
  if (actual.year > expected.year) {
    return 10000;
  }

  if (actual.year === expected.year && actual.month > expected.month) {
    return (actual.month - expected.month) * 500;
  }

  if (actual.month === expected.month && actual.day > expected.day) {
    return (actual.day - expected.day) * 15;
  }

  return 0;
}

function processData(input) {
  const lines = input.split("\n");
  const [actual, expected] = lines.map(line => {
    const [day, month, year] = line.split(" ").map(Number);
    
    return {day, month, year};
  });
  
  console.log(calculateFine(actual, expected));
}

/*
var yearFine = 10000 * (actual.year - due.year);
var monthFine = 500 * (actual.month - due.month);
var dayFine = 15 * (actual.day - due.day);

if (yearFine === 0) {
  if (monthFine === 0) {
    return (dayFine > 0) ? dayFine : 0;
  } else {
    return (monthFine > 0) ? monthFine : 0;
  }
}
return (yearFine > 0) ? 10000 : 0;
*/