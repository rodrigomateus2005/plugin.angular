import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib-two',
  template: `
    <p>
      my-lib-two works! hehehehe
    </p>
  `,
  styles: []
})
export class MyLibTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
