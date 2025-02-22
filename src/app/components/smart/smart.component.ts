import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-smart',
  imports: [CommonModule, FormsModule],
  templateUrl: './smart.component.html',
  styleUrl: './smart.component.scss'
})
export class SmartComponent {
  @Input() set inputFromDumb(value: EventEmitter<string>) {
    if ( !value ) return;
    value.subscribe({
      next: (value: string) => {
        this.list.push(Number(value));
      },
    });
  }

  @Input() set showNumber( value: EventEmitter<void> ) {
    if ( !value ) return;
    value.subscribe(() => this.showHighest());
  }

  private list: number[] = [];
  public highestNumber: number = 0;

  constructor() {}

  showHighest() {
    if ( !this.list.length ) return;
    this.highestNumber = this.list.reduce((a: number, b: number) => Math.max(a, b));
    console.log(this.highestNumber);
  }
}
