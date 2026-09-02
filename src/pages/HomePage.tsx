import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowRight,
  Clock,
  FileSpreadsheet,
  Mail,
  Copy,
  AlertTriangle,
  Eye,
  Workflow,
  Lightbulb,
  CheckCircle2,
  BookOpen,
  ShieldCheck,
  Wrench,
  GraduationCap,
  Compass,
  Layers,
  Zap,
  ChevronLeft,
  ChevronRight,
  Bot,
  Mic,
  ScanText,
  Globe,
  Cpu,
  Network,
  TrendingUp,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container, Eyebrow } from '@/components/ui/Section';

const symptoms = [
  {
    icon: Copy,
    title: 'Ressaisies',
    description: 'Les mêmes informations sont saisies plusieurs fois dans des outils différents.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Tableurs et e-mails',
    description: "Vos processus reposent sur des fichiers et des échanges manuels qui s'accumulent.",
  },
  {
    icon: Clock,
    title: 'Lenteurs',
    description: "Les délais de traitement s'allongent au rythme de la croissance de l'activité.",
  },
  {
    icon: AlertTriangle,
    title: 'Erreurs et oublis',
    description: 'Les manipulations répétitives génèrent des erreurs et des oublis trop fréquents.',
  },
];

const desiredResults = [
  {
    icon: Clock,
    title: 'Temps libéré',
    description: 'Vos équipes se concentrent sur les activités à plus forte valeur.',
  },
  {
    icon: Workflow,
    title: 'Processus fluidifiés',
    description: 'Les informations circulent sans intervention manuelle répétée.',
  },
  {
    icon: CheckCircle2,
    title: 'Travail fiabilisé',
    description: 'Les erreurs et oublis diminuent grâce à des workflows testés.',
  },
];

const offerPreview = [
  {
    icon: Compass,
    step: 'Comprendre',
    title: 'Diagnostic initial',
    description: 'Identifier un processus chronophage et déterminer si une automatisation est pertinente.',
  },
  {
    icon: Wrench,
    step: 'Mettre en œuvre',
    title: 'Conception et implémentation',
    description: 'Concevoir, tester et mettre en service un workflow adapté à votre fonctionnement.',
  },
  {
    icon: GraduationCap,
    step: 'Faire adopter',
    title: 'Accompagnement et formation',
    description: "Faciliter l'adoption et développer l'autonomie d'usage de vos équipes.",
  },
];

const solutionSlides = [
  {
    label: 'Automatisation IA',
    title: 'Automatisation des processus métier par IA',
    description:
      "Arrêtez les tâches répétitives. Nous connectons vos outils avec Make, n8n et Zapier pour que vos workflows s'exécutent automatiquement, et que vos équipes gagnent du temps chaque jour.",
    cards: [
      { title: 'Make', description: 'Workflows visuels avancés qui automatisent vos processus entre différents outils.' },
      { title: 'Zapier', description: 'Connexions simples entre applications pour automatiser rapidement.' },
      { title: 'n8n', description: 'Automatisation open-source avec personnalisation et contrôle des données.' },
    ],
    image: '/solution-automation-ia.webp',
    href: '/services/automatisation-processus-metier',
  },
  {
    label: 'Voix et chat IA',
    title: 'Solutions vocales et chatbots IA',
    description:
      "Déployez des assistants vocaux et conversationnels intelligents qui répondent à vos clients 24/7, traitent les demandes automatiquement et passent le relais au bon moment.",
    cards: [
      { title: 'Assistant vocal', description: 'Des conversations naturelles pour guider et accompagner vos clients.' },
      { title: 'Chatbot IA', description: 'Des réponses pertinentes et contextuelles sur vos canaux préférés.' },
      { title: 'Intégration CRM', description: 'Des échanges connectés à vos données et à vos workflows existants.' },
    ],
    image: '/solution-voice-chat-ia.webp',
    href: '/services/assistants-vocaux-chatbots-ia',
  },
  {
    label: 'Workflows n8n',
    title: 'Automatisation de workflows n8n',
    description:
      "Construisez des automatisations puissantes et auto-hébergées avec n8n. Connectez vos applications, traitez vos données et gardez le contrôle de votre infrastructure.",
    cards: [
      { title: 'n8n', description: 'Un moteur open-source avec plus de 400 intégrations et une grande flexibilité.' },
      { title: 'Webhooks', description: 'Des déclencheurs en temps réel qui connectent instantanément vos applications.' },
      { title: 'API REST', description: 'Des opérations API directes avec authentification et mapping personnalisés.' },
    ],
    image: '/solution-n8n-workflows.webp',
    href: '/services/automatisation-n8n',
  },
  {
    label: 'Monday.com',
    title: 'Automatisation de projets Monday.com',
    description:
      "Transformez votre espace Monday.com en véritable centre d'automatisation. Assignez les tâches, déclenchez les notifications et synchronisez vos données automatiquement.",
    cards: [
      { title: 'Monday.com', description: 'Une plateforme de travail flexible pour des dashboards et workflows sur mesure.' },
      { title: 'Slack', description: 'Des notifications et workflows déclenchés en temps réel.' },
      { title: 'Google Workspace', description: 'Une intégration fluide avec Sheets, Drive et Calendar.' },
    ],
    image: '/solution-monday-automation.webp',
    href: '/services/implementation-monday-automation',
  },
];

