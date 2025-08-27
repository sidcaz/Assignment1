<<<<<<< HEAD
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> e482b5f24e2ebefc872fa56ca5e6829f4774a37d
  server:{
    port:3000,
    cors:true
  }
<<<<<<< HEAD
});
=======
})
>>>>>>> e482b5f24e2ebefc872fa56ca5e6829f4774a37d
