import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiệp gửi em · 20.10",
  description: "Thiệp chúc mừng 20/10 dành tặng em",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;600&family=Cormorant+Garamond:ital,wght@0,500;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
