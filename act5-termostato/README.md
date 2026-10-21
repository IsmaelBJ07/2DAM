# Termostato

La aplicación tiene tres componentes:

- `AppComponent` guarda la temperatura y el umbral.
- `ControlTemperaturaComponent` tiene los botones y el campo para cambiar el umbral.
- `DisplayTemperaturaComponent` muestra la temperatura y la alarma.

La temperatura empieza en 20 ºC. El umbral empieza en 25 ºC. Si la temperatura supera el umbral, aparece el aviso de temperatura alta.

## Evento `input` y evento `change`

`input` se ejecuta cada vez que cambia el texto del campo, así que permite revisar lo que se escribe al momento. `change` se ejecuta cuando se confirma el cambio; en un campo de texto suele ocurrir al salir de él después de editarlo.

## El campo y el evento

En `control-temperatura.component.ts`, esta línea:

```ts
const campo = evento.target as HTMLInputElement;
```

indica a TypeScript que el elemento que produjo el evento es un campo HTML. Así se puede leer su propiedad `value`. `as HTMLInputElement` solo informa al comprobador de tipos de TypeScript: no convierte el elemento cuando se ejecuta el programa.

## Si no se escribe un número

Al convertir texto a número, un texto no numérico se convierte en `NaN` y un campo vacío se convertiría en `0`. Por eso el programa comprueba ambos casos antes de enviar el cambio. Si el dato no es válido, muestra un mensaje y conserva el umbral anterior.

Lo adecuado es validar el dato, mostrar un mensaje claro y no actualizar el umbral hasta que se escriba un número válido. En esta aplicación esa comprobación está en `onInput`.

## Ejecutar

```bash
npm start
```

## Pruebas

```bash
npm test
```
