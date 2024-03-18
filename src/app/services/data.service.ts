import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Pokemon } from '@interfaces';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private urlPokeList: string = 'https://pokeapi.co/api/v2/pokemon';

    constructor(private http: HttpClient) { }

    async getPokelist(id:number): Promise<Pokemon> {
        return await firstValueFrom(this.http.get<Pokemon>(`${this.urlPokeList}/${id}`));
    }
    
}