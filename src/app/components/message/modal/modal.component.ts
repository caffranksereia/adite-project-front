import { Component } from "@angular/core";

@Component({
  selector: 'app-save-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  todo:string= '';

  seeModa: boolean = false;

  toggle() {
    this.seeModa = !this.seeModa
  }

}