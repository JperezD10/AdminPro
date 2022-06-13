import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent{

  @Input() valor: number = 50;
  @Input() btnClass: string = 'btn btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  changeValue(value: number){
    if(this.valor >= 100 && value >=0){
      this.valor = 100;
      this.valorSalida.emit(100);
    }
    else if(this.valor <= 0 && value < 0){
      this.valorSalida.emit(0);
      this.valor = 0;
    }else{
      this.valor += value;
      this.valorSalida.emit(this.valor);
    }
  }

  onChange(nuevoValor:number){

    if(nuevoValor >= 100){
      this.valor = 100;
    } else if(nuevoValor <= 0){
      this.valor = 0;
    }else{
      this.valor = nuevoValor;
    }
  }
}
