# Parcours utilisateurs — Axagenia_bolt_Lab_v1

**Date :** 30 août 2026  
**Statut :** parcours déduits des pages et de leurs interactions ; pas de recherche utilisateur ni de recette navigateur présumée.  
**Sources :** `src/App.tsx`, les composants de layout, `src/pages/` et les tableaux de `src/lib/`.

## 1. Objectifs des parcours

Comprendre les problèmes traités, explorer les offres et produits, lire les articles, examiner la méthode et présenter un besoin. Le site permet également de découvrir Carrières ou l'annonce Apprendre l'IA. La conversion applicative est une demande enregistrée dans Supabase, pas un rendez-vous confirmé, un achat ou une mission acceptée.

## 2. Profils concernés

### Profil principal

Interlocuteur d'une PME française de services B2B ayant un processus concret et chronophage. Cette qualification est affichée sur Diagnostic, mais aucun contrôle automatique du secteur d'activité n'est implémenté.

### Profil opérationnel

Responsable ou membre d'équipe cherchant à connecter ses outils, diminuer les ressaisies ou fiabiliser une opération. Ce scénario est déduit des problèmes et services exposés ; aucun persona nommé n'est documenté.

### Visiteur orienté produit ou contenu

Personne recherchant une intégration précise, un outil du catalogue ou une explication sur l'IA et l'automatisation. Elle peut arriver directement sur une fiche ou un article.

### Autres situations

Visiteur hésitant, demande hors cible, candidat, personne cherchant une formation et utilisateur confronté à une erreur. Les parcours ci-dessous décrivent le code actuel, avec ses limites.

## 3. Principes communs constatés

Pages accessibles sans connexion, navigation et footer partagés, défilement en haut lors d'un changement de chemin, CTA vers Diagnostic et liens de retour aux catalogues. Aucun brouillon de formulaire ni filtre de catalogue n'est explicitement persisté dans le stockage du navigateur ou l'URL.

Le client Supabase est importé au chargement de l'application. Une configuration invalide peut empêcher d'atteindre les parcours, avant même l'affichage d'un message d'erreur de formulaire ; voir [le socle technique](technical-baseline.md).

## 4. Parcours de découverte d'AXAGENIA

1. Arrivée sur `/` et lecture de « Automatisez ce qui ralentit vos équipes ».
2. Exploration des problèmes, solutions et bénéfices ; ouverture éventuelle d'une FAQ.
3. Passage vers `/services`, une fiche de service ou `/methode`.
4. Consultation éventuelle d'À propos pour comprendre les compétences et limites.
5. Action « Présenter mon besoin » ou « Contact » vers `/diagnostic`.
6. Lecture du périmètre gratuit et saisie de la demande.

**Réussite attendue :** comprendre l'offre et pouvoir présenter un besoin ou choisir de ne pas poursuivre. **Friction constatée dans les contenus :** les résultats chiffrés de l'accueil contrastent avec l'absence de résultats clients publiables annoncée sur À propos.

## 5. Parcours d'un besoin opérationnel précis

Entrée `/services` → choix parmi huit spécialités → fiche `/services/:slug` → prestations, bénéficiaires, processus et FAQ → Méthode ou Diagnostic.

Les outils nommés facilitent une entrée par technologie. Méthode explique davantage les livrables et exclusions. La difficulté potentielle est de rapprocher huit spécialités techniques et trois familles d'intervention. Ce point est déduit de la structure, pas d'une observation d'utilisateur.

## 6. Parcours d'une entreprise explorant l'IA

Accueil ou article → lecture des solutions IA → fiche de service correspondante → Méthode → Diagnostic. Le discours indiquant que l'IA n'est pas toujours nécessaire peut rassurer, tandis que les promesses d'autonomie intégrale présentes ailleurs doivent être clarifiées.

Une alternative est `/apprendre-ia`, qui ne fournit actuellement aucun cours : le visiteur trouve une annonce, un retour à l'accueil et un lien vers Diagnostic.

## 7. Parcours du visiteur hésitant

