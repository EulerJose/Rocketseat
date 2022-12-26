
function getScore(score) {
    let scoreA = score >= 90 && score <= 100
let scoreB = score <= 89 && score >= 80
let scoreC = score <= 79 && score >= 70
let scoreD = score <= 69 && score >= 60
let scoreE = score < 60 && score >= 0

let scoreFinal;

if (scoreA) {scoreFinal = "A"} 
else if (scoreB) {scoreFinal = "B"}
else if (scoreC) {scoreFinal = "C"}
else if (scoreD) {scoreFinal = "D"}
else if (scoreE) {scoreFinal = "E"}
else {scoreFinal = "Nota inválida"}

return scoreFinal
}

console.log(getScore(50))
console.log(getScore(100))
console.log(getScore(75))
console.log(getScore(-1))
console.log(getScore(105))