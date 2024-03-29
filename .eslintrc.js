module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    commonjs: true,
    amd: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    parser: "babel-eslint",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": "error",
    indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
  },
};
