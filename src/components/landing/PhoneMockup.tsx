import { useTranslation } from "react-i18next"

export function PhoneMockup() {
  const { t } = useTranslation()

  return (
    <div className="relative animate-float">
      {/* Phone Mockup */}
      <div className="relative mx-auto w-72 h-[580px] bg-gradient-to-b from-white/10 to-white/5 rounded-[3rem] p-3 border border-white/10">
        <div className="w-full h-full bg-dark rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-3">
            <span className="text-xs text-white/60">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
              </svg>
              <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 4h2v16h-2V4zm-4 4h2v12h-2V8zm-4 4h2v8H9v-8zm-4 4h2v4H5v-4z" />
              </svg>
              <div className="w-6 h-3 bg-white/60 rounded-sm"></div>
            </div>
          </div>

          {/* App Content */}
          <div className="px-5 pt-2 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/50">{t("landing.phone.welcomeBack")}</p>
                <p className="text-lg font-semibold">{t("landing.phone.userName")}</p>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-sm font-bold">ББ</span>
              </div>
            </div>

            {/* Credit Score Card */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-4 border border-primary/20">
              <p className="text-xs text-white/60 mb-2">{t("landing.phone.creditScore")}</p>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-bold text-primary">785</span>
                <span className="text-xs text-green-400 pb-1">{t("landing.phone.thisMonth")}</span>
              </div>
              <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-primary rounded-full"></div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs text-white/70">{t("landing.phone.borrow")}</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <span className="text-xs text-white/70">{t("landing.phone.history")}</span>
              </div>
              <div className="bg-white/5 rounded-xl p-3 text-center">
                <div className="w-8 h-8 bg-primary/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <span className="text-xs text-white/70">{t("landing.phone.rewards")}</span>
              </div>
            </div>

            {/* Available Loan */}
            <div className="bg-white/5 rounded-2xl p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm text-white/70">{t("landing.phone.availableLoan")}</p>
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                  {t("landing.phone.preApproved")}
                </span>
              </div>
              <p className="text-2xl font-bold">₮150,000</p>
              <button className="w-full mt-3 bg-primary text-dark py-2.5 rounded-xl font-semibold text-sm">
                {t("landing.phone.applyNow")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -right-4 top-20 bg-dark/90 backdrop-blur border border-white/10 rounded-2xl p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-white/50">{t("landing.phone.danVerified")}</p>
            <p className="text-sm font-semibold">{t("landing.phone.identityConfirmed")}</p>
          </div>
        </div>
      </div>

      <div className="absolute -left-4 bottom-32 bg-dark/90 backdrop-blur border border-white/10 rounded-2xl p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-primary font-bold text-sm">🎁</span>
          </div>
          <div>
            <p className="text-xs text-white/50">{t("landing.phone.loyaltyPoints")}</p>
            <p className="text-sm font-semibold text-primary">2,450 {t("landing.loyalty.pts")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

