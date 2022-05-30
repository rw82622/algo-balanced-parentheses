let bp = require("./balanceParens");

console.log(balanceParens("abc(d)e(fgh))(i)j)k") === "abc(d)e(fgh)(i)jk")
console.log(balanceParens("abc((d)e(fgh)(i)j(k") === "abc(d)e(fgh)(i)jk")
console.log(balanceParens("()") === "()")
console.log(balanceParens("a(b)c)") === "a(b)c")
console.log(balanceParens("(a)(bdd)c)") === "(a)(bdd)c")
console.log(balanceParens("a(dbvb)c)") === "a(dbvb)c")
console.log(balanceParens("a(b)(c)())") === "a(b)(c)()")
console.log(balanceParens(")(") === "")
console.log(balanceParens("(((((") === "")
console.log(balanceParens(")(())(") === "(())")
console.log(balanceParens("(()()(") === "()()")
console.log(balanceParens(")())(()()(") === "()()()")

console.log(balanceParens("abc(d)(ef(g(h))ij)k)lm()o)p") === "abc(d)(ef(g(h))ij)klm()op")