import { Component } from '@angular/core';

@Component({
  selector: 'slotmanage',
  templateUrl: 'slotmanage.html'
})
export class SlotmanagePage {

  public slots:any;

  constructor() {
    this.slots = [
      { "id": "s01", "name": "aa" },
      { "id": "s02", "name": "bb" },
    ]
  }

  itemTapped(event, item) {
  }
}
