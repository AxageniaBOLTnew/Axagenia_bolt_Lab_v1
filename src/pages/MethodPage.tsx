import {
  ArrowRight,
  Compass,
  Wrench,
  GraduationCap,
  CheckCircle2,
  XCircle,
  ArrowRightCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';

const offers = [
  {
    icon: Compass,
    step: 'Comprendre',
    title: 'Diagnostic initial',
    problem: 'Manque de clarté sur un processus chronophage.',
    objective: 'Comprendre le besoin et déterminer si une intervention est pertinente.',
    prestations: [
      'Questionnaire initial',
      'Analyse préliminaire',
      'Échange de qualification',
      'Première orientation',
    ],
    livrables: ['Bref récapitulatif écrit'],
    nonInclus: [
      'Audit complet',
      'Cartographie détaillée',
      'Architecture de solution',
      'Spécifications fonctionnelles ou techniques',
      "Plan d'implémentation détaillé",
    ],
    nextStep: "Proposition éventuelle d'une mission de conception et d'implémentation.",
  },
  {
    icon: Wrench,
    step: 'Mettre en œuvre',
    title: 'Conception et implémentation',
    problem: 'Processus répétitif qui demeure manuel, fragmenté ou peu fiable.',
    objective: 'Concevoir, tester et mettre en service un workflow adapté.',
    prestations: [
      'Conception du workflow cible',
      'Réalisation No-Code',
      'Connexions standards entre outils',
      "Intégration d'une fonction d'IA sur un cas encadré",
      'Scripts complémentaires limités',
      'Tests',
      'Mise en service',
      'Documentation',
      'Phase courte de stabilisation',
    ],
    livrables: [
      'Représentation simple du workflow cible',
      'Solution No-Code configurée',
      'Scénario de tests et résultats constatés',
      'Solution mise en service',
      "Documentation d'utilisation",
      "Documentation d'administration ou de maintenance",
      'Session de prise en main',
      'Liste des limites et améliorations possibles',
    ],
    nonInclus: [
      "Audit complet de l'organisation",
      "Refonte globale du système d'information",
      'Garantie de gain ou de retour sur investissement',
      'Fourniture des licences et abonnements tiers',
      'Correction illimitée des données existantes',
      'Développement logiciel complexe',
      'Maintenance illimitée après livraison',
      'Responsabilité sur les indisponibilités des services tiers',
    ],
    nextStep: 'Formation, stabilisation, puis suivi entièrement optionnel.',
  },
  {
    icon: GraduationCap,
    step: 'Faire adopter',
    title: 'Accompagnement et formation',
    problem: "Difficulté à utiliser correctement une solution ou à concrétiser des usages pratiques de l'IA et du No-Code.",
    objective: "Faciliter l'adoption et développer l'autonomie d'usage.",
    prestations: [
      'Définition des objectifs pédagogiques',
      'Formation aux solutions AXAGENIA',
      "Formation pratique à des usages encadrés de l'IA ou du No-Code",
      'Exercices et démonstrations',
      'Réponses aux questions des participants',
    ],
    livrables: [
      'Support de formation',
      'Guide de prise en main',
      'Exercices ou exemples',
      'Ressources complémentaires',
    ],
    nonInclus: [
      'Certification professionnelle ou diplôme',
      'Formation exhaustive à une plateforme',
      'Conseil juridique ou réglementaire spécialisé',
      "Formation sans rapport avec les compétences d'AXAGENIA",
      'Assistance illimitée après la session',
    ],
    nextStep: "Mise en pratique, mission d'implémentation éventuelle ou suivi optionnel. La formation peut être proposée comme mission autonome ou après une implémentation.",
  },
];

const globalExclusions = [
  'Développement logiciel complexe',
  "Refonte globale du système d'information",
  'Audit organisationnel structuré',
  'Migration de données au-delà des limites raisonnables',
  'Garantie de gain ou de retour sur investissement',
  'Fourniture des licences et abonnements tiers',
  'Maintenance illimitée après livraison',
  'Responsabilité sur les indisponibilités des services tiers',
];

export function MethodPage() {
  return (
    <>
      {/* Section 1: Introduction */}
      <Section className="bg-white pt-12 md:pt-16 pb-8 md:pb-10 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none hidden lg:block" aria-hidden="true">
          <img src="/hero-method.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow>Nos services</Eyebrow>
            <h1 className="mt-4 text-4xl md:text-5xl font-display font-bold text-ink-900 tracking-tight">
              Quelle intervention correspond à votre situation ?
            </h1>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              AXAGENIA propose trois portes d'entrée selon votre situation : comprendre
              le besoin, mettre en œuvre la solution ou faire adopter un workflow. Les
              offres sont indépendantes : vous pouvez commencer directement par celle
              qui correspond à votre besoin.
            </p>
          </div>
        </Container>
      </Section>

      {/* Section 2: Repères de choix */}
      <Section className="bg-ink-50 py-8 md:py-10">
        <Container>
          <div className="flex flex-col gap-1 mb-5">
            <Eyebrow>Repères de choix</Eyebrow>
            <p className="text-sm text-ink-600">Choisissez directement le point de départ qui vous correspond.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {["Comprendre", "Mettre en œuvre", "Faire adopter"].map((step, i) => (
              <a
                key={step}
                href={`#offer-${i}-title`}
                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-ink-100 hover:border-primary-300 hover:shadow-sm transition-all"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary-600 text-white font-display font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-base font-semibold text-ink-900">{step}</span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sections 3-5: Détail des offres */}
      {offers.map((offer, i) => (
        <Section
          key={offer.title}
          className={`py-12 md:py-16 ${i % 2 === 0 ? 'bg-white' : 'bg-ink-50'}`}
          aria-labelledby={`offer-${i}-title`}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600 text-white">
                      <offer.icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                      {offer.step}
                    </span>
                  </div>
                  <h2 id={`offer-${i}-title`} className="text-2xl md:text-3xl font-display font-bold text-ink-900">
                    {offer.title}
                  </h2>
                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-1">
                        Problème traité
                      </p>
                      <p className="text-ink-700">{offer.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-1">
                        Objectif
                      </p>
                      <p className="text-ink-700">{offer.objective}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-ink-900 uppercase tracking-wider mb-3">
                      Prestations possibles
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {offer.prestations.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <CheckCircle2 className="w-4.5 h-4.5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-ink-900 uppercase tracking-wider mb-3">
                      Livrables possibles
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {offer.livrables.map((l) => (
                        <li key={l} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <CheckCircle2 className="w-4.5 h-4.5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-ink-900 uppercase tracking-wider mb-3">
                      Non inclus
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {offer.nonInclus.map((n) => (
                        <li key={n} className="flex items-start gap-2.5 text-sm text-ink-500">
                          <XCircle className="w-4.5 h-4.5 text-ink-300 flex-shrink-0 mt-0.5" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-primary-50 border border-primary-100">
                    <div className="flex items-start gap-3">
                      <ArrowRightCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary-700 mb-1">
                          Étape suivante
                        </p>
                        <p className="text-sm text-ink-700">{offer.nextStep}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* Section 6: Aide au choix */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Aide au choix</Eyebrow>
            <h2 className="mt-4 text-3xl font-display font-bold text-ink-900">
              Quelle étape vous correspond ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-xl border border-ink-100">
              <p className="text-sm text-ink-500 mb-2">Si vous…</p>
              <p className="text-ink-800 font-medium mb-3">avez un processus chronophage mais ne savez pas par où commencer</p>
              <p className="text-sm text-primary-700 font-medium">→ Diagnostic initial</p>
            </div>
            <div className="p-6 rounded-xl border border-ink-100">
              <p className="text-sm text-ink-500 mb-2">Si vous…</p>
              <p className="text-ink-800 font-medium mb-3">savez ce qui doit être automatisé et voulez une solution mise en service</p>
              <p className="text-sm text-primary-700 font-medium">→ Conception et implémentation</p>
            </div>
            <div className="p-6 rounded-xl border border-ink-100">
              <p className="text-sm text-ink-500 mb-2">Si vous…</p>
              <p className="text-ink-800 font-medium mb-3">avez une solution et voulez que vos équipes l'utilisent en autonomie</p>
              <p className="text-sm text-primary-700 font-medium">→ Accompagnement et formation</p>
            </div>
          </div>
          <div className="mt-8">
            <Button to="/diagnostic" size="lg">
              Présenter mon besoin
              <ArrowRight className="w-4.5 h-4.5" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Section 7: Limites transversales */}
      <Section className="bg-ink-50">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>Limites transversales</Eyebrow>
            <h2 className="mt-4 text-2xl md:text-3xl font-display font-bold text-ink-900">
              Ce que nous ne proposons pas
            </h2>
            <p className="mt-4 text-ink-600">
              Par souci de transparence, voici les prestations qui ne font pas partie
              de nos interventions, quel que soit le cadre.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {globalExclusions.map((ex) => (
                <li key={ex} className="flex items-start gap-2.5 text-sm text-ink-600">
                  <XCircle className="w-4.5 h-4.5 text-ink-300 flex-shrink-0 mt-0.5" />
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Section 8: CTA final */}
      <Section className="bg-white">
        <Container>
          <div className="rounded-2xl bg-ink-950 px-8 py-12 md:px-12 md:py-14 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              Une situation qui correspond à l'une de ces offres ?
            </h2>
            <p className="mt-4 text-ink-300 max-w-xl mx-auto">
              Présentez votre besoin. Nous analyserons si une intervention est pertinente
              et vous proposerons la prochaine étape adaptée.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/diagnostic" size="lg">
                Présenter mon besoin
                <ArrowRight className="w-4.5 h-4.5" />
              </Button>
              <Button to="/services" size="lg" variant="outline" className="border-ink-700 text-white hover:border-primary-500 hover:text-primary-400 hover:bg-white/5">
                Découvrir les Services
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
