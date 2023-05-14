import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPaginacion } from 'src/utils/utils.interfaces';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    baseUrl: string = 'https://rickandmortyapi.com/api/';

    constructor(private http: HttpClient) { }

    public obtenerDatosPersonajes(paginacion: IPaginacion): Observable<any> {
        return this.http.get(`${this.baseUrl}/character?page=${paginacion.page}`).pipe(
            map(response => {
                return response;
            })
        );
    }

    public obtenerDatosPersonaje(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/character/${id}`).pipe(
            map(response => {
                return response;
            })
        );
    }
}