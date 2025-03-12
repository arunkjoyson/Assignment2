//goal: test coverage for the paint required calculator.
// PaintRequired = area/coverage per liter

//sample date:  50 = 500/ 10


import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
    test("should calculate the paint required correctly", () => {
        const area = 500;
        const CoveragePerLiter = 10;
        const result = paintRequiredCalculator(area, CoveragePerLiter);

        expect(result).toBe(area / CoveragePerLiter);
    });

    test("should throw an error when area is negative", () => {
        const area = -500;
        const CoveragePerLiter = 10;

        expect(() => paintRequiredCalculator(area, CoveragePerLiter)).toThrow("Area should be positive");
    });

    test("should throw an error when area is zero", () => {
        const area = 0;
        const CoveragePerLiter = 10;

        expect(() => paintRequiredCalculator(area, CoveragePerLiter)).toThrow("Area should not be zero");
    });

    test("should throw an error when coveragePerLiter is negative", () => {
        const area = 500;
        const CoveragePerLiter = -10;

        expect(() => paintRequiredCalculator(area, CoveragePerLiter)).toThrow("Coverage per liter should be positive");
    });

    test("should throw an error when coveragePerLiter is zero", () => {
        const area = 500;
        const CoveragePerLiter = 0;

        expect(() => paintRequiredCalculator(area, CoveragePerLiter)).toThrow("Coverage per liter should not be zero");
    });
});

