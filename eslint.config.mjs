// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    // default
    "next/core-web-vitals",
    "next/typescript",

    // plugins
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ),
  ...compat.config({
    rules: {
      // We set this off because we need to "duplicate" lot of RAC interfaces
      "@typescript-eslint/no-empty-object-type": "off",
    },
  }),

  ////////////////////////////////////////////////////////////
  // RAC Components import restriction
  ////////////////////////////////////////////////////////////

  {
    // Prevent RAC imports everywhere...
    rules: {
      "no-restricted-imports": [
        "error",
        {
          name: "react-aria-components",
          // Ideally here it'd be nice to have more documentation to let teammates know that we want to
          // restrict this import to the components folder to make sure we don't use unstyled RAC components
          message:
            "⚠️ You may only import from 'react-aria-components' inside the `components/` folder",
        },
      ],
    },
  },

  // ...except for components/**/*.{js,jsx,ts,tsx}
  {
    files: ["components/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "no-restricted-imports": "off",
    },
  },

  ////////////////////////////////////////////////////////////
];

export default eslintConfig;
