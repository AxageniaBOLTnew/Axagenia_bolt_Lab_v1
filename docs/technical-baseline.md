# Socle technique — Axagenia_bolt_Lab_v1

## 1. Statut du document

Relevé du dépôt et de l'environnement local effectué le **30 août 2026**. Les commandes exécutées sont distinguées des procédures proposées. Le code actuel fait foi ; ce document ne reprend pas les versions, l'historique ou les décisions techniques du projet modèle.

Sources : fichiers de configuration, `src/`, `supabase/migrations/`, `package-lock.json`, `npm ls --depth=0`, Git et résultats des commandes locales.

## 2. Dates établies

Le premier commit accessible est daté du 30 août 2026. Les noms des migrations portent les dates des 25 et 26 août 2026. Ces éléments ne démontrent pas la date exacte de création initiale dans Bolt. La documentation est créée le 30 août 2026.

## 3. Chemin local du projet

```text
D:\1. PLT\17. BuildAppWithIA\BOLTnew\Projects\apprentissage\Axagenia_bolt_Lab_v1
```

Le dossier parent `apprentissage` contient ce projet. Le dossier `docs/` est créé à la racine du dépôt, au même niveau que `src/`, et non dans le projet modèle.

## 4. Objectif du socle actuel

Exécuter une vitrine commerciale francophone React, avec navigation côté client, contenus locaux, catalogues et formulaires connectés à Supabase. L'application possède déjà des pages métier complètes : ce n'est pas une simple page de démarrage.

## 5. Versions locales détectées

| Outil | Version | Commande exécutée |
|---|---|---|
| Node.js | `20.19.0` | `node --version` |
| npm | `10.8.2` | `npm --version` |
| Git | `2.55.0.windows.3` | `git --version` |

`package.json` ne définit pas de champ `engines` ni de version de gestionnaire via `packageManager`. Ces versions décrivent cette machine ; elles ne constituent pas une politique de compatibilité validée.

## 6. Dépendances déclarées et installées

Versions installées relevées avec `npm ls --depth=0` ; ne pas confondre les plages de `package.json` avec les versions résolues.

| Paquet | Plage déclarée | Version installée |
|---|---|---|
| React | `^18.3.1` | `18.3.1` |
| React DOM | `^18.3.1` | `18.3.1` |
| React Router DOM | `^6.30.6` | `6.30.6` |
| Supabase JS | `^2.57.4` | `2.57.4` |
| Lucide React | `^0.446.0` | `0.446.0` |
| Vite | `^5.4.2` | `5.4.8` |
| Plugin React Vite | `^4.3.1` | `4.3.2` |
| TypeScript | `^5.5.3` | `5.6.3` |
| Tailwind CSS | `^3.4.1` | `3.4.17` |
| ESLint | `^9.9.1` | `9.12.0` |
| typescript-eslint | `^8.3.0` | `8.8.1` |
| PostCSS | `^8.4.35` | `8.4.47` |
| Autoprefixer | `^10.4.18` | `10.4.20` |

`package-lock.json` utilise `lockfileVersion: 3` et contient 330 entrées dans `packages`, racine comprise. Le nom npm reste `vite-react-typescript-starter`, version `0.0.0`, avec `private: true` et `type: module`. Le nom du dépôt est distinct de ce nom technique.

## 7. Initialisation connue

`.bolt/config.json` indique `bolt-vite-react-ts` et le README fournit un lien d'ouverture dans Bolt. La commande exacte de génération n'est pas enregistrée dans les sources examinées. Aucune commande d'initialisation n'a été exécutée pendant cette intervention et aucun framework n'a été remplacé.

## 8. Préservation du projet

Avant intervention, l'arbre de travail Git était propre et `docs/` n'existait pas. Les six documents ont été ajoutés sans remplacer les fichiers du site. Le dossier modèle contient six fichiers directement sous `docs/`, sans sous-dossier : cette structure est reproduite. Aucun dossier `references/` n'est introduit sans source correspondante.

Le build a régénéré `dist/`, ignoré par Git. Les dépendances déjà présentes ont été utilisées, sans installation ni mise à jour.

## 9. Choix techniques constatés

