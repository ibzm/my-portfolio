import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./Styles/globals.css"; 
import Header from '../app/components/Header'; 
import Footer from '../app/components/Footer'; 
import Navbar from '../app/components/Navbar'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isaac's Portfolio", // Update title for your portfolio
  description: "Software Engineer Portfolio", // Portfolio description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        {/* Optional: Custom Navbar */}
        <Navbar />

        {/* Optional: Header with logo or introduction */}
        <Header />

        {/* Main content */}
        <main className="flex-grow container mx-auto px-4">
          {children}
        </main>

        {/* Optional: Footer with links or contact info */}
        <Footer />
      </body>
    </html>
  );
}
