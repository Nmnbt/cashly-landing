import { useTranslation } from "react-i18next"

export function Features() {
  const { t } = useTranslation()

  const features = [
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t("landing.features.danVerification.title"),
      description: t("landing.features.danVerification.description"),
      delay: "stagger-1"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: t("landing.features.instantScore.title"),
      description: t("landing.features.instantScore.description"),
      delay: "stagger-2"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t("landing.features.flexiblePayments.title"),
      description: t("landing.features.flexiblePayments.description"),
      delay: "stagger-3"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t("landing.features.access247.title"),
      description: t("landing.features.access247.description"),
      delay: "stagger-1"
    }
  ]

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("landing.features.badge")}
          </span>
          <h2 className="text-4xl font-bold mt-3">{t("landing.features.title")}</h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            {t("landing.features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className={`glass-card rounded-2xl p-6 card-hover animate-slideUp ${feature.delay}`}>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

