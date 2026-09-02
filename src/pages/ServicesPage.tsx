import {
  ArrowRight,
  Compass,
  PenTool,
  Wrench,
  TrendingUp,
  Clock,
  PiggyBank,
  Target,
  Rocket,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { services } from '@/lib/servicesData';

const processSteps = [
  {
    num: '01',
    icon: Compass,
    title: 'Découvrir',
    description: "Nous comprenons vos besoins métier et vos défis de workflow.",
  },
  {
    num: '02',
    icon: PenTool,
    title: 'Planifier et concevoir',
    description: "Nous concevons la solution d'automatisation idéale pour vos besoins.",
  },
  {
    num: '03',
    icon: Wrench,
    title: 'Construire et implémenter',
    description: "Nous construisons, testons et implémentons votre workflow automatisé.",
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Optimiser et supporter',
    description: "Nous surveillons, optimisons et assurons un support continu.",
  },
];

const benefits = [
  { icon: Clock, label: 'Gain de temps' },
  { icon: PiggyBank, label: 'Réduction des coûts' },
  { icon: Target, label: 'Meilleure précision' },
  { icon: Rocket, label: 'Croissance scalable' },
];

export function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-ink-950 text-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] glow-primary -translate-y-1/4 translate-x-1/4" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none hidden lg:block" aria-hidden="true">
          <img src="/hero-services.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow className="text-primary-300">Nos services</Eyebrow>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
              Des solutions d'automatisation puissantes pour les entreprises modernes
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed">
              Nous aidons les entreprises à automatiser leurs workflows, intégrer leurs
              systèmes et concevoir des solutions propulsées par l'IA pour gagner du
              temps, réduire les coûts et stimuler la croissance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button to="/diagnostic" size="lg" className="bg-primary-500 text-ink-950 hover:bg-primary-400">
                Présenter mon besoin
                <ArrowRight className="h-4.5 w-4.5" />
              </Button>
              <Button to="/methode" size="lg" variant="ghost" className="text-white hover:bg-white/10">
                Découvrir la Méthode
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services list */}
      <Section className="bg-ink-950 py-10 md:py-14">
        <Container>
          <div className="mb-8 max-w-2xl">
            <Eyebrow className="text-primary-300">Nos expertises</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Des services conçus pour passer à l'action
            </h2>
          </div>
          <div className="space-y-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,1fr)_auto] items-center gap-6 rounded-xl border border-ink-700 bg-ink-900/70 p-5 md:p-6 transition-all duration-300 hover:border-primary-500/70 hover:bg-ink-800"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-primary-400/60 bg-ink-800 text-primary-300 transition-colors group-hover:bg-primary-950">
                    <service.icon className="h-9 w-9" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-semibold leading-snug text-white">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">
                      {service.shortDescription}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="rounded bg-primary-950 px-2 py-1 text-[11px] font-medium text-primary-200">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 border-l border-ink-700 pl-5 text-sm text-ink-200">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-primary-400 text-[9px] text-primary-300">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <span className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-primary-500 px-5 py-2.5 text-sm font-medium text-primary-200 transition-colors group-hover:bg-primary-500 group-hover:text-ink-950 lg:w-auto">
                  En savoir plus
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-ink-50 pt-10 pb-4 md:pt-14 md:pb-6">
        <Container>
          <div className="max-w-2xl mb-12">
            <Eyebrow>Notre processus</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              Notre processus simple en 4 étapes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="relative rounded-2xl bg-white border border-ink-100 p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-ink-900 text-primary-400 font-display font-bold text-sm">
                    {step.num}
                  </span>
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 text-primary-600">
                    <step.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold text-ink-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white pt-6 pb-12 md:pt-8 md:pb-16">
        <Container>
          <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-800 px-8 py-12 md:px-12 md:py-14 text-center">
            <Eyebrow className="text-primary-200">Prêt à automatiser votre entreprise ?</Eyebrow>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white">
              Construisons votre solution d'automatisation
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10">
              {benefits.map((benefit) => (
                <div key={benefit.label} className="flex flex-col items-center gap-2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-primary-200">
                    <benefit.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-medium text-primary-50">{benefit.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/diagnostic" size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                Présenter mon besoin
                <ArrowRight className="h-4.5 w-4.5" />
              </Button>
              <Button to="/produits" size="lg" variant="ghost" className="text-white hover:bg-white/10">
                Voir les produits
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