const automationFrontiers = [
  {
    icon: Bot,
    title: 'Agents IA autonomes',
    description: 'Des agents capables de raisonner, décider et agir sur plusieurs étapes sans intervention humaine.',
  },
  {
    icon: Mic,
    title: 'Conversation vocale',
    description: 'Des assistants vocaux qui mènent des dialogues naturels et traitent les demandes en temps réel.',
  },
  {
    icon: ScanText,
    title: 'Compréhension de documents',
    description: 'Extraction et structuration automatiques de données depuis vos documents et formulaires.',
  },
  {
    icon: Globe,
    title: 'Intégrations multi-plateformes',
    description: "Connexion de dizaines d'outils via API, webhooks et connecteurs No-Code.",
  },
  {
    icon: Cpu,
    title: 'Traitement intelligent',
    description: "Tri, classification et enrichissement de données grâce aux modèles d'IA.",
  },
  {
    icon: Network,
    title: 'Écosystèmes automatisés',
    description: "Des workflows interconnectés qui orchestrent l'ensemble de vos opérations.",
  },
];

type ResultMetric = {
  value: string;
  label: string;
};

type RealResult = {
  categoryType: 'Secteur' | 'Fonction';
  category: string;
  challenge: string;
  solution: string;
  metrics: ResultMetric[];
  improvements: string[];
};

