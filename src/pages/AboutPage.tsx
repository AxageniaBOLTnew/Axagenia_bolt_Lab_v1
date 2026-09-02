import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  HandHeart,
  Wrench,
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  ShoppingCart,
  Megaphone,
  FileText,
  MessagesSquare,
  Receipt,
  ScanText,
  Bot,
  Mic,
  Eye,
  Gauge,
  Lightbulb,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';

const skills = [
  'Conception de workflows automatisés',
  'Réalisation de solutions avec des plateformes No-Code',
  'Connexions reposant sur les connecteurs standards des plateformes',
  "Intégration de fonctions d'IA sur des cas encadrés",
  'Tests et mise en service',
  'Documentation',
  'Formation structurée',
  'Suivi et amélioration après mise en service',
  "Scripts ou composants complémentaires limités lorsque le workflow l'exige",
];

const whatWeDo = [
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Synchronisation des commandes, gestion des stocks et traitement automatisé des expéditions.',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Automatisation des campagnes, suivi des leads et reporting des performances.',
  },
  {
    icon: Users,
    title: 'Gestion des leads',
    description: 'Capture, qualification et transfert automatique des prospects vers vos équipes.',
  },
  {
    icon: FileText,
    title: 'Traitement de documents',
    description: 'Extraction et structuration des données issues de vos documents et formulaires.',
  },
  {
    icon: MessagesSquare,
    title: 'Canaux de communication',
    description: 'Synchronisation des échanges entre e-mail, messageries et outils de support.',
  },
  {
    icon: Receipt,
    title: 'Processus financiers',
    description: 'Automatisation de la facturation, du rapprochement et du suivi des paiements.',
  },
];

const aiSolutions = [
  {
    icon: Bot,
    title: 'Chatbots IA',
    description: 'Des assistants conversationnels qui répondent aux demandes de vos clients 24/7, traitent les questions courantes et transmettent les cas complexes au bon interlocuteur.',
  },
  {
    icon: Mic,
    title: 'Assistants vocaux IA',
    description: 'Des agents vocaux capables de mener des conversations naturelles pour orienter, informer et accompagner vos clients sans intervention manuelle.',
  },
  {
    icon: Eye,
    title: 'Vision par ordinateur',
    description: 'Extraction automatique de données depuis des documents et des images, contrôle qualité et classification visuelle grâce aux algorithmes de vision IA.',
  },
];

const whyChooseUs = [
  {
    icon: Gauge,
    title: 'Efficacité',
    description: 'Automatisez les tâches répétitives et libérez du temps pour les activités à forte valeur.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Restez à la pointe avec des technologies éprouvées et adaptées à votre contexte.',
  },
  {
    icon: Target,
    title: 'Proactivité',
    description: "Nous anticipons les besoins et adressons les problèmes avant qu'ils ne deviennent bloquants.",
  },
  {
    icon: Users,
    title: 'Équipe experte',
    description: 'Une équipe spécialisée en automatisation, No-Code et IA au service de vos projets.',
  },
];

const limits = [
  'Compréhension et cadrage de besoins simples, sans audit organisationnel structuré',
  'Migration de données limitée',
  'Pas de développement logiciel complexe',
  "Pas de refonte globale du système d'information",
];

const transparency = [
  {
    title: 'Aucun résultat client publiable',
    description: "Nous n'avons pas encore de résultats clients publiables. Nous ne publions aucune preuve commerciale non vérifiée.",
  },
  {
    title: 'Projets pédagogiques en cours de validation',
    description: 'Des projets pédagogiques et démonstrations existent, mais ne sont pas encore validés pour publication. Ils seront ajoutés individuellement après validation.',
  },
  {
    title: 'Documentation en construction',
    description: "La documentation et les supports de formation sont en cours de construction. Ils seront publiés lorsqu'ils seront prêts.",
  },
];

