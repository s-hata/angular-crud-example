import { Component, EventEmitter } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

    private toggleActions = new EventEmitter<string|MaterializeAction>();

    open() {
        this.toggleActions.emit({ action: 'sideNav', params: ['show']});
    }

    close() {
        this.toggleActions.emit({ action: 'sideNav', params: ['hide']});
    }
}
