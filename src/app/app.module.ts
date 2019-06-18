import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule } from '@angular/material';
import { MenuComponent } from './shared/menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuLateralComponent } from './shared/menu-lateral/menu-lateral.component';
import { HomeComponent } from './home/home.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { CarouselComponent } from './carousel/carousel.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { CardComponent } from './card/card.component';
import { ListaComponent } from './lista/lista.component'
import { HttpClientModule } from '@angular/common/http';
import { NoticiaDetailComponent } from './noticia-detail/noticia-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuLateralComponent,
    HomeComponent,
    NoticiasComponent,
    CarouselComponent,
    CardComponent,
    ListaComponent,
    NoticiaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule, 
    MatButtonModule, 
    FlexLayoutModule, 
    MatListModule,
    CarouselModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
