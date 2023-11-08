export interface Registros {
  id: number;
  nombre: string;
}

export interface Alumno extends Registros {
  tipo: 'Alumno';
}

export interface Profesor extends Registros {
  tipo: 'Profesor';
}

export interface Administrador extends Registros {
  tipo: 'Administrador';
}

