// Charger les projets à partir du fichier JSON
fetch('projets.json')
  .then(response => response.json())
  .then(data => {
    const projets = data.projets;
    const projetList = document.querySelector('.les-projets');

    // Fonction pour afficher les projets en fonction de la catégorie sélectionnée
    function afficherProjets(categorie) {
      projetList.innerHTML = ''; // Vider la liste actuelle

      const projetsFiltres = categorie === 'Tous' ? projets : projets.filter(projet => projet.categorie === categorie);

      // Afficher chaque projet filtré dans une liste
      projetsFiltres.forEach(projet => {
        const item = document.createElement('li');
        item.innerHTML = `
          <a data-name="${projet.categorie}" href="${projet.lienSite}" title="Rendu du site">
            <figure>
              <img
                src="${projet.image}"
                alt="${projet.altText}"
              />
              <figcaption>
                <a
                  href="${projet.lienRepo}"
                  title="Repo Github"
                >
                  <h3>${projet.titre}</h3>
                  <p>${projet.description}</p>
                </a>
              </figcaption>
            </figure>
          </a>
        `;
        projetList.appendChild(item);
      });
    }

    // Afficher tous les projets par défaut
    afficherProjets('Tous');

    // Gestionnaire d'événements pour les filtres
    const filtres = document.querySelector('.filtres');
    filtres.addEventListener('click', function(event) {
      const target = event.target;
      if (target.tagName === 'A') {
        const actives = document.querySelectorAll('.filtres.active');
        actives.forEach(function(active) {
          active.classList.remove('active');
        });
        target.parentElement.classList.add('active');

        const categorie = target.parentElement.getAttribute('data-name');
        afficherProjets(categorie);
      }
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement des projets : ', error);
  });
