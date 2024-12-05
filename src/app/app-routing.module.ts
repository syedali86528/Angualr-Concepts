import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';

// Define your routes
const routes: Routes = [
  { path: '', redirectTo: '/directives', pathMatch: 'full' }, // Default route
  { path: 'directives', component: DirectivesComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'dependency-injection', component: DependencyInjectionComponent },
  { path: 'rxjs', component: RxjsLearningComponent },
  { path: '**', redirectTo: '/directives', pathMatch: 'full' } // Wildcard route for handling 404s
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
