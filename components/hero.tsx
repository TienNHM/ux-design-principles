"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Roadmap toàn diện
              <span className="block text-primary">UI/UX Design 2025</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Từ kiến thức nền tảng đến kỹ năng chuyên sâu. Học Design Thinking, User Research, Prototyping, Design
              Systems và Testing theo roadmap chuẩn quốc tế với bài tập thực hành.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-base px-8 py-3"
              onClick={() => document.getElementById("foundations")?.scrollIntoView({ behavior: "smooth" })}
            >
              Bắt đầu học ngay
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-3 bg-transparent"
              onClick={() => document.getElementById("resources")?.scrollIntoView({ behavior: "smooth" })}
            >
              Xem tài nguyên
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">8</div>
            <div className="text-sm text-muted-foreground">Chương học chính</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Kỹ năng & công cụ</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">7</div>
            <div className="text-sm text-muted-foreground">Bài tập thực hành</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary">2025</div>
            <div className="text-sm text-muted-foreground">Cập nhật mới nhất</div>
          </div>
        </div>
      </div>
    </section>
  )
}
