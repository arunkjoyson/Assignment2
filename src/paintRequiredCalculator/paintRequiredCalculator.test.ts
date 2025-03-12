//goal: Calculate the paint required.
// PaintRequired = area * coverage per liter

//5000 = 500 * 10


import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
    test("should calculate the paint required correctly", () => {
      const area = 500;
      const CoveragePerLiter = 10;
      const result = paintRequiredCalculator(area,CoveragePerLiter);
  
      expect(result).toBe(area*CoveragePerLiter);
    });
  
    test("should throw an error when area is negative", () => {
        const area = -500;
        const CoveragePerLiter = 10;
    
        expect(() => paintRequiredCalculator(area,CoveragePerLiter).toThrow("Area should be to Positive");

    });
});
