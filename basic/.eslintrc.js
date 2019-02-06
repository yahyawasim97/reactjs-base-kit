module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ["airbnb", "prettier"],
  globals: {
    describe: true,
    it: true,
    beforeEach: true,
    afterEach: true
  },
  parser: "babel-eslint",
  plugins: ["filenames", "html", "immutable", "react"],
  rules: {
    camelcase: ["error", { ignoreDestructuring: true }],
    "filenames/match-exported": ["error", "kebab"],
    "import/default": "error",
    "import/export": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/no-named-as-default": "error",
    "import/no-unresolved": [
      "error",
      {
        amd: true,
        commonjs: true
      }
    ],
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }]
  }
};
