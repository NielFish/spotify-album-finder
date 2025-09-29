# spotify-album-finder
🎵 Album Finder with Spotify API – A real-time music explorer powered by the Spotify Web API. Built with Node.js and Express, this project showcases API integration, authentication flows, and clean backend design. Future-ready for MongoDB to store favorites and playlists.

---

Este proyecto funciona con un backend en Express que también entrega el frontend (React con Vite). El objetivo en desarrollo es mantener un flujo simple: ver la app corriendo y concentrarse en la lógica backend, integraciones y estructura profesional.

---

## 🚀 Requisitos previos
- Node.js v18+ instalado.
- Cuenta de Spotify Developer para obtener `CLIENT_ID` y `CLIENT_SECRET`.
- Archivo `.env` en la raíz del proyecto con tus credenciales:

```
CLIENT_ID=tu_client_id
CLIENT_SECRET=tu_client_secret
```

---

## 🛠️ Instalación
* Clonar el repositorio: obtén el proyecto en tu máquina y entra a la carpeta raíz.
* Instalar dependencias del backend: ejecuta la instalación en la raíz del proyecto.
```
npm run build
```
* Instalar dependencias del frontend: entra a la carpeta client y realiza la instalación ahí.
```
cd client
npm run build
```

## 💻 Desarrollo
* Backend: corre el servidor de Express de forma independiente
```
npm run dev

Corre en http://localhost:3000
```

* Frontend: ejecuta el servidor de desarrollo de Vite para tener recarga en vivo en el navegador.
```
cd client
npm run dev

Abre http://localhost:5173
```
## Estructura relevante
```
spotify-album-finder/
├── app.js              # Punto de entrada del backend
├── src/                # Controladores, rutas, lógica backend
├── client/             # Proyecto React (Vite)
│   ├── src/            # Código fuente React
│   ├── dist/           # Build generado para producción
│   └── package.json
├── package.json        # Dependencias backend
└── .env                # Variables de entorno
```
