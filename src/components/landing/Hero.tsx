import { useTranslation } from "react-i18next"
import { PhoneMockup } from "./PhoneMockup"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-32 pb-20 px-6 gradient-glow overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideUp">

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {t("landing.hero.title")}
              <br />
              <span className="text-primary">{t("landing.hero.titleHighlight")}</span>
            </h1>

            <p className="text-lg text-white/60 max-w-md">
              {t("landing.hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 group shadow-[0_0_15px_rgba(221,252,18,0.5)]">
                {t("landing.hero.applyNow")}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 transition-all">
                {t("landing.hero.learnMore")}
              </button>
            </div>

          </div>

          {/* Right - App Preview */}
          <div className="relative animate-slideUp stagger-2">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

