class Tokenizer {

  operators = ['+', '-', '/', '*', '(', ')', '^'];
  
  constructor(input) {
    this.input = input;
    this.index = 0;
  }

  hasMoreTokens() {
    return this.index < this.input.length;
  }

  matchToken() {
    while(this.hasMoreTokens() && this.input.charAt(this.index) === ' ') {
      this.index++;
    }

    if(this.hasMoreTokens() && this.operators.includes(this.input.charAt(this.index))) {
      const token = this.input.charAt(this.index);
      this.index += 1;
      return {type: 'operator', token};
    }

    // match numbers from 0 to 9
    // Using buffer so that we can collect all the sequence of an nubmer (basically grouping the individual chars of numbers)
    let buffer = ''
    while(this.hasMoreTokens() && this.input.charAt(this.index) >= '0' && this.input.charAt(this.index) <= '9' ) {
      buffer += this.input.charAt(this.index);
      this.index++;
    }

    //if the counter in the buffer, matches as a valid number
    if(buffer.length > 0 && !isNaN(Number(buffer))) {
      const token = Number(buffer);
      return {typeof: 'operand', token};
    }
    return null;
  }

  getNextToken() {
    if(!this.hasMoreTokens()) {
      return null;
    }

    const tokenValue = this.matchToken();
    return tokenValue;
  }

}


const printAllTokens = (tokenizer) => {
  let token = tokenizer.getNextToken();
  while(token) {
    console.log(token);
    token = tokenizer.getNextToken();
  }
}

printAllTokens(new Tokenizer('10 + 20 * 30 - 40'));