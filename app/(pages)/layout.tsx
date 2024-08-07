"use client";
import "@/app/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "../processes/auth";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import CreditsProvider from "../processes/credits/CreditsProvider";
const inter = Inter({
  variable: "--inter-font",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new QueryClient();

  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-inter antialiased ">
        <QueryClientProvider client={client}>
          <AuthProvider>
            <CreditsProvider>
              <ThemeProvider
                attribute="class"
                enableSystem={true}
                disableTransitionOnChange
              >
                {children}
                <Toaster />
              </ThemeProvider>
            </CreditsProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>

      <Analytics />
    </html>
  );
}
