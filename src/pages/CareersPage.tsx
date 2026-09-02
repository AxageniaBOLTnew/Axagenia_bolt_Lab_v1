import { ArrowRight, Send, FileSearch, Users, Trophy, Rocket, Lightbulb, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';

const reasons = [
  {
    icon: Rocket,
    title: 'Exposition à un nouvel univers',
    description:
      "Plongez dans le monde de l'automatisation d'entreprise. Une opportunité de travailler sur une technologie durable et tournée vers l'avenir.",
  },
  {
    icon: Trophy,
    title: 'Véritable opportunité de croissance',
    description:
      "Faire partie d'un leader de l'automatisation vous offre la possibilité d'évoluer plus rapidement que dans n'importe quel autre secteur ou entreprise.",
  },
  {
    icon: Users,
    title: 'Rémunération et incitations',
    description:
      "Nous croyons en la croissance mutuelle. Nous offrons une rémunération compétitive et des incitations attractives pour récompenser votre implication.",
  },
];

const processSteps = [
  {
    icon: Send,
    title: 'Candidature',
    description: "Remplissez un formulaire rapide pour que nous apprenions à mieux vous connaître.",
  },
  {
    icon: FileSearch,
    title: 'Présélection',
    description: "Notre équipe RH examine votre candidature pour évaluer votre adéquation au poste.",
  },
  {
    icon: Users,
    title: 'Premier tour',
    description: "Lors de cet entretien, vous démontrez vos compétences et votre compétence liées au poste.",
  },
  {
    icon: Trophy,
    title: 'Finale',
    description: "C'est ici que nous apprenons à vous connaître au-delà de votre CV et de vos attentes.",
  },
];

const profiles = [
  {
    icon: Rocket,
    title: 'Celui qui ne se contente pas du minimum',
    description:
      "Il y a bien plus que vous pouvez faire ou être ! Pourquoi se contenter de moins, explorez de nouvelles dimensions avec nous.",
  },
  {
    icon: Lightbulb,
    title: 'Un apprenant avide',
    description:
      "L'idée d'apprendre une nouvelle compétence vous enthousiasme ? Si oui, vous allez dans la bonne direction.",
  },
  {
    icon: Cpu,
    title: 'Un passionné de tech',
    description:
      "Non, pas seulement technophile, un véritable passionné. Ce n'est pas grave si vous n'êtes pas encore expert, mais la technologie occupe-t-elle votre esprit en permanence ?",
  },
];

export function CareersPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden bg-ink-950 text-white pt-12 md:pt-16 pb-12 md:pb-16">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] glow-primary -translate-y-1/4 translate-x-1/4" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none hidden lg:block" aria-hidden="true">
          <img src="/hero-careers.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow className="text-primary-300">Carrières</Eyebrow>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
              Vous cherchez le prochain grand saut dans votre carrière ?
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-300 leading-relaxed">
              Rejoignez notre équipe et aidez les entreprises à croître rapidement
              grâce à l'automatisation et l'intelligence artificielle.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button to="/diagnostic" size="lg" className="bg-primary-500 text-ink-950 hover:bg-primary-400">
                Postuler maintenant
                <ArrowRight className="h-4.5 w-4.5" />
              </Button>
              <Button to="/a-propos" size="lg" variant="ghost" className="text-white hover:bg-white/10">
                À propos d'AXAGENIA
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why join */}
      <Section className="bg-white py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Nous rejoindre</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              Pourquoi rejoindre AXAGENIA ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-600/5 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-5 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                  <reason.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-display font-semibold text-ink-900 leading-snug mb-3">
                  {reason.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed flex-1">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Hiring process */}
      <Section className="bg-ink-50 py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Processus de recrutement</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              Notre processus de recrutement
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative rounded-2xl bg-white border border-ink-100 p-7">
                <span className="absolute top-5 right-5 text-5xl font-display font-bold text-ink-100 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-5">
                  <step.icon className="w-6 h-6" strokeWidth={2} />
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

      {/* What we're looking for */}
      <Section className="bg-white py-12 md:py-16">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Profil recherché</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              Ce que nous recherchons
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <div
                key={profile.title}
                className="group flex flex-col rounded-2xl border border-ink-100 bg-ink-50 p-7 transition-all duration-300 hover:border-primary-200 hover:bg-white hover:shadow-lg hover:shadow-primary-600/5"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-ink-900 text-primary-400 mb-5 transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                  <profile.icon className="w-7 h-7" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-display font-semibold text-ink-900 leading-snug mb-3">
                  {profile.title}
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed flex-1">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-ink-50 pt-6 pb-12 md:pt-8 md:pb-16">
        <Container>
          <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-800 px-8 py-12 md:px-12 md:py-14 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white">
              Prêt à démarrer votre candidature ?
            </h2>
            <p className="mt-4 text-primary-50 max-w-xl mx-auto">
              Présentez-vous et dites-nous pourquoi vous voulez nous rejoindre.
              Nous reviendrons vers vous rapidement.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/diagnostic" size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                Postuler maintenant
                <ArrowRight className="h-4.5 w-4.5" />
              </Button>
              <Button to="/" size="lg" variant="ghost" className="text-white hover:bg-white/10">
                Retour à l'accueil
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
