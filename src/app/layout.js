import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import { Nunito } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "animate.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Book Flow",
  description: "Trusted online book shop",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${nunito.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
