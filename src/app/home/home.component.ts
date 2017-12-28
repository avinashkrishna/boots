import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private toggle : boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  hamburgerToggle(){
    if(this.toggle){
      this.toggle=false;
    }else{
      this.toggle=true;
    }
  }
}
