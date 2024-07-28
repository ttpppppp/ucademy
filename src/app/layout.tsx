import type { Metadata } from "next";
import "./globals.css"; // Đảm bảo import đúng
import { manrope } from "@/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata: Metadata = {
  title: "Ucademy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={manrope.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer 
              autoClose = {2000}
              bodyClassName= "text-sm font-medium"
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
