#!/usr/bin/env bash
clear

(cd cjs && npm test)
(cd esm && npm test)
