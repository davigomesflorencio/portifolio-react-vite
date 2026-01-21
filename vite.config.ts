import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { createHtmlPlugin } from 'vite-plugin-html'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "Davi Gomes Florencio",
          description: "Personal portfolio template built using Reactjs",
          keywords: "react,typescript,vite",
          author: "Davi Gomes Florencio",
        },
      },
    }),
  ],
});
