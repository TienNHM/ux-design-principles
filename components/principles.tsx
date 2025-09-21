import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Clock, MousePointer, Heart } from "lucide-react"

export function Principles() {
  const principles = [
    {
      icon: Brain,
      title: "Nguyên lý Gestalt",
      subtitle: "Tâm lý thị giác",
      description: "Người dùng có xu hướng nhìn tổng thể trước chi tiết",
      details: [
        "Proximity: Gần nhau = nhóm với nhau",
        "Similarity: Giống nhau = liên quan",
        "Continuity: Theo dòng chảy tự nhiên",
      ],
      application: "Nhóm các nút chức năng theo cụm, giữ consistency trong thiết kế",
      color: "primary",
    },
    {
      icon: Clock,
      title: "Hick's Law",
      subtitle: "Luật về lựa chọn",
      description: "Càng nhiều lựa chọn → người dùng càng mất thời gian quyết định",
      details: ["Giảm thiểu số lượng tùy chọn", "Phân nhóm các lựa chọn liên quan", "Ưu tiên các tùy chọn quan trọng"],
      application: "Tối giản số lựa chọn trong menu, filter, form",
      color: "accent",
    },
    {
      icon: MousePointer,
      title: "Fitts's Law",
      subtitle: "Luật về tương tác",
      description: "Thời gian click = khoảng cách + kích thước mục tiêu",
      details: ["Nút CTA phải đủ lớn", "Đặt ở vị trí dễ tiếp cận", "Giảm khoảng cách di chuyển"],
      application: "Nút quan trọng to hơn, đặt ở góc dưới màn hình mobile",
      color: "chart-3",
    },
    {
      icon: Heart,
      title: "User-Centered Design",
      subtitle: "Thiết kế lấy người dùng làm trung tâm",
      description: "Thiết kế dựa trên nhu cầu, hành vi và bối cảnh thực tế",
      details: ["Hiểu người dùng qua research", "Thiết kế dựa trên insight", "Test & iterate liên tục"],
      application: "Interview, survey, tạo persona, usability testing",
      color: "chart-4",
    },
  ]

  return (
    <section id="principles" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Chương 2
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Các nguyên tắc cơ bản</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Những quy luật tâm lý và nguyên tắc thiết kế quan trọng mà mọi UX designer cần nắm vững.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon
            return (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${principle.color}/10 rounded-lg`}>
                      <IconComponent className={`h-6 w-6 text-${principle.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{principle.title}</CardTitle>
                      <CardDescription className="text-sm">{principle.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-medium">{principle.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Các nguyên lý nhỏ:</h4>
                    <ul className="space-y-1">
                      {principle.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 bg-${principle.color} rounded-full`}></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`p-3 bg-${principle.color}/5 rounded-lg border border-${principle.color}/20`}>
                    <p className="text-sm">
                      <span className="font-semibold">💡 Ứng dụng:</span> {principle.application}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
