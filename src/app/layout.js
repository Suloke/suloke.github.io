import "./globals.css";
import { Hubballi, Open_Sans } from "next/font/google";

const hubballi = Hubballi({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Suloke",
  description:
    "Welcome to Suloke, your partner for navigating the evolving landscape of digital transformation.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`flex flex-col min-h-screen ${hubballi.className} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
