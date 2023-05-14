import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { IInfo, IPersonaje, IRespuestaTodos } from 'src/utils/utils.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  public personajes: IPersonaje[] = [];
  public infoPersonajes: IInfo = {
    count: 0,
    pages: 0,
    next: '',
    prev: ''
  };
  public pagina: number = 1;
  public cargando: boolean = false;
  public paginas: number[] = [];

  constructor(private apiService: AppService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  obtenerPersonajes() {
    this.cargando = true;

    this.apiService.obtenerDatosPersonajes({ page: this.pagina }).subscribe((response: IRespuestaTodos<IPersonaje>) => {
      this.personajes = response.results;
      this.infoPersonajes = response.info;
      this.cargando = false;
      this.paginas = Array(this.infoPersonajes.pages).fill(0).map((valor, indice) => indice + 1);
    });
  }

  paginaAnterior() {
    this.pagina--;
    this.obtenerPersonajes();
  }

  paginaSiguiente() {
    this.pagina++;
    this.obtenerPersonajes();
  }

  paginaPrimera() {
    this.pagina = 1;
    this.obtenerPersonajes();
  }

  paginaUltima() {
    this.pagina = this.infoPersonajes.pages;
    this.obtenerPersonajes();
  }

  cambiarPagina() {
    this.obtenerPersonajes();
  }
}
