// import { defineConfig } from '@tanstack/react-start/config'
// import tsConfigPaths from 'vite-tsconfig-paths'

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [
    tsconfigPaths({
      projects: ["./tsconfig.json"],
    }),
    // tailwindcss(), sentry(), ...
    tanstackStart({
      tsr: {
        // appDirectory: "src",
      },
    }),
  ],
});

// export default defineConfig({
//   vite: {
//     plugins: [
//       tsConfigPaths({
//         projects: ['./tsconfig.json'],
//       }),
//     ],
//   },
// })
