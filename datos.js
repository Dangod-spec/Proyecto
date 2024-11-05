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
data = {
  
  2024: [
        ['Usaquen', 374], ['Chapinero', 137], ['Santa Fe', 145], ['San Cristobal', 461],
        ['Usme', 437], ['Tunjuelito', 195], ['Bosa', 602], ['Kennedy', 919],
        ['Fontibon', 274], ['Engativa', 742], ['Suba', 989], ['Barrios Unidos', 131],
        ['Teusaquillo', 175], ['Los Martires', 110], ['Antonio Narino', 87],
        ['Puente Aranda', 222], ['La Candelaria', 29], ['Rafael Uribe Uribe', 374],
        ['Ciudad Bolivar', 637], ['Sumapaz', 0]
    ],
    2025: [
        ['Usaquen', 397], ['Chapinero', 146], ['Santa Fe', 154], ['San Cristobal', 492],
        ['Usme', 459], ['Tunjuelito', 203], ['Bosa', 632], ['Kennedy', 982],
        ['Fontibon', 288], ['Engativa', 804], ['Suba', 1064], ['Barrios Unidos', 138],
        ['Teusaquillo', 189], ['Los Martires', 116], ['Antonio Narino', 92],
        ['Puente Aranda', 237], ['La Candelaria', 31], ['Rafael Uribe Uribe', 395],
        ['Ciudad Bolivar', 664], ['Sumapaz', 0]
    ],
    2026: [
        ['Usaquen', 421], ['Chapinero', 156], ['Santa Fe', 164], ['San Cristobal', 523],
        ['Usme', 482], ['Tunjuelito', 212], ['Bosa', 662], ['Kennedy', 1045],
        ['Fontibon', 301], ['Engativa', 867], ['Suba', 1140], ['Barrios Unidos', 145],
        ['Teusaquillo', 202], ['Los Martires', 122], ['Antonio Narino', 97],
        ['Puente Aranda', 252], ['La Candelaria', 33], ['Rafael Uribe Uribe', 415],
        ['Ciudad Bolivar', 691], ['Sumapaz', 0]
    ],
    2027: [
        ['Usaquen', 444], ['Chapinero', 165], ['Santa Fe', 174], ['San Cristobal', 554],
        ['Usme', 505], ['Tunjuelito', 221], ['Bosa', 691], ['Kennedy', 1109],
        ['Fontibon', 315], ['Engativa', 930], ['Suba', 1216], ['Barrios Unidos', 153],
        ['Teusaquillo', 216], ['Los Martires', 128], ['Antonio Narino', 102],
        ['Puente Aranda', 267], ['La Candelaria', 34], ['Rafael Uribe Uribe', 436],
        ['Ciudad Bolivar', 718], ['Sumapaz', 0]
    ],
    2028: [
        ['Usaquen', 467], ['Chapinero', 175], ['Santa Fe', 183], ['San Cristobal', 585],
        ['Usme', 528], ['Tunjuelito', 229], ['Bosa', 721], ['Kennedy', 1172],
        ['Fontibon', 328], ['Engativa', 992], ['Suba', 1291], ['Barrios Unidos', 160],
        ['Teusaquillo', 229], ['Los Martires', 135], ['Antonio Narino', 107],
        ['Puente Aranda', 282], ['La Candelaria', 36], ['Rafael Uribe Uribe', 457],
        ['Ciudad Bolivar', 745], ['Sumapaz', 0]
    ]
};
data_2 = {   
  
     2024: [['Usaquen', 39], ['Chapinero', 19], ['Santa Fe', 10], ['San Cristobal', 28], 
           ['Usme', 24], ['Tunjuelito', 13], ['Bosa', 38], ['Kennedy', 52], 
           ['Fontibon', 13], ['Engativa', 34], ['Suba', 51], ['Barrios Unidos', 7], 
           ['Teusaquillo', 10], ['Los Martires', 9], ['Antonio Narino', 4], 
           ['Puente Aranda', 8], ['La Candelaria', 3], ['Rafael Uribe Uribe', 23], 
           ['Ciudad Bolivar', 42], ['Sumapaz', 0]],
    
    2025: [['Usaquen', 41], ['Chapinero', 19], ['Santa Fe', 10], ['San Cristobal', 29], 
           ['Usme', 25], ['Tunjuelito', 14], ['Bosa', 40], ['Kennedy', 54], 
           ['Fontibon', 13], ['Engativa', 35], ['Suba', 53], ['Barrios Unidos', 8], 
           ['Teusaquillo', 11], ['Los Martires', 10], ['Antonio Narino', 4], 
           ['Puente Aranda', 8], ['La Candelaria', 3], ['Rafael Uribe Uribe', 24], 
           ['Ciudad Bolivar', 43], ['Sumapaz', 0]],
    
    2026: [['Usaquen', 42], ['Chapinero', 20], ['Santa Fe', 11], ['San Cristobal', 31], 
           ['Usme', 27], ['Tunjuelito', 14], ['Bosa', 42], ['Kennedy', 56], 
           ['Fontibon', 13], ['Engativa', 35], ['Suba', 55], ['Barrios Unidos', 8], 
           ['Teusaquillo', 11], ['Los Martires', 10], ['Antonio Narino', 4], 
           ['Puente Aranda', 8], ['La Candelaria', 3], ['Rafael Uribe Uribe', 25], 
           ['Ciudad Bolivar', 44], ['Sumapaz', 0]],
    
    2027: [['Usaquen', 44], ['Chapinero', 21], ['Santa Fe', 11], ['San Cristobal', 32], 
           ['Usme', 28], ['Tunjuelito', 15], ['Bosa', 44], ['Kennedy', 58], 
           ['Fontibon', 13], ['Engativa', 36], ['Suba', 57], ['Barrios Unidos', 8], 
           ['Teusaquillo', 11], ['Los Martires', 11], ['Antonio Narino', 4], 
           ['Puente Aranda', 8], ['La Candelaria', 3], ['Rafael Uribe Uribe', 26], 
           ['Ciudad Bolivar', 45], ['Sumapaz', 0]],
    
    2028: [['Usaquen', 46], ['Chapinero', 22], ['Santa Fe', 11], ['San Cristobal', 33], 
           ['Usme', 29], ['Tunjuelito', 16], ['Bosa', 46], ['Kennedy', 60], 
           ['Fontibon', 13], ['Engativa', 37], ['Suba', 59], ['Barrios Unidos', 8], 
           ['Teusaquillo', 12], ['Los Martires', 12], ['Antonio Narino', 4], 
           ['Puente Aranda', 7], ['La Candelaria', 3], ['Rafael Uribe Uribe', 27], 
           ['Ciudad Bolivar', 46], ['Sumapaz', 0]]
};

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
updateHeatMap(2024);

// Evento para el cambio de año en el selector
document.getElementById('yearSelect').addEventListener('change', function() {
    const selectedYear = this.value;
    updateHeatMap(selectedYear);
});

function llenarTabla(year) {
    const tabla = document.getElementById('tabla-datos-localidades');
    tabla.innerHTML = ''; // Limpia la tabla antes de llenarla

    const intentosAnuales = data[year];
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
