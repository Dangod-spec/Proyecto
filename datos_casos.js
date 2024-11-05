let data;		
// Datos de los años y localidades
data = {
    2012: [['Usaquén', 143], ['Chapinero', 82], ['Santa Fe', 33], ['San Cristóbal', 102],
           ['Usme', 123], ['Tunjuelito', 49], ['Bosa', 219], ['Kennedy', 180], 
           ['Fontibón', 105], ['Engativá', 151], ['Suba', 172], ['Barrios Unidos', 76], 
           ['Teusaquillo', 49], ['Los Mártires', 31], ['Antonio Nariño', 24], 
           ['Puente Aranda', 52], ['La Candelaria', 4], ['Rafael Uribe Uribe', 116], 
           ['Ciudad Bolívar', 214], ['Sumapaz', 5]],
  
    2013: [['Usaquén', 132], ['Chapinero', 27], ['Santa Fe', 48], ['San Cristóbal', 131], 
           ['Usme', 172], ['Tunjuelito', 67], ['Bosa', 252], ['Kennedy', 268], 
           ['Fontibón', 87], ['Engativá', 153], ['Suba', 242], ['Barrios Unidos', 34], 
           ['Teusaquillo', 40], ['Los Mártires', 42], ['Antonio Nariño', 18], 
           ['Puente Aranda', 74], ['La Candelaria', 9], ['Rafael Uribe Uribe', 115], 
           ['Ciudad Bolívar', 273], ['Sumapaz', 4]],
  
    2014: [['Usaquén', 175], ['Chapinero', 74], ['Santa Fe', 59], ['San Cristóbal', 192], 
           ['Usme', 286], ['Tunjuelito', 140], ['Bosa', 335], ['Kennedy', 352], 
           ['Fontibón', 179], ['Engativá', 195], ['Suba', 305], ['Barrios Unidos', 96], 
           ['Teusaquillo', 79], ['Los Mártires', 54], ['Antonio Nariño', 44], 
           ['Puente Aranda', 67], ['La Candelaria', 23], ['Rafael Uribe Uribe', 201], 
           ['Ciudad Bolívar', 385], ['Sumapaz', 5]],
  
    2015: [['Usaquén', 207], ['Chapinero', 75], ['Santa Fe', 76], ['San Cristóbal', 211], 
           ['Usme', 229], ['Tunjuelito', 166], ['Bosa', 448], ['Kennedy', 441], 
           ['Fontibón', 191], ['Engativá', 112], ['Suba', 389], ['Barrios Unidos', 96], 
           ['Teusaquillo', 63], ['Los Mártires', 73], ['Antonio Nariño', 57], 
           ['Puente Aranda', 81], ['La Candelaria', 14], ['Rafael Uribe Uribe', 287], 
           ['Ciudad Bolívar', 524], ['Sumapaz', 2]],
  
    2016: [['Usaquén', 170], ['Chapinero', 48], ['Santa Fe', 43], ['San Cristóbal', 156], 
           ['Usme', 244], ['Tunjuelito', 84], ['Bosa', 354], ['Kennedy', 253], 
           ['Fontibón', 126], ['Engativá', 224], ['Suba', 383], ['Barrios Unidos', 72], 
           ['Teusaquillo', 44], ['Los Mártires', 52], ['Antonio Nariño', 33], 
           ['Puente Aranda', 74], ['La Candelaria', 10], ['Rafael Uribe Uribe', 206], 
           ['Ciudad Bolívar', 443], ['Sumapaz', 3]],
  
    2017: [['Usaquén', 223], ['Chapinero', 68], ['Santa Fe', 73], ['San Cristóbal', 201], 
           ['Usme', 294], ['Tunjuelito', 161], ['Bosa', 439], ['Kennedy', 515], 
           ['Fontibón', 232], ['Engativá', 383], ['Suba', 530], ['Barrios Unidos', 98], 
           ['Teusaquillo', 97], ['Los Mártires', 71], ['Antonio Nariño', 60], 
           ['Puente Aranda', 165], ['La Candelaria', 15], ['Rafael Uribe Uribe', 178], 
           ['Ciudad Bolívar', 534], ['Sumapaz', 3]],
  
    2018: [['Usaquén', 226], ['Chapinero', 64], ['Santa Fe', 81], ['San Cristóbal', 241], 
           ['Usme', 224], ['Tunjuelito', 117], ['Bosa', 354], ['Kennedy', 502], 
           ['Fontibón', 175], ['Engativá', 319], ['Suba', 383], ['Barrios Unidos', 64], 
           ['Teusaquillo', 77], ['Los Mártires', 57], ['Antonio Nariño', 69], 
           ['Puente Aranda', 119], ['La Candelaria', 22], ['Rafael Uribe Uribe', 222], 
           ['Ciudad Bolívar', 383], ['Sumapaz', 2]],
  
    2019: [['Usaquén', 150], ['Chapinero', 62], ['Santa Fe', 97], ['San Cristóbal', 385], 
           ['Usme', 327], ['Tunjuelito', 144], ['Bosa', 319], ['Kennedy', 517], 
           ['Fontibón', 169], ['Engativá', 219], ['Suba', 311], ['Barrios Unidos', 43], 
           ['Teusaquillo', 52], ['Los Mártires', 65], ['Antonio Nariño', 57], 
           ['Puente Aranda', 137], ['La Candelaria', 18], ['Rafael Uribe Uribe', 242], 
           ['Ciudad Bolívar', 455], ['Sumapaz', 3]],
  
    2020: [['Usaquén', 177], ['Chapinero', 55], ['Santa Fe', 79], ['San Cristóbal', 279], 
           ['Usme', 296], ['Tunjuelito', 144], ['Bosa', 396], ['Kennedy', 551], 
           ['Fontibón', 220], ['Engativá', 332], ['Suba', 484], ['Barrios Unidos', 52], 
           ['Teusaquillo', 67], ['Los Mártires', 56], ['Antonio Nariño', 58], 
           ['Puente Aranda', 152], ['La Candelaria', 25], ['Rafael Uribe Uribe', 226], 
           ['Ciudad Bolívar', 360], ['Sumapaz', 2]],
  
    2021: [['Usaquén', 460], ['Chapinero', 128], ['Santa Fe', 115], ['San Cristóbal', 318], 
           ['Usme', 312], ['Tunjuelito', 174], ['Bosa', 524], ['Kennedy', 675], 
           ['Fontibón', 235], ['Engativá', 608], ['Suba', 979], ['Barrios Unidos', 105], 
           ['Teusaquillo', 158], ['Los Mártires', 77], ['Antonio Nariño', 64], 
           ['Puente Aranda', 206], ['La Candelaria', 26], ['Rafael Uribe Uribe', 299], 
           ['Ciudad Bolívar', 608], ['Sumapaz', 3]],
  
    2022: [['Usaquén', 591], ['Chapinero', 178], ['Santa Fe', 168], ['San Cristóbal', 472], 
           ['Usme', 435], ['Tunjuelito', 206], ['Bosa', 784], ['Kennedy', 1010], 
           ['Fontibón', 323], ['Engativá', 843], ['Suba', 1304], ['Barrios Unidos', 183], 
           ['Teusaquillo', 210], ['Los Mártires', 106], ['Antonio Nariño', 98], 
           ['Puente Aranda', 226], ['La Candelaria', 35], ['Rafael Uribe Uribe', 417], 
           ['Ciudad Bolívar', 743], ['Sumapaz', 2]],
  
    2023: [['Usaquén', 479], ['Chapinero', 180], ['Santa Fe', 163], ['San Cristóbal', 466], 
           ['Usme', 488], ['Tunjuelito', 164], ['Bosa', 560], ['Kennedy', 942], 
           ['Fontibón', 294], ['Engativá', 640], ['Suba', 919], ['Barrios Unidos', 168], 
           ['Teusaquillo', 148], ['Los Mártires', 83], ['Antonio Nariño', 74], 
           ['Puente Aranda', 211], ['La Candelaria', 29], ['Rafael Uribe Uribe', 405], 
           ['Ciudad Bolívar', 731], ['Sumapaz', 1]],
};

