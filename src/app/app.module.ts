import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos personalizados para importaciones.
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

//componentes individuales
import { AppComponent } from './app.component';
import { NonPageFoundComponent } from './non-page-found/non-page-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NonPageFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
