import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Eye, BarChart3, Target } from "lucide-react"

export function Testing() {
  const testingMethods = [
    {
      category: "Usability Testing",
      icon: <Users className="h-5 w-5" />,
      description: "Kiểm tra khả năng sử dụng sản phẩm với người dùng thực",
      methods: [
        {
          name: "Moderated Testing",
          description: "Có người điều hành hướng dẫn và quan sát trực tiếp",
          pros: ["Deep insights", "Có thể hỏi follow-up", "Real-time clarification"],
          cons: ["Tốn thời gian", "Chi phí cao", "Có thể bias"],
        },
        {
          name: "Unmoderated Testing",
          description: "Người dùng tự thực hiện tasks mà không có sự hướng dẫn",
          pros: ["Natural behavior", "Scalable", "Cost-effective"],
          cons: ["Limited insights", "Không thể clarify", "Technical issues"],
        },
        {
          name: "Remote Testing",
          description: "Thực hiện testing từ xa qua video call hoặc tools",
          pros: ["Wider participant pool", "Natural environment", "Cost savings"],
          cons: ["Technical challenges", "Limited observation", "Connection issues"],
        },
      ],
    },
    {
      category: "A/B Testing",
      icon: <BarChart3 className="h-5 w-5" />,
      description: "So sánh hiệu quả của hai phiên bản khác nhau",
      methods: [
        {
          name: "Split Testing",
          description: "Chia traffic đều cho 2 versions và so sánh metrics",
          pros: ["Statistical significance", "Real user data", "Clear results"],
          cons: ["Cần traffic lớn", "Chỉ test được ít elements", "Time consuming"],
        },
        {
          name: "Multivariate Testing",
          description: "Test nhiều elements cùng lúc để tìm combination tốt nhất",
          pros: ["Test multiple variables", "Find optimal combination", "Comprehensive"],
          cons: ["Phức tạp", "Cần traffic rất lớn", "Khó interpret"],
        },
      ],
    },
    {
      category: "Accessibility Testing",
      icon: <Eye className="h-5 w-5" />,
      description: "Đảm bảo sản phẩm accessible cho mọi người dùng",
      methods: [
        {
          name: "Screen Reader Testing",
          description: "Test với screen readers như NVDA, JAWS, VoiceOver",
          pros: ["Real accessibility experience", "Find navigation issues", "Content structure"],
          cons: ["Learning curve", "Time intensive", "Need specialized knowledge"],
        },
        {
          name: "Keyboard Navigation",
          description: "Test toàn bộ interface chỉ bằng keyboard",
          pros: ["Easy to perform", "Find focus issues", "Motor accessibility"],
          cons: ["Limited scope", "Không cover visual issues", "Basic testing"],
        },
        {
          name: "Color Contrast Testing",
          description: "Kiểm tra contrast ratio theo WCAG guidelines",
          pros: ["Automated tools available", "Clear standards", "Visual accessibility"],
          cons: ["Chỉ cover màu sắc", "Không test context", "Limited scope"],
        },
      ],
    },
  ]

  const testingProcess = [
    {
      step: "Plan",
      title: "Test Planning",
      description: "Define objectives, choose methods, recruit participants",
      deliverables: ["Test Plan", "Scenarios", "Success Metrics"],
    },
    {
      step: "Prepare",
      title: "Test Preparation",
      description: "Setup environment, create tasks, prepare materials",
      deliverables: ["Test Scripts", "Prototypes", "Recording Setup"],
    },
    {
      step: "Execute",
      title: "Test Execution",
      description: "Conduct tests, observe behaviors, collect data",
      deliverables: ["Session Recordings", "Notes", "Raw Data"],
    },
    {
      step: "Analyze",
      title: "Data Analysis",
      description: "Analyze findings, identify patterns, prioritize issues",
      deliverables: ["Findings Report", "Issue Priority", "Recommendations"],
    },
    {
      step: "Report",
      title: "Results Reporting",
      description: "Present findings, suggest improvements, plan next steps",
      deliverables: ["Executive Summary", "Detailed Report", "Action Plan"],
    },
  ]

  const testingTools = [
    { name: "Maze", category: "Unmoderated Testing", description: "Remote usability testing platform" },
    { name: "UserTesting", category: "Moderated Testing", description: "Video-based user research platform" },
    { name: "Hotjar", category: "Behavior Analytics", description: "Heatmaps, recordings, feedback tools" },
    { name: "Optimizely", category: "A/B Testing", description: "Experimentation platform" },
    { name: "Google Optimize", category: "A/B Testing", description: "Free A/B testing tool" },
    { name: "axe", category: "Accessibility", description: "Automated accessibility testing" },
    { name: "WAVE", category: "Accessibility", description: "Web accessibility evaluation tool" },
    { name: "Lookback", category: "Remote Testing", description: "Live user research platform" },
  ]

  const metrics = [
    { name: "Task Success Rate", description: "Percentage of tasks completed successfully" },
    { name: "Time on Task", description: "Average time to complete each task" },
    { name: "Error Rate", description: "Number of errors made during tasks" },
    { name: "System Usability Scale (SUS)", description: "Standardized usability questionnaire" },
    { name: "Net Promoter Score (NPS)", description: "Likelihood to recommend the product" },
    { name: "Conversion Rate", description: "Percentage of users completing desired actions" },
  ]

  return (
    <section id="testing" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Testing & Validation
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-balance">Kiểm Thử & Xác Thực</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Testing là bước quan trọng để validate design decisions, phát hiện usability issues và đảm bảo sản phẩm đáp
            ứng nhu cầu người dùng.
          </p>
        </div>

        {/* Testing Methods */}
        <div className="space-y-12 mb-16">
          <h3 className="text-2xl font-semibold text-center">Phương Pháp Testing</h3>
          <div className="space-y-8">
            {testingMethods.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold">{category.category}</h4>
                    <p className="text-muted-foreground text-pretty">{category.description}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {category.methods.map((method, methodIndex) => (
                    <Card key={methodIndex} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{method.name}</CardTitle>
                        <CardDescription className="text-pretty">{method.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <h5 className="font-medium text-green-600 mb-2">Ưu điểm:</h5>
                            <ul className="space-y-1 text-muted-foreground">
                              {method.pros.map((pro, proIndex) => (
                                <li key={proIndex}>• {pro}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-600 mb-2">Nhược điểm:</h5>
                            <ul className="space-y-1 text-muted-foreground">
                              {method.cons.map((con, conIndex) => (
                                <li key={conIndex}>• {con}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testing Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Quy Trình Testing</h3>
          <div className="grid lg:grid-cols-5 gap-6">
            {testingProcess.map((phase, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                    {phase.step}
                  </div>
                  <CardTitle className="text-lg">{phase.title}</CardTitle>
                  <CardDescription className="text-pretty">{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <h5 className="font-medium text-sm">Deliverables:</h5>
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <Badge key={deliverableIndex} variant="outline" className="text-xs mr-1 mb-1">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testing Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Công Cụ Testing</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {testingTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-base">{tool.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {tool.category}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-pretty">{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="p-6 bg-card rounded-lg border">
          <div className="flex items-center gap-3 mb-6">
            <Target className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Key Metrics</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">{metric.name}</h4>
                <p className="text-sm text-muted-foreground text-pretty">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
