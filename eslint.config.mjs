import nextPlugin from "eslint-config-next";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...nextPlugin,
  {
    ignores: [".next/**", "out/**", "node_modules/**", "build/**"],
  },
];

export default eslintConfig;
