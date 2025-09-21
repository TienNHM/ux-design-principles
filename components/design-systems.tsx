import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Type, Grid, Component, Book, Users } from "lucide-react"

export function DesignSystems() {
  const systemComponents = [
    {
      category: "Foundation",
      icon: <Palette className="h-5 w-5" />,
      description: "Các yếu tố cơ bản tạo nên identity của design system",
      elements: [
        { name: "Color Palette", description: "Primary, secondary, semantic colors" },
        { name: "Typography", description: "Font families, sizes, weights, line heights" },
        { name: "Spacing", description: "Margin, padding, gap values" },
        { name: "Grid System", description: "Layout structure và breakpoints" },
        { name: "Iconography", description: "Icon style, sizes, usage guidelines" },
        { name: "Elevation", description: "Shadow styles cho depth và hierarchy" },
      ],
    },
    {
      category: "Components",
      icon: <Component className="h-5 w-5" />,
      description: "Các UI components có thể tái sử dụng",
      elements: [
        { name: "Buttons", description: "Primary, secondary, ghost, icon buttons" },
        { name: "Form Elements", description: "Inputs, selects, checkboxes, radios" },
        { name: "Navigation", description: "Headers, sidebars, breadcrumbs, tabs" },
        { name: "Cards", description: "Content containers với various layouts" },
        { name: "Modals", description: "Dialogs, drawers, popovers" },
        { name: "Data Display", description: "Tables, lists, charts, badges" },
      ],
    },
    {
      category: "Patterns",
      icon: <Grid className="h-5 w-5" />,
      description: "Các mẫu thiết kế cho common use cases",
      elements: [
        { name: "Page Layouts", description: "Dashboard, list, detail page structures" },
        { name: "Form Patterns", description: "Multi-step, validation, error handling" },
        { name: "Navigation Patterns", description: "Menu structures, search, filtering" },
        { name: "Content Patterns", description: "Article layouts, media galleries" },
        { name: "Feedback Patterns", description: "Loading states, empty states, errors" },
        { name: "Onboarding", description: "Welcome flows, tutorials, tooltips" },
      ],
    },
  ]

  const benefits = [
    {
      title: "Consistency",
      description: "Đảm bảo trải nghiệm nhất quán trên toàn bộ sản phẩm",
      icon: <Grid className="h-5 w-5" />,
    },
    {
      title: "Efficiency",
      description: "Tăng tốc độ thiết kế và development với reusable components",
      icon: <Component className="h-5 w-5" />,
    },
    {
      title: "Scalability",
      description: "Dễ dàng mở rộng và maintain khi sản phẩm phát triển",
      icon: <Type className="h-5 w-5" />,
    },
    {
      title: "Collaboration",
      description: "Cải thiện communication giữa design và development teams",
      icon: <Users className="h-5 w-5" />,
    },
  ]

  const buildingSteps = [
    {
      phase: "Audit & Inventory",
      description: "Kiểm tra và cataloging tất cả UI elements hiện có",
      deliverables: ["UI Inventory", "Pattern Library", "Inconsistency Report"],
    },
    {
      phase: "Define Foundation",
      description: "Thiết lập color, typography, spacing, và grid systems",
      deliverables: ["Design Tokens", "Style Guide", "Brand Guidelines"],
    },
    {
      phase: "Create Components",
      description: "Build reusable components với clear specifications",
      deliverables: ["Component Library", "Usage Guidelines", "Code Components"],
    },
    {
      phase: "Document & Govern",
      description: "Tạo documentation và quy trình governance",
      deliverables: ["Design System Site", "Contribution Guidelines", "Review Process"],
    },
    {
      phase: "Implement & Iterate",
      description: "Deploy system và continuously improve based on feedback",
      deliverables: ["Implementation Plan", "Feedback Loop", "Version Control"],
    },
  ]

  const popularSystems = [
    { name: "Material Design", company: "Google", focus: "Mobile-first, paper metaphor" },
    { name: "Human Interface Guidelines", company: "Apple", focus: "iOS/macOS native experience" },
    { name: "Fluent Design", company: "Microsoft", focus: "Cross-platform consistency" },
    { name: "Carbon", company: "IBM", focus: "Enterprise applications" },
    { name: "Ant Design", company: "Ant Group", focus: "React-based enterprise UI" },
    { name: "Chakra UI", company: "Community", focus: "Simple, modular, accessible" },
  ]

  return (
    <section id="design-systems" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Design Systems
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-balance">Hệ Thống Thiết Kế</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Design System là tập hợp các standards, components và guidelines giúp tạo ra trải nghiệm nhất quán và hiệu
            quả trên toàn bộ sản phẩm.
          </p>
        </div>

        {/* System Components */}
        <div className="space-y-12 mb-16">
          <h3 className="text-2xl font-semibold text-center">Thành Phần Của Design System</h3>
          <div className="space-y-8">
            {systemComponents.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold">{category.category}</h4>
                    <p className="text-muted-foreground text-pretty">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.elements.map((element, elementIndex) => (
                    <Card key={elementIndex} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">{element.name}</CardTitle>
                        <CardDescription className="text-sm text-pretty">{element.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Lợi Ích Của Design System</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg text-primary w-fit mb-3">{benefit.icon}</div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription className="text-pretty">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Building Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Quy Trình Xây Dựng</h3>
          <div className="space-y-6">
            {buildingSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{step.phase}</CardTitle>
                      <CardDescription className="text-pretty mb-3">{step.description}</CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <Badge key={deliverableIndex} variant="outline" className="text-xs">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Popular Design Systems */}
        <div className="p-6 bg-card rounded-lg border">
          <div className="flex items-center gap-3 mb-6">
            <Book className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Design Systems Nổi Tiếng</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularSystems.map((system, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium">{system.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{system.company}</p>
                <p className="text-xs text-pretty">{system.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
