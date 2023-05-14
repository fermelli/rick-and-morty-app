import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonajesComponent } from "./personajes/personajes.component";
import { InicioComponent } from "./inicio/inicio.component";

const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'personajes',
        component: PersonajesComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }