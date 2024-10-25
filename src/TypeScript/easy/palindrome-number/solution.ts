const num = 121;

export function isPalindrome(num: number): Boolean {
  if (num < 0) return false;

  const numAsArr = numToArr(num); //121 becomes [1, 2, 1]

  return arrToNum(numAsArr) === arrToNum(numAsArr.reverse());
}

function numToArr(num: number): number[] {
  const digits = [];
  while (num > 0) {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return digits;
}

function arrToNum(arr: number[]): number {
  return arr.reduce((acc, digit) => acc * 10 + digit, 0);
}

console.log(`${num} is${isPalindrome(num) ? "" : " not"} a palindrome`);
