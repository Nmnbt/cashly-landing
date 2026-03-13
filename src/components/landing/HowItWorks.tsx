import { useTranslation } from "react-i18next"

export function HowItWorks() {
  const { t } = useTranslation()

  const steps = [
    {
      number: 1,
      title: t("landing.howItWorks.step1.title"),
      description: t("landing.howItWorks.step1.description"),
      showConnector: true
    },
    {
      number: 2,
      title: t("landing.howItWorks.step2.title"),
      description: t("landing.howItWorks.step2.description"),
      showConnector: true
    },
    {
      number: 3,
      title: t("landing.howItWorks.step3.title"),
      description: t("landing.howItWorks.step3.description"),
      showConnector: false
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            {t("landing.howItWorks.badge")}
          </span>
          <h2 className="text-4xl font-bold mt-3">{t("landing.howItWorks.title")}</h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            {t("landing.howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="relative inline-flex">
                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-dark text-3xl font-bold">{step.number}</span>
                </div>
                {step.showConnector && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

