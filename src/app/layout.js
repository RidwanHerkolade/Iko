'use client'
import "./globals.css";
import { PlusJakartaSans, OutfitFont } from "./utils/font";
import AddContextProvider from "@/context/AddContextProvider";
import ContactSideBar from "@/Component/ContactSidebar/ContactSideBar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${PlusJakartaSans.variable} ${OutfitFont.variable}`}>
        <AddContextProvider>
        <div className="main">
          {children}
        </div>
        <ContactSideBar/>
        </AddContextProvider>
      </body>
    </html>
  );
}
