import "./app.css";
import Alpine from "alpinejs";
import { createIcons, icons } from "lucide";

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}

window.Alpine = Alpine;
Alpine.start();

document.addEventListener("DOMContentLoaded", () => {
  createIcons({ icons });
});
