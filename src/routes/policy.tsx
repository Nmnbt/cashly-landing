import { createFileRoute } from "@tanstack/react-router"
import { Card, CardContent } from "uilab-core"
import { Shield, FileText, Users, Lock, Clock, Baby, Mail } from "lucide-react"
import { Navigation } from "../components/landing/Navigation"
import { Footer } from "../components/landing/Footer"

export const Route = createFileRoute("/policy")({
  component: PolicyPage,
})

function PolicyPage() {
  const sections = [
    {
      icon: Shield,
      title: "Танилцуулга",
      content: (
        <>
          <div className="bg-primary/10 border-l-4 border-primary p-5 rounded-r-lg mb-4">
            <p className="text-white/80 leading-relaxed mb-3">
              Энэхүү үйлчилгээний нөхцөл нь <span className="font-bold text-white">"ЮНАЙТЕД КРЕДИТ" ХХК</span>-ний
              <span className="font-bold text-white"> "cashly"</span> зээлийн аппликэйшнд таны тодорхой мэдээллийг хүлээн авах, хадгалах,
              уг зээлийн нөхцөлд заасан зорилгоор ашиглах, таны ирүүлсэн мэдээллийн дагуу боловсруулалт хийх эрхийг олгох
              эрх зүйн үр дагавар бүхий хууль зүйн баримтбичиг юм.
            </p>
          </div>

          <div className="bg-orange-500/10 border-l-4 border-orange-500/50 p-5 rounded-r-lg mb-4">
            <p className="text-white/80 leading-relaxed">
              Иймд та энэхүү үйлчилгээний нөхцөлтэй сайтар танилцаж, зөвшөөрөх эсэхээ шийдэхийг зөвлөж байна.
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 p-5 rounded-lg">
            <p className="text-white/80 leading-relaxed">
              Та "cashly" зээлийн аппликэйшнд таны бүртгүүлсэн гар утасны дугаарт илгээсэн
              <span className="font-semibold text-blue-400"> 6 орон баталгаажуулах код</span>-ыг
              "БАТАЛГААЖУУЛАХ КОД" хэсэгт оруулан "БАТАЛГААЖУУЛАХ" товчлуурыг дарсан бол
              таныг уг үйлчилгээний нөхцөлийг хүлээн зөвшөөрсөн, гарын үсэг зурсан хэмээн үзнэ.
            </p>
          </div>
        </>
      )
    },
    {
      icon: FileText,
      title: "Аппликэйшн ашиглах",
      content: (
        <>
          <p className="text-white/80 leading-relaxed mb-4">
            Та "cashly" аппликейшнийг <span className="font-semibold text-white">Google Play Store</span> болон
            <span className="font-semibold text-white"> App Store</span>-с татан авч өөрийн мэдээллээ бүртгүүлэн
            баталгаажуулснаар манай аппликейшнийг ашиглах боломжтой болно.
          </p>

          <div className="bg-white/5 border-2 border-primary/30 rounded-lg p-5 shadow-sm">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                <FileText className="w-4 h-4 text-primary" />
              </span>
              Бүртгүүлэх мэдээлэл:
            </h4>
            <ul className="space-y-3 ml-11">
              <li className="text-white/80 flex items-start">
                <span className="text-primary mr-3 mt-1 font-bold text-lg">•</span>
                <span>Гар утасны дугаар</span>
              </li>
              <li className="text-white/80 flex items-start">
                <span className="text-primary mr-3 mt-1 font-bold text-lg">•</span>
                <span>Овог, нэр</span>
              </li>
              <li className="text-white/80 flex items-start">
                <span className="text-primary mr-3 mt-1 font-bold text-lg">•</span>
                <span>Регистрийн дугаар</span>
              </li>
              <li className="text-white/80 flex items-start">
                <span className="text-primary mr-3 mt-1 font-bold text-lg">•</span>
                <span>И-мэйл хаяг</span>
              </li>
              <li className="text-white/80 flex items-start">
                <span className="text-primary mr-3 mt-1 font-bold text-lg">•</span>
                <span>Фэйсбүүкийн нэр, ID, фэйсбүүкийн бүртгэлтэй и-мэйл</span>
              </li>
            </ul>
          </div>
        </>
      )
    },
    {
      icon: Shield,
      title: "Зөвшөөрөл болон эрх",
      content: (
        <>
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 border-2 border-primary/50 p-5 rounded-lg mb-4">
            <p className="text-white/90 leading-relaxed font-medium">
              Та энэхүү үйлчилгээний нөхцөлийг зөвшөөрснөөр <span className="font-bold text-white">"ЮНАЙТЕД КРЕДИТ" ХХК</span>-нд
              дараах зөвшөөрөл, эрхийг олгох болно:
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-green-400 font-bold">1.1</span>
                </div>
                <p className="text-white/80 leading-relaxed mt-1.5">
                  Таны үүсгэсэн, дамжуулсан хувийн болон санхүүгийн мэдээллийг хүлээн авч, хадгалах.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-400 font-bold">1.2</span>
                </div>
                <p className="text-white/80 leading-relaxed mt-1.5">
                  Таны үүсгэсэн, дамжуулсан хувийн болон санхүүгийн мэдээлэлд
                  <span className="font-semibold text-white"> хиймэл оюун ухааны</span> тусламжтайгаар
                  дүн шинжилгээ хийх, тэдгээрийн үнэн зөвийг шалгаж баталгаажуулах.
                </p>
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      icon: Users,
      title: "Мэдээлэл хуваалцах",
      content: (
        <>
          <p className="text-white/80 leading-relaxed mb-4">
            Бид таны хувийн мэдээллийг дараах тохиолдолд гуравдагч этгээдтэй хуваалцаж болно:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Хууль ёсны шаардлагаар",
              "Үйлчилгээ үзүүлэгч (техникийн дэмжлэг, төлбөрийн системүүд)",
              "Санхүүгийн байгууллагууд (зээлийн мэдээллийн сан)",
              "Эрх бүхий байгууллагын хүсэлтээр",
              "Бизнесийн нэгдэл, худалдан авалтын тохиолдолд"
            ].map((item, idx) => (
              <li key={idx} className="text-white/80 flex items-start">
                <span className="text-primary mr-3 mt-1">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-blue-500/10 border-l-4 border-blue-500/50 p-4 rounded-r-lg">
            <p className="text-white/80 leading-relaxed">
              Бид танай мэдээллийг зөвхөн хамгаалалттай, найдвартай гуравдагч этгээдтэй хуваалцдаг ба
              тэд нууцлалын үүрэг хүлээнэ.
            </p>
          </div>
        </>
      )
    },
    {
      icon: Lock,
      title: "Мэдээллийн аюулгүй байдал",
      content: (
        <>
          <p className="text-white/80 leading-relaxed mb-4">
            Бид таны хувийн мэдээллийг хамгаалахын тулд дараах арга хэмжээг авдаг:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "SSL/TLS шифрлэлт ашиглах",
              "Мэдээллийн санг шифрлэн хадгалах",
              "Хандалтын эрхийн удирдлага",
              "Тогтмол аюулгүй байдлын шалгалт хийх",
              "Ажилчдын нууцлалын гэрээ"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start bg-green-500/10 p-3 rounded-lg border border-green-500/30">
                <Lock className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </>
      )
    },
    {
      icon: Shield,
      title: "Таны эрх",
      content: (
        <>
          <p className="text-white/80 leading-relaxed mb-4">Та дараах эрхүүдтэй:</p>
          <div className="space-y-3">
            {[
              "Өөрийн мэдээллийг үзэх, засах эсвэл устгах",
              "Мэдээлэл боловсруулахыг хязгаарлах",
              "Мэдээллээ авах (портын чөлөө)",
              "Маркетинг мессежээс татгалзах",
              "Зөвшөөрлөө эргүүлэн татах",
              "Гомдол гаргах"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start bg-purple-500/10 p-3 rounded-lg border border-purple-500/30">
                <span className="text-purple-400 mr-3 font-bold">→</span>
                <span className="text-white/80">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-primary/10 border border-primary/30 p-4 rounded-lg">
            <p className="text-white/80 leading-relaxed">
              Эдгээр эрхээ хэрэгжүүлэхийн тулд бидэнтэй холбоо барина уу.
            </p>
          </div>
        </>
      )
    },
    {
      icon: Clock,
      title: "Мэдээлэл хадгалах хугацаа",
      content: (
        <div className="bg-white/5 p-5 rounded-lg border border-white/10">
          <p className="text-white/80 leading-relaxed">
            Бид таны хувийн мэдээллийг зөвхөн шаардлагатай хугацаанд хадгална.
            Энэ нь хууль, санхүү, тайлагналын шаардлагад үндэслэнэ.
            Ихэвчлэн зээлийн гэрээ дууссанаас хойш <span className="font-semibold text-white">5-10 жилийн</span> хугацаанд хадгална.
          </p>
        </div>
      )
    },
    {
      icon: Baby,
      title: "Хүүхдийн нууцлал",
      content: (
        <div className="bg-orange-500/10 border-l-4 border-orange-500/50 p-5 rounded-r-lg">
          <p className="text-white/80 leading-relaxed mb-3">
            Манай үйлчилгээ <span className="font-semibold text-white">18 нас хүрээгүй хүүхдэд</span> зориулагдаагүй.
            Бид 18 нас хүрээгүй хүмүүсээс хувийн мэдээлэл цуглуулдаггүй.
          </p>
          <p className="text-white/80 leading-relaxed">
            Хэрэв та эцэг эх, асран хамгаалагч бөгөөд таны хүүхэд бидэнд хувийн мэдээлэл өгсөн гэдгийг
            мэдсэн бол бидэнтэй холбогдоно уу.
          </p>
        </div>
      )
    },
    {
      icon: Mail,
      title: "Холбоо барих",
      content: (
        <>
          <p className="text-white/80 leading-relaxed mb-4">
            Энэхүү үйлчилгээний нөхцөлтэй холбоотой асуулт, санал хүсэлт байвал бидэнтэй холбогдоно уу:
          </p>
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 p-6 rounded-xl shadow-sm">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-xl text-white mb-1">"ЮНАЙТЕД КРЕДИТ" ХХК</p>
                <p className="text-white/60 text-sm">Cashly - Бидэнтэй холбогдоорой</p>
              </div>
            </div>
            <div className="space-y-3 ml-16">
              <div className="flex items-start">
                <span className="font-semibold text-white min-w-[80px]">Хаяг:</span>
                <span className="text-white/80">ЧД, 2-р хороо, Жуулчны гудамж, Найман шарга төв, 45-1 14250</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-white min-w-[80px]">Утас:</span>
                <span className="text-white/80">72229999</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-white min-w-[80px]">Имэйл:</span>
                <span className="text-white/80">info@cashly.mn</span>
              </div>
            </div>
          </div>
        </>
      )
    }
  ]

  return (
    <div className="min-h-full bg-dark text-white overflow-auto relative">
      <Navigation />
      
      {/* Header Space for Navbar */}
      <main className="pt-32 pb-20">
        {/* Header content styling similar to Hero */}
        <div className="mx-auto max-w-5xl px-6 mb-12">
          <div className="flex flex-col items-center animate-slideUp">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-6">
              Үйлчилгээний нөхцөл ба <span className="text-primary">Нууцлалын бодлого</span>
            </h1>
            <p className="text-lg text-white/60 text-center max-w-2xl">
              Cashly зээлийн аппликэйшний үйлчилгээний нөхцөл болон хувийн мэдээллийн аюулгүй байдал
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-5xl px-6">
          <Card className="shadow-2xl border border-white/10 bg-[#131313] overflow-hidden">
            <CardContent className="p-0">
              <div className="divide-y divide-white/5">
                {sections.map((section, index) => {
                  const Icon = section.icon
                  return (
                    <section key={index} className="p-6 md:p-8 hover:bg-white/[0.02] transition-colors">
                      <div className="flex items-start mb-5">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mr-4 flex-shrink-0 shadow-[0_0_15px_rgba(221,252,18,0.15)]">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mt-1.5">
                          {section.title}
                        </h2>
                      </div>
                      <div className="ml-0 md:ml-16">
                        {section.content}
                      </div>
                    </section>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
