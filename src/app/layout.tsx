import localFont from "next/font/local";
import Header from "./_components/header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import MuiProvider from "@/providers/mui.provider";
import "./globals.css";
import Footer from "./_components/footer";
import NextTopLoader from "nextjs-toploader";
import ReactQueryProvider from "@/providers/reactquery.provider";

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
      <body dir="rtl">
        <ReactQueryProvider>
          <NextTopLoader color="#31D1B0" />
          <AppRouterCacheProvider>
            <MuiProvider>
              <Header />
              {children}
              <Footer />
            </MuiProvider>
          </AppRouterCacheProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
