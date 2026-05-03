import {
    calcularMedia,
    calcularMediana,
    filtrarAtipicos,
    calcularDesviacionEstandar,
  } from "./math-utils.js";
  
  const tiempos: number[] = [120, 135, 98, 142, 115, 880, 127, 109, 133, 141, 950, 119];
  
  console.log("=== Análisis de tiempos de respuesta ===\n");
  console.log("Datos:", tiempos);
  console.log("Media:              ", calcularMedia(tiempos)?.toFixed(2));
  console.log("Mediana:            ", calcularMediana(tiempos)?.toFixed(2));
  console.log("Desviación estándar:", calcularDesviacionEstandar(tiempos)?.toFixed(2));
  console.log("Sin atípicos:       ", filtrarAtipicos(tiempos, 1.5));
  
  const vacio: number[] = [];
  console.log("\n=== Array vacío ===");
  console.log("Media:", calcularMedia(vacio));
  console.log("Mediana:", calcularMediana(vacio));