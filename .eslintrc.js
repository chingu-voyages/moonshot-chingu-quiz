module.exports = {
  extends: ["eslint:recommended", "airbnb", "prettier"],
  rules: {
    "react/jsx-props-no-spreading": [1, { custom: "ignore" }],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx", ".json"] },
    ],
    "react/prop-types": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
        json: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
  },
  env: {
    browser: true,
    node: true,
  },
};
