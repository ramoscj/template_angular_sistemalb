import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from './user.model';

@Injectable()
export class UsersService {
    public url = 'api/users';
    constructor(public http: HttpClient) { }

    listarEstudiantes(): Observable<Estudiante[]> {
        return this.http.get<Estudiante[]>(this.url);
    }

    agregarEstudiante(estudiante: Estudiante){
        return this.http.post(this.url, estudiante);
    }

    actualizarEstudiante(estudiante: Estudiante){
        return this.http.put(this.url, estudiante);
    }

    eliminarEstudiante(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
