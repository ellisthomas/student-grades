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
 	gradeF ++;
}  else if (scores[i] >=61 && scores[i] <= 70 ) {
		grade.push ("D");
		gradeD ++;	
 } else if (scores[i] >=71 && scores[i] <= 80 ) {
		grade.push ("C");
		gradeC ++;
 } else if (scores[i] >=81 && scores[i] <= 90 ) {
		grade.push ("B");
		gradeB ++;
}  else if (scores[i] >=91 && scores[i] <= 100 ) {
		grade.push ("A");
		gradeA ++;
 }
}

scores.min = function(scores) {
	return Math.min.apply( Math, scores)
}
var lowestGrade = scores.min(scores)

scores.max = function(scores) {
	return Math.max.apply( Math, scores)
}
var highestGrade = scores.max(scores)


console.log("grade", grade);
console.log("Number of F's",gradeF);
console.log("Number of D's",gradeD);
console.log("Number of C's",gradeC);
console.log("Number of B's",gradeB);
console.log("Number of A's",gradeA);
console.log("Lowest grade", lowestGrade);
console.log("Highest grade", highestGrade);








