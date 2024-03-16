import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokelist, Pokemon } from '@interfaces';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private urlPokeList: string = 'https://pokeapi.co/api/v2/pokemon';

    constructor(private http: HttpClient) { }

    getPokelist(): Observable<Pokelist> {
        return this.http.get<Pokelist>(`${this.urlPokeList}/?limit=40`);
    }

    getPokemon(name:string): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.urlPokeList}/${name}`);
    }
    
}