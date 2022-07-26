import { testBasicHelpers } from "./helpers_test.js";
import { testParser } from "./parser_test.js";
import { result } from "./tester.js";

testBasicHelpers();
result("Basic Helpers","Parser");
testParser();
result("All Tests");