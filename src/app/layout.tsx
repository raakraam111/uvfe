import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RootProvider from "../store/RootProvider";
import "./globals.css";

export const metadata = {
  title: "Upside Vault P2E App",
  description: "Upside Vault P2E App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootProvider>
          <ToastContainer />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
