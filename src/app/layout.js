import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning Next js",
    template: "%s | Learning Next js"
  },
  description: "Trying to learn Next js as best as we can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar></NavBar>
        <main className="h-screen h-max-[600px] ">
          {children}
        </main>
        <footer className="text-center bg-slate-600">
          Awesome next js project
        </footer>
      </body>
    </html>
  );
}
