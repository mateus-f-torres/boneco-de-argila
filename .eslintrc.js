module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true,
    "jquery": true,
    "jest": true
  },
  "extends": ["eslint:recommended","google", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
        "impliedStrict": true,
        "experimentalObjectRestSpread": true,
        "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": [
      "warn"
    ],
    "no-debugger": [
      "warn"
    ],
    "indent": [
      "error",
      2
    ],
    "react/jsx-uses-react": [
      "warn"
    ],
    "react/jsx-uses-vars": [
      "warn"
    ],
    "spaced-comment": [
      "error", "always", { "exceptions": ["@flow"]}
    ],
    "require-jsdoc": [
      "off"
    ]
  }
}
