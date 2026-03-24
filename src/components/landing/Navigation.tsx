import { useTranslation } from "react-i18next"
import { Link } from "@tanstack/react-router"

export function Navigation() {
  const { t } = useTranslation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-center gap-12 relative">
        <Link to="/" className="flex-shrink-0">
          <img src="/white_cashly.png" alt="Cashly Logo" className="h-8 object-contain cursor-pointer hover:opacity-80 transition-opacity" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          <a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">
            {t("landing.nav.features")}
          </a>
        </div>

        {/* Nav Links (Right) */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-start">
          <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm">
            {t("landing.nav.howItWorks")}
          </a>
          <a href="#loyalty" className="text-white/70 hover:text-white transition-colors text-sm">
            {t("landing.nav.rewards")}
          </a>
        </div>
      </div>
    </nav>
  )
}

