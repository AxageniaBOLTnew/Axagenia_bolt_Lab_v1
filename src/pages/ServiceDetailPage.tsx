import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { services } from '@/lib/servicesData';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink-100">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-ink-900">{question}</span>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-ink-600">{answer}</p>
      )}
    </div>
  );
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-ink-950 text-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] glow-primary -translate-y-1/4 translate-x-1/4" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-15 pointer-events-none hidden lg:block" aria-hidden="true">
          <img src="/hero-services.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <Link
              to="/services"
              className="mb-6 inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-primary-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux services
            </Link>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary-400/40 bg-ink-900 text-primary-300">
              <Icon className="h-8 w-8" strokeWidth={1.6} />
            </div>
            <Eyebrow className="text-primary-300">Nos services</Eyebrow>
            <h1 className="mt-4 text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              {service.heroTitle}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed">
              {service.heroSubtitle}
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

      {/* Intro */}
      <Section className="bg-white pt-12 md:pt-16 pb-8 md:pb-10">
        <Container>
          <div className="max-w-3xl">
            <p className="text-lg text-ink-600 leading-relaxed">{service.intro}</p>
          </div>
        </Container>
      </Section>

      {/* What is */}
      <Section className="bg-ink-50 py-10 md:py-12">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Définition</Eyebrow>
            <h2 className="mt-4 text-2xl md:text-3xl font-display font-bold text-ink-900 tracking-tight">
              {service.whatIsTitle}
            </h2>
            <p className="mt-5 text-ink-600 leading-relaxed">{service.whatIsBody}</p>
          </div>
        </Container>
      </Section>

      {/* Services detail */}
      <Section className="bg-white py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Nos prestations</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              {service.servicesTitle}
            </h2>
            <p className="mt-4 text-ink-600 leading-relaxed">{service.servicesIntro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.serviceDetails.map((detail) => (
              <div
                key={detail.title}
                className="group rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-600/5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-display font-semibold text-ink-900 mb-2 leading-snug">
                  {detail.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">{detail.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who needs / benefits */}
      <Section className="bg-ink-50 py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Bénéfices</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              {service.whoNeedsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.whoNeeds.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white border border-ink-100 p-5"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary-600 mt-0.5" />
                <span className="text-sm text-ink-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-white py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Notre processus</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              {service.processTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step) => (
              <div key={step.num} className="relative rounded-2xl bg-ink-50 border border-ink-100 p-7">
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-ink-900 text-primary-400 font-display font-bold text-sm mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-display font-semibold text-ink-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why choose */}
      <Section className="bg-ink-50 py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Pourquoi nous choisir</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              {service.whyChooseTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.whyChoose.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl bg-white border border-ink-100 p-7">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-display font-semibold text-ink-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-ink-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="bg-white py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
                Questions fréquentes
              </h2>
            </div>
            <div className="rounded-2xl border border-ink-100 bg-white px-6 md:px-8">
              {service.faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-white pt-6 pb-12 md:pt-8 md:pb-16">
        <Container>
          <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-800 px-8 py-12 md:px-12 md:py-14 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white">
              Prêt à passer à l'action ?
            </h2>
            <p className="mt-4 text-primary-50 max-w-xl mx-auto">
              Présentez votre besoin. Nous analyserons si une intervention est pertinente
              et vous proposerons la prochaine étape adaptée.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/diagnostic" size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                Présenter mon besoin
                <ArrowRight className="h-4.5 w-4.5" />
              </Button>
              <Button to="/services" size="lg" variant="ghost" className="text-white hover:bg-white/10">
                Voir tous les services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
