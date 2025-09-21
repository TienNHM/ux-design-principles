import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Globe, ExternalLink } from "lucide-react"

export function Resources() {
  const books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      description: "UX mindset kinh điển - Cuốn sách nền tảng về tâm lý học trong thiết kế",
      type: "Sách nền tảng",
    },
    {
      title: "Don't Make Me Think",
      author: "Steve Krug",
      description: "UI/UX thực tế, dễ áp dụng - Hướng dẫn thiết kế web usability",
      type: "Sách thực hành",
    },
  ]

  const websites = [
    {
      title: "Nielsen Norman Group",
      url: "nngroup.com",
      description: "Kho kiến thức UX chuẩn mực từ các chuyên gia hàng đầu thế giới",
      type: "Research & Articles",
    },
    {
      title: "Interaction Design Foundation",
      url: "interaction-design.org",
      description: "Khóa học và tài liệu về thiết kế tương tác và UX design",
      type: "Courses & Learning",
    },
  ]

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Chương 4
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Tài nguyên khuyến nghị</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Những cuốn sách và trang web chất lượng cao để bạn tiếp tục hành trình học UX design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Books Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">📚 Sách</h3>
            </div>

            <div className="space-y-6">
              {books.map((book, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{book.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">{book.author}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {book.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{book.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Websites Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">🌐 Online</h3>
            </div>

            <div className="space-y-6">
              {websites.map((site, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{site.title}</CardTitle>
                        <CardDescription className="text-accent font-medium">{site.url}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {site.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{site.description}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Truy cập website
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