Il peut lire librement les services, produits, articles, limites et pages légales sans envoyer de demande. Les liens de retour et le footer lui permettent de poursuivre l'exploration. Il n'existe pas de favori, de compte ou de sauvegarde de parcours. Revenir ultérieurement reste possible par l'URL d'une page.

## 8. Parcours d'une demande hors cible

Diagnostic annonce quatre critères : entreprise française de services B2B, processus concret et chronophage, interlocuteur impliqué dans la décision et volonté réelle d'échange. Le visiteur peut renoncer après lecture.

S'il envoie des champs techniquement valides, le formulaire n'évalue ni le secteur, ni le pouvoir de décision, ni la pertinence métier. La qualification est présentée comme une analyse ultérieure, dont l'outil de traitement n'est pas inclus dans le dépôt.

## 9. Parcours du formulaire Diagnostic

### Situation initiale

L'utilisateur est sur `/diagnostic`. Les champs sont vides et le consentement est décoché. Le formulaire se trouve après les sections de présentation, ce qui peut demander un défilement important.

### Étapes

1. Lire cible, gratuité, durée indicative, exclusions et suites possibles.
2. Saisir les six champs textuels et cocher le consentement.
3. Consulter si nécessaire la politique de confidentialité par le lien du formulaire.
4. Cliquer sur « Envoyer ma demande ».
5. Le code valide localement et retire les espaces en début et fin du contenu transmis.
6. En l'absence d'erreur locale, il désactive le bouton et insère dans `diagnostic_requests`.
7. En cas de succès de l'insertion, il navigue vers la confirmation ; sinon il affiche l'échec.

### Données et règles

| Champ | Règle du formulaire Diagnostic |
|---|---|
| `first_name` | Prénom non vide après `trim()` |
| `last_name` | Nom non vide après `trim()` |
| `email` | Non vide et format vérifié par expression régulière |
| `company` | Entreprise non vide |
| `role` | Fonction non vide |
| `problem` | Description de 20 caractères minimum après `trim()` |
| `consent` | Doit être vrai |

L'intitulé « e-mail professionnel » n'est pas associé à une vérification de domaine professionnel. Les sept champs sont envoyés ; le SQL ajoute UUID et horodatage.

### Critère de réussite

Une insertion sans erreur provoque la confirmation. Aucune preuve de notification e-mail ni de prise en charge humaine n'est fournie par ce retour applicatif.

## 10. Parcours après envoi réussi

La page `/diagnostic/confirmation` reçoit le focus sur son titre et annonce une analyse prochaine. Elle précise qu'un échange d'environ 30 minutes est possible si la demande est qualifiée, sans garantie de mission ni délai. Elle propose Accueil et Services.

La page est aussi accessible par saisie directe de son URL ; elle ne vérifie pas qu'une demande vient d'être créée. Son affichage isolé ne peut donc pas servir de justificatif de réception. Elle ne différencie pas une demande générale d'une demande produit.

## 11. Parcours après erreur

### Erreur de validation

Résumé d'erreurs avec `role="alert"`, focus programmatique, indication au niveau des champs et attributs ARIA. La saisie reste présente. Les erreurs sont recalculées à l'envoi suivant.

Le code efface une erreur en lui affectant `undefined`, tout en conservant sa clé dans l'objet. Comme l'affichage du résumé repose sur `Object.keys(errors).length`, un résumé vide peut subsister pendant la correction ; ce comportement mérite une recette ciblée.

### Erreur technique d'envoi

Le message indique l'échec, propose de réessayer et mentionne `contact@axagenia.fr`. Les données du formulaire restent en mémoire et le bouton est réactivé. Aucun brouillon durable, identifiant de tentative ou mécanisme de déduplication n'est présent.

### Limites

L'erreur de configuration du client au chargement n'est pas traitée par ce `catch` de soumission. Une interruption réseau peut aussi laisser incertain le résultat réel de l'insertion ; le dépôt ne prévoit pas de vérification de réception avant une nouvelle tentative.

## 12. Parcours complémentaires et frictions

### Recherche d'un produit

