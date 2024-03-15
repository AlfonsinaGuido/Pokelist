import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const components: any[] = [
  
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule],
  exports: [components],
  providers: [],
})
export class PrivateModule {}