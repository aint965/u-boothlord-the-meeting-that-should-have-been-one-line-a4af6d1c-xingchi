import { mkdirSync, writeFileSync } from "node:fs";

// The Meeting That Should Have Been One Line
// One original sentence, written by hand, that kills the meeting outright:
// the decision was already made before anyone was invited, so the
// meeting exists only to let the room pretend it helped make it.
const LINE =
  "The decision was made before this invite went out, so this meeting is just us pretending we helped make it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