- SPA React montée depuis `src/main.tsx`, routage `BrowserRouter` dans `App.tsx`.
- Vite avec plugin React et alias `@` pointant vers `src/`.
- TypeScript strict ; `noUnusedLocals` et `noUnusedParameters` désactivés dans les configurations TypeScript.
- Tailwind 3 via PostCSS, palette personnalisée et CSS partagé.
- Contenus embarqués dans les pages et tableaux TypeScript ; aucun CMS identifié.
- Client Supabase créé au niveau du module, utilisé directement depuis deux formulaires.
- Icônes Lucide ; polices Google Fonts chargées par `index.html`.

Les outils Make, n8n, Zapier et Monday.com sont des sujets commerciaux des pages, pas des dépendances applicatives ni des workflows livrés dans ce dépôt.

## 10. Structure actuelle

```text
Axagenia_bolt_Lab_v1/
├── .bolt/                 configuration et prompt liés à Bolt
├── .git/                  dépôt local
├── docs/                  six documents créés ici
├── public/                favicon et images
├── src/
│   ├── components/
│   │   ├── layout/        Layout, Header, Footer
│   │   └── ui/            Button, Section, Container, Eyebrow
│   ├── lib/               données, types et client Supabase
│   ├── pages/             16 composants de pages
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── supabase/migrations/   trois migrations SQL
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── README.md
├── .gitignore
├── node_modules/          local, ignoré
└── dist/                  sortie de build, ignorée
```

## 11. Rôle des principaux fichiers

| Fichier ou dossier | Responsabilité |
|---|---|
| `src/App.tsx` | 12 routes fixes, 3 routes à slug et un repli |
| `src/components/layout/Layout.tsx` | Header, footer, zone principale et défilement en haut |
| `src/lib/servicesData.ts` | 8 services |
| `src/lib/productsData.ts` | 11 produits |
| `src/lib/caseStudiesData.ts` | 12 articles et catégories |
| `src/lib/supabase.ts` | Client partagé construit à partir de l'environnement Vite |
| `src/lib/types.ts` | Types `DiagnosticRequest` et `DiagnosticResponse` ; ce dernier ne constitue pas une API serveur |
| `src/pages/DiagnosticPage.tsx` | Validation et insertion d'une demande générale |
| `src/pages/ProductDetailPage.tsx` | Fiche, tarifs partagés et formulaire de demande produit |
| `supabase/migrations/` | Schéma et politiques SQL versionnés, non appliqués pendant cette intervention |
| `index.html` | Point d'entrée HTML, métadonnées et polices |

## 12. Scripts npm disponibles

| Script | Commande définie | Usage |
|---|---|---|
| `dev` | `vite` | Serveur de développement |
| `build` | `vite build` | Production de `dist/` |
| `lint` | `eslint .` | Analyse statique |
| `preview` | `vite preview` | Aperçu local du build |
| `typecheck` | `tsc --noEmit -p tsconfig.app.json` | Vérification des types de `src/` |

Aucun script `test` ou `start` n'est défini. `build` n'appelle pas `typecheck`. Le script de typage cible la configuration applicative ; il ne constitue pas à lui seul une vérification séparée de `tsconfig.node.json`.

## 13. Démarrage et configuration

À exécuter depuis la racine du dépôt pour un environnement de travail autorisé :

```powershell
npm ci
npm run dev -- --host 127.0.0.1
```

`npm ci` est une procédure de reproduction proposée ; elle n'a pas été exécutée ici. Les valeurs suivantes doivent être fournies localement ou dans l'environnement de build, sans les recopier dans la documentation :

```dotenv
VITE_SUPABASE_URL=<URL du projet Supabase de test>
VITE_SUPABASE_ANON_KEY=<clé publique anon du projet de test>
```

Ces deux variables sont lues par `src/lib/supabase.ts`. Les valeurs préfixées `VITE_` sont destinées au client : ne jamais y placer de clé `service_role` ou autre secret privilégié. `.env` est ignoré, mais `.gitignore` n'exclut pas globalement tous les noms `.env.*` ; vérifier tout nouveau fichier d'environnement avant de l'ajouter à Git.

Aucun `.env.example` n'est versionné. Le client est créé sans garde de configuration et importé depuis des pages elles-mêmes importées par `App.tsx`. Une configuration absente ou invalide peut ainsi empêcher le chargement de l'application entière. La réussite du build ne vérifie pas ces valeurs à l'exécution.

## 14. Commandes de validation

Les exécuter successivement pour éviter une interaction entre ESLint et les fichiers temporaires produits lors du chargement de la configuration Vite :