const realResults: RealResult[] = [
  {
    categoryType: 'Secteur',
    category: 'E-commerce',
    challenge: 'Réduire les délais de commande pour une boutique Shopify à fort volume.',
    solution: 'Shopify + Google Sheets + Make.com + Brevo pour automatiser les priorités, la préparation, les retours et les rappels.',
    metrics: [
      { value: '45%', label: 'traitement plus rapide' },
      { value: '12h+', label: 'économisées par semaine' },
      { value: '100%', label: 'rappels envoyés à temps' },
      { value: '100%', label: 'visibilité du suivi' },
    ],
    improvements: ['Priorisation des dates de livraison', 'Synchronisation automatique de la préparation', 'Automatisation des rappels de retour'],
  },
  {
    categoryType: 'Secteur',
    category: 'E-commerce',
    challenge: "La gestion des commandes multi-boutiques manquait d'un système centralisé et créait des retards fréquents.",
    solution: 'Etsy + Shopify + Google Sheets + Make.com réunis dans un système unique de gestion automatisée des commandes.',
    metrics: [
      { value: '72%', label: "d'erreurs de commande en moins" },
      { value: '15h+', label: 'économisées par semaine' },
      { value: '3×', label: 'traitement plus rapide' },
      { value: '100%', label: 'visibilité centralisée' },
    ],
    improvements: ['Gestion unifiée des commandes', 'Coordination automatique des fournisseurs', "Suivi en temps réel et alertes d'erreur"],
  },
  {
    categoryType: 'Fonction',
    category: 'Ventes',
    challenge: 'La gestion manuelle des leads, des projets et des propositions ralentissait les opérations commerciales.',
    solution: 'Capture automatique des leads, déduplication et routage entre le CRM, la gestion de projet et les outils financiers.',
    metrics: [
      { value: '15–30', label: 'min économisées par lead' },
      { value: 'Rapides', label: 'lancements de projet' },
      { value: 'Réduits', label: 'délais de proposition' },
      { value: 'Fluides', label: 'échanges entre outils' },
    ],
    improvements: ['Réception et normalisation automatiques des leads', 'Création de projets selon leur statut', 'Transmission automatisée des propositions'],
  },
  {
    categoryType: 'Secteur',
    category: 'E-commerce',
    challenge: 'Le suivi manuel des commandes et des stocks sur plusieurs plateformes provoquait des retards.',
    solution: 'Traitement automatisé des commandes et synchronisation des stocks grâce à Google Sheets et des intégrations API.',
    metrics: [
      { value: '50%', label: 'de saisie manuelle en moins' },
      { value: '70%', label: 'traitement plus rapide' },
      { value: 'Précise', label: 'exactitude des commandes' },
      { value: 'Temps réel', label: 'visibilité des stocks' },
    ],
    improvements: ['Centralisation du suivi des commandes', 'Mise à jour automatique de la préparation', 'Synchronisation des stocks entre plateformes'],
  },
  {
    categoryType: 'Fonction',
    category: 'Ressources humaines',
    challenge: "Les validations manuelles et la coordination entre services créaient un goulot d'étranglement opérationnel.",
    solution: "Workflows automatisés pour router les demandes d'achat, les tâches d'intégration et les validations selon leur statut.",
    metrics: [
      { value: 'Jours → min', label: 'pour les validations' },
      { value: '10 min', label: 'pour une intégration RH' },
      { value: 'Centaines', label: "d'heures économisées par mois" },
      { value: 'Zéro', label: 'validation oubliée' },
    ],
    improvements: ['Routage automatique des validations', "Automatisation de l'intégration RH", 'Synchronisation des données entre services'],
  },
];

const faqItems = [
  {
    question: "Qu'est-ce que l'automatisation des processus métier ?",
    answer: "L'automatisation des processus métier consiste à utiliser la technologie pour exécuter automatiquement des tâches répétitives et chronophages, sans intervention humaine. Au lieu de saisir manuellement des données, d'envoyer des e-mails ou de transférer des informations entre plusieurs outils, les workflows automatisés effectuent ces actions instantanément et avec précision.",
  },
  {
    question: "Quels processus peut-on automatiser ?",
    answer: "Tout processus basé sur des règles peut être automatisé : mises à jour de CRM, gestion des leads, facturation, reporting, intégration de nouveaux collaborateurs, communication client, synchronisation des stocks, traitement des commandes et bien plus encore.",
  },
  {
    question: 'Quelle plateforme d\u2019automatisation choisir : Make, n8n ou Zapier ?',
    answer: "Chaque outil a ses forces. Zapier est idéal pour des workflows simples, Make pour des automatisations visuelles complexes, et n8n pour des solutions personnalisées et auto-hébergées. Nous vous aidons à choisir la meilleure option selon vos besoins et votre infrastructure.",
  },
  {
    question: 'Combien de temps faut-il pour mettre en place une automatisation ?',
    answer: "Les délais varient selon la complexité. Des automatisations simples peuvent être déployées en quelques jours, tandis que des solutions à l'échelle de l'entreprise prennent généralement 4 à 8 semaines, tests et formation inclus.",
  },
  {
    question: 'Combien coûte un projet d\u2019automatisation ?',
    answer: "Le coût dépend de la complexité du projet. Nos interventions démarrent à 90 € et s'adaptent à la taille et aux exigences de votre projet. Le premier diagnostic est gratuit et permet d'évaluer le périmètre avant tout engagement.",
  },
  {
    question: 'L\u2019IA est-elle toujours nécessaire ?',
    answer: "Non. Nous partons de votre besoin concret, pas d'une technologie imposée. L'IA est intégrée lorsqu'elle apporte une valeur réelle, mais une solution plus simple suffit souvent. La technologie est un moyen, pas une fin.",
  },
  {
    question: 'Proposez-vous un support après la livraison ?',
    answer: "Oui. Chaque solution livrée est accompagnée d'une documentation d'utilisation et d'administration. La prise en main et la formation visent l'autonomie de vos équipes, et nous restons disponibles pour la stabilisation et l'optimisation continue.",
  },
];

