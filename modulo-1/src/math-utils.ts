export function calcularMedia(datos: number[]): number | null {
    if (datos.length === 0) return null;
    const suma = datos.reduce((acc, val) => acc + val, 0);
    return suma / datos.length;
  }
  
  export function calcularMediana(datos: number[]): number | null {
    if (datos.length === 0) return null;
    const ordenados = [...datos].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    if (ordenados.length % 2 !== 0) return ordenados[mitad];
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  }
  
  export function calcularDesviacionEstandar(datos: number[]): number | null {
    if (datos.length === 0) return null;
    const media = calcularMedia(datos);
    if (media === null) return null;
    const varianza =
      datos.reduce((acc, val) => acc + Math.pow(val - media, 2), 0) / datos.length;
    return Math.sqrt(varianza);
  }
  
  export function filtrarAtipicos(datos: number[], limite: number = 2): number[] | null {
    if (datos.length === 0) return null;
    const media = calcularMedia(datos);
    if (media === null) return null;
    const varianza =
      datos.reduce((acc, val) => acc + Math.pow(val - media, 2), 0) / datos.length;
    const desviacion = Math.sqrt(varianza);
    return datos.filter((val) => Math.abs(val - media) <= limite * desviacion);
  }