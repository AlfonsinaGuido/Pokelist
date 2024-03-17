import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const components: any[] = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, RouterModule],
  exports: [components],
  providers: [],
})
export class ComponentsModule {}
