import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';

const modules: any[] = [PublicModule, PrivateModule];

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
export class ViewsModule {}