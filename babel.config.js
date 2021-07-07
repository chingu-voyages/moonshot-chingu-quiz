/**
 * @see https://nextjs.org/docs/advanced-features/customizing-babel-config
 */
module.exports = {
  presets: [
    "next/babel",
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        minify: false,
        transpileTemplateLiterals: false,
      },
    ],
  ],
};
