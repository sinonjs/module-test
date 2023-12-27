#!/usr/bin/env bash

echo "--- Setting up CommonJS test environment ---"
cd cjs
npm i
npm link @sinonjs/commons
npm link @sinonjs/fake-timers
npm link nise
npm link @sinonjs/samsam
npm link sinon
cd ..
echo ""
echo ""

echo "--- Setting up ESM test environment ---"
cd esm
npm i
npm link @sinonjs/commons
npm link @sinonjs/fake-timers
npm link nise
npm link @sinonjs/samsam
npm link sinon
cd ..
echo ""
echo ""
