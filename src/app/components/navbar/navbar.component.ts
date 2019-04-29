import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public name: string;

  public alerts: any[];

  constructor() {
    this.name = "Sandra Oliveira";
    this.alerts = ['Alert1', 'Alert2', 'Alert3'];
  }

  ngOnInit() {
  }

  public selectVision(v: number): void {
    //Action
  }

  public showAlert(): boolean {
    if (this.alerts.length === 0) return false;
    else return true;
  }

  public numberAlert(): number {
    return this.alerts.length;
  }

  public eventAlert(a: string): void {
    var index = this.alerts.indexOf(a);

    if (index > -1) {
      this.alerts.splice(index,1);
    }

  }
}