const reassuranceItems = [
  {
    icon: Lightbulb,
    title: 'Besoin avant technologie',
    description: "Nous partons de votre processus réel, puis nous choisissons l'outil adapté — pas l'inverse.",
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: "Chaque solution livrée est accompagnée d'une documentation d'utilisation et d'administration.",
  },
  {
    icon: ShieldCheck,
    title: "Autonomie d'usage",
    description: "La prise en main et la formation visent l'autonomie de vos équipes au quotidien.",
  },
  {
    icon: Eye,
    title: 'Transparence sur les limites',
    description: "Nous indiquons clairement ce qui est inclus, ce qui ne l'est pas, et ce qui reste optionnel.",
  },
];

export function HomePage() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [activeResult, setActiveResult] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const solution = solutionSlides[activeSolution];
  const result = realResults[activeResult];

  const changeSolution = (direction: number) => {
    setActiveSolution((current) => (current + direction + solutionSlides.length) % solutionSlides.length);
  };

  const changeResult = (direction: number) => {
    setActiveResult((current) => (current + direction + realResults.length) % realResults.length);
  };

  return (
    <>
      {/* Section 1: Hero */}
      <Section className="relative overflow-hidden bg-white pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="absolute inset-0 grid-pattern opacity-60" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] glow-primary -translate-y-1/4 translate-x-1/4" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] glow-accent translate-y-1/4 -translate-x-1/4" aria-hidden="true" />
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none hidden lg:block" aria-hidden="true">
          <img src="/hero-home.webp" alt="" className="h-full w-full object-cover" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <Eyebrow className="animate-fade-in-down">
              <Zap className="w-3.5 h-3.5" />
              Automatisation sans détour
            </Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-display font-bold text-ink-900 tracking-tight animate-fade-in-up animate-delay-100">
              Automatisez ce qui ralentit vos équipes
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl animate-fade-in-up animate-delay-200">
              AXAGENIA conçoit et met en œuvre des workflows No-Code, avec de l'IA
              lorsqu'elle apporte une utilité réelle, pour simplifier les processus
              répétitifs de votre entreprise.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in-up animate-delay-300">
              <Button to="/diagnostic" size="lg">
                Présenter mon besoin
                <ArrowRight className="w-4.5 h-4.5" />
              </Button>
              <Button to="/services" size="lg" variant="outline">
                Découvrir nos services
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 2: Solutions */}
      <Section className="bg-ink-50 py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              Des solutions révolutionnaires pour les entreprises de demain
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-ink-500">
              Nous construisons des écosystèmes automatisés avec Make, n8n et l'IA,
              pour associer l'ingéniosité humaine à des opérations plus fluides.
            </p>
          </div>

          <div className="mx-auto mt-7 flex w-fit max-w-full overflow-x-auto rounded-lg border border-ink-100 bg-white p-1 shadow-sm scrollbar-hide" role="tablist" aria-label="Solutions d'automatisation">
            {solutionSlides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                role="tab"
                aria-selected={activeSolution === index}
                onClick={() => setActiveSolution(index)}
                className={`whitespace-nowrap rounded-md px-3 py-2 text-xs font-medium transition-all duration-200 md:px-4 ${
                  activeSolution === index
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-sm'
                    : 'text-ink-600 hover:bg-ink-50 hover:text-ink-900'
                }`}
              >
                {slide.label}
              </button>
            ))}
          </div>

          <div className="mt-7 grid items-center gap-8 rounded-2xl border border-white bg-white p-5 shadow-sm md:p-7 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
            <div className="min-w-0">
              <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight text-ink-900">
                {solution.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-600">
                {solution.description}
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-2">
                {solution.cards.map((card) => (
                  <div key={card.title} className="overflow-hidden rounded-xl border border-primary-100 bg-white">
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-3 py-2 text-sm font-semibold text-white">
                      {card.title}
                    </div>
                    <p className="p-3 text-xs leading-relaxed text-ink-600">{card.description}</p>
                  </div>
                ))}
              </div>
              <Button to={solution.href} variant="outline" size="md" className="mt-6 rounded-full">
                Explorer la solution
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="overflow-hidden rounded-xl bg-ink-50 shadow-lg shadow-ink-900/10">
              <img
                key={solution.image}
                src={solution.image}
                alt={solution.title}
                className="aspect-[4/3] w-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => changeSolution(-1)}
              aria-label="Solution précédente"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition-colors hover:border-primary-400 hover:text-primary-700"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-1.5" aria-label={`Solution ${activeSolution + 1} sur ${solutionSlides.length}`}>
              {solutionSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  aria-label={`Afficher ${slide.label}`}
                  aria-current={activeSolution === index ? 'true' : undefined}
                  onClick={() => setActiveSolution(index)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    activeSolution === index ? 'w-7 bg-ink-900' : 'w-5 bg-ink-200 hover:bg-ink-400'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => changeSolution(1)}
              aria-label="Solution suivante"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-600 transition-colors hover:border-primary-400 hover:text-primary-700"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </Container>
      </Section>

      {/* Section 2.5: Synergy Platforms */}
      <Section className="bg-[#111318] p-0 overflow-hidden">
        <img
          src="/image copy 6.png"
          alt="Make, n8n, Zapier et Monday.com"
          className="mx-auto block h-auto w-full max-w-[1063px]"
        />
      </Section>

      {/* Section 2.5: Automation Frontiers */}
      <Section className="bg-ink-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 w-[700px] h-[700px] glow-primary -translate-x-1/2 -translate-y-1/2 opacity-40" aria-hidden="true" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Eyebrow className="text-primary-400">
              <Zap className="w-3.5 h-3.5" />
              Automation Frontiers
            </Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
              Les frontières de l'automatisation
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-ink-300">
              L'automatisation ne se limite plus à des tâches répétitives. Nous explorons
              de nouveaux territoires où l'IA et le No-Code transforment durablement
              la manière de travailler.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {automationFrontiers.map((frontier) => (
              <div
                key={frontier.title}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary-400/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/20 text-primary-300 mb-5 group-hover:bg-primary-500/30 group-hover:text-primary-200 transition-colors">
                  <frontier.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{frontier.title}</h3>
                <p className="text-sm text-ink-300 leading-relaxed">{frontier.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 2.75: Real Results */}
      <Section className="bg-ink-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden="true" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] glow-primary opacity-30 -translate-y-1/3 -translate-x-1/4" aria-hidden="true" />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
            {/* Left: Title */}
            <div>
              <Eyebrow className="text-primary-400">
                <TrendingUp className="w-3.5 h-3.5" />
                Résultats mesurés
              </Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-[1.1]">
                Résultats concrets de transformations globales
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-300 max-w-md">
                Des chiffres tirés de projets réels, pas de promesses. Chaque
                transformation est mesurée sur le terrain.
              </p>
              <Button to="/etudes-de-cas" variant="primary" size="lg" className="mt-8 rounded-full">
                Voir toutes les études de cas
                <ArrowRight className="w-4.5 h-4.5" />
              </Button>
            </div>

            {/* Right: Carousel card */}
            <div>
              <div
                key={activeResult}
                className="rounded-2xl bg-white p-7 md:p-8 shadow-2xl shadow-black/40 animate-fade-in-up"
              >
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                    {result.categoryType}
                  </span>
                  <span className="text-base font-semibold text-ink-900">
                    {result.category}
                  </span>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-600 mb-1.5">
                      Défi
                    </p>
                    <p className="text-sm text-ink-700 leading-relaxed">
                      {result.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-600 mb-1.5">
                      Solution
                    </p>
                    <p className="text-sm text-ink-700 leading-relaxed">
                      {result.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {result.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl bg-ink-50 p-4 border border-ink-100"
                    >
                      <p className="text-2xl md:text-3xl font-display font-bold text-ink-900 tracking-tight">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs text-ink-500 leading-snug">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-600 mb-3">
                    Améliorations clés
                  </p>
                  <ul className="space-y-2.5">
                    {result.improvements.map((improvement) => (
                      <li key={improvement} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" strokeWidth={2.4} />
                        <span className="text-sm text-ink-700 leading-relaxed">
                          {improvement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => changeResult(-1)}
                  aria-label="Résultat précédent"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-primary-400 hover:text-primary-300"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-1.5" aria-label={`Résultat ${activeResult + 1} sur ${realResults.length}`}>
                  {realResults.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Afficher le résultat ${index + 1}`}
                      aria-current={activeResult === index ? 'true' : undefined}
                      onClick={() => setActiveResult(index)}
                      className={`h-1.5 rounded-full transition-all duration-200 ${
                        activeResult === index ? 'w-7 bg-primary-400' : 'w-5 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => changeResult(1)}
                  aria-label="Résultat suivant"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:border-primary-400 hover:text-primary-300"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 3: Symptômes */}
      <Section className="bg-ink-50">
        <Container>
          <div className="max-w-2xl mb-12">
            <Eyebrow>Le problème au quotidien</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900">
              « L'équipe est débordée par des tâches qui ne créent pas assez de valeur. »
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Si cette phrase résonne, vous n'êtes pas seul. Voici les manifestations
              concrètes que nous rencontrons régulièrement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {symptoms.map((symptom) => (
              <div key={symptom.title} className="card-surface p-6">
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary-50 text-primary-600 mb-4">
                  <symptom.icon className="w-5.5 h-5.5" strokeWidth={2} />
                </div>
                <h3 className="text-base font-semibold text-ink-900 mb-2">{symptom.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{symptom.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 3: Résultats recherchés */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl mb-12">
            <Eyebrow>Résultats recherchés</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900">
              Des objectifs, pas des promesses
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Ces résultats sont des objectifs que nous visons, et non des garanties
              contractuelles. Chaque situation est évaluée avant tout engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {desiredResults.map((result) => (
              <div key={result.title} className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-white border border-primary-100">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600 text-white mb-5">
                  <result.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold text-ink-900 mb-2">{result.title}</h3>
                <p className="text-ink-600 leading-relaxed">{result.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 4: Approche */}
      <Section className="bg-ink-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow>Notre approche</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900">
                Partir du processus, pas de la technologie
              </h2>
              <p className="mt-5 text-lg text-ink-600 leading-relaxed">
                Nous ne partons pas d'un outil prédéfini. Nous commençons par comprendre
                votre besoin concret, puis nous vérifions ce qui peut raisonnablement
                être simplifié ou automatisé.
              </p>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">
                L'IA n'est pas imposée lorsqu'une solution plus simple suffit. La
                technologie est un moyen, pas une fin.
              </p>
              <div className="mt-8">
                <Button to="/methode" variant="outline" size="lg">
                  Découvrir notre méthode
                  <ArrowRight className="w-4.5 h-4.5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="card-surface p-8 bg-white">
                <div className="space-y-6">
                  {[
                    { num: '01', label: 'Comprendre votre processus réel' },
                    { num: '02', label: 'Identifier ce qui peut être simplifié' },
                    { num: '03', label: "Choisir l'outil adapté — No-Code, automatisation ou IA" },
                    { num: '04', label: 'Concevoir, tester et mettre en service' },
                    { num: '05', label: "Documenter et former pour l'autonomie" },
                  ].map((step, i) => (
                    <div key={step.num} className="flex items-start gap-4">
                      <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-ink-900 text-primary-400 font-display font-bold text-sm">
                        {step.num}
                      </span>
                      <div className="flex-1 pt-1.5">
                        <p className="text-ink-800 font-medium">{step.label}</p>
                      </div>
                      {i < 4 && (
                        <div className="absolute left-[3.4rem] mt-12 w-px h-4 bg-ink-100" aria-hidden="true" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 5: Aperçu des trois offres */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl mb-12">
            <Eyebrow>Nos offres</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900">
              Une progression simple : comprendre, mettre en œuvre, faire adopter
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Trois familles d'offres qui suivent le parcours naturel de votre projet,
              sans imposer d'étape inutile.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerPreview.map((offer) => (
              <div key={offer.title} className="card-surface p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary-50 text-primary-600">
                    <offer.icon className="w-5.5 h-5.5" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent-600">
                    {offer.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-ink-900 mb-2">{offer.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed flex-1">{offer.description}</p>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-700 hover:text-primary-800 transition-colors"
                >
                  En savoir plus
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 6: Aperçu de la méthode */}
      <Section className="bg-ink-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-20" aria-hidden="true" />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow className="text-primary-400">La méthode</Eyebrow>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-white">
                Un projet encadré, testé et transmis
              </h2>
              <p className="mt-5 text-lg text-ink-300 leading-relaxed">
                La solution est conçue et testée sur un périmètre défini avant sa mise
                en service, puis accompagnée d'une prise en main et d'une phase de
                stabilisation.
              </p>
              <p className="mt-4 text-lg text-ink-300 leading-relaxed">
                Vous savez à chaque étape ce qui se passe, ce qui est livré et ce qui
                reste sous votre responsabilité.
              </p>
              <div className="mt-8">
                <Button to="/methode" variant="primary" size="lg">
                  Découvrir la méthode
                  <ArrowRight className="w-4.5 h-4.5" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Compass, label: 'Comprendre le processus' },
                { icon: Layers, label: "Cadrer l'intervention" },
                { icon: Workflow, label: 'Concevoir le workflow' },
                { icon: CheckCircle2, label: 'Tester et mettre en service' },
                { icon: BookOpen, label: 'Documenter' },
                { icon: GraduationCap, label: 'Former et accompagner' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary-400 mb-3" strokeWidth={2} />
                  <p className="text-sm text-ink-200 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 7: Réassurance */}
      <Section className="bg-white">
        <Container>
          <div className="max-w-2xl mb-12">
            <Eyebrow>Pourquoi faire confiance</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900">
              Pragmatisme, documentation et limites claires
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Nous préférons être transparents sur ce que nous faisons et ne faisons
              pas, plutôt que de promettre ce que nous ne pouvons pas tenir.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reassuranceItems.map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-xl bg-ink-50 border border-ink-100">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-lg bg-white text-primary-600 border border-ink-100">
                  <item.icon className="w-5.5 h-5.5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-ink-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 8: FAQ */}
      <Section className="bg-ink-50">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-12">
            <Eyebrow className="justify-center">
              <HelpCircle className="w-3.5 h-3.5" />
              Questions fréquentes
            </Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-ink-900 tracking-tight">
              Foire aux questions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-600 leading-relaxed">
 Vous trouverez ici les réponses aux questions les plus courantes sur notre
 approche de l'automatisation et de l'IA.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-primary-200 bg-white shadow-md shadow-primary-500/5'
                      : 'border-ink-100 bg-white hover:border-primary-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-base font-semibold text-ink-900">
                      {item.question}
                    </span>
                    <span
                      className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                        isOpen
                          ? 'bg-primary-600 text-white rotate-180'
                          : 'bg-ink-100 text-ink-500'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-ink-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-sm text-ink-500">
 Vous ne trouvez pas la réponse à votre question ?
            </p>
            <Button to="/diagnostic" variant="outline" size="md" className="mt-4 rounded-full">
              Poser votre question
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Section 9: CTA final */}
      <Section className="bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 px-8 py-16 md:px-16 md:py-20">
            <div className="absolute top-0 right-0 w-96 h-96 glow-accent opacity-30 -translate-y-1/3 translate-x-1/3" aria-hidden="true" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Un processus chronophage ? Présentez-le nous.
              </h2>
              <p className="mt-5 text-lg text-primary-50 leading-relaxed">
                Le premier diagnostic est gratuit. Il permet de comprendre votre besoin
                et de déterminer si une intervention est pertinente — sans promettre un
                audit complet ni un livrable détaillé.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button to="/diagnostic" size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
                  Présenter mon besoin
                  <ArrowRight className="w-4.5 h-4.5" />
                </Button>
                <Button to="/services" size="lg" variant="ghost" className="text-white hover:bg-white/10">
                  Découvrir nos services
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
