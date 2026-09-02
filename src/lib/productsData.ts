import {
  GraduationCap,
  Linkedin,
  FileCode2,
  FileText,
  Mail,
  Twitter,
  Music2,
  Video,
  Database,
  Calculator,
  Table2,
  type LucideIcon,
} from 'lucide-react';

export type ProductCategory = 'Domains' | 'Platform';

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductStat = {
  value: string;
  label: string;
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  category: ProductCategory;
  icon: LucideIcon;
  tags: string[];
  features: ProductFeature[];
  benefits: string[];
  stats: ProductStat[];
};

export const products: Product[] = [
  {
    slug: 'skool-automation-app',
    name: 'Skool Automation App',
    shortDescription:
      "Une plateforme tout-en-un pour les experts, coachs et créateurs. Skool aide à vendre des cours en ligne, gérer des communautés et automatiser le suivi des membres.",
    longDescription:
      "Bienvenue dans Skool Automation App, votre plateforme tout-en-un pour les experts, coachs et créateurs. Skool vous aide à vendre des cours en ligne, gérer des abonnements, lancer des programmes de coaching et bien plus. Intégré à Make.com, l'application optimise des tâches comme l'invitation de membres, l'automatisation des publications et l'engagement communautaire. Profitez d'une expérience fluide qui vous permet de vous concentrer sur la création de valeur et le développement d'une communauté dynamique.",
    category: 'Platform',
    icon: GraduationCap,
    tags: ['Cours en ligne', 'Communauté', 'Suivi membres'],
    features: [
      {
        title: 'Automatisation des publications',
        description:
          "Surveillez les nouveaux posts et déclenchez des workflows automatisés instantanément. Publiez automatiquement des posts pour garder votre communauté active. Récupérez et gérez les publications pour le reporting et l'automatisation.",
      },
      {
        title: 'Gestion des commentaires',
        description:
          "Publiez des commentaires et des réponses automatiquement dans vos workflows. Récupérez les commentaires des posts pour la modération et l'engagement.",
      },
      {
        title: 'Fichiers et médias',
        description:
          "Téléversez des documents et des médias directement via des workflows automatisés.",
      },
      {
        title: 'Gestion des utilisateurs et de la communauté',
        description:
          "Recherchez des utilisateurs dans votre communauté pour des actions ciblées. Suivez les utilisateurs approuvés et déclenchez des workflows d'intégration. Automatisez la gestion des membres et la modération. Invitez automatiquement de nouveaux utilisateurs dans votre communauté.",
      },
      {
        title: 'Gestion des cours',
        description:
          "Récupérez les cours disponibles et les ressources d'apprentissage communautaires. Accordez automatiquement l'accès aux cours selon les conditions du workflow.",
      },
      {
        title: 'Automatisation de la messagerie',
        description:
          "Surveillez les nouveaux messages et les messages non lus en temps réel. Configurez des canaux de communication dédiés automatiquement. Envoyez des messages personnalisés via des workflows automatisés. Récupérez les messages récents et l'historique des conversations.",
      },
      {
        title: 'Capacités de la plateforme',
        description:
          "Connectez les actions Skool avec les workflows Make, n8n ou Zapier. Automatisez les posts, commentaires, messages et interactions des membres. Gérez efficacement les utilisateurs, cours et contenu à travers les communautés.",
      },
    ],
    benefits: [
      "Gestion communautaire simplifiée grâce à l'automatisation de l'engagement et de la messagerie",
      "Gain de temps et amélioration de la productivité pour les équipes",
      "Engagement cohent à travers toutes les communautés Skool",
      "Accès aux cours automatisé selon des conditions personnalisables",
      "Intégration native avec Make, n8n et Zapier",
    ],
    stats: [
      { value: '500+', label: 'Téléchargements' },
      { value: '98%', label: 'Utilisateurs satisfaits' },
      { value: '3x', label: 'Temps économisé' },
    ],
  },
  {
    slug: 'linkedin-advanced-app',
    name: 'LinkedIn Advanced App',
    shortDescription:
      "Automatisez vos flux professionnels LinkedIn. Cette application aide les entreprises et professionnels à rationaliser leurs activités de mise en réseau et de prospection.",
    longDescription:
      "Automatisez vos workflows professionnels avec LinkedIn Advanced App. Conçue pour rationaliser les activités LinkedIn, cette application aide les entreprises et professionnels à optimiser leur mise en réseau, leur prospection et leur engagement. Connectez vos actions LinkedIn à vos workflows Make pour gagner en efficacité et en cohérence.",
    category: 'Domains',
    icon: Linkedin,
    tags: ['LinkedIn', 'Prospection', 'Réseau'],
    features: [
      {
        title: 'Automatisation du réseau',
        description:
          "Gérez automatiquement les connexions, les invitations et les interactions avec votre réseau professionnel.",
      },
      {
        title: 'Prospection automatisée',
        description:
          "Identifiez et contactez des prospects qualifiés via des workflows ciblés et personnalisés.",
      },
      {
        title: 'Publication et engagement',
        description:
          "Planifiez et publiez du contenu, récupérez les commentaires et les réactions pour un suivi automatisé.",
      },
      {
        title: 'Messagerie LinkedIn',
        description:
          "Surveillez et répondez aux messages automatiquement. Configurez des séquences de suivi pour vos prospects.",
      },
      {
        title: 'Intégration multi-plateformes',
        description:
          "Connectez les actions LinkedIn avec Make, n8n ou Zapier pour des workflows cross-plateformes.",
      },
    ],
    benefits: [
      "Prospection rationalisée et automatisée",
      "Engagement régulier avec votre réseau professionnel",
      "Gain de temps sur les tâches répétitives de mise en réseau",
      "Suivi structuré des conversations et opportunités",
    ],
    stats: [
      { value: '300+', label: 'Téléchargements' },
      { value: '95%', label: 'Utilisateurs satisfaits' },
      { value: '4x', label: 'Temps économisé' },
    ],
  },
  {
    slug: '0codeutil',
    name: '0CodeUtil',
    shortDescription:
      "Simplifiez le traitement des données avec une boîte à outils tout-en-un pour la conversion, la validation et la manipulation de données.",
    longDescription:
      "Simplifiez le traitement des données avec 0CodeUtil, une boîte à outils tout-en-un conçue pour la conversion, la validation et la manipulation de données. Des transformations de texte aux opérations complexes, 0CodeUtil regroupe tous les utilitaires dont vous avez besoin pour traiter vos données efficacement, sans écrire une seule ligne de code.",
    category: 'Platform',
    icon: FileCode2,
    tags: ['Conversion', 'Validation', 'Manipulation'],
    features: [
      {
        title: 'Conversion de données',
        description:
          "Convertissez des données entre formats courants (JSON, CSV, XML, texte) en quelques clics.",
      },
      {
        title: 'Validation automatique',
        description:
          "Validez la structure et le contenu de vos données selon des règles personnalisables.",
      },
      {
        title: 'Manipulation de texte',
        description:
          "Transformez, nettoyez et formatez du texte avec des opérations prédéfinies ou personnalisées.",
      },
      {
        title: 'Opérations par lot',
        description:
          "Traitez de grands volumes de données en parallèle pour des résultats rapides et fiables.",
      },
      {
        title: 'Intégration workflow',
        description:
          "Intégrez 0CodeUtil dans vos scénarios Make, n8n ou Zapier pour un traitement de données sans couture.",
      },
    ],
    benefits: [
      "Traitement de données sans code",
      "Réduction des erreurs de manipulation manuelle",
      "Gain de temps sur les conversions et validations",
      "Boîte à outils complète en un seul outil",
    ],
    stats: [
      { value: '200+', label: 'Téléchargements' },
      { value: '97%', label: 'Utilisateurs satisfaits' },
      { value: '5x', label: 'Temps économisé' },
    ],
  },
  {
    slug: 'doccrafter',
    name: 'DocCrafter',
    shortDescription:
      "Passez vos flux documentaires au niveau supérieur. DocCrafter simplifie, automatise et améliore la génération et la gestion de documents.",
    longDescription:
      "Passez vos workflows documentaires au niveau supérieur avec DocCrafter. Conçu pour simplifier, automatiser et améliorer la génération et la gestion de documents, DocCrafter permet aux équipes de produire des documents fiables à grande échelle, tout en réduisant les tâches manuelles et les erreurs.",
    category: 'Platform',
    icon: FileText,
    tags: ['Documents', 'Génération', 'Automatisation'],
    features: [
      {
        title: 'Génération de documents',
        description:
          "Créez des documents à partir de modèles prédéfinis avec un remplissage automatique des données.",
      },
      {
        title: 'Gestion de versions',
        description:
          "Suivez et gérez les versions de vos documents automatiquement dans vos workflows.",
      },
      {
        title: 'Conversion de formats',
        description:
          "Convertissez des documents entre formats (PDF, DOCX, HTML) automatiquement.",
      },
      {
        title: 'Récupération et archivage',
        description:
          "Récupérez et archivez vos documents générés dans vos systèmes de stockage préférés.",
      },
      {
        title: 'Intégration workflow',
        description:
          "Intégrez DocCrafter dans Make, n8n ou Zapier pour une automatisation documentaire de bout en bout.",
      },
    ],
    benefits: [
      "Production de documents fiables et à grande échelle",
      "Réduction des tâches manuelles et des erreurs",
      "Cycle de vie documentaire automatisé",
      "Intégration native avec vos outils d'automatisation",
    ],
    stats: [
      { value: '150+', label: 'Téléchargements' },
      { value: '96%', label: 'Utilisateurs satisfaits' },
      { value: '4x', label: 'Temps économisé' },
    ],
  },
  {
    slug: 'gmail-advanced-app',
    name: 'Gmail Advanced App',
    shortDescription:
      "Gérez vos e-mails de manière avancée. Cette application aide les entreprises et équipes à automatiser le tri, le suivi et les réponses aux e-mails.",
    longDescription:
      "Passez la gestion de vos e-mails au niveau supérieur avec Gmail Advanced App. Cette application aide les entreprises et équipes à automatiser le tri, le suivi et les réponses aux e-mails, pour une boîte de réception toujours maîtrisée et des temps de réponse optimisés.",
    category: 'Domains',
    icon: Mail,
    tags: ['Gmail', 'Tri', 'Réponses auto'],
    features: [
      {
        title: 'Tri automatique',
        description:
          "Catégorisez et étiquetez automatiquement les e-mails entrants selon des règles personnalisables.",
      },
      {
        title: 'Réponses automatisées',
        description:
          "Générez et envoyez des réponses automatiques selon le contenu et le contexte des e-mails.",
      },
      {
        title: 'Suivi des conversations',
        description:
          "Surveillez les fils de conversation et déclenchez des actions selon leur état.",
      },
      {
        title: 'Gestion des pièces jointes',
        description:
          "Extrayez et stockez automatiquement les pièces jointes dans vos systèmes de fichiers.",
      },
      {
        title: 'Intégration multi-plateformes',
        description:
          "Connectez Gmail à Make, n8n ou Zapier pour des workflows e-mail complets.",
      },
    ],
    benefits: [
      "Boîte de réception maîtrisée en permanence",
      "Temps de réponse optimisés",
      "Réduction des tâches de tri manuel",
      "Suivi structuré des conversations",
    ],
    stats: [
      { value: '400+', label: 'Téléchargements' },
      { value: '94%', label: 'Utilisateurs satisfaits' },
      { value: '3x', label: 'Temps économisé' },
    ],
  },
  {
    slug: 'x-advanced-app',
    name: 'X Advanced App',
    shortDescription:
      "Passez votre stratégie sur X (Twitter) au niveau supérieur. Conçue pour les créateurs, marketeurs et marques, cette application simplifie la publication et l'engagement.",
    longDescription:
      "Passez votre stratégie sur X (Twitter) au niveau supérieur avec X Advanced App. Conçue pour les créateurs, marketeurs et marques, cette application simplifie la publication, l'engagement et l'analyse de contenu, pour une présence sociale cohérente et performante.",
    category: 'Domains',
    icon: Twitter,
    tags: ['X', 'Publication', 'Engagement'],
    features: [
      {
        title: 'Publication automatisée',
        description:
          "Planifiez et publiez des posts automatiquement selon un calendrier défini.",
      },
      {
        title: 'Engagement automatisé',
        description:
          "Répondez, repartagez et interagissez avec votre audience via des workflows automatisés.",
      },
      {
        title: 'Surveillance des mentions',
        description:
          "Surveillez les mentions de votre marque et déclenchez des alertes ou actions automatiques.",
      },
      {
        title: 'Analyse de performance',
        description:
          "Récupérez et analysez les métriques de vos posts pour optimiser votre stratégie.",
      },
      {
        title: 'Intégration multi-plateformes',
        description:
          "Connectez X à Make, n8n ou Zapier pour des workflows sociaux complets.",
      },
    ],
    benefits: [
      "Présence sociale cohérente et planifiée",
      "Engagement automatisé avec l'audience",
      "Veille de marque en temps réel",
      "Décisions basées sur des métriques concrètes",
    ],
    stats: [
      { value: '250+', label: 'Téléchargements' },
      { value: '93%', label: 'Utilisateurs satisfaits' },
      { value: '3x', label: 'Temps économisé' },
    ],
  },
  {
    slug: 'tiktok-advanced-app',
    name: 'TikTok Advanced App',
    shortDescription:
      "Passez votre stratégie TikTok au niveau supérieur. Cette application simplifie la publication, la planification et l'analyse de contenu.",
    longDescription:
      "Passez votre stratégie TikTok au niveau supérieur avec TikTok Advanced App. Cette application simplifie la publication, la planification et l'analyse de contenu, pour une présence créative et engageante sur l'une des plateformes les plus dynamiques.",
    category: 'Domains',
    icon: Music2,
    tags: ['TikTok', 'Publication', 'Planification'],
    features: [
      {
        title: 'Publication planifiée',
        description:
          "Planifiez et publiez des vidéos TikTok automatiquement selon un calendrier stratégique.",
      },
      {
        title: 'Gestion des commentaires',
        description:
          "Récupérez et répondez aux commentaires automatiquement pour un engagement continu.",
      },
      {
        title: 'Analyse de contenu',
        description:
          "Récupérez les métriques de vos vidéos pour optimiser votre stratégie de contenu.",
      },
      {
        title: 'Surveillance des tendances',
        description:
          "Identifiez les tendances et déclenchez des actions de contenu automatiques.",
      },
      {
        title: 'Intégration multi-plateformes',
        description:
          "Connectez TikTok à Make, n8n ou Zapier pour des workflows créatifs complets.",
      },
    ],
    benefits: [
      "Publication stratégique et planifiée",
      "Engagement continu avec l'audience",
      "Stratégie basée sur les données",
      "Veille de tendances automatisée",
    ],
    stats: [
      { value: '180+', label: 'Téléchargements' },
      { value: '92%', label: 'Utilisateurs satisfaits' },
      { value: '3x', label: 'Temps économisé' },
    ],
  },
  {
    slug: 'loom-advanced-app',
    name: 'Loom Advanced App',
    shortDescription:
      "Passez votre flux vidéo au niveau supérieur. Conçue pour les professionnels, équipes et créateurs de contenu, cette application automatise la gestion des vidéos Loom.",
    longDescription:
      "Passez votre flux vidéo au niveau supérieur avec Loom Advanced App. Conçue pour les professionnels, équipes et créateurs de contenu, cette application automatise la gestion des vidéos Loom, de la publication au partage, pour une communication vidéo fluide et efficace.",
    category: 'Domains',
    icon: Video,
    tags: ['Loom', 'Vidéo', 'Automatisation'],
    features: [
      {
        title: 'Gestion des vidéos',
        description:
          "Récupérez, organisez et gérez vos vidéos Loom automatiquement dans vos workflows.",
      },
      {
        title: 'Partage automatisé',
        description:
          "Partagez automatiquement vos vidéos avec les bonnes personnes ou canaux.",
      },
      {
        title: 'Surveillance des vues',
        description:
          "Suivez les vues et les interactions de vos vidéos pour un reporting automatisé.",
      },
      {
        title: 'Transcription automatique',
        description:
          "Récupérez les transcriptions de vos vidéos pour un indexage et une recherche facilités.",
      },
      {
        title: 'Intégration multi-plateformes',
        description:
          "Connectez Loom à Make, n8n ou Zapier pour des workflows vidéo complets.",
      },
    ],
    benefits: [
      "Communication vidéo fluide et automatisée",
      "Partage ciblé sans intervention manuelle",
      "Reporting de vues automatisé",
      "Transcriptions exploitables automatiquement",
    ],
    stats: [
      { value: '120+', label: 'Téléchargements' },
      { value: '95%', label: 'Utilisateurs satisfaits' },
      { value: '2x', label: 'Temps économisé' },
    ],
  },
  {
    slug: 'microsoft-dynamics-365-crm-automation',
    name: 'Microsoft Dynamics 365 CRM Automation',
    shortDescription:
      "Automatisez vos flux CRM avec Microsoft Dynamics 365. Cette application simplifie les tâches répétitives de gestion de relation client.",
    longDescription:
      "Automatisez vos workflows CRM avec Microsoft Dynamics 365 CRM Automation. Conçue pour simplifier les tâches répétitives de gestion de relation client, cette application aide les équipes commerciales à gagner en efficacité et à se concentrer sur les relations à forte valeur ajoutée.",
    category: 'Domains',
    icon: Database,
    tags: ['Dynamics 365', 'CRM', 'Tâches répétitives'],
    features: [
      {
        title: 'Gestion des contacts',
        description:
          "Créez, mettez à jour et organisez automatiquement vos contacts dans Dynamics 365.",
      },
      {
        title: 'Automatisation des opportunités',
        description:
          "Suivez et faites progresser les opportunités commerciales via des workflows automatisés.",
      },
      {
        title: 'Synchronisation des données',
        description:
          "Synchronisez les données entre Dynamics 365 et vos autres outils métier automatiquement.",
      },
      {
        title: 'Reporting automatisé',
        description:
          "Générez des rapports CRM automatiques pour un suivi commercial en temps réel.",
      },
      {
        title: 'Intégration multi-plateformes',
        description:
          "Connectez Dynamics 365 à Make, n8n ou Zapier pour des workflows CRM complets.",
      },
    ],
    benefits: [
      "Équipes commerciales plus efficaces",
      "Relations clients suivies sans effort manuel",
      "Données CRM toujours à jour",
      "Reporting commercial en temps réel",
    ],
    stats: [
      { value: '100+', label: 'Téléchargements' },
      { value: '96%', label: 'Utilisateurs satisfaits' },
      { value: '4x', label: 'Temps économisé' },
    ],
  },
  {
    slug: 'microsoft-business-central-automation',
    name: 'Microsoft Business Central Automation',
    shortDescription:
      "Automatisez vos flux financiers et opérationnels avec Microsoft Business Central. Cette application rationalise les paiements, factures et enregistrements.",
    longDescription:
      "Automatisez vos workflows financiers et opérationnels avec Microsoft Business Central Automation. Cette application rationalise les paiements, factures et enregistrements, pour une gestion financière fiable et sans effort manuel répétitif.",
    category: 'Domains',
    icon: Calculator,
    tags: ['Business Central', 'Factures', 'Paiements'],
    features: [
      {
        title: 'Gestion des factures',
        description:
          "Créez et suivez automatiquement les factures dans Business Central.",
      },
      {
        title: 'Automatisation des paiements',
        description:
          "Enregistrez et rapprochez les paiements automatiquement dans vos workflows.",
      },
      {
        title: 'Synchronisation comptable',
        description:
          "Synchronisez les écritures comptables entre Business Central et vos autres systèmes.",
      },
      {
        title: 'Reporting financier',
        description:
          "Générez des rapports financiers automatiques pour un suivi en temps réel.",
      },
      {
        title: 'Intégration multi-plateformes',
        description:
          "Connectez Business Central à Make, n8n ou Zapier pour des workflows financiers complets.",
      },
    ],
    benefits: [
      "Gestion financière fiable et automatisée",
      "Réduction des saisies manuelles",
      "Données financières toujours cohérentes",
      "Reporting en temps réel",
    ],
    stats: [
      { value: '90+', label: 'Téléchargements' },
      { value: '97%', label: 'Utilisateurs satisfaits' },
      { value: '5x', label: 'Temps économisé' },
    ],
  },
  {
    slug: 'google-sheets-custom-app',
    name: 'Google Sheets Custom App',
    shortDescription:
      "Optimisez vos flux d'automatisation avec cette application Google Sheets personnalisée. Conçue pour réduire les opérations excessives dans les scénarios Make.",
    longDescription:
      "Optimisez vos flux d'automatisation avec Google Sheets Custom App. Conçue pour réduire les opérations excessives dans les scénarios Make, cette application permet de traiter les données par lot, de valider des cellules et de manipuler des feuilles entières en une seule opération, pour des workflows plus rapides et plus économiques.",
    category: 'Platform',
    icon: Table2,
    tags: ['Google Sheets', 'Batch', 'Optimisation'],
    features: [
      {
        title: 'Opérations par lot',
        description:
          "Lisez, écrivez et mettez à jour des plages de cellules en une seule opération pour réduire la consommation d'opérations.",
      },
      {
        title: 'Validation de données',
        description:
          "Validez automatiquement le contenu des cellules selon des règles personnalisées avant intégration.",
      },
      {
        title: 'Manipulation de feuilles',
        description:
          "Créez, dupliquez et organisez des feuilles entières automatiquement dans vos workflows.",
      },
      {
        title: 'Recherche et filtrage',
        description:
          "Recherchez et filtrez des données dans vos feuilles pour des actions ciblées et efficaces.",
      },
      {
        title: 'Intégration workflow',
        description:
          "Intégrez Google Sheets Custom App dans Make, n8n ou Zapier pour des workflows optimisés.",
      },
    ],
    benefits: [
      "Réduction de la consommation d'opérations dans Make",
      "Traitement par lot rapide et économique",
      "Données validées avant intégration",
      "Workflows plus rapides et plus fiables",
    ],
    stats: [
      { value: '300+', label: 'Téléchargements' },
      { value: '98%', label: 'Utilisateurs satisfaits' },
      { value: '6x', label: 'Temps économisé' },
    ],
  },
];
