import {
  Bot,
  Cog,
  Boxes,
  Network,
  BrainCircuit,
  MessageSquareText,
  KanbanSquare,
  Zap,
  Compass,
  PenTool,
  Wrench,
  TrendingUp,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

export type ServiceOffer = {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  features: string[];
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  whatIsTitle: string;
  whatIsBody: string;
  servicesTitle: string;
  servicesIntro: string;
  serviceDetails: {
    title: string;
    description: string;
  }[];
  whoNeedsTitle: string;
  whoNeeds: string[];
  processTitle: string;
  processSteps: {
    num: string;
    title: string;
    description: string;
  }[];
  whyChooseTitle: string;
  whyChoose: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const services: ServiceOffer[] = [
  {
    icon: Bot,
    slug: 'automatisation-workflows-ia',
    title: 'Automatisation de workflows par IA',
    shortDescription:
      "Des workflows intelligents pilotés par l'IA qui automatisent vos opérations complexes avec précision, contexte et prise de décision automatisée.",
    features: ['Conception de workflows IA', 'Automatisation des opérations', 'Décisions assistées par IA', 'Intégrations métier'],
    heroTitle: 'Automatisation de workflows par IA',
    heroSubtitle:
      "Transformez l'IA en un véritable outil de travail au quotidien. Nous concevons des workflows intelligents qui automatisent vos tâches répétitives et libèrent du temps pour vos équipes.",
    intro:
      "La plupart des entreprises utilisent l'IA pour poser des questions, rédiger du contenu ou faire des recherches. C'est un bon point de départ, mais c'est loin de ce que l'IA peut réellement faire. Avec la bonne configuration, l'IA peut devenir une partie précieuse de vos opérations quotidiennes, automatiser des tâches répétitives, fluidifier les workflows et aider vos équipes à travailler plus rapidement et plus efficacement.",
    whatIsTitle: "Qu'est-ce que l'automatisation de workflows par IA ?",
    whatIsBody:
      "La plupart des équipes utilisent l'IA comme un moteur de recherche avec de meilleures compétences en rédaction. Vous posez une question, elle répond, et c'est tout. Avec l'automatisation de workflows par IA, des tâches répétitives comme la recherche, le reporting, la documentation et la communication client peuvent s'exécuter via des workflows structurés et automatisés, au lieu d'être traitées manuellement à chaque fois.",
    servicesTitle: "Nos services d'automatisation par IA",
    servicesIntro:
      "Chaque entreprise fonctionne différemment, c'est pourquoi une solution IA générique donne rarement les meilleurs résultats. Nous adaptons l'IA à vos outils, processus et objectifs existants pour créer des solutions pratiques qui s'intègrent naturellement à vos workflows.",
    serviceDetails: [
      {
        title: 'Configuration des compétences IA et conseil',
        description:
          "Chaque fois que quelqu'un dans votre équipe utilise l'IA, il explique probablement les mêmes choses. Votre ton, vos processus, votre terminologie. Avec une configuration appropriée, l'IA peut mémoriser vos processus, votre style de rédaction et vos workflows standards, ce qui aide votre équipe à obtenir des résultats cohérents et de qualité sans répéter les mêmes instructions.",
      },
      {
        title: 'Intégration IA avec vos systèmes internes',
        description:
          "L'IA est puissante seule, mais quand elle peut accéder à vos documents, données et systèmes internes, elle devient un outil entièrement différent. Nous créons une connexion sécurisée entre l'IA et les plateformes que votre équipe utilise déjà, lui permettant de puiser dans des informations réelles et de soutenir vos workflows concrets.",
      },
      {
        title: "Développement d'applications propulsées par l'IA",
        description:
          "Chaque entreprise a des processus uniques que les logiciels standards ne peuvent pas toujours supporter. Au lieu d'adapter votre entreprise à des outils génériques, nous construisons des applications sur mesure propulsées par l'IA, conçues autour de la façon dont votre équipe travaille réellement.",
      },
      {
        title: 'Automatisation des tâches de bureau',
        description:
          "Beaucoup de temps précieux est perdu sur des tâches de bureau répétitives. Avec l'automatisation des tâches de bureau, vous pouvez automatiser le travail quotidien comme la mise à jour de feuilles de calcul, la génération de rapports, la préparation de documents et l'organisation de fichiers.",
      },
    ],
    whoNeedsTitle: "Qui a besoin de services d'automatisation par IA ?",
    whoNeeds: [
      'Équapes opérationnelles gérant des workflows répétitifs',
      'Équipes marketing créant du contenu à grande échelle',
      'Agences gérant plusieurs projets clients',
      'Cabinets de services professionnels gérant de la documentation',
      'Équipes de support client répondant à des demandes récurrentes',
      'Fondateurs cherchant à croître sans augmenter les effectifs',
      'Entreprises en croissance voulant des workflows IA évolutifs',
    ],
    processTitle: "Comment fonctionne notre processus d'automatisation",
    processSteps: [
      { num: '01', title: 'Audit', description: "Nous examinons vos processus existants et identifions où l'automatisation par IA peut faire gagner du temps, réduire le travail manuel et améliorer la cohérence." },
      { num: '02', title: 'Stratégie', description: "Nous créons un plan d'automatisation sur mesure basé sur vos objectifs, en recommandant la bonne solution pour votre entreprise." },
      { num: '03', title: 'Construction', description: "Notre équipe implémente et configure tout pour s'intégrer parfaitement à vos workflows existants." },
      { num: '04', title: 'Support', description: "Une fois votre automatisation en ligne, nous continuons à vous accompagner avec l'optimisation et des améliorations continues." },
    ],
    whyChooseTitle: 'Pourquoi choisir AXAGENIA comme expert IA',
    whyChoose: [
      { title: "Compréhension métier d'abord", description: "Nous comprenons d'abord comment votre entreprise fonctionne réellement avant de proposer une solution IA." },
      { title: 'Solutions sur mesure', description: "Chaque implémentation est créée pour votre entreprise, sans modèles génériques." },
      { title: 'Intégration fluide', description: "Nos solutions s'intègrent naturellement dans vos processus et outils existants." },
      { title: 'Résultats mesurables', description: "Nous concevons des solutions pratiques qui livrent une valeur réelle et mesurable." },
    ],
    faqs: [
      { question: "Qu'est-ce que l'automatisation de workflows par IA ?", answer: "C'est le processus d'intégration de l'IA dans vos opérations quotidiennes, pour qu'au lieu de répondre à des questions ponctuelles, elle exécute activement des tâches, maintient la cohérence et réduit le travail manuel." },
      { question: 'Que comprennent ces services ?', answer: "Des services qui aident les entreprises à construire des workflows propulsés par l'IA, automatiser des processus reproductibles et intégrer l'IA dans leur fonctionnement réel." },
      { question: "Qu'est-ce qu'une intégration IA sécurisée ?", answer: "Une connexion sécurisée entre l'IA et vos systèmes métier, permettant à l'IA d'accéder à des informations réelles et de contribuer à vos workflows concrets." },
      { question: "L'IA peut-elle s'intégrer à mes outils existants ?", answer: "Oui, l'IA peut s'intégrer à un large éventail d'outils, des CRM aux plateformes de projet, bases de données et systèmes de communication." },
      { question: 'Construisez-vous des applications sur mesure ?', answer: "Oui, nous développons des applications propulsées par l'IA sur mesure, adaptées à vos processus et intégrées à vos systèmes existants." },
    ],
  },
  {
    icon: Cog,
    slug: 'automatisation-processus-metier',
    title: 'Automatisation des processus métier',
    shortDescription:
      "Automatisation de bout en bout de vos processus métier pour améliorer l'efficacité et réduire vos coûts opérationnels.",
    features: ['Cartographie des processus', 'Réduction des tâches manuelles', 'Intégration des systèmes', 'Workflows évolutifs'],
    heroTitle: 'Automatisation des processus métier',
    heroSubtitle:
      "Nous concevons et déployons des systèmes d'automatisation qui éliminent le travail manuel répétitif, connectent vos applications et fluidifient vos opérations, avec le bon mix de technologies No-Code et d'IA.",
    intro:
      "L'automatisation des processus métier consiste à identifier les tâches répétitives et à les transformer en workflows automatisés qui s'exécutent en arrière-plan. Des mises à jour de CRM à la facturation et au reporting, l'automatisation améliore la vitesse et la précision across vos opérations.",
    whatIsTitle: "Qu'est-ce que l'automatisation des processus métier ?",
    whatIsBody:
      "L'automatisation des processus métier (BPA) est l'utilisation de la technologie pour gérer automatiquement des tâches répétitives basées sur des règles, sans intervention humaine. Au lieu de mettre à jour manuellement des feuilles de calcul, d'envoyer des emails ou de déplacer des données entre systèmes, les outils d'automatisation effectuent ces tâches instantanément et avec précision.",
    servicesTitle: 'Notre expertise en automatisation',
    servicesIntro:
      "Nous ne nous contentons pas de configurer des automatisations, nous construisons des systèmes qui améliorent réellement le fonctionnement de votre entreprise.",
    serviceDetails: [
      { title: 'Automatisation de workflows', description: "Automatisation de bout en bout à travers vos outils et processus, de la capture de leads au reporting." },
      { title: 'Automatisation No-Code et Low-Code', description: "Déploiement rapide utilisant des plateformes comme Make et Zapier pour des résultats immédiats." },
      { title: "Développement d'automatisation sur mesure", description: "Workflows auto-hébergés et évolutifs avec un contrôle total des données via n8n." },
      { title: "Automatisation propulsée par l'IA", description: "Workflows intelligents utilisant GPT, agents IA et logique de décision." },
      { title: 'Intégrations de systèmes', description: "Connexions fluides entre CRM, ERP, marketing et outils de support." },
      { title: 'Conseil en automatisation', description: "Identifier quoi automatiser, comment prioriser et où le ROI est le plus élevé." },
    ],
    whoNeedsTitle: "Ce que l'automatisation apporte à votre équipe",
    whoNeeds: [
      'Efficacité améliorée : les tâches qui prenaient des heures sont complétées en secondes',
      "Erreurs réduites : les workflows s'exécutent de manière cohérente",
      "Économies de coûts : moins d'heures manuelles, moins de frais opérationnels",
      "Scalabilité accrue : gérez 10x la charge sans augmenter l'équipe",
      'Temps de réponse accélérés : suivis, notifications et mises à jour instantanés',
      'Visibilité complète : suivez chaque workflow, chaque action, chaque résultat',
    ],
    processTitle: 'Notre processus en 4 étapes',
    processSteps: [
      { num: '01', title: 'Découvrir', description: "Nous comprenons vos besoins métier et vos défis de workflow." },
      { num: '02', title: 'Planifier et concevoir', description: "Nous concevons la solution d'automatisation idéale pour vos besoins." },
      { num: '03', title: 'Construire et implémenter', description: "Nous construisons, testons et implémentons votre workflow automatisé." },
      { num: '04', title: 'Optimiser et supporter', description: "Nous surveillons, optimisons et assurons un support continu." },
    ],
    whyChooseTitle: 'Pourquoi AXAGENIA est le bon partenaire BPA',
    whyChoose: [
      { title: 'Expérience prouvée', description: "Des centaines de workflows automatisés déployés avec succès." },
      { title: 'Expertise multi-plateformes', description: "Maîtrise de Make, n8n, Zapier et des solutions IA." },
      { title: 'Implémentation rapide', description: "Des résultats en jours, pas en mois." },
      { title: 'Approche orientée ROI', description: "Des solutions construites pour un retour sur investissement clair." },
    ],
    faqs: [
      { question: "Qu'est-ce que l'automatisation des processus métier ?", answer: "L'utilisation de la technologie pour automatiser des tâches et workflows répétitifs, réduisant l'effort manuel et améliorant l'efficacité." },
      { question: 'Quels processus peuvent être automatisés ?', answer: "Tout processus basé sur des règles : mises à jour CRM, gestion de leads, facturation, reporting, onboarding et communication client." },
      { question: 'Combien de temps faut-il ?', answer: "Les workflows simples peuvent être en ligne en quelques heures, les systèmes complexes en quelques jours à semaines." },
      { question: 'Quel outil choisir ?', answer: "Zapier pour les workflows simples, Make pour l'automatisation visuelle complexe, n8n pour les solutions auto-hébergées." },
      { question: 'BPA vs RPA ?', answer: "Le BPA automatise les workflows à travers les systèmes via des intégrations, le RPA imite les actions humaines sur les interfaces. Le BPA est plus scalable." },
    ],
  },
  {
    icon: Boxes,
    slug: 'developpement-scenarios-make',
    title: 'Développement de scénarios Make.com',
    shortDescription:
      "Conception de scénarios Make.com sur mesure, adaptés à vos besoins métier, quel que soit votre secteur d'activité.",
    features: ['Développement de scénarios', 'Connexions entre applications', 'Synchronisation des données', 'Support et maintenance'],
    heroTitle: 'Automatisation Make.com pour les entreprises',
    heroSubtitle:
      "Construisez, scalez et migrez en toute simplicité. Nos experts Make livrent des automatisations puissantes, flexibles et sécurisées pour votre entreprise.",
    intro:
      "Le développement de scénarios Make consiste à construire des workflows automatisés multi-étapes qui connectent vos applications métier, du CRM au marketing en passant par la finance et les RH, en utilisant le canvas visuel drag-and-drop de Make.",
    whatIsTitle: "Qu'est-ce que le développement de scénarios Make ?",
    whatIsBody:
      "Make est une plateforme d'automatisation visuelle qui permet de créer des workflows complexes en glissant-déposant des modules. Les scénarios Make connectent vos applications et automatisent des processus multi-étapes sans code, avec une grande flexibilité et un contrôle précis des données.",
    servicesTitle: 'Automatisez tout avec Make',
    servicesIntro:
      "Construisez des workflows évolutifs, créez des applications personnalisées et migrez depuis Zapier, le tout avec nos experts Make certifiés.",
    serviceDetails: [
      { title: 'Développement de scénarios Make', description: "Trop d'étapes manuelles ralentissent votre équipe ? Nous concevons et construisons des scénarios Make sur mesure qui automatisent vos workflows de bout en bout, de la capture de leads au reporting." },
      { title: "Développement d'applications personnalisées", description: "Besoin de quelque chose au-delà des intégrations standards ? Nous construisons des applications et modules Make personnalisés pour vos systèmes métier." },
      { title: 'Migration de Zapier vers Make', description: "Vous dépassez Zapier ? Nous vous aidons à migrer sans rien casser, avec toute votre logique, vos filtres et la gestion des données, sans disruption." },
    ],
    whoNeedsTitle: "Pourquoi Make est supérieur pour l'automatisation",
    whoNeeds: [
      'Constructeur de scénarios visuel : interface drag-and-drop intuitive',
      "Tarification économique : facturation à l'opération, pas au workflow",
      "Couverture API étendue : plus d'endpoints par application",
      "Gestion d'erreurs avancée : monitoring et récupération intégrés",
      'Workflows complexes : routeurs, filtres et logique conditionnelle',
      'Scalabilité : des automatisations qui grandissent avec votre entreprise',
    ],
    processTitle: 'Notre processus Make',
    processSteps: [
      { num: '01', title: 'Audit', description: "Nous analysons vos workflows existants et identifions les opportunités d'automatisation avec Make." },
      { num: '02', title: 'Conception', description: "Nous concevons des scénarios Make optimisés pour vos processus métier." },
      { num: '03', title: 'Déploiement', description: "Nous construisons, testons et déployons vos scénarios avec gestion d'erreurs et documentation." },
      { num: '04', title: 'Optimisation', description: "Support post-lancement, monitoring et optimisation continue de vos automatisations." },
    ],
    whyChooseTitle: 'Pourquoi les entreprises choisissent AXAGENIA pour Make',
    whyChoose: [
      { title: 'Expertise approfondie', description: "Des années d'expérience en automatisation Make." },
      { title: 'Historique prouvé', description: "Des centaines de scénarios déployés across industries." },
      { title: 'Livraison rapide', description: "Des résultats rapides avec une communication claire." },
      { title: 'Solutions évolutives', description: "Des automatisations prêtes pour l'avenir." },
    ],
    faqs: [
      { question: 'Mes workflows continueront-ils pendant la migration ?', answer: "Oui, nous reconstruisons vos Zaps dans Make tout en gardant Zapier actif, puis testons les deux systèmes en parallèle avant de basculer." },
      { question: 'Make vs Zapier ?', answer: "Zapier fonctionne bien pour les automatisations simples, mais devient coûteux et limité. Make offre plus de flexibilité, une meilleure gestion des données et des coûts réduits à grande échelle." },
      { question: "Dois-je configurer Make à l'avance ?", answer: "Non, nous pouvons créer et configurer votre compte Make, y compris les intégrations et la structure de l'espace de travail." },
      { question: 'Gérez-vous les workflows multi-étapes complexes ?', answer: "Oui, nous spécialisons dans les workflows multi-étapes avec filtres, routeurs et gestion d'erreurs." },
      { question: 'Offrez-vous un support post-lancement ?', answer: "Oui, nous fournissons support, documentation et monitoring post-lancement." },
    ],
  },
  {
    icon: Network,
    slug: 'automatisation-n8n',
    title: 'Automatisation avec n8n',
    shortDescription:
      "Automatisation open-source avec n8n : flexibilité d'auto-hébergement et capacités d'intégration avancées.",
    features: ['Conception de workflows', 'Intégrations API et bases de données', 'Solutions auto-hébergées', 'Automatisation maîtrisée'],
    heroTitle: 'Automatisation de workflows avec n8n',
    heroSubtitle:
      "Transformez vos opérations avec n8n, la plateforme open-source qui connecte applications, API et bases de données pour automatiser vos tâches avec flexibilité et contrôle total.",
    intro:
      "n8n est une plateforme d'automatisation open-source qui offre une flexibilité maximale. Auto-hébergée sur votre infrastructure, elle vous donne le contrôle total de vos données et évite le vendor lock-in.",
    whatIsTitle: 'Pourquoi les entreprises font confiance à n8n',
    whatIsBody:
      "n8n permet de construire des workflows scalables, créer des applications personnalisées et migrer depuis Zapier, avec un contrôle total des données. Auto-hébergée ou dans le cloud, n8n s'adapte à vos besoins sans limites d'exécution.",
    servicesTitle: "Services d'automatisation n8n que nous livrons",
    servicesIntro:
      "De la configuration à l'automatisation avancée, nous gérons toute votre stack d'automatisation n8n.",
    serviceDetails: [
      { title: 'Conception et développement de workflows n8n', description: "Workflows sur mesure construits from scratch avec logique complète et gestion d'erreurs." },
      { title: "Services d'intégration n8n", description: "Connectez tous vos outils métier dans un écosystème automatisé unifié." },
      { title: 'Automatisation IA avec n8n', description: "Workflows intelligents utilisant GPT, Claude ou des modèles IA sur mesure." },
      { title: 'Automatisation des ventes et leads', description: "Capturez, qualifiez et suivez automatiquement vos prospects." },
      { title: 'Automatisation WhatsApp et email', description: "Envoyez des alertes, rappels et confirmations en temps réel." },
      { title: 'Migration Zapier vers n8n', description: "Migration en toute fluidité sans temps d'arrêt." },
    ],
    whoNeedsTitle: 'Ce que nous construisons avec n8n',
    whoNeeds: [
      "Workflows propulsés par l'IA : intégrez GPT-4, Claude ou des modèles sur mesure",
      "Agents d'automatisation multi-étapes : workflows qui pensent, décident et agissent",
      'Synchronisation de données en temps réel entre bases de données, CRM et applications',
      'Intégrations API sur mesure vers systèmes propriétaires ou legacy',
      "400+ intégrations natives prêtes à l'emploi",
      'Exécutions illimitées : pas de limites, pas de facturation par tâche',
    ],
    processTitle: 'Notre processus n8n',
    processSteps: [
      { num: '01', title: 'Découverte', description: "Nous identifions vos besoins d'automatisation et les opportunités rapides." },
      { num: '02', title: 'Architecture', description: "Nous concevons l'architecture n8n adaptée à votre infrastructure." },
      { num: '03', title: 'Déploiement', description: "Nous construisons, testons et déployons vos workflows n8n." },
      { num: '04', title: 'Optimisation', description: "Améliorations continues et monitoring de vos automatisations." },
    ],
    whyChooseTitle: 'Pourquoi choisir AXAGENIA pour n8n',
    whyChoose: [
      { title: 'Livraison par experts', description: "Construit par des spécialistes n8n expérimentés." },
      { title: 'Sécurisé et conforme RGPD', description: "Configurations auto-hébergées garantissant la confidentialité des données." },
      { title: 'Délai rapide', description: "Livraison rapide sans compromis sur la qualité." },
      { title: 'Workflows entièrement sur mesure', description: "Pas de modèles, tout est construit pour votre entreprise." },
    ],
    faqs: [
      { question: "Qu'est-ce que l'automatisation n8n ?", answer: "n8n connecte applications, API et bases de données pour exécuter des workflows automatiquement via un constructeur visuel." },
      { question: 'Que peut automatiser n8n ?', answer: "Gestion de leads, mises à jour CRM, notifications, reporting, support, processus simples comme complexes multi-étapes." },
      { question: 'n8n est-il gratuit ?', answer: "n8n peut être gratuit en auto-hébergement, les coûts viennent de la configuration, du développement et du support." },
      { question: 'n8n vs Zapier ?', answer: "n8n offre plus de flexibilité, l'auto-hébergement et pas de tarification par tâche, idéal pour les entreprises en croissance." },
      { question: 'n8n est-il sécurisé ?', answer: "Oui, surtout en auto-hébergement. Les données restent sur votre infrastructure avec chiffrement et contrôle d'accès." },
    ],
  },
  {
    icon: BrainCircuit,
    slug: 'agents-ia-gpt-personnalises',
    title: 'Agents IA et solutions GPT personnalisées',
    shortDescription:
      "Conception d'agents IA et de solutions GPT sur mesure, adaptés à vos besoins métier spécifiques.",
    features: ['Développement de GPT personnalisés', 'Automatisation par IA', 'Base de connaissances', 'Amélioration des processus'],
    heroTitle: 'Agents IA et solutions GPT personnalisées',
    heroSubtitle:
      "Nous concevons, construisons et déployons des agents IA intelligents et des solutions GPT sur mesure qui automatisent vos workflows, gèrent des requêtes complexes et prennent des décisions en temps réel.",
    intro:
      "Les services de développement d'agents IA consistent à créer des systèmes intelligents qui comprennent le langage naturel, effectuent des tâches multi-étapes, se connectent à vos outils métier et prennent des décisions sans intervention humaine constante.",
    whatIsTitle: 'Agents IA vs Chatbots',
    whatIsBody:
      "Les chatbots traditionnels sont limités à des requêtes simples avec des réponses statiques. Les agents IA, en revanche, peuvent prendre des décisions avancées, effectuer des tâches multi-étapes, s'intégrer à vos systèmes via API et apprendre de manière adaptative.",
    servicesTitle: "Services d'agents IA et GPT personnalisés",
    servicesIntro:
      "Construisez des agents IA et des modèles GPT sur mesure qui comprennent votre entreprise, automatisent vos workflows complexes et livrent des réponses intelligentes.",
    serviceDetails: [
      { title: 'Conseil en stratégie IA', description: "Identifiez les opportunités d'automatisation à fort impact, sélectionnez les architectures IA optimales et concevez des feuilles de route pour un ROI maximum." },
      { title: "Développement d'agents sur mesure", description: "Construisez des agents intelligents pour le support client, l'automatisation des processus, l'analyse de données et l'aide à la décision." },
      { title: 'Affinage de modèles GPT', description: "Entraînez des modèles GPT sur vos propres données pour capturer l'expertise métier et maintenir une voix de marque cohérente." },
      { title: 'Intégration fluide', description: "Connectez les agents IA à votre CRM, ERP, plateformes de communication et bases de données pour des workflows unifiés." },
    ],
    whoNeedsTitle: 'Ce que nos agents IA peuvent faire pour votre entreprise',
    whoNeeds: [
      'Automatiser le support client : résolvez les requêtes instantanément sur chat, email et messagerie',
      'Gérer les workflows de vente : qualifiez les leads, suivez et planifiez des appels automatiquement',
      'Analyse de données et reporting : extrayez des données, générez des insights et livrez des rapports en temps réel',
      'Automatisation de contenu et marketing : générez du contenu, gérez des campagnes et optimisez les workflows',
      'Automatisation des opérations internes : réduisez le travail manuel en RH, finance et admin',
      'Intégration multi-systèmes : connectez CRM, helpdesk, Slack, WhatsApp et API',
    ],
    processTitle: 'Notre processus de développement',
    processSteps: [
      { num: '01', title: 'Stratégie', description: "Nous identifions les cas d'usage à fort impact et définissons l'architecture IA optimale." },
      { num: '02', title: 'Données', description: "Nous préparons et structurons vos données pour entraîner et affiner les modèles." },
      { num: '03', title: 'Construction', description: "Nous développons, intégrons et testons votre agent IA avec vos systèmes." },
      { num: '04', title: 'Optimisation', description: "Déploiement avec optimisation continue et support à long terme." },
    ],
    whyChooseTitle: 'Pourquoi choisir AXAGENIA',
    whyChoose: [
      { title: "Cas d'usage identifiés", description: "Nous trouvons les bons cas d'usage avant de construire." },
      { title: 'Architecture sur mesure', description: "Chaque agent est conçu pour votre contexte métier." },
      { title: 'Intégration profonde', description: "Connexion avec vos CRM, bases de données et API." },
      { title: 'Évolution continue', description: "Optimisation et scaling selon vos besoins croissants." },
    ],
    faqs: [
      { question: "Qu'est-ce qu'un agent IA ?", answer: "Un système intelligent qui peut comprendre une entrée, prendre des décisions et effectuer des tâches de manière autonome, sans instructions pas à pas." },
      { question: "Qu'est-ce qu'un GPT personnalisé ?", answer: "Une version d'un modèle de langage conçue pour vos données, processus et ton, plus précise et pertinente que les outils IA génériques." },
      { question: 'Combien de temps faut-il pour construire un agent IA ?', answer: "Les agents simples en 1-2 semaines, les systèmes complexes en 4-8 semaines selon les besoins." },
      { question: 'Combien coûte un agent IA ?', answer: "Les coûts dépendent de la complexité, des intégrations et des données. Les solutions de base démarrent petit, les agents entreprise nécessitent un devis." },
      { question: "L'agent peut-il se connecter à mes systèmes ?", answer: "Oui, nos services d'intégration LLM connectent les agents IA à vos CRM, bases de données, API et plateformes de communication." },
    ],
  },
  {
    icon: MessageSquareText,
    slug: 'assistants-vocaux-chatbots-ia',
    title: 'Assistants vocaux et chatbots IA',
    shortDescription:
      "Création d'assistants vocaux et de chatbots intelligents qui améliorent l'engagement et le support client.",
    features: ['Assistants vocaux', 'Chatbots sur mesure', 'Intégration CRM', 'Support client automatisé'],
    heroTitle: 'Assistants vocaux et chatbots IA',
    heroSubtitle:
      "Créez des assistants vocaux et des chatbots intelligents qui améliorent l'engagement client, automatisent le support et offrent une expérience fluide 24/7.",
    intro:
      "Les assistants vocaux et chatbots IA transforment la façon dont vous interagissez avec vos clients. Ils offrent un support instantané, répondent aux questions courantes et guident les utilisateurs dans leurs parcours, tout en réduisant la charge de vos équipes.",
    whatIsTitle: "Qu'est-ce qu'un assistant vocal ou chatbot IA ?",
    whatIsBody:
      "Un assistant vocal ou chatbot IA est un système intelligent capable de comprendre le langage naturel, qu'il soit écrit ou parlé, et d'y répondre de manière pertinente. Contrairement aux chatbots traditionnels basés sur des règles, les assistants IA utilisent le machine learning pour s'améliorer continuellement et offrir des conversations naturelles.",
    servicesTitle: 'Nos services de développement',
    servicesIntro:
      "Nous créons des assistants vocaux et chatbots sur mesure qui s'intègrent à vos systèmes et offrent une expérience client exceptionnelle.",
    serviceDetails: [
      { title: 'Chatbots conversationnels IA', description: "Des chatbots intelligents qui comprennent le langage naturel, gèrent des conversations complexes et offrent des réponses pertinentes contextuelles." },
      { title: 'Assistants vocaux sur mesure', description: "Des assistants vocaux qui comprennent la parole, répondent en langage naturel et s'intègrent à vos systèmes pour des expériences sans les mains." },
      { title: 'Intégration CRM et support', description: "Connectez vos chatbots à votre CRM, helpdesk et bases de données pour un support client unifié et contextuel." },
      { title: 'Automatisation du support client', description: "Réduisez la charge de vos équipes en automatisant les requêtes récurrentes, le routage des tickets et les FAQ." },
    ],
    whoNeedsTitle: "Cas d'usage pour votre entreprise",
    whoNeeds: [
      'Support client 24/7 : répondez instantanément, de jour comme de nuit',
      'Qualification de leads : collectez et qualifiez automatiquement les prospects',
      'Routage intelligent : dirigez les requêtes vers la bonne équipe ou le bon agent',
      'FAQ automatisées : répondez aux questions courantes sans intervention humaine',
      'Prise de rendez-vous : planifiez et gérez les rendez-vous automatiquement',
      'Feedback et enquêtes : collectez les retours clients de manière conversationnelle',
    ],
    processTitle: 'Notre processus de développement',
    processSteps: [
      { num: '01', title: 'Analyse', description: "Nous analysons vos besoins de support et identifions les cas d'usage prioritaires." },
      { num: '02', title: 'Conception conversationnelle', description: "Nous concevons les flux de conversation et l'architecture technique." },
      { num: '03', title: 'Développement', description: "Nous développons, formons et intégrons votre chatbot ou assistant vocal." },
      { num: '04', title: 'Déploiement et optimisation', description: "Mise en ligne, monitoring et optimisation continue des performances." },
    ],
    whyChooseTitle: 'Pourquoi choisir AXAGENIA',
    whyChoose: [
      { title: 'Conversations naturelles', description: "Des chatbots qui comprennent le langage naturel, pas juste des mots-clés." },
      { title: 'Intégration profonde', description: "Connexion avec vos CRM, helpdesk, calendriers et API." },
      { title: 'Multicanal', description: "Déployez sur chat, email, WhatsApp, Slack et plus." },
      { title: 'Évolutif', description: "Des solutions qui grandissent avec votre volume de support." },
    ],
    faqs: [
      { question: "Qu'est-ce qu'un chatbot IA ?", answer: "Un système intelligent qui comprend le langage naturel et peut converser avec vos clients pour offrir du support, qualifier des leads ou automatiser des tâches." },
      { question: 'Chatbot IA vs chatbot traditionnel ?', answer: "Les chatbots IA utilisent le machine learning pour comprendre le contexte et s'améliorer, tandis que les chatbots traditionnels suivent des règles prédéfinies." },
      { question: 'Un assistant vocal peut-il comprendre le français ?', answer: "Oui, nos assistants vocaux supportent le français et de nombreuses autres langues avec une compréhension naturelle." },
      { question: 'Le chatbot peut-il se connecter à mon CRM ?', answer: "Oui, nous intégrons vos chatbots à votre CRM, helpdesk et bases de données pour un support unifié." },
      { question: 'Combien de temps pour développer un chatbot ?', answer: "Un chatbot simple en 1-2 semaines, un assistant complexe multicanal en 3-6 semaines." },
    ],
  },
  {
    icon: KanbanSquare,
    slug: 'implementation-monday-automation',
    title: 'Implémentation et automatisation Monday.com',
    shortDescription:
      "Configuration complète de Monday.com, personnalisation et automatisation de workflows pour une gestion de projet fluide.",
    features: ['Mise en place des espaces', 'Automatisation des tâches', 'Tableaux de bord', 'Accompagnement des équipes'],
    heroTitle: 'Implémentation et automatisation Monday.com',
    heroSubtitle:
      "Configuration complète de Monday.com, personnalisation et automatisation de workflows pour une gestion de projet fluide et productive.",
    intro:
      "Monday.com est une plateforme de gestion de travail puissante qui centralise vos projets, processus et équipes. Une implémentation bien pensée transforme votre façon de travailler, mais une configuration maladroite peut créer plus de confusion que de valeur.",
    whatIsTitle: 'Pourquoi implémenter Monday.com',
    whatIsBody:
      "Monday.com permet de visualiser et gérer vos projets, automatiser vos tâches répétitives et collaborer efficacement. Une implémentation sur mesure assure que la plateforme s'adapte à vos processus, et non l'inverse.",
    servicesTitle: 'Nos services Monday.com',
    servicesIntro:
      "De la configuration initiale à l'automatisation avancée, nous couvrons toute votre implémentation Monday.com.",
    serviceDetails: [
      { title: 'Configuration et mise en place', description: "Configuration complète de votre espace Monday.com : boards, colonnes, vues et structure adaptés à vos processus." },
      { title: 'Automatisation de workflows', description: "Création d'automatisations Monday.com qui éliminent les tâches manuelles : notifications, statuts, assignations et rappels." },
      { title: 'Tableaux de bord et reporting', description: "Conception de dashboards visuels pour suivre vos KPIs, avancements de projets et performances d'équipe." },
      { title: 'Intégrations avec vos outils', description: "Connexion de Monday.com à votre CRM, Slack, Google Workspace, et autres outils pour un flux de données unifié." },
      { title: 'Formation et accompagnement', description: "Accompagnement de vos équipes pour une adoption fluide et une autonomie rapide sur la plateforme." },
      { title: 'Optimisation continue', description: "Audit et optimisation de votre configuration existante pour gagner en efficacité." },
    ],
    whoNeedsTitle: 'Ce que Monday.com apporte à votre équipe',
    whoNeeds: [
      'Visualisation claire de vos projets et tâches',
      'Automatisation des notifications, rappels et changements de statut',
      "Collaboration centralisée : toute l'équipe sur une seule plateforme",
      'Tableaux de bord en temps réel pour le suivi des performances',
      'Intégrations avec vos outils existants',
      'Scalabilité : la plateforme grandit avec votre entreprise',
    ],
    processTitle: "Notre processus d'implémentation",
    processSteps: [
      { num: '01', title: 'Découverte', description: "Nous analysons vos processus de gestion de projet et vos besoins." },
      { num: '02', title: 'Configuration', description: "Nous concevons et configurons votre espace Monday.com sur mesure." },
      { num: '03', title: 'Automatisation', description: "Nous créons les automatisations et intégrations pour fluidifier vos workflows." },
      { num: '04', title: 'Formation', description: "Nous formons vos équipes et assurons un support continu." },
    ],
    whyChooseTitle: 'Pourquoi choisir AXAGENIA pour Monday.com',
    whyChoose: [
      { title: 'Configuration sur mesure', description: "Pas de modèles génériques, tout est adapté à vos processus." },
      { title: 'Expertise en automatisation', description: "Des automatisations qui font gagner du temps réellement." },
      { title: 'Accompagnement humain', description: "Formation et support pour une adoption réussie." },
      { title: 'Vision globale', description: "Intégration avec votre écosystème d'outils existant." },
    ],
    faqs: [
      { question: "Qu'est-ce que l'implémentation Monday.com ?", answer: "La configuration complète de votre espace Monday.com : boards, automatisations, intégrations et formation, adaptés à vos processus." },
      { question: 'Combien de temps prend une implémentation ?', answer: "Une configuration de base en 1-2 semaines, une implémentation complète avec automatisations en 3-4 semaines." },
      { question: 'Pouvez-vous optimiser une configuration existante ?', answer: "Oui, nous auditons votre configuration existante et l'optimisons pour gagner en efficacité." },
      { question: "Monday.com s'intègre-t-il à mes outils ?", answer: "Oui, Monday.com s'intègre à de nombreux outils : CRM, Slack, Google Workspace, et plus." },
      { question: 'Formez-vous mes équipes ?', answer: "Oui, nous fournissons formation et accompagnement pour une adoption fluide et une autonomie rapide." },
    ],
  },
  {
    icon: Zap,
    slug: 'automatisation-zapier',
    title: 'Automatisation avec Zapier',
    shortDescription:
      "Connectez vos applications favorites et automatisez vos workflows sans écrire une seule ligne de code.",
    features: ['Connexion de vos applications', 'Automatisation sans code', 'Déclencheurs personnalisés', 'Workflows fiables'],
    heroTitle: 'Automatisation de workflows avec Zapier',
    heroSubtitle:
      "Connectez vos applications favorites et automatisez vos workflows sans écrire une seule ligne de code. Des Zaps simples aux workflows multi-étapes complexes.",
    intro:
      "Zapier est la plateforme d'automatisation No-Code la plus accessible pour connecter vos applications et automatiser vos tâches répétitives. Avec plus de 6000 intégrations, Zapier permet de créer des workflows entre vos outils sans aucune ligne de code.",
    whatIsTitle: "Qu'est-ce que l'automatisation Zapier ?",
    whatIsBody:
      "Zapier connecte vos applications et automatise les tâches entre elles. Un trigger dans une application déclenche une ou plusieurs actions dans d'autres applications. C'est simple à mettre en place et idéal pour les workflows sans code.",
    servicesTitle: 'Nos services Zapier',
    servicesIntro:
      "De la création de Zaps simples aux workflows multi-étapes complexes, nous concevons des automatisations Zapier fiables et évolutives.",
    serviceDetails: [
      { title: 'Création de Zaps sur mesure', description: "Conception de Zaps qui connectent vos applications et automatisent vos tâches répétitives, du trigger à l'action." },
      { title: 'Workflows multi-étapes', description: "Création de Zaps complexes avec filtres, conditions et branches pour des workflows avancés." },
      { title: "Intégration d'applications", description: "Connexion de vos applications favorites : Gmail, Slack, HubSpot, Notion, Airtable et plus." },
      { title: 'Optimisation de Zaps existants', description: "Audit et optimisation de vos Zaps existants pour réduire les coûts et améliorer la fiabilité." },
      { title: "Gestion d'erreurs et monitoring", description: "Mise en place de gestion d'erreurs et de monitoring pour des workflows robustes." },
      { title: 'Migration depuis Zapier', description: "Migration de vos Zaps vers Make ou n8n quand vous dépassez les limites de Zapier." },
    ],
    whoNeedsTitle: 'Ce que Zapier apporte à votre entreprise',
    whoNeeds: [
      'Connexion de plus de 6000 applications sans code',
      'Automatisation de tâches répétitives en quelques minutes',
      'Workflows simples à configurer et à maintenir',
      'Réduction des erreurs manuelles',
      'Gain de temps immédiat sur les tâches chronophages',
      'Idéal pour les petites et moyennes entreprises',
    ],
    processTitle: 'Notre processus Zapier',
    processSteps: [
      { num: '01', title: 'Audit', description: "Nous identifions vos tâches manuelles et les opportunités d'automatisation avec Zapier." },
      { num: '02', title: 'Conception', description: "Nous concevons vos Zaps et workflows multi-étapes adaptés à vos processus." },
      { num: '03', title: 'Déploiement', description: "Nous construisons, testons et déployons vos Zaps avec gestion d'erreurs." },
      { num: '04', title: 'Optimisation', description: "Monitoring, optimisation et support continu de vos automatisations." },
    ],
    whyChooseTitle: 'Pourquoi choisir AXAGENIA pour Zapier',
    whyChoose: [
      { title: 'Zaps fiables', description: "Des automatisations robustes avec gestion d'erreurs et monitoring." },
      { title: 'Expertise multi-plateformes', description: "Nous savons quand Zapier suffit et quand il faut passer à Make ou n8n." },
      { title: 'Optimisation des coûts', description: "Réduction de votre consommation de tâches Zapier." },
      { title: 'Support continu', description: "Optimisation et maintenance de vos Zaps dans le temps." },
    ],
    faqs: [
      { question: "Qu'est-ce que Zapier ?", answer: "Une plateforme d'automatisation No-Code qui connecte plus de 6000 applications et automatise les tâches entre elles." },
      { question: 'Zapier est-il adapté à mon entreprise ?', answer: "Zapier est idéal pour les workflows simples à modérés. Pour les automatisations complexes ou à grand volume, Make ou n8n peuvent être plus économiques." },
      { question: 'Combien de Zaps puis-je créer ?', answer: "Il n'y a pas de limite au nombre de Zaps, mais le plan détermine le nombre de tâches exécutées par mois." },
      { question: 'Pouvez-vous optimiser mes Zaps existants ?', answer: "Oui, nous auditons vos Zaps existants pour réduire les coûts et améliorer la fiabilité." },
      { question: 'Quand migrer de Zapier vers Make ou n8n ?', answer: "Quand vos coûts augmentent avec le volume ou que vos workflows deviennent trop complexes pour Zapier." },
    ],
  },
];
