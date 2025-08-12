import { ReactNode } from "react";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers";
import { LanguageProvider } from "./context/LanguageContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap',
});

export const metadata = {
  title: "Oda Roba Hospital",
  description: "Quality healthcare services in Oromia, Ethiopia",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Server-side cookie access
  const cookieStore = cookies();
  const langCookie = cookieStore.get('oda-roba-language');
  const initialLanguage = langCookie?.value || 'en';

  return (
    <html lang={initialLanguage} className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta 
          name="viewport" 
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
        suppressHydrationWarning
      >
        <LanguageProvider initialLanguage={initialLanguage}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
