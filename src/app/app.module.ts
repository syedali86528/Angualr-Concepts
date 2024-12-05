import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { DataServicesService } from './service/data-services.service';
import { AppRoutingModule } from './app-routing.module';
import { RoutingPageComponent } from './routing/routing-page.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    DependencyInjectionComponent,
    RoutingPageComponent,
    RxjsLearningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // Configure the router with the routes
  ],
  providers: [DataServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
