import { useTranslation } from "react-i18next"

export function CTA() {
  const { t } = useTranslation()

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-12 text-center overflow-hidden border border-primary/20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">{t("landing.cta.title")}</h2>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">
              {t("landing.cta.subtitle")}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(221,252,18,0.5)]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5 2a4.5 4.5 0 00-4.35 5.63l-6.8 6.81L5 13.09l-2.12 2.12a1 1 0 000 1.42l4.5 4.5a1 1 0 001.41 0L11 19l-1.35-1.35 6.81-6.8A4.5 4.5 0 1017.5 2zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
                </svg>
                {t("landing.cta.downloadApp")}
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 transition-all">
                {t("landing.cta.contactSales")}
              </button>
            </div>
            {/* App Store Badges */}
            <div className="flex justify-center gap-4 mt-8">
              <div className="flex items-center">
                <img src="/apple.svg" alt="Apple" className="w-50 h-50 object-contain" />
              </div>
              <div className="flex items-center">
                <img src="/googleplay.png" alt="Google Play" className="w-60 h-60 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

