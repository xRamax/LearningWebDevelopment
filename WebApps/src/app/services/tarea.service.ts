import { Injectable } from '@angular/core';
import { of } from "rxjs";
// import { TareasPendientes} from '../models/TareaPendiente/TareaPendiente';
import { TareasPendientes, TareaPendienteInterface} from '../models/TareaPendiente/ITareaPendiente';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor() { }

  get(){

    return of (TareasPendientes);
  }


  post(obj: TareaPendienteInterface ){

    TareasPendientes.push(obj);
    return of(obj);
  }


}
