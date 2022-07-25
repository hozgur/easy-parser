import { parseLine,extractString } from "./parser.js";
import { expect } from "./tester.js";

function testParseLine() {
    const sampleLine = "row  .w8 .p4 {title} class=test";
    const expected = { name: "row", args: [".w8", ".p4", "{title}", "class=test"] };
        
}

function testExtractString() {
    const sampleLine = "\"Hello World\" \"Hello World\"";
    const expected = "Hello World";
    expect("Test Extract String",extractString(sampleLine), expected);
}


export function testParser() {
    //testParseLine();
    testExtractString();
}