```powershell
npm run lint
npm run typecheck
npm run build
```

Vérifier le code de sortie de chaque commande ; dans PowerShell, un échec ne garantit pas l'arrêt des commandes suivantes. Les trois contrôles répondent à des questions différentes et leur résultat est détaillé ci-dessous.

## 15. Résultat du lint

**Commande :** `npm run lint`. **Résultat final :** échec, code de sortie 1, **14 erreurs et 0 avertissement**, règle `@typescript-eslint/no-unused-vars`.

| Fichier | Éléments inutilisés signalés |
|---|---|
| `src/lib/servicesData.ts` | `Compass`, `PenTool`, `Wrench`, `TrendingUp`, `CheckCircle2` |
| `src/pages/AboutPage.tsx` | `Link`, `Wrench`, `ScanText` |
| `src/pages/ConfirmationPage.tsx` | `Link`, `navigate` |
| `src/pages/HomePage.tsx` | `Mail` |
| `src/pages/LegalNoticesPage.tsx` | `Link` |
| `src/pages/PrivacyPolicyPage.tsx` | `Link` |
| `src/pages/UpcomingPage.tsx` | `Link` |

Une première exécution concurrente au build a échoué avec `ENOENT` sur un fichier temporaire `vite.config.ts.timestamp-….mjs`. Le lint a été relancé seul après le build ; le tableau représente cette seconde exécution, exploitable. Aucune correction automatique n'a été appliquée.

## 16. Résultat TypeScript

**Commande :** `npm run typecheck`. **Résultat :** échec, code 1.

```text
src/pages/ProductDetailPage.tsx(153,95): error TS18048: 'product' is possibly 'undefined'.
```

Le diagnostic concerne `product.name` utilisé dans le gestionnaire asynchrone de soumission. L'erreur est présente dans le code existant ; elle n'est pas corrigée par cette création documentaire.

## 17. Résultat du build

**Commande :** `npm run build`. **Résultat :** succès, code 0, Vite `5.4.8`, 1 667 modules transformés.

| Sortie | Taille affichée | Taille gzip affichée |
|---|---:|---:|
| `dist/index.html` | 1,56 kB | 0,63 kB |
| CSS principal | 41,43 kB | 7,45 kB |
| JavaScript principal | 583,36 kB | 157,77 kB |

Avertissements : base Browserslist/caniuse-lite ancienne et chunk JavaScript supérieur à 500 kB. Les noms de fichiers hachés peuvent changer au prochain build. Aucune mise à jour des dépendances ni optimisation n'a été effectuée.

Ce succès signifie que Vite produit les fichiers ; il ne neutralise pas l'erreur TypeScript ni les erreurs de lint.

## 18. Serveur local et recette navigateur

Non démarrés ni testés dans cette intervention. Aucun résultat de disponibilité HTTP, rendu mobile, accessibilité globale ou soumission réelle n'est revendiqué. Le serveur de développement et l'aperçu disposent des scripts ci-dessus pour une recette ultérieure.

## 19. Fonctionnement applicatif et données

Le routage, les catalogues et pages sont détaillés dans [l'architecture de l'information](information-architecture.md). Les deux formulaires exécutent un `insert` dans `diagnostic_requests`, puis naviguent vers la confirmation s'il n'y a pas d'erreur.

### Table et politiques versionnées

`20260825182223_create_diagnostic_requests_table.sql` crée UUID, prénom, nom, e-mail, entreprise, fonction, problème, consentement et horodatage. RLS est activé. INSERT est accordé à `anon` et `authenticated` si `consent = true`. SELECT, UPDATE et DELETE sont accordés au rôle `authenticated` avec des expressions `true`.

Les commentaires de migration parlent d'opérateurs autorisés, mais les politiques ne vérifient pas elles-mêmes ce statut. L'exposition réelle dépend notamment de la gestion des comptes du projet Supabase, non inspectée ici. Les colonnes textuelles sont `NOT NULL`, sans contraintes SQL reproduisant toutes les validations navigateur. Aucun champ `status`, `product_slug` ou origine de demande n'est défini.

`20260826165635_create_case_study_comments_table.sql` crée des commentaires ; `20260826170622_revert_case_study_comments.sql` supprime la table. La migration de suppression efface les éventuelles données. Aucun SQL n'a été exécuté : la présence de fichiers ne prouve pas leur application distante.

### Écarts de fonctionnement

