# Sinon module test

This repository contains a test harness for verifying that all the Sinon packages can be used in both Commonjs and ESM projects.

This audience for this repository is the Sinon maintainers.


## Setup

If you're using `nvm`, make sure you're using the same version of `node` and `npm` in all packages, or the resolution of `npm link` will not work the way you expect.

It is assumed that you have local checkouts of the following packages:

- [sinon][sinon]
- [@sinonjs/commons][commons]
- [@sinonjs/fake-timers][fake-timers]
- [@sinonjs/nise][nise]
- [@sinonjs/samsam][samsam]

It is also assumed that you've installed their dependencies and run `npm link` in each of them.

### Setting up this repository

```sh
# install all packages and link all sinon packages to local copies
./setup
```

If you want to use continous testing, you should have  [`ag`][ag] and [`entr`][entr] installed.

## How to test

You can run the tests in two ways:

```sh
# run the test once
./test.sh

# use run the tests continuously (requires ag and entr)
./run.sh
```

[sinon]: https://github.com/sinonjs/sinon
[commons]: https://github.com/sinonjs/fake-timers
[fake-timers]: https://github.com/sinonjs/fake-timers
[nise]: https://github.com/sinonjs/nise
[samsam]: https://github.com/sinonjs/samsam
[ag]: https://github.com/ggreer/the_silver_searcher
[entr]: https://eradman.com/entrproject/
