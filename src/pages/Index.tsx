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
                    بدأت فكرة الإنترنت في الستينات من القرن الماضي مع مشروع ARPANET الذي طورته وكالة مشاريع البحوث المتقدمة التابعة لوزارة الدفاع الأمريكية (DARPA). 
                    كان الهدف الأساسي هو إنشاء شبكة اتصالات لامركزية وموثوقة قادرة على البقاء حتى في حالة تدمير أجزاء منها خلال الحرب الباردة.
                    <br /><br />
                    في عام 1969، تم إرسال أول رسالة عبر ARPANET بين جامعة كاليفورنيا في لوس أنجلوس ومعهد ستانفورد للبحوث. 
                    كانت الرسالة تحتوي على كلمة "LOGIN" لكن النظام تعطل بعد إرسال الحرفين "LO" فقط، مما جعل أول رسالة في تاريخ الإنترنت هي "LO".
                    <br /><br />
                    تطورت الشبكة تدريجياً وبحلول عام 1971، كانت تضم 15 موقعاً، وفي عام 1973 تم ربط أول اتصال دولي مع النرويج وإنجلترا.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Badge variant="secondary">1990s</Badge>
                    الشبكة العالمية
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    في أوائل التسعينات، اخترع العالم البريطاني تيم بيرنرز لي الشبكة العالمية (World Wide Web) في مختبر CERN في سويسرا عام 1989. 
                    قدم بيرنرز لي اقتراحاً لنظام إدارة المعلومات يعتمد على الهايبرتكست (Hypertext) لربط المستندات ببعضها البعض.
                    <br /><br />
                    في عام 1990، طور أول متصفح ويب وأطلق عليه اسم "WorldWideWeb" (لاحقاً تم تغيير الاسم إلى Nexus). 
                    كما طور أول خادم ويب وأنشأ أول موقع ويب في التاريخ على العنوان http://info.cern.ch/ الذي لا يزال متاحاً حتى اليوم.
                    <br /><br />
                    أهم إنجازات بيرنرز لي كانت تطوير بروتوكول HTTP، لغة HTML، ونظام عناوين URL. في عام 1991، جعل هذه التقنيات متاحة مجاناً للعامة، 
                    مما فتح الباب أمام الانتشار السريع للإنترنت وجعله متاحاً للجمهور العام بدلاً من كونه مقتصراً على الأكاديميين والباحثين.
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">التطور المستمر والمحطات المهمة</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🔍 محركات البحث (1990s-2000s)</h4>
                    <p className="text-muted-foreground text-sm">
                      ظهرت محركات البحث الأولى مثل Archie عام 1990، ثم Yahoo عام 1994، وأخيراً Google عام 1998 
                      الذي ثورة في طريقة البحث عن المعلومات باستخدام خوارزمية PageRank المبتكرة.
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">📱 الويب المحمول (2000s)</h4>
                    <p className="text-muted-foreground text-sm">
                      مع انتشار الهواتف الذكية، تطور الإنترنت ليصبح متاحاً في كل مكان. 
                      أدى هذا إلى ظهور تطبيقات الهاتف المحمول وتطوير مواقع الويب المتجاوبة (Responsive Design).
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">☁️ الحوسبة السحابية (2006-الآن)</h4>
                    <p className="text-muted-foreground text-sm">
                      إطلاق خدمات مثل Amazon Web Services غيّر مفهوم استضافة المواقع والتطبيقات، 
                      مما جعل الحوسبة أكثر مرونة وقابلية للتوسع.
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🌐 وسائل التواصل الاجتماعي</h4>
                    <p className="text-muted-foreground text-sm">
                      من Friendster (2002) إلى Facebook (2004) وTwitter (2006) وInstagram (2010)، 
                      غيّرت هذه المنصات طريقة تفاعل الناس وتبادل المعلومات عبر الإنترنت.
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🛒 التجارة الإلكترونية</h4>
                    <p className="text-muted-foreground text-sm">
                      من eBay (1995) و Amazon (1994) إلى Shopify والمنصات الحديثة، 
                      أصبح التسوق عبر الإنترنت جزءاً لا يتجزأ من الحياة اليومية.
                    </p>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">🔗 إنترنت الأشياء (IoT)</h4>
                    <p className="text-muted-foreground text-sm">
                      ربط الأجهزة المنزلية والسيارات والمدن الذكية بالإنترنت، 
                      مما خلق شبكة عالمية من الأجهزة المترابطة التي تتبادل البيانات باستمرار.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                  <h4 className="font-semibold mb-2">📊 الإحصائيات الحالية</h4>
                  <p className="text-muted-foreground text-sm">
                    اليوم، يستخدم أكثر من 5.35 مليار شخص الإنترنت حول العالم (67% من سكان العالم). 
                    يتم تبادل أكثر من 5 مليارات عملية بحث يومياً على Google، 
                    ويتم رفع أكثر من 500 ساعة من الفيديو على YouTube كل دقيقة.
                  </p>
                </div>
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
              
              <div className="space-y-8">
                <div className="border-r-4 border-primary pr-6 pl-2">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Badge>1940s-1950s</Badge>
                    اللغات الأولى والأساسات
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-primary mb-1">Assembly Language (1940s)</h4>
                      <p className="text-muted-foreground text-sm">
                        كانت من أولى لغات البرمجة، تتعامل مباشرة مع المعالج باستخدام رموز ذاكرية. 
                        كل تعليمة تتوافق مع تعليمة واحدة في لغة الآلة، مما يجعلها سريعة جداً لكن صعبة التعلم.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-primary mb-1">FORTRAN (1957)</h4>
                      <p className="text-muted-foreground text-sm">
                        أول لغة برمجة عالية المستوى طورتها IBM للحوسبة العلمية والرياضية. 
                        اسمها مأخوذ من "Formula Translation" وما زالت تستخدم في التطبيقات العلمية حتى اليوم.
                        ثورة في عالم البرمجة لأنها سمحت للمبرمجين بالكتابة بطريقة أقرب للغة الطبيعية.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-primary mb-1">LISP (1958)</h4>
                      <p className="text-muted-foreground text-sm">
                        لغة البرمجة الوظيفية الأولى، طورها جون مكارثي في MIT. 
                        تعتبر أساس الذكاء الاصطناعي وتتميز بهيكلها المعتمد على القوائم والعمليات الرياضية.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-r-4 border-secondary pr-6 pl-2">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Badge variant="secondary">1960s-1970s</Badge>
                    عصر التطوير والنمو
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-secondary mb-1">COBOL (1959)</h4>
                      <p className="text-muted-foreground text-sm">
                        لغة البرمجة التجارية الأولى، مصممة لتطبيقات الأعمال والبنوك. 
                        تتميز بقربها من اللغة الإنجليزية مما يجعلها سهلة القراءة. 
                        لا تزال تدير معظم الأنظمة المصرفية العالمية حتى اليوم.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-secondary mb-1">BASIC (1964)</h4>
                      <p className="text-muted-foreground text-sm">
                        "Beginner's All-purpose Symbolic Instruction Code" - صممت لتعليم البرمجة للطلاب. 
                        بساطتها جعلتها شائعة جداً في أجهزة الكمبيوتر الشخصية في السبعينات والثمانينات.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-secondary mb-1">Pascal (1970)</h4>
                      <p className="text-muted-foreground text-sm">
                        طورها نيكلاوس ويرث لتعليم البرمجة المنظمة والخوارزميات. 
                        تتميز بهيكلها الواضح وقواعدها الصارمة، مما يساعد على كتابة برامج خالية من الأخطاء.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-secondary mb-1">C (1972)</h4>
                      <p className="text-muted-foreground text-sm">
                        طورها دينيس ريتشي في مختبرات بيل. لغة قوية وفعالة أثرت على معظم اللغات الحديثة. 
                        تجمع بين القوة والمرونة، وتعتبر أساس أنظمة التشغيل مثل Unix و Linux. 
                        "أم لغات البرمجة الحديثة".
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-r-4 border-accent pr-6 pl-2">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Badge variant="outline">1980s-1990s</Badge>
                    ثورة البرمجة الشيئية
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-accent mb-1">C++ (1985)</h4>
                      <p className="text-muted-foreground text-sm">
                        طورها بيارن ستروستروب لإضافة البرمجة الشيئية إلى C. 
                        تدعم الوراثة والتغليف وتعدد الأشكال. تستخدم في تطوير الألعاب، 
                        أنظمة التشغيل، والتطبيقات عالية الأداء مثل Adobe Photoshop و Google Chrome.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-accent mb-1">Objective-C (1984)</h4>
                      <p className="text-muted-foreground text-sm">
                        دمجت مفاهيم Smalltalk مع C. أصبحت اللغة الأساسية لتطوير تطبيقات Apple 
                        قبل ظهور Swift. تتميز بنظام الرسائل الديناميكي والمرونة في التعامل مع الكائنات.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-accent mb-1">Python (1991)</h4>
                      <p className="text-muted-foreground text-sm">
                        طورها جايدو فان روسوم بهدف السهولة وقابلية القراءة. 
                        تتميز ببساطة صيغتها وقوة مكتباتها. تستخدم في الذكاء الاصطناعي، 
                        تحليل البيانات، تطوير الويب، والأتمتة. "البرمجة للجميع".
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-accent mb-1">Java (1995)</h4>
                      <p className="text-muted-foreground text-sm">
                        طورتها Sun Microsystems بمبدأ "اكتب مرة، شغل في أي مكان". 
                        تعمل على Java Virtual Machine مما يجعلها متعددة المنصات. 
                        تستخدم في تطبيقات المؤسسات، تطبيقات Android، والخوادم الكبيرة.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-r-4 border-destructive pr-6 pl-2">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Badge variant="destructive">2000s-الآن</Badge>
                    العصر الحديث والابتكار المستمر
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-1">JavaScript (1995-الآن)</h4>
                      <p className="text-muted-foreground text-sm">
                        من لغة بسيطة للمتصفحات إلى لغة شاملة تدير الواجهات الأمامية والخوادم والتطبيقات. 
                        تطورت من Netscape إلى ECMAScript إلى Node.js. اليوم هي العمود الفقري للويب الحديث.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-1">C# (2000)</h4>
                      <p className="text-muted-foreground text-sm">
                        طورتها Microsoft لمنافسة Java. تجمع بين قوة C++ وسهولة Visual Basic. 
                        تستخدم في تطوير تطبيقات Windows، الألعاب باستخدام Unity، وتطبيقات الويب.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-1">PHP (1995)</h4>
                      <p className="text-muted-foreground text-sm">
                        بدأت كأدوات بسيطة لصفحات الويب، تطورت لتصبح لغة خوادم قوية. 
                        تدير أكثر من 78% من مواقع الويب، بما في ذلك WordPress و Facebook في بداياته.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-1">Ruby (1995)</h4>
                      <p className="text-muted-foreground text-sm">
                        طورها يوكيهيرو ماتسوموتو بهدف "سعادة المبرمج". 
                        تتميز بصيغتها الأنيقة ومرونتها. أصبحت مشهورة مع إطار العمل Ruby on Rails.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-1">Swift (2014)</h4>
                      <p className="text-muted-foreground text-sm">
                        طورتها Apple لتحل محل Objective-C. آمنة وسريعة وحديثة. 
                        مفتوحة المصدر ومصممة لتطوير تطبيقات iOS و macOS بطريقة أكثر أماناً وفعالية.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-1">Rust (2010)</h4>
                      <p className="text-muted-foreground text-sm">
                        طورتها Mozilla للأمان والأداء العالي. تمنع الأخطاء الشائعة مثل تسريب الذاكرة. 
                        تستخدم في تطوير متصفح Firefox وأنظمة التشغيل الحديثة.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-1">TypeScript (2012)</h4>
                      <p className="text-muted-foreground text-sm">
                        طورتها Microsoft لإضافة الأنواع الثابتة إلى JavaScript. 
                        تحسن من جودة الكود وسهولة الصيانة في المشاريع الكبيرة. تُترجم إلى JavaScript عادي.
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-1">Go (2009)</h4>
                      <p className="text-muted-foreground text-sm">
                        طورتها Google للخوادم والأنظمة الموزعة. بسيطة وسريعة مع دعم ممتاز للمعالجة المتوازية. 
                        تستخدم في Docker و Kubernetes والعديد من الأدوات السحابية.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
                  <h3 className="text-2xl font-semibold mb-4 text-center">🔮 المستقبل القريب</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/80 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">🧠 الذكاء الاصطناعي</h4>
                      <p className="text-muted-foreground text-sm">
                        لغات مثل Python تهيمن على مجال الذكاء الاصطناعي، 
                        بينما تظهر أدوات جديدة للبرمجة بمساعدة الذكاء الاصطناعي مثل GitHub Copilot.
                      </p>
                    </div>
                    <div className="bg-background/80 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">🌐 WebAssembly</h4>
                      <p className="text-muted-foreground text-sm">
                        يسمح بتشغيل لغات مثل C++ و Rust في المتصفح بأداء قريب من السرعة الأصلية، 
                        مما يفتح آفاقاً جديدة لتطبيقات الويب المعقدة.
                      </p>
                    </div>
                    <div className="bg-background/80 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">☁️ الحوسبة السحابية</h4>
                      <p className="text-muted-foreground text-sm">
                        تطور لغات وأطر عمل جديدة مخصصة للحوسبة السحابية والمايكروسيرفس، 
                        مع التركيز على القابلية للتوسع والموثوقية.
                      </p>
                    </div>
                    <div className="bg-background/80 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">🔐 الأمان</h4>
                      <p className="text-muted-foreground text-sm">
                        تركيز متزايد على الأمان في تصميم اللغات، 
                        مع أدوات تحليل أفضل وممارسات برمجة آمنة بشكل افتراضي.
                      </p>
                    </div>
                  </div>
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
            <CardContent className="space-y-10">
              
              {/* JavaScript History and Evolution */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-center">📚 تاريخ وتطور الجافا سكريبت</h3>
                
                <div className="space-y-6">
                  <div className="border-r-4 border-primary pr-4 pl-2">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Badge>1995</Badge>
                      ولادة اللغة
                    </h4>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <p>• طور بريندان إيش (Brendan Eich) JavaScript في شركة Netscape خلال 10 أيام فقط!</p>
                      <p>• كان الهدف إنشاء لغة سكريبت بسيطة لجعل صفحات الويب تفاعلية</p>
                      <p>• في البداية كان اسمها "Mocha"، ثم "LiveScript"، وأخيراً "JavaScript"</p>
                      <p>• الاسم كان مجرد حيلة تسويقية للاستفادة من شهرة Java في ذلك الوقت</p>
                    </div>
                  </div>
                  
                  <div className="border-r-4 border-secondary pr-4 pl-2">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Badge variant="secondary">1996-1999</Badge>
                      المعايير والتوحيد
                    </h4>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <p>• 1997: إصدار معيار ECMAScript الأول (ES1) لتوحيد اللغة</p>
                      <p>• دخول Internet Explorer مع JScript، مما خلق تنافساً شديداً</p>
                      <p>• ظهور مشاكل التوافق بين المتصفحات المختلفة</p>
                      <p>• بداية "حروب المتصفحات" بين Netscape و Microsoft</p>
                    </div>
                  </div>
                  
                  <div className="border-r-4 border-accent pr-4 pl-2">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Badge variant="outline">2000-2005</Badge>
                      سنوات الركود
                    </h4>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <p>• فترة ركود في تطوير JavaScript بسبب هيمنة Internet Explorer</p>
                      <p>• ظهور مكتبات مثل Prototype.js لحل مشاكل التوافق</p>
                      <p>• بداية استخدام AJAX لجعل المواقع أكثر ديناميكية</p>
                      <p>• JavaScript لا تزال تُعتبر "لغة ألعاب" وليست للتطبيقات الجدية</p>
                    </div>
                  </div>
                  
                  <div className="border-r-4 border-destructive pr-4 pl-2">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Badge variant="destructive">2005-2009</Badge>
                      النهضة الحديثة
                    </h4>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <p>• 2005: Jesse James Garrett يصيغ مصطلح "AJAX"</p>
                      <p>• 2006: إطلاق jQuery - ثورة في تطوير JavaScript</p>
                      <p>• ظهور Firefox و Safari يكسر احتكار Internet Explorer</p>
                      <p>• بداية استخدام JavaScript في تطبيقات الويب الجدية</p>
                      <p>• 2008: Google يطلق محرك V8 الذي غيّر الأداء تماماً</p>
                    </div>
                  </div>
                  
                  <div className="border-r-4 border-primary pr-4 pl-2">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Badge>2009-2015</Badge>
                      الانفجار الكبير
                    </h4>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <p>• 2009: Ryan Dahl يطلق Node.js - JavaScript خارج المتصفح!</p>
                      <p>• 2010: ظهور NPM لإدارة الحزم والمكتبات</p>
                      <p>• 2013: Facebook يطلق React - ثورة في تطوير الواجهات</p>
                      <p>• 2014: Google يطلق Angular - إطار عمل شامل</p>
                      <p>• 2015: إصدار ES6 (ES2015) - أكبر تحديث في تاريخ اللغة</p>
                    </div>
                  </div>
                  
                  <div className="border-r-4 border-secondary pr-4 pl-2">
                    <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Badge variant="secondary">2015-الآن</Badge>
                      العصر الذهبي
                    </h4>
                    <div className="space-y-2 text-muted-foreground text-sm">
                      <p>• إصدارات سنوية جديدة من ECMAScript مع ميزات حديثة</p>
                      <p>• 2016: Vue.js يصبح منافساً قوياً لـ React و Angular</p>
                      <p>• 2018: Deno كبديل حديث لـ Node.js</p>
                      <p>• 2020: TypeScript يصبح المعيار في المشاريع الكبيرة</p>
                      <p>• JavaScript تصبح أكثر لغات البرمجة استخداماً في العالم</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* JavaScript Introduction */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">ما هي لغة الجافا سكريبت؟</h3>
                <div className="bg-muted/30 p-6 rounded-lg mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    JavaScript هي لغة برمجة ديناميكية ومفسرة تم تطويرها في البداية لجعل صفحات الويب تفاعلية. 
                    اليوم، أصبحت واحدة من أهم لغات البرمجة في العالم ويمكن استخدامها في تطوير كل شيء 
                    من المواقع البسيطة إلى التطبيقات المعقدة والذكاء الاصطناعي.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span className="text-sm">سهلة التعلم والفهم</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span className="text-sm">لا تحتاج إلى تجميع</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span className="text-sm">متعددة المنصات</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✅</span>
                      <span className="text-sm">مجتمع ضخم ونشط</span>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold mb-4">مجالات استخدام JavaScript:</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-2 text-primary">🌐 تطوير الواجهات الأمامية</h4>
                    <p className="text-sm text-muted-foreground">إنشاء واجهات مستخدم تفاعلية وجذابة باستخدام React، Vue، أو Angular</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                    <h4 className="font-semibold mb-2 text-secondary">⚙️ تطوير الخوادم</h4>
                    <p className="text-sm text-muted-foreground">بناء خوادم قوية وقابلة للتوسع باستخدام Node.js و Express</p>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                    <h4 className="font-semibold mb-2 text-accent">📱 تطبيقات الموبايل</h4>
                    <p className="text-sm text-muted-foreground">تطوير تطبيقات الهاتف المحمول باستخدام React Native أو Ionic</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">🖥️ تطبيقات سطح المكتب</h4>
                    <p className="text-sm text-muted-foreground">إنشاء تطبيقات سطح المكتب باستخدام Electron مثل VS Code</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* JavaScript Technical Details */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">الخصائص التقنية للجافا سكريبت</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-primary">🎯 نوع اللغة</h4>
                    <div className="space-y-3">
                      <div className="bg-muted/30 p-3 rounded">
                        <h5 className="font-semibold mb-1">لغة مفسرة (Interpreted)</h5>
                        <p className="text-sm text-muted-foreground">تُنفذ الأكواد مباشرة دون الحاجة للتجميع المسبق</p>
                      </div>
                      <div className="bg-muted/30 p-3 rounded">
                        <h5 className="font-semibold mb-1">ديناميكية التنقيط (Dynamic Typing)</h5>
                        <p className="text-sm text-muted-foreground">المتغيرات يمكن أن تحمل أنواع بيانات مختلفة</p>
                      </div>
                      <div className="bg-muted/30 p-3 rounded">
                        <h5 className="font-semibold mb-1">البرمجة الشيئية والوظيفية</h5>
                        <p className="text-sm text-muted-foreground">تدعم أنماط برمجة متعددة</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-secondary">⚡ كيف تعمل؟</h4>
                    <div className="space-y-3">
                      <div className="bg-muted/30 p-3 rounded">
                        <h5 className="font-semibold mb-1">محرك JavaScript</h5>
                        <p className="text-sm text-muted-foreground">V8 (Chrome)، SpiderMonkey (Firefox)، JavaScriptCore (Safari)</p>
                      </div>
                      <div className="bg-muted/30 p-3 rounded">
                        <h5 className="font-semibold mb-1">Event Loop</h5>
                        <p className="text-sm text-muted-foreground">نظام لمعالجة العمليات غير المتزامنة</p>
                      </div>
                      <div className="bg-muted/30 p-3 rounded">
                        <h5 className="font-semibold mb-1">Just-In-Time Compilation</h5>
                        <p className="text-sm text-muted-foreground">تحسين الأداء من خلال التجميع الديناميكي</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* JavaScript Features */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">المفاهيم الأساسية في الجافا سكريبت</h3>
                
                <div className="grid gap-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary mb-3">📦 المتغيرات والبيانات</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• var, let, const</li>
                        <li>• Number, String, Boolean</li>
                        <li>• Array, Object</li>
                        <li>• null, undefined</li>
                        <li>• Symbol, BigInt</li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
                      <h4 className="font-semibold text-secondary mb-3">🔧 الدوال والوظائف</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Function Declaration</li>
                        <li>• Arrow Functions</li>
                        <li>• Callback Functions</li>
                        <li>• Higher Order Functions</li>
                        <li>• Closures</li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                      <h4 className="font-semibold text-accent mb-3">🎛️ التحكم في التدفق</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• if/else statements</li>
                        <li>• switch/case</li>
                        <li>• for/while loops</li>
                        <li>• try/catch/finally</li>
                        <li>• break/continue</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">🌟 المفاهيم المتقدمة</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Promises & Async/Await:</span>
                          <span className="text-muted-foreground"> التعامل مع العمليات غير المتزامنة</span>
                        </div>
                        <div>
                          <span className="font-medium">Destructuring:</span>
                          <span className="text-muted-foreground"> استخراج القيم من الكائنات والمصفوفات</span>
                        </div>
                        <div>
                          <span className="font-medium">Modules (ES6):</span>
                          <span className="text-muted-foreground"> تنظيم الكود في ملفات منفصلة</span>
                        </div>
                        <div>
                          <span className="font-medium">Classes:</span>
                          <span className="text-muted-foreground"> البرمجة الشيئية الحديثة</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3">🏗️ أدوات وتقنيات التطوير</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Bundlers:</span>
                          <span className="text-muted-foreground"> Webpack, Rollup, Parcel</span>
                        </div>
                        <div>
                          <span className="font-medium">Transpilers:</span>
                          <span className="text-muted-foreground"> Babel لدعم المتصفحات القديمة</span>
                        </div>
                        <div>
                          <span className="font-medium">Package Managers:</span>
                          <span className="text-muted-foreground"> NPM, Yarn, PNPM</span>
                        </div>
                        <div>
                          <span className="font-medium">Testing:</span>
                          <span className="text-muted-foreground"> Jest, Mocha, Cypress</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* JavaScript Uses */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">استخدامات الجافا سكريبت العملية والتفصيلية</h3>
                <div className="space-y-8">
                  
                  <div className="border-r-4 border-primary pr-6">
                    <h4 className="text-xl font-semibold mb-4 text-primary">1. تطوير المواقع التفاعلية والواجهات الأمامية</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">تفاعلات المستخدم الأساسية</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• التحكم في الأزرار والقوائم المنسدلة</li>
                          <li>• إظهار وإخفاء العناصر</li>
                          <li>• التنقل بين الصفحات والأقسام</li>
                          <li>• النوافذ المنبثقة والتنبيهات</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">التحقق من النماذج والبيانات</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• فحص صحة الإيميل وكلمات المرور</li>
                          <li>• التحقق من طول النص والأرقام</li>
                          <li>• رسائل خطأ فورية للمستخدم</li>
                          <li>• منع إرسال النماذج الخاطئة</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">الرسوم المتحركة والتأثيرات البصرية</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        JavaScript يمكن استخدامها مع CSS و Canvas لإنشاء تأثيرات بصرية مذهلة:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div>• تأثيرات الانتقال والحركة</div>
                        <div>• الرسوم المتحركة التفاعلية</div>
                        <div>• تأثيرات المرور بالماوس</div>
                        <div>• الرسوم البيانية المتحركة</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-r-4 border-secondary pr-6">
                    <h4 className="text-xl font-semibold mb-4 text-secondary">2. تطبيقات الويب الحديثة (Modern Web Apps)</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-secondary/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Single Page Applications (SPAs)</h5>
                        <p className="text-sm text-muted-foreground mb-2">
                          تطبيقات تعمل في صفحة واحدة مع تحديث المحتوى دون إعادة تحميل:
                        </p>
                        <div className="grid md:grid-cols-3 gap-2 text-sm">
                          <div>• React.js من Facebook</div>
                          <div>• Vue.js مفتوح المصدر</div>
                          <div>• Angular من Google</div>
                        </div>
                      </div>
                      
                      <div className="bg-secondary/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Progressive Web Apps (PWAs)</h5>
                        <p className="text-sm text-muted-foreground mb-2">
                          تطبيقات ويب تعمل مثل التطبيقات الأصلية:
                        </p>
                        <div className="grid md:grid-cols-2 gap-2 text-sm">
                          <div>• العمل بدون إنترنت (Offline)</div>
                          <div>• التثبيت على الشاشة الرئيسية</div>
                          <div>• الإشعارات المتقدمة</div>
                          <div>• استهلاك أقل للبطارية</div>
                        </div>
                      </div>
                      
                      <div className="bg-secondary/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">الألعاب التفاعلية في المتصفح</h5>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>• ألعاب 2D باستخدام Canvas و WebGL</div>
                          <div>• ألعاب 3D باستخدام Three.js</div>
                          <div>• الألعاب متعددة اللاعبين مع WebSocket</div>
                          <div>• محاكيات الفيزياء والرسوم المتقدمة</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-r-4 border-accent pr-6">
                    <h4 className="text-xl font-semibold mb-4 text-accent">3. تطوير الخوادم والباك إند (Server-Side)</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-accent/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Node.js - JavaScript على الخادم</h5>
                        <p className="text-sm text-muted-foreground mb-2">
                          بيئة تشغيل تسمح بتنفيذ JavaScript خارج المتصفح:
                        </p>
                        <div className="grid md:grid-cols-2 gap-2 text-sm">
                          <div>• بناء APIs و RESTful services</div>
                          <div>• إدارة قواعد البيانات</div>
                          <div>• معالجة الملفات والبيانات</div>
                          <div>• خوادم في الوقت الفعلي (Real-time)</div>
                        </div>
                      </div>
                      
                      <div className="bg-accent/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">أطر العمل الشائعة</h5>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <strong>Express.js:</strong> إطار عمل مرن وبسيط
                          </div>
                          <div>
                            <strong>NestJS:</strong> إطار عمل متقدم للمؤسسات
                          </div>
                          <div>
                            <strong>Fastify:</strong> عالي الأداء والسرعة
                          </div>
                          <div>
                            <strong>Koa.js:</strong> من مطوري Express الأصليين
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-accent/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">المايكروسيرفس والحوسبة السحابية</h5>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>• بناء خدمات مستقلة وقابلة للتوسع</div>
                          <div>• النشر على AWS، Google Cloud، Azure</div>
                          <div>• استخدام Docker و Kubernetes</div>
                          <div>• إدارة الحمولة والأداء العالي</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-r-4 border-destructive pr-6">
                    <h4 className="text-xl font-semibold mb-4 text-destructive">4. تطبيقات الموبايل والسطح المكتب</h4>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-destructive/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">تطبيقات الهاتف المحمول</h5>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>React Native:</strong> من Facebook، يستخدم في Instagram و Uber
                          </div>
                          <div>
                            <strong>Ionic:</strong> لتطبيقات الهجين (Hybrid Apps)
                          </div>
                          <div>
                            <strong>NativeScript:</strong> تطبيقات أصلية بـ JavaScript
                          </div>
                          <div>
                            <strong>Expo:</strong> تطوير وإختبار سريع للتطبيقات
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-destructive/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">تطبيقات سطح المكتب</h5>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>Electron:</strong> VS Code، Discord، WhatsApp Desktop
                          </div>
                          <div>
                            <strong>Tauri:</strong> بديل أخف وأكثر أماناً
                          </div>
                          <div>
                            <strong>NW.js:</strong> لتطبيقات الويب المحلية
                          </div>
                          <div>
                            <strong>Progressive Web Apps:</strong> تطبيقات تعمل على جميع المنصات
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-r-4 border-primary pr-6">
                    <h4 className="text-xl font-semibold mb-4 text-primary">5. الذكاء الاصطناعي وعلوم البيانات</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">مكتبات الذكاء الاصطناعي</h5>
                        <div className="grid md:grid-cols-2 gap-2 text-sm">
                          <div>• TensorFlow.js للتعلم الآلي</div>
                          <div>• Brain.js للشبكات العصبية</div>
                          <div>• ML5.js للمبتدئين</div>
                          <div>• MediaPipe للوسائط المتعددة</div>
                        </div>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">تحليل البيانات والتصور</h5>
                        <div className="grid md:grid-cols-2 gap-2 text-sm">
                          <div>• D3.js للرسوم البيانية التفاعلية</div>
                          <div>• Chart.js للرسوم البيانية البسيطة</div>
                          <div>• Observable للتحليل التفاعلي</div>
                          <div>• Plotly.js للرسوم العلمية</div>
                        </div>
                      </div>
                      
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">تطبيقات عملية للذكاء الاصطناعي</h5>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>• التعرف على الصور والوجوه في المتصفح</div>
                          <div>• معالجة اللغة الطبيعية والترجمة</div>
                          <div>• التعرف على الكلام وتحويل النص إلى كلام</div>
                          <div>• الروبوتات التفاعلية (Chatbots)</div>
                          <div>• التنبؤ بالبيانات والاتجاهات</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Future of JavaScript */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 text-center">🔮 مستقبل الجافا سكريبت والتقنيات الناشئة</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-primary">التقنيات الحديثة</h4>
                    <div className="space-y-3">
                      <div className="bg-background/80 p-4 rounded-lg">
                        <h5 className="font-semibold mb-1">WebAssembly (WASM)</h5>
                        <p className="text-sm text-muted-foreground">
                          تشغيل لغات أخرى في المتصفح بأداء عالي، مما يفتح آفاقاً جديدة 
                          للتطبيقات المعقدة مثل ألعاب 3D ومحررات الفيديو.
                        </p>
                      </div>
                      <div className="bg-background/80 p-4 rounded-lg">
                        <h5 className="font-semibold mb-1">Web Components</h5>
                        <p className="text-sm text-muted-foreground">
                          إنشاء عناصر HTML مخصصة قابلة لإعادة الاستخدام 
                          عبر جميع المتصفحات والأطر.
                        </p>
                      </div>
                      <div className="bg-background/80 p-4 rounded-lg">
                        <h5 className="font-semibold mb-1">Edge Computing</h5>
                        <p className="text-sm text-muted-foreground">
                          تشغيل JavaScript على خوادم الحافة (Edge) 
                          لتحسين الأداء وتقليل زمن الاستجابة.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-secondary">الاتجاهات المستقبلية</h4>
                    <div className="space-y-3">
                      <div className="bg-background/80 p-4 rounded-lg">
                        <h5 className="font-semibold mb-1">الذكاء الاصطناعي المدمج</h5>
                        <p className="text-sm text-muted-foreground">
                          دمج أعمق للذكاء الاصطناعي في المتصفحات 
                          ووصول أسهل لنماذج التعلم الآلي المحلية.
                        </p>
                      </div>
                      <div className="bg-background/80 p-4 rounded-lg">
                        <h5 className="font-semibold mb-1">الواقع الافتراضي والمعزز</h5>
                        <p className="text-sm text-muted-foreground">
                          تطوير تطبيقات VR/AR مباشرة في المتصفح 
                          باستخدام WebXR APIs.
                        </p>
                      </div>
                      <div className="bg-background/80 p-4 rounded-lg">
                        <h5 className="font-semibold mb-1">إنترنت الأشياء (IoT)</h5>
                        <p className="text-sm text-muted-foreground">
                          التحكم في الأجهزة الذكية والاستشعار 
                          مباشرة من المتصفح.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-accent/20 to-destructive/20 rounded-lg">
                  <h4 className="font-semibold mb-2 text-center">🚀 لماذا تتعلم الجافا سكريبت الآن؟</h4>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    مع التطوير المستمر للغة وظهور تقنيات جديدة مثل TypeScript، WebAssembly، 
                    وأدوات الذكاء الاصطناعي، تستمر JavaScript في التطور لتصبح أكثر قوة وأماناً. 
                    المستقبل يحمل إمكانيات لا محدودة مع الحوسبة السحابية، إنترنت الأشياء، 
                    والتطبيقات الذكية. بدء رحلتك الآن يعني أنك ستكون جاهزاً لعالم البرمجة المستقبلي!
                  </p>
                </div>
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
