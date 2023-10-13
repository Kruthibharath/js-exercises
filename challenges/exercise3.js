export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      result.push(nums[i]);
    }
  }
  return result;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  const result = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === char) {
      result.push(names[i]);
    }
  }
  return result;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to ") && !words[i].includes(" to ")) {
      result.push(words[i]);
    }
  }
  return result;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      result.push(nums[i]);
    }
  }
  return result;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  const result = [];
  for (let i = 0; i < users.length; i++) {
    result.push(users[i].data.city.displayName);
  }
  return result;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(parseFloat(Math.sqrt(nums[i]).toFixed(2)));
  }
  return result;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  const result = [];
  const lowercaseString = str.toLowerCase();
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(lowercaseString)) {
      result.push(sentences[i]);
    }
  }
  return result;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  return triangles.map((triangle) =>
    triangle.reduce((num1, num2) => (num1 > num2 ? num1 : num2))
  );
}
