function balancedBrackets(string) {
    const stack = [];
    const openBrackets = ['(', '[', '{'];
    const closeBrackets = [')', ']', '}'];
  
    for (let i = 0; i < string.length; i++) {
      const char = string.charAt(i);
  
      if (openBrackets.includes(char)) {
        stack.push(char);
      } else if (closeBrackets.includes(char)) {
        const index = closeBrackets.indexOf(char);
        if (stack.length > 0 && stack[stack.length - 1] === openBrackets[index]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

console.log(balancedBrackets('(hello)[world]'))
// => true

console.log(balancedBrackets('([)]'))
// => false

console.log(balancedBrackets('[({}{}{})([])]'))
// => true

module.exports = balancedBrackets
