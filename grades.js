var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];  
var scores = scores.sort(function(a,b) {
	return a-b;
}
);



console.log("scores", scores);

var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;
var lowestGrade = 0;
var highestGrade = 0;

var grade = [ ];

for (var i = 0; i < scores.length; i++) {
 if (scores[i] >= 50 && scores[i] <=60) {
 	grade.push("F");
 	
 } 
}
console.log("grade", grade);