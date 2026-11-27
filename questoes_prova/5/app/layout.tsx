import type { ReactNode } from "react";
import "./global.css";

export const metadata = {
  title: "Cursos",
  description: "Catálogo de cursos",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{display:"flex", margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
