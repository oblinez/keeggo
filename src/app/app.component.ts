import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { SmartComponent } from "./components/smart/smart.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, SmartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Output() inputNumber: EventEmitter<string> = new EventEmitter<string>();
  @Output() showHighestNumber: EventEmitter<void> = new EventEmitter<void>();

  public inputContent: string = '';

  public send() {
    if ( !this.inputContent ) return;
    this.inputNumber.emit(this.inputContent);  
    this.inputContent = '';
  }

  public show() {
    this.showHighestNumber.emit();
  }

  filterNumbers(event: any) {
    const inputValue = event.target.value;
    event.target.value = inputValue.replace(/[^0-9]/g, ''); // Remove qualquer coisa que não seja número
  }
}
