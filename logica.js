const hoteles = [
  {
    nombre: "Hotel Sol y Mar",
    descripcion: "Disfruta de la playa y el sol en un ambiente relajante.",
    ubicacion: "Cancún, México",
    precio: 120,
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Montaña Azul",
    descripcion: "Escápate a la tranquilidad de la montaña.",
    ubicacion: "Bariloche, Argentina",
    precio: 90,
    imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "City Lights Hotel",
    descripcion: "Vive la ciudad al máximo con todas las comodidades.",
    ubicacion: "Madrid, España",
    precio: 150,
    imagen: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Refugio del Bosque",
    descripcion: "Un lugar acogedor rodeado de naturaleza.",
    ubicacion: "Pucón, Chile",
    precio: 80,
    imagen: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Oasis",
    descripcion: "Relájate en nuestro spa y disfruta de la piscina.",
    ubicacion: "Lima, Perú",
    precio: 110,
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Costa Dorada",
    descripcion: "Vistas increíbles al mar y excelente gastronomía.",
    ubicacion: "Cartagena, Colombia",
    precio: 130,
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Central",
    descripcion: "Ubicación privilegiada en el centro de la ciudad.",
    ubicacion: "Buenos Aires, Argentina",
    precio: 95,
    imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Lago Escondido",
    descripcion: "Despierta con vistas al lago y montañas.",
    ubicacion: "Villa La Angostura, Argentina",
    precio: 140,
    imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Boutique Roma",
    descripcion: "Estilo y elegancia en cada detalle.",
    ubicacion: "Roma, Italia",
    precio: 200,
    imagen: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Sakura",
    descripcion: "Vive la cultura japonesa en un entorno único.",
    ubicacion: "Kioto, Japón",
    precio: 180,
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Desert Dream",
    descripcion: "Experiencia única en el desierto.",
    ubicacion: "Marrakech, Marruecos",
    precio: 160,
    imagen: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Nórdico",
    descripcion: "Diseño escandinavo y confort.",
    ubicacion: "Oslo, Noruega",
    precio: 170,
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Safari",
    descripcion: "Aventura y naturaleza en África.",
    ubicacion: "Nairobi, Kenia",
    precio: 210,
    imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Atlántico",
    descripcion: "Descanso frente al mar.",
    ubicacion: "Lisboa, Portugal",
    precio: 125,
    imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Imperial",
    descripcion: "Lujo y tradición en el corazón de la ciudad.",
    ubicacion: "Viena, Austria",
    precio: 220,
    imagen: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Aurora",
    descripcion: "Observa la aurora boreal desde tu habitación.",
    ubicacion: "Reikiavik, Islandia",
    precio: 230,
    imagen: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Colonial",
    descripcion: "Historia y confort en cada rincón.",
    ubicacion: "Quito, Ecuador",
    precio: 105,
    imagen: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Jardín",
    descripcion: "Rodeado de jardines y naturaleza.",
    ubicacion: "Medellín, Colombia",
    precio: 115,
    imagen: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Mirador",
    descripcion: "Vistas panorámicas de la ciudad.",
    ubicacion: "Barcelona, España",
    precio: 175,
    imagen: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80"
  },
  {
    nombre: "Hotel Paraíso",
    descripcion: "Un paraíso tropical para relajarte.",
    ubicacion: "Punta Cana, República Dominicana",
    precio: 195,
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  }
];
 // imprimimos los hoteles del array de hoteles que cremos al principio
function mostrarHoteles() {
  const contenedor = document.getElementById('contenedor-hoteles');
  contenedor.innerHTML = '';
    hoteles.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow p-4 m-2 max-w-xs w-full';
        card.innerHTML = `
        <img src="${hotel.imagen}" alt="${hotel.nombre}" class="w-full h-32 object-cover rounded-t-lg mb-2">
      <h3 class="text-lg font-semibold mt-2">${hotel.nombre}</h3>
      <p class="text-gray-600 text-sm mb-1">${hotel.descripcion}</p>
      <p class="text-gray-500 text-xs mb-2">${hotel.ubicacion}</p>
      <p class="text-gray-800 font-bold mb-2">$${hotel.precio} por noche</p>
      <div class="flex gap-2 w-full justify-center">
        <button class="reservar-btn bg-blue-500 text-white px-3 py-1 rounded text-xs">Reservar</button>
        <button class="ver-btn bg-blue-500 text-white px-3 py-1 rounded text-xs">Ver Hotel</button>
        <button class="agregar-btn bg-wite-500 text-white px-2 py-1 rounded text-xs">❤</button>
      </div>
    `;
        contenedor.appendChild(card);

        // Agregamos el evento al botón de filtrar
        const filtro = document.getElementById('search-button');
        filtro.addEventListener('click', filtrarHoteles);
        
        // Agregamos el evento al botón de ver hotel
        const verBtn = card.querySelector('.ver-btn');
        verBtn.addEventListener('click', () => {
            localStorage.setItem('hotelSeleccionado', JSON.stringify(hotel));
            window.location.href = 'detalles.html'; 
            // Redirige a la página de detalles del hotel
        });
        // Agregamos el evento al botón de agregar a favoritos
        const agregarBtn = card.querySelector('.agregar-btn');  
        agregarBtn.addEventListener('click', () => {
            const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
            if (!favoritos.some(fav => fav.nombre === hotel.nombre)) {
                favoritos.push(hotel);
                localStorage.setItem('favoritos', JSON.stringify(favoritos));
            } else {
                alert('Este hotel ya está en tus favoritos.');
            }
        });
        // Agregamos el evento al botón de reservar
        const reservarBtn = card.querySelector('.reservar-btn');
        reservarBtn.addEventListener('click', () => {
        reservarHotel(hotel);
        });
    });
}


//filtramos hoteles por nombre
function filtrarHoteles( ) {
    hoteles.forEach(hotel => {
        const nombre = hotel.nombre.toLowerCase();
        const input = document.getElementById('search-input').value.toLowerCase();
        const card = document.querySelector(`div:contains('${hotel.nombre}')`);
        
        if (nombre.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
  
}
//reservamos hoteles y lo pasamos al localStorage
function reservarHotel(hotel) {
    localStorage.setItem('hotelReservado', JSON.stringify(hotel));
    console.log("reservado", hotel);
}




mostrarHoteles();
