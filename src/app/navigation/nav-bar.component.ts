import { Component, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
    private toggleActions = new EventEmitter<string|MaterializeAction>();

    open() {
        this.toggleActions.emit({ action: 'sideNav', params: ['show']});
    }

    close() {
        this.toggleActions.emit({ action: 'sideNav', params: ['hide']});
    }
}
