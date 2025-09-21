import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, Smartphone, Monitor, Zap, Pencil, Code } from "lucide-react"

export function Prototyping() {
  const fidelityLevels = [
    {
      level: "Low Fidelity",
      icon: <Pencil className="h-6 w-6" />,
      description: "Sketches và wireframes cơ bản để thể hiện ý tưởng nhanh chóng",
      tools: ["Paper & Pencil", "Balsamiq", "POP", "Marvel"],
      pros: ["Nhanh chóng", "Chi phí thấp", "Dễ thay đổi", "Tập trung vào concept"],
      cons: ["Thiếu chi tiết", "Khó test interaction", "Không realistic"],
      when: "Giai đoạn ideation, concept validation",
    },
    {
      level: "Medium Fidelity",
      icon: <Layers className="h-6 w-6" />,
      description: "Wireframes chi tiết hơn với một số tương tác cơ bản",
      tools: ["Figma", "Sketch", "Adobe XD", "Axure"],
      pros: ["Cân bằng tốc độ và chi tiết", "Có thể test flow", "Dễ communicate"],
      cons: ["Chưa có visual design", "Limited interactions"],
      when: "User flow testing, stakeholder review",
    },
    {
      level: "High Fidelity",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Prototype gần giống sản phẩm thật với visual design đầy đủ",
      tools: ["Figma", "Principle", "Framer", "ProtoPie"],
      pros: ["Realistic experience", "Detailed interactions", "Tốt cho testing"],
      cons: ["Tốn thời gian", "Chi phí cao", "Khó thay đổi"],
      when: "Usability testing, final validation",
    },
  ]

  const prototypingTools = [
    {
      category: "Design Tools",
      icon: <Monitor className="h-5 w-5" />,
      tools: [
        { name: "Figma", description: "Collaborative design và prototyping", level: "All levels" },
        { name: "Sketch", description: "Mac-based design tool với plugins mạnh", level: "Medium-High" },
        { name: "Adobe XD", description: "All-in-one UX/UI design platform", level: "Medium-High" },
        { name: "Framer", description: "Advanced prototyping với code components", level: "High" },
      ],
    },
    {
      category: "Specialized Tools",
      icon: <Zap className="h-5 w-5" />,
      tools: [
        { name: "Principle", description: "Timeline-based animation prototyping", level: "High" },
        { name: "ProtoPie", description: "Sensor-based interactive prototyping", level: "High" },
        { name: "InVision", description: "Clickable prototypes từ static designs", level: "Medium" },
        { name: "Marvel", description: "Simple prototyping và user testing", level: "Low-Medium" },
      ],
    },
    {
      category: "Code-Based",
      icon: <Code className="h-5 w-5" />,
      tools: [
        { name: "React/Vue", description: "Frontend frameworks cho functional prototypes", level: "High" },
        { name: "Codepen", description: "Quick web-based prototyping", level: "Medium" },
        { name: "Webflow", description: "Visual web development platform", level: "Medium-High" },
        { name: "Bubble", description: "No-code app development", level: "High" },
      ],
    },
  ]

  const prototypingProcess = [
    "Define prototype goals và scope",
    "Choose appropriate fidelity level",
    "Create user flows và scenarios",
    "Build prototype incrementally",
    "Test với target users",
    "Iterate based on feedback",
    "Document findings và next steps",
  ]

  return (
    <section id="prototyping" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Prototyping
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-balance">Tạo Mẫu Thử (Prototyping)</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Prototyping là quá trình tạo ra phiên bản thử nghiệm của sản phẩm để kiểm tra ý tưởng, test usability và
            communicate design concepts.
          </p>
        </div>

        {/* Fidelity Levels */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-semibold text-center">Mức Độ Chi Tiết (Fidelity)</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {fidelityLevels.map((level, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">{level.icon}</div>
                    <CardTitle className="text-xl">{level.level}</CardTitle>
                  </div>
                  <CardDescription className="text-pretty">{level.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Tools phổ biến:</h4>
                    <div className="flex flex-wrap gap-1">
                      {level.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <h5 className="font-medium text-green-600 mb-1">Ưu điểm:</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        {level.pros.map((pro, proIndex) => (
                          <li key={proIndex}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-600 mb-1">Nhược điểm:</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        {level.cons.map((con, conIndex) => (
                          <li key={conIndex}>• {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm">
                      <span className="font-medium">Khi nào sử dụng:</span> {level.when}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Prototyping Tools */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-semibold text-center">Công Cụ Prototyping</h3>
          <div className="space-y-8">
            {prototypingTools.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                  <h4 className="text-xl font-semibold">{category.category}</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <Card key={toolIndex} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{tool.name}</CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {tool.level}
                          </Badge>
                        </div>
                        <CardDescription className="text-pretty">{tool.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prototyping Process */}
        <div className="p-6 bg-card rounded-lg border">
          <h3 className="text-xl font-semibold mb-6 text-center">Quy Trình Prototyping</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {prototypingProcess.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <p className="text-sm text-pretty">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
