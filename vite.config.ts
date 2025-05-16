import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    // Only enable componentTagger in development mode
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Cloudflare Pages expects output to be in the 'dist' folder
    outDir: 'dist',
  },
  // Correctly set up SPA fallback for client-side routing
  server: {
    historyApiFallback: true,
  },
  preview: {
    // Also enable history fallback for the preview server
    historyApiFallback: true,
  },
}));
