import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-app-componentes',
  templateUrl: './app-componentes.component.html',
  styleUrls: ['./app-componentes.component.scss'],
})
export class AppComponentesComponent  implements OnInit {
  @Input() nombre:string='';
  
  constructor() { }

  ngOnInit() {}

}
