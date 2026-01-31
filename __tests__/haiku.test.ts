import { HaikuMaker } from "../src/haiku";

describe("HaikuMaker", () => {
    it("creates a three line haiku", () => {
        const maker = new HaikuMaker();
        const poem = maker.write();
        const lines = poem.split("\n");

        expect(lines).toHaveLength(3);
        for (const line of lines) {
            expect(line.trim().length).toBeGreaterThan(0);
            expect(line).toMatch(/\s/);
        }
    });
});
