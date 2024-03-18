import { Component, OnInit } from '@angular/core';
import { ModalDetailComponent } from '../modal-detail/modal-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@services';
import { Pokemon } from '@interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public pokelist: Pokemon[] = [];

  public formFilter: FormGroup = new FormGroup({});
  private patternSearch = /\p{Diacritic}/gu;
  private NFD = 'NFD';
  public data: Pokemon[] = [];
  public isFiltered: boolean = false;

  public pageSize: number = 10;
  public currentPage: number = 1;
  public displayedPokemons: Pokemon[] = [];

  public isLoading: boolean = true;

  constructor(private dialog: MatDialog, private dataService: DataService) {}

  ngOnInit(): void {
    this.formFilter = new FormGroup({
      search: new FormControl('', []),
      pageSizeSelect: new FormControl(5, []),
      sortListSelect: new FormControl('Ordenar Lista', [])
    });
    this.getPokelist();
  }

  async getPokelist() {
    const pokemons: Pokemon[] = [];
    for (let i = 1; i <= 40; i++) {
      try {
        const pokemon = await this.dataService.getPokelist(i);
        if (pokemon) pokemons.push(pokemon);
      } catch (error) {
        console.error(`Error al obtener el Pokémon con ID ${i}:`, error);
      }
    }
    if (pokemons.length > 0) {
      this.pokelist = pokemons;
      this.data = pokemons;
      this.loadPage(1);
      this.isLoading = false;
    }
  }

  openModal(pokemon: Pokemon) {
    this.dialog.open(ModalDetailComponent, {
      data: pokemon
    });
  }

  get values() {
    return this.formFilter.value;
  }

  filter() {
    let filtered = [...this.pokelist];
    if (this.values.search) {
      this.isFiltered = true;
      filtered = filtered.filter(
        (e) =>
          this.staticSearchCondition(
            e,
            'name',
            this.values.search as string
          )
      );
    }
    if (this.isFiltered) {
      this.data = filtered;
      this.loadPage(1);
    } else {
      this.data = [...this.pokelist];
    }
  }

  private staticSearchCondition(
    object: any,
    field: string,
    text: any
  ): boolean {
    if (object[field]) {
      let str = object[field];
      const a = str
        .normalize(this.NFD)
        .replace(this.patternSearch, '')
        .toLowerCase()
        .search(
          text.normalize(this.NFD).replace(this.patternSearch, '').toLowerCase()
        );
      return a >= 0;
    }
    return false;
  }

  loadPage(page: number): void {
    this.pageSize = +this.formFilter.get('pageSizeSelect')?.value;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.currentPage = page;
    this.displayedPokemons = this.data.slice(startIndex, endIndex);
  }

  nextPage(): void {
    const totalPages = Math.ceil(this.data.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.loadPage(this.currentPage + 1);
    }
  }
  
  prevPage(): void {
    if (this.currentPage > 1) {
      this.loadPage(this.currentPage - 1);
    }
  }

  onChangeSortListSelect(): void {
    this.sortList();
    this.loadPage(this.currentPage);
  }

  sortList(): void {
    const value = this.formFilter.get('sortListSelect')?.value;
    switch (value) {
      case 'Nombre A-Z':
        this.sortByNameAsc();
        break;
      case 'Nombre Z-A':
        this.sortByNameDesc();
        break;
      case 'Tipo A-Z':
        this.sortByTypeAsc();
        break;
      case 'Tipo Z-A':
        this.sortByTypeDesc();
        break;
      case 'Peso de menor a mayor':
        this.sortByWeightAsc();
        break;
      case 'Peso de mayor a menor':
        this.sortByWeightDesc();
        break;
      default:
        break;
    }
  }

  sortByNameAsc(): void {
    this.data.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByNameDesc(): void {
    this.data.sort((a, b) => b.name.localeCompare(a.name));
  }

  sortByTypeAsc(): void {
    this.data.sort((a, b) => a.types[0].type.name.localeCompare(b.types[0].type.name));
  }

  sortByTypeDesc(): void {
    this.data.sort((a, b) => b.types[0].type.name.localeCompare(a.types[0].type.name));
  }

  sortByWeightAsc(): void {
    this.data.sort((a, b) => a.weight - b.weight);
  }

  sortByWeightDesc(): void {
    this.data.sort((a, b) => b.weight - a.weight);
  }

}
