import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Əgər React istifadə edirsinizsə

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // İstəyirsinizsə bu dəyəri dəyişə bilərsiniz
  },
  server: {
    port: 3000, // Yerli inkişaf serveri üçün port
  },
  preview: {
    port: 5000, // İstehsal mühitində önizləmə üçün port
  },
  base: '/', // Domenə əsas URL kökü (domeninizin əsas yoludur)
});