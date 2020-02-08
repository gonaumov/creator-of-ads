import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsFeatureRequestsComponent } from './questions-feature-requests/questions-feature-requests.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'questions', component: QuestionsFeatureRequestsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
