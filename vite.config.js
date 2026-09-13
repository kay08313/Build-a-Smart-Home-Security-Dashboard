import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Build-a-Smart-Home-Security-Dashboard/", // <-- add this
  plugins: [react()],
});
