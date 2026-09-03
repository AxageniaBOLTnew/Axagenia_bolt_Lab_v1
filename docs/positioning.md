# Positionnement commercial — Axagenia_bolt_Lab_v1

**Date :** 30 août 2026  
**Statut :** synthèse du discours existant, sans validation commerciale présumée.  
**Sources :** `src/pages/HomePage.tsx`, `AboutPage.tsx`, `MethodPage.tsx`, `DiagnosticPage.tsx`, `ProductDetailPage.tsx`, `CareersPage.tsx`, `src/lib/servicesData.ts`, `productsData.ts`, `caseStudiesData.ts` et `index.html`.

## Légende des statuts

**Affiché** désigne un contenu du site ; **constaté** un fonctionnement ou une structure du code ; **à valider** une affirmation métier sans justificatif dans le dépôt ; **proposé** une orientation de clarification, non une décision acquise.

## 1. Résumé du positionnement

AXAGENIA se présente comme une agence française d'automatisation, de No-Code et d'IA. Elle propose de simplifier les processus chronophages en concevant des workflows, en connectant les outils et en accompagnant l'adoption par les équipes.

L'accueil combine ce discours centré sur le besoin avec un catalogue technologique plus large : agents IA, assistants vocaux, chatbots, n8n, Make, Zapier et Monday.com.

## 2. Marché visé

Diagnostic et À propos ciblent les PME françaises de services B2B. D'autres pages couvrent e-commerce, marketing, finance, support, ressources humaines et logistique. Le dépôt ne permet pas d'affirmer qu'un élargissement de cible a été décidé ; les deux orientations coexistent dans les contenus.

## 3. Profil client prioritaire

Le profil le plus explicite est une entreprise française de services B2B ayant un processus concret et chronophage et souhaitant réellement échanger sur une automatisation. Aucun seuil d'effectif, de chiffre d'affaires ou de budget n'est codifié.

## 4. Décideurs

Diagnostic exige un interlocuteur impliqué dans la décision et demande sa fonction. Le formulaire ne limite pas celle-ci à une liste de métiers. Dirigeant ou responsable opérationnel sont des profils possibles déduits de la cible, pas des personas validés dans le dépôt.

## 5. Situations déclenchantes

Ressaisies entre applications, accumulation de fichiers et d'e-mails, ralentissement des opérations, erreurs répétées, besoin de relier un CRM ou d'automatiser un traitement documentaire. Les fiches élargissent ces situations au support conversationnel et aux outils métier nommés.

## 6. Problèmes visibles

L'accueil met en avant ressaisies, lenteurs, erreurs et oublis. Les pages détaillent la capture de leads, le suivi des commandes, les stocks, la facturation et la circulation des données.

## 7. Causes profondes suggérées par le site

Outils séparés, transferts manuels, manque de règles de circulation et adoption insuffisante. Il s'agit d'une lecture du discours éditorial, sans diagnostic client documenté dans les fichiers.

## 8. Conséquences métier décrites

Temps consacré aux tâches répétitives, délais qui augmentent et données moins fiables. Aucune mesure économique généralisable n'est disponible dans le dépôt.

## 9. Résultats recherchés

Temps libéré, processus fluidifiés, travail fiabilisé et autonomie des équipes. Les gains chiffrés de l'accueil et des fiches produits sont des affirmations affichées, pas des résultats vérifiés par cette documentation.

## 10. Alternatives actuelles

Le site oppose implicitement l'automatisation aux tableurs, e-mails et opérations manuelles. Il évoque aussi le choix entre plusieurs plateformes et la possibilité de se passer d'IA. Aucune étude concurrentielle ou comparaison de prestataires n'est présente.

## 11. Catégorie de service

Partenaire de conception et mise en œuvre de workflows No-Code, avec fonctions d'IA ciblées, documentation et formation. Les prestations annoncées ne doivent pas être confondues avec des intégrations exécutées par le site : le code de cette vitrine ne contient pas de workflows Make, n8n ou Zapier.

## 12. Proposition de valeur

Synthèse du contenu existant : aider les équipes à automatiser les tâches répétitives et les échanges entre outils, en partant d'un besoin concret et en choisissant une solution adaptée.

## 13. Promesse principale

Le Hero affiche « Automatisez ce qui ralentit vos équipes » et la signature « Automatisation sans détour ». À propos et Méthode refusent les gains garantis et présentent l'IA comme optionnelle selon son utilité.

Une tension subsiste avec `index.html`, dont les métadonnées promettent des systèmes sans surveillance ni intervention humaine, et avec certaines formulations très affirmatives de l'accueil.

## 14. Différenciation revendiquée

Besoin avant technologie, transparence sur les limites, workflows testés, documentation, prise en main et autonomie d'usage. Le site revendique ces principes ; le dépôt ne fournit pas de livrables clients permettant de les vérifier.

## 15. Architecture des offres

### 15.1 Diagnostic initial

Comprendre le besoin et déterminer la pertinence d'une intervention. Méthode mentionne questionnaire, analyse préliminaire, échange de qualification et première orientation, avec un bref récapitulatif écrit.

### 15.2 Conception et implémentation

Workflow cible, réalisation No-Code, connexions standards, IA sur cas encadré, scripts limités, tests, mise en service, documentation et courte stabilisation. Méthode exclut notamment refonte globale du SI, logiciel complexe, gains garantis et maintenance illimitée.

### 15.3 Accompagnement et formation

Objectifs pédagogiques, formation aux solutions ou usages encadrés de l'IA/No-Code, exercices et ressources. La formation peut être autonome ou suivre une implémentation ; aucune certification ou assistance illimitée n'est annoncée dans cette famille.

### 15.4 Catalogue technologique et produits

