# Nexora Studio

Site vitrine statique de Nexora Studio — agence digitale de haute couture.

## Lancer localement

```bash
python3 -m http.server 3000
```

Puis ouvrir `http://localhost:3000`.

## Personnaliser

- **Logo et favicon** : remplacer `logo.svg` et `logo.png`.
- **Hero** : remplacer `hero-art.svg` ou ajuster les formes dans `style.css`.
- **Réalisations** : modifier les cartes de la section `#work` dans `index.html` et conserver l’attribut `data-category`.
- **Réseaux sociaux** : remplacer les liens `#contact` du footer par les URLs officielles.
- **Coordonnées** : remplacer `bonjour@nexora.studio` par l’adresse réelle.
- **Textes et chiffres** : mettre à jour les contenus de `index.html`; les statistiques actuelles sont explicitement des indicateurs de positionnement et ne constituent pas des résultats vérifiés.
- **SEO** : mettre à jour les URLs canoniques, `sitemap.xml`, `robots.txt` et les balises Open Graph après la mise en ligne sur un autre domaine.

## Structure

- `index.html` : page complète et contenu éditorial.
- `style.css` : direction visuelle responsive, accessibilité et animations.
- `script.js` : menu mobile, timeline accessible, filtres portfolio et apparition progressive.
- `hero-art.svg` : visuel abstrait du hero.
- `logo.svg` / `logo.png` : identité Nexora.
- `manus-routes.json` : manifeste de route Web Dev.
- `.github/workflows/deploy-pages.yml` : publication automatique GitHub Pages à chaque push sur `main`.
