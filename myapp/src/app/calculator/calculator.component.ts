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
  oldOperation: string = '';

  operationsArray: string[] = ['%', '/', '*', '-', '+'];

  pushNumber(number: string) {
    if (this.lastOperation || this.lastTotal) {
      this.textBigDisplay = '';
      this.lastOperation = false;
    }
    if (this.lastTotal) {
      this.clearAll();
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
    this.lastOperation = false;
    this.lastTotal = false;
    this.result = 0;
  }

  total() {
    this.textSmallDisplay += this.textBigDisplay + '=';
    this.preCalculate();
    this.textBigDisplay = this.result.toString();
    this.lastTotal = true;
  }

  genericOperation(operation: string) {
    if (this.oldOperation != '') {
      this.preCalculate();
      this.textSmallDisplay = this.result + operation;
      console.log('d');
    } else {
      this.result = parseFloat(this.textBigDisplay);
      this.textSmallDisplay = this.textBigDisplay + operation;
    }
    this.lastOperation = true;
    this.oldOperation = operation;
  }

  preCalculate() {
    switch (this.oldOperation) {
      case '+':
        this.result += parseFloat(this.textBigDisplay);
        break;
      case '-':
        this.result -= parseFloat(this.textBigDisplay);
        break;
      case '*':
        this.result *= parseFloat(this.textBigDisplay);
        break;
      case '/':
        this.result /= parseFloat(this.textBigDisplay);
        break;
      default:
        console.log('error en la operacion');
    }
  }
}
