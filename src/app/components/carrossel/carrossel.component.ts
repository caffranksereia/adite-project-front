import { Component, Input } from "@angular/core";

@Component
({
  selector:'carrosel-app',
  templateUrl:'./carrosel.component.html',
  styleUrls:['./carrosel.component.css'],
})

export class CarroselComponent{
@Input() users:string [] = []
}