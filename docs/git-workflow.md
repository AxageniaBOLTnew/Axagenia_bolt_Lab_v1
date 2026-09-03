# Workflow Git — Axagenia_bolt_Lab_v1

**Date :** 30 août 2026  
**Statut :** état Git local constaté et procédure de contribution proposée.  
**Sources :** `.gitignore`, `package.json`, `git status`, `git branch -avv`, `git remote -v`, `git log` et `git rev-list` exécutés dans ce dépôt.

Ce document est un guide de projet, pas une autorisation d'exécuter ses commandes. Les commandes de modification ci-dessous sont des exemples pour un travail futur ; elles n'ont pas été exécutées lors de la création des documents. Aucune règle propre au projet modèle n'est importée comme contrainte de ce dépôt.

## 1. Rôle de Git

Git conserve des versions des fichiers suivis, permet de relire les changements et de travailler sur des branches. Il ne prouve pas le bon fonctionnement de l'application, le déploiement du site ni l'état de la base Supabase.

## 2. Rôle du dépôt

Le dépôt actuel est `Axagenia_bolt_Lab_v1`. Il suit le code React/Vite, les ressources, configurations, migrations SQL et lockfile npm. Le remote `origin` est configuré vers :

```text
https://github.com/AxageniaBOLTnew/Axagenia_bolt_Lab_v1.git
```

La présence de cette URL est constatée localement. Les droits d'accès, protections de branches et réglages du dépôt distant n'ont pas été vérifiés.

## 3. Rôle de `main`

`main` est la branche active et suit `origin/main`. Au début de l'intervention, elle pointe vers `218ea668661adeb30fe5a01d3fdfbbb4ab61eca4`, intitulé `Start repository`, daté du 30 août 2026. La référence distante locale pointe au même commit ; aucun `fetch` n'a confirmé l'état actuel de GitHub.

**Proposition :** utiliser `main` comme branche d'intégration, sans considérer pour autant qu'elle est déjà exempte d'erreurs : les contrôles lint et TypeScript de l'existant échouent.

## 4. Rôle d'une branche

Une branche isole une activité, par exemple une correction de formulaire ou une évolution de navigation. Aucun historique de branches de travail ni convention d'équipe n'est démontré par le dépôt. Les conventions ci-dessous sont proposées pour les prochaines contributions.

## 5. Modifié, staged et committed

Un fichier modifié diffère de sa version Git ; un fichier staged est sélectionné dans l'index pour le prochain commit ; un fichier committed est enregistré dans l'historique local. Un nouveau fichier est d'abord non suivi (`??`).

Les six documents ajoutés sont non suivis à la fin de cette intervention. Ils ne sont ni commités ni publiés.

## 6. Commit, push, pull, fetch et merge

| Opération | Effet |
|---|---|
| `commit` | Enregistre les changements de l'index dans l'historique local |
| `push` | Publie des commits vers le remote |
| `fetch` | Met à jour les références distantes locales, sans fusionner le travail |
| `pull` | Récupère puis intègre les changements selon les options choisies |
| `merge` | Intègre une branche dans la branche active |

Une commande Git ne déploie pas automatiquement ce projet en l'absence d'un mécanisme externe configuré. Aucun tel mécanisme n'a été vérifié ici.

## 7. Rôle d'une pull request

Une PR permet de présenter et discuter des commits avant intégration dans GitHub. Le remote rend ce mode de travail envisageable, mais aucune PR n'a été ouverte ou inspectée et aucune obligation de PR n'a été constatée.

## 8. Rôle d'une revue

Relire le périmètre et les différences, vérifier les contrôles et les effets sur les routes, formulaires et données. Pour ce projet, une revue doit notamment distinguer discours commercial et capacité réellement implémentée, et examiner les politiques SQL plutôt que se fier uniquement à leurs commentaires.

## 9. Contrôles automatisés disponibles

`npm run lint`, `npm run typecheck` et `npm run build`. Aucun script de tests ni workflow `.github` versionné n'a été identifié. Aucune règle GitHub de contrôle obligatoire n'est affirmée.

État mesuré : 14 erreurs de lint, une erreur TypeScript TS18048 sur `ProductDetailPage.tsx:153`, build réussi avec avertissements. Voir [le socle technique](technical-baseline.md). Il ne faut pas attribuer ces erreurs préexistantes à une modification documentaire.

## 10. Cycle proposé pour une activité

Observer l'état → isoler une branche si adapté → réaliser une modification ciblée → vérifier → relire → sélectionner les fichiers → commiter → publier et ouvrir une PR lorsque cela entre dans le travail demandé → revoir → intégrer → synchroniser.

