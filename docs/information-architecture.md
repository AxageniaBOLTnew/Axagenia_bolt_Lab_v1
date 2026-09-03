# Architecture de l'information — Axagenia_bolt_Lab_v1

**Date :** 30 août 2026  
**Statut :** architecture observée dans le code, et non arborescence future validée.

## 1. Sources utilisées

`src/App.tsx`, `src/components/layout/{Layout,Header,Footer}.tsx`, `src/pages/`, `src/lib/{servicesData,productsData,caseStudiesData}.ts`, `index.html` et `src/index.css`. Les noms des documents modèles servent à organiser la documentation ; ils ne définissent pas le périmètre de ce site.

## 2. Principes d'architecture constatés

Le site fonctionne dans une enveloppe partagée avec header fixe, contenu principal et footer. Les routes sont déclarées avec React Router. Les contenus sont publics, sans connexion. Les listes Services, Produits et Études de cas donnent accès à des fiches par slug. Les demandes convergent vers Diagnostic ou le formulaire intégré d'une fiche produit.

## 3. Option minimale étudiée

Aucune étude d'option minimale n'est présente dans le dépôt. Une arborescence limitée aux pages institutionnelles ne décrirait pas l'application actuelle : catalogues, fiches et Carrières existent déjà.

## 4. Option recommandée étudiée

Aucune comparaison formelle d'architectures n'est trouvée. Ce document ne reconstitue pas une décision de conception passée. Il relève la structure implémentée et les points nécessitant clarification.

## 5. État retenu pour cette documentation

Référence factuelle : les 16 déclarations de route de `App.tsx`, comprenant 12 chemins fixes, 3 familles de fiches et le repli `*`. Les données locales fournissent 8 services, 11 produits et 12 articles, soit 43 URL connues avec les chemins fixes, hors URL inconnues.

## 6. Arborescence actuelle

```text
/
├── services
│   └── :slug                         (8 fiches)
├── methode
├── a-propos
├── produits
│   └── :slug                         (11 fiches)
├── etudes-de-cas
│   └── :slug                         (12 articles)
├── carrieres
├── apprendre-ia                      (page d'attente)
├── diagnostic
│   └── confirmation
├── mentions-legales
├── politique-confidentialite
└── *                                (page introuvable)
```

## 7. Inventaire des pages

| URL | Composant dans `src/pages/` | Rôle et état |
|---|---|---|
| `/` | `HomePage.tsx` | Proposition, solutions, résultats affichés, FAQ et conversion |
| `/services` | `ServicesPage.tsx` | Liste des 8 spécialités |
| `/services/:slug` | `ServiceDetailPage.tsx` | Présentation, bénéfices, étapes, FAQ |
| `/methode` | `MethodPage.tsx` | Trois familles d'intervention et leurs limites |
| `/a-propos` | `AboutPage.tsx` | Positionnement, compétences, transparence sur le lancement |
| `/produits` | `ProductsPage.tsx` | Catalogue filtrable et recherche |
| `/produits/:slug` | `ProductDetailPage.tsx` | Fiche, tarifs affichés, formulaire et produits associés |
| `/etudes-de-cas` | `CaseStudiesPage.tsx` | Catalogue d'articles filtrable |
| `/etudes-de-cas/:slug` | `CaseStudyDetailPage.tsx` | Article et lectures associées |
| `/carrieres` | `CareersPage.tsx` | Présentation du recrutement, sans formulaire dédié |
| `/apprendre-ia` | `UpcomingPage.tsx` | Annonce « Bientôt disponible » |
| `/diagnostic` | `DiagnosticPage.tsx` | Qualification éditoriale et demande |
| `/diagnostic/confirmation` | `ConfirmationPage.tsx` | Message après insertion ; également accessible directement |
| `/mentions-legales` | `LegalNoticesPage.tsx` | Texte comportant des informations à compléter |
| `/politique-confidentialite` | `PrivacyPolicyPage.tsx` | Texte à aligner sur le traitement réel |
| `*` | `NotFoundPage.tsx` | Repli pour chemin inconnu |

## 8. Spécification des pages existantes

### 8.1 Accueil

Hero, solutions avec onglets et carrousel, symptômes, résultats recherchés, familles d'offres, capacités IA, résultats chiffrés affichés, réassurance, FAQ et appels à l'action. Le CTA principal mène à Diagnostic ; les solutions conduisent à des fiches Services. Les chiffres affichés restent à justifier au regard du discours d'À propos.

### 8.2 Services et fiches

Catalogue alimenté par `servicesData.ts`. Chaque fiche comporte Hero, explication, prestations, public/bénéfices, processus, arguments de choix, FAQ et CTA. La liste ci-dessous donne les suffixes de `/services/` :

