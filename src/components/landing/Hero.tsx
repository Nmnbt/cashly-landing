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
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-slow"></span>
              <span className="text-sm text-white/80">{t("landing.hero.badge")}</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {t("landing.hero.title")}
              <br />
              <span className="text-primary">{t("landing.hero.titleHighlight")}</span>
            </h1>

            <p className="text-lg text-white/60 max-w-md">
              {t("landing.hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 group">
                {t("landing.hero.applyNow")}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/5 transition-all">
                {t("landing.hero.learnMore")}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/60">{t("landing.hero.noHiddenFees")}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-white/60">{t("landing.hero.instantApproval")}</span>
              </div>
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

