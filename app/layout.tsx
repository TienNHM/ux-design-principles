import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "UX Design Guide - Hướng dẫn thiết kế trải nghiệm người dùng",
  description: "Tài liệu học tập UX Design cơ bản bằng tiếng Việt. Tìm hiểu về nguyên tắc thiết kế, quy trình UX, nghiên cứu người dùng và thực hành thiết kế.",
  generator: "v0.app",
  keywords: ["UX Design", "UI Design", "thiết kế trải nghiệm", "người dùng", "design thinking", "prototyping"],
  authors: [{ name: "UX Design Guide" }],
  openGraph: {
    title: "UX Design Guide - Hướng dẫn thiết kế trải nghiệm người dùng",
    description: "Tài liệu học tập UX Design cơ bản bằng tiếng Việt. Tìm hiểu về nguyên tắc thiết kế, quy trình UX, nghiên cứu người dùng và thực hành thiết kế.",
    type: "website",
    locale: "vi_VN",
    url: "https://tiennhm.github.io/ux-design-principles/",
    siteName: "UX Design Guide",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "UX Design Guide - Hướng dẫn thiết kế trải nghiệm người dùng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UX Design Guide - Hướng dẫn thiết kế trải nghiệm người dùng",
    description: "Tài liệu học tập UX Design cơ bản bằng tiếng Việt",
    images: ["/image.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