| Slug | Service |
|---|---|
| `automatisation-workflows-ia` | Automatisation de workflows par IA |
| `automatisation-processus-metier` | Automatisation des processus métier |
| `developpement-scenarios-make` | Développement de scénarios Make.com |
| `automatisation-n8n` | Automatisation avec n8n |
| `agents-ia-gpt-personnalises` | Agents IA et solutions GPT personnalisées |
| `assistants-vocaux-chatbots-ia` | Assistants vocaux et chatbots IA |
| `implementation-monday-automation` | Implémentation et automatisation Monday.com |
| `automatisation-zapier` | Automatisation avec Zapier |

### 8.3 Méthode

Repères et ancres vers les trois offres, objectifs, prestations, livrables, non-inclus, suites possibles, aide au choix et exclusions transversales. Les ancres internes utilisent `#offer-0-title`, `#offer-1-title` et `#offer-2-title`.

### 8.4 À propos

Raison d'être, principes, domaines d'intervention, solutions IA, compétences, arguments de choix, phase de lancement, limites et engagements. Cette page annonce l'absence de résultats clients publiables ; ce point doit être rapproché des chiffres et récits présents ailleurs.

### 8.5 Produits et fiches

Recherche sur nom, description courte et tags, combinée à une catégorie `Tous`, `Domains` ou `Platform`. Le filtre est local et n'est pas inscrit dans l'URL. Une fiche présente caractéristiques, bénéfices, statistiques, grille tarifaire partagée, contact et jusqu'à trois produits de même catégorie.

Suffixes de `/produits/` :

```text
skool-automation-app
linkedin-advanced-app
0codeutil
doccrafter
gmail-advanced-app
x-advanced-app
tiktok-advanced-app
loom-advanced-app
microsoft-dynamics-365-crm-automation
microsoft-business-central-automation
google-sheets-custom-app
```

Le formulaire utilise `diagnostic_requests` et la confirmation générale. Un message libre non vide remplace entièrement le texte produit par défaut : le produit n'est donc pas systématiquement identifié dans la demande stockée.

### 8.6 Études de cas et articles

Recherche sur titre, extrait et tags, combinée à une catégorie. Les articles ont titre, catégorie, date, durée de lecture, sections, conclusion, tags et jusqu'à trois lectures de même catégorie. Le nom « Études de cas » recouvre aussi des articles explicatifs, et ne certifie pas leur statut de référence client.

Suffixes de `/etudes-de-cas/` :

```text
10-heures-recuperees-par-semaine
automatisation-en-2026
tendances-automatisation-processus
eliminer-erreurs-humaines
ia-remplacer-support-client
automatisation-commandes-5-plateformes
ia-pour-automatisation
mcp-explique
comparatif-modeles-ia
suivi-expeditions-b2b
automatisation-documents-transfrontalier
automatisation-tarifs-b2b
```

Aucune interface de commentaires actuelle. Les migrations contiennent une création, puis une suppression de `case_study_comments`.

### 8.7 Diagnostic

Présentation du diagnostic gratuit, cible, critères de qualification, durée indicative, retours possibles, exclusions, suites et réassurance précèdent le formulaire. Le formulaire exige sept champs, dont le consentement et une description de 20 caractères minimum après `trim()`.

### 8.8 Confirmation

Annonce la réception et l'analyse prochaine, un éventuel échange de 30 minutes, sans garantie de mission ni délai. Propose Accueil et Services. Une balise `noindex, nofollow` est ajoutée au montage et retirée au démontage ; le titre du document est changé. La route n'est pas protégée par une preuve d'envoi.

### 8.9 Carrières et Apprendre l'IA

Carrières présente des raisons de rejoindre l'équipe, un processus en quatre étapes et des profils recherchés. Ses CTA dirigent vers Diagnostic. Apprendre l'IA affiche une attente et permet de revenir à l'accueil ou de présenter un besoin.

`UpcomingPage.tsx` conserve des entrées pour Carrières et Études de cas, mais `App.tsx` les relie à leurs composants dédiés : ces deux rubriques ne sont donc pas des pages d'attente dans le routage actuel.

### 8.10 Pages légales et page introuvable

Les pages légales comportent des mentions à compléter. La page introuvable offre des sorties vers Accueil et Services, applique un focus au titre et une directive robots côté client. Le code seul n'établit pas le statut HTTP renvoyé par l'hébergement.

## 9. Navigation desktop

Visible à partir du breakpoint Tailwind `lg`. Ordre : Accueil, Services, Méthode, Produits, Études de cas, Apprendre l'IA. Accueil porte un sous-menu À propos / Carrières, ouvert au survol. Le logo retourne à `/` et « Contact » mène à `/diagnostic`.

L'ouverture du sous-menu ne possède pas de commande clavier dédiée dans ce composant. Le footer fournit aussi les liens À propos et Carrières, mais ne remplace pas la vérification d'accessibilité de ce menu.

