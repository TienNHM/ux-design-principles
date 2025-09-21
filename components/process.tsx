import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Lightbulb, PenTool, Smartphone, TestTube, RotateCcw, Brain } from "lucide-react"

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Research",
      description: "Phân tích thị trường, phỏng vấn người dùng",
      details:
        "Tìm hiểu nhu cầu, hành vi và pain points của người dùng thông qua surveys, interviews và competitive analysis.",
    },
    {
      icon: Lightbulb,
      title: "Ideation",
      description: "Brainstorm giải pháp, sketch nhanh",
      details: "Tạo ra nhiều ý tưởng khác nhau, vẽ sketches và xác định hướng giải quyết vấn đề.",
    },
    {
      icon: PenTool,
      title: "Wireframe",
      description: "Bản phác thảo khung (low fidelity)",
      details: "Tạo wireframes để định hình cấu trúc và layout cơ bản của sản phẩm.",
    },
    {
      icon: Smartphone,
      title: "Prototype",
      description: "Mẫu thử có thể click được",
      details: "Xây dựng prototype tương tác để mô phỏng trải nghiệm người dùng thực tế.",
    },
    {
      icon: TestTube,
      title: "Test",
      description: "Thử nghiệm với user thật",
      details: "Tiến hành usability testing để thu thập feedback và phát hiện vấn đề.",
    },
    {
      icon: RotateCcw,
      title: "Iterate",
      description: "Cải tiến liên tục dựa trên feedback",
      details: "Phân tích kết quả test và cải thiện sản phẩm trong các vòng lặp tiếp theo.",
    },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Chương 3
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Quy trình thiết kế UX chuẩn
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Quy trình 6 bước từ nghiên cứu đến triển khai, đảm bảo sản phẩm được thiết kế dựa trên nhu cầu thực tế của
            người dùng.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
              <span className="font-semibold">Quy trình:</span>
              <span>Research → Ideation → Wireframe → Prototype → Test → Iterate</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="text-sm">{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.details}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Design Thinking
              </CardTitle>
              <CardDescription>5 bước tư duy thiết kế</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground mb-3">
                  Tập trung vào sáng tạo giải pháp dựa trên hiểu biết sâu về người dùng
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Empathize", "Define", "Ideate", "Prototype", "Test"].map((phase, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {phase}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-accent" />
                Lean UX
              </CardTitle>
              <CardDescription>Phương pháp tinh gọn cho Agile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground mb-3">
                  Tinh gọn hơn, áp dụng trong môi trường phát triển nhanh
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Build", "Measure", "Learn"].map((phase, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-accent text-accent">
                      {phase}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
