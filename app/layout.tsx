import './globals.css'
import type { Metadata } from 'next'
import "../public/css/style.css"
import "../public/css/flexslider.css"
import "../public/css/easy-responsive-tabs.css"
import "../public/css/popuo-box.css"
import "../public/css/bootstrap.css"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Motor Sage',
  description: 'Car Dealership',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      {/* <!-- smoothscroll --> */}
	{/* <script src="js/SmoothScroll.min.js"></script> */}
	{/* <!-- //smoothscroll --> */}

	{/* <!-- start-smooth-scrolling --> */}
	{/* <script src="js/move-top.js"></script> */}
	{/* <script src="js/easing.js"></script> */}
  <script src="js/jquery-2.2.3.min.js"></script>
  {/* <!-- for bootstrap working --> */}
	<script src="js/bootstrap.js"></script>
      </body>
    </html>
  )
}
