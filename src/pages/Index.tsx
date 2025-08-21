import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">دعم ZAS-برمجة</h1>
          <p className="text-xl opacity-90">رحلتك في عالم البرمجة والإنترنت</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Introduction */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">مرحباً بك في عالم البرمجة</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            انضم إلينا في رحلة شيقة لاستكشاف تاريخ الإنترنت والبرمجة، وتعلم كيف تطورت لغات البرمجة عبر الزمن، 
            مع التركيز بشكل خاص على لغة الجافا سكريبت وتطبيقاتها العملية.
          </p>
        </section>

        {/* Internet History Section */}
        <section>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-center">تاريخ الإنترنت</CardTitle>
              <CardDescription className="text-center text-lg">
                من البدايات المتواضعة إلى الثورة الرقمية
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Badge variant="secondary">1960s</Badge>
                    البدايات الأولى
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    بدأت فكرة الإنترنت في الستينات من القرن الماضي مع مشروع ARPANET الذي طورته وزارة الدفاع الأمريكية. 
                    كان الهدف هو إنشاء شبكة اتصالات قادرة على البقاء حتى في حالة تدمير أجزاء منها.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Badge variant="secondary">1990s</Badge>
                    الشبكة العالمية
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    في أوائل التسعينات، اخترع تيم بيرنرز لي الشبكة العالمية (World Wide Web) مما جعل الإنترنت 
                    متاحاً للجمهور العام وأدى إلى انتشاره السريع حول العالم.
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">التطور المستمر</h3>
                <p className="text-muted-foreground leading-relaxed">
                  منذ ذلك الحين، شهد الإنترنت تطوراً مستمراً مع ظهور وسائل التواصل الاجتماعي، التجارة الإلكترونية، 
                  الحوسبة السحابية، وإنترنت الأشياء. اليوم، يستخدم أكثر من 5 مليارات شخص الإنترنت حول العالم.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Programming Languages Evolution */}
        <section>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-center">تطور لغات البرمجة</CardTitle>
              <CardDescription className="text-center text-lg">
                رحلة عبر الزمن مع أهم لغات البرمجة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              <div className="space-y-6">
                <div className="border-r-4 border-primary pr-4">
                  <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                    <Badge>1940s-1950s</Badge>
                    اللغات الأولى
                  </h3>
                  <p className="text-muted-foreground">
                    <strong>Assembly Language:</strong> كانت من أولى لغات البرمجة، تتعامل مباشرة مع المعالج.
                    <br />
                    <strong>FORTRAN (1957):</strong> أول لغة برمجة عالية المستوى للحوسبة العلمية.
                  </p>
                </div>

                <div className="border-r-4 border-secondary pr-4">
                  <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                    <Badge variant="secondary">1960s-1970s</Badge>
                    عصر التطوير
                  </h3>
                  <p className="text-muted-foreground">
                    <strong>COBOL (1959):</strong> لتطبيقات الأعمال والبنوك.
                    <br />
                    <strong>C (1972):</strong> لغة قوية وفعالة أثرت على معظم اللغات الحديثة.
                    <br />
                    <strong>Pascal (1970):</strong> لتعليم البرمجة المنظمة.
                  </p>
                </div>

                <div className="border-r-4 border-accent pr-4">
                  <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                    <Badge variant="outline">1980s-1990s</Badge>
                    البرمجة الشيئية
                  </h3>
                  <p className="text-muted-foreground">
                    <strong>C++ (1985):</strong> إضافة البرمجة الشيئية إلى C.
                    <br />
                    <strong>Python (1991):</strong> سهولة في الاستخدام وقابلية للقراءة.
                    <br />
                    <strong>Java (1995):</strong> "اكتب مرة، شغل في أي مكان".
                  </p>
                </div>

                <div className="border-r-4 border-destructive pr-4">
                  <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                    <Badge variant="destructive">2000s-الآن</Badge>
                    العصر الحديث
                  </h3>
                  <p className="text-muted-foreground">
                    <strong>JavaScript (1995-الآن):</strong> من لغة بسيطة للمتصفحات إلى لغة شاملة.
                    <br />
                    <strong>Swift (2014):</strong> لتطوير تطبيقات iOS.
                    <br />
                    <strong>Rust (2010):</strong> الأمان والأداء العالي.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* JavaScript Deep Dive */}
        <section>
          <Card className="shadow-lg border-2 border-primary">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-primary">
                لغة الجافا سكريبت - JavaScript
              </CardTitle>
              <CardDescription className="text-center text-lg">
                اللغة التي غيّرت وجه الويب
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* JavaScript Introduction */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">ما هي لغة الجافا سكريبت؟</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  JavaScript هي لغة برمجة ديناميكية تم تطويرها في البداية لجعل صفحات الويب تفاعلية. 
                  اليوم، أصبحت واحدة من أهم لغات البرمجة في العالم ويمكن استخدامها في:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🌐 تطوير الواجهات الأمامية</h4>
                    <p className="text-sm text-muted-foreground">إنشاء واجهات مستخدم تفاعلية وجذابة</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">⚙️ تطوير الخوادم</h4>
                    <p className="text-sm text-muted-foreground">بناء خوادم قوية باستخدام Node.js</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">📱 تطبيقات الموبايل</h4>
                    <p className="text-sm text-muted-foreground">تطوير تطبيقات الهاتف باستخدام React Native</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">🖥️ تطبيقات سطح المكتب</h4>
                    <p className="text-sm text-muted-foreground">إنشاء تطبيقات سطح المكتب باستخدام Electron</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* JavaScript Features */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">مميزات الجافا سكريبت</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">1</Badge>
                    <div>
                      <h4 className="font-semibold">سهولة التعلم</h4>
                      <p className="text-muted-foreground text-sm">صيغة بسيطة ومفهومة للمبتدئين</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">2</Badge>
                    <div>
                      <h4 className="font-semibold">التفاعل المباشر</h4>
                      <p className="text-muted-foreground text-sm">لا تحتاج إلى برنامج تجميع، تعمل مباشرة في المتصفح</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">3</Badge>
                    <div>
                      <h4 className="font-semibold">مجتمع كبير</h4>
                      <p className="text-muted-foreground text-sm">مكتبات وأدوات لا حصر لها متوفرة عبر NPM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="mt-1">4</Badge>
                    <div>
                      <h4 className="font-semibold">المرونة</h4>
                      <p className="text-muted-foreground text-sm">يمكن استخدامها في مختلف أنواع التطبيقات</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* JavaScript Uses */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">استخدامات الجافا سكريبت العملية</h3>
                <div className="space-y-6">
                  
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">1. تطوير المواقع التفاعلية</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• إضافة التفاعل للأزرار والقوائم</li>
                      <li>• التحقق من صحة النماذج قبل الإرسال</li>
                      <li>• إنشاء رسوم متحركة وتأثيرات بصرية</li>
                      <li>• تحديث المحتوى دون إعادة تحميل الصفحة</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">2. تطبيقات الويب الحديثة</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Single Page Applications (SPAs) باستخدام React أو Vue</li>
                      <li>• Progressive Web Apps (PWAs)</li>
                      <li>• التطبيقات التي تعمل بدون إنترنت</li>
                      <li>• الألعاب المباشرة في المتصفح</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">3. تطوير الخوادم</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• بناء APIs باستخدام Node.js و Express</li>
                      <li>• التعامل مع قواعد البيانات</li>
                      <li>• معالجة الملفات والبيانات</li>
                      <li>• إنشاء خدمات الويب والمايكروسيرفس</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-primary">4. الذكاء الاصطناعي وتحليل البيانات</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• مكتبات الذكاء الاصطناعي مثل TensorFlow.js</li>
                      <li>• تحليل البيانات وإنشاء الرسوم البيانية</li>
                      <li>• معالجة الصور والأصوات</li>
                      <li>• التعلم الآلي في المتصفح</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Future of JavaScript */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">مستقبل الجافا سكريبت</h3>
                <p className="text-muted-foreground leading-relaxed">
                  مع التطوير المستمر للغة وظهور تقنيات جديدة مثل WebAssembly و TypeScript، 
                  تستمر JavaScript في التطور لتصبح أكثر قوة وأماناً. المستقبل يحمل إمكانيات لا محدودة 
                  مع تطبيقات الواقع الافتراضي، إنترنت الأشياء، والحوسبة السحابية.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardContent className="pt-8">
              <h2 className="text-3xl font-bold mb-4">ابدأ رحلتك في البرمجة اليوم!</h2>
              <p className="text-lg opacity-90 mb-6">
                انضم إلى ملايين المطورين حول العالم واكتشف عالم البرمجة الرائع
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">JavaScript</Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">Python</Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">React</Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">Node.js</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 دعم ZAS-برمجة - دليلك في عالم البرمجة والتقنية
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
