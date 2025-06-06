import MuiProvider from "@/providers/mui.provider";
import ReactQueryProvider from "@/providers/reactquery.provider";
import ToasterProvider from "@/providers/toaster.provider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import localFont from "next/font/local";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import Footer from "./_components/footer";
import Header from "./_components/header";
import "./globals.css";
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
        id="goftino-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(){var i="TNsgAN",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);} "complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();`,
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
