const input = "(test)";

export function isValid(input: string): boolean {
  //split string into array
  const inputArr = input.split("");

  //create a LIFO stack
  const stack = [];

  //loop through inputArr
  for (let i = 0; i < inputArr.length; i++) {
    const currentChar = inputArr[i];
    //if the character is an opening bracket, push it onto the stack
    if (isOpening(currentChar)) {
      stack.push(currentChar);
    }

    if (isClosing(currentChar)) {
      if (stack.length === 0) return false;

      const lastStackChar = stack.pop();

      //check popped char matches current char in terms of parenthesis
      if (!checkMatching(lastStackChar!, currentChar)) {
        return false;
      }
    }
  }

  //check stack is empty
  return stack.length === 0;
}

function isOpening(inputChar: string): boolean {
  switch (inputChar) {
    case "(":
      return true;
    case "{":
      return true;
    case "[":
      return true;
    default:
      return false;
  }
}

function isClosing(inputChar: string): boolean {
  switch (inputChar) {
    case ")":
      return true;
    case "}":
      return true;
    case "]":
      return true;
    default:
      return false;
  }
}

function checkMatching(openingChar: string, currentChar: string): boolean {
  switch (openingChar) {
    case "(":
      return currentChar === ")";
    case "{":
      return currentChar === "}";
    case "[":
      return currentChar === "]";
    default:
      return false;
  }
}

console.log(isValid(input));
