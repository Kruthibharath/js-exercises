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
describe("getComplementaryDNA", () => {
  test("returns the complementary base pairs for a given DNA string", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
    expect(getComplementaryDNA("ATCG")).toBe("TAGC");
  });
});

describe("isItPrime", () => {
  test("return true/false depending on whether it is a prime number or not", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(66)).toBe(false);
    expect(isItPrime(7)).toBe(true);
  });
});

describe("createMatrix", () => {
  test("return an array of n arrays, each filled with n items", () => {
    /*const n = 3;
    const fill = "foo";*/
    const expectedMatrix1 = [
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ];
    expect(createMatrix(3, "foo")).toStrictEqual(expectedMatrix1);
    expect(createMatrix(1, "boo")).toStrictEqual([["boo"]]);
  });
});

describe("areWeCovered", () => {
  test("return true/false depending on whether there are enough staff scheduled for the given day", () => {
    const staffObject = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      {
        name: "James",
        rota: ["Saturday", "Sunday", "Tuesday", "Wednesday", "Thursday"],
      },
      { name: "Hannah", rota: ["Saturday", "Monday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(staffObject, "Monday")).toBe(false);
    expect(areWeCovered(staffObject, "Tuesday")).toBe(true);
    expect(areWeCovered(staffObject, "Wednesday")).toBe(true);
    expect(areWeCovered(staffObject, "Thursday")).toBe(false);
    expect(areWeCovered(staffObject, "Friday")).toBe(false);
    expect(areWeCovered(staffObject, "Saturday")).toBe(true);
  });
});
