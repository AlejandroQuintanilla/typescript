# Documentación de arquitectura — Módulo 2

## Por qué `interface` para las entidades

Se usa `interface` para `Estudiante` y `Asignatura` porque representan
entidades del dominio con estructura de objeto. Se pueden extender con
`extends` y permiten declaration merging si el modelo crece.

## Por qué `type` para EstadoMatricula

`EstadoMatricula` es una unión discriminada, y `type` es la única
construcción que permite expresar uniones en TypeScript.

## Unión Discriminada

En lugar de propiedades opcionales ambiguas, cada estado tiene su
propio contrato con un discriminante literal (`tipo`). TypeScript
estrecha el tipo automáticamente en cada rama del switch.

## Exhaustiveness checking con `never`

El bloque `default` del switch asigna el valor a una variable de tipo
`never`. Si en el futuro se añade un nuevo estado a la unión y no se
actualiza el switch, el compilador lanza un error en compilación,
no en producción.

## Genérico `RespuestaAPI<T>`

Permite tipar el payload de cada respuesta de forma estricta.
Sin genéricos, el payload sería `any` y TypeScript no podría
verificar nada sobre su contenido.