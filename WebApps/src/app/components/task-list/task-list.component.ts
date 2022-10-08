import { Component, OnInit } from '@angular/core';
// import { TareaPendiente} from 'src/app/models/TareaPendiente/TareaPendiente';
import { TareaPendienteInterface, TareasPendientes} from 'src/app/models/TareaPendiente/ITareaPendiente';
import { TareaService } from 'src/app/services/tarea.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private tareasService: TareaService) { }

  ngOnInit(): void {

    this.GetTareas();
  }

  //Variables
  nombreTarea = "";
  tareas: TareaPendienteInterface[] = [];

  //Formularios
  FormRegistro = new FormGroup({
    Nombre: new FormControl(''),
    Terminada: new FormControl(false),
    });

  // PostTarea(Nombre:string){

  //   const itemCopy = {...this.FormRegistro.value};
  //   this.tareasService.post(itemCopy).subscribe((res:any) => {

  //     alert("Tarea Guardada")
  //   });
  // }

  GetTareas(){
    this.tareasService.get().subscribe((res:TareaPendienteInterface[]) => {
      this.tareas = res;
    });

  }

}
