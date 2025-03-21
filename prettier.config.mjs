/** @type {import('prettier').Config} */
const config = {
  semi: false,
  printWidth: 100,
  plugins: ["prettier-plugin-tailwindcss"],
  // tailwindcss
  tailwindAttributes: ["theme"],
  tailwindFunctions: ["twMerge", "createTheme"],
}

export default config
