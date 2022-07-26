
import { sepLines, removeExtraSpaces, trimEquals,findDoubleQuotes,
 replaceSpaces, findCodeBlocks, tokenizeStr } from "./helpers.js";
import { expect } from "./tester.js";

export function testBasicHelpers() {
    expect("SepLine must be sep Lastline without end line.",sepLines('a\nb\nc'), ['a', 'b', 'c']);
    expect("Sepline regular test",sepLines('a\nb\nc\n'), ['a', 'b', 'c']);

    expect('Remove extra spaces', removeExtraSpaces('a  b  c'), 'a b c');

    expect('Trim equals', trimEquals('a = b = c'), 'a=b=c');

    const sampleLine   = 'row  .w8 .p4  #id .{ $var + "1"  } " title " class=" class  " width=" 100px " code={ code }';    
    const expectedLine = 'row  .w8 .p4  #id .{ $var + "1"  } "\x1Ftitle\x1F" class="\x1Fclass\x1F\x1F" width="\x1F100px\x1F" code={ code }';
    const expectedLine2 = 'row  .w8 .p4  #id .{\x1F$var\x1F+\x1F"1"\x1F\x1F} "\x1Ftitle\x1F" class="\x1Fclass\x1F\x1F" width="\x1F100px\x1F" code={\x1Fcode\x1F}';
            
    let actualPair = findDoubleQuotes(sampleLine);
    const expectedPair = [28, 30, 35, 43, 51, 60, 68, 76];
    expect('Find double quotes', actualPair, expectedPair);        
    expect('Replaces spaces with place holder',replaceSpaces(sampleLine, expectedPair), expectedLine);
    const expectedBlockPair = [19, 33, 83, 90];    
    expect('Find code blocks', findCodeBlocks(expectedLine), expectedBlockPair);    
    expect('Replaces spaces with place holder on Code Blocks',replaceSpaces(expectedLine, expectedBlockPair), expectedLine2);
    
    const expectedLine3 = 'row .w8 .p4 #id .{\x1F$var\x1F+\x1F"1"\x1F\x1F} "\x1Ftitle\x1F" class="\x1Fclass\x1F\x1F" width="\x1F100px\x1F" code={\x1Fcode\x1F}';
    expect('Remove extra spaces', removeExtraSpaces(expectedLine2), expectedLine3);    
    const expectedTokens = ['row', '.w8', '.p4', '#id', '.{ $var + "1"  }', '" title "', 'class=" class  "', 'width=" 100px "', 'code={ code }'];
    expect('Tokenize line', tokenizeStr(expectedLine3), expectedTokens);
    
}
