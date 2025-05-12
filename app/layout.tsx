export const metadata: Metadata = {
  title: 'Trade Lot Tool', // Updated title
  description: 'The trading tool you\'ve been waiting for.', // Example description
  icons: {
    icon: '/trade-lot-logo-2.png', // Path to your favicon in the public folder
    // apple: '/apple-icon.png', // Optional: for Apple touch icon
  },
};

export default function RootLayout(/*...*/) {
  return (
    <html lang="en">
      {/* No need for the <head> tag here if using metadata.icons, 
          Next.js handles it. But if you have other <head> elements, keep the <head> tag. */}
      <body>{children}</body>
    </html>
  );
}
