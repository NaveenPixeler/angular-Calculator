import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  input = '';
  result = '';

  onNumberClick(num: string) {
    if (num === '0') {
      if (!this.input) return;
    }

    // not to repeat period more than once
    if (num === '.' && this.input.includes('.')) return;

    this.input += num;
    this.calculate();
  }

  onOperatorClick(operator: string) {
    // without any number not accepting operators
    if (!this.input) return;

    //Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    if (
      lastKey === '+' ||
      lastKey === '-' ||
      lastKey === '*' ||
      lastKey === '/' ||
      lastKey === '%'
    )
      return;

    this.input += operator;
    this.calculate();
  }

  calculate() {
    if (!this.input) return;

    if (
      this.input.includes('+') ||
      this.input.includes('-') ||
      this.input.includes('*') ||
      this.input.includes('/') ||
      this.input.includes('%')
    ) {
      let doOperation = this.input;
      this.result = eval(doOperation);
    }
  }

  allClear() {
    this.input = '';
    this.result = '';
  }

  delete() {
    if (this.input !== '')
      this.input = this.input.substr(0, this.input.length - 1);
  }

  onGetResult() {
    this.calculate();
    this.input = this.result;
    this.result = '';
  }
}

/* 

this.input.indexOf('+')+1 ||
{this.input.indexOf("'-'")+1 ||
this.input.indexOf('*')+1 ||
this.input.indexOf('/')+1 ||
this.input.indexOf('%')+1

*/
