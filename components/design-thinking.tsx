import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Users, Target, Zap } from "lucide-react"

export function DesignThinking() {
  const phases = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Empathize",
      description: "Hiểu người dùng thông qua quan sát và tương tác",
      methods: ["User Interviews", "Observation", "Empathy Maps", "Journey Mapping"],
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Define",
      description: "Xác định vấn đề cốt lõi cần giải quyết",
      methods: ["Problem Statement", "Point of View", "How Might We", "User Personas"],
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Ideate",
      description: "Tạo ra nhiều ý tưởng sáng tạo để giải quyết vấn đề",
      methods: ["Brainstorming", "Mind Mapping", "SCAMPER", "Crazy 8s"],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Prototype",
      description: "Tạo mẫu thử để kiểm tra ý tưởng",
      methods: ["Paper Prototypes", "Digital Wireframes", "Interactive Prototypes", "Storyboards"],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Test",
      description: "Kiểm tra và cải thiện giải pháp với người dùng thực",
      methods: ["Usability Testing", "A/B Testing", "User Feedback", "Iteration"],
    },
  ]

  return (
    <section id="design-thinking" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Design Thinking
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-balance">Quy Trình Design Thinking</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Design Thinking là phương pháp giải quyết vấn đề tập trung vào con người, giúp tạo ra các giải pháp sáng tạo
            và hiệu quả thông qua 5 giai đoạn chính.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{phase.icon}</div>
                  <div className="text-sm font-medium text-primary">Giai đoạn {index + 1}</div>
                </div>
                <CardTitle className="text-xl">{phase.title}</CardTitle>
                <CardDescription className="text-pretty">{phase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-muted-foreground">Phương pháp chính:</h4>
                  <div className="flex flex-wrap gap-2">
                    {phase.methods.map((method, methodIndex) => (
                      <Badge key={methodIndex} variant="outline" className="text-xs">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card rounded-lg border">
          <h3 className="text-xl font-semibold mb-4">Lợi ích của Design Thinking</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Cho tổ chức:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Tăng khả năng đổi mới và sáng tạo</li>
                <li>• Giảm rủi ro trong phát triển sản phẩm</li>
                <li>• Tăng sự hài lòng của khách hàng</li>
                <li>• Cải thiện hiệu quả làm việc nhóm</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Cho designer:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Hiểu sâu hơn về nhu cầu người dùng</li>
                <li>• Tạo ra giải pháp có tác động thực tế</li>
                <li>• Phát triển tư duy phản biện</li>
                <li>• Nâng cao kỹ năng giải quyết vấn đề</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
