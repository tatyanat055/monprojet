const express = require('express');
const app = express();
const path = require('path');

// Configuration EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour les fichiers statiques (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
  res.render('index');
});

// Route pour les équipes
app.get('/equipes', (req, res) => {
  res.render('equipes'); //  equipes.ejs 
});

// Route pour les classements
app.get('/classements', (req, res) => {
    res.render('classement'); // Utilise classement.ejs
  });  


// Route pour la page de contact
app.get('/contact', (req, res) => {
  res.render('contact'); // contact.ejs 
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
