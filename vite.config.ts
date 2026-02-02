import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'figma:asset/f6a5a50546afd3b863e6c7c55f191836ae5ee4e4.png': path.resolve(__dirname, './src/assets/f6a5a50546afd3b863e6c7c55f191836ae5ee4e4.png'),
      'figma:asset/9c3ea5c6046f456a2fcfa89d9790bd01ccdcb788.png': path.resolve(__dirname, './src/assets/9c3ea5c6046f456a2fcfa89d9790bd01ccdcb788.png'),
      'figma:asset/9a3dd9ff0d5f9e5b9c5a26e6a6970c95859f8656.png': path.resolve(__dirname, './src/assets/9a3dd9ff0d5f9e5b9c5a26e6a6970c95859f8656.png'),
      'figma:asset/86717cf1d8f4b2aa95efb4b4378180c099182587.png': path.resolve(__dirname, './src/assets/86717cf1d8f4b2aa95efb4b4378180c099182587.png'),
      'figma:asset/6d83f0f3df918859dcd477c0eba9e126f8bf516a.png': path.resolve(__dirname, './src/assets/6d83f0f3df918859dcd477c0eba9e126f8bf516a.png'),
      'figma:asset/2bb20c8c1f93c06bc837e2e0c52655f41921507b.png': path.resolve(__dirname, './src/assets/2bb20c8c1f93c06bc837e2e0c52655f41921507b.png'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
