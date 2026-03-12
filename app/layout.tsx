import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SocialSidebar from "./components/SocialSidebar";
import CursorGlow from "./components/CursorGlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Nandhakumar S | MERN Stack & React Native Developer",
    template: "%s | Nandhakumar S",
  },
  description:
    "Official portfolio of Nandhakumar S, a MERN Stack and React Native Developer specializing in scalable full-stack web and mobile applications using React.js, Next.js, Node.js, Express.js, MongoDB, TypeScript, Tailwind CSS, and React Native.",
  keywords: [
    "Nandhakumar S",
    "MERN Stack Developer",
    "React Native Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "TypeScript Developer",
    "Portfolio Website",
    "Chennai Developer",
  ],
  authors: [{ name: "Nandhakumar S" }],
  creator: "Nandhakumar S",
  publisher: "Nandhakumar S",
  applicationName: "Nandhakumar Portfolio",
  category: "technology",
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Nandhakumar S | MERN Stack & React Native Developer",
    description:
      "Explore the professional portfolio of Nandhakumar S, showcasing full-stack web and mobile projects built with MERN stack, Next.js, TypeScript, Tailwind CSS, and React Native.",
    url: "https://yourdomain.com",
    siteName: "Nandhakumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nandhakumar S Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nandhakumar S | MERN Stack & React Native Developer",
    description:
      "Professional portfolio of Nandhakumar S featuring modern web and mobile application projects.",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-white antialiased overflow-x-hidden">
        <div className="relative min-h-screen bg-[#020617]">
          {/* Premium cursor glow */}
          <CursorGlow />

          {/* Global premium background */}
          <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
            {/* base gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#020617_0%,#081122_45%,#020617_100%)]" />

            {/* main top spotlight */}
            <div className="absolute left-1/2 -top-55 h-130 w-130 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[140px]" />

            {/* right purple bloom */}
            <div className="absolute -right-30 top-[8%] h-1054w-105nded-full bg-fuchsia-500/14 blur-[130px]" />

            {/* left cyan bloom */}
            <div className="absolute -left-30 top-[30%] h-90 w-90 rounded-full bg-cyan-500/10 blur-[120px]" />

            {/* bottom ambient glow */}
            <div className="absolute -bottom-45 left-1/2 h-105 w-180 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

            {/* subtle radial overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_32%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.14),transparent_22%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_20%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.08),transparent_22%)]" />

            {/* luxury top beam */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

            {/* subtle screen vignette */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]" />
          </div>

          {/* content layer */}
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <SocialSidebar />

            <main className="relative z-10 flex-1">
              {children}
            </main>

            <Footer />
          </div>

          <Toaster
            position="top-right"
            gutter={12}
            toastOptions={{
              duration: 3500,
              style: {
                background: "rgba(8,15,30,0.78)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "18px",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow:
                  "0 18px 50px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
                padding: "14px 16px",
              },
              success: {
                iconTheme: {
                  primary: "#34d399",
                  secondary: "#08111e",
                },
              },
              error: {
                iconTheme: {
                  primary: "#fb7185",
                  secondary: "#08111e",
                },
              },
            }}
          />
        </div>
      </body>
    </html>
  );
}