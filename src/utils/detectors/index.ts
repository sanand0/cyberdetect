// Import all detectors
import { detectBots } from "./bot";
import { detectBruteForce } from "./bruteForce";
import { detectErrors } from "./errors";
import { detectInternalIp } from "./internalIp";
import { detectLfiRfi } from "./lfiRfi";
import { detectPathTraversal } from "./pathTraversal";
import { detectSqlInjection } from "./sqlInjection";
import { detectWpProbe } from "./wpProbe";

// Export all detectors
export {
  detectBots,
  detectBruteForce,
  detectErrors,
  detectInternalIp,
  detectLfiRfi,
  detectPathTraversal,
  detectSqlInjection,
  detectWpProbe,
};

// Detector mapping for easy access
export const DETECTORS = {
  "sql-injection": detectSqlInjection,
  "path-traversal": detectPathTraversal,
  "bots": detectBots,
  "lfi-rfi": detectLfiRfi,
  "wp-probe": detectWpProbe,
  "brute-force": detectBruteForce,
  "errors": detectErrors,
  "internal-ip": detectInternalIp,
} as const;

export type DetectorKey = keyof typeof DETECTORS;
