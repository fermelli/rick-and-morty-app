import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { IPersonaje } from 'src/utils/utils.interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public id: number = Math.floor(Math.random() * 824) + 1;
  public personaje: IPersonaje | null = null;

  constructor(private apiService: AppService) { }

  ngOnInit(): void {
    this.obtenerPersonaje();
  }


  obtenerPersonaje() {
    this.apiService.obtenerDatosPersonaje(this.id).subscribe((response: IPersonaje) => {
      this.personaje = response;
    });
  }
}
