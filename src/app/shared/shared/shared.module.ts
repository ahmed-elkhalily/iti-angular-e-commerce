import { AuthonticationModule } from './../../authontication/authontication.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AuthonticationModule],
  imports: [CommonModule,],
  exports: [AuthonticationModule],
)
export class SharedModule {}
