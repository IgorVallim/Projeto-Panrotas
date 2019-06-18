import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaDetailComponent } from './noticia-detail/noticia-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'noticias/:id', component: NoticiaDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
