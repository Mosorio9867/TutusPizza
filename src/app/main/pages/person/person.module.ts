import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListingModule } from './person-listing/person-listing.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PersonListingComponent } from './person-listing/person-listing.component';
import { PersonDetailModule } from './person-detail/person-detail.module';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes = [
  {
    path: 'list',
    component: PersonListingComponent,
  },
  {
    path: '',
    component: PersonDetailComponent,
  },
  {
    path: ':id',
    component: PersonDetailComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    PersonListingModule,
    PersonDetailModule
  ],
})
export class PersonModule { }
