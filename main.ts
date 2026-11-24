// One Word From Grandma — entry program.
//
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt (or /output
// when the variable is unset). Node 22 stdlib only; no network, no Chrome,
// no dependencies. The word itself lives in entry.txt next to this file and
// is copied byte-for-byte so the submitted artifact is exactly one word.
import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const WORD = "doohickey";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
try {
  copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
} catch {
  // Fall back to the literal word so the output is still exactly one word.
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}
