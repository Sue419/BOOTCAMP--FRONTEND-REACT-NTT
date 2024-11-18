# BOOTCAMP-FRONTEND-REACT-NTT

¡Hola! Este proyecto es una tienda en línea dinámica que consume la API de DummyJSON para cargar productos y categorías. Está diseñado con un enfoque mobile-first y utiliza JavaScript Vanilla para la interactividad.

## Características:
- **Diseño Mobile-First**: El proyecto está optimizado para dispositivos móviles y luego se adapta a pantallas más grandes.
- **Carga dinámica de productos**: Los productos se cargan desde la API DummyJSON.
- **Filtrado en tiempo real**: Los productos pueden filtrarse mediante búsqueda por texto y categorías.
- **Carrito de compras**: Los productos agregados al carrito aumentan el contador del carrito en el menú superior.
- **API para productos y categorías**: Uso de `fetch`, `async` y `await` para consumir la API y mostrar los datos sin librerías externas.
- **Descuento en productos**: Los productos muestran el precio original junto con el descuento aplicado.
- **Textos truncos**: Se aplican funciones de truncado a textos largos para mejorar la presentación.

## Estructura del Proyecto:

```bash
miniMarket/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── screenshots/
│   ├── components/
│   │   └── productCard.js
│   ├── api/
│   │   ├── fetchCategories.js
│   │   └── fetchProducts.js
│   ├── js/
│   │   ├── cart.js
│   │   ├── renderCategoryFilter.js
│   │   ├── search.js
│   │   └── updateProductCard.js
│   ├── styles/
│   │   └── style.css
│   ├── utils/
│   │   ├── mapperGetProduct.js
│   │   ├── discount.js
│   │   └── truncateText.js
│   └── main.js
├── index.html
├── package.json
└── package-lock.json
``` 

## Funcionalidades:
- **Carga de productos** desde [DummyJSON Products API](https://dummyjson.com/docs/products#products-all).
- **Filtrado de productos** por texto en el buscador y categorías seleccionadas en desplegable. El buscador permite filtrar los productos en tiempo real según el título, la descripción o la categoría, lo que facilita encontrar productos específicos.
- **Descuento en productos** que muestra el precio original junto con el descuento aplicado.
- **Contador de carrito** que incrementa al hacer clic en "Agregar al carrito".
- **Textos truncos** para productos con descripciones largas.

## Cómo clonar el proyecto
- Para descargar este repositorio, clona el repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/Sue419/BOOTCAMP-FRONTEND-REACT-NTT.git
cd miniMarket
```

- Para ir a la rama feature/javascript, utiliza los siguientes comandos:

1. **Ver las ramas disponibles**:
    git branch -a

2. **Cambiar a la rama feature/diseños-y-estilos**:
```bash
    git branch -a (Para traer todas las ramas del repositorio)
    git checkout feature/javascript / git switch feature/javascript
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

## Notas
- **Paginación de productos:** Actualmente los productos se cargan de manera limitada.


### Cambios y actualizaciones:
1. **Estructura actualizada**: Ahora incluye las carpetas `api`, `js`, `styles`, `utils`, y `src`.
2. **Uso de `async` y `await`**: Todo el proyecto sigue utilizando `fetch` para consumir las APIs sin librerías externas.

## Requisitos Mínimos
- [x] **Carga dinámica de productos** desde la API de DummyJSON.
- [x] **Uso de fetch, async y await** para consumir la API sin librerías externas.
- [x] **No uso de `innerHTML`** para la inserción dinámica de contenido.
- [x] **Filtro en tiempo real** de productos mediante un cuadro de búsqueda que filtra por nombre, descripción y categoría.
- [x] **Carga dinámica de categorías** desde la API de DummyJSON para el filtro de productos.
- [x] **Filtro por categorías seleccionadas**: los productos se filtran según la categoría seleccionada por el usuario.
- [x] **Incremento del contador de carrito** en el menú superior al hacer clic en "Agregar al carrito".
- [x] **Subida del proyecto a un repositorio público en GitHub.**

