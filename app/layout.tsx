import type { Metadata } from 'next';
import './globals.css'; // Make sure this path is correct for your global styles

export const metadata: Metadata = {
  title: 'Trade Lot Tool', // You can customize this title
  description: 'The ultimate tool for precise trade lot calculations in TradingView.', // Customize description
  icons: {
    icon: '/trade-lot-logo-2.png', // This uses the logo you uploaded to the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* The <head> section is largely managed by Next.js via the metadata object. */}
      {/* You can add a <head> tag here if you have other specific head elements to include. */}
      <body>
        {children} {/* This ensures your page content renders correctly */}
      </body>
    </html>
  );
}
