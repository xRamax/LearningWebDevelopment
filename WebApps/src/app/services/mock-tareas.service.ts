import { Injectable } from '@angular/core';
import { of } from "rxjs";
// import { TareasPendientes} from '../models/TareaPendiente/TareaPendiente';
import { Tareas, ITarea} from '../models/TareaPendiente/ITarea';

@Injectable({
  providedIn: 'root'
})
export class MockTareasService {

  constructor() {}

  get(){
    
    return of(Tareas);
  }


  post(obj: ITarea){

    obj.Id = new Date().getTime();
    
    Tareas.push(obj);
    return of(obj);
  }

  delete(Id: number) {
    var items = Tareas.filter(x => x.Id === Id);
    return of(items[0]);
  }

}
