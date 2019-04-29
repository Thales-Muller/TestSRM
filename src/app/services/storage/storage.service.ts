import { Injectable, Inject } from '@angular/core';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService
  ) { 
    this.setPage('Painel de Gestão');
  }

  public getStorageService(name):any{
    return this.storage.get(name);
  }

  public setPage(name): void {
    this.storage.set('Page', name);
  }

  public deleteStorage(name):any{
    this.storage.remove(name);
  }
}
