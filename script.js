// Fonction pour changer de section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
  }

  // Graphique en courbes avec Chart.js (section Statistiques)
  const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',  // Type de graphique en courbes
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],  // Mois
        datasets: [{
          label: 'Visites Mensuelles',
          data: [1200, 1500, 1000, 2000, 2600, 1900],  // Données des visites
          backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Couleur de fond de la ligne
          borderColor: 'rgba(54, 162, 235, 1)',  // Couleur de la ligne
          borderWidth: 2,  // Épaisseur de la ligne
          fill: true  // Remplir sous la courbe
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true  // L'axe Y commence à 0
          }
        }
      }
  });