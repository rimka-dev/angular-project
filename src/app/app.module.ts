import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // gérer les formulaires
import {RouterModule} from '@angular/router'; // route pour relier les autre pages
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

import {ArticlesService} from './service/articles.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { FooterComponent } from './commun/footer/footer.component';
import { BannerComponent } from './commun/banner/banner.component';
import { CarouselComponent } from './commun/carousel/carousel.component';

import { AccueilComponent } from './front/accueil/accueil.component';
import { ArticleComponent } from './front/article/article.component';
import { ContactComponent } from './front/contact/contact.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { AccueilBackComponent } from './back/accueil-back/accueil-back.component';
import { MenuBackComponent } from './back/menu-back/menu-back.component';
import { ListeComponent } from './back/articles/liste/liste.component';
import { AjouterComponent } from './back/articles/ajouter/ajouter.component';
import { ListeUserComponent } from './back/utilisateurs/liste-user/liste-user.component';
import { AjouterUserComponent } from './back/utilisateurs/ajouter-user/ajouter-user.component';
import { ListeParametresComponent } from './back/parametres/liste-parametres/liste-parametres.component';
import { LoginComponent } from './commun/login/login.component';
import { UpdateArticleComponent } from './back/articles/update-article/update-article.component';
import { UpdateUserComponent } from './back/utilisateurs/update-user/update-user.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    BannerComponent,
    AccueilComponent,
    ArticleComponent,
    CarouselComponent,
    ContactComponent,
    NotFoundComponent,
    AccueilBackComponent,
    MenuBackComponent,
    ListeComponent,
    AjouterComponent,
    ListeUserComponent,
    AjouterUserComponent,
    ListeParametresComponent,
    LoginComponent,
    UpdateArticleComponent,
    UpdateUserComponent,

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
      {path: '', component : AccueilComponent},
      {path: 'article/:id', component : ArticleComponent},
      {path : 'contact', component : ContactComponent},
      {path : 'login', component : LoginComponent},
      {path: 'admin/article/liste', component : ListeComponent},
      {path: 'admin/article/ajouter', component : AjouterComponent},
      {path: 'admin/article/update-article/:id', component : UpdateArticleComponent},
      {path: 'admin/utilisateur/liste-user', component : ListeUserComponent},
      {path: 'admin/utilisateur/ajouter-user', component : AjouterUserComponent},
      {path: 'admin/utilisateur/update-user/:id', component : UpdateUserComponent},
      {path: 'admin/parametres/liste-parametres', component : ListeParametresComponent},
      {path: 'admin', component : AccueilBackComponent}, // admin aprés admin/article/
      {path: '**', component : NotFoundComponent} // le not found tjr en dérnier
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
