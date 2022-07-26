const compareObjects = (a, b) => {
    if (a === b) return true;
   
    if (typeof a != 'object' || typeof b != 'object' || a == null || b == null) return false;
   
    let keysA = Object.keys(a), keysB = Object.keys(b);
   
    if (keysA.length != keysB.length) return false;
   
    for (let key of keysA) {
      if (!keysB.includes(key)) return false;
   
      if (typeof a[key] === 'function' || typeof b[key] === 'function') {
        if (a[key].toString() != b[key].toString()) return false;
      } else {
        if (!compareObjects(a[key], b[key])) return false;
      }
    }
   
    return true;
   }

    const Black   =  "\u001b[30m";
    const Red     = "\u001b[31m";    
    const Green   = "\u001b[32m";
    const Yellow  = "\u001b[33m";
    const Blue    = "\u001b[34m";
    const Magenta = "\u001b[35m";
    const Cyan    = "\u001b[36m";
    const White   = "\u001b[37m";
    const Reset   = "\u001b[0m";
    const Bright  = "\u001b[1m";
    const Dim     = "\u001b[2m";
    const Underscore = "\u001b[4m";
    const Blink   = "\u001b[5m";
    const Reverse = "\u001b[7m";
    const Hidden  = "\u001b[8m";
    const FgBlack = "\u001b[30m";
    const FgRed   = "\u001b[31m";
    const FgGreen = "\u001b[32m";
    const FgYellow = "\u001b[33m";
    const FgBlue  = "\u001b[34m";
    const FgMagenta = "\u001b[35m";
    const FgCyan  = "\u001b[36m";
    const FgWhite = "\u001b[37m";
    const BgBlack = "\u001b[40m";
    const BgRed   = "\u001b[41m";
    const BgGreen = "\u001b[42m";
    const BgYellow = "\u001b[43m";
    const BgBlue  = "\u001b[44m";
    const BgMagenta = "\u001b[45m";
    const BgCyan  = "\u001b[46m";
    const BgWhite = "\u001b[47m";
    
    let total_tests = 0;
    let total_errors = 0;

   export function expect(test_closure, actual, expected) {
    console.log(`Testing: ${test_closure.toString()}`);
    total_tests++;
    if (compareObjects(actual, expected)) {        
      console.log(`${Green}${Bright}PASS${Reset}`);
    } else {
      total_errors++;
      console.log(`${Red}${Bright}FAIL${Reset}`);
      console.log('Expected:');
      console.log(expected);
      console.log('Actual:');
      console.log(actual);
    }
  }

export function result(title,nextTitle) {
  console.log('-----------------------------------------------------------------------------------------')
  console.log(`Test:${title} : ${White}${total_tests} tests, ${total_errors} errors${Reset}`);
  if(total_errors>0) {
    console.log(`${Red}${Bright}FAIL${Reset}`);
  }
  else {
    console.log(`${Green}${Bright}PASS${Reset}`);
  }
  console.log('-----------------------------------------------------------------------------------------')
  if(nextTitle)
    console.log(`${White}New Test: ${nextTitle}${Reset}`);
}