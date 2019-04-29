import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-anticipation-receivables2',
  templateUrl: './anticipation-receivables2.component.html',
  styleUrls: ['./anticipation-receivables2.component.css']
})
export class AnticipationReceivables2Component implements OnInit {

  public page:string;

  constructor(private storage: StorageService) { 
    this.page = this.storage.getStorageService('Page');
  }

  ngOnInit() {
  }

}
