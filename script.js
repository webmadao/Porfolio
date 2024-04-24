// index.js

// Charger les projets à partir du fichier JSON
fetch('projets.json')
  .then(response => response.json())
  .then(data => {
    const projets = data.projets;
    const projetList = document.querySelector('.les-projets');

    // Afficher chaque projet dans une liste
    projets.forEach(projet => {
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
  })
  .catch(error => {
    console.error('Erreur lors du chargement des projets : ', error);
  });

//   const projetsFilter = document.querySelector('.filtres');

//   const filtres = document.querySelector('.filtres');
//   filtres.addEventListener('click', function(event) {
    
//     const target = event.target;
//     if (target.tagName === 'A') {
//       const actives = document.querySelectorAll('.active');
//       actives.forEach(function(active) {
//         active.classList.remove('active');
       
//       });
//       target.parentElement.classList.add('active');
//     }
//   });







