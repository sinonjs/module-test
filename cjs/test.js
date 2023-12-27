console.log("=== Testing packages in CommonJS project ===");

console.log("- @sinonjs/commons");
const { every } = require("@sinonjs/commons");
typeof every === "function" && every.name === "every";

console.log("- @sinonjs/fake-timers");
const { createClock } = require("@sinonjs/fake-timers");
typeof createClock === "function" && createClock.name === "creeateClock";

console.log("- nise");
const { fakeServer } = require("nise");
typeof fakeServer.create === "function" && fakeServer.create.name === "create";

console.log("- @sinonjs/samsam");
const { deepEqual } = require("@sinonjs/samsam");
typeof deepEqual === "function" && deepEqual.name === "deepEqual";

console.log("- sinon");
const { fake } = require("sinon");
typeof fake === "function" && fake.name === "fake";
