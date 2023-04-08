import NavigationBar from "./components/NavigationBar";
import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Next.js + TypeScript + Tailwind CSS",
  description: "A starter template for Next.js + TypeScript + Tailwind CSS",
};

const font = Montserrat({ subsets: ["cyrillic"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavigationBar/>
        {children}
        </body>
    </html>
  );
}
