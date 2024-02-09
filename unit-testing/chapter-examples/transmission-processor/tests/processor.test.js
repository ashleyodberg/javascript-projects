const processor = require('../processor.js');

describe("transmission processor", function () {

  test("takes a string and returns an object", function() {
    let result = processor("9701::<489584872710>");
    expect(typeof result).toBe("object");
  });

  test("returns -1 if '::' not found", function() {
    let result = processor("9701<489584872710>");
    expect(result).toBe(-1);
  });

  test("returns id in object", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).not.toBeUndefined();
  });

  test("converts id to a number", function() {
    let result = processor("9701::<489584872710>");
    expect(result.id).toBe(9701);
  });

  test("returns rawData in object", () => {
    let result = processor("9701::<487297403495720912>");
    expect(result.rawData).not.toBeUndefined();
  });

  test("returns -1 for rawData if missing < at position 0", function() {
    let result = processor("9701::487297403495720912>");
    expect(result).toBe(-1);
  });

  test("trims leading and trailing whitespace from transmission", () => {
   let result = processor("  9701::<487297403495720912>  ");
   expect(result.id).toBe(9701);  // Add this line to ensure id is correct after trimming
   expect(result.rawData).toBe("487297403495720912");
});

  test("returns -1 if id cannot be converted to a number", () => {
    let result = processor("invalid::<487297403495720912>");
    expect(result).toBe(-1);
  });

  test("returns -1 if more than one '::' is found in transmission", () => {
    let result = processor("123::<456>::789");
    expect(result).toBe(-1);
  });

  test("does not include < > symbols in rawData value", () => {
    let result = processor("987::<654321>");
    expect(result.rawData).toBe("654321");
  });

  test("returns -1 if non-numeric characters in rawData between < >", () => {
   let result = processor("555::<abc123>");
   expect(result.rawData).toBe(-1);
  });

});

/*const processor = require('../processor.js');

describe("transmission processor", function () {

  test("takes a string and returns an object", function() {
      let result = processor("9701::<489584872710>");
      expect(typeof result).toBe("object");
   });

   test("returns -1 if '::' not found", function() {
      let result = processor("9701<489584872710>");
      expect(result).toBe(-1);
   });

   test("returns id in object", function() {
      let result = processor("9701::<489584872710>");
      expect(result.id).not.toBeUndefined();
   });

   test("converts id to a number", function() {
      let result = processor("9701::<489584872710>");
      expect(result.id).toBe(9701);
   });

   test("returns rawData in object", () => {
      let result = processor("9701::<487297403495720912>");
      expect(result.rawData).not.toBeUndefined();
   });

  test("returns -1 for rawData if missing < at position 0", function() {
   let result = processor("9701::487297403495720912>");
   expect(result).toBe(-1);
  }); //  TODO: put tests here
 // Trim leading and trailing whitespace from transmission
  test("trims leading and trailing whitespace from transmission", () => {
   let result = processor("  9701::<487297403495720912>  ");
   expect(result.rawData).toBe("487297403495720912");
  });

   // Return -1 if the id part of the transmission cannot be converted to a number
   test("returns -1 if id cannot be converted to a number", () => {
   let result = processor("invalid::<487297403495720912>");
   expect(result).toBe(-1);
  });

   // Return -1 if more than one "::" is found in transmission
   test("returns -1 if more than one '::' is found in transmission", () => {
      let result = processor("123::<456>::789");
      expect(result).toBe(-1);
   });

   // Do not include the < > symbols in the value assigned to rawData
   test("does not include < > symbols in rawData value", () => {
      let result = processor("987::<654321>");
      expect(result.rawData).toBe("654321");
   });

   // Return -1 for the value of rawData if anything besides numbers are present between the < > symbols
  test("returns -1 if non-numeric characters in rawData between < >", () => {
   let result = processor("555::<abc123>");
   expect(result.rawData).toBe(-1);
});

});
*/