# Cahier des charges — Axagenia_bolt_Lab_v1

**Date de rédaction :** 30 août 2026  
**Statut :** état des lieux du projet existant ; aucune validation métier supplémentaire présumée.  
**Sources :** `README.md`, `.bolt/config.json`, `package.json`, `src/App.tsx`, les pages et données de `src/`, les migrations de `supabase/migrations/`.

Les six documents de `docs/` reprennent les thèmes du dossier modèle, mais leurs constats proviennent exclusivement de ce dépôt. Les choix, dates de validation et contraintes propres au modèle ne sont pas reconduits.

## Légende des statuts

- **Constaté :** présent dans le code, les fichiers ou l'historique local.
- **Affiché :** message commercial présent dans l'interface ; sa présence ne prouve pas sa véracité métier.
- **À vérifier :** information non démontrée par le dépôt ou comportement non testé en exécution.
- **Proposé :** critère de travail issu de l'examen de ce projet, sans décision utilisateur présumée.

## 1. Présentation du projet

Le dépôt `Axagenia_bolt_Lab_v1` contient le site francophone AXAGENIA, consacré à l'automatisation, au No-Code et à l'IA appliqués aux processus métier. Le README propose une ouverture dans Bolt ; `.bolt/config.json` identifie le modèle `bolt-vite-react-ts`.

L'application est une SPA React avec Vite, TypeScript, Tailwind CSS et React Router. Les contenus sont embarqués dans les composants et des tableaux TypeScript. Deux formulaires transmettent des demandes à Supabase.

## 2. Objectifs pédagogiques

Le nom du dépôt comporte `Lab` et son chemin local se trouve sous `apprentissage`. Ces indices situent le contexte de travail, mais aucun programme pédagogique, découpage en étapes ou niveau d'autonomie attendu n'est formalisé dans les fichiers examinés. Ne pas leur attribuer ceux du projet modèle.

## 3. Objectifs commerciaux

**Déduits des pages et des actions disponibles :** présenter les compétences d'AXAGENIA, expliquer sa méthode, faire découvrir les services et produits, informer au moyen d'articles et recueillir des demandes de diagnostic ou d'information produit.

La conversion implémentée est l'insertion d'une demande dans `diagnostic_requests`. Le dépôt ne contient ni suivi analytique de conversion, ni objectif chiffré de trafic ou de chiffre d'affaires.

## 4. Utilisateurs et décideurs ciblés

La page Diagnostic cible explicitement les PME françaises de services B2B, avec un processus concret et chronophage et un interlocuteur impliqué dans la décision. Les pages Services, Produits, À propos et les articles couvrent aussi e-commerce, marketing, support, finance et logistique. La cohérence de cet élargissement reste à arbitrer.

Autres visiteurs servis par l'interface : personnes explorant un produit, lecteurs des articles, candidats passant par Carrières et visiteurs intéressés par les ressources d'apprentissage annoncées.

## 5. Problèmes à résoudre

L'accueil décrit ressaisies, multiplication de tableurs et d'e-mails, lenteurs, erreurs et oublis. Les solutions présentées concernent la circulation des données entre outils, les tâches répétitives et la fiabilité des workflows. Il s'agit du discours du site, pas de problèmes mesurés auprès de clients dans ce dépôt.

## 6. Proposition de valeur observée

Le titre principal est « Automatisez ce qui ralentit vos équipes ». AXAGENIA présente une réalisation de workflows No-Code, avec l'IA lorsqu'elle apporte une utilité réelle, complétée par des tests, de la documentation et de la formation.

Voir [le positionnement](positioning.md) pour les limites et contradictions éditoriales.

## 7. Services et produits présents

- Trois familles décrites dans Méthode : diagnostic initial ; conception et implémentation ; accompagnement et formation.
- Huit fiches de services : workflows IA, processus métier, Make.com, n8n, agents IA/GPT, assistants vocaux/chatbots, Monday.com et Zapier.
- Onze fiches de produits, avec catégories `Domains` et `Platform`, caractéristiques, bénéfices et statistiques.
- Douze articles dans la rubrique Études de cas.

Ces inventaires décrivent des contenus affichables. Le dépôt ne démontre ni la disponibilité opérationnelle des produits, ni la validation commerciale des chiffres publiés.

## 8. Parcours principal

Accueil → Services ou Méthode → Diagnostic → validation locale → insertion Supabase → `/diagnostic/confirmation`.

Un second parcours de conversion existe : Produits → fiche produit → formulaire intégré → même table Supabase et même confirmation. Aucun achat ou abonnement n'est exécuté par l'application.

## 9. Fonctionnalités de la version actuelle

Navigation desktop et mobile, pages de présentation, catalogues de services et produits, filtres et recherche locale des produits et articles, fiches détaillées, FAQ, carrousels d'accueil, formulaires, confirmation, pages légales et page introuvable.

`/apprendre-ia` reste une page « Bientôt disponible ». Carrières possède une page dédiée mais ses appels à candidature pointent vers Diagnostic.

## 10. Pages et URL

`/`, `/services`, `/services/:slug`, `/methode`, `/a-propos`, `/diagnostic`, `/diagnostic/confirmation`, `/produits`, `/produits/:slug`, `/etudes-de-cas`, `/etudes-de-cas/:slug`, `/carrieres`, `/apprendre-ia`, `/mentions-legales`, `/politique-confidentialite` et une route de repli `*`.

L'inventaire détaillé et les slugs figurent dans [l'architecture de l'information](information-architecture.md).

## 11. Contenus et ressources disponibles

Les textes sont dans `src/pages/` et `src/lib/*Data.ts`. `public/` contient des visuels WebP de pages et solutions, des PNG et `favicon.svg`. Les polices Inter et Space Grotesk sont chargées depuis Google Fonts dans `index.html`.

