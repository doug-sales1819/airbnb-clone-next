import "./styles/globals.css";

import { Nunito } from "next/font/google";

import Navbar from "./components/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/Modal";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "Airbnb",
  description: "Airbnb application clone",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen={true} title="Login" actionLabel="Submit" />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
