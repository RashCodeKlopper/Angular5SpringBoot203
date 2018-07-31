import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';

// Imports for primeNG
import {
  DataTableModule, SharedModule, ButtonModule, MessagesModule,
  GrowlModule, PanelModule, DialogModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';

import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';

import { PageNotFoundComponent } from './error/pagenotfound.component';

const appRoutes: Routes = [
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact List' }
  },
  {
    path: 'contact-detail/:id',
    component: ContactDetailComponent,
    data: { title: 'Contact Details' }
  },
  {
    path: 'contact-create',
    component: ContactCreateComponent,
    data: { title: 'Create Contact' }
  },
  {
    path: 'contact-edit/:id',
    component: ContactEditComponent,
    data: { title: 'Edit Contact' }
  },
  {
    path: '',
    redirectTo: '/contact',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: 'error',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    // Angular Components
    AppComponent,
    PageNotFoundComponent,
    ContactComponent,
    ContactDetailComponent,
    ContactCreateComponent,
    ContactEditComponent,
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,

    // PrimeNG Modules
    DataTableModule,
    SharedModule,
    ButtonModule,
    MessagesModule,
    GrowlModule,
    PanelModule,
    DialogModule,
    TableModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
