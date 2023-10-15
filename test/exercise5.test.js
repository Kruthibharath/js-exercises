import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise5";

describe("sumMultiples", () => {
  test("throws an error if array is not passed", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");
    expect(() => {
      sumMultiples("Multiples of 3 and 5");
    }).toThrow("An array is required");
  });
  test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([5, 3, 7, 8])).toBe(8);
    expect(sumMultiples([1, 2])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("return true/false depending on whether given string is a valid DNA string", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("cgtacgtacg")).toBe(true);
    expect(isValidDNA("CGRDAT")).toBe(false);
    expect(isValidDNA("GACGTAGATCT")).toBe(true);
    expect(isValidDNA("agtucgta")).toBe(false);
  });
});
describe("getComplementaryDNA", () => {});

describe("isItPrime", () => {
  test("return true/false depending on whether it is a prime number or not", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(66)).toBe(false);
    expect(isItPrime(7)).toBe(true);
  });
});

describe("createMatrix", () => {
  /*
  test("returns an array with the first and last items swapped", () => {
    expect(arrShift([1, 2])).toEqual([2, 1]);
    expect(arrShift([1, 2, 3])).toEqual([3, 2, 1]);
    expect(arrShift([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
   
  });

  test("makes no difference when the array length is < 2", () => {
    expect(arrShift([1])).toEqual([1]);
    expect(arrShift([])).toEqual([]);
  });
   */
});

describe("areWeCovered", () => {
  /*
  test("returns true if any of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(findNeedle(obj1, "table")).toBe(true);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(findNeedle(obj2, "Dishwasher")).toBe(true);
  });

  test("returns false if none of the properties of an object contain the specified string", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };
    expect(findNeedle(obj1, "chair")).toBe(false);

    // Note that the objects provided to the function could have any keys/values
    const obj2 = {
      product_name: "Sparkle n Shine Dishwasher Tablets",
      price: 1.99,
      location: "Hulme",
      discounted: false,
      available: true,
    };
    expect(findNeedle(obj2, "Carpet Cleaner")).toBe(false);
  });

  test("The search string should not be case sensitive", () => {
    const obj1 = {
      name: "LINNMON",
      description: "Small round table",
      price: 31.89,
      store: "Warrington",
      code: 12872,
    };

    expect(findNeedle(obj1, "warrington")).toBe(true);
    expect(findNeedle(obj1, "linnmon")).toBe(true);
    expect(findNeedle(obj1, "Liverpool")).toBe(false);
  });
  */
});

// describe("getWordFrequencies", () => {
//   test("returns the frequencies of each word in a string", () => {
//     expect(getWordFrequencies("hello world")).toEqual({
//       hello: 1,
//       world: 1,
//     });

//     expect(getWordFrequencies("the cat is hairier than the rat")).toEqual({
//       the: 2,
//       cat: 1,
//       is: 1,
//       hairier: 1,
//       than: 1,
//       rat: 1,
//     });

//     expect(getWordFrequencies("hello hello hello")).toEqual({
//       hello: 3,
//     });
//   });

//   test("ignores capitalisation", () => {
//     expect(getWordFrequencies("Hello hello hello")).toEqual({
//       hello: 3,
//     });
//   });

//   test("ignores punctuation", () => {
//     // Hint: Google "JavaScript remove special characters from string" to get some ideas!
//     expect(
//       getWordFrequencies("Hello, hello hello! What have we here?")
//     ).toEqual({
//       hello: 3,
//       what: 1,
//       have: 1,
//       we: 1,
//       here: 1,
//     });
//   });
// });
