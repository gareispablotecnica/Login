# Sistema de Login

## Descripción

Este proyecto consiste en el desarrollo de un sistema de autenticación de usuarios mediante un servidor backend desarrollado con Node.js y Express.

El sistema permite gestionar usuarios almacenados en una base de datos SQLite, contemplando el registro y posterior autenticación mediante usuario y contraseña.

La aplicación se encuentra organizada mediante una estructura modular que separa las responsabilidades del servidor, controladores, rutas, utilidades y acceso a la base de datos.

## Tecnologías utilizadas

- Node.js
- Express
- SQLite3
- JavaScript
- VS Code
- Git y GitHub

## Estructura del proyecto

```text
Login/
│
└── Server/
    │
    ├── src/
    │   ├── Controller/
    │   │
    │   ├── DataBase/
    │   │   ├── db.js
    │   │   └── Urban.db
    │   │
    │   ├── Router/
    │   │   └── Login.Route.js
    │   │
    │   └── Utils/
    │
    ├── node_modules/
    │
    ├── .gitignore
    ├── index.js
    ├── package.json
    ├── package-lock.json
    └── README.md