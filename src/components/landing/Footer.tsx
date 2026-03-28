import { useTranslation } from "react-i18next"
import { Link } from "@tanstack/react-router"

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Link to="/">
                <img src="/white_cashly.png" alt="Cashly Logo" className="h-8 object-contain cursor-pointer hover:opacity-80 transition-opacity" />
              </Link>
            </div>
            <p className="text-white/50 text-sm max-w-xs">{t("landing.footer.tagline")}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("landing.footer.support")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="/policy" className="text-white/50 text-sm hover:text-white transition-colors">
                  {t("landing.footer.termsOfService")}
                </a>
              </li>
              <li>
                <a href="/policy" className="text-white/50 text-sm hover:text-white transition-colors">
                  {t("landing.footer.privacyPolicy")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-white/40 text-sm">{t("landing.footer.copyright")}</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/UniPayApp" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

