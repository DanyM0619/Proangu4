import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent {
  
  countador: number;

    constructor() {
        console.log('constructor');     
        this.countador = 1;
    }

    inc(){
        console.log('inc');
        this.countador += 1;
    }

    ngOnInit(){
        console.log('ng on init');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy');
    }

    ngDoCheck(){
        console.log('ngDoCheck');
    }

    ngOnChanges(){
        console.log('ngOnChanges');
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit');
    }
    ngAfterViewChecked(){
        console.log('ngAfterViewChecked');
    }
}
