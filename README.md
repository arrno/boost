# @boostd/boost

![Tests](https://github.com/arrno/boost/actions/workflows/tests.yml/badge.svg)

`@boostd/boost` is a small placeholder CLI published ahead of the full Boost toolchain.

Right now it does two small things:

-   `boost up` boots, runs, and **reports “ok.”**
-   `boost haiku` prints a randomly generated observability haiku.

## Installation

```bash
npm install -g @boostd/boost
```

## Commands

-   `boost up`  
    Starts the CLI and reports ok.
-   `boost haiku`  
    Generates and prints an original haiku.

## Why this exists

This package exists to:

-   reserve the name
-   validate install + execution
-   establish the CLI shape (`boost up`)
-   make sure nothing explodes

More functionality will land here as the Boost toolchain comes online.

## Development

```bash
npm install          # install dependencies
npm run build        # emit compiled files into dist/
npm run test         # build + sanity-check the CLI output
```

## Releasing

```bash
npm run release:patch   # test -> npm version patch -> npm publish
npm run release:minor
npm run release:major
```
