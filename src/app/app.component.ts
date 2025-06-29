import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { MyService } from '../my.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe,FormsModule,ChildComponent, CommonModule, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';

  name = signal('dilshan');

  // marks: number[] = [15,67,80,34,91,77];

  public formSubmit(form: NgForm){
    console.log("///",form)
  }

  fromChild(event: Event){
    console.log(event)
  }

  // constructor(private service:MyService){
    
  // }

  private service2 = inject(MyService);

  marks = this.service2.getmarks();
  // marksAsObs = this.service2.getMarksObs();
  marks2!:number[];

  ngOnInit(){
    // console.log("///",this.marksAsObs)
   this.service2.getMarksObs().subscribe((data)=>{
        this.marks2 = data;
    })

  }
}
