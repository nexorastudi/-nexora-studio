# Direction visuelle — Nexora Studio

## Direction retenue

La direction confirmée est une **haute couture digitale éditoriale** : précision suisse, contraste noir/blanc cassé, bleu cobalt comme accent de signature, compositions architecturales et respiration généreuse.

## Mouvement de design

Un système de mise en page éditorial inspiré des magazines de design, croisé avec la rigueur des interfaces produits premium. Le site doit sembler construit par une équipe de direction artistique, jamais assemblé à partir d’un template.

## Principes

- Peu d’éléments, mais chacun avec un rôle clair.
- Contraste fort : encre noire, surfaces blanc cassé, bleu cobalt ponctuel.
- Grilles, lignes de repère et index numériques pour donner une précision quasi architecturale.
- Les preuves de méthode et de clarté priment sur les effets décoratifs.
- Les animations sont courtes, calmes et désactivables.

## Philosophie couleur

- `#111111` : fond d’autorité et profondeur.
- `#F5F5F0` : surface éditoriale chaude et lisible.
- `#2563EB` : signature Nexora, utilisée pour les actions et repères.
- `#60A5FA` : lumière secondaire et états de survol.
- `#1F2937` : texte secondaire et structure.

## Paradigme de layout

- Hero en deux colonnes, avec titre à gauche et sculpture géométrique à droite.
- Sections alternant surface sombre et surface claire pour rythmer la lecture.
- Grilles de services et de projets, avec numérotation visible.
- Timeline en étapes pour rendre le processus mémorisable.
- Ancres de navigation simples et parcours de conversion répété sans insistance.

## Éléments signature

- Mot-symbole en capitales avec monogramme `N` en ruban géométrique.
- Règles fines, index `01 / 06`, micro-labels en capitales.
- Sculpture vectorielle abstraite : plans noirs, arc cobalt, halo bleu discret.
- Cartes projet avec filtre de catégorie et interactions par déplacement léger.

## Philosophie d’interaction

Chaque interaction doit répondre à une intention : guider, confirmer ou révéler. Les boutons sont francs, les états de focus visibles, les filtres utilisables au clavier. Aucun effet ne doit ralentir la lecture ou masquer le contenu.

## Animation

- Apparition progressive des sections par `IntersectionObserver`.
- Translation verticale de 16 px maximum et durée de 650 ms.
- Survols avec changement de bordure, de contraste et de translation de 4 px.
- Menu mobile avec ouverture par hauteur/opacity.
- `prefers-reduced-motion` désactive les transitions non essentielles.

## Typographie

- Sora pour les grands titres, le mot-symbole et les chiffres.
- Manrope pour la navigation, les paragraphes, les labels et les boutons.
- Titres courts, incisifs, avec une largeur contrôlée.
- Corps de texte confortable, interligne élevé et contraste AA.

## Essence de marque

Nexora transforme une intention de marque en un système visuel et digital cohérent. L’image n’est pas une décoration : elle devient un levier de confiance, de clarté et d’impact.

## Voix de marque

Directe, précise, ambitieuse et calme. Pas de jargon de consultant, pas de promesse chiffrée non vérifiée. Le ton invite à l’action sans surjouer la technologie.

## Logo / monogramme

Le symbole repose sur un `N` construit par deux rubans angulaires qui se répondent, évoquant la connexion entre design, intelligence et stratégie. Le symbole est lisible en petit et fonctionne sur fond noir ou blanc cassé.

## Couleur de marque

Le bleu cobalt `#2563EB` est la signature : visible dans les CTA, les repères de grille et la sculpture héroïque, mais toujours encadré par le noir et le blanc cassé.

## Règle de remplacement des contenus

Les projets, coordonnées et réseaux sociaux sont centralisés dans les sections marquées par des commentaires `DATA` dans `index.html` et dans les tableaux `projects` / `processSteps` de `script.js`. Les chiffres affichés dans la section statistiques sont explicitement présentés comme indicateurs de positionnement jusqu’à remplacement par des données réelles et vérifiables.
