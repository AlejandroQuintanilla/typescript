export interface Asignatura {
    readonly id: string;
    nombre: string;
    creditos: number;
    departamento: string;
    profesor: string;
  }
  
  export interface Estudiante {
    readonly id: string;
    nombre: string;
    apellidos: string;
    email: string;
    fechaNacimiento: Date;
    curso: number;
  }
  
  export interface MatriculaActiva {
    tipo: "ACTIVA";
    asignaturas: Asignatura[];
    fechaInicio: Date;
  }
  
  export interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivoSuspension: string;
    fechaSuspension: Date;
  }
  
  export interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
    fechaFinalizacion: Date;
    titulacionObtenida: string;
  }
  
  export type EstadoMatricula = MatriculaActiva | MatriculaSuspendida | MatriculaFinalizada;
  
  export interface RespuestaAPI<T> {
    codigoEstado: number;
    exito: boolean;
    datos: T;
    errores?: string[];
    timestamp: string;
  }