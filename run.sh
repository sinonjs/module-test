#!/usr/bin/env bash
ag -l --js const | entr "./test.sh"
