import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { LandingComponent } from './landing/landing.component';
import { ListComponent } from './list/list.component';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const components: any[] = [
  LandingComponent,
  ListComponent,
  ModalDetailComponent
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule, MatDialogModule, ReactiveFormsModule, BrowserAnimationsModule],
  exports: [components],
  providers: [],
})
export class PublicModule {}