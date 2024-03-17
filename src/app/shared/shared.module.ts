import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';

const modules: any[] = [ComponentsModule];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    modules,
  ],
  exports: [modules],
  providers: [],
})
export class SharedModule {}
