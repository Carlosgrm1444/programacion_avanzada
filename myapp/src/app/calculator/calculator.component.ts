import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  textBigDisplay: string = '';
  textSmallDisplay: string = '';

  result: number = 0;

  lastOperation: boolean = false;
  lastTotal: boolean = false;
  oldOperation!: string;

  operationsArray: string[] = ['%', '/', '*', '-', '+'];

  pushNumber(number: string) {
    if (this.lastOperation || this.lastTotal) {
      this.textBigDisplay = '';
      this.lastOperation = false;
    }
    if (this.lastTotal) {
      this.textSmallDisplay = '';
      this.lastTotal = false;
    }
    this.textBigDisplay += number;
  }

  insertSpot() {
    if (!this.textBigDisplay.includes('.')) {
      this.textBigDisplay += '.';
    }
  }

  clearOne() {
    this.textBigDisplay = this.textBigDisplay.slice(0, -1);
  }

  clearAll() {
    this.textBigDisplay = '';
    this.textSmallDisplay = '';
    this.oldOperation = '';
  }

  total() {
    this.lastTotal = true;
    this.textSmallDisplay += this.textBigDisplay + '=';
  }
  plus() {
    this.genericOperation('+');
  }
  rest() {
    this.genericOperation('-');
  }
  multiply() {
    this.genericOperation('*');
  }
  div() {
    this.genericOperation('/');
  }
  mod() {}

  genericOperation(operation: string) {
    this.lastOperation = true;
    if (this.operationsArray.includes(this.textSmallDisplay.slice(-1))) {
      this.textSmallDisplay = this.textSmallDisplay.slice(0, -1);
      this.textSmallDisplay += operation;
    } else {
      this.textSmallDisplay += this.textBigDisplay + operation;
      this.oldOperation = operation;
    }
  }

  calculate() {
    if (this.operationsArray.includes(this.textSmallDisplay.slice(-1))) {
      this.textSmallDisplay = this.textSmallDisplay.slice(0, -1);
    }
    switch (this.oldOperation) {
      case '+':
        // Código a ejecutar si expresión === valor1
        break;
      case '-':
        // Código a ejecutar si expresión === valor2
        break;
      case '*':
        // Código a ejecutar si expresión === valor1
        break;
      case '/':
        // Código a ejecutar si expresión === valor2
        break;
      // Puedes agregar más casos según sea necesario
      default:
      // Código a ejecutar si no coincide con ningún caso
    }
  }
}
