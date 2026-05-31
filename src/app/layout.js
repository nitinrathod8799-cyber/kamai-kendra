import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Kamai Kendra",
  description: "Earn money online with Kamai Kendra app",
  openGraph: {
  images: ["/banner.jpg"],
},
  verification: {
    google: "3aMoPVIoZ-KMS8uDlbVayqEM-7HODBKPNfJGP5qFPVA",
  keywords: [
    "Kamai Kendra APK",
    "Kamai Kendra Download",
    "Earn money app",
    "Online earning app",
    "Kamai Kendra Android",
    "Money earning APK",
    "how to earn money",
    "how to earn money online",
    "kamai-kendra",
    "kamai kendra",
    "kamai kendra app",
    "earning app",
    "earning apps",
  ],
  },
};
icons: {
  icon: "/favicon.ico",
},


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-607BWJ8GYB"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-607BWJ8GYB');
        `}
      </Script>
    </html>
  );
}