data_2={
  2012: [['Usaquén', 24], ['Chapinero', 11], ['Santa Fe', 9], ['San Cristóbal', 14], 
           ['Usme', 8], ['Tunjuelito', 4], ['Bosa', 19], ['Kennedy', 26], ['Fontibón', 10], 
           ['Engativá', 21], ['Suba', 29], ['Barrios Unidos', 8], ['Teusaquillo', 4], 
           ['Los Mártires', 3], ['Antonio Nariño', 4], ['Puente Aranda', 5], ['La Candelaria', 0], 
           ['Rafael Uribe Uribe', 18], ['Ciudad Bolívar', 19], ['Sumapaz', 0]],
  
    2013: [['Usaquén', 18], ['Chapinero', 11], ['Santa Fe', 6], ['San Cristóbal', 12], 
           ['Usme', 12], ['Tunjuelito', 8], ['Bosa', 18], ['Kennedy', 32], ['Fontibón', 12], 
           ['Engativá', 18], ['Suba', 20], ['Barrios Unidos', 5], ['Teusaquillo', 9], 
           ['Los Mártires', 2], ['Antonio Nariño', 3], ['Puente Aranda', 6], ['La Candelaria', 0], 
           ['Rafael Uribe Uribe', 6], ['Ciudad Bolívar', 27], ['Sumapaz', 1]],
  
    2014: [['Usaquén', 20], ['Chapinero', 6], ['Santa Fe', 11], ['San Cristóbal', 14], 
           ['Usme', 10], ['Tunjuelito', 9], ['Bosa', 18], ['Kennedy', 30], ['Fontibón', 13], 
           ['Engativá', 36], ['Suba', 27], ['Barrios Unidos', 3], ['Teusaquillo', 4], 
           ['Los Mártires', 3], ['Antonio Nariño', 3], ['Puente Aranda', 16], ['La Candelaria', 3], 
           ['Rafael Uribe Uribe', 19], ['Ciudad Bolívar', 32], ['Sumapaz', 1]],
  
    2015: [['Usaquén', 26], ['Chapinero', 11], ['Santa Fe', 10], ['San Cristóbal', 17], 
           ['Usme', 15], ['Tunjuelito', 5], ['Bosa', 9], ['Kennedy', 29], ['Fontibón', 12], 
           ['Engativá', 36], ['Suba', 41], ['Barrios Unidos', 6], ['Teusaquillo', 7], 
           ['Los Mártires', 4], ['Antonio Nariño', 3], ['Puente Aranda', 9], ['La Candelaria', 1], 
           ['Rafael Uribe Uribe', 19], ['Ciudad Bolívar', 36], ['Sumapaz', 0]],
  
    2016: [['Usaquén', 34], ['Chapinero', 12], ['Santa Fe', 3], ['San Cristóbal', 21], 
           ['Usme', 23], ['Tunjuelito', 12], ['Bosa', 17], ['Kennedy', 53], ['Fontibón', 11], 
           ['Engativá', 22], ['Suba', 43], ['Barrios Unidos', 7], ['Teusaquillo', 10], 
           ['Los Mártires', 3], ['Antonio Nariño', 8], ['Puente Aranda', 14], ['La Candelaria', 1], 
           ['Rafael Uribe Uribe', 11], ['Ciudad Bolívar', 34], ['Sumapaz', 0]],
  
    2017: [['Usaquén', 26], ['Chapinero', 6], ['Santa Fe', 14], ['San Cristóbal', 20], 
           ['Usme', 13], ['Tunjuelito', 8], ['Bosa', 31], ['Kennedy', 33], ['Fontibón', 16], 
           ['Engativá', 28], ['Suba', 36], ['Barrios Unidos', 7], ['Teusaquillo', 9], 
           ['Los Mártires', 11], ['Antonio Nariño', 4], ['Puente Aranda', 14], ['La Candelaria', 2], 
           ['Rafael Uribe Uribe', 17], ['Ciudad Bolívar', 40], ['Sumapaz', 0]],
  
    2018: [['Usaquén', 28], ['Chapinero', 22], ['Santa Fe', 12], ['San Cristóbal', 23], 
           ['Usme', 17], ['Tunjuelito', 10], ['Bosa', 32], ['Kennedy', 50], ['Fontibón', 17], 
           ['Engativá', 33], ['Suba', 41], ['Barrios Unidos', 4], ['Teusaquillo', 11], 
           ['Los Mártires', 6], ['Antonio Nariño', 3], ['Puente Aranda', 10], ['La Candelaria', 2], 
           ['Rafael Uribe Uribe', 18], ['Ciudad Bolívar', 37], ['Sumapaz', 0]],
  
    2019: [['Usaquén', 43], ['Chapinero', 25], ['Santa Fe', 10], ['San Cristóbal', 22], 
           ['Usme', 14], ['Tunjuelito', 13], ['Bosa', 31], ['Kennedy', 45], ['Fontibón', 16], 
           ['Engativá', 40], ['Suba', 47], ['Barrios Unidos', 11], ['Teusaquillo', 11], 
           ['Los Mártires', 10], ['Antonio Nariño', 4], ['Puente Aranda', 12], ['La Candelaria', 1], 
           ['Rafael Uribe Uribe', 20], ['Ciudad Bolívar', 31], ['Sumapaz', 0]],
  
    2020: [['Usaquén', 38], ['Chapinero', 10], ['Santa Fe', 6], ['San Cristóbal', 18], 
           ['Usme', 16], ['Tunjuelito', 11], ['Bosa', 31], ['Kennedy', 32], ['Fontibón', 10], 
           ['Engativá', 29], ['Suba', 35], ['Barrios Unidos', 8], ['Teusaquillo', 9], 
           ['Los Mártires', 6], ['Antonio Nariño', 1], ['Puente Aranda', 4], ['La Candelaria', 1], 
           ['Rafael Uribe Uribe', 15], ['Ciudad Bolívar', 33], ['Sumapaz', 0]],
  
    2021: [['Usaquén', 32], ['Chapinero', 11], ['Santa Fe', 9], ['San Cristóbal', 26], 
           ['Usme', 20], ['Tunjuelito', 12], ['Bosa', 40], ['Kennedy', 43], ['Fontibón', 11], 
           ['Engativá', 41], ['Suba', 35], ['Barrios Unidos', 8], ['Teusaquillo', 6],
           ['Los Mártires', 7], ['Antonio Nariño', 7], ['Puente Aranda', 12],['La Candelaria', 3],
           ['Rafael Uribe Uribe', 15],['Ciudad Bolívar', 30], ['Sumapaz', 1]],
    
    2022: [['Usaquén', 31], ['Chapinero', 18], ['Santa Fe', 14], ['San Cristóbal', 33], 
           ['Usme', 18], ['Tunjuelito', 9], ['Bosa', 27], ['Kennedy', 53], 
           ['Fontibón', 27], ['Engativá', 39], ['Suba', 44], ['Barrios Unidos', 8], 
           ['Teusaquillo', 12], ['Los Mártires', 4], ['Antonio Nariño', 3], 
           ['Puente Aranda', 13], ['La Candelaria', 1], ['Rafael Uribe Uribe', 17], 
           ['Ciudad Bolívar', 46], ['Sumapaz', 1]],
    
    2023: [['Usaquén', 29], ['Chapinero', 15], ['Santa Fe', 11], ['San Cristóbal', 28], 
           ['Usme', 28], ['Tunjuelito', 13], ['Bosa', 31], ['Kennedy', 54], 
           ['Fontibón', 12], ['Engativá', 31], ['Suba', 47], ['Barrios Unidos', 5], 
           ['Teusaquillo', 9], ['Los Mártires', 7], ['Antonio Nariño', 6], 
           ['Puente Aranda', 10], ['La Candelaria', 4], ['Rafael Uribe Uribe', 24], 
           ['Ciudad Bolívar', 45], ['Sumapaz', 0]],
};
    
