export interface User {
  rol: string;
  email:string,
  nombre: string;
  contrasena: string;
  confirmPassword: string;
  id?:number, 
   // Agrega la propiedad 'rol' con el tipo adecuado
  // Otros campos de usuario si los tienes
}