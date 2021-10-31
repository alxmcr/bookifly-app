# ✈️ Bookifly App

Es una aplicación web para una aerolínea que permite la reservación de vuelos. Volando con seguridad, rápidez y confianza 🌴.

![App Screenshot](https://res.cloudinary.com/images-alex-projects/image/upload/v1635666877/Portfolio/bookifly-app/screenshots/bookifly-home-page_fb7rhg.png)

## Features

- Búsqueda de vuelos por ciudad, fecha y cantidad de personas.
- Selecciona tu vuelo para reservar.
- Reserva tu vuelo.
- Calcular el precio de tu vuelo en función de la cantidad de personas y el costo del pasaje.

## Lessons Learned

Yo aprendí y practiqué más acerca de React.js, React Hooks, Redux (Reducers, Actions, Store), Sass, React Context y TypeScript.

## Run Locally

Clonar el proyecto

```bash
  git clone https://github.com/alxmcr/bookifly-app
```

Ir donde se encuentra el directorio del proyecto.

```bash
  cd bookifly-app
```

Instalar NPM dependencies

```bash
  npm install
```

Iniciar el Frontend server

```bash
  npm run start
```

Abrir el navegador:

```
http://localhost:3000
```

Nota.-: Es necesario iniciar el [Backend server: bookifly_api_py](https://github.com/alxmcr/bookifly_api_py) (Backend API)

## Environment Variables

Para arrancar el proyecto se necesita de variables de entorno(`.env`). Donde se puede, colocar en la raíz del proyecto: `bookifly-app/.env` (ver: `.env-sample`)

```
REACT_APP_BACKEND_API_BASE_URL=http://localhost:4000
```

o si tienes un servidor en la nube:

```
REACT_APP_BACKEND_API_BASE_URL=https://bookifly-api-py.herokuapp.com
```

## Rutas Habilitadas en la aplicación

- Inicio (`/`)
- Vuelos (`/flights`)
- Reservas (`/bookings`)

## Tech Stack

HTML, CSS, Sass, JavaScript, Typescript, React.js, and Redux.

## Screenshoots

![App Screenshot](https://res.cloudinary.com/images-alex-projects/image/upload/v1635666877/Portfolio/bookifly-app/screenshots/bookifly-home-page_fb7rhg.png)

![Flights page - Screenshot](https://res.cloudinary.com/images-alex-projects/image/upload/v1635666876/Portfolio/bookifly-app/screenshots/bookifly-flight-page_h16fzi.png)

![Flight bookings page - Screenshot](https://res.cloudinary.com/images-alex-projects/image/upload/v1635666876/Portfolio/bookifly-app/screenshots/bookifly-flight-bookings-page_eos62y.png)

![Flight bookings page: Customer form - Screenshot](https://res.cloudinary.com/images-alex-projects/image/upload/v1635666876/Portfolio/bookifly-app/screenshots/bookifly-customer-info_ewnpji.png)

![Flight bookings page: Customer Thanks - Screenshot](https://res.cloudinary.com/images-alex-projects/image/upload/v1635666876/Portfolio/bookifly-app/screenshots/bookifly-thanks-modal_cxhkcc.png)

## Authors

- [Alejandro M. Coca Rojas (@alxmcr)](https://www.github.com/alxmcr)

## Feedback

If you have any feedback, please reach out to me at amcocarojas@gmail.com.
