/** @type {import('stylelint').Config} */
const config = {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  plugins: ["stylelint-order"],
  overrides: [
    {
      files: ["**/*.css", "**/*.scss", "**/*.sass"],
      rules: {
        "at-rule-no-deprecated": [
          true,
          {
            ignoreAtRules: ["apply"],
          },
        ],
      },
    },
  ],
  ignoreFiles: ["**/*.tsx", "**/*.jsx"],
  rules: {
    "order/properties-alphabetical-order": true,
    "no-empty-source": null,
  },
};

export default config;
