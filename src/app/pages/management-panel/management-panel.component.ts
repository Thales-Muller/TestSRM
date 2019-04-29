import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-management-panel',
  templateUrl: './management-panel.component.html',
  styleUrls: ['./management-panel.component.css']
})
export class ManagementPanelComponent implements OnInit {

  public page: string;

  public products: any[];
  public actions: any[];

  constructor(private storage: StorageService) {
    this.page = this.storage.getStorageService('Page');
   
    this.products = ['Produto1', 'Produto2', 'Produto3', 'Produto4', 'Produto5'];
    this.actions = ['Ação1', 'Ação2', 'Ação3', 'Ação4', 'Ação5'];
  }

  ngOnInit() {
  }

  public selectProduct(p:number):void{
    //Action
  }

  public selectAction1(a: string): void {
    switch (a) {

      case 'Ação1':
        break;

      case 'Ação2':
        break;

      case 'Ação3':
        break;

      case 'Ação4':
        break;

      case 'Ação5':
        break;

      default:
        break;
    }
  }

  public selectAction2(a: string): void {
    switch (a) {

      case 'Ação1':
        break;

      case 'Ação2':
        break;

      case 'Ação3':
        break;

      case 'Ação4':
        break;

      case 'Ação5':
        break;

      default:
        break;
    }
  }


}
