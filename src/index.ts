#!/usr/bin/env node

import { HaikuMaker } from "./haiku";

const args = process.argv.slice(2);
const cmd = args[0];

function banner() {
    console.log(`+------------------+
|                  |
|   OOOO  KK   KK  |
|  OO  OO KK  KK   |
|  OO  OO KKKKK    |
|  OO  OO KK  KK   |
|   OOOO  KK   KK  |
|                  |
+------------------+`);
}

function help() {
    console.log(`boost

Commands:
  boost up        reports back ok
  boost haiku     prints a random observability haiku

Examples:
  boost up
  boost haiku
`);
}

function doHaiku() {
    const maker = new HaikuMaker();
    console.log(maker.write());
}

if (!cmd || cmd === "help" || cmd === "-h" || cmd === "--help") {
    help();
    process.exit(0);
}

if (cmd === "up") {
    banner();
    process.exit(0);
}

if (cmd === "haiku") {
    doHaiku();
    process.exit(0);
}

console.error(`Unknown command: ${cmd}\n`);
help();
process.exit(1);
