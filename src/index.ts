#!/usr/bin/env node

const args: string[] = process.argv.slice(2);
const [command] = args;

const asciiOk = `+------------------+
|                  |
|   OOOO  KK   KK  |
|  OO  OO KK  KK   |
|  OO  OO KKKKK    |
|  OO  OO KK  KK   |
|   OOOO  KK   KK  |
|                  |
+------------------+`;

if (!command || command === "up") {
    console.log(asciiOk);
} else {
    console.log("oh no");
    process.exitCode = 1;
}
