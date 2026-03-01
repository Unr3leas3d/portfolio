import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar"; const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL ? new URL(`https://${process.env.VERCEL_URL}`) : new URL("http://localhost:3000"),
  title: {
    default: "Ayub | Frontend Developer",
    template: "%s | Ayub Mohamed"
  },
  description: "Portfolio of Ayub, a Frontend Developer focused on UX/UI and building modern web applications with Generative AI.",
  keywords: ["Frontend Developer", "React", "Next.js", "Tailwind CSS", "UX/UI", "Generative AI"],
  authors: [{ name: "Ayub Mohamed" }],
  creator: "Ayub Mohamed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Ayub | Frontend Developer",
    description: "Portfolio of Ayub, a Frontend Developer focused on UX/UI and building modern web applications with Generative AI.",
    siteName: "Ayub Mohamed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayub | Frontend Developer",
    description: "Portfolio of Ayub, a Frontend Developer focused on UX/UI and building modern web applications with Generative AI.",
    creator: "@promptdivs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
