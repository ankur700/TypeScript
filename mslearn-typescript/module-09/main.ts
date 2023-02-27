import { returnGreeting } from "./greetings_module.js";
import * as allGreetingFunctions from "./greeting-utilities_module.js";
import { returnGreeting as returnGreetingLength } from "./greeting-utilities_module.js";



let greetingA = returnGreeting('Hello World!');
let greetingB = returnGreetingLength('I think this is going to work.');
let greetingC = allGreetingFunctions.returnGreeting('Hola!');

console.log(greetingA, greetingB, greetingC);
