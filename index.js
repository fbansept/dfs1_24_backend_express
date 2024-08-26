const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors"); // Importer le middleware CORS

// Activer CORS pour toutes les requêtes
app.use(cors());

// Exemple de données de catégories
const categories = [
  {
    nom: "tres bien",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvduAFm6y75yGwZdzBtNmnsS0ovgTkwBg-Hg&s",
      "https://img-3.journaldesfemmes.fr/BNubGw2ChgpFyw3eK2g-PMwF28Y=/1240x/smart/7231e1a7ad4a4fbb94f3498c11392d23/ccmcms-jdf/36619834.jpg",
    ],
  },
  {
    nom: "bien",
    images: [
      "https://image.cookly.me/tr:h-400,w-704,pr-true,rt-auto/images/bangkok-street-food.jpg",
    ],
  },
  { nom: "moyen", images: [] },
  { nom: "bof", images: [] },
  { nom: "nul", images: [] },
];

// Route pour retourner la liste des catégories
app.get("/categories", (req, res) => {
  res.json(categories);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
