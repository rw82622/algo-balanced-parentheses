balanceParens = (arg) => {
// initialize your variables(PARENTHESIS, RESULT)
let parentheses = []
let result = ''
// iterate through every character in ARG
for (let c = 0; c < arg.length; c++){
    // alpha-numeric characters get added to RESULT immediately
    if (arg[c].match(/\w/)){
        result += arg[c] }
    // add '(' to RESULT and PARENTHESIS only if there's a closing parenthesis in the remainder of ARG
    else if (arg[c] === '(' && arg.slice(c+1).includes(')')){
        parentheses.push([result.length, arg[c]])
        result += arg[c] }
    // add ')' to RESULT and pop PARENTHESIS only if PARENTHESIS isn't empty
    else if (arg[c] === ')' && parentheses.length > 0){
        result += arg[c]
        parentheses.pop() } }
// After the for loop, remove extra '(' if there's one
if (parentheses.length === 1){
    let indexToPop = parentheses[0][0]
    result = result.slice(0,indexToPop) + result.slice(indexToPop+1) }
return result
}

module.exports = { balanceParens }