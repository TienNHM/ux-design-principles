"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight, Target, Lightbulb } from "lucide-react"

const exercises = [
  {
    id: 1,
    title: "So sánh UI vs UX",
    description: "Lấy ví dụ một ứng dụng thực tế anh dùng hàng ngày (ví dụ: Grab, Shopee, Zalo).",
    requirements: [
      "Xác định đâu là UI (màu sắc, nút, icon, layout)",
      "Xác định đâu là UX (trải nghiệm khi đặt xe, thanh toán, tìm sản phẩm)",
    ],
    hints: [
      "UI: nút 'Đặt xe', màu xanh chủ đạo Grab, icon xe máy/ô tô",
      "UX: việc đặt xe nhanh chóng chỉ trong 3 bước, ứng dụng gợi ý vị trí gần nhất, trải nghiệm mượt",
    ],
  },
  {
    id: 2,
    title: "Áp dụng Nguyên lý Gestalt",
    description: "Chọn một trang web bất kỳ (ví dụ: trang chủ Shopee, Tiki, Ticketbox).",
    requirements: ["Xác định các nguyên lý Gestalt đang được áp dụng: Proximity, Similarity, Continuity"],
    hints: [
      "Shopee: các sản phẩm khuyến mãi được nhóm gần nhau (Proximity)",
      "Tiki: cùng một kiểu font và màu nền cho toàn bộ card sản phẩm (Similarity)",
      "Ticketbox: banner kéo ngang hiển thị nhiều sự kiện (Continuity)",
    ],
  },
  {
    id: 3,
    title: "Hick's Law",
    description: "Thiết kế form đăng ký sự kiện.",
    requirements: [
      "Phiên bản A: có 12 trường (Tên, Email, SĐT, CMND, Công ty, Chức vụ, Địa chỉ, Ngày sinh, Giới tính, Ngành nghề, Ghi chú, Mã giảm giá)",
      "Phiên bản B: chỉ có 3 trường bắt buộc (Tên, Email, SĐT) + nút 'Thông tin bổ sung' mở rộng",
      "So sánh UX của 2 phiên bản",
    ],
    hints: ["Phiên bản B tốt hơn vì giảm tải nhận thức, giúp người dùng hành động nhanh hơn"],
  },
  {
    id: 4,
    title: "Fitts's Law",
    description: "Thiết kế lại nút 'Đặt vé ngay' cho một website bán vé.",
    requirements: ["Đặt ở đâu để dễ thao tác nhất trên mobile?", "Kích thước và màu sắc thế nào để tối ưu?"],
    hints: [
      "Nút nên đặt ở cuối màn hình (gần ngón cái, dễ bấm)",
      "Kích thước lớn, màu nổi bật (ví dụ: xanh lá hoặc cam)",
    ],
  },
  {
    id: 5,
    title: "User-Centered Design (UCD)",
    description: "Giả sử anh thiết kế app đặt vé xem phim.",
    requirements: ["Viết ra 3 insight từ góc nhìn người dùng", "Đề xuất một cải tiến UI/UX từ insight đó"],
    hints: [
      "Insight 1: Người dùng ghét phải nhập lại thông tin nhiều lần → cải tiến: lưu thông tin tài khoản cho lần sau",
      "Insight 2: Người dùng muốn xem lịch chiếu nhanh → cải tiến: thêm filter theo ngày/giờ",
      "Insight 3: Người dùng muốn thanh toán nhanh → cải tiến: tích hợp ví điện tử, 1-click payment",
    ],
  },
  {
    id: 6,
    title: "Quy trình UX Design",
    description: "Với ứng dụng E-commerce bán vé sự kiện, mô tả ngắn quy trình từ Research → Test → Iterate.",
    requirements: ["Mô tả từng bước trong quy trình UX Design"],
    hints: [
      "Research: phỏng vấn 10 người từng mua vé online → phát hiện họ hay bỏ giỏ vì form dài",
      "Ideation: brainstorm giải pháp rút gọn form",
      "Prototype: làm prototype form 3 trường bằng Figma",
      "Test: thử với 5 người dùng thật, đo thời gian điền form",
      "Iterate: thêm tính năng auto-fill thông tin",
    ],
  },
  {
    id: 7,
    title: "Design Thinking vs Lean UX",
    description: "So sánh 2 cách tiếp cận trong dự án nhỏ (ví dụ: redesign app đặt vé bus).",
    requirements: ["So sánh ưu nhược điểm của Design Thinking và Lean UX"],
    hints: [
      "Design Thinking: tập trung nhiều vào phase Empathize & Ideate → tốn thời gian nghiên cứu nhưng insight sâu",
      "Lean UX: ra prototype nhanh, test liên tục, phù hợp môi trường Agile",
    ],
  },
]

export function Exercises() {
  const [openExercises, setOpenExercises] = useState<number[]>([])

  const toggleExercise = (id: number) => {
    setOpenExercises((prev) => (prev.includes(id) ? prev.filter((exerciseId) => exerciseId !== id) : [...prev, id]))
  }

  return (
    <section id="exercises" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Bài tập thực hành
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Bài tập thực hành UI/UX cơ bản</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            7 bài tập giúp bạn áp dụng kiến thức vào thực tế và kiểm tra hiểu biết về UX Design
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {exercise.id}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exercise.title}</CardTitle>
                      <CardDescription className="mt-1">{exercise.description}</CardDescription>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => toggleExercise(exercise.id)} className="shrink-0">
                    {openExercises.includes(exercise.id) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>

              <Collapsible open={openExercises.includes(exercise.id)}>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Target className="w-4 h-4 text-primary" />
                          Yêu cầu:
                        </h4>
                        <ul className="space-y-2">
                          {exercise.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-amber-500" />
                          Gợi ý đáp án:
                        </h4>
                        <ul className="space-y-2">
                          {exercise.hints.map((hint, index) => (
                            <li key={index} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 shrink-0" />
                              {hint}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card border rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">Hoàn thành bài tập</h3>
            <p className="text-muted-foreground">
              Sau khi làm xong 7 bài này, bạn sẽ <strong>nắm chắc phần nền tảng</strong> và bắt đầu quen với việc nhìn
              một sản phẩm bằng "con mắt UI/UX designer".
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
