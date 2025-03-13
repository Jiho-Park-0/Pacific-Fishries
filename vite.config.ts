import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // 빌드 출력 폴더 확인
    emptyOutDir: true,
  },
});