Chaque activité doit conserver ses preuves de vérification, y compris les échecs antérieurs qui restent présents. Une petite modification de documentation ne nécessite pas de créer des tests artificiels.

## 11. Préparer le travail

Depuis la racine du projet :

```powershell
git status --short --branch
git branch -avv
git remote -v
git log -5 --oneline
```

Préserver tout changement déjà présent. Pour une synchronisation distante incluse dans la tâche, `git fetch origin` peut précéder l'examen des divergences. Cette opération n'a pas été réalisée pour rédiger les documents.

## 12. Créer une branche

Exemple proposé, depuis une base vérifiée :

```powershell
git switch -c docs/documentation-projet
```

Les documents de cette intervention restent sur la branche courante sans commit ; aucune branche n'a été créée. Ne pas changer de branche si cela risque de perturber du travail local non examiné.

## 13. Réaliser les changements

Limiter l'activité aux fichiers utiles. Pour les pages, tenir compte des routes de `src/App.tsx`, des tableaux `src/lib/*Data.ts` et du layout partagé. Pour les formulaires, examiner ensemble Diagnostic, ProductDetail, les types et les migrations.

Une migration SQL versionnée peut affecter des données réelles lors de son application. La migration supprimant `case_study_comments` illustre cette distinction : modifier l'historique Git n'est pas une procédure de restauration de base.

## 14. Valider

Pour une modification applicative :

```powershell
npm run lint
npm run typecheck
npm run build
```

Les exécuter successivement. Un lancement simultané du lint et du build a provoqué ici un accès ESLint à un fichier temporaire Vite déjà supprimé. Consigner chaque code de sortie et ne pas confondre succès du build et succès du typage.

Pour une modification uniquement Markdown, relire les sources, liens, noms et chiffres ; `git diff --check` complète cette revue pour les changements suivis. Les nouveaux fichiers non suivis demandent une lecture explicite tant qu'ils ne sont pas ajoutés à l'index.

## 15. Relire les différences

```powershell
git diff --stat
git diff
git diff --check
git ls-files --others --exclude-standard
```

`git diff` seul n'affiche pas le contenu des nouveaux fichiers non suivis. Après sélection à l'index, utiliser `git diff --cached` et `git diff --cached --check` pour revoir exactement ce qui sera commité.

## 16. Créer un commit

Exemple pour les six documents, seulement lors d'une activité de commit :

```powershell
git add -- docs/git-workflow.md docs/information-architecture.md docs/positioning.md docs/project-brief.md docs/technical-baseline.md docs/user-journeys.md
git diff --cached --stat
git diff --cached --check
git diff --cached
git commit -m "docs: documenter le projet Axagenia Bolt existant"
```

La sélection explicite évite d'embarquer d'autres travaux. Ne pas annoncer que ce commit existe : il n'a pas été créé ici.

## 17. Publier une branche

Si la branche d'exemple a effectivement été créée et que sa publication fait partie de la tâche :

```powershell
git push -u origin docs/documentation-projet
```

Vérifier le remote et le contenu avant publication. Ne pas utiliser de push forcé pour contourner une divergence ou une protection.

## 18. Ouvrir une pull request

Proposer un titre ciblé et une description comprenant problème, changements et vérifications. Pour cette documentation, préciser que les contenus sont dérivés du dépôt Bolt, que les limites existantes sont signalées, et qu'aucun code métier n'a été modifié. Aucune présence de CLI GitHub ni connexion n'est supposée par ce guide.

## 19. Résoudre les commentaires

Corriger les points pertinents sur la même branche, vérifier à nouveau et expliquer les arbitrages. Ne pas masquer un contrôle échoué ou déclarer une affirmation commerciale validée sans source.

## 20. Fusionner

Relire le résultat complet et les éventuelles restrictions GitHub avant intégration. Le mode de fusion préféré n'est pas documenté : merge, squash ou rebase ne sont pas imposés ici. Ne pas déclarer les contrôles au vert si des erreurs restent ouvertes.

## 21. Supprimer une branche

Après intégration vérifiée, quitter la branche puis préférer une suppression locale non forcée avec `git branch -d nom-de-branche`. En cas de refus, examiner les commits restant à préserver. La suppression distante est une action séparée ; aucune suppression n'est exécutée pendant cette intervention.

## 22. Synchroniser le dépôt local

Sur un arbre de travail approprié, après examen des changements locaux et dans le cadre d'une synchronisation demandée :

```powershell
git switch main
git pull --ff-only origin main
```

`--ff-only` refuse une intégration divergente plutôt que créer une fusion implicite. Si la commande refuse, examiner les historiques et choisir la suite en connaissance de cause.

## 23. Gérer un conflit

