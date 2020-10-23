import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'miguel',
  templateUrl: './miguel.component.html',
  styleUrls: ['./miguel.component.css']
})
export class MiguelComponent implements OnInit {
  @Input() userTemp;

  constructor() { }

  ngOnInit(): void {
  }

  greetings() {
    alert(`Hola ${this.userTemp}!`);
  }



}
