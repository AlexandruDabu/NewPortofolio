import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4001,
  },
  define: {
    'process.env.REACT_APP_GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.REACT_APP_GOOGLE_MAPS_API_KEY),
    'process.env.REACT_APP_GOOGLE_MAPS_MAP_ID': JSON.stringify(process.env.REACT_APP_GOOGLE_MAPS_MAP_ID),
  },
});
