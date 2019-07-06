import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-form',
  templateUrl: './some-form.component.html',
  styleUrls: ['./some-form.component.css']
})
export class SomeFormComponent {

  someText: string = "init value"

  onInputChange(event: Event) {
    /* explicit cast */
    this.someText = (<HTMLInputElement> event.target).value;
  }

}
