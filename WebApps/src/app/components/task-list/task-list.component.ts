import { Component, OnInit } from '@angular/core';
// import { TareaPendiente} from 'src/app/models/TareaPendiente/TareaPendiente';
import { ITarea, Tareas} from 'src/app/models/TareaPendiente/ITarea';
import { MockTareasService } from 'src/app/services/mock-tareas.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private tareasService: MockTareasService) { }

  ngOnInit(): void {

    this.GetTareas();
  }

  //Variables
  nombreTarea = "";
  tareas: ITarea[]   | null = null;

  //Fecha
  date = new Date()

  //Formularios
  FormRegistro = new FormGroup({
    Id: new FormControl(0),
    Nombre: new FormControl(''),
    Terminada: new FormControl(false),
    });

  
  //Eventos

  GetTareas(){
    this.tareasService.get().subscribe((res:ITarea[]) => {
      this.tareas = res;
    });
  } 

  // PostTarea(){


  //   const itemCopy = {...this.FormRegistro.value};

  //   this.tareasService.post(itemCopy).subscribe((res:any) => {

  //     alert("Tarea Guardada")
  //   });
  // }

}
