import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { LightboxProvider } from "@/context/LightboxContext";
import { SnackbarProvider } from "@/context/SnackbarContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LocaleProvider } from "@/context/LocaleContext";
import { profile } from "@/data/profile";
import { calculateCareerYears } from "@/lib/career-calculator";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const careerYears = calculateCareerYears(profile.careerPeriods);

export const metadata: Metadata = {
  title: "정창훈_resume",
  description: `${careerYears}년차 프론트엔드 개발자 정창훈의 경력기술서 — Vue, React, TypeScript`,
  keywords: [
    "프론트엔드 개발자",
    "Frontend Developer",
    "정창훈",
    "React",
    "Vue",
    "TypeScript",
    "경력기술서",
  ],
  authors: [{ name: "정창훈" }],
  openGraph: {
    type: "website",
    title: "정창훈 | Frontend Developer",
    description: `${careerYears}년차 프론트엔드 개발자 정창훈의 경력기술서`,
    locale: "ko_KR",
    siteName: "정창훈 경력기술서",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "정창훈",
  jobTitle: "Frontend Developer",
  url: "https://resume-changhoon.vercel.app",
  sameAs: ["https://github.com/nckdgns3167", "https://linkedin.com/in/changhoon-jung"],
  knowsAbout: ["React", "Vue", "TypeScript", "JavaScript", "Tailwind CSS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t)t='light';document.documentElement.dataset.theme=t;var l=localStorage.getItem('locale');if(!l)l='ko';document.documentElement.dataset.locale=l;document.documentElement.lang=l}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LocaleProvider>
            <SnackbarProvider>
              <LightboxProvider>{children}</LightboxProvider>
            </SnackbarProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
