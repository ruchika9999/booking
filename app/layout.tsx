import { Montserrat } from "next/font/google";
import NavigationBar from "./components/NavigationBar";
import RegisterModal from "./components/Modals/RegisterModal";
import "./globals.css";
import LoginModal from "./components/Modals/LoginModal";

export const metadata = {
  title: "Next.js + TypeScript + Tailwind CSS",
  description: "A starter template for Next.js + TypeScript + Tailwind CSS",
};

const font = Montserrat({ subsets: ["cyrillic"] });

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  const { children } = props;

  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <NavigationBar />
        <LoginModal/>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
