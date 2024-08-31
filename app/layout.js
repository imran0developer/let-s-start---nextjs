import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/sections/navbar";
import Footer from "./sections/footer";
import SessionWrapper from "@/app/provider-wrapper/SessionWrapper";
import { ThemeProvider } from "@/app/provider-wrapper/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "sorted",
  description: "Focus on innovation, leave the groundwork to us.",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
    <html lang="en">
      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
            <main className="flex flex-col min-h-screen">
            <Navbar></Navbar>
              {children}
            <Footer className="flex-grow"></Footer>
            </main>
        </ThemeProvider>

      </body>
    </html>
    </SessionWrapper>
  );
}
