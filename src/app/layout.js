import { Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "../contexts/AppContext.jsx";
import { Toaster } from "react-hot-toast";

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
      <Toaster
      toastOptions={{
        className: '',
        style: {
          marginTop:'100px',
          border: '1px solid black',
          backgroundColor:'black',
          padding: '16px',
          color: 'white',
          zIndex:'10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
        },
      }}
      />
        {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
