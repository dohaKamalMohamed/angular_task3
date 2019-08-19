import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-moduels',
  templateUrl: './moduels.component.html',
  styleUrls: ['./moduels.component.css'],
})
export class ModuelsComponent  {
  flag: boolean = false;
  addCat: boolean = false;
  question: boolean = false;
  drop: boolean = false;
  translation: string="translation";
  moduleName: string;
  categoryName: string;
  modalRef: BsModalRef;
  selected:any[]=['nc'];
  req:string;
  score:number;
 
  constructor(private modalService: BsModalService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addModule() {
    this.flag = true;
  }
  addModuleName(moduels) {
    this.moduleName = moduels;
    this.flag = false;
  }
  addCategory() {
    this.addCat = true;
  }
  addCategoryName(catName) {
    this.categoryName = catName;
    this.addCat = false;
  }
  addQuestion() {
    this.question = true;
  }
  translate(translate) {
    this.translation = translate;
    this.drop=true;
  }
  add(reqs,scor){
    this.req=reqs;
    this.score=scor;
  }


}
