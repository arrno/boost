# @boostd/boost

`@boostd/boost` is a small placeholder CLI published ahead of the full Boost toolchain.

Right now it does one simple thing:  
it boots, runs, and **reports “ok.”**

## Installation

```bash
npm install -g @boostd/boost
```

## Commands

-   `boost up`  
    Starts the CLI and reports ok.

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
