import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "../contexts/AppContext.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
        {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
