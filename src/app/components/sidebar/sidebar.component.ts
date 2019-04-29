import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu.models';
import { StorageService } from 'src/app/services/storage/storage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public formSearch: FormGroup;

  public menuItems: Menu[];
  public subMenuItems: Menu[];

  constructor(private storage: StorageService) {
    this.menuItems = new Array<Menu>();
    this.menuItems.push({ path: '/painel-gestao', title: 'Painel de Gestão', image: '../../../assets/img/menu1.png', class: '', children: '' });
    this.menuItems.push({ path: '/conta-digital', title: 'Conta Digital', image: '../../../assets/img/menu2.png', class: '', children: '' });
    this.menuItems.push({ path: '', title: 'Ant. de Recebíveis', image: '../../../assets/img/menu3.PNG', class: '', children: 'subMenu' });

    this.subMenuItems = new Array<Menu>();
    this.subMenuItems.push({ path: '/ant-recebiveis1', title: 'Submenu 1', image: '', class: '', children: '' });
    this.subMenuItems.push({ path: '/ant-recebiveis2', title: 'Submenu 2', image: '', class: '', children: '' });
    this.subMenuItems.push({ path: '/ant-recebiveis3', title: 'Submenu 3', image: '', class: '', children: '' });

    this.formSearch = new FormGroup({
      'search': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    });
  }

  ngOnInit() {
    let page = this.storage.getStorageService('Page');
    for (let i: number = 0; i < this.menuItems.length; i++) {
      if (this.menuItems[i].title === page) {
        this.menuItems[i].class = 'activeMenu';
      } else {
        this.menuItems[i].class = '';
      }
    }
  }

  public titlePage(name): void {

    this.storage.setPage(name);
    console.log(this.storage.getStorageService('Page'));

    for (let i: number = 0; i < this.menuItems.length; i++) {
      if (this.menuItems[i].title === name) {
        this.menuItems[i].class = 'activeMenu';
      } else {
        this.menuItems[i].class = '';
      }
    }
    this.menuItems.slice();
    for (let i: number = 0; i < this.subMenuItems.length; i++) {
      if (this.subMenuItems[i].title === name) {
        this.subMenuItems[i].class = 'activeMenu';
      } else {
        this.subMenuItems[i].class = '';
      }
    }
  }

  public search(): void {
    console.log(this.formSearch.value.search)
    //Action
  }

}
