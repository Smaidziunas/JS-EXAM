/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */
import { one as one } from "./modules/numbers/numbers.js";
import { two as two } from "./modules/numbers/numbers.js";
import { three as three } from "./modules/numbers/numbers.js";
import { four as four } from "./modules/numbers/numbers.js";
import five from "./modules/numbers/numbers.js";

import substraction from "./modules/math/subtraction.js";
import composition from "./modules/math/composition.js";
import division from "./modules/math/division.js";
import multiplication from "./modules/math/multiplication.js";

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("one ===", one);
console.log("two ===", two);
console.log("three ===", three);
console.log("four ===", four);
console.log("five ===", five);
