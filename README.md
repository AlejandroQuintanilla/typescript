# TypeScript — Módulos 1 y 2

Proyecto desarrollado con TypeScript como parte de la Práctica 4.

## Estructura

modulo-1/
  src/
    math-utils.ts       # Funciones estadísticas tipadas
    index.ts            # Punto de entrada y pruebas

modulo-2/
  src/
    domain/
      types/
        index.ts        # Interfaces, unión discriminada EstadoMatricula
      reporte.ts        # generarReporte() con exhaustiveness checking
    services/
      api-client.ts     # Servicio genérico RespuestaAPI<T>
    index.ts            # Punto de entrada y pruebas
  docs/
    arquitectura.md     # Documentación de decisiones arquitectónicas

## Ejecución

Módulo 1:
cd modulo-1
npm install
npx tsx src/index.ts

Módulo 2:
cd modulo-2
npm install
npx tsx src/index.ts

## Verificación de tipos

npx tsc --noEmit

Sin errores de tipado.

## Conceptos aplicados

- Tipos primitivos, inferencia y tipos especiales (null, never, unknown)
- Funciones con tipado estricto de parámetros y retorno
- Interfaces y type aliases
- Unión discriminada EstadoMatricula con tres estados
- Exhaustiveness checking con never
- Genérico RespuestaAPI<T> para respuestas de API tipadas
- Servicio de datos simulado con promesas tipadas