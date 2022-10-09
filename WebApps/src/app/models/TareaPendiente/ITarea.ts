export interface ITarea {

    Id: number;
    Nombre: string;
    Terminada: boolean;
};

export const Tareas: ITarea[] = [

    { Id: 1,Nombre: "Tarea 1", Terminada:false},
    { Id: 2,Nombre: "Tarea 2", Terminada:true},
    { Id: 3,Nombre: "Tarea 3", Terminada:false},
    { Id: 4,Nombre: "Tarea 4", Terminada:true},
    { Id: 5,Nombre: "Tarea 5", Terminada:false}
];