Aucun envoi d'e-mail n'est identifié, bien que le texte de confidentialité l'évoque. Pas de garde d'envoi sur la confirmation, de limite de fréquence visible, de back-office ou de contextualisation systématique du produit. Si le visiteur saisit son propre message produit, le nom du produit n'est pas ajouté. Les boutons tarifaires ne font que défiler vers le formulaire et ne mémorisent pas un abonnement choisi.

## 20. Configuration Git constatée

Branche active `main`, suivant `origin/main`. Remote configuré :

```text
https://github.com/AxageniaBOLTnew/Axagenia_bolt_Lab_v1.git
```

La référence locale `origin/main` et `HEAD` pointaient vers le même commit au début de l'examen. Aucun `fetch` n'a été effectué : cela ne prouve pas l'état actuel du serveur GitHub. Aucun workflow `.github` versionné n'a été identifié ; les protections de branche et paramètres GitHub n'ont pas été interrogés.

Voir [le workflow Git](git-workflow.md).

## 21. Commit initial accessible

```text
218ea668661adeb30fe5a01d3fdfbbb4ab61eca4
2026-08-30 — Start repository
```

Un seul commit est accessible dans l'historique local consulté. Il contient déjà l'application ; il ne constitue pas un journal détaillé des étapes de création dans Bolt.

## 22. Éléments absents

Pas de suite de tests configurée, de CI versionnée, de serveur métier propre au dépôt, de CMS, de paiement, de back-office, de candidature dédiée ou de plateforme d'apprentissage. Aucune configuration d'hébergement `.openai/hosting.json` n'est présente. Le fournisseur réellement utilisé pour publier le site reste non établi.

## 23. Difficultés relevées

Échecs lint et TypeScript, interaction ponctuelle entre build et lint simultanés, dépendance à une configuration Supabase non gardée, textes commerciaux et de confidentialité contradictoires, confirmation directement accessible, contenu produit partiellement perdu dans la demande, SEO global et contrôles d'accessibilité incomplets.

## 24. Modifications réalisées

Création de six documents Markdown sous `docs/`. Aucun fichier applicatif, migration, dépendance, paramètre Git ou service distant modifié. Le build a uniquement régénéré une sortie locale ignorée. Aucun correctif technique ni commit n'est inclus dans cette intervention.

## 25. Reproduction du socle

1. Récupérer une copie du dépôt et identifier le commit de référence.
2. Installer depuis le lockfile avec `npm ci` dans un environnement approprié.
3. Fournir les deux variables publiques Supabase pour un projet de test autorisé.
4. Examiner séparément le schéma et les migrations avant toute application, notamment la suppression des commentaires.
5. Exécuter lint, typecheck puis build et consigner chaque résultat.
6. Démarrer `npm run dev` et effectuer une recette des routes, catalogues et formulaires.
7. Pour tester les fichiers produits, utiliser `npm run preview -- --host 127.0.0.1` après le build.

Cette procédure n'affirme pas que les migrations ont déjà été appliquées ni qu'une reproduction propre a été testée ici.

## 26. Critères de validation

| Contrôle | État au 30 août 2026 |
|---|---|
| Versions et scripts relevés | Effectué |
| Build de l'existant | Réussi avec avertissements |
| Lint de l'existant | Échec : 14 erreurs |
| Typage applicatif | Échec : TS18048 |
| Navigation et rendu réels | Non testés |
| Insertion et accès Supabase distants | Non testés |
| Déploiement et routes directes | Non testés |
| Cohérence des textes avec le code | Écarts consignés, non corrigés |
| Documentation créée | Six fichiers ; liens relatifs, encodage UTF-8 et blocs de code vérifiés |
| Inventaire documentaire | 16 déclarations de route et 31 slugs confrontés aux sources |

## 27. État du dépôt après documentation

La branche reste `main`. Les six nouveaux fichiers `docs/*.md` sont laissés non suivis pour revue ; aucun ajout à l'index, commit, push ou déploiement n'est effectué. Les fichiers versionnés existants doivent rester sans modification.

## 28. Décisions ouvertes

Correction des contrôles statiques, recette Supabase et restrictions d'accès, stratégie de tests, CI, environnement de publication, prise en charge des routes SPA, traitement opérationnel des demandes, accessibilité et cohérence éditoriale. Leur priorité doit être choisie séparément ; ce document n'en invente pas l'approbation.
