// news-image-20261122 — "The World Today", Sunday 22 November 2026.
// Node 22, standard library only. The entry image lives beside this file as
// frontpage.jpg; this program writes it to the grader's output directory as
// entry.png (a JPEG by content, which the gate tells apart by its first
// bytes). It reads and writes nothing else, uses no network, and writes the
// same bytes on every run, so two runs are byte-identical by construction.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Resolve the image next to this script, never relative to the caller's
// working directory, so the program works from anywhere.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'frontpage.jpg');

// The grader sets MAKEFUN_OUTPUT_DIR outside its container; inside it the
// output directory is /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const bytes = readFileSync(source);
const target = join(outDir, 'entry.png');
writeFileSync(target, bytes);

// Fail loudly instead of silently shipping a short write: the gate reads
// exactly these bytes, so confirm the copy landed whole.
if (readFileSync(target).length !== bytes.length) {
  throw new Error(`short write: ${target} is not ${bytes.length} bytes`);
}
