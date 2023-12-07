import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Registros } from '../interfaces/registros';
import { Observable } from 'rxjs';
import { User } from '../models/models.module';


@Injectable({
  providedIn: 'root'
})
export class ServJSONService {
  private url = 'https://server-registrapp.onrender.com';
  constructor(private http: HttpClient) { }

  agregar(data: any) {
    return this.http.post<Registros>(environment.api.Alumnos, data);
  }
  
  listarAlumnos(): Observable<Registros[]> {
    return this.http.get<Registros[]>(environment.api.Alumnos);
  }

  listarProfesores(): Observable<Registros[]> {
    return this.http.get<Registros[]>(environment.api.Profesores);
  }

  listarAdministradores(): Observable<Registros[]> {
    return this.http.get<Registros[]>(environment.api.Administradores);
  }

  modificar(id: number, newData: any) {
    return this.http.put(`${environment.api.Alumnos}/${id}`, newData);
    // O puedes utilizar environment.api.Profesores o environment.api.Administradores según el tipo
  }
  
  eliminar(id: number) {
    return this.http.delete(`${environment.api.Alumnos}/${id}`);
    // O puedes utilizar environment.api.Profesores o environment.api.Administradores según el tipo
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/users`, user);
  }

  verifyUser(nombre: string, contrasena: string): Observable<any> {
    return this.http.get(`${this.url}/users?nombre=${nombre}&contrasena=${contrasena}`);
  }
}
