
// FONCTIONNEMENT DE LA CARTE

// Je recupère la div de la CARTE
const mapid = document.querySelector('#mapid');

// Je charge la carte quand la page HTML est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Je récupère les coordonnées du lieu voulu
    let lieux = [
        [
            'E.Leclerc de Saint Aunes, 34130 Saint Aunes',
            43.64962000000003,
            3.9780300000000466,
        ],
        [
            'Halle Tropisme, 121 Rue Fontcouverte, 34000 Montpellier',
            43.60270000696309,
            3.8584200310792767,
        ],
        [
            'Complexe Sportif Yves du Manoir, 500 Av. de Vanières, 34070 Montpellier',
            43.59270177279245,
            3.8522865868233556,
        ],
        [
            '1744 Av. Albert Einstein, 34000 Montpellier',
            43.611089998675084,
            3.917979991025277,
        ],
    ];

    // Le lieu ou je souhaite initialiser la position de ma carte
    let map = L.map('mapid').setView([43.61086000000006, 3.8761200000000713], 12);
    mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
    }).addTo(map);

    // Je fait une boucle pour afficher tous les lieux d'implantations
    for (let i = 0; i < lieux.length; i++) {
        marker = new L.marker([lieux[i][1], lieux[i][2]])
            .bindPopup(lieux[i][0])
            .addTo(map);
    }
});
