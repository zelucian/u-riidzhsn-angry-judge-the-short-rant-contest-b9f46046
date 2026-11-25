// Angry Judge: The Short Rant Contest
// A single-line rant about the self-checkout machine that watches
// you scan an item, then accuses you for placing exactly that item
// exactly where it told you to place it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const RANT_LINE =
  "I scan a banana, the self-checkout watches me scan it, then shrieks 'unexpected item in the bagging area' and summons a human to pardon me \u2014 as if I'm laundering fruit one banana at a time.";

const OUTPUT_PATH = "/output/entry.txt";

function checkRant(text: string): void {
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("Rant must not be empty or whitespace only.");
  }
  if (text.length < 1 || text.length > 400) {
    throw new Error(`Rant must be 1-400 characters, got ${text.length}.`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Rant must be a single line with no newline.");
  }
}

function publishRant(): void {
  checkRant(RANT_LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, RANT_LINE, { encoding: "utf8" });
}

publishRant();
