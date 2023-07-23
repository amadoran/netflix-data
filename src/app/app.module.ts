import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NavigationComponent } from './navigation/navigation.component';
import { MastheadComponent } from './masthead/masthead.component';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { PiechartComponent } from './piechart/piechart.component';
import { TablefilmComponent } from './tablefilm/tablefilm.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MastheadComponent,
    ProjectComponent,
    FooterComponent,
    PiechartComponent,
    TablefilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
