// Entry program for "Sum up 20 November's world news in one image".
// The entry image lives in this repository as entry.png; this program copies
// it to the output directory. Outside the grader, MAKEFUN_OUTPUT_DIR stands
// in for /output. Node 22, standard library only, no network access.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  const source = new URL('./entry.png', import.meta.url);
  const target = join(outputDir, 'entry.png');
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
  // The copy must be whole: same byte count as the repository's image.
  if (statSync(target).size !== statSync(source).size) {
    throw new Error('entry.png copy is incomplete');
  }
}

main();
