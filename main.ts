import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "On make.fun, tell an AI agent the app you wish existed and by tonight you will be showing friends a working version on your phone — no coding, no setup, just your idea.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${ENTRY}\n`, "utf8");
