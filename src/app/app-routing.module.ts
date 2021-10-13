import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { CardsListComponent } from './cards-list/cards-list.component';
import { SingleCardComponent } from './single-card/single-card.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {
    path: '',
    component: CardsListComponent,
  },
  {
    path: 'card/:id',
    component: SingleCardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
