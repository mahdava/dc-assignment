# DC Assignment

This repository forks into two projects:

- The main app: [https://dc-assignment.netlify.app/](https://dc-assignment.netlify.app/)
- UI Library components with Storybook: [https://dc-sb.netlify.app](https://dc-sb.netlify.app)

## Requirements

You will need Node and npm (npm comes with Node). It is recommended to use a [node version manager, nvm](https://github.com/nvm-sh/nvm) to install Node. It is more robust than default installations, and allows automatically switching versions between projects.

If you don't want to use a nvm, the latest recommended v22 of [node](https://nodejs.org/en/) will do.

## Getting Started

- Clone the repository:

```bash
git clone https://github.com/your-username/dc-assignment.git
```

- Install npm dependencies:

```bash
cd dc-assignment
nvm use # if you are using nvm
npm i
```

- Run the local frontend server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

```bash
dc-assignment/
├── .github/               # GitHub Actions (Run Playwright tests)
├── .storybook/            # Storybook configuration
├── app/                   # Next.js pages with App router
├── components/            # Shared React components
├── styles/                # Global styles and Tailwind config
├── tests/                 # Playwright test suites
├── public/                # Static assets
├── .eslintrc.js           # ESLint configuration
├── prettier.config.js     # Prettier configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project metadata and scripts
```

## Technologies

Core technologies used in this codebase.

### Next.js

Built with [Next.js](https://nextjs.org) and bootstrapped via `create-next-app`. Uses `next/font` to automatically optimize and load the Geist and Sophia Sans fonts.

- **Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)

### Tailwind CSS

Utility‑first CSS framework for rapid UI development. Integrates with `tailwind-merge` and `tailwind-variants` for advanced styling.

- **Documentation:** [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

### React Aria Components (RAC)

We use [`react-aria-components`](https://react-spectrum.adobe.com/react-aria/) custom‑styled with Tailwind CSS. The base components were taken from:

- Adobe React Spectrum starter kits: https://react-spectrum.adobe.com/react-aria/Form.html?email=sdfsdfs%40live#starter-kits
- React Aria Components Tailwind Starter: https://github.com/zaichaopan/react-aria-components-tailwind-starter/tree/master

and then customized to meet the specific requirements of this assignment. [Read the section about Atomic Design](#atomic-design) to understand the principle by which they are categorized.

### Storybook

Component‑driven development environment for building UI components in isolation. Also available online at [https://dc-sb.netlify.app](https://dc-sb.netlify.app)

- **Start:** `npm run storybook` (port 6006)
- **Build:** `npm run build-storybook`
- **Documentation:** [https://storybook.js.org/docs](https://storybook.js.org/docs)

### Playwright

End‑to‑end testing framework to automate browser interactions and validate user flows.

- **Run tests:** `npm run test:e2e`
- **Documentation:** [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)

## Atomic Design

This project follows the [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) methodology by Brad Frost, which breaks UI into five distinct levels:

1. **Atoms**  
   The basic building blocks—HTML elements like buttons, inputs, labels, icons, and color palettes. In our codebase, atoms live in `components/atoms/` and include things like `<Button />`, `<Input />`, and `<Label />`.

2. **Molecules**  
   Simple combinations of atoms that work together as a unit—for example, a form field consisting of a `<Label />`, `<Input />`, and validation `<ErrorMessage />`. These are in `components/molecules/`.

3. **Organisms**  
   More complex UI sections composed of groups of molecules and/or atoms—for example, a complete signup form or a navigation header. You’ll find these under `components/organisms/`.

4. **Templates**  
   Page-level layout components that define the overall structure—e.g. how organisms are arranged on the page. With Next.js, these components are replaced by `layout.tsx` files.

5. **Pages**  
   Specific instances of templates with real content. In our case, the `page.tsx` files within the `app` folder.

By organizing components this way, we maintain consistency, improve reusability, and make it easier to reason about how small pieces combine into full pages.

## License

This project is private and not licensed for public use.
