module.exports = {
  root: true,
  env: { browser: true,   "es2021": true, node: true },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  "globals": {
    "JSX": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["html", "react", "@typescript-eslint", "simple-import-sort"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/display-name": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true,
        "args": "none"
      }
    ]
  },
  "overrides": [
    // override "simple-import-sort" config
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {
        "simple-import-sort/imports": [
          "error",
          {
            "groups": [
              // Packages `react` related packages come first.
              ["^react"],
              ["^@?\\w"],
              // Internal packages.
              ["^(@)(/.*|$)"],
              // Side effect imports.
              ["^\\u0000"],
              // Parent imports. Put `..` last.
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              // Other relative imports. Put same-folder imports and `.` last.
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              // Style imports.
              ["^.+\\.?(css)$"]
            ]
          }
        ]
      }
    },
    {
      "files": ["**/_ui/**/*.tsx", "**/_ui/**/*.ts"],
      "rules": {
        "no-restricted-imports": "off"
      }
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
