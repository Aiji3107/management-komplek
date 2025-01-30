import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Managenment Komplek",
  description: "Komplek Mutiara Depok",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
