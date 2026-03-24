import { createFileRoute } from "@tanstack/react-router"
import { Card, CardContent } from "uilab-core"
import { Shield, FileText, Users, Lock, Clock, Baby, Mail } from "lucide-react"

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
          <div className="bg-[#ddfc12]/10 border-l-4 border-[#ddfc12] p-5 rounded-r-lg mb-4">
            <p className="text-gray-700 leading-relaxed mb-3">
              Энэхүү үйлчилгээний нөхцөл нь <span className="font-bold text-gray-900">"ЮНАЙТЕД КРЕДИТ" ХХК</span>-ний
              <span className="font-bold text-gray-900"> "cashly"</span> зээлийн аппликэйшнд таны тодорхой мэдээллийг хүлээн авах, хадгалах,
              уг зээлийн нөхцөлд заасан зорилгоор ашиглах, таны ирүүлсэн мэдээллийн дагуу боловсруулалт хийх эрхийг олгох
              эрх зүйн үр дагавар бүхий хууль зүйн баримтбичиг юм.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-r-lg mb-4">
            <p className="text-gray-700 leading-relaxed">
              Иймд та энэхүү үйлчилгээний нөхцөлтэй сайтар танилцаж, зөвшөөрөх эсэхээ шийдэхийг зөвлөж байна.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              Та "cashly" зээлийн аппликэйшнд таны бүртгүүлсэн гар утасны дугаарт илгээсэн
              <span className="font-semibold text-blue-700"> 6 орон баталгаажуулах код</span>-ыг
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
          <p className="text-gray-700 leading-relaxed mb-4">
            Та "cashly" аппликейшнийг <span className="font-semibold text-gray-900">Google Play Store</span> болон
            <span className="font-semibold text-gray-900"> App Store</span>-с татан авч өөрийн мэдээллээ бүртгүүлэн
            баталгаажуулснаар манай аппликейшнийг ашиглах боломжтой болно.
          </p>

          <div className="bg-white border-2 border-[#ddfc12] rounded-lg p-5 shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-[#ddfc12] flex items-center justify-center mr-3">
                <FileText className="w-4 h-4 text-gray-900" />
              </span>
              Бүртгүүлэх мэдээлэл:
            </h4>
            <ul className="space-y-3 ml-11">
              <li className="text-gray-700 flex items-start">
                <span className="text-[#ddfc12] mr-3 mt-1 font-bold text-lg">•</span>
                <span>Гар утасны дугаар</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#ddfc12] mr-3 mt-1 font-bold text-lg">•</span>
                <span>Овог, нэр</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#ddfc12] mr-3 mt-1 font-bold text-lg">•</span>
                <span>Регистрийн дугаар</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#ddfc12] mr-3 mt-1 font-bold text-lg">•</span>
                <span>И-мэйл хаяг</span>
              </li>
              <li className="text-gray-700 flex items-start">
                <span className="text-[#ddfc12] mr-3 mt-1 font-bold text-lg">•</span>
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
          <div className="bg-gradient-to-r from-[#ddfc12]/20 to-[#ddfc12]/5 border-2 border-[#ddfc12] p-5 rounded-lg mb-4">
            <p className="text-gray-800 leading-relaxed font-medium">
              Та энэхүү үйлчилгээний нөхцөлийг зөвшөөрснөөр <span className="font-bold text-gray-900">"ЮНАЙТЕД КРЕДИТ" ХХК</span>-нд
              дараах зөвшөөрөл, эрхийг олгох болно:
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-green-700 font-bold">1.1</span>
                </div>
                <p className="text-gray-700 leading-relaxed mt-1.5">
                  Таны үүсгэсэн, дамжуулсан хувийн болон санхүүгийн мэдээллийг хүлээн авч, хадгалах.
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-700 font-bold">1.2</span>
                </div>
                <p className="text-gray-700 leading-relaxed mt-1.5">
                  Таны үүсгэсэн, дамжуулсан хувийн болон санхүүгийн мэдээлэлд
                  <span className="font-semibold text-gray-900"> хиймэл оюун ухааны</span> тусламжтайгаар
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
          <p className="text-gray-700 leading-relaxed mb-4">
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
              <li key={idx} className="text-gray-700 flex items-start">
                <span className="text-[#ddfc12] mr-3 mt-1">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-gray-700 leading-relaxed">
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
          <p className="text-gray-700 leading-relaxed mb-4">
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
              <div key={idx} className="flex items-start bg-green-50 p-3 rounded-lg border border-green-200">
                <Lock className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
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
          <p className="text-gray-700 leading-relaxed mb-4">Та дараах эрхүүдтэй:</p>
          <div className="space-y-3">
            {[
              "Өөрийн мэдээллийг үзэх, засах эсвэл устгах",
              "Мэдээлэл боловсруулахыг хязгаарлах",
              "Мэдээллээ авах (портын чөлөө)",
              "Маркетинг мессежээс татгалзах",
              "Зөвшөөрлөө эргүүлэн татах",
              "Гомдол гаргах"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start bg-purple-50 p-3 rounded-lg border border-purple-200">
                <span className="text-purple-600 mr-3 font-bold">→</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#ddfc12]/10 border border-[#ddfc12] p-4 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
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
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <p className="text-gray-700 leading-relaxed">
            Бид таны хувийн мэдээллийг зөвхөн шаардлагатай хугацаанд хадгална.
            Энэ нь хууль, санхүү, тайлагналын шаардлагад үндэслэнэ.
            Ихэвчлэн зээлийн гэрээ дууссанаас хойш <span className="font-semibold text-gray-900">5-10 жилийн</span> хугацаанд хадгална.
          </p>
        </div>
      )
    },
    {
      icon: Baby,
      title: "Хүүхдийн нууцлал",
      content: (
        <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed mb-3">
            Манай үйлчилгээ <span className="font-semibold text-gray-900">18 нас хүрээгүй хүүхдэд</span> зориулагдаагүй.
            Бид 18 нас хүрээгүй хүмүүсээс хувийн мэдээлэл цуглуулдаггүй.
          </p>
          <p className="text-gray-700 leading-relaxed">
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
          <p className="text-gray-700 leading-relaxed mb-4">
            Энэхүү үйлчилгээний нөхцөлтэй холбоотой асуулт, санал хүсэлт байвал бидэнтэй холбогдоно уу:
          </p>
          <div className="bg-gradient-to-br from-[#ddfc12]/20 to-[#ddfc12]/5 border-2 border-[#ddfc12] p-6 rounded-xl shadow-sm">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 rounded-full bg-[#ddfc12] flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <p className="font-bold text-xl text-gray-900 mb-1">"ЮНАЙТЕД КРЕДИТ" ХХК</p>
                <p className="text-gray-600 text-sm">Cashly - Бидэнтэй холбогдоорой</p>
              </div>
            </div>
            <div className="space-y-3 ml-16">
              <div className="flex items-start">
                <span className="font-semibold text-gray-900 min-w-[80px]">Хаяг:</span>
                <span className="text-gray-700">ЧД, 2-р хороо, Жуулчны гудамж, Найман шарга төв, 45-1 14250</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-gray-900 min-w-[80px]">Утас:</span>
                <span className="text-gray-700">72229999</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold text-gray-900 min-w-[80px]">Имэйл:</span>
                <span className="text-gray-700">info@cashly.mn</span>
              </div>
            </div>
          </div>
        </>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#ddfc12] via-[#e8ff3a] to-[#ddfc12] shadow-lg">
        <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-2xl shadow-xl mb-6 ring-4 ring-white/50">
              <img
                src="/yellow_cashly.png"
                alt="Cashly"
                className="h-16 md:h-20 object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-3">
              Үйлчилгээний нөхцөл ба Нууцлалын бодлого
            </h1>
            <p className="text-gray-700 text-center text-sm md:text-base max-w-2xl">
              Cashly зээлийн аппликэйшний үйлчилгээний нөхцөл болон хувийн мэдээллийн аюулгүй байдал
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        <Card className="shadow-xl border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="divide-y divide-gray-200">
              {sections.map((section, index) => {
                const Icon = section.icon
                return (
                  <section key={index} className="p-6 md:p-8 hover:bg-gray-50/50 transition-colors">
                    <div className="flex items-start mb-5">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#ddfc12] to-[#c5e010] flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                        <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-1.5">
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

            {/* Footer */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 md:px-8 py-6 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>
                    Сүүлд шинэчилсэн: {new Date().toLocaleDateString('mn-MN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span>© 2026 "ЮНАЙТЕД КРЕДИТ" ХХК. Бүх эрх хуулиар хамгаалагдсан.</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
