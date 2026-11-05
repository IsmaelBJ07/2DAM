# Catálogo de videojuegos

Aplicación Angular que consulta un catálogo de videojuegos servido por JSON Server 0.17.4. La aplicación permite buscar por ID y título, filtrar por género, plataforma y precio, y recorrer los resultados por páginas.

## Preparación

Instala las dependencias del proyecto:

```bash
npm install
```

Para iniciar la API en una terminal:

```bash
npm run api
```

Para iniciar la aplicación Angular en otra terminal:

```bash
npm start
```

La API estará disponible en `http://localhost:3000/games`.

## Cuestiones finales

1. `GameService` se encarga de construir y realizar las consultas HTTP a la API.
2. Separar las peticiones del componente facilita organizar y reutilizar el acceso a los datos.
3. `GET /games` devuelve la colección; `GET /games/5` devuelve el videojuego con ID 5.
4. `?genre=RPG` añade un parámetro de consulta que filtra por género en el servidor.
5. Un `<select>` genera normalmente el evento DOM `change`.
6. En Angular se captura con `(change)="metodo(...)"`.
7. `$event` representa el objeto del evento generado por el navegador.
8. Una referencia como `#genreSelect` permite leer directamente el valor seleccionado.
9. `title_like=Dragon` busca coincidencias parciales en el título; `q=Dragon` busca el texto en los campos del registro.
10. `_page` indica la página solicitada y `_limit` el máximo de resultados por página.
11. `http.get<Game[]>(url)` entrega normalmente el cuerpo de la respuesta, no la respuesta HTTP completa.
12. `observe: 'response'` permite obtener el cuerpo y también las cabeceras HTTP.
13. Los videojuegos se encuentran en `response.body`.
14. Las cabeceras se encuentran en `response.headers`.
15. `X-Total-Count` informa cuántos registros coinciden con la consulta.
16. La cabecera se convierte a número porque su valor se recibe como texto y se usa para calcular páginas.
17. El número de páginas se calcula con `Math.ceil(totalElementos / tamanoPagina)`.
18. Se vuelve a la página 1 al cambiar un filtro porque la página actual podría no existir entre los nuevos resultados.
