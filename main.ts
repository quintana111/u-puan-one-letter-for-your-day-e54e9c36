// Entry for u-puan-one-letter-for-your-day-e54e9c36
// Chosen letter: Z — hidden word "zero sleep".
// Z is the sleep letter (Zzz), so pairing it with zero sleep is the
// sharpest contrast: vivid, funny, and true for a grind day.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = "Z";

const dir = dirname(fileURLToPath(import.meta.url));
const raw = readFileSync(join(dir, "entry.txt"), "utf8");
// Strict: the file must be exactly one character, no newline or spaces.
if (raw.length !== 1 || !/^[A-Z]$/.test(raw)) {
  throw new Error(`entry.txt must be exactly one letter A-Z, got: ${JSON.stringify(raw)}`);
}
const text = raw;
if (text !== ENTRY) {
  throw new Error(`entry.txt (${text}) does not match ENTRY (${ENTRY})`);
}

console.log(text);
