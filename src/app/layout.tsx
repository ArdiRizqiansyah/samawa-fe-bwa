import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/assets/css/index.css";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samawa",
  description: "Get your wedding done",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} antialiased`}
      >
        {children}

        {modal}
      </body>
    </html>
  );
}
