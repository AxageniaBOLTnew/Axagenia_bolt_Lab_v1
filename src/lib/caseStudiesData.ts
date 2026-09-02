import {
  Workflow,
  TrendingUp,
  Bot,
  CheckCircle2,
  MessageSquare,
  FileText,
  Zap,
  Database,
  Package,
  Globe,
  DollarSign,
  type LucideIcon,
} from 'lucide-react';

export type CaseStudySection = {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: LucideIcon;
  tags: string[];
  heroSubtitle: string;
  sections: CaseStudySection[];
  conclusion: string;
};

export const categories = [
  'Tous',
  'Automatisation',
  'IA & Workflows',
  'Logistique & B2B',
  'Support Client',
  'Productivité',
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: '10-heures-recuperees-par-semaine',
    title: '10 heures récupérées par semaine : 7 workflows IA qui fonctionnent vraiment',
    excerpt:
      "Arrêtez de discuter, commencez à construire. Soyons honnêtes : vous avez probablement déjà essayé « l'IA pour les entreprises ». Peut-être qu'elle a rédigé un e-mail correct ou résumé un PDF. Mais a-t-elle vraiment vous faire gagner du temps ? Pour la plupart des équipes, la réponse est non — jusqu'à maintenant.",
    category: 'IA & Workflows',
    date: '24 août 2026',
    readTime: '10 min',
    icon: Bot,
    tags: ['IA', 'Workflow', 'Productivité'],
    heroSubtitle:
      "Avec l'IA, vous n'obtenez pas juste un chatbot plus intelligent. Vous obtenez un collaborateur qui gère les tâches répétitives et chronophages pour que votre équipe puisse se concentrer sur ce qui fait vraiment avancer les choses.",
    sections: [
      {
        heading: "Workflow 1 : Qualification intelligente des leads en moins de 2 minutes",
        paragraphs: [
          "Le problème : vos commerciaux passent 20 à 30 minutes par lead à faire des recherches, scorer et rédiger des approches. Ce sont des heures perdues chaque jour.",
          "La solution : mettez en place un workflow IA qui analyse automatiquement chaque nouveau lead, le score selon vos critères de client idéal, rédige un message d'approche personnalisé et l'envoie dans votre CRM.",
          "Résultat : le temps de qualification passe de 20-30 minutes à moins de 2 minutes par lead, avec une meilleure précision et zéro incohérence humaine.",
        ],
      },
      {
        heading: "Workflow 2 : Les briefs de contenu qui s'écrivent tout seuls",
        paragraphs: [
          "Le problème : votre équipe éditoriale passe des heures à rechercher des sujets, rassembler des mots-clés et structurer des briefs avant d'écrire le moindre mot.",
          "La solution : créez un workflow IA qui récupère les tendances de votre secteur, analyse les mots-clés stratégiques, et génère un brief structuré avec angle, plan et sources.",
          "Résultat : les rédacteurs reçoivent un brief prêt à l'emploi en minutes, pas en heures. Une agence a rapporté 3x plus de production de contenu sans embaucher.",
        ],
      },
      {
        heading: "Workflow 3 : Les comptes-rendus de réunions qui sont réellement lus",
        paragraphs: [
          "Le problème : votre équipe passe des heures en réunions, puis encore plus de temps à courir après les actions et les décisions.",
          "La solution : un workflow qui transcrit la réunion, extrait les décisions clés, liste les actions assignées à chacun, et envoie le résumé automatiquement dans Slack ou Notion.",
          "Résultat : fini les fils Slack « qu'avons-nous décidé ? ». Un client a économisé 5 heures par semaine juste sur les suivis de réunions.",
        ],
      },
      {
        heading: "Workflow 4 : Audit de temps et d'e-mails pour les dirigeants",
        paragraphs: [
          "Le problème : les dirigeants se noient dans les e-mails basse priorité et les réunions, ne laissant aucune place à la stratégie.",
          "La solution : un workflow qui trie les e-mails par priorité, identifie ceux qui peuvent être délégués, et bloque automatiquement du temps de concentration dans le calendrier.",
          "Résultat : les dirigeants récupèrent 8 à 10 heures par semaine pour le travail à fort impact.",
        ],
      },
      {
        heading: "Workflow 5 : Briefing hebdomadaire auto-généré",
        paragraphs: [
          "Le problème : votre équipe de direction passe ses lundis matins à chercher des mises à jour dans tous les services.",
          "La solution : un workflow qui collecte automatiquement les indicateurs de chaque département, les synthétise en un briefing unique, et l'envoie avant la réunion du lundi.",
          "Résultat : les réunions de direction commencent par l'alignement, pas par la chasse aux données. Une startup a réduit son temps de réunion de direction de 40%.",
        ],
      },
      {
        heading: "Workflow 6 : Vérificateur de contrats et documents",
        paragraphs: [
          "Le problème : votre équipe juridique ou ops passe des heures à examiner des NDA, accords fournisseurs et contrats pour repérer les signaux d'alerte.",
          "La solution : un workflow IA qui analyse le document, surligne les clauses à risque, vérifie la conformité avec vos standards, et produit un résumé des points d'attention.",
          "Résultat : le temps de revue juridique baisse de 60%, et rien ne passe entre les mailles du filet.",
        ],
      },
      {
        heading: "Workflow 7 : Délégation autonome des tâches",
        paragraphs: [
          "Le problème : les managers passent des heures à assigner des tâches, relancer et suivre l'avancement.",
          "La solution : un workflow qui analyse les nouvelles tâches, identifie le bon interlocuteur selon les compétences et la charge de travail, assigne automatiquement, et envoie des rappels.",
          "Résultat : les managers économisent 6 à 8 heures par semaine d'admin, et rien ne tombe à l'eau.",
        ],
      },
    ],
    conclusion:
      "Vous n'avez pas besoin de construire les 7 workflows d'un coup. Commencez par celui qui fait le plus mal. La plupart des équipes voient leurs premières économies de temps dans les 48 heures suivant le déploiement. La question n'est pas « pouvons-nous nous permettre d'automatiser ? » C'est « pouvons-nous nous permettre de ne pas le faire ? »",
  },
  {
    id: '2',
    slug: 'automatisation-en-2026',
    title: "L'automatisation en 2026 : pourquoi attendre n'est plus une option",
    excerpt:
      "L'automatisation n'est plus un mot à la mode. C'est devenu la colonne vertébrale des entreprises qui veulent rester rapides, précises et compétitives. Voici pourquoi attendre coûte plus cher que passer à l'action.",
    category: 'Automatisation',
    date: '21 août 2026',
    readTime: '8 min',
    icon: TrendingUp,
    tags: ['Tendance', 'Stratégie', '2026'],
    heroSubtitle:
      "En 2026, les entreprises qui automatisent intelligemment constatent une réduction moyenne des coûts de 22% et une croissance des revenus de 11% sur trois ans.",
    sections: [
      {
        heading: "L'IA au cœur de l'automatisation",
        paragraphs: [
          "L'IA n'est plus seulement pour les chatbots. En 2026, les agents IA autonomes — des smart agents qui gèrent des tâches multi-étapes — transforment la façon dont les workflows fonctionnent. Du service client à la finance, les agents IA résolvent désormais jusqu'à 80% des problèmes courants de manière autonome.",
        ],
      },
      {
        heading: "L'essor du développement citoyen",
        paragraphs: [
          "Les équipes non-techniques construisent leurs propres automatisations avec des outils No-Code. 78% des développeurs seniors disent que leur entreprise permet désormais aux développeurs citoyens de créer des solutions sans dépendre de l'IT.",
        ],
      },
      {
        heading: "L'hyperautomatisation est là",
        paragraphs: [
          "Ce n'est plus seulement de la RPA. L'hyperautomatisation combine IA, RPA et process mining pour automatiser des processus complets de bout en bout, pas seulement des tâches isolées.",
        ],
      },
      {
        heading: "Une meilleure expérience employé",
        paragraphs: [
          "Les équipes automatisent pour réduire la charge administrative. L'objectif d'un client ? « Retirer une heure d'admin par employé et par semaine. » Résultat ? Un engagement plus élevé et une culture d'amélioration continue.",
        ],
      },
      {
        heading: "Conformité et éthique intégrées",
        paragraphs: [
          "Avec la hausse des réglementations, l'automatisation inclut désormais des garde-fous éthiques et la conformité par conception pour garder tout auditable et responsable.",
        ],
      },
      {
        heading: "L'impact réel en chiffres",
        paragraphs: [
          "Voici ce que l'automatisation concrètement délivre en 2026 :",
        ],
        listItems: [
          "Les équipes finance économisent plus de 500 heures par an en automatisant la facturation et les rapprochements",
          "Les équipes marketing avec automatisation IA voient 77% de conversions en plus et 76% de ROI la première année",
          "Les équipes IT résolvent les incidents 55 minutes plus vite grâce aux résumés IA et au triage automatique",
          "Les équipes RH automatisent 64% des tâches de recrutement, des fiches de poste à la planification des entretiens",
        ],
      },
    ],
    conclusion:
      "L'automatisation en 2026 ne consiste pas à remplacer les gens, mais à les autonomiser. Vous obtenez le meilleur des deux mondes : la créativité humaine et l'efficacité machine. Ne attendez pas la perfection. Commencez petit, mesurez vite, et passez à l'échelle sur ce qui fonctionne.",
  },
  {
    id: '3',
    slug: 'tendances-automatisation-processus',
    title: 'Tendances en automatisation des processus : ce qu\'il faut surveiller',
    excerpt:
      "L'automatisation n'est plus une seule chose. Ce sont plusieurs tendances qui convergent en même temps, et les workflows IA deviennent rapidement l'une des plus importantes pour les PME.",
    category: 'IA & Workflows',
    date: '19 août 2026',
    readTime: '7 min',
    icon: Workflow,
    tags: ['IA', 'Tendance', 'Workflow'],
    heroSubtitle:
      "Ce n'est plus seulement de la RPA. L'hyperautomatisation combine IA, RPA et process mining pour automatiser des processus complets de bout en bout.",
    sections: [
      {
        heading: "L'automatisation a cessé d'être une seule chose",
        paragraphs: [
          "Il y a quelques années, « automatisation » signifiait surtout une catégorie : un logiciel basé sur des règles qui reproduisait le même chemin de clics qu'une personne. C'était utile, mais rigide. Au moindre cas d'exception, un humain devait reprendre la main.",
          "Ce n'est plus toute l'histoire. Ce qui se passe maintenant, c'est un ensemble de tendances qui se superposent et changent la définition même de « l'automatisation d'un processus ».",
        ],
      },
      {
        heading: "Tendance 1 : La cohérence devient le vrai argument de vente",
        paragraphs: [
          "Les premiers discours d'automatisation misaient tout sur la vitesse. C'est toujours vrai, mais ce n'est plus ce qui motive l'adoption. La vraie valeur que les entreprises cherchent maintenant, c'est la cohérence — le même processus, fait de la même façon, à chaque fois, quel que soit l'opérateur ou la charge de la journée.",
        ],
      },
      {
        heading: "Tendance 2 : Le No-Code rend l'automatisation accessible aux non-développeurs",
        paragraphs: [
          "La barrière à l'entrée a chuté. Des plateformes comme n8n et Make permettent de construire de vrais workflows multi-étapes sans écrire de code. L'automatisation n'est plus verrouillée derrière une équipe de développement. Une PME sans développeur interne peut désormais avoir une automatisation connectant cinq ou six outils, opérationnelle en quelques jours.",
        ],
      },
      {
        heading: "Tendance 3 : Les modèles IA deviennent des participants actifs",
        paragraphs: [
          "C'est le plus grand changement. Pendant longtemps, « l'IA » dans un workflow signifiait un chatbot greffé en façade. Cela change vite. L'IA ne se contente plus de générer du texte — elle lit des données, applique des règles, et agit à l'intérieur des outils que l'entreprise utilise déjà.",
          "Nous avons construit ce type de système pour un client qui gérait ses commandes sur Shopify, Zoho CRM, Zoho Inventory, Zoho Books et Trello. Une commande signifiait autrefois que quelqu'un touchait cinq systèmes différents. Maintenant, elle passe de « passée » à « expédiée » toute seule.",
        ],
      },
      {
        heading: "Tendance 4 : Les instructions réutilisables remplacent les prompts à usage unique",
        paragraphs: [
          "Au lieu de réexpliquer les règles de formatage, le ton et les cas particuliers à chaque fois, les instructions vivent en permanence dans une compétence, ce qui fait que le résultat reste cohérent quel que soit le membre de l'équipe qui le déclenche.",
        ],
      },
      {
        heading: "Tendance 5 : Le travail multi-étapes est délégué, pas seulement les tâches isolées",
        paragraphs: [
          "L'automatisation historique gérait des tâches uniques et bien définies. La nouvelle tendance, c'est l'automatisation qui porte une tâche à travers plusieurs étapes et plusieurs outils sans réinitialisation entre les deux. L'IA travaille sur un morceau de travail plus long, ne consultant un humain que lorsqu'une véritable décision est nécessaire.",
        ],
      },
      {
        heading: "Tendance 6 : Les entreprises choisissent la solution qui leur correspond vraiment",
        paragraphs: [
          "De moins en moins d'entreprises courent après la dernière mode. De plus en plus se demandent ce dont leur processus spécifique a réellement besoin. Parfois c'est un build No-Code rapide. Parfois c'est un système auto-hébergé pour un business qui a déjà des processus de type RPA et doit passer à quelque chose de véritablement piloté par API.",
        ],
      },
    ],
    conclusion:
      "Aucune de ces tendances n'arrive isolément. Le No-Code rend l'automatisation accessible. Les modèles IA ajoutent de vraies capacités de raisonnement et d'action dans le workflow. Les compétences rendent ce raisonnement cohérent. Les entreprises qui en tirent le plus de valeur sont celles qui traitent l'ensemble comme un système évolutif, pas comme un achat logiciel unique.",
  },
  {
    id: '4',
    slug: 'eliminer-erreurs-humaines',
    title: "L'automatisation peut-elle éliminer les erreurs humaines ?",
    excerpt:
      'La réponse honnête n\'est pas « plus aucune erreur ». C\'est « beaucoup moins d\'erreurs qui vous coûtent réellement de l\'argent ». Voici comment l\'automatisation change les probabilités.',
    category: 'Productivité',
    date: '17 août 2026',
    readTime: '5 min',
    icon: CheckCircle2,
    tags: ['Fiabilité', 'Qualité', 'Erreurs'],
    heroSubtitle:
      "La plupart des erreurs qui coûtent de l'argent aux entreprises ne sont pas des erreurs complexes. Ce sont de petites erreurs ennuyeuses : un chiffre tapé dans le mauvais champ, une commande mise à jour dans un système et oubliée dans l'autre.",
    sections: [
      {
        heading: "La réponse honnête d'abord",
        paragraphs: [
          "Pas entièrement, non. Mais suffisamment proche pour changer la façon dont une entreprise fonctionne.",
          "La plupart des erreurs qui coûtent de l'argent aux entreprises ne sont pas des erreurs compliquées. Ce sont de petites erreurs ennuyeuses : un chiffre tapé dans le mauvais champ, une commande mise à jour dans un système et oubliée dans l'autre, un lead qui aurait dû être relancé mardi et qui s'est perdu dans une boîte de réception. Aucune de ces erreurs n'a besoin d'un génie pour être corrigée. Elles ont besoin d'un processus qui ne se fatigue pas, ne se distrait pas, et ne se fait pas interrompre à mi-chemin.",
        ],
      },
      {
        heading: "D'où viennent réellement les erreurs humaines",
        paragraphs: [
          "Les erreurs ne viennent pas d'un manque de compétence. Elles viennent de la fatigue, de la distraction, de la charge cognitive et des interruptions. Plus un processus comporte d'étapes manuelles, plus la probabilité d'erreur augmente — pas linéairement, mais de façon exponentielle.",
          "L'automatisation attaque ce problème à la racine. En supprimant les étapes manuelles répétitives, on supprime les opportunités d'erreur. Et en ajoutant de l'IA dans la boucle, on obtient un système qui ne se contente pas d'exécuter — il vérifie, compare, et alerte quand quelque chose sort de l'ordinaire.",
        ],
      },
      {
        heading: "Ce que l'automatisation peut et ne peut pas corriger",
        paragraphs: [
          "L'automatisation excelle sur les erreurs de processus : données mal recopiées, étapes oubliées, incohérences entre systèmes. Elle ne corrige pas les erreurs de jugement humain — un mauvais choix stratégique, une mauvaise lecture d'un client. Mais elle libère le temps et l'attention nécessaires pour que les humains se concentrent sur ce qui demande justement du jugement.",
        ],
        listItems: [
          "Erreurs de saisie : éliminées par la synchronisation automatique entre systèmes",
          "Étapes oubliées : éliminées par les workflows séquentiels avec vérification",
          "Incohérences de données : détectées par les contrôles automatiques de cohérence",
          "Retards de suivi : éliminés par les déclencheurs automatiques basés sur le temps",
        ],
      },
    ],
    conclusion:
      "L'automatisation ne vous promet pas la perfection. Elle vous promet la cohérence — le même processus, exécuté de la même façon, à chaque fois. Et dans la plupart des entreprises, c'est exactement ce qui sépare les processus qui fuient de l'argent de ceux qui en génèrent.",
  },
  {
    id: '5',
    slug: 'ia-remplacer-support-client',
    title: "L'IA peut-elle remplacer votre équipe de support client ?",
    excerpt:
      "Non, pas entièrement. Mais la réponse honnête est plus nuancée que ça. La plupart des dirigeants de PME qui posent la question veulent surtout réduire la charge de leur équipe, pas remplacer les humains.",
    category: 'Support Client',
    date: '14 août 2026',
    readTime: '6 min',
    icon: MessageSquare,
    tags: ['IA', 'Support', 'Chatbot'],
    heroSubtitle:
      "La plupart des dirigeants qui posent cette question ne veulent pas remplacer leur équipe. Ils veulent que leur équipe arrête de passer 80% de son temps sur des questions identiques pour pouvoir se concentrer sur les cas qui demandent vraiment de l'humain.",
    sections: [
      {
        heading: "Ce que l'IA fait remarquablement bien en support client",
        paragraphs: [
          "L'IA excelle sur les questions répétitives : « où est ma commande ? », « comment réinitialiser mon mot de passe ? », « quelle est votre politique de retour ? ». Ces questions représentent 60 à 80% du volume de la plupart des équipes de support. Un assistant IA bien configuré peut les traiter instantanément, 24h/24, dans plusieurs langues, sans temps d'attente.",
          "Mais ce n'est pas tout. L'IA peut aussi rédiger des brouillons de réponse pour les agents humains sur les cas plus complexes, résumer les conversations longues pour le transfert entre agents, et catégoriser automatiquement les tickets pour qu'ils arrivent dans la bonne file.",
        ],
      },
      {
        heading: "Ce que l'IA ne fait pas bien — encore",
        paragraphs: [
          "Les cas qui demandent de l'empathie, de la négociation, ou une compréhension fine du contexte client restent du domaine humain. Un client furieux qui menace d'annuler son abonnement a besoin d'un humain qui peut lire la situation, adapter le ton, et proposer une solution personnalisée. L'IA peut préparer le terrain — résumer l'historique, suggérer des options — mais la dernière étape doit rester humaine.",
        ],
      },
      {
        heading: "Le modèle qui fonctionne : l'IA en première ligne, l'humain en escalade",
        paragraphs: [
          "Le modèle gagnant n'est pas « IA ou humain », c'est « IA puis humain ». L'IA gère le volume, l'humain gère la complexité. Concrètement :",
        ],
        listItems: [
          "L'IA répond instantanément aux questions simples et fréquentes",
          "Pour les cas complexes, l'IA rédige un brouillon de réponse que l'agent révise et envoie",
          "Pour les cas sensibles (litige, client mécontent), l'IA transfère immédiatement à un humain avec un résumé complet",
          "L'IA analyse les tendances dans les tickets pour alerter sur les problèmes récurrents",
        ],
      },
      {
        heading: "Les résultats concrets",
        paragraphs: [
          "Un client qui a déployé ce modèle a vu son temps de réponse moyen passer de 4 heures à 12 minutes, son taux de résolution au premier contact passer de 62% à 85%, et la satisfaction client augmenter de 18%. Le plus important : ses agents humains ont récupéré 40% de leur temps, qu'ils ont réinvesti dans les cas complexes et la formation.",
        ],
      },
    ],
    conclusion:
      "L'IA ne remplace pas votre équipe de support. Elle lui redonne du temps. Et ce temps, c'est exactement ce qui sépare un support qui se contente de répondre d'un support qui résout vraiment les problèmes des clients.",
  },
  {
    id: '6',
    slug: 'automatisation-commandes-5-plateformes',
    title: 'Comment nous avons automatisé le traitement des commandes sur 5 plateformes',
    excerpt:
      "Le problème que personne ne veut admettre avoir. Toute entreprise en croissance finit par buter sur ce mur. Un client est venu nous voir avec un processus de traitement des commandes qui nécessitait de toucher manuellement à cinq systèmes différents. Voici ce que nous avons fait.",
    category: 'Automatisation',
    date: '13 août 2026',
    readTime: '8 min',
    icon: FileText,
    tags: ['Commandes', 'Workflow', 'Multi-plateformes'],
    heroSubtitle:
      "Un client est venu nous voir avec un processus de traitement des commandes qui nécessitait de toucher manuellement à cinq systèmes : Shopify, Zoho CRM, Zoho Inventory, Zoho Books et Trello. Voici ce que nous avons fait.",
    sections: [
      {
        heading: "Le problème",
        paragraphs: [
          "Chaque commande suivait le même chemin manuel : un employé voyait la commande dans Shopify, la recopiait dans Zoho CRM pour le suivi commercial, vérifiait le stock dans Zoho Inventory, créait la facture dans Zoho Books, et ouvrait une carte Trello pour le suivi logistique. Cinq systèmes, cinq saisies, cinq opportunités d'erreur.",
          "Avec 50 commandes par jour, cela représentait 4 heures de travail administratif quotidien, sans compter les erreurs de saisie qui demandaient encore plus de temps à corriger.",
        ],
      },
      {
        heading: "La solution",
        paragraphs: [
          "Nous avons construit un workflow unique qui se déclenche automatiquement à chaque nouvelle commande Shopify. Le workflow :",
        ],
        listItems: [
          "Récupère les détails de la commande depuis Shopify via API",
          "Crée ou met à jour le contact dans Zoho CRM automatiquement",
          "Vérifie la disponibilité du stock dans Zoho Inventory et réserve les articles",
          "Génère la facture dans Zoho Books avec les bons taux de TVA",
          "Crée une carte Trello dans la colonne « À expédier » avec tous les détails",
          "Envoie un e-mail de confirmation au client avec le numéro de commande",
        ],
      },
      {
        heading: "Le résultat",
        paragraphs: [
          "Le temps de traitement d'une commande est passé de 5 minutes à 0. Les 4 heures quotidiennes d'admin ont disparu. Les erreurs de saisie entre systèmes ont été réduites à zéro. Et l'équipe peut maintenant se concentrer sur les cas d'exception — les retours, les échanges, les commandes personnalisées — au lieu de copier des chiffres entre des onglets.",
          "Le client a pu tripler son volume de commandes sans embaucher une seule personne supplémentaire pour l'admin.",
        ],
      },
    ],
    conclusion:
      "Le traitement de commandes multi-plateformes est le cas d'usage parfait pour l'automatisation : c'est répétitif, c'est critique, et chaque erreur a un coût direct. Quand le workflow est bien conçu, l'humain n'intervient plus que là où son jugement est nécessaire — pas là où il copie des données.",
  },
  {
    id: '7',
    slug: 'ia-pour-automatisation',
    title: "L'IA peut-elle être utilisée pour l'automatisation ?",
    excerpt:
      "De la simple réponse aux questions jusqu'à l'exécution de workflows complets, comment l'IA devient discrètement la colonne vertébrale de l'automatisation moderne. Voici ce qui est possible aujourd'hui.",
    category: 'IA & Workflows',
    date: '12 août 2026',
    readTime: '7 min',
    icon: Bot,
    tags: ['IA', 'Automatisation', 'Workflow'],
    heroSubtitle:
      "L'IA ne se contente plus de répondre à des questions. Elle lit des données, applique des règles, prend des décisions et agit dans les outils que vous utilisez déjà.",
    sections: [
      {
        heading: "Au-delà du chatbot",
        paragraphs: [
          "Pendant longtemps, « l'IA » dans un contexte professionnel signifiait un chatbot en façade qui répondait aux questions. C'est utile, mais c'est limité. La vraie transformation arrive quand l'IA devient un participant actif dans vos workflows — pas un interlocuteur, mais un exécuteur.",
          "Concrètement, cela veut dire que l'IA peut : lire un e-mail entrant, comprendre la demande, vérifier les informations dans votre CRM, décider de la priorité, rédiger une réponse, et l'envoyer — tout seul, sans qu'un humain touche quoi que ce soit entre la réception et la réponse.",
        ],
      },
      {
        heading: "Les trois niveaux d'automatisation par IA",
        paragraphs: [
          "Il y a trois niveaux d'utilisation de l'IA dans l'automatisation, et la plupart des entreprises s'arrêtent au premier :",
        ],
        listItems: [
          "Niveau 1 — Assistante : l'IA génère du contenu (e-mails, résumés, rapports) qu'un humain révise et envoie",
          "Niveau 2 — Co-pilote : l'IA exécute des actions dans vos outils après validation humaine (mise à jour CRM, création de tâches)",
          "Niveau 3 — Autonome : l'IA prend des décisions et agit sans intervention humaine sur les cas prédéfinis, et n'escalade que les exceptions",
        ],
      },
      {
        heading: "Quand l'IA est-elle justifiée dans un workflow ?",
        paragraphs: [
          "L'IA n'est pas la bonne réponse à tout. Elle est justifiée quand un workflow implique :",
        ],
        listItems: [
          "Du langage naturel à comprendre (e-mails, tickets, messages clients)",
          "Des décisions basées sur du contexte (priorisation, catégorisation, routage)",
          "Des variations dans le format d'entrée (un formulaire rempli différemment à chaque fois)",
          "Des étapes qui demandent du « raisonnement » plutôt que des règles simples",
        ],
      },
      {
        heading: "Quand l'IA n'est pas justifiée",
        paragraphs: [
          "Pour les processus purement répétitifs avec des règles fixes (copier A vers B), l'automatisation classique sans IA est plus rapide, plus fiable et moins chère. L'IA s'ajoute là où la rigidité des règles atteint sa limite.",
        ],
      },
    ],
    conclusion:
      "L'IA pour l'automatisation n'est pas une question de mode. C'est une question de bon outil pour le bon travail. Utilisée correctement, elle ne remplace pas l'automatisation classique — elle l'étend là où les règles ne suffisent plus.",
  },
  {
    id: '8',
    slug: 'mcp-explique',
    title: "MCP expliqué : pourquoi la connectivité IA compte plus que le modèle",
    excerpt:
      "On nous demande souvent quel modèle d'IA est le meilleur pour l'automatisation. Claude, GPT, Gemini, comme si choisir le modèle le plus intelligent suffisait. La vraie question, c'est la connectivité.",
    category: 'IA & Workflows',
    date: '10 août 2026',
    readTime: '7 min',
    icon: Database,
    tags: ['MCP', 'IA', 'Architecture'],
    heroSubtitle:
      "Le Model Context Protocol (MCP) est ce qui permet à l'IA de se connecter directement à vos outils et d'agir à l'intérieur, pas seulement de décrire ce qui devrait se passer.",
    sections: [
      {
        heading: "Le problème que MCP résout",
        paragraphs: [
          "La plupart des intégrations IA aujourd'hui fonctionnent par copier-coller : vous prenez le résultat de l'IA et vous le collez manuellement dans votre CRM, votre tableur ou votre outil de gestion. L'IA génère, l'humain déplace. C'est lent, c'est fragile, et ça annule une partie du gain.",
          "Le MCP — Model Context Protocol — résout ce problème en permettant à l'IA de se connecter directement à vos systèmes. Au lieu de générer un texte que vous devez copier, l'IA lit et écrit directement dans vos outils : elle met à jour un champ dans votre CRM, crée une tâche dans votre gestionnaire de projets, envoie un e-mail via votre service de messagerie.",
        ],
      },
      {
        heading: "Comment ça fonctionne concrètement",
        paragraphs: [
          "Le MCP fonctionne comme une couche d'intermédiaire standardisée entre l'IA et vos outils. Au lieu de construire une intégration personnalisée pour chaque outil, le MCP fournit un protocole unifié qui permet à l'IA de :",
        ],
        listItems: [
          "Lire des données depuis vos systèmes (CRM, base de données, tableurs)",
          "Écrire des données dans vos systèmes (mettre à jour un statut, créer un enregistrement)",
          "Exécuter des actions (envoyer un e-mail, créer une tâche, déclencher un workflow)",
          "Le tout avec un contrôle d'accès et un journal d'audit pour la sécurité",
        ],
      },
      {
        heading: "Pourquoi ça change tout",
        paragraphs: [
          "Sans MCP, l'automatisation IA demande des intégrations sur mesure pour chaque outil — coûteuses à construire, fragiles à maintenir. Avec MCP, l'IA se branche sur vos outils existants via un protocole standard. Le résultat : des automatisations plus rapides à déployer, plus robustes dans le temps, et plus faciles à faire évoluer.",
          "Pour les équipes enterprise, le MCP apporte en plus la gouvernance : tout ce que l'IA fait est tracé, auditable, et aligné avec vos politiques de sécurité.",
        ],
      },
    ],
    conclusion:
      "La question n'est pas « quel modèle d'IA est le plus intelligent ? » C'est « quel modèle peut se connecter à mes outils et agir à l'intérieur ? » Le MCP est ce qui rend cette connexion possible. Et c'est ce qui sépare l'IA qui génère de l'IA qui agit.",
  },
  {
    id: '9',
    slug: 'comparatif-modeles-ia',
    title: "Comparatif de modèles d'IA pour l'automatisation : lequel choisir ?",
    excerpt:
      "Toutes les quelques semaines, un nouveau modèle d'IA arrive avec des promesses similaires. Voici notre méthode pour choisir le bon modèle pour un workflow d'automatisation, au-delà du benchmark.",
    category: 'IA & Workflows',
    date: '6 août 2026',
    readTime: '9 min',
    icon: Zap,
    tags: ['Comparatif', 'IA', 'Choix'],
    heroSubtitle:
      "Deux « meilleurs modèles de tous les temps ». Un seul peut avoir raison pour votre cas. Voici comment nous choisissons un modèle pour un workflow d'automatisation, sans nous fier aux benchmarks.",
    sections: [
      {
        heading: "Pourquoi les benchmarks ne suffisent pas",
        paragraphs: [
          "Les benchmarks mesurent des performances sur des tâches standardisées. Mais vos workflows d'automatisation ne sont pas standardisés. Un modèle qui excelle sur un benchmark de code peut être médiocre pour rédiger des e-mails clients en français. Un modèle qui brille en raisonnement peut être trop lent pour un workflow temps réel.",
          "La vraie question n'est pas « quel est le meilleur modèle ? » mais « quel est le meilleur modèle pour ce workflow précis, avec mes données, mes contraintes de latence et mon budget ? »",
        ],
      },
      {
        heading: "Nos critères de choix",
        paragraphs: [
          "Voici les critères que nous utilisons pour choisir un modèle d'IA pour un workflow d'automatisation :",
        ],
        listItems: [
          "Précision sur la tâche : le modèle produit-il le résultat attendu de façon fiable, testé sur vos vraies données ?",
          "Latence : le modèle répond-il assez vite pour le workflow ? Un chatbot client demande < 2s, un rapport hebdomadaire peut attendre 30s",
          "Coût : quel est le coût par exécution, multiplié par le volume attendu ? Un modèle 3x plus cher pour 5% de précision en plus n'est souvent pas justifié",
          "Stabilité : le modèle est-il disponible avec un SLA suffisant ? Un workflow en production ne peut pas dépendre d'un service qui tombe régulièrement",
          "Connectivité : le modèle peut-il se connecter à vos outils via MCP ou API ? Sans ça, l'automatisation reste partielle",
        ],
      },
      {
        heading: "La méthode que nous appliquons",
        paragraphs: [
          "Nous ne choisissons jamais un modèle sur le papier. Nous testons toujours sur un échantillon de vraies données du client :",
        ],
        listItems: [
          "Étape 1 : identifier 50 à 100 cas représentatifs du workflow",
          "Étape 2 : faire tourner 2 à 3 modèles candidats sur ces cas",
          "Étape 3 : évaluer la précision, la latence et le coût sur l'échantillon",
          "Étape 4 : choisir le modèle qui offre le meilleur équilibre, pas le plus performant sur un seul critère",
        ],
      },
      {
        heading: "Le piège du « dernier modèle »",
        paragraphs: [
          "Le dernier modèle sorti n'est pas toujours le meilleur choix. Parfois un modèle plus ancien mais plus stable, moins cher et bien intégré à vos outils est plus pertinent qu'un modèle flambant neuf qui n'a pas encore d'écosystème. La fiabilité en production compte plus que la performance en démonstration.",
        ],
      },
    ],
    conclusion:
      "Choisir un modèle d'IA pour l'automatisation n'est pas une question de classement. C'est une question de fit avec votre workflow, vos données et vos contraintes. Testez sur vos vrais cas, mesurez, et choisissez l'équilibre qui marche — pas le modèle qui fait le plus de bruit.",
  },
  {
    id: '10',
    slug: 'suivi-expeditions-b2b',
    title: 'Suivi d\'expéditions B2B automatisé : fin des e-mails manuels',
    excerpt:
      "Un client B2B nous a contactés parce que son équipe logistique passait ses journées à répondre à « où est ma livraison ? » par e-mail. Voici comment nous avons automatisé le suivi de 200 expéditions par jour.",
    category: 'Logistique & B2B',
    date: '3 août 2026',
    readTime: '6 min',
    icon: Package,
    tags: ['Logistique', 'B2B', 'Suivi'],
    heroSubtitle:
      "Un client B2B nous a contactés parce que son équipe logistique passait ses journées à répondre à « où est ma livraison ? » par e-mail. 200 expéditions par jour, et chaque question de suivi mangeait 15 minutes.",
    sections: [
      {
        heading: "Le problème",
        paragraphs: [
          "Le client expédiait 200 colis par jour vers des entreprises partenaires. Chaque partenaire envoyait des e-mails de suivi — « où est ma livraison ? », « est-ce que la commande X est partie ? », « quand vais-je recevoir mon colis ? ». L'équipe logistique passait 3 heures par jour à vérifier les transporteurs, copier les numéros de suivi et rédiger des réponses.",
          "Le pire : les informations étaient souvent déjà disponibles chez le transporteur, mais il fallait aller les chercher manuellement, une expédition à la fois.",
        ],
      },
      {
        heading: "La solution",
        paragraphs: [
          "Nous avons construit un workflow qui intercepte automatiquement les e-mails de suivi, identifie la commande concernée, interroge l'API du transporteur, et répond directement au client avec le statut en temps réel. Le tout sans intervention humaine pour les cas normaux.",
        ],
        listItems: [
          "L'IA lit l'e-mail entrant et identifie le numéro de commande ou de suivi",
          "Le workflow interroge automatiquement l'API du transporteur (DPD, Chronopost, etc.)",
          "L'IA rédige une réponse personnalisée en français avec le statut et la date estimée",
          "Pour les cas d'exception (colis perdu, retard important), le workflow escalade à un humain avec le contexte complet",
        ],
      },
      {
        heading: "Le résultat",
        paragraphs: [
          "80% des e-mails de suivi sont maintenant répondus automatiquement en moins de 2 minutes, sans intervention humaine. L'équipe logistique a récupéré ses 3 heures quotidiennes et les a réinvesties dans la gestion proactive des exceptions et la relation transporteur. La satisfaction des partenaires a augmenté de 25% grâce au temps de réponse quasi instantané.",
        ],
      },
    ],
    conclusion:
      "Le suivi d'expéditions est un cas d'école de l'automatisation : la donnée existe déjà, le processus est répétitif, et chaque interaction manuelle a un coût direct. Quand l'IA gère le volume et l'humain gère les exceptions, tout le monde gagne — l'équipe comme les clients.",
  },
  {
    id: '11',
    slug: 'automatisation-documents-transfrontalier',
    title: 'Automatisation des documents commerciaux pour le transfrontalier',
    excerpt:
      "Le commerce transfrontalier signifie des douanes, des certificats d'origine, des factures commerciales et des lettres de transport. Un client nous a demandé d'automatiser la génération et la vérification de ces documents. Voici ce que nous avons fait.",
    category: 'Logistique & B2B',
    date: '28 juillet 2026',
    readTime: '7 min',
    icon: Globe,
    tags: ['Documents', 'Transfrontalier', 'Douanes'],
    heroSubtitle:
      "Le commerce transfrontalier, c'est un mur de paperasserie : factures commerciales, certificats d'origine, déclarations douanières, lettres de transport. Un client générait tout ça manuellement, avec 15% d'erreurs qui bloquaient les expéditions à la douane.",
    sections: [
      {
        heading: "Le problème",
        paragraphs: [
          "Chaque expédition transfrontalière nécessitait 5 à 7 documents différents, générés manuellement à partir des données de commande. Les erreurs de saisie — un code douanier mal orthographié, une valeur en mauvaise devise — bloquaient les colis à la douane, parfois pendant plusieurs jours.",
          "Le client perdait en moyenne 2 expéditions par semaine à cause d'erreurs documentaires, chacune coûtant entre 500 et 2000 euros en frais de retard et de stockage.",
        ],
      },
      {
        heading: "La solution",
        paragraphs: [
          "Nous avons construit un workflow qui génère automatiquement tous les documents requis à partir des données de commande, vérifie la cohérence, et les soumet aux plateformes douanières :",
        ],
        listItems: [
          "Récupère les données de commande depuis le système ERP du client",
          "Génère la facture commerciale avec les codes douaniers corrects (HS codes)",
          "Crée le certificat d'origine selon le pays de destination",
          "Produit la lettre de transport avec les bonnes informations de transporteur",
          "Vérifie la cohérence entre tous les documents via l'IA (montants, codes, adresses)",
          "Soumet les documents aux plateformes douanières électroniques automatiquement",
        ],
      },
      {
        heading: "Le résultat",
        paragraphs: [
          "Le taux d'erreur documentaire est passé de 15% à moins de 1%. Les expéditions bloquées à la douane sont passées de 2 par semaine à moins de 1 par mois. Le temps de préparation documentaire est passé de 45 minutes à 0 par expédition.",
          "Le client a pu développer son activité transfrontalier sans embaucher de personnel administratif supplémentaire, et ses partenaires logistiques ont noté une amélioration significative de la fluidité des expéditions.",
        ],
      },
    ],
    conclusion:
      "Les documents transfrontaliers sont le genre de processus où l'automatisation IA change la donne : les données existent déjà, les règles sont complexes mais définies, et chaque erreur a un coût direct et mesurable. En automatisant la génération et la vérification, on supprime le risque humain tout en accélérant le flux.",
  },
  {
    id: '12',
    slug: 'automatisation-tarifs-b2b',
    title: 'Automatisation des tarifs personnalisés pour le B2B manufacturing',
    excerpt:
      "Un fabricant B2B nous a contactés parce que ses tarifs personnalisés prenaient 3 jours à calculer et à envoyer. Chaque devis demandait de croiser 4 tableurs, 2 bases de données et le tarif de 12 fournisseurs. Voici l'automatisation que nous avons construite.",
    category: 'Logistique & B2B',
    date: '22 juillet 2026',
    readTime: '8 min',
    icon: DollarSign,
    tags: ['Tarifs', 'B2B', 'Manufacturing'],
    heroSubtitle:
      "Un fabricant B2B nous a contactés parce que ses tarifs personnalisés prenaient 3 jours à calculer et à envoyer. Chaque devis demandait de croiser 4 tableurs, 2 bases de données et le tarif de 12 fournisseurs. Les clients attendaient, et parfois allaient ailleurs.",
    sections: [
      {
        heading: "Le problème",
        paragraphs: [
          "Le client fabriquait des produits sur mesure pour des clients B2B. Chaque demande de devis suivait le même chemin : un commercial recevait la demande, consultait 4 tableurs différents pour les coûts matière, vérifiait les tarifs de 12 fournisseurs dans 2 bases de données, calculait la marge, appliquait les remises selon le volume et l'historique client, et rédigeait le devis.",
          "Résultat : 3 jours de délai moyen, des erreurs de calcul dans 8% des devis, et des clients qui allaient chez la concurrence pendant l'attente.",
        ],
      },
      {
        heading: "La solution",
        paragraphs: [
          "Nous avons construit un workflow qui automatise l'ensemble du calcul tarifaire, avec l'IA pour les cas qui demandent du jugement :",
        ],
        listItems: [
          "Le workflow récupère automatiquement les coûts matière en temps réel depuis les tableurs et bases de données",
          "Il interroge les API des 12 fournisseurs pour les tarifs actuels",
          "L'IA analyse l'historique client pour appliquer les bonnes remises selon le volume et la fidélité",
          "Le système calcule la marge optimale selon les règles métier du client",
          "L'IA rédige le devis personnalisé en français avec le détail des postes de coût",
          "Le devis est envoyé automatiquement au client et archivé dans le CRM",
        ],
      },
      {
        heading: "Le résultat",
        paragraphs: [
          "Le délai de devis est passé de 3 jours à 15 minutes. Le taux d'erreur de calcul est passé de 8% à 0. Le taux de conversion des devis a augmenté de 35% parce que les clients recevaient leur tarif avant la concurrence.",
          "Les commerciaux ne passent plus de temps à calculer — ils passent leur temps à négocier et construire la relation client, ce qui est exactement leur rôle.",
        ],
      },
    ],
    conclusion:
      "Les tarifs personnalisés B2B sont un cas parfait pour l'automatisation : beaucoup de données à croiser, des règles complexes mais définies, et un délai qui impacte directement la conversion. Quand le calcul devient instantané, le commercial reprend son vrai métier — convaincre, pas calculer.",
  },
];
