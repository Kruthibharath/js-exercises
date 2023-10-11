export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  //   if (sandwich && sandwich.fillings && Array.isArray(sandwich.fillings)) {
  //     return sandwich.fillings;
  //   } else {
  //     return [];
  //   }
  return sandwich && sandwich.fillings && Array.isArray(sandwich.fillings)
    ? sandwich.fillings
    : [];
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  return arr.filter((animal) => animal === "sheep").length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.address.postCode.charAt(0).toUpperCase() === "M";
}
