import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditHardysoftComponent } from './components/hardysoft/edit-hardysoft.component';
import { NewHardysoftComponent } from './components/hardysoft/new-hardysoft.component';
import { HomeComponent } from './components/home/home.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path:'nuevaedu', component: NewEducacionComponent},
  {path:'nuevoskill', component: NewHardysoftComponent},
  {path:'nuevoproyecto', component: NewProyectoComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'editEdu/:id', component: EditEducacionComponent},
  {path:'editSkills/:id', component: EditHardysoftComponent},
  {path:'editProyecto/:id', component: EditProyectoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
