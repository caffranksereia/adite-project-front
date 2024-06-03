import { Component, Input, OnInit } from "@angular/core";
import { ICardView } from "src/app/_interfaces/user";

@Component
({
  selector:'view-user-component',
  templateUrl:'./view-user-component.html',
  styleUrls:['./view-user-component.css']
})
 export class ViewUserComponent implements OnInit {
  ngOnInit(): void {
    this.cardView
   
  }
  @Input() cardView: ICardView [] = []
 }