## 10. Navigation mobile

Bouton d'ouverture avec `aria-expanded`, panneau déclaré comme dialogue modal, liens principaux et dépliage du sous-menu Accueil. L'ouverture bloque le défilement et déplace le focus vers le premier lien. Échap ferme le panneau et rend le focus au bouton ; un changement de chemin ferme le menu.

Aucun piège de focus complet n'est identifié dans le code. La hauteur de départ du panneau et le header aux largeurs intermédiaires nécessitent une vérification visuelle.

## 11. Footer

Navigation : Accueil, Services, Méthode, Produits, Études de cas. Entreprise : À propos, Carrières, Apprendre l'IA, Diagnostic. Liens légaux : Mentions légales et Politique de confidentialité. Contact par lien `mailto:contact@axagenia.fr`.

## 12. Stratégie des CTA constatée

La destination de contact principale est Diagnostic, avec plusieurs libellés selon le contexte. Les fiches produits ajoutent une conversion locale par formulaire. Les pages d'information restent consultables sans saisie de coordonnées. Les CTA Carrières ne sont pas raccordés à un traitement spécifique des candidatures.

## 13. Liens internes et contexte

Liens de retour aux catalogues sur les fiches, suggestions de même catégorie sur produits/articles, ancres sur Méthode et lien vers la confidentialité dans les formulaires. Les filtres de recherche ne sont ni partageables par URL ni persistés explicitement. Un slug inconnu redirige avec `replace` vers son catalogue, au lieu d'afficher la page 404.

## 14. Contenus transversaux

Composants `Button`, `Section`, `Container`, `Eyebrow`, charte Tailwind, textes de contact et destination Diagnostic. Les données produits/articles/services sont centralisées, mais certaines offres, promesses et FAQ se répètent directement dans les pages : leur cohérence doit être vérifiée lors des modifications.

## 15. Pages système

Confirmation et page introuvable partagent le layout et emploient des métadonnées robots ajoutées côté client. Elles ne constituent pas une preuve d'envoi, un mécanisme d'authentification ou une configuration HTTP côté serveur.

## 16. SEO constaté et limites

`index.html` définit `lang="fr"`, un titre, une description et des métadonnées sociales globales. L'image sociale pointe encore vers un visuel par défaut Bolt et `twitter:card` est dupliqué. Seule la confirmation modifie explicitement `document.title` dans les sources examinées. Aucun sitemap, `robots.txt`, canonical par page ou données structurées n'a été identifié.

L'hébergeur et sa gestion des routes ne sont pas documentés dans une configuration versionnée. Leur validation reste distincte de ce relevé statique.

## 17. Accessibilité constatée et limites

Lien « Aller au contenu principal », élément `main`, styles de focus, labels de champs, messages d'erreur associés et focus sur les résumés d'erreur. Points à vérifier : sous-menu desktop au clavier, maintien du focus dans le menu mobile, interaction clavier des onglets/carrousels, contrastes et réduction des animations. Aucune conformité globale n'est attestée.

## 18. Extensions annoncées

Apprendre l'IA est annoncé comme à venir. À propos indique des démonstrations et supports encore en validation/construction. Le dépôt ne fournit pas de calendrier de livraison. Carrières annonce un processus dont le formulaire dédié reste absent.

## 19. Contenus absents du périmètre exécuté

Pas de boutique transactionnelle, de compte client, de back-office, de cours consultables dans Apprendre l'IA ou de commentaires actifs. Ces absences ne sont pas des interdictions de développement futur.

## 20. Hypothèses

Le visiteur comprendrait les rubriques et catégories, les produits seraient commercialement définis et les articles pourraient appuyer la confiance. Ces hypothèses ne sont pas validées par des tests utilisateurs ou des justificatifs dans le dépôt.

## 21. Questions ouvertes

Faut-il distinguer articles pédagogiques et références clients ? Quel parcours pour les candidats ? Comment expliquer les catégories anglaises ? Quel comportement attendre à l'ouverture directe d'une confirmation ? Comment conserver le contexte produit dans les demandes ?

## 22. Décisions reportées

Révision des libellés, architecture éditoriale du catalogue, stratégie SEO, parcours candidat, disponibilité des ressources d'apprentissage et traitement des incohérences commerciales. Aucune route n'est ajoutée ni retirée dans cette intervention documentaire.

## 23. Conséquences techniques

Préserver la cohérence entre route, slug et liens. Toute nouvelle fiche se répercute dans les tableaux TypeScript. Une évolution du formulaire produit concerne aussi la table de demandes et la confirmation partagée. La configuration de publication devra prendre en charge les chemins React Router directement ouverts.

Voir [les parcours utilisateurs](user-journeys.md), [le positionnement](positioning.md) et [le socle technique](technical-baseline.md).