Les huit fiches Services détaillent des spécialités techniques, tandis que les onze Produits affichent une autre grille de lecture. Leur articulation contractuelle avec les trois familles de Méthode n'est pas explicitée.

Les fiches produits partagent une grille tarifaire définie une seule fois dans `ProductDetailPage.tsx`, avec notamment Starter à 49 €/mois et Professional à 99 €/mois. L'accueil évoque des interventions dès 90 €. Ce sont des prix affichés à clarifier, pas une politique tarifaire validée ici. Aucun paiement n'est implémenté.

## 16. Définition du diagnostic gratuit

| Dimension | Contenu existant |
|---|---|
| Appellation | Premier diagnostic gratuit |
| Objectif | Comprendre le besoin et vérifier la pertinence d'une intervention |
| Public | PME françaises de services B2B avec processus concret et chronophage |
| Données | Prénom, nom, e-mail professionnel, entreprise, fonction, problème, consentement |
| Durée affichée | Environ 30 minutes si la demande est qualifiée |
| Retours possibles | Reformulation, étape prioritaire, frictions et première orientation |
| Non inclus | Audit complet, cartographie, architecture, spécifications, gains garantis, plan détaillé, choix définitif d'outils |
| Qualification | Analyse annoncée, sans automatisme métier implémenté |
| Engagement | Aucune mission sans accord explicite selon le texte de la page |
| Suites | Mission payante, formation ou absence de suite |

La confirmation ne garantit ni mission ni délai de réponse. Le formulaire enregistre une demande ; il ne réserve pas de créneau et ne produit pas lui-même le diagnostic.

## 17. Objections et réponses présentes

| Objection | Réponse éditoriale disponible | Limite |
|---|---|---|
| L'IA est-elle indispensable ? | Non, si une solution plus simple suffit | Certaines autres formulations sont plus absolues |
| Que reçoit-on ? | Livrables de Méthode et limites du Diagnostic | Leur livraison est extérieure au code du site |
| Que se passe-t-il après livraison ? | Documentation, formation, stabilisation et suivi optionnel | Services évoque aussi un support continu à préciser |
| Quels résultats avez-vous obtenus ? | Chiffres sur l'accueil et contenus Études de cas | À propos affirme ne pas disposer de résultats clients publiables |
| Combien cela coûte-t-il ? | Prix d'entrée et abonnements affichés | Périmètres et conditions à valider |

## 18. Appel à l'action principal

« Présenter mon besoin » mène à `/diagnostic` sur l'accueil et plusieurs pages. Le header utilise « Contact » pour cette même destination. Le formulaire Diagnostic utilise « Envoyer ma demande ».

## 19. Appels à l'action secondaires

Découvrir les services, consulter la méthode, parcourir les produits et articles. Les fiches produits permettent aussi une demande intégrée. Les actions Carrières dirigées vers Diagnostic ne constituent pas un parcours de candidature dédié.

## 20. Ton éditorial observé

Le texte alterne explications concrètes, transparence sur le lancement, vocabulaire technique et formulations promotionnelles. **Proposition :** conserver le langage métier compréhensible et qualifier précisément les bénéfices, sans effacer silencieusement les divergences constatées.

## 21. Message du Hero actuel

« Automatisez ce qui ralentit vos équipes ». Le texte associé indique une conception et une mise en œuvre de workflows No-Code, avec de l'IA lorsqu'elle apporte une utilité réelle. Ce message est déjà codé ; il n'est pas créé à partir du projet modèle.

## 22. Formulations étayées par le dépôt

Pour décrire le site : « présente huit services », « propose un formulaire de diagnostic », « affiche onze fiches produits » et « explique une méthode en trois familles ». Pour les capacités commerciales, conserver des formulations attribuées : « AXAGENIA se présente comme… » ou « la page annonce… » tant que les preuves ne sont pas disponibles.

## 23. Formulations à ne pas considérer comme établies

Ne pas transformer les prix affichés, les gains chiffrés, le support continu, les disponibilités 24/7 ou les affirmations de conformité en garanties documentées. Ne pas affirmer que les demandes sont envoyées par e-mail : le mécanisme identifié est une insertion Supabase.

## 24. Éléments disponibles

Textes publics codés, fiches de services et produits, méthode, exemples éditoriaux, visuels et formulaires. Ils démontrent la construction de la vitrine, pas l'exécution des prestations ni l'authenticité des résultats commerciaux.

## 25. Preuves manquantes ou contradictoires

Aucun justificatif client ou accord de publication identifié. À propos annonce l'absence de résultats clients publiables, alors que l'accueil affiche des « résultats » chiffrés et certains articles relatent des réalisations. Les statistiques produits n'ont pas de dossier de mesure associé dans les sources examinées.

## 26. Hypothèses à tester

Compréhension des catégories `Domains` et `Platform`, articulation produits/services, adéquation des visiteurs multisecteurs au diagnostic B2B, interprétation de la gratuité et des tarifs, confiance suscitée par les chiffres et les limites.

## 27. Questions ouvertes

Quels contenus sont des démonstrations ? Quels produits sont disponibles ? Quels chiffres peuvent être justifiés ? Les tarifs constituent-ils des offres réelles ? Qui traite les demandes et dans quel délai ? Quelle cible prime lorsqu'un texte et un autre divergent ?

## 28. Conséquences pour le site

La prochaine révision éditoriale devra aligner cible, promesses, preuves, produits et tarifs. Le parcours de demande produit mérite une confirmation contextualisée et une identification fiable du produit demandé. Ces points sont documentés sans modifier l'interface dans cette intervention.

Voir aussi [le cahier des charges](project-brief.md) et [les parcours utilisateurs](user-journeys.md).
