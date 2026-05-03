import type { EstadoMatricula } from "./types/index.js";

export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA": {
      const nombres = estado.asignaturas.map((a) => a.nombre).join(", ");
      return `Matrícula ACTIVA desde ${estado.fechaInicio.toLocaleDateString("es-ES")}. Asignaturas: ${nombres || "ninguna"}.`;
    }
    case "SUSPENDIDA":
      return `Matrícula SUSPENDIDA el ${estado.fechaSuspension.toLocaleDateString("es-ES")}. Motivo: ${estado.motivoSuspension}.`;
    case "FINALIZADA":
      return `Matrícula FINALIZADA. Nota media: ${estado.notaMedia.toFixed(2)}. Titulación: ${estado.titulacionObtenida}.`;
    default: {
      const _exhaustive: never = estado;
      throw new Error(`Estado no manejado: ${JSON.stringify(_exhaustive)}`);
    }
  }
}