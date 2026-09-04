import "./globals.css";

export const metadata = {
  title: "PackageHub",
  description: "Service package starter project"
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}