data = data1;

function cambiarBaseDeDatos() {
    // Alterna entre data1 y data2
    data = (data === data1) ? data_2 : data1;
 	Object.keys(heatData).forEach(key => delete heatData[key]);// Crear una lista de años
const anios = [];
for (const a in data) {
    anios.push(a);
}

// Agregar los datos al objeto heatData
let cuenta = 0;
for (const dato in data) {
    agregarDatosHeatMap(anios[cuenta], data[anios[cuenta]]);
    cuenta++;
}

    // Actualiza el mapa de calor con el año seleccionado
	const selectedYear = document.getElementById('yearSelect').value;
    updateHeatMap(selectedYear);

    // Llenar la tabla con los datos de la base de datos actual



}


// Coordenadas de las localidades
const coordenadas = {
    Usaquen: { lat: 4.6884, lng: -74.0340 },
    Chapinero: { lat: 4.6112, lng: -74.0502 },
    SantaFe: { lat: 4.5981, lng: -74.0741 },
    SanCristobal: { lat: 4.5804, lng: -74.0990 },
    Usme: { lat: 4.5535, lng: -74.1532 },
    Tunjuelito: { lat: 4.6105, lng: -74.1361 },
    Bosa: { lat: 4.6092, lng: -74.1836 },
    Kennedy: { lat: 4.6085, lng: -74.1267 },
    Fontibon: { lat: 4.6574, lng: -74.1211 },
    Engativa: { lat: 4.6769, lng: -74.1213 },
    Suba: { lat: 4.6996, lng: -74.0906 },
    BarriosUnidos: { lat: 4.6524, lng: -74.0722 },
    Teusaquillo: { lat: 4.6549, lng: -74.0862 },
    LosMartires: { lat: 4.6100, lng: -74.0901 },
    AntonioNarino: { lat: 4.6052, lng: -74.1156 },
    PuenteAranda: { lat: 4.6355, lng: -74.1164 },
    LaCandelaria: { lat: 4.5981, lng: -74.0800 },
    RafaelUribeUribe: { lat: 4.5899, lng: -74.1075 },
    CiudadBolivar: { lat: 4.5880, lng: -74.1590 },
    Sumapaz: { lat: 4.5582, lng: -74.4067 }
};



