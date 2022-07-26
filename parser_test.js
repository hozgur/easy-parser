import { tokenizeLine,tokenstoElement } from "./parser.js";
import { expect } from "./tester.js";

const sampleLine   = 'row  .w8 .p4 #id .{ $var + "1"  } " title " class=" class  " width={ $var2 + "px"} { code }';    

function testParseLine() {
    const expectedTokens = ['row', '.w8', '.p4', '#id', '.{ $var + "1"  }', '" title "', 'class=" class  "', 'width={ $var2 + "px"}', '{ code }'];
    const actualTokens = tokenizeLine(sampleLine);
    expect('Tokenize', actualTokens, expectedTokens);

    const expectedElement = {
        type: 'row',
        id: 'id',
        classes: ['w8', 'p4', '{ $var + "1"  }', ' class  '],
        content: [ ' title ', '{ code }' ],
        properties: [{key: 'width', value: '{ $var2 + "px"}'}]
    };
                    
    const actualElement = tokenstoElement(actualTokens);
    expect('Tokens to Element', actualElement, expectedElement);
    console.log(actualElement);
}

export function testParser() {
    
    testParseLine();
    
}