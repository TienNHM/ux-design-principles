import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Users, Lightbulb } from "lucide-react"

export function Foundations() {
  return (
    <section id="foundations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Chương 1
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Kiến thức nền tảng UI/UX</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hiểu rõ sự khác biệt giữa UI và UX, cùng những khái niệm cơ bản để bắt đầu hành trình thiết kế.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">UI (User Interface)</CardTitle>
                  <CardDescription>Giao diện người dùng</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Những gì người dùng <strong className="text-foreground">thấy và chạm</strong> vào:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Màu sắc và typography
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Button và icon
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Layout và bố cục
                </li>
              </ul>
              <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm">
                  <strong>UI = "Look & Feel"</strong> - Vẻ ngoài và cảm giác
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-xl">UX (User Experience)</CardTitle>
                  <CardDescription>Trải nghiệm người dùng</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Những gì người dùng <strong className="text-foreground">cảm nhận khi sử dụng</strong>:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  Dễ dùng và logic
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  Thoải mái và nhanh chóng
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  Hiệu quả và hữu ích
                </li>
              </ul>
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm">
                  <strong>UX = "Flow & Experience"</strong> - Luồng và trải nghiệm
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Lightbulb className="h-5 w-5 text-destructive" />
            <span className="font-semibold text-destructive">Lưu ý quan trọng</span>
          </div>
          <p className="text-muted-foreground">
            Một sản phẩm đẹp (UI tốt) nhưng khó dùng (UX kém) vẫn sẽ thất bại. Cần cân bằng cả hai yếu tố để tạo ra sản
            phẩm thành công.
          </p>
        </div>
      </div>
    </section>
  )
}
