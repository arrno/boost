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
  boost up     reports back ok

Examples:
  boost up
`);
}

if (!cmd || cmd === "help" || cmd === "-h" || cmd === "--help") {
    help();
    process.exit(0);
}

if (cmd === "up") {
    banner();
    process.exit(0);
}

console.error(`Unknown command: ${cmd}\n`);
help();
process.exit(1);
