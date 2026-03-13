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
              <button className="bg-primary text-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all flex items-center gap-2">
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
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83" />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-white/50">{t("landing.cta.downloadOn")}</p>
                  <p className="text-sm font-semibold">{t("landing.cta.appStore")}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.54.68.54 1.19 0 .51-.2.92-.54 1.19l-2.09 1.23-2.5-2.42 2.5-2.42 2.09 1.23zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-white/50">{t("landing.cta.getItOn")}</p>
                  <p className="text-sm font-semibold">{t("landing.cta.googlePlay")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

