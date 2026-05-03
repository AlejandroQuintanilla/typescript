import type { EstadoMatricula, Estudiante, Asignatura } from "./domain/types/index.js";
import { generarReporte } from "./domain/reporte.js";
import { obtenerRecurso } from "./services/api-client.js";

const estados: EstadoMatricula[] = [
  { tipo: "ACTIVA", fechaInicio: new Date("2024-09-10"), asignaturas: [{ id: "ASG-101", nombre: "Fundamentos de Programación", creditos: 6, departamento: "Informática", profesor: "Dr. Ruiz" }] },
  { tipo: "SUSPENDIDA", motivoSuspension: "Impago de tasas", fechaSuspension: new Date("2024-11-01") },
  { tipo: "FINALIZADA", notaMedia: 7.85, fechaFinalizacion: new Date("2024-06-28"), titulacionObtenida: "Grado en Informática" },
];

console.log("=== Reportes de matrícula ===\n");
estados.forEach((e) => console.log(generarReporte(e)));

async function main() {
  console.log("\n=== Servicio de datos ===\n");
  const r1 = await obtenerRecurso<Estudiante[]>("/estudiantes");
  console.log(`GET /estudiantes → ${r1.codigoEstado}`);
  if (r1.exito) r1.datos.forEach((e) => console.log(`  • ${e.nombre} ${e.apellidos}`));

  const r2 = await obtenerRecurso<Asignatura[]>("/asignaturas");
  console.log(`\nGET /asignaturas → ${r2.codigoEstado}`);
  if (r2.exito) r2.datos.forEach((a) => console.log(`  • ${a.nombre}`));

  const r3 = await obtenerRecurso<Estudiante>("/estudiantes/USR-999");
  console.log(`\nGET /estudiantes/USR-999 → ${r3.codigoEstado}`);
  console.log(`  Error: ${r3.errores?.join(", ")}`);
}

main().catch(console.error);