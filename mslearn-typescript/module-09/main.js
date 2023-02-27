"use strict";
exports.__esModule = true;
var greetings_module_js_1 = require("./greetings_module.js");
var allGreetingFunctions = require("./greeting-utilities_module.js");
var greeting_utilities_module_js_1 = require("./greeting-utilities_module.js");
var greetingA = (0, greetings_module_js_1.returnGreeting)('Hello World!');
var greetingB = (0, greeting_utilities_module_js_1.returnGreeting)('I think this is going to work.');
var greetingC = allGreetingFunctions.returnGreeting('Hola!');
console.log(greetingA, greetingB, greetingC);
