import { Component, OnInit } from '@angular/core';
import { ModalDetailComponent } from '../modal-detail/modal-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '@services';
import { Pokelist, Pokemon } from '@interfaces';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public pokelist: Pokelist["results"] = [];

  public formFilter: FormGroup = new FormGroup({});
  private patternSearch = /\p{Diacritic}/gu;
  private NFD = 'NFD';
  public data: Pokelist["results"] = [];
  public isFiltered: boolean = false;

  public pageSize: number = 10;
  public currentPage: number = 1;
  public displayedPokemons: Pokelist["results"] = [];

  constructor(private dialog: MatDialog, private dataService: DataService) {}

  ngOnInit(): void {
    this.formFilter = new FormGroup({
      search: new FormControl('', []),
      pageSizeSelect: new FormControl(5, [])
    });
    this.getPokelist();
  }

  async getPokelist() {
    const data = await this.dataService.getPokelist().toPromise();
    if (data) {
      this.pokelist = data.results;
      this.data = data.results;
      this.loadPage(1);
    }
  }

  async getPokemonDetail(name:string) {
    const pokemon = await this.dataService.getPokemon(name).toPromise();
    if (pokemon) this.openModal(pokemon);
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

  sortByNameAsc(): void {
    this.displayedPokemons.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByNameDesc(): void {
    this.displayedPokemons.sort((a, b) => b.name.localeCompare(a.name));
  }

}
