import {TareaPendienteInterface} from '../TareaPendiente/ITareaPendiente'

export class TareaPendiente implements TareaPendienteInterface{
    
    Nombre: string;
    Terminada: boolean;

    //El constructor sirve para darle los valores predeterminados al objeto de tipo TareaPendiente: 
    // -El nombre será el pasado por parámetro
    // -Terminada será false en caso de que no se inserte dicho parámetro

    constructor(nombre: string, terminada?:boolean){

        this.Nombre = nombre;
        this.Terminada = terminada?terminada:false;

    }
}

export const TareasPendientes: TareaPendiente[] = [

]

    
    
    