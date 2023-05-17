import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { TeamComponent } from './team/team.component';
import { InsightsComponent } from './insights/insights.component';
import { CareersComponent } from './careers/careers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CareerService } from './career.service';
import { FormsModule } from '@angular/forms';
import { ApplyPopupComponent } from './apply-popup/apply-popup.component';
import { AppliedPositionsComponent } from './applied-positions/applied-positions.component';
import { HttpClientModule } from '@angular/common/http';
import { FileNameextractPipe } from './file-nameextract.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ProductComponent,
    TeamComponent,
    InsightsComponent,
    CareersComponent,
    ContactsComponent,
    ApplyPopupComponent,
    AppliedPositionsComponent,
    FileNameextractPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CareerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
