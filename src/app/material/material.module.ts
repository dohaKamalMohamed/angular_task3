import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';




 const material=[
  MatSelectModule,
  
 ]
@NgModule({
  declarations: [],
  imports: [material],
  exports:[ material]
 
})
export class MaterialModule { }
