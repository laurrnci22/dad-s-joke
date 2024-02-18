
//require('dotenv').config({ path: './.env'} ) ;

const portfinder = require('portfinder');

const path = require('path')

const express = require('express');
const site = express();

site.set('view engine', 'ejs'); // Définition du moteur de rendu 
site.set('views', path.join(__dirname, 'views')); // Déclaration du dossier contenant les vues

const expressLayouts = require('express-ejs-layouts');
site.use(expressLayouts);
site.set('layout', '../views/layouts/layout');


site.use(express.static(path.join(__dirname,'public')));

site.use((req, res, next) => {
    const now = new Date().toDateString() ;
    console.log(`${now} : une requête ${req.method} est arrivée !`);
    next();
});

const randomrouter = require('./routes/randomrouter');
site.use('/jokes/random',randomrouter);

const listrouter = require('./routes/listrouter');
site.use('/jokes/list',listrouter);

const jokerouter = require('./routes/jokerouter');
site.use('/jokes/joke',jokerouter);

// site.listen(port,()=>{
//     console.log(`Le server écoute sur http://127.0.01:${port}/`);
// })

// Trouver un port disponible de manière dynamique
portfinder.getPort((err, port) => {
    if (err) {
      console.error('Erreur lors de la recherche du port disponible :', err);
    } else {
      // Démarrage du serveur sur le port trouvé
      site.listen(port, () => {
        console.log(`Le server écoute sur http://127.0.0.1:${port}/jokes/list`);
      });
    }
  });
