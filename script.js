const events = [
    // Musique
    {
        name: "Concert Rock Legends",
        date: "15 Juillet 2024",
        location: "Stade de France",
        price: "65€",
        category: "Musique",
        image: "https://i.imgur.com/z723vLS.jpeg"

    },
    {
        name: "Festival Électro Summer",
        date: "22 Août 2024",
        location: "Parc des Expositions",
        price: "85€",
        category: "Festival",
        image: "https://i.imgur.com/wSopyr5.jpeg"
    },
    {
        name: "Jazz Under the Stars",
        date: "5 Septembre 2024",
        location: "Jardin des Tuileries",
        price: "55€",
        category: "Musique",
        image: "https://i.imgur.com/D1FE14X.jpeg"
    },
    // Sport
    {
        name: "Finale de Football",
        date: "10 Juin 2024",
        location: "Stade de France",
        price: "120€",
        category: "Sport",
        image: "/api/placeholder/400/250?text=Football+Match"
    },
    {
        name: "Marathon de Paris",
        date: "7 Avril 2024",
        location: "Centre de Paris",
        price: "95€",
        category: "Sport",
        image: "/api/placeholder/400/250?text=Marathon"
    },
    // Théâtre
    {
        name: "Le Roi Lion - Spectacle Musical",
        date: "15 Mars 2024",
        location: "Théâtre des Champs-Élysées",
        price: "95€",
        category: "Théâtre",
        image: "/api/placeholder/400/250?text=Le+Roi+Lion"
    },
    {
        name: "Spectacle Comique",
        date: "5 Janvier 2024",
        location: "Olympia",
        price: "45€",
        category: "Humour",
        image: "/api/placeholder/400/250?text=Comedy+Show"
    },
    // Conférences
    {
        name: "Sommet de l'Innovation Technologique",
        date: "20 Novembre 2024",
        location: "Palais des Congrès",
        price: "250€",
        category: "Conférence",
        image: "/api/placeholder/400/250?text=Tech+Conference"
    },
    {
        name: "Forum Mondial de l'Environnement",
        date: "12 Décembre 2024",
        location: "Centre de Conventions",
        price: "180€",
        category: "Conférence",
        image: "/api/placeholder/400/250?text=Environment+Forum"
    },
    // Danses
    {
        name: "Ballet Contemporain",
        date: "8 Février 2024",
        location: "Opéra Garnier",
        price: "75€",
        category: "Danse",
        image: "/api/placeholder/400/250?text=Ballet+Show"
    },
    {
        name: "Spectacle de Danse Moderne",
        date: "22 Mai 2024",
        location: "Théâtre de la Ville",
        price: "65€",
        category: "Danse",
        image: "/api/placeholder/400/250?text=Modern+Dance"
    },
    // Festivals
    {
        name: "Festival de Cinéma",
        date: "15 Mai 2024",
        location: "Palais des Festivals",
        price: "100€",
        category: "Festival",
        image: "/api/placeholder/400/250?text=Film+Festival"
    },
    {
        name: "Festival Gastronomique",
        date: "30 Juin 2024",
        location: "Parc de la Villette",
        price: "50€",
        category: "Festival",
        image: "/api/placeholder/400/250?text=Food+Festival"
    }
    // Total: 12 événements. Vous pouvez ajouter les 23 restants de la même manière
];

// Reste du code JavaScript précédent (fonctions generateEventCards, filterEvents, openTicketModal)
function generateEventCards(eventsToShow) {
    const container = document.getElementById('events-container');
    container.innerHTML = '';
    eventsToShow.forEach((event, index) => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <img src="${event.image}" alt="${event.name}">
            <div class="event-details">
                <div>
                    <h3>${event.name}</h3>
                    <p>Date: ${event.date}</p>
                    <p>Lieu: ${event.location}</p>
                    <p>Prix: ${event.price}</p>
                </div>
                <button class="buy-ticket" onclick="openTicketModal(${index})">
                    Acheter un Ticket
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterEvents() {
    const category = document.getElementById('category-filter').value;
    const filteredEvents = category === 'all' 
        ? events 
        : events.filter(event => event.category === category);
    generateEventCards(filteredEvents);
}

function openTicketModal(index) {
    const event = events[index];
    const ticketInfo = `
        <p><strong>Événement:</strong> ${event.name}</p>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Lieu:</strong> ${event.location}</p>
        <p><strong>Prix:</strong> ${event.price}</p>
    `;
    
    document.getElementById('ticket-image').src = event.image;
    document.getElementById('ticket-info').innerHTML = ticketInfo;
    
    // Générer un QR Code unique
    const uniqueCode = `EVENT:${event.name}_${Date.now()}`;
    const qr = qrcode(0, 'M');
    qr.addData(uniqueCode);
    qr.make();
    document.getElementById('qr-code').innerHTML = qr.createImgTag(5);
    
    document.getElementById('purchase-button').onclick = () => {
        alert('Achat confirmé !');
        document.getElementById('ticket-modal').style.display = 'none';
    };
    
    document.getElementById('ticket-modal').style.display = 'flex';
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    generateEventCards(events);
});










// Fermer le bouton "Fermer"
function closeTicketModal() {
    document.getElementById('ticket-modal').style.display = 'none';
  }



