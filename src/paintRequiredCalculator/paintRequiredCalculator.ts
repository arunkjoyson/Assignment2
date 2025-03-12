export default function paintRequiredCalculator(area: number, coveragePerLiter: number): number {
    if (area < 0) {
        throw new Error("Area should be positive");
    }
    if (area === 0) {
        throw new Error("Area should not be zero");
    }
    if (coveragePerLiter < 0) {
        throw new Error("Coverage per liter should be positive");
    }
    if (coveragePerLiter === 0) {
        throw new Error("Coverage per liter should not be zero");
    }

    return area / coveragePerLiter;
}