Identifier l'opération en cours avec `git status`, lire les deux versions, reconstruire le résultat souhaité et vérifier avant de poursuivre. Un conflit dans un tableau de données peut casser les slugs ; un conflit de migration peut affecter schéma et permissions.

Éviter une résolution globale « ours/theirs » sans lecture. Pour abandonner une opération en cours, utiliser la commande correspondant réellement à cette opération, après vérification des travaux à conserver.

## 24. Abandonner une activité

Examiner les différences et commits avant toute suppression. Pour désélectionner un fichier sans effacer son contenu, `git restore --staged chemin` agit sur l'index. À l'inverse, `git restore chemin` peut jeter les modifications locales : ce n'est pas une consultation.

Ne pas supprimer le dossier du projet, `docs/`, des fichiers non suivis ou des données Supabase pour simplement quitter une branche.

## 25. Corriger une urgence

Isoler le changement nécessaire, vérifier les routes/formulaires affectés et publier selon le processus applicable. Pour annuler un commit déjà partagé, une inversion avec `git revert` préserve généralement la traçabilité, mais doit être relue et peut créer des conflits. Elle ne restaure pas les données qu'une migration SQL aurait supprimées.

## 26. Situation locale actuelle

Un dépôt Git existe déjà, avec `main` suivant `origin/main` et un commit initial accessible. Il n'est pas nécessaire de lancer `git init`. La documentation est ajoutée localement, sans indexation, commit ou changement de branche.

## 27. Situation avec GitHub

Le remote GitHub est déjà configuré ; il ne s'agit donc pas d'une future création de dépôt distant. Restent inconnus : permissions, protections, PR existantes, CI distante et éventuel déclenchement de déploiement. Aucune configuration distante n'a été modifiée.

## 28. Conventions proposées

### Branches

Préfixes possibles selon le travail : `docs/`, `fix/`, `feat/`, `chore/`, suivis d'un sujet court. Aucun préfixe n'est actuellement imposé par un fichier du dépôt.

### Commits

Un changement cohérent par commit ; message décrivant l'effet utile, par exemple `fix: sécuriser le contexte produit du formulaire`. Ces conventions sont des propositions, pas une description inventée de l'historique existant.

### Fichiers à préserver

Conserver le lockfile et les migrations dans les revues concernées. Ne pas ajouter `node_modules/`, `dist/`, logs ou secrets. `.env` est ignoré, mais chaque autre variante d'environnement doit être contrôlée. Les variables publiques Vite ne doivent jamais contenir une clé Supabase privilégiée.

## 29. Exemples d'activités pertinentes

| Activité possible | Périmètre à examiner | Vérification utile |
|---|---|---|
| Documentation | Les six fichiers de `docs/` et leurs sources | Cohérence, liens, inventaires |
| Erreur TypeScript produit | `ProductDetailPage.tsx` | `typecheck`, demande avec message vide/non vide |
| Nettoyage lint | Imports et variable inutilisés signalés | Relance du lint, types et build |
| Contexte de demande produit | Formulaire, table et confirmation | Produit identifié même avec message libre |
| Confidentialité et accès | Texte, client et politiques SQL | Concordance et essais avec rôles dans une base de test |
| Navigation accessible | `Header.tsx` et layout | Clavier, focus et tailles intermédiaires |

Ces activités ne sont ni lancées ni approuvées par leur présence dans le document.

## 30. Erreurs fréquentes à éviter

Confondre référence `origin/main` locale et état actuel du serveur ; traiter un build réussi comme une recette complète ; oublier les fichiers non suivis ; commiter une sortie générée ; publier des valeurs d'environnement ; appliquer une migration destructive comme si elle ne concernait que du code ; recopier les hypothèses du projet modèle ; présenter les échecs préexistants comme corrigés.

## Classification pratique des commandes

| Catégorie | Exemples | Attention |
|---|---|---|
| Consultation locale | `status`, `diff`, `log`, `show`, `branch -avv`, `remote -v` | Les nouveaux fichiers nécessitent une lecture séparée |
| Changement local | `switch`, `add`, `commit`, `restore --staged` | Vérifier branche, index et travail à préserver |
| Accès ou modification distante | `fetch`, `pull`, `push`, PR, fusion GitHub | `fetch` actualise les références ; les autres peuvent intégrer ou publier |
| Potentiellement destructif | `reset --hard`, `clean -fd`, `branch -D`, push forcé | Risque de perte ou réécriture ; ne pas utiliser comme raccourci |

Les autorisations découlent de la demande de travail et des règles applicables, pas de ce tableau. Aucun envoi distant ou effacement n'a été nécessaire pour créer la documentation.
