import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-digital-account',
  templateUrl: './digital-account.component.html',
  styleUrls: ['./digital-account.component.css']
})
export class DigitalAccountComponent implements OnInit {
  
  public page:string;

  constructor(private storage: StorageService) { 
    this.page = this.storage.getStorageService('Page');
  }

  ngOnInit() {
  }

}
