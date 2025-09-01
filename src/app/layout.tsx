import MuiProvider from "@/providers/mui.provider";
import ReactQueryProvider from "@/providers/reactquery.provider";
import ToasterProvider from "@/providers/toaster.provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import Footer from "./_components/footer";
import Header from "./_components/header";
import "./globals.css";
import Script from "next/script";

const nikan = localFont({
  src: [
    {
      path: "./fonts/woff2/Dana-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/woff2/Dana-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/woff2/Dana-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/woff2/Dana-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/woff2/Dana-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/woff2/Dana-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/woff2/Dana-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/woff2/Dana-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/woff2/DanaFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nikan.className}>
    <Script
        id="raychat-widget"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
      window.RAYCHAT_TOKEN = "73da1de1-4b5a-404f-8e5d-c4c6510340e2";
      
        (function() {
          var d = document, s = d.createElement('script');
          s.src = 'https://widget-react.raychat.io/install/widget.js';
          s.async = 1;
          d.head.appendChild(s);
        })();
    `,
        }}
    />
      <title>بیمارستان نیکان</title>
      <link rel="icon" href={"/images/logo.svg"} />
      <body dir="rtl">
        {" "}
        <NextTopLoader showSpinner={false} color="#31D1B0" height={7} />
        <ReactQueryProvider>
          <AppRouterCacheProvider>
            <MuiProvider>
              <ToasterProvider>
                <Header />

                {children}
              </ToasterProvider>
              <Footer />
            </MuiProvider>
          </AppRouterCacheProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
