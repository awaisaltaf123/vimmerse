import "./style.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Head from "./layout/head";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
