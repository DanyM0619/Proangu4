import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { CapitalTextPipe } from './capital-text.pipe';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { GreetingsComponent } from './greetings/greetings.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CapitalTextPipe,
    LifecycleComponent,
    GreetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
