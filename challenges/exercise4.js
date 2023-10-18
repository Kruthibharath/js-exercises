export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  const index = nums.indexOf(n);
  let firstInstance = false;
  if (index === -1 || index === nums.length - 1) {
    return null;
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === n) {
      if (!firstInstance) {
        firstInstance = true;
        return nums[i + 1];
      } else {
        return nums[i + 1];
      }
    }
  }
  return nums[index + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let total1s = 0;
  let total0s = 0;
  //for (const num in str) {
  //if num === 1 ? total1s++ : total0s++;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      total1s++;
    } else if (str[i] === "0") {
      total0s++;
    }
  }
  return {
    1: total1s,
    0: total0s,
  };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return parseInt(n.toString().split("").reverse().join(""), 10);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  //return arrs.map((arr) => arr.reduce((num1, num2) => num1 + num2));
  let sum = 0;
  for (const subArrays of arrs) {
    for (const num of subArrays) {
      sum += num;
    }
  }
  return sum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length < 2) {
    return arr.slice();
  }
  const first = arr[0];
  const last = arr[arr.length - 1];
  arr[0] = last;
  arr[arr.length - 1] = first;
  return arr;
  //return ([arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]); **array destructuring**
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  const caseSensetive = searchTerm.toLowerCase();
  for (const key in haystack) {
    if (
      haystack.hasOwnProperty(key) &&
      typeof haystack[key] === "string" &&
      haystack[key].toLowerCase().includes(caseSensetive)
    ) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  const wordFrequencies = {};
  const words = str.toLowerCase().match(/\b\w+\b/g);
  //console.log(words);
  for (const word of words) {
    if (wordFrequencies[word]) {
      wordFrequencies[word]++;
    } else {
      wordFrequencies[word] = 1;
    }
  }
  return wordFrequencies;
};