export function AboutPage() {
  return (
    <>
      {/* Section 1: Raison d'être */}
      <Section className="bg-white pt-12 md:pt-16 pb-16 md:pb-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none hidden lg:block" aria-hidden="true">
          <img src="/hero-about.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow>À propos d'AXAGENIA</Eyebrow>
            <h1 className="mt-4 text-4xl md:text-5xl font-display font-bold text-ink-900 tracking-tight">
              Qui est AXAGENIA et pourquoi lui faire confiance ?
            </h1>
            <p className="mt-6 text-lg text-ink-600 leading-relaxed">
              AXAGENIA est une agence française spécialisée en intelligence artificielle,
              automatisation et No-Code. Nous existons pour aider les PME de services B2B
              à simplifier et automatiser leurs processus chronophages, afin de libérer
              du temps et de fiabiliser le travail.
            </p>
            <p className="mt-4 text-lg text-ink-600 leading-relaxed">
              Nous croyons que l'automatisation doit servir les équipes, pas l'inverse.
              C'est pourquoi nous partons toujours du besoin réel avant de choisir la
              technologie — et nous n'imposons pas l'IA lorsqu'une solution plus simple
              suffit.
            </p>
          </div>
        </Container>
      </Section>

      {/* Section 2: Positionnement et principes */}
      <Section className="bg-ink-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-ink-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600 text-white mb-5">
                <Target className="w-6 h-6" strokeWidth={2} />
              </div>
              <h2 className="text-lg font-semibold text-ink-900 mb-2">Partenaire d'amélioration des processus</h2>
              <p className="text-ink-600 leading-relaxed">
                Nous ne sommes pas un simple revendeur d'outils. Nous concevons, mettons
                en œuvre et documentons des workflows qui automatisent les tâches
                répétitives, adaptés à vos usages.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-white border border-ink-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600 text-white mb-5">
                <HandHeart className="w-6 h-6" strokeWidth={2} />
              </div>
              <h2 className="text-lg font-semibold text-ink-900 mb-2">L'automatisation au service de vos équipes</h2>
              <p className="text-ink-600 leading-relaxed">
                Mettre l'automatisation au service de vos équipes, sans imposer de
                technologie inutile. La technologie est un moyen, pas une fin.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 3: What We Do — Domaines d'intervention */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Nos domaines d'intervention</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900">
              Ce que nous faisons
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Nous intervenons sur les processus métier les plus chronophages.
              Voici les principaux domaines où nous automatisons vos opérations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whatWeDo.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-ink-50 border border-ink-100 hover:border-primary-200 hover:shadow-sm transition-all duration-200">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600 text-white mb-4">
                  <item.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 4: AI-Powered Solutions */}
      <Section className="bg-ink-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <Container className="relative">
          <div className="max-w-2xl mb-10">
            <Eyebrow className="text-primary-400">Solutions propulsées par l'IA</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-white">
              L'IA au service de vos opérations
            </h2>
            <p className="mt-4 text-lg text-ink-300 leading-relaxed">
              La technologie évolue rapidement et l'IA ouvre de nouvelles possibilités.
              Nous l'intégrons lorsqu'elle apporte une utilité réelle, sans l'imposer
              lorsqu'une solution plus simple suffit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {aiSolutions.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary-400/40 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/20 text-primary-300 mb-4">
                  <item.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-ink-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 5: Compétences revendiquées */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Compétences réellement revendiquées</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900">
              Ce que nous savons faire
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Nous revendiquons uniquement les compétences que nous maîtrisons.
              Voici la liste complète.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {skills.map((skill) => (
              <div key={skill} className="flex items-start gap-2.5 p-4 rounded-xl bg-ink-50 border border-ink-100">
                <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-ink-700">{skill}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 6: Why Choose Us */}
      <Section className="bg-ink-50">
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow>Pourquoi nous choisir</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900">
              Ce qui nous différencie
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Nous privilégions le pragmatisme et la transparence à la promesse.
              Voici pourquoi les entreprises nous font confiance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-ink-100 hover:border-primary-200 hover:shadow-sm transition-all duration-200">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-600 mb-4">
                  <item.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 7: Transparence sur la phase de lancement */}
      <Section className="bg-ink-50">
        <Container>
          <div className="max-w-2xl mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-accent-50 text-accent-600">
                <Sparkles className="w-5.5 h-5.5" strokeWidth={2} />
              </div>
              <Eyebrow className="text-accent-600">Phase de lancement</Eyebrow>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink-900">
              Transparente sur notre phase de lancement
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              AXAGENIA est une nouvelle agence. Nous préférons être honnêtes sur ce
              que nous avons et ce que nous n'avons pas encore.
            </p>
          </div>
          <div className="space-y-4">
            {transparency.map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-white border border-ink-100">
                <h3 className="text-base font-semibold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 8: Limites et engagements de transparence */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-error-50 text-error-600">
                <ShieldAlert className="w-5.5 h-5.5" strokeWidth={2} />
              </div>
              <Eyebrow className="text-error-600">Limites et engagements</Eyebrow>
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-ink-900">
              Ce que nous ne faisons pas
            </h2>
            <p className="mt-4 text-ink-600">
              Par souci de transparence, voici les limites de nos interventions et
              nos engagements envers vous.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-ink-900 uppercase tracking-wider mb-3">
                  Limites
                </h3>
                <ul className="space-y-2.5">
                  {limits.map((limit) => (
                    <li key={limit} className="flex items-start gap-2.5 text-sm text-ink-600">
                      <XCircle className="w-4.5 h-4.5 text-ink-300 flex-shrink-0 mt-0.5" />
                      <span>{limit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink-900 uppercase tracking-wider mb-3">
                  Engagements
                </h3>
                <ul className="space-y-2.5">
                  {[
                    'Ne jamais publier de preuve commerciale non vérifiée',
                    'Indiquer clairement les projets pédagogiques comme tels',
                    'Ne pas promettre de gains garantis',
                    "Ne pas imposer l'IA lorsqu'une solution plus simple suffit",
                    "Documenter et former pour l'autonomie d'usage",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-600">
                      <CheckCircle2 className="w-4.5 h-4.5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 9: CTA final */}
      <Section className="bg-ink-50">
        <Container>
          <div className="rounded-2xl bg-ink-950 px-8 py-12 md:px-12 md:py-14 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              Vous voulez vérifier si nous sommes le bon partenaire ?
            </h2>
            <p className="mt-4 text-ink-300 max-w-xl mx-auto">
              Présentez votre besoin. Nous serons transparents sur notre capacité à
              vous aider — ou non.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/diagnostic" size="lg">
                Présenter mon besoin
                <ArrowRight className="w-4.5 h-4.5" />
              </Button>
              <Button to="/methode" size="lg" variant="outline" className="border-ink-700 text-white hover:border-primary-500 hover:text-primary-400 hover:bg-white/5">
                Découvrir la Méthode
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
