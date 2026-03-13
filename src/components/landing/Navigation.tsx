import { useTranslation } from "react-i18next"

export function Navigation() {
  const { t } = useTranslation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#191919" />
              <path d="M2 17L12 22L22 17" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="#191919" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-xl font-bold">Cashly</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">
            {t("landing.nav.features")}
          </a>
          <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm">
            {t("landing.nav.howItWorks")}
          </a>
          <a href="#loyalty" className="text-white/70 hover:text-white transition-colors text-sm">
            {t("landing.nav.rewards")}
          </a>
        </div>

        {/* CTA Button */}
        <button className="bg-primary text-dark px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all">
          {t("landing.nav.getStarted")}
        </button>
      </div>
    </nav>
  )
}

