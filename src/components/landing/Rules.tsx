import { useTranslation } from "react-i18next"

export function Rules() {
  const { t } = useTranslation()

  const rules = [
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: t("landing.rules.age"),
      description: t("landing.rules.age-description"),
      delay: "stagger-1"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t("landing.rules.income"),
      description: t("landing.rules.income-description"),
      delay: "stagger-2"
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t("landing.rules.history"),
      description: t("landing.rules.history-description"),
      delay: "stagger-3"
    }
  ]

  return (
    <section id="rules" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("landing.rules.badge", { defaultValue: "Шаардлага" })}
          </span>
          <h2 className="text-4xl font-bold mt-3">
            {t("landing.rules.title", { defaultValue: "Зээл авах шаардлага" })}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <div key={index} className={`glass-card rounded-2xl p-6 card-hover animate-slideUp ${rule.delay}`}>
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                {rule.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{rule.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{rule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
