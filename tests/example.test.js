import { sum } from "../src/scripts/Example";

describe('Just an example to testing jest installation', () => {
    test('should be two', () => {
        expect(sum(1,1)).toBe(2);
    });
});