// Instructions
// Create a function called validateUnionType(value: any, allowedTypes: string[]): boolean that takes a value and an array of allowed types (as strings).
// The function should return true if the value is one of the allowed types; otherwise, it should return false.
// Demonstrate its usage by validating variables with different types.

function validateUnionType(value: any, allowedTypes: string[]): boolean {
  return allowedTypes.some(type => typeof value == type);
}

console.log(
  validateUnionType({}, ["object", "int", "string"]),  // true
  validateUnionType(5, ["int", "string"]),             // false
  validateUnionType(5, ["string", "boolean"]),         // false
  validateUnionType("Hello World", ["string"])         // true
)