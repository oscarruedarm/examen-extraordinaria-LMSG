const hotel = JSON.parse(localStorage.getItem('hotelSeleccionado'));
const detallesContainer = document.getElementById('detalles-hotel');

//verifica si hay en el localStorage un hotel seleccionadoo sino pinta un p que no no hay información
if (hotel) {
    mostrarDetallesHotel(hotel);

}else {
    detallesContainer.innerHTML = '<p>No se encontró información del hotel seleccionado.</p>';
}

function mostrarDetallesHotel(hotel) {
    detallesContainer.innerHTML = `
         <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mt-8 flex flex-col items-center text-center">
            <img src="${hotel.imagen}" alt="${hotel.nombre}" class="w-full h-48 object-cover rounded-lg mb-4">
            <h2 class="text-2xl font-bold text-blue-700 mb-2">${hotel.nombre}</h2>
            <p class="text-gray-700 text-base mb-2">${hotel.descripcion}</p>
            <p class="text-gray-500 text-sm mb-1"><span class="font-semibold">Ubicación:</span> ${hotel.ubicacion}</p>
            <p class="text-gray-800 font-bold text-lg mb-4">$${hotel.precio} <span class="text-sm font-normal">por noche</span></p>
            <button id="favoritos-btn" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">favoritos</button>
        </div>
    `;
    //  evento al botón de favoritos
    const favoritosBtn = document.getElementById('favoritos-btn');  
    favoritosBtn.addEventListener('click', () => {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        if (!favoritos.some(fav => fav.nombre === hotel.nombre)) {
            favoritos.push(hotel);
            localStorage.setItem('favoritos', JSON.stringify(favoritos));

            //crea modal de agregado a favoritos
            const modalcontainer = document.getElementById('modal');   
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center';
            modal.innerHTML = `
                <div class="bg-white rounded-lg p-6 text-center">
                    <h3 class="text-lg font-semibold mb-4">Hotel agregado a favoritos</h3>
                    <button id="close-modal" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Cerrar</button>
                </div>
            `;
            modalcontainer.appendChild(modal);
            // Evento para cerrar el modal
            const closeModalBtn = document.getElementById('close-modal');   
            closeModalBtn.addEventListener('click', () => {
            modalcontainer.removeChild(modal);
            });
        } else {
            alert('Este hotel ya está en tus favoritos.');
        }
    });

}