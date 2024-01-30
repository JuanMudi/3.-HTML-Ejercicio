import { Routes } from '@angular/router';
import { ArquitecturaComponent } from './arquitectura/arquitectura.component';
import { InfraestructuraComponent } from './infraestructura/infraestructura.component';
import { ModulosComponent } from './modulos/modulos.component';
import { NofuncionalesComponent } from './nofuncionales/nofuncionales.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const routes: Routes = [
    { path: 'arquitectura', component: ArquitecturaComponent },
  { path: 'infraestructura', component: InfraestructuraComponent },
  { path: 'modulos', component: ModulosComponent },
  { path: 'nofuncionales', component: NofuncionalesComponent },
  { path: 'objetivos', component: ObjetivosComponent },
  { path: 'usuarios', component: UsuariosComponent }
];
