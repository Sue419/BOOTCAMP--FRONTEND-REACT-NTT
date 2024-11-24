# BOOTCAMP--FRONTEND-REACT-NTT
=======
# BOOTCAMP-FRONTEND-REACT-NTT
# MiniMarket - Tienda en línea con React y TypeScript

Este proyecto es una tienda en línea dinámica que consume la API de DummyJSON para cargar productos y categorías. Fue migrado desde una solución basada en HTML, CSS y JavaScript a una solución moderna utilizando **React** y **TypeScript** para una experiencia interactiva y escalable.

## Características:
- **Migración a React**: El proyecto fue migrado desde una implementación en HTML, CSS y JavaScript a TypeScript y luego a **React** para aprovechar sus beneficios en la gestión del estado, reactividad y escalabilidad.
- **Diseño Mobile-First**: Optimizado para dispositivos móviles, adaptándose a pantallas más grandes.
- **Carga dinámica de productos**: Los productos se cargan desde la API de DummyJSON y se filtran según la categoría seleccionada o la búsqueda.
- **Patrón Mapper**: Implementación del patrón mapper para transformar las respuestas de la API y modularizar el código.

## Estructura del Proyecto:

```bash
BOOTCAMP-FRONTEND-REACT-NTT/
│
├── README.md
│
├── miniMarket/
│   ├── public/
│   │   └── vite.svg
│   │
│   ├── src/
│   │   ├── proxy/
│   │   │   ├── mapper/
│   │   │   │   ├── mapperGetCategories.ts
│   │   │   │   └── mapperGetProduct.ts
│   │   │   ├── fetchCategories.ts
│   │   │   └── fetchProducts.ts
│   │   │
│   │   ├── assets/
│   │   │   ├── icons/
│   │   │   ├── images/
│   │   │   └── screenshots/
│   │   │
│   │   ├── components/
│   │   │   ├── buttonCard/
│   │   │   │   ├── buttonCard.tsx
│   │   │   │   └── buttonCard.css
│   │   │   ├── cartIcon/
│   │   │   │   ├── cartIcon.tsx
│   │   │   │   └── cartIcon.css
│   │   │   ├── categoryMenu/
│   │   │   │   ├── categoryMenu.tsx
│   │   │   │   └── categoryMenu.css
│   │   │   ├── dropdownSelect/
│   │   │   │   ├── dropdownSelect.tsx
│   │   │   │   └── dropdownSelect.css
│   │   │   ├── footer/
│   │   │   │   ├── footer.tsx
│   │   │   │   └── footer.css
│   │   │   ├── header/
│   │   │   │   ├── header.tsx
│   │   │   │   └── header.css
│   │   │   ├── main/
│   │   │   │   ├── main.tsx
│   │   │   │   └── main.css
│   │   │   ├── productCard/
│   │   │   │   ├── productCard.tsx
│   │   │   │   └── productCard.css
│   │   │   ├── productList/
│   │   │   │   ├── productList.tsx
│   │   │   │   └── productList.css
│   │   │   ├── searchBar/
│   │   │   │   ├── searchBar.tsx
│   │   │   │   └── searchBar.css
│   │   │   └── sidebarMenu/
│   │   │       ├── sidebarMenu.tsx
│   │   │       └── sidebarMenu.css
│   │   │
│   │   ├── context/
│   │   │   └── cartContext.tsx
│   │   │
│   │   ├── domain/
│   │   │   ├── category.ts
│   │   │   ├── product.ts
│   │   │   └── productApiResponse.ts
│   │   │
│   │   ├── hooks/
│   │   │   ├── useCart.ts
│   │   │   └── useDebounce.ts
│   │   │
│   │   ├── logic/
│   │   │   └── search.ts
│   │   │
│   │   ├── page/
│   │   │   ├── home.tsx
│   │   │   └── home.css
│   │   │
│   │   ├── styles/
│   │   │   └── style.css
│   │   │
│   │   ├── utils/
│   │   │   ├── discount.ts
│   │   │   └── truncateText.ts
│   │   │
│   │   ├── app.css
│   │   ├── app.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   │
│   ├── index.html
│   ├── package.json
│   └── package-lock.json

....

``` 


## Cómo clonar el proyecto
- Para descargar este repositorio, clona el repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/Sue419/BOOTCAMP-FRONTEND-REACT-NTT.git
cd miniMarket
```

- Para ir a la rama feature/javascript, utiliza los siguientes comandos:

1. **Ver las ramas disponibles**:
    git branch -a

2. **Cambiar a la rama feature/reat-fundamentos :**:
```bash
    git branch -a (Para traer todas las ramas del repositorio)
    git checkout feature/reat-fundamentos / git switch feature/reat-fundamentos
  ```

- Instalar dependencias: Asegúrate de tener Node.js instalado, luego instala las dependencias con:

```bash
npm install
```

- Iniciar el servidor: para iniciar el servidor de desarrollo, usa:

```bash
npm run dev
```
¡Y listo! 


## Cambios y actualizaciones:
- **Migración a React**: El proyecto fue migrado de una estructura en HTML, CSS y JavaScript a **React** para aprovechar sus capacidades de reactividad y manejo de estado.
- **Migración a TypeScript**: El proyecto ha sido migrado de JavaScript a **TypeScript**, con interfaces y tipos para mayor claridad y seguridad del código.
- **Uso de Hooks**: Uso de hooks como `useState`, `useEffect` y `useCart` para manejar el estado y la lógica de negocio.
- **Patrón Mapper**: Se ha implementado el patrón mapper para transformar las respuestas de las APIs de DummyJSON y mantener el código organizado.
- **Diseño Mobile-First**: El proyecto está diseñado para ser completamente funcional en dispositivos móviles y luego adaptarse a pantallas de escritorio.

## Requisitos Mínimos:
- [✔️] **React** + **TypeScript** para la solución.
- [✔️] Migración de un proyecto HTML, CSS y JavaScript a **React**.
- [✔️] Uso adecuado de `useEffect`, `useState` y otros hooks según lo necesites.
- [✔️] Consumo de la API usando `fetch` con `async` y `await`.
- [✔️] Arquitectura de carpetas escalable, separando la lógica de negocio, componentes y utilitarios.
- [✔️] **Prohibido usar `any`** en los tipados de TypeScript.
- [✔️] Subir el proyecto a un repositorio público en **GitHub**.
