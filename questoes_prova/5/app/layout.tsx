import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal de Comunicados - IFMS",
  description: "Comunicação interna com segurança no servidor e acessibilidade dinâmica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // RootLayout continua sendo um Server Component; passa `children` como prop para <Providers>.
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}