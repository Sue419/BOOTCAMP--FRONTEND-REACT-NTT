# BOOTCAMP-FRONTEND-REACT-NTT

¡Hola! Este proyecto es una tienda en línea dinámica que consume la API de DummyJSON para cargar productos y categorías. Está diseñado con un enfoque mobile-first y utiliza **TypeScript** para la interactividad.

## Características:
- **Diseño Mobile-First**: El proyecto está optimizado para dispositivos móviles y luego se adapta a pantallas más grandes.
- **Carga dinámica de productos**: Los productos se cargan desde la API DummyJSON.
- **Migración a TypeScript**: Todo el proyecto ha sido migrado de JavaScript a TypeScript, con interfaces y tipos definidos para una mejor organización y seguridad en el código.

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
│   │   ├── api/
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
│   │   │   └── productCard.tsx
│   │   │
│   │   ├── feature/
│   │   │   ├── cart.ts
│   │   │   ├── renderCategoryFilter.ts
│   │   │   ├── search.ts
│   │   │   └── updateProductCard.ts
│   │   │
│   │   ├── styles/
│   │   │   └── style.css
│   │   │
│   │   ├── utils/
│   │   │   ├── discount.ts
│   │   │   ├── getProductById.ts
│   │   │   └── truncateText.ts
│   │   │
│   │   └── main.ts
│   │
│   ├── index.html
│   ├── package.json
│   └── package-lock.json

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

2. **Cambiar a la rama feature/typescript:**:
```bash
    git branch -a (Para traer todas las ramas del repositorio)
    git checkout feature/typescript / git switch feature/typescript
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
1. **Migración a TypeScript**: El proyecto ha sido migrado de JavaScript a TypeScript, incluyendo el uso de interfaces y tipos.
2. **Estructura actualizada**: Ahora incluye las carpetas `api`, `feature`, `styles`, `utils`, y `src` para trabajar con TypeScript.
3. **Uso de `async` y `await`**: Todo el proyecto sigue utilizando `fetch` para consumir las APIs sin librerías externas.
4. **Uso de mapper**: Se ha implementado el patrón mapper para transformar las respuestas de las API y mejorar la modularidad del código.

## Requisitos Mínimos

- [✔️ ] Pueden hacer uso de **Vite** o **Webpack** para crear la solución.
- [✔️] Se deberá realizar una **migración de Javascript a Typescript** del proyecto Market.
- [✔️] Se deberá usar de manera correcta las **interfaces** y **types** según consideren.
- [✔️] Hacer uso del **patrón mappers** para transformar las respuestas de los servicios (**OPCIONAL**).
- [✔️] Creación correcta de **carpetas** para mantener separada la lógica de negocio de las estructuras definidas como las interfaces o types.
- [✔️] **Prohibido usar `any`**.
- [✔️] Se puede hacer uso de tipos como **`unknown`** en caso se requiera.
- [✔️] **Subirlo al repositorio GitHub Público.**
