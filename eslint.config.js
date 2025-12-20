import js from "@eslint/js"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import next from "eslint-config-next"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"

export default [
  // -------- IGNORE --------
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/out/**",
      "**/coverage/**",
    ],
  },

  // -------- BASE JS --------
  js.configs.recommended,

  // -------- NODE (api, bot, db) --------
  {
    files: [
      "src/apps/api/**/*.{js,ts}",
      "src/apps/bot/**/*.{js,ts}",
      "src/db.{js,ts}",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        console: "readonly",
        fetch: "readonly",
      },
    },
    rules: {
      "no-console": "off",
    },
  },

  // -------- WEB (TypeScript + React) --------
  {
    files: ["src/apps/web/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react,
      "react-hooks": reactHooks,
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // -------- NEXT.JS (ТОЛЬКО WEB) --------
  {
    files: ["src/apps/web/**/*.{js,ts,jsx,tsx}"],
    ...next.coreWebVitals,
  },
]