Aucun CMS ni dossier de justificatifs commerciaux n'est présent. La provenance et les droits des visuels ne sont pas établis par ces fichiers. Le dossier modèle consulté contient uniquement six fichiers Markdown : aucun dossier `references/` n'est créé par analogie.

## 12. Identité visuelle constatée

Marque AXAGENIA, signature « Automatisation sans détour », pictogramme éclair, vert principal `#22a882`, accent orange `#f98c07`, surfaces claires et sections sombres. Titres en Space Grotesk et texte courant en Inter. Le conteneur partagé est limité à 1 200 pixels.

Ce sont les choix présents dans le CSS et les composants ; une validation formelle de charte n'est pas documentée.

## 13. Exigences fonctionnelles observées

### Navigation et contenu

Les catalogues utilisent les données locales, et les fiches recherchent un élément par slug. Un slug inconnu renvoie au catalogue correspondant. Les pages inconnues hors de ces familles affichent `NotFoundPage`.

### Formulaires

Les deux formulaires collectent prénom, nom, e-mail, entreprise, fonction, message et consentement. Diagnostic impose un message d'au moins 20 caractères après suppression des espaces en début et fin. Le formulaire produit rend le message facultatif et fournit un texte par défaut mentionnant le produit.

Le bouton est désactivé pendant l'envoi. Une erreur conserve les champs en mémoire et affiche un message générique. La réussite de l'insertion déclenche la navigation vers la confirmation.

### Architecture fonctionnelle

Le navigateur écrit directement dans Supabase via `src/lib/supabase.ts`. Aucun envoi d'e-mail, outil de planification ou écran interne de traitement des demandes n'est implémenté dans le dépôt.

## 14. Exigences non fonctionnelles

**Constaté :** classes responsive, lien d'évitement, styles de focus, labels et attributs ARIA de formulaires, contrôle TypeScript strict et scripts de lint/build.

**À vérifier :** rendu sur différentes tailles, parcours intégral au clavier, performances réelles, accès direct aux routes sur l'hébergement, fonctionnement des formulaires avec une configuration Supabase réelle. Un build réussi ne constitue pas une recette fonctionnelle.

Les résultats des commandes locales sont consignés dans [le socle technique](technical-baseline.md).

## 15. Données personnelles implémentées

La table SQL `diagnostic_requests` ajoute un identifiant UUID et `created_at` aux sept champs des formulaires. Aucun champ téléphone, budget ou pièce jointe n'existe dans ces interfaces. Le texte libre peut néanmoins contenir des informations non souhaitées ; son contenu n'est pas filtré dans le code.

La migration de commentaires des études de cas est suivie d'une migration supprimant cette table. L'état réel d'une base distante n'a pas été inspecté.

## 16. Sécurité et textes de confidentialité : écarts constatés

- La politique de confidentialité parle d'une transmission à une adresse professionnelle ; le code insère dans Supabase sans envoi d'e-mail identifié.
- Les politiques SQL autorisent les rôles `anon` et `authenticated` à insérer avec `consent = true`. Lecture, modification et suppression sont accordées à tout le rôle `authenticated`, sans contrôle d'appartenance à l'équipe dans ces expressions SQL.
- Les validations de format, de champs non vides et de longueur se trouvent côté navigateur ; le SQL ne reproduit pas toutes ces règles.
- Aucune limitation de fréquence ou protection anti-abus n'est visible dans le dépôt.
- L'identité administrative, l'hébergeur et la durée de conservation sont encore annoncés comme à compléter dans les pages.

Ces constats ne sont pas un audit juridique ni une vérification de la configuration distante. Ils interdisent de présenter le fonctionnement et les accès comme validés sur la seule base du code.

## 17. Éléments non implémentés

Paiement, panier, souscription effective aux produits, espace client, back-office, connexion utilisateur dans l'interface, prise de rendez-vous, envoi automatique d'e-mail, candidature dédiée, plateforme d'apprentissage et commentaires d'articles dans l'interface actuelle.

Leur absence ne vaut pas décision de les exclure définitivement.

## 18. Critères d'acceptation proposés

| Critère | Situation à la rédaction |
|---|---|
| Toutes les routes et fiches inventoriées correspondent au code | Vérification statique possible dans `App.tsx` et les tableaux de données |
| Formulaires valides et invalides testés sans exposer de données réelles | À réaliser sur un environnement de test configuré |
| Insertion, refus d'accès et erreurs de service vérifiés | Non vérifiés sur Supabase distant |
| Lint, types et build contrôlés séparément | Résultats dans `technical-baseline.md` |
| Textes de confidentialité alignés sur le traitement réel | Écart existant |
| Chiffres, prix, disponibilité produit et preuves validés | Justificatifs non trouvés |
| Navigation clavier, mobile et liens directs vérifiés | Recette navigateur non réalisée ici |

## 19. Hypothèses restant à valider

Portée commerciale des onze produits ; authenticité des résultats et articles présentés comme cas ; ciblage B2B ou multisecteur ; fonctionnement de `contact@axagenia.fr` ; traitement humain des demandes ; qualification des comptes Supabase autorisés ; environnement réellement publié.

## 20. Décisions restant ouvertes

Aligner les contenus entre Accueil, À propos, Méthode, Produits et Diagnostic ; préciser la tarification ; choisir le parcours candidat ; finaliser les textes administratifs et le traitement des données ; confirmer l'hébergement et sa configuration SPA ; décider d'une stratégie de tests et de CI.

La présente intervention ajoute uniquement la documentation : aucune de ces décisions n'est exécutée et aucun code applicatif n'est corrigé.
