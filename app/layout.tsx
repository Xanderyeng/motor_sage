import type { Metadata } from "next";
// import "../public/css/style.css";
// import "../public/css/flexslider.css";
// import "../public/css/easy-responsive-tabs.css";
// import "../public/css/popuo-box.css";
// import "../public/css/bootstrap.css";
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
        {/* <script src='js/jquery-2.2.3.min.js' async></script> */}
        {/* <!-- for bootstrap working --> */}
        {/* <script src='js/bootstrap.js' async></script> */}
      </body>
    </html>
  );
}
