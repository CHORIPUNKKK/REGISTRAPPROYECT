import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
})
export class PieComponent  implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  irHome(){
    this.router.navigate(['/home']);
  }
}
