
const favoritosContainer = document.getElementById('favoritos-container');
const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Verifica si hay favoritos en el localStorage
if (favoritos.length > 0) {
    mostrarFavoritos(favoritos);
}   else {
    favoritosContainer.innerHTML = '<p>No tienes hoteles favoritos.</p>';
}
function mostrarFavoritos(favoritos) {
    favoritosContainer.innerHTML = ''; // Limpia el contenedor

    favoritos.forEach(hotel => {
        const card = document.createElement('div');
        card.className = 'max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 mt-8';
        card.innerHTML = `
            <img src="${hotel.imagen}" alt="${hotel.nombre}" class="w-full h-48 object-cover rounded-lg mb-4">
            <h2 class="text-2xl font-bold text-blue-700 mb-2">${hotel.nombre}</h2>
            <p class="text-gray-700 text-base mb-2">${hotel.descripcion}</p>
            <p class="text-gray-500 text-sm mb-1"><span class="font-semibold">Ubicación:</span> ${hotel.ubicacion}</p>
            <p class="text-gray-800 font-bold text-lg mb-4">$${hotel.precio} <span class="text-sm font-normal">por noche</span></p>
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition reservar-btn">Reservar</button>
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition eliminar-btn">eliminar</button>
        `;
        favoritosContainer.appendChild(card);
        // Agrega el evento al botón de eliminar
        const eliminarBtn = card.querySelector('.eliminar-btn');
        eliminarBtn.addEventListener('click', () => {
            const index = favoritos.indexOf(hotel);
            if (index > -1) {
                favoritos.splice(index, 1); // Elimina el hotel de favoritos
                localStorage.setItem('favoritos', JSON.stringify(favoritos)); // Actualiza el localStorage
                mostrarFavoritos(favoritos); // Vuelve a mostrar los favoritos actualizados
            }
        });

        // Agrega el evento al botón de reservar
        const reservarBtn = card.querySelector('.reservar-btn');
        reservarBtn.addEventListener('click', () => {
            reservarHotel(hotel);
        });
    });
}       

