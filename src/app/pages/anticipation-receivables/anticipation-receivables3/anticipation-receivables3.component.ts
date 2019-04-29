import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-anticipation-receivables3',
  templateUrl: './anticipation-receivables3.component.html',
  styleUrls: ['./anticipation-receivables3.component.css']
})
export class AnticipationReceivables3Component implements OnInit {

  public page:string;

  constructor(private storage: StorageService) { 
    this.page = this.storage.getStorageService('Page');
  }

  ngOnInit() {
  }

}
