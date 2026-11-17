import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBookBar } from "@/components/layout/MobileBookBar";
import { localBusinessJsonLd } from "@/lib/jsonld";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Seven Seas Sailing | Milos Sailing Cruises",
    template: "%s | Seven Seas Sailing",
  },
  description: site.description,
  keywords: [
    "Milos sailing cruise",
    "Kleftiko cruise",
    "private sailing cruise Milos",
    "Sun Odyssey 439 Milos",
    "Seven Seas Sailing",
    "Adamas boat trip",
    "Polyaigos blue lagoon",
  ],
  openGraph: {
    title: "Seven Seas Sailing | Milos Sailing Cruises",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/sarakiniko-aerial.jpg", width: 2000, height: 1125 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven Seas Sailing | Milos Sailing Cruises",
    description: site.description,
    images: ["/images/sarakiniko-aerial.jpg"],
  },
  icons: {
    icon: "/brand/seven-seas-mark.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-navy text-salt">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <div className="grain" aria-hidden="true" />
        <AppProviders>
          <Header />
          <main id="content" className="flex-1 pb-20 lg:pb-0">
            {children}
          </main>
          <Footer />
          <MobileBookBar />
        </AppProviders>
      </body>
    </html>
  );
}
