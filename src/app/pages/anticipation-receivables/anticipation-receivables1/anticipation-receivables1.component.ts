import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-anticipation-receivables1',
  templateUrl: './anticipation-receivables1.component.html',
  styleUrls: ['./anticipation-receivables1.component.css']
})
export class AnticipationReceivables1Component implements OnInit {

  public page:string;

  constructor(private storage: StorageService) { 
    this.page = this.storage.getStorageService('Page');
  }

  ngOnInit() {
  }

}
