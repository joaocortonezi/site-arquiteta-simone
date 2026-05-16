import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arquiteta Simone Catarina",
  description: "Especialista em Instituição de Condomínio e Projetos Residenciais Premium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