const heatData = {}; // Objeto para almacenar los datos

// Funcion para agregar datos al mapa de calor
function agregarDatosHeatMap(anio, datos) {
    const localidades = datos.map(item => {
        const [nombre, casos] = item;
        const coordenada = coordenadas[nombre.replace(/\s+/g, '')]; // Ajuste de nombre

        if (coordenada) {
            return {
                lat: coordenada.lat,
                lng: coordenada.lng,
                cases: casos
            };
        }
        return null;
    }).filter(Boolean);

    heatData[anio] = localidades;
}


     

// Datos de los años y localidades


// Crear una lista de años
const anios = [];
for (const a in data) {
    anios.push(a);
}

// Agregar los datos al objeto heatData
let cuenta = 0;
for (const dato in data) {
    agregarDatosHeatMap(anios[cuenta], data[anios[cuenta]]);
    cuenta++;
}

// Inicializacion del mapa
const map = L.map('map', {
    center: [4.60971, -74.08175],
    zoom: 12,
    minZoom: 10,
    maxZoom: 14,
    zoomControl: true
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const bounds = L.latLngBounds(L.latLng(4.389, -74.25), L.latLng(4.847, -73.911));
map.setMaxBounds(bounds);

// Funcion para actualizar el mapa de calor
let heatLayer = null;
function updateHeatMap(year) {
    if (heatLayer) {
        map.removeLayer(heatLayer);
    }

    const yearData = heatData[year];
    if (yearData) {
        const heatLayerData = yearData.map(d => [d.lat, d.lng, d.cases / 20]);
        heatLayer = L.heatLayer(heatLayerData, {
            radius: 25,
            blur: 20,
            maxZoom: 15
        }).addTo(map);
    }
}


// Inicializa el mapa con datos de 2012
updateHeatMap(2012);

// Evento para el cambio de año en el selector
document.getElementById('yearSelect').addEventListener('change', function() {
    const selectedYear = this.value;
    updateHeatMap(selectedYear);
});

function llenarTabla(year) {
    const tabla = document.getElementById('tabla-datos-localidades');
    tabla.innerHTML = ''; // Limpia la tabla antes de llenarla

    const intentosAnuales = data1[year];
    const casosAnuales = data_2[year];

    if (intentosAnuales && casosAnuales) {
        intentosAnuales.forEach((intento, index) => {
            const [localidadIntento, intentos] = intento;
            const [localidadCaso, casos] = casosAnuales[index];

            // Verifica que los nombres de las localidades coincidan
            if (localidadIntento === localidadCaso) {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${localidadIntento}</td>
                    <td>${intentos}</td>
                    <td>${casos}</td>
                `;
                tabla.appendChild(fila);
            }
        });
    }
}

// Evento para actualizar la tabla y el mapa cuando se cambia el año en el selector
document.getElementById('yearSelect').addEventListener('change', function() {
    const selectedYear = this.value;
    llenarTabla(selectedYear);
    // Aquí puedes agregar la lógica para actualizar el mapa según el año seleccionado
});

// Llama a la función llenarTabla con el año inicial al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    llenarTabla('2012');
});


let etiquetas = []; // Array para almacenar las etiquetas de las localidades

function ponerEtiquetas() {
    const mostrarEtiquetas = document.getElementById('toggleEtiquetas').checked;
    const year = document.getElementById('yearSelect').value; // Obtiene el año seleccionado
    const yearData = heatData[year]; // Datos para el año seleccionado

    // Si se deben mostrar las etiquetas
    if (mostrarEtiquetas) {
        // Revisa si ya se han agregado las etiquetas
        if (etiquetas.length === 0) {
            yearData.forEach((localidad) => {
                const { lat, lng, cases } = localidad;
                const nombreLocalidad = Object.keys(coordenadas).find(key => {
                    return coordenadas[key].lat === lat && coordenadas[key].lng === lng;
                });
                
                if (nombreLocalidad) {
                    const etiqueta = L.marker([lat, lng])
                        .bindPopup(`${nombreLocalidad}: ${cases} casos`)
                        .addTo(map);
                    etiquetas.push(etiqueta); // Guarda la etiqueta para poder manejarla
                }
            });
        }
    } else {
        // Si no se deben mostrar las etiquetas, remuévelas
        etiquetas.forEach((etiqueta) => {
            map.removeLayer(etiqueta);
        });
        etiquetas = []; // Limpia el array de etiquetas
    }
}
