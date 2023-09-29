import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/context/themeContext";
import AuthProvider from "@/context/AuthProvider";
const inter = Inter({ subsets: ["latin","latin"] });

export const metadata = {
  title: "Blog-Past",
  description: "Blog-past home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
