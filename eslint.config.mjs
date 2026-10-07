import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // React Compiler readiness rules (purity/immutability/set-state-in-effect)
    // flag imperative Three.js buffer mutation inside `useFrame` as unsafe.
    // That mutation is the standard, correct way to animate geometry in
    // react-three-fiber and this project does not enable the React
    // Compiler (see next.config.ts), so these rules don't apply here.
    files: ["components/3d/**/*.{ts,tsx}"],
    rules: {
      "react-hooks/purity": "off",
      "react-hooks/immutability": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    // One-time client-only browser API read on mount, synced to state via
    // the documented "synchronize with an external system" effect pattern
    // (avoids SSR/client hydration mismatches from reading `window` during
    // render). See components/PerfProvider.tsx.
    files: ["components/PerfProvider.tsx"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
