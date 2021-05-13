module.exports = {
  env: {
    browser: true,
    jest: true,
    es2021: true,
  },
  ignorePatterns: ["node_modules/"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    // "@react-native-community",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2, { SwitchCase: 1, MemberExpression: 1 }],
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
    "no-plusplus": "off",
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-vars": ["warn", { argsIgnorePattern: "err|req|res|next" }],
    "func-names": "off",
    "consistent-return": "off",
    "no-underscore-dangle": "off",
    "object-curly-spacing": ["error", "always"],
    "no-restricted-syntax": ["error", "ForOfStatement"],
    "no-await-in-loop": "off",
    "object-shorthand": ["error", "properties"],
    "no-param-reassign": ["error", { props: false }],
    "arrow-body-style": ["warn", "as-needed"],
    "wrap-iife": ["error", "inside"],
    "no-unused-expressions": "off",

    // react
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/prefer-stateless-function": "off",
    "react/forbid-prop-types": "off",
    "max-len": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "react-hooks/exhaustive-deps": "warn",

    // expo
    "import/no-unresolved": [2, { ignore: ["@env"] }],
    "no-use-before-define": "off",
    "react/prop-types": "off",
  },
};
