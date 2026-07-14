# Site Rose Hartwell

Site statique (HTML/CSS/JS pur, aucune dependance, aucun framework).
Ca veut dire : il tourne pareil sur GitHub Pages gratuit aujourd'hui
et sur n'importe quel hebergeur payant plus tard (Netlify, Vercel, OVH,
o2switch, etc.) - il suffit de copier le dossier entier, rien a reecrire.

## Ajouter un livre (jusqu'a 100+, aucun probleme)

Ouvrir `js/books-data.js`, copier un bloc existant, coller, modifier :

```js
{
  title: "Titre du livre",
  subtitle: "Sous-titre KDP (ou laisser vide entre guillemets)",
  asin: "B0XXXXXXXX",
  price: "9.99",
  category: "Health & Caregiving"   // ou une nouvelle categorie
}
```

Enregistrer. C'est tout - la page (grille, filtres, compteur de livres,
recherche) se met a jour automatiquement, aucune autre modification
necessaire.

## Tester en local

Ouvrir simplement `index.html` dans un navigateur (double-clic). Aucun
serveur necessaire pour tester.

## Heberger gratuitement (GitHub Pages)

1. Creer un compte GitHub gratuit (github.com) si pas deja fait.
2. Creer un nouveau repository (public), par exemple `rose-hartwell-site`.
3. Deposer tout le contenu de ce dossier dans le repository (via
   l'interface web "Upload files" - glisser-deposer tous les fichiers
   et dossiers, y compris `css/`, `js/`, `assets/`).
4. Dans le repository : Settings > Pages > Source > choisir la branche
   "main" et le dossier "/ (root)" > Save.
5. Apres 1-2 minutes, le site est en ligne a l'adresse
   `https://TON-PSEUDO-GITHUB.github.io/rose-hartwell-site/`

## Passer plus tard sur un hebergeur payant / nom de domaine pro

Aucune migration technique compliquee : ce sont des fichiers statiques.
Il suffit de :
1. Acheter un nom de domaine (ex: rosehartwell.com) chez un registrar
   (Namecheap, OVH, Google Domains, etc.)
2. Prendre un hebergement web (mutualise suffit largement pour un site
   vitrine) ou un service comme Netlify/Vercel (gratuit egalement,
   mais avec option de domaine personnalise)
3. Uploader exactement les memes fichiers de ce dossier
4. Pointer le nom de domaine vers l'hebergeur (le registrar/l'hebergeur
   fournit les instructions DNS exactes)

Rien dans le code n'est specifique a GitHub Pages - pas de config
particuliere a retirer.
