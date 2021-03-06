/**
 * @see https://nextjs.org/docs/advanced-features/customizing-babel-config
 */
module.exports = {
  presets: ["next/babel"],
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
