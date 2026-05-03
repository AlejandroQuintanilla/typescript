import type { RespuestaAPI, Estudiante, Asignatura } from "../domain/types/index.js";

const DB_ESTUDIANTES: Estudiante[] = [
  { id: "USR-001", nombre: "Laura", apellidos: "Martínez García", email: "laura@uni.es", fechaNacimiento: new Date("2001-04-15"), curso: 2 },
  { id: "USR-002", nombre: "Carlos", apellidos: "Romero Pérez", email: "carlos@uni.es", fechaNacimiento: new Date("2000-09-22"), curso: 3 },
];

const DB_ASIGNATURAS: Asignatura[] = [
  { id: "ASG-101", nombre: "Fundamentos de Programación", creditos: 6, departamento: "Informática", profesor: "Dr. Antonio Ruiz" },
  { id: "ASG-102", nombre: "Bases de Datos", creditos: 6, departamento: "Informática", profesor: "Dra. Elena Torres" },
];

function simularLatencia(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 100));
}

function crearRespuesta<T>(datos: T, codigoEstado: number = 200): RespuestaAPI<T> {
  return { codigoEstado, exito: codigoEstado < 300, datos, timestamp: new Date().toISOString() };
}

export async function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  await simularLatencia();

  if (endpoint === "/estudiantes") return crearRespuesta(DB_ESTUDIANTES as unknown as T);
  if (endpoint === "/asignaturas") return crearRespuesta(DB_ASIGNATURAS as unknown as T);

  const match = endpoint.match(/^\/estudiantes\/(.+)$/);
  if (match) {
    const estudiante = DB_ESTUDIANTES.find((e) => e.id === match[1]);
    if (!estudiante) return { codigoEstado: 404, exito: false, datos: null as unknown as T, errores: [`No encontrado: ${match[1]}`], timestamp: new Date().toISOString() };
    return crearRespuesta(estudiante as unknown as T);
  }

  return { codigoEstado: 404, exito: false, datos: null as unknown as T, errores: [`Endpoint no encontrado: ${endpoint}`], timestamp: new Date().toISOString() };
}