`/produits` → recherche sur nom/description/tags et catégorie → fiche → lecture des caractéristiques et tarifs → formulaire intégré. Un état sans résultat propose de réinitialiser les filtres. Les filtres combinés ne sont pas sauvegardés dans l'URL.

Le formulaire produit exige les mêmes informations d'identité et le consentement, mais le message est facultatif, sans minimum de longueur. S'il est vide, le code génère une demande nommant le produit. S'il est rempli, ce texte est utilisé seul : ni slug ni champ produit n'est ajouté. La demande peut donc perdre son contexte.

Les tarifs Starter, Professional et Enterprise sont affichés, sans achat ni facturation. Le formulaire écrit dans la même table que Diagnostic puis ouvre la même confirmation.

### Lecture d'un article

`/etudes-de-cas` → recherche et catégorie → article → lectures associées, Services ou Diagnostic. Il n'existe pas de commentaire actif dans l'interface. L'authenticité commerciale d'un récit ne découle pas de sa présence dans la rubrique.

### Candidature

Accueil, sous-menu ou footer → `/carrieres` → lecture du processus → CTA vers `/diagnostic`. Aucun CV, poste ou candidature n'est traité par un formulaire spécifique. Le visiteur arrive sur des questions de besoin d'entreprise : c'est une friction constatée dans le raccordement des pages.

### URL invalide et navigation mobile

Une fiche inconnue renvoie au catalogue de sa famille. Un autre chemin inconnu affiche la page introuvable. Sur mobile, le panneau propose la navigation globale et se ferme au changement de page ou avec Échap. Le maintien du focus dans le panneau reste à tester.

## 13. Moyens de réassurance disponibles

Périmètre gratuit explicité, livrables et exclusions dans Méthode, absence d'engagement de mission annoncée, explications sur l'utilité de l'IA et liens légaux. Les contradictions éditoriales et les mentions administratives incomplètes limitent cette réassurance tant qu'elles ne sont pas résolues.

## 14. Points de conversion

**Conversion principale :** enregistrement d'une demande Diagnostic. **Conversion complémentaire :** enregistrement d'une demande depuis une fiche produit. **Actions intermédiaires :** consultation d'une fiche, lecture d'un article, filtre de catalogue, ouverture de FAQ et clic vers Diagnostic.

Aucun comptage analytique de ces événements n'est trouvé dans les sources. Cliquer sur une adresse e-mail ouvre un client de messagerie ; cela ne prouve pas qu'un message a été envoyé.

## 15. Critères de réussite à vérifier

Parcours principaux accessibles au clavier et sur mobile ; filtres et états vides compréhensibles ; erreurs correctement annoncées ; distinction entre validation locale et envoi réel ; réussite et échec Supabase reproductibles en environnement de test ; cohérence entre formulaire produit et confirmation.

La présente documentation décrit ces critères sans prétendre qu'une recette navigateur ou une insertion distante ont été réalisées.

## 16. Hypothèses à tester

Compréhension de la gratuité, utilité des explications avant formulaire, facilité de recherche des produits, intelligibilité de `Domains`/`Platform`, conservation du contexte lors des allers-retours et perception des affirmations commerciales contradictoires.

## 17. Questions ouvertes

Qui reçoit et traite les demandes Supabase ? Comment conserver la provenance produit ? Faut-il une confirmation distincte ? Quel parcours pour un candidat ou une personne cherchant une formation ? Comment reprendre une saisie après avoir consulté une autre page ?

## 18. Décisions reportées

Traitement des candidatures, apprentissage, notification, stockage des brouillons, mesure des conversions, contextualisation des demandes et garde d'accès à la confirmation. Rien dans ce document ne constitue une autorisation de collecter davantage de données.

## 19. Conséquences pour la conception fonctionnelle

Les deux formulaires doivent être examinés ensemble pour éviter des règles divergentes involontaires. La confirmation et le traitement des demandes sont partagés. Les catalogues reposent sur un état local et des liens stables par slug. L'accessibilité de navigation et la cohérence des textes restent des sujets distincts de la compilation.

Voir [l'architecture de l'information](information-architecture.md), [le cahier des charges](project-brief.md) et [le socle technique](technical-baseline.md).
