console.log("=== Testing sinon packages in ESM project ===");

console.log("- @sinonjs/commons");
import every from "@sinonjs/commons"
typeof every === "function" && every.name === "every";

console.log("- @sinonjs/fake-timers");
import { createClock } from "@sinonjs/fake-timers"
typeof createClock === "function" && createClock.name === "creeateClock";

console.log("- nise");
import fakeServer from "nise";
typeof fakeServer.create === "function" && fakeServer.create.name === "create";

console.log("- @sinonjs/samsam");
import deepEqual from "@sinonjs/samsam";
typeof deepEqual === "function" && deepEqual.name === "deepEqual";

console.log("- sinon");
import { fake } from "sinon";
typeof fake === "function" && fake.name === "fake";
