import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
// import { } from '@fortawesome/fontawesome-free';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { TaskListComponent } from './components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CalculadoraComponent,
    TaskListComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
