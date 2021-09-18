'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}
//
class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification)
        this.scores = scores
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
        calculate() {
        let avg_score = this.scores.reduce(getSum) / this.scores.length
        if (avg_score >= 90) {
            return 'O'
        } else if (avg_score >= 80) {
            return 'E'
        } else if (avg_score >= 70) {
            return 'A'
        } else if (avg_score >= 55) {
            return 'P'
        } else if (avg_score >= 40) {
            return 'D'
        } else {
            return 'T'
        } 
    }
}

function getSum(total, num) {
    return total + num
}
}
//
class Student extends Person {
    constructor(firstName, lastName, id, scores){
        super(firstName, lastName, id);
        this.scores = scores;
    }
    calculate(){
		const average = this.scores.reduce((a, b) => a + b) / this.scores.length;
        
        switch(true){
            case (average <= 100 && average >= 90):
                return "O";
            case (average<90 && average>=80):
                return "E";
            case (average<80 && average>=70):
                return "A";
            case (average<70 && average>=55):
                return "P";
            case (average<55 && average>=40):
                return "D";
            case (average<40):
                return "T";
        }
    }
}
//
//
constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores;
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        var sum = this.scores.reduce(function(sum, num) 
        { 
            return sum + num;
        });
        
        var score = Math.ceil(sum / this.scores.length);
        var letter = "";
        if (90 <= score && score <= 100)
            letter = "O";
        else if (80 <= score && score < 90)
            letter = "E";
        else if (70 <= score && score < 80)
            letter = "A";
        else if (55 <= score && score < 70)
            letter = "P";
        else if (40 <= score && score < 55)
            letter = "D";
        else if (score < 40)
            letter = "T"
        
        return letter;
    }
//
//
class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, identification, scores) {
        super(firstName, lastName, identification)
        this.scores = scores;
    }
    
    
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        let scores = this.scores;
        let avg = scores.reduce((acc, curr) => acc + curr, 0) / scores.length; 
        
        switch(true) {
                case avg >= 90:
                    return "O";
                    break;
                case avg >= 80:
                    return "E";
                    break;
                case avg >= 70:
                    return "A";
                    break;
                case avg >= 55:
                    return "P";
                    break;
                case avg >= 40:
                    return "D";
                    break;
                default:
                    return "T";
                    break;
        }
    }
}
//


function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
