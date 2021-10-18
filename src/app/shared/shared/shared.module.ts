import { AuthonticationModule } from './../../authontication/authontication.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthonticationModule],
  exports: [AuthonticationModule],
})
export class SharedModule {}
