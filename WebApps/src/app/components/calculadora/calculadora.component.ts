import { Component, OnInit } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  prevValue = '';
  currValue = '';
  result = '';

  addToExpression(value:string){
    
    if (this.result != ''){
      this.prevValue = this.currValue;
      this.currValue = value;
    }

    switch(value){

      case 'AC':
        this.result = '';
        break;
      
      case 'CE':
        this.result = this.prevValue != '='? this.result.slice(0, -1): this.result;
        break;

      case '=':
        this.result = eval(this.result);
        break;
      
      default:
        this.result += value;
        break;
    }

  }


  constructor() { }

  ngOnInit(): void {

  }

  // display = document.querySelector('.calculator-display');
  // keypadButtons = document.getElementsByClassName('keypad-buttons');
  
  // keypadButtonsArray = Array.from(this.keypadButtons);  

  // // Al cargar el documento..
  //   window.addEventListener('load', () => {

  //     // Declaramos las constantes que deseamos obtenener del documento
  //     const display = document.querySelector('.calculator-display');
  //     const keypadButtons = document.getElementsByClassName('keypad-buttons');
      
  //     // Declaramos un array que va a contener como elementos los botones obtenidos desde el documento
  //     const keypadButtonsArray = Array.from(keypadButtons);

  //     // Recorremos el array de botones
  //     keypadButtonsArray.forEach(button => {

  //       // A cada botón le definimos un Listener para cuando clickeamos en él, llamando a la función Calculadora
  //       button.addEventListener('click', () => {
  //         this.Calculadora(button, display);
  //         console.log(button.innerHTML);
  //       }) 
  //     });
  //   })


  // // Definimos la función de la calculadora dependiendo del botón que se oprima
  // Calculadora(button:any, display:any){

  //   switch(button.innerHTML){

  //     case 'C': // La 'C' borra
  //       this.borrar(display);
  //       break;
    
  //     case '=': // El '=' nos devuelve un resultado
  //       this.calcular(display);
  //       break;
      
  //     default: // Para los demás botones, se debe mostrar en el display cuales oprimimos
  //       this.actualizarDisplay(display, button);
  //       break;
  //     }
  // }

  // borrar(display:any){
  //   
  //   display.innerHTML = 0;
  // }

  // calcular(display:any){
  //   display.innerHTML = eval(display.innerHTML) //Tomar el display, resolvero y guardarlo en el innerHTML del display
  // }

  // actualizarDisplay(display:any, button:any){

  //   if(display.innerHTML == 0){
  //     display.innerHTML = '';
  //   }

  //   display.innerHTML += button.innerHTML;
  // }

  
}
