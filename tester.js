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


   export function expect(test_closure, actual, expected) {
    console.log(`Testing: ${test_closure.toString()}`);
    if (compareObjects(actual, expected)) {        
      console.log('PASS');
    } else {
      console.log('FAIL');
      console.log('Expected:');
      console.log(expected);
      console.log('Actual:');
      console.log(actual);
    }
  }

