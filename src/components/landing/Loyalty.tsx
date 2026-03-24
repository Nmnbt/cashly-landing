import { useTranslation } from "react-i18next"

export function Loyalty() {
  const { t } = useTranslation()

  const perks = [
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: t("landing.loyalty.exclusiveGifts.title"),
      description: t("landing.loyalty.exclusiveGifts.description")
    },
    {
      icon: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
        </svg>
      ),
      title: t("landing.loyalty.lowerRates.title"),
      description: t("landing.loyalty.lowerRates.description")
    }
  ]

  const rewards: Array<{ emoji: string; name: string; points: number }> = [
    { emoji: "☕", name: t("landing.loyalty.coffee"), points: 50 },
    { emoji: "🎧", name: t("landing.loyalty.earbuds"), points: 200 },
    { emoji: "📱", name: t("landing.loyalty.phone"), points: 1000 }
  ]

  return (
    <section id="loyalty" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {t("landing.loyalty.badge")}
            </span>
            <h2 className="text-4xl font-bold">
              {t("landing.loyalty.title")}
              <br />
              {t("landing.loyalty.titleLine2")}
            </h2>
            <p className="text-white/60 max-w-md">{t("landing.loyalty.subtitle")}</p>

            <div className="space-y-4 pt-4">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    {perk.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{perk.title}</h4>
                    <p className="text-white/50 text-sm">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Rewards Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-8 border border-primary/20">
              {/* Points Display */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-white/50 text-sm">{t("landing.loyalty.pointsBalance")}</p>
                  <p className="text-4xl font-bold text-primary">20</p>
                </div>
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🎁</span>
                </div>
              </div>

              {/* Tier Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/70">{t("landing.loyalty.silverMember")}</span>
                  <span className="text-primary">550 {t("landing.loyalty.toGold")}</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                </div>
              </div>

              {/* Rewards Grid */}
              <p className="text-sm text-white/50 mb-4">{t("landing.loyalty.availableRewards")}</p>
              <div className="grid grid-cols-3 gap-3">
                {rewards.map((reward, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 text-center hover:bg-white/10 transition-colors cursor-pointer">
                    <span className="text-2xl mb-2 block">{reward.emoji}</span>
                    <p className="text-xs text-white/70">{reward.name}</p>
                    <p className="text-xs text-primary font-semibold">
                      {reward.points} {t("landing.loyalty.pts")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-dark px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              {t("landing.loyalty.pointsPerAmount")}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

