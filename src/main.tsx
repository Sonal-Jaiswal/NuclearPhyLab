import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Loader from "@/components/ui/loader";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="nuclear-physics-lab-theme">
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </StrictMode>
);
