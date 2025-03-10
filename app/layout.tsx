import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicolás Andrés Borzillo | Portfolio",
  description: "Portfolio profesional de Nicolás Andrés Borzillo Basilio, DevOps Engineer y desarrollador",
  keywords: ["DevOps", "AWS", "Cloud", "Engineer", "Developer", "Portfolio", "Nicolás Borzillo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${nunito.variable} font-nunito antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
