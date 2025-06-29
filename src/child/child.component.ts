import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Output()
  trigger = new EventEmitter();

  onClick(){
    console.log("**")
    this.trigger.emit("abc from child")
  }

}
