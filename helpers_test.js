
import { sepLines, removeExtraSpaces, trimEquals } from "./helpers.js";
import { expect } from "./tester.js";

export function testBasicHelpers() {
    expect("SepLine must be sep Lastline without end line.",sepLines('a\nb\nc'), ['a', 'b', 'c']);
    expect("Sepline regular test",sepLines('a\nb\nc\n'), ['a', 'b', 'c']);

    expect('Remove extra spaces', removeExtraSpaces('a  b  c'), 'a b c');

    expect('Trim equals', trimEquals('a = b = c'), 'a=b=c');
}
