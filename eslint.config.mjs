import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Build scripts use CommonJS require intentionally
  {
    files: ["scripts/**/*.{ts,cjs,js,mjs}"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  // Landing page uses <img> intentionally for decorative images
  {
    files: ["src/app/page.tsx", "src/components/{ScrollGrowLogo,WebOnboarding}.tsx"],
    rules: {
      "@next/next/no-img-element": "off",
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
