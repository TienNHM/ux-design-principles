import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Eye, BarChart3, FileText } from "lucide-react"

export function UserResearch() {
  const researchMethods = [
    {
      category: "Qualitative Research",
      icon: <MessageCircle className="h-5 w-5" />,
      methods: [
        {
          name: "User Interviews",
          description: "Phỏng vấn sâu để hiểu động cơ, nhu cầu và hành vi người dùng",
          when: "Khám phá vấn đề, hiểu ngữ cảnh sử dụng",
        },
        {
          name: "Focus Groups",
          description: "Thảo luận nhóm để thu thập ý kiến đa chiều",
          when: "Đánh giá concept, thu thập feedback",
        },
        {
          name: "Ethnographic Studies",
          description: "Quan sát người dùng trong môi trường tự nhiên",
          when: "Hiểu hành vi thực tế, phát hiện pain points",
        },
        {
          name: "Diary Studies",
          description: "Người dùng ghi lại trải nghiệm theo thời gian",
          when: "Theo dõi hành vi dài hạn",
        },
      ],
    },
    {
      category: "Quantitative Research",
      icon: <BarChart3 className="h-5 w-5" />,
      methods: [
        {
          name: "Surveys",
          description: "Thu thập dữ liệu từ nhiều người dùng qua câu hỏi có cấu trúc",
          when: "Đo lường xu hướng, xác thực giả thuyết",
        },
        {
          name: "Analytics",
          description: "Phân tích dữ liệu hành vi người dùng trên sản phẩm",
          when: "Hiểu cách sử dụng thực tế, tối ưu hóa",
        },
        {
          name: "A/B Testing",
          description: "So sánh hiệu quả của các phiên bản khác nhau",
          when: "Kiểm tra giải pháp thiết kế",
        },
        {
          name: "Card Sorting",
          description: "Hiểu cách người dùng phân loại và tổ chức thông tin",
          when: "Thiết kế information architecture",
        },
      ],
    },
    {
      category: "Behavioral Research",
      icon: <Eye className="h-5 w-5" />,
      methods: [
        {
          name: "Usability Testing",
          description: "Quan sát người dùng thực hiện các tác vụ cụ thể",
          when: "Đánh giá khả năng sử dụng sản phẩm",
        },
        {
          name: "Eye Tracking",
          description: "Theo dõi chuyển động mắt để hiểu attention patterns",
          when: "Tối ưu hóa layout và visual hierarchy",
        },
        {
          name: "Click Tracking",
          description: "Phân tích các điểm click và tương tác trên interface",
          when: "Hiểu hành vi navigation",
        },
        {
          name: "Session Recordings",
          description: "Ghi lại toàn bộ session sử dụng sản phẩm",
          when: "Phát hiện vấn đề UX cụ thể",
        },
      ],
    },
  ]

  const researchProcess = [
    {
      step: "1",
      title: "Define Research Goals",
      description: "Xác định mục tiêu nghiên cứu và câu hỏi cần trả lời",
    },
    {
      step: "2",
      title: "Choose Methods",
      description: "Lựa chọn phương pháp nghiên cứu phù hợp với mục tiêu",
    },
    {
      step: "3",
      title: "Recruit Participants",
      description: "Tuyển chọn người tham gia đại diện cho target users",
    },
    {
      step: "4",
      title: "Conduct Research",
      description: "Thực hiện nghiên cứu theo kế hoạch đã định",
    },
    {
      step: "5",
      title: "Analyze Data",
      description: "Phân tích dữ liệu và rút ra insights có ý nghĩa",
    },
    {
      step: "6",
      title: "Share Findings",
      description: "Trình bày kết quả và đề xuất hành động cụ thể",
    },
  ]

  return (
    <section id="user-research" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            User Research
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-balance">Nghiên Cứu Người Dùng</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            User Research là nền tảng của UX Design, giúp hiểu sâu về người dùng để tạo ra những sản phẩm thực sự hữu
            ích và dễ sử dụng.
          </p>
        </div>

        {/* Research Methods */}
        <div className="space-y-12">
          {researchMethods.map((category, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                <h3 className="text-2xl font-semibold">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.methods.map((method, methodIndex) => (
                  <Card key={methodIndex} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{method.name}</CardTitle>
                      <CardDescription className="text-pretty">{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm">
                          <span className="font-medium">Khi nào sử dụng:</span> {method.when}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Research Process */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Quy Trình Nghiên Cứu</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchProcess.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                  <CardDescription className="text-pretty">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Deliverables */}
        <div className="mt-16 p-6 bg-card rounded-lg border">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Deliverables Chính</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "User Personas",
              "Journey Maps",
              "Research Reports",
              "Usability Findings",
              "Empathy Maps",
              "Pain Point Analysis",
              "Opportunity Areas",
              "Design Recommendations",
            ].map((deliverable, index) => (
              <Badge key={index} variant="outline" className="justify-center p-2">
                {deliverable}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
