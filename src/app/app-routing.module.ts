import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './insights/insights.component';
import { ProductComponent } from './product/product.component';
import { TeamComponent } from './team/team.component';
import { AppliedPositionsComponent } from './applied-positions/applied-positions.component';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'team', component: TeamComponent },
    { path: 'insights', component: InsightsComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'contact', component: ContactsComponent },
    { path: 'applied-positions', component: AppliedPositionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
