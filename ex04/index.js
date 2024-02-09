let varA = "A"// B
let varb = "B"// C
let varc = "C"// A

const temp = varA
varA = varb
varb = varc
varc = temp

console.log(varA, varb, varc)

