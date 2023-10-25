import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Motor Store",
  description: "Car Dealership",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
