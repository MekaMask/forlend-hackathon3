import { Component } from '@angular/core';

@Component({
  selector: 'slotadd',
  templateUrl: 'slotadd.html'
})
export class SlotAddPage {

  public name:any;
  public row:any;
  public column:any;

  constructor() {
    
  }

  public Create(){
    console.log(this.name+this.row+this.column);
  